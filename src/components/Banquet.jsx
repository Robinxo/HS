import { Phone } from 'lucide-react';

export default function BanquetBooking() {
  return (
    <section
      className='py-12 px-6 text-white min-h-screen'
      style={{
        backgroundImage: "url('/banquetBG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className='text-7xl font-Kenao font-extrabold text-center mb-12 text-yellow-400 drop-shadow-lg'>
        Events & Occasions
      </h2>

      <div className='max-w-4xl mx-auto bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#0B1A33] rounded-2xl shadow-xl p-8'>
        <h3 className='text-2xl font-bold mb-4'>Plan Your Event With Us</h3>
        <p className='mb-6'>
          Our elegant event space can host 75 to 100 guests, ideal for corporate
          meetings, conferences, intimate weddings, and private parties.
          Equipped with modern facilities and supported by professional service,
          we make every occasion memorable.
        </p>

        <div className='flex flex-col sm:flex-row gap-6'>
          {/* Book Now Button */}
          <button className='flex items-center justify-center gap-2 bg-yellow-400 text-[#0B1A33] px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition'>
            <a href='https://wa.me/+919821841112'>Book now</a>
          </button>

          {/* Call Us Button */}
          <a
            href='tel:+919821841112'
            className='flex items-center justify-center gap-2 bg-yellow-400 text-[#0B1A33] px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition'
          >
            <Phone className='w-5 h-5' />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
