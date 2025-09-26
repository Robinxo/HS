import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Resortimages = [
  {
    src: '/aboutBG.png',
    alt: 'Garden Resort',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/aboutBG.png',
    alt: 'Garden Resort',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/aboutBG.png',
    alt: 'Garden Resort',
    className: 'md:w-1/2 object-cover',
  },
];

export default function ResortReservation() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '1px',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className='py-12 px-6 text-white min-h-screen'
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className='text-7xl font-Kenao font-extrabold text-center mb-12 text-yellow-400 drop-shadow-lg'>
        RESORT RESERVATION
      </h2>

      <div className='max-w-5xl mx-auto space-y-10'>
        {/* Garden Resort Card */}
        <div className='flex flex-col md:flex-row bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden'>
          <div className='md:w-1/2'>
            <Slider {...settings}>
              {Resortimages.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-105 object-cover'
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className='flex-1 p-6 flex flex-col justify-between'>
            <div>
              <h3 className='text-2xl font-bold mb-3'>Garden Resort</h3>
              <p className='font-semibold mb-2'>Amenities</p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>Spacious rooms with balconies & scenic views</li>
                <li>Swimming pool with lounge area</li>
                <li>Multi-cuisine dining & in-room service</li>
                <li>Lush green outdoor spaces for relaxation</li>
                <li>Event & party space (75–100 pax)</li>
                <li>Airport pickup & drop service</li>
                <li>24/7 power backup & high-speed Wi-Fi</li>
                <li>Ample parking space</li>
                <li>Professional housekeeping & room service</li>
              </ul>
            </div>

            <div className='flex justify-end mt-6'>
              <button className='bg-yellow-400 text-[#0B1A33] px-6 py-2 rounded-full font-bold hover:bg-yellow-300 shadow transition'>
                <a href='https://wa.me/+919821841112'>Book Now</a>
              </button>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className='mt-12 max-w-5xl mx-auto'>
          <h3 className='text-3xl font-bold mb-4 text-yellow-400 text-center'>
            Our Location
          </h3>
          <div className='w-full h-96 rounded-2xl overflow-hidden shadow-lg'>
            <iframe
              title='Hotel Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.05412466730337!2d76.99514173232599!3d28.34007227466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3da2531a6e3b%3A0x169218351b1007fb!2sWILD%20VIEW%20CAFE!5e0!3m2!1sen!2sin!4v1757331092486!5m2!1sen!2sin'
              width='100%'
              height='100%'
              className='border-0'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
