import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { DateRange } from "react-date-range";
import { Calendar, Crown } from "lucide-react";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const normalizeRange = (value) => {
  const now = new Date();
  const defaultRange = [
    { startDate: now, endDate: addDays(now, 1), key: "selection" },
  ];

  if (!value || !Array.isArray(value) || !value[0]) return defaultRange;

  const s = value[0].startDate ? new Date(value[0].startDate) : now;
  const e = value[0].endDate ? new Date(value[0].endDate) : s;
  return [{ startDate: s, endDate: e, key: "selection" }];
};

const getNightsFromRange = (range) => {
  if (!range || !Array.isArray(range) || !range[0]) return 0;
  const s = new Date(range[0].startDate);
  const e = new Date(range[0].endDate);
  const diff = e - s;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};

/* ---------- DateRangePicker (modal) ---------- */
export function DateRangePickerModal({ value, onChange }) {
  const [tempRange, setTempRange] = useState(() => normalizeRange(value));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTempRange(normalizeRange(value));
  }, [value]);

  const start = tempRange?.[0]?.startDate;
  const end = tempRange?.[0]?.endDate;
  const label =
    start && end
      ? `${format(start, "dd MMM yyyy")} → ${format(end, "dd MMM yyyy")}`
      : "Select dates";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-blue-400 font-semibold text-[#0B1A33] shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="button"
      >
        <Calendar className="w-5 h-5 text-blue-500" />
        <span className="whitespace-nowrap">{label}</span>
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-lg">
            <Dialog.Title className="text-lg font-bold mb-4 text-[#0B1A33]">
              Select Dates
            </Dialog.Title>

            <DateRange
              editableDateInputs={true}
              onChange={(item) => setTempRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={tempRange}
              rangeColors={["#facc15"]}
              minDate={new Date()}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
                type="button"
              >
                Cancel
              </button>

              <button
                className="bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
                onClick={() => {
                  onChange && onChange(tempRange);
                  setOpen(false);
                }}
                type="button"
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default function HotelRooms() {
  const defaultRange = normalizeRange();
  const [deluxeRange, setDeluxeRange] = useState(defaultRange);
  const [premiumRange, setPremiumRange] = useState(defaultRange);

  const deluxePrice = 5999;
  const premiumPrice = 7999;

  const deluxeNights = getNightsFromRange(deluxeRange);
  const premiumNights = getNightsFromRange(premiumRange);

  return (
    <section
      className="py-12 px-6 text-white min-h-screen"
      style={{
        backgroundImage: "url('/aboutBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden animate-pulse-glow">
          <img
            src="/deluxe.png"
            alt="Deluxe Room"
            className="md:w-1/2 object-cover"
          />
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Deluxe Rooms</h3>
              <p className="font-semibold mb-2">Amenities</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Designed for comfort and convenience</li>
                <li>Modern interiors with essential amenities</li>
                <li>Perfect for short stays or business travelers</li>
                <li>Includes complimentary breakfast & dinner</li>
                <li>Best suited for guests who want a cozy, affordable, and comfortable stay</li>
              </ul>

              <div className="mt-4">
                <DateRangePickerModal
                  value={deluxeRange}
                  onChange={setDeluxeRange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="text-sm opacity-80">Per night</p>
                <p className="text-2xl font-bold">₹{deluxePrice}/-</p>
                {deluxeNights > 0 && (
                  <p className="text-sm italic">
                    Total: ₹{deluxePrice * deluxeNights} ({deluxeNights} night
                    {deluxeNights > 1 ? "s" : ""})
                  </p>
                )}
              </div>

              <button className="bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-full font-bold hover:bg-yellow-300 shadow">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-yellow-200 to-yellow-300 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden animate-pulse-glow">
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Crown className="text-yellow-500 w-6 h-6" />
                Premium Rooms
              </h3>
              <p className="font-semibold mb-2">Ultimate Experience</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Spacious layout with elegant décor</li>
                <li>Upgraded furnishings & premium bedding</li>
                <li>Extra seating/workspace for business use</li>
                <li>Enhanced in-room facilities (mini-bar / kettle set / TV etc.)</li>
                <li>Includes complimentary breakfast & dinner</li>
                <li>Best suited for guests seeking more space, luxury, and a refined stay experience.</li>
              </ul>

              <div className="mt-4">
                <DateRangePickerModal
                  value={premiumRange}
                  onChange={setPremiumRange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="text-sm opacity-80">Per night</p>
                <p className="text-2xl font-bold">₹{premiumPrice}/-</p>
                {premiumNights > 0 && (
                  <p className="text-sm italic">
                    Total: ₹{premiumPrice * premiumNights} ({premiumNights}{" "}
                    night{premiumNights > 1 ? "s" : ""})
                  </p>
                )}
              </div>

              <button className="bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-full font-bold hover:bg-yellow-300 shadow">
                Book Now
              </button>
            </div>
          </div>

          <img
            src="/premium.png"
            alt="Premium Room"
            className="md:w-1/2 object-cover"
          />
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-yellow-400 text-center">
            Our Location
          </h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.3584801092425!2d77.0656509399414!3d28.438608169555664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b05ea6c083%3A0x9c0f6cbd1a0b53!2sCollection%20O%20Tanvi%20Premium%20Residency!5e0!3m2!1sen!2sin!4v1757254024709!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
