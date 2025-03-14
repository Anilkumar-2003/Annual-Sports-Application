import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, ArrowRight, Award, Target, Gift, PartyPopper } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // Popup remains until user clicks "OK"

  useEffect(() => {
    if (!showPopup) {
      setIsVisible(true); // Show homepage only after popup is closed
    }
  }, [showPopup]);

  const highlights = [
    { icon: <Award className="w-7 h-5" />, title: "Multiple Sports Categories", description: "A variety of sports to showcase your skills" },
    { icon: <Target className="w-7 h-5" />, title: "Competitive Matches", description: "Engage in thrilling competitions and friendly games" },
    { icon: <Gift className="w-7 h-5" />, title: "Exciting Prizes", description: "Win medals, trophies, and recognition for your achievements" },
    { icon: <PartyPopper className="w-7 h-5" />, title: "Fun-filled Activities", description: "Enjoy entertainment, celebrations, and memorable experiences" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-lg font-semibold text-indigo-600">📢 Exciting Update! 🎉</h2>
            <p className="text-gray-600 mt-2">
              A new game for girls – <span className="font-bold">Kho Kho 🏃‍♀</span> has been added to the tournament lineup!  
              Get ready to showcase your speed, agility, and teamwork in this thrilling event.
            </p>
            <p className="text-red-500 font-semibold mt-3">🔹 Important Reminder:</p>
            <p className="text-gray-600">📅 Last date for all event registrations: <span className="font-bold">14-03-2025 ⏳</span></p>
            <button onClick={() => setShowPopup(false)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Content - Only Visible After Popup Closes */}
      {!showPopup && (
        <div className={`max-w-4xl w-full text-center space-y-10 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Trophy Icon */}
          <div className="flex justify-center mt-12 animate-bounce">
            <Trophy className="w-16 h-16 text-indigo-600" />
          </div>

          {/* Title and Details */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-60 to-purple-600 text-transparent bg-clip-text">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-60 to-purple-600 text-transparent bg-clip-text">
              SIR C R REDDY COLLEGE OF ENGINEERING
            </h1>
            <h2>Department of Computer Science and Engineering</h2>
            <h2>(CSE, AIDS, AIML, CS)</h2>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Annual Sports Day 2025
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for an exciting day filled with sports, competition, and celebration! This is your chance to showcase your skills, compete with fellow students, and experience the thrill of sportsmanship.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500">Registration closes on March 13th, 2025</p>

          {/* Register Button */}
          <div className="space-y-5 mt-100">
            <button onClick={() => navigate("/select-category")} className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="w-full text-center py-4 mt-150">
        <p className="text-gray-600 text-sm">Developed by <span className="font-semibold text-indigo-600">V ANILKUMAR & PRASAD K</span></p>
      </footer>
    </div>
  );
}
