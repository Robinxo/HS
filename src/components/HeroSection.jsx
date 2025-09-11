import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col items-center justify-center text-white flex-1 bg-cover bg-top min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 py-12 font-Bricolage">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-[3px_2px_0px_rgba(0,0,0,0.8)]">
          TANVI GROUP&apos;s
        </h2>
        <h1 className="text-6xl md:text-9xl font-extrabold text-yellow-400 drop-shadow-[4px_2px_0px_rgba(0,0,0,0.8)] mb-4">
          Hotels & Resorts
        </h1>
        <span className="block text-lg md:text-xl max-w-4xs mx-auto mt-4 text-yellow-400">
          At <strong>Tanvi Premium</strong>, we offer more than just a place to stay — we create experiences defined by comfort, care, and heartfelt hospitality. Whether you're traveling for business or leisure, our commitment is to make every moment memorable. With personalized service, modern amenities, and a warm, welcoming atmosphere, we strive to feel like home — and better.

          <br /><br />
          <em>— Director, Tanvi Premium Hotel & Resort</em>
        </span>

        <div className="w-24 md:w-60 h-1 bg-yellow-400 mx-auto mb-8 drop-shadow-[3px_2px_0px_rgba(0,0,0,0.8)]"></div>
        <button
          onClick={() => navigate("/booking")}
          className="bg-yellow-400 text-[#0B1A33] font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Book your stay now
        </button>
      </div>
    </div>
  );
}
