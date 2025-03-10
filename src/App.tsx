
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SportsSelection from './pages/SportsSelection';
import SportsList from './pages/SportsList';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-category" element={<SportsSelection />} />
          <Route path="/sports/:gender" element={<SportsList />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;