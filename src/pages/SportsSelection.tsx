
import { useNavigate } from 'react-router-dom';
// import { Scale as Male, Scale as Female } from 'lucide-react';
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

export default function SportsSelection() {
  const navigate = useNavigate();

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Select Your Category
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => navigate('/sports/male')}
            className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center space-y-4">
              <FaMale className="w-16 h-16 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Male Sports</h3>
              <p className="text-gray-600 text-center">
                Access all sports events available for male participants
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => navigate('/sports/female')}
            className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center space-y-4">
              <FaFemale className="w-16 h-16 text-pink-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Female Sports</h3>
              <p className="text-gray-600 text-center">
                Access all sports events available for female participants
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
      </div>
      {/* Footer Section */}
      <footer className="w-full text-center py-3 mt-1">
        <p className="text-gray-600 text-sm">Developed by <span className="font-semibold text-indigo-600">V ANILKUMAR & PRASAD K</span></p>
      </footer>
    </div>
  );
}
