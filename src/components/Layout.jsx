import Navbar from './Navbar.jsx';
import Testimonials from './Reviews.jsx';
import Footer from './footer.jsx';
import WhatsAppBubble from './WhatsappWidget.jsx';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <WhatsAppBubble
        phone='919876543210'
        message='Hello, I need help with a booking.'
        showBadge
      />
      <Testimonials />
      <Footer />
    </div>
  );
}
