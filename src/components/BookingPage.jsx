import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Offers() {
  const services = [

    {
      id: "rooms",
      name: "Hotels",
      image: "/bg.jpg",
      description:
        ` 🏨 Hotel – Tanvi Premium Located in the heart of Gurgaon
Tanvi Premium offers stylish rooms, modern amenities, and warm hospitality for both business and leisure travelers. With comfortable accommodation, 24/7 services, and seamless connectivity, we ensure a stay that is both relaxing and productive.`,
    },
    {
      id: "resorts",
      name: "Resorts",
      image: "/bg.jpg",
      description:
        "🌴 Resort Escape into comfort at our resort space designed for leisure and relaxation. With greenery, open balconies, a swimming pool, and curated dining, it’s the perfect spot to unwind or celebrate special moments away from the city rush.”",
    },
    {
      id: "banquets",
      name: "Events & Ocassions",
      image: "/bg.jpg",
      description: "Our banquet hall is the perfect venue for weddings, receptions, parties, and corporate gatherings. Book an appointment to visit or give us a call for inquiries",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pb-20 px-6 border-4 min-h-screen "
      style={{
        backgroundImage: "url('/bgcontact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}


    >
      <h2 className="text-5xl md:text-6xl pt-15 font-bold text-center text-yellow-300 mb-12 drop-shadow-md font-Kenao">
        WHAT WE OFFER
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-Bricolage  ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center w-full group bg-yellow-50 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Card Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full rounded-t-lg border-b-4 border-yellow-900 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Description */}
            <div
              className={`
                px-4 text-yellow-900 transition-[max-height,opacity] duration-300
                overflow-hidden
                ${isMobile ? "max-h-full opacity-100 py-4" : "max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:py-4"}
              `}
            >
              {service.description}
            </div>

            {/* Book Button */}
            <Link
              to={`/booking/${service.id}`}
              className="
                mt-auto w-full text-center
                py-4 px-6
                bg-[#0B1A33] text-yellow-300
                text-2xl md:text-3xl font-semibold
                rounded-b-lg
                hover:bg-blue-800
                transition
              "
            >
              {service.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
