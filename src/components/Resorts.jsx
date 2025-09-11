import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Calendar, Clock, Crown } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

/* ---------- Resort Time Slot Picker (modal) ---------- */
function ResortSlotModal({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());
  const [slot, setSlot] = useState(value?.slot || "");

  const label =
    value && value.date && value.slot
      ? `${format(new Date(value.date), "dd MMM yyyy")} • ${value.slot}`
      : "Select date & slot";

  const timeSlots = [
    "Morning (9 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 8 PM)",
    "Full Day (9 AM - 8 PM)",
  ];

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
              Select Reservation
            </Dialog.Title>

            <DateRange
              onChange={(item) => setTempDate(item.selection.startDate)}
              moveRangeOnFirstSelection={false}
              ranges={[
                { startDate: tempDate, endDate: tempDate, key: "selection" },
              ]}
              rangeColors={["#facc15"]}
              minDate={new Date()}
            />

            <div className="mt-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-500" /> Choose Time Slot
              </p>
              <div className="grid grid-cols-1 gap-2">
                {timeSlots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition ${slot === s
                      ? "bg-yellow-400 text-[#0B1A33] font-bold shadow"
                      : "bg-gray-50 hover:bg-gray-100"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
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
                  if (slot) {
                    onChange && onChange({ date: tempDate, slot });
                    setOpen(false);
                  }
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

/* ---------- Resort Reservation ---------- */
export default function ResortReservation() {
  const [gardenResort, setGardenResort] = useState(null);
  const [premiumResort, setPremiumResort] = useState(null);

  const gardenPrice = {
    "Morning (9 AM - 12 PM)": 3999,
    "Afternoon (12 PM - 4 PM)": 4999,
    "Evening (4 PM - 8 PM)": 5999,
    "Full Day (9 AM - 8 PM)": 9999,
  };

  const premiumPrice = {
    "Morning (9 AM - 12 PM)": 8999,
    "Afternoon (12 PM - 4 PM)": 9999,
    "Evening (4 PM - 8 PM)": 10999,
    "Full Day (9 AM - 8 PM)": 14999,
  };

  const getPrice = (selection, prices) =>
    selection && selection.slot ? prices[selection.slot] : null;

  return (
    <section
      className="py-12 px-6 text-white min-h-screen"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-7xl font-Kenao font-extrabold text-center mb-12 text-yellow-400 drop-shadow-lg">
        RESORT RESERVATION
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden">
          <img
            src="/gardenResort.png"
            alt="Garden Resort"
            className="md:w-1/2 object-cover"
          />
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Garden Resort</h3>
              <p className="font-semibold mb-2">Amenities</p>
              <ul className="list-disc pl-6 space-y-1">
                <li> Spacious rooms with balconies & scenic views </li>
                <li>Swimming pool with lounge area </li>
                <li>Multi-cuisine dining & in-room service </li>
                <li>Lush green outdoor spaces for relaxation </li>
                <li>Event & party space (75–100 pax) </li>
                <li>Airport pickup & drop service </li>
                <li>24/7 power backup & high-speed Wi-Fi </li>
                <li>Ample parking space </li>
                <li>Professional housekeeping & room service </li>
              </ul>

              <div className="mt-4">
                <ResortSlotModal
                  value={gardenResort}
                  onChange={setGardenResort}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="text-sm opacity-80">Selected Slot</p>
                {gardenResort && (
                  <p className="text-sm italic">
                    {format(new Date(gardenResort.date), "dd MMM yyyy")} •{" "}
                    {gardenResort.slot}
                  </p>
                )}
                <p className="text-2xl font-bold">
                  {getPrice(gardenResort, gardenPrice)
                    ? `₹${getPrice(gardenResort, gardenPrice)}/-`
                    : "Select slot"}
                </p>
              </div>

              <button className="bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-full font-bold hover:bg-yellow-300 shadow">
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-yellow-400 text-center">
            Our Location
          </h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.05412466730337!2d76.99514173232599!3d28.34007227466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3da2531a6e3b%3A0x169218351b1007fb!2sWILD%20VIEW%20CAFE!5e0!3m2!1sen!2sin!4v1757331092486!5m2!1sen!2sin"
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
