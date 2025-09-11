export default function AboutUs() {

  return (
    <section
      className="relative min-h-screen py-20 px-6"
      style={{
        backgroundImage: "url('/aboutBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="bg-yellow-50 rounded-xl shadow-lg border border-yellow-300 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-center text-yellow-900 mb-6 relative">
            ABOUT US
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
          </h2>

          <p className="text-center text-sm font-semibold text-yellow-900 mb-6">
            WELCOME TO TANVI GROUPS, WHERE COMFORT MEETS ELEGANCE IN THE HEART
            OF GURGAON AND AMIDST THE SERENE LANDSCAPES OF THE ARAVALLI HILLS.
          </p>

          <ul className="space-y-6 text-yellow-900 text-lg leading-relaxed">
            <li>
              <span className="font-bold">🏨 Hotel in Gurgaon –</span> Ideally
              located for business and leisure travelers, our hotel provides
              modern amenities, well-appointed rooms, and warm hospitality for a
              seamless stay in the city.
            </li>
            <li>
              <span className="font-bold">🌴 Resort by the Aravallis –</span>{" "}
              Escape to tranquility at our scenic resort surrounded by the lush
              Aravalli Hills. Designed for relaxation and rejuvenation, it’s the
              perfect getaway for families, couples, and groups.
            </li>
            <li>
              <span className="font-bold">🎉 Banquets & Events –</span> From
              corporate meetings to grand celebrations, our spacious banquet
              venues are equipped to host memorable events with customized
              services.
            </li>
          </ul>

          <p className="mt-6 text-center italic text-gray-700">
            At Tanvi Groups, we take pride in offering personalized experiences,
            exceptional service, and spaces that suit every occasion—whether
            it’s business, leisure, or celebration.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-yellow-50 rounded-3xl shadow-lg border border-yellow-300 p-10 max-w-md mx-auto text-center">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="w-60 h-70 object-cover rounded-full shadow-xl border-4 border-yellow-800"
          />

          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-yellow-900">
            Mr. Mukesh Rajput
          </h3>

          <p className="text-gray-700 italic text-sm mb-2">👔 Operations Head</p>

          <p className="text-yellow-900 text-base leading-relaxed">
            With extensive experience in the hospitality industry, Mr. Mukesh Rajput leads our operations with a focus on excellence, efficiency, and guest satisfaction. His expertise ensures the smooth, day-to-day functioning of our hotels and resorts, all while upholding the highest standards of service and comfort for every guest.
          </p>
        </div>
      </div>
    </section>
  );
}
