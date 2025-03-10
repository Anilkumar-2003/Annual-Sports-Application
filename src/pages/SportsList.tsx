// import React from 'react';
import { useParams } from 'react-router-dom';
// import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const sportsData = {
  male: [
    {
      id: 1,
      name: 'Cricket',
      // time: '3:30 PM',
      // venue: 'Jump Area',
      image: 'https://i.postimg.cc/269ksY36/cricket.jpg',
      formLink: 'https://forms.gle/ME9m23Fd3FjSZMcL8'
    },
    {
      id: 2,
      name: 'Badminton',
      // time: '9:00 AM',
      // venue: 'Main Track',
      image: 'https://i.postimg.cc/rpdQ1CWP/Badminton-1-M.jpg',
      formLink: 'https://forms.gle/h9nS2eAFTUgHeRkC9'
    },
    {
      id: 3,
      name: 'Chess',
      // time: '10:30 AM',
      // venue: 'Main Track',
      image: 'https://i.postimg.cc/ydcj51Lh/chess.jpg',
      formLink: 'https://forms.gle/2JXVoc3hNQrjSSiK6'
    },
    {
      id: 4,
      name: 'Carroms',
      // time: '11:00 AM',
      // venue: 'Jump Pit',
      image: 'https://i.postimg.cc/fLc7CHbB/carroms.jpg',
      formLink: 'https://forms.gle/rWam8gHHEtKo8mtV6'
    },
    {
      id: 5,
      name: 'Volley Ball',
      // time: '2:00 PM',
      // venue: 'Field Area',
      image: 'https://i.postimg.cc/Wz9kYxc6/volleyballmens.jpg',
      formLink: 'https://forms.gle/kPPifmXXc2Ym3d7T7'
    },
    {
      id: 6,
      name: 'Tug of War',
      // time: '3:30 PM',
      // venue: 'Jump Area',
      image: 'https://i.postimg.cc/7hQ5n7SK/tugofwar.jpg',
      formLink: 'https://forms.gle/pNQznckaS4riHxyJA'
    }
  ],
  female: [
    {
      id: 1,
      name: 'Batminton',
      // time: '9:30 AM',
      // venue: 'Main Track',
      image: 'https://i.postimg.cc/W17h5QmD/sindhu.jpg',
      formLink: 'https://forms.gle/q8UTGkwjCTGYG3y5A'
    },
    {
      id: 2,
      name: 'Chess',
      // time: '11:00 AM',
      // venue: 'Main Track',
      image: 'https://i.postimg.cc/Wzp9kR7M/chess1.jpg',
      formLink: 'https://forms.gle/9PiehsrZ7iAmBtoT7'
    },
    {
      id: 3,
      name: 'Carroms',
      // time: '1:00 PM',
      // venue: 'Jump Pit',
      image: 'https://i.postimg.cc/prgFtzyp/carroms1.jpg',
      formLink: 'https://forms.gle/ENgcYqwmTZ2hBwnC9'
    },
    {
      id: 4,
      name: 'Tug of War',
      // time: '2:30 PM',
      // venue: 'Field Area',
      image: 'https://i.postimg.cc/13ypR0Jq/tugofwar1.jpg',
      formLink: 'https://forms.gle/X9FV3rcSHDtUnecZ7'
    },
    // {
    //   id: 5,
    //   name: '',
    //   // time: '4:00 PM',
    //   // venue: 'Jump Area',
    //   image: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   formLink: 'https://forms.google.com/triple-jump-female'
    // }
  ]
};

export default function SportsList() {
  const { gender } = useParams();
  const sports = gender ? sportsData[gender as keyof typeof sportsData] : [];

  const handleRegister = (formLink: string) => {
    window.open(formLink, '_blank');
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          {gender === 'male' ? 'Male' : 'Female'} Sports Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{sport.name}</h3>
                {/* <div className="space-y-2 mb-4">
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {sport.time}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {sport.venue}
                  </p>
                </div> */}
                <button
                  onClick={() => handleRegister(sport.formLink)}
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  Register Now
                  {/* <ExternalLink className="ml-2 w-4 h-4" /> */}
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="w-full text-center py-3 mt-1">
        <p className="text-gray-600 text-sm">Developed by <span className="font-semibold text-indigo-600">V ANILKUMAR & PRASAD K</span></p>
      </footer>
    </div>
    
  );
}