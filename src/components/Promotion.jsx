import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    id: 1,
    img: '/aboutBG.png',
    title: 'Flexible Customization',
    desc: 'Make your own package with flexible times, Meals, Transport, Banquets, Conference & Meeting rooms in Gurgaon.',
    ribbon: 'Chat Now',
  },
  {
    id: 2,
    img: '/aboutBG.png',
    title: 'Luxury Living',
    desc: 'Enjoy premium comfort with our modern facilities in Gurgaon.',
    ribbon: 'Book Now',
  },
  {
    id: 3,
    img: '/aboutBG.png',
    title: 'Exclusive Offers',
    desc: 'Grab the latest limited-time deals crafted just for you.',
    ribbon: 'Offer',
  },
];

export default function PromoCarousel() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='relative w-full max-w-9xl mx-auto bg-[#0B1A33] overflow-hidden py-8'>
      <h1 className='text-yellow-300 font-bold text-5xl font-Bricolage  py-10 px-10'>
        EXCLUSIVELY FOR YOU
      </h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className='px-2'>
            <div className='relative flex flex-col rounded-lg overflow-hidden shadow-lg bg-white'>
              {/* Ribbon */}
              {card.ribbon && (
                <div className='absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-md'>
                  {card.ribbon}
                </div>
              )}

              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className='w-full h-80 object-cover'
              />

              {/* Content */}
              <div className='flex-1 flex flex-col justify-center items-center p-6 text-center bg-gradient-to-b from-white/90 to-white'>
                <h3 className='text-2xl font-semibold text-gray-800'>
                  {card.title}
                </h3>
                <p className='text-gray-600 mt-3'>{card.desc}</p>
                <button className='mt-6 px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-600 transition'>
                  <a href='https://wa.me/+919821841112'>Drop a message now!</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
