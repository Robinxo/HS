export default function Footer() {
  return (
    <footer className='bg-[#0B1A33] text-white relative'>
      {/* Main Content */}
      <div className=' mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 font-Bricolage '>
        {/* Left Section */}
        <div>
          <h2 className='text-2xl font-bold'>TANVI GROUP Hotels & Resort</h2>
          <p className='text-sm text-gray-300 uppercase tracking-wide mt-1'>
            Indian Warmth, Global Standards
          </p>
          <p className='mt-4 text-gray-300 leading-relaxed'>
            WELCOME TO TANVI GROUPS, WHERE COMFORT MEETS ELEGANCE IN THE HEART
            OF GURGAON AND AMIDST THE SERENE LANDSCAPES OF THE ARAVALLI HILLS.
          </p>
        </div>

        {/* Right Section */}
        <div className='md:text-right'>
          <h3 className='text-gray-300 uppercase text-sm font-semibold'>
            Contact Information
          </h3>
          <p className='mt-2'>
            Phone:{' '}
            <a
              href='tel:+919821841112'
              className='hover:text-blue-400 transition'
            >
              +91 9821841112
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href='mailto:tanvipremiumgroup@gmail.com'
              className='hover:text-blue-400 transition'
            >
              tanvipremiumgroup@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className='absolute right-8 transform -translate-y-1/2'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='bg-pink-200 text-black p-3 rounded shadow hover:bg-pink-300 transition'
        >
          ↑
        </button>
      </div>

      {/* Bottom Bar */}
      <div className='bg-[#0B1A33] text-center py-3 text-sm text-white font-Bricolage '>
        © 2025 Tanvi group. All Rights Reserved.
      </div>
    </footer>
  );
}
