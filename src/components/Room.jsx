import { Crown } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Deluxeimages = [
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
];
export const Premiumimages = [
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
  {
    src: '/deluxe.png',
    alt: 'Deluxe Room',
    className: 'md:w-1/2 object-cover',
  },
];

export default function HotelRooms() {
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
        backgroundImage: "url('/aboutBG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-5xl mx-auto space-y-10'>
        {/* Deluxe Room */}
        <div className='flex flex-col md:flex-row bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden animate-pulse-glow'>
          <div className='md:w-1/2'>
            <Slider {...settings}>
              {Deluxeimages.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-95 object-cover'
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className='flex-1 p-6 flex flex-col justify-between'>
            <div>
              <h3 className='text-2xl font-bold mb-3'>Deluxe Rooms</h3>
              <p className='font-semibold mb-2'>Amenities</p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>Designed for comfort and convenience</li>
                <li>Modern interiors with essential amenities</li>
                <li>Perfect for short stays or business travelers</li>
                <li>Includes complimentary breakfast & dinner</li>
                <li>
                  Best suited for guests who want a cozy, affordable, and
                  comfortable stay
                </li>
              </ul>
            </div>

            <div className='flex justify-end mt-6'>
              <button className='bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-full font-bold hover:bg-yellow-300 shadow '>
                <a href='https://wa.me/+919821841112'>Book now</a>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Room */}
        <div className='flex flex-col md:flex-row bg-gradient-to-r from-yellow-200 to-yellow-300 text-[#0B1A33] rounded-2xl shadow-xl overflow-hidden animate-pulse-glow'>
          <div className='flex-1 p-6 flex flex-col justify-between'>
            <div>
              <h3 className='text-2xl font-bold mb-3 flex items-center gap-2'>
                <Crown className='text-yellow-500 w-6 h-6' />
                Premium Rooms
              </h3>
              <p className='font-semibold mb-2'>Ultimate Experience</p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>Spacious layout with elegant décor</li>
                <li>Upgraded furnishings & premium bedding</li>
                <li>Extra seating/workspace for business use</li>
                <li>
                  Enhanced in-room facilities (mini-bar / kettle set / TV etc.)
                </li>
                <li>Includes complimentary breakfast & dinner</li>
                <li>
                  Best suited for guests seeking more space, luxury, and a
                  refined stay experience.
                </li>
              </ul>
            </div>

            <div className='flex justify-end mt-6'>
              <button className='bg-yellow-400 text-[#0B1A33] px-5 py-2 rounded-full font-bold hover:bg-yellow-300 shadow'>
                <a href='https://wa.me/+919821841112'>Book now</a>
              </button>
            </div>
          </div>

          <div className='md:w-1/2'>
            <Slider {...settings}>
              {Premiumimages.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-95 object-cover'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
