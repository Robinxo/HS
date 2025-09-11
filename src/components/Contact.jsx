import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="text-yellow-400 px-6 pt-15 py-86 md:px-16 lg:px-24"
      style={{
        backgroundImage: "url('/bgcontact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-10 font-Bricolage text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          TANVI GROUP&apos;s{" "}
          <span className="block text-3xl md:text-5xl text-yellow-300">
            Hotels & Resorts
          </span>
        </h2>
        <p className="italic text-gray-300 mt-2 text-sm md:text-base">
          "We&apos;re here to help make your stay unforgettable!"
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-8 max-w-2xl text-left">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Phone:</h3>
            <p className="text-gray-200">
              Call us anytime at{" "}
              <a href="tel:+919876543210" className="underline">
                +91-98765-43210
              </a>
            </p>
            <p className=" text-sm text-yellow-500">
              We&apos;re available 24/7
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Email:</h3>
            <p className="text-gray-200">
              For inquiries or reservations, email us at{" "}
              <a
                href="mailto:tanvipremiumgroup@gmail.com"
                className="underline text-yellow-300"
              >
                tanvipremiumgroup@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Instagram className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Email:</h3>
            <p className="text-gray-200">
              Follow us here on here{" "}
              <a
                href="mailto:tanvipremiumgroup@gmail.com"
                className="underline text-yellow-300"
              >
                tanvipremiumgroup@gmail.com
              </a>
            </p>
          </div>
        </div>




        {/* Address */}
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Hotel address:</h3>
            <p className="text-gray-200 font-bold text-2xl">
              TAJ PREMIUM RESIDENCY <br />
            </p>
            <p className="text-gray-200 ">
              Plot No 38, Block C, Uday Nagar, Sector 45, Gurugram, Haryana
              122001
            </p>
            <a
              href="https://maps.app.goo.gl/C5jaP8shxVBvjhZg9"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 underline text-yellow-300"
            >
              Find us near ISKCON Temple Gurugram Sec-45
            </a>
            <h3 className="font-semibold text-lg mt-4">Resort address:</h3>
            <p className="text-gray-200 font-bold text-2xl">
              WILD VIEW CAFE <br />
            </p>
            <p className="text-gray-200 ">
              Garat Pur Bas, Gurugram, Haryana 122001
            </p>
            <a
              href="https://maps.app.goo.gl/t8ogxPhSt3KScoda9"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 underline text-yellow-300"
            >
              Find us here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
