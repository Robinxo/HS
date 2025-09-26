import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react'; // icon library (lucide-react)
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppBubble() {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {/* Chat Bubble */}
      {open ? (
        <div className='w-80 rounded-xl shadow-lg overflow-hidden bg-white'>
          {/* Header */}
          <div className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white'>
            <div className='flex flex-row '>
              <img src='/Logo.png' alt='' className='w-15 pr-2' />
              <div className='flex-flex-col'>
                <h1 className='font-semibold text-lg'>Tanvi Groups</h1>
                <span className='text-sm opacity-90'>Online</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className='w-5 h-5' />
            </button>
          </div>

          <div className='px-4 py-3 bg-gray-50'>
            <div className='bg-white shadow rounded-lg px-3 py-2 inline-block'>
              <p className='font-semibold'>Chanda</p>
              <p className='text-gray-600 text-sm'>
                Hey, how can I help you today?
              </p>
              <span className='text-xs text-gray-400 block text-right mt-1'>
                {hours}:{minutes}
              </span>
            </div>
          </div>

          <div className='px-4 py-3 bg-gray-100'>
            <a
              href='https://wa.me/+919821841112'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full py-2 transition'
            >
              <FaWhatsapp className='w-5 h-5' />
              Live Chat
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className='relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition'
        >
          <FaWhatsapp className='w-7 h-7 text-white' />
          <span className='absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full'></span>
        </button>
      )}
    </div>
  );
}

export default WhatsAppBubble;
