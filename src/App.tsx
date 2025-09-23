import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexContent from './pages/IndexContent';
import NotFound from './pages/NotFound';
import AccommodationDetail from './pages/AccommodationDetail';
import AccommodationPage from './pages/AccommodationPage'; // Import the new AccommodationPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexContent />} />
        <Route path="/accommodation" element={<AccommodationPage />} /> {/* New route for AccommodationPage */}
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;