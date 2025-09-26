import Divider1 from '../SVG/Divider1.jsx';
import Divider2 from '../SVG/Divider2.jsx';
import { Resortimages } from '../components/Resorts.jsx';
import { Premiumimages, Deluxeimages } from '../components/Room.jsx';
import { Banquetimages } from '../components/Banquet.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ResortLayout() {
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
    <div className='min-h-64 bg-[#0a1a36] flex flex-col items-center relative '>
      <div className='relative z-10 w-full flex justify-center items-center py-6 md:py-10 px-4 text-center'>
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
          <h1 className='text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest font-Bricolage'>
            TANVI GROUP HOTEL
            {console.log(Resortimages)}
          </h1>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
        </div>
      </div>

      <div className='relative z-10 rounded-3xl p-1 flex flex-col md:flex-row gap-6 md:gap-4 w-11/12 max-w-7xl font-Bricolage justify-center'>
        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/3 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Premiumimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-100 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              PREMIUM ROOM
            </p>
            <p className='text-sm sm:text-base leading-relaxed mt-1 px-2'>
              Indulge in the ultimate luxury with our Premium Rooms, offering
              unmatched comfort and sophisticated style. Perfect for those who
              crave a lavish retreat with exclusive amenities.
            </p>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/rooms'>Visit</a>
            </button>
          </div>
        </div>

        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/3 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Deluxeimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-100 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              DELUXE ROOM
            </p>
            <p className='text-sm sm:text-base leading-relaxed mt-1 px-2'>
              Unwind in the spacious and elegantly designed Deluxe Rooms, where
              comfort meets modern sophistication. A perfect blend of style,
              space, and serene ambiance for your perfect stay.
            </p>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/rooms'>Visit</a>
            </button>
          </div>
        </div>
      </div>
      <Divider1 />
      {/* Resort Section */}
      <div className='relative z-10 w-full flex justify-center items-center py-6 md:py-10 px-4 text-center'>
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
          <h1 className='text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest font-Bricolage'>
            TANVI GROUP RESORT
          </h1>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
        </div>
      </div>

      <div className='z-10 rounded-3xl p-1 flex flex-col md:flex-row gap-6 md:gap-4 w-11/12 max-w-5xl font-Bricolage justify-center'>
        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/2 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Resortimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-120 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              RESORT
            </p>
            <ul className='list-disc pl-6 text-sm sm:text-base space-y-1 mt-1 px-2 text-left'>
              <li>
                Escape to paradise where luxury meets nature, and every moment
                feels like a serene getaway.
              </li>
              <li>
                Indulge in tranquility and adventure at our resort, your perfect
                retreat from the everyday.
              </li>
            </ul>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/resorts '>Visit</a>
            </button>
          </div>
        </div>

        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/2 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Resortimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-120 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              CAFE
            </p>
            <ul className='list-disc pl-6 text-sm sm:text-base space-y-1 mt-1 px-2 text-left'>
              <li>
                Savor every sip with panoramic views of the Aravalli Hills,
                where nature and comfort blend seamlessly.
              </li>
              <li>
                Nestled in the heart of the Aravallis, our open-view cafe offers
                a taste of serenity with every bite.
              </li>
            </ul>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/resorts '>Visit</a>
            </button>
          </div>
        </div>
      </div>
      <Divider2 />
      {/* Banquet Section */}
      <div className='relative z-10 w-full flex justify-center items-center py-6 md:py-10 px-4 text-center'>
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
          <h1 className='text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest font-Bricolage'>
            TANVI GROUP BANQUET
          </h1>
          <span className='hidden md:block w-24 h-[3px] bg-yellow-400 rounded-full'></span>
        </div>
      </div>

      <div className='z-10 rounded-3xl p-1 flex flex-col md:flex-row gap-6 md:gap-4 w-11/12 max-w-5xl font-Bricolage justify-center'>
        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/2 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Banquetimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-120 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              BANQUET HALLS
            </p>
            <ul className='list-disc pl-6 text-sm sm:text-base space-y-1 mt-1 px-2 text-left'>
              <li>
                Host your next meeting or gathering in our elegant banquet hall,
                designed for productivity and connection.
              </li>
              <li>
                Perfect for intimate meetings and small gatherings, our banquet
                hall combines comfort, style, and versatility.
              </li>
            </ul>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/banquets'>Visit</a>
            </button>
          </div>
        </div>

        <div className='bg-yellow-400 rounded-2xl p-2 w-full md:w-1/2 text-center text-yellow-500'>
          <div className='bg-[#0a1a36] flex flex-col items-center rounded-2xl py-4 px-2'>
            <div className='w-full aspect-square bg-white rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                {Banquetimages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-120 object-cover'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p className='text-lg sm:text-xl leading-relaxed font-bold text-left mt-3'>
              ROOFTOP BANQUET
            </p>
            <ul className='list-disc pl-6 text-sm sm:text-base space-y-1 mt-1 px-2 text-left'>
              <li>
                Enjoy breathtaking rooftop views in a vibrant open-air
                atmosphere for unforgettable events.
              </li>
              <li>
                Celebrate in an elegant rooftop setting that blends style,
                luxury, and exclusivity.
              </li>
            </ul>
            <button className='bg-yellow-400 text-[#0B1A33] px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-yellow-300 mt-4'>
              <a href='/booking/banquets'>Visit</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
