import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexContent from './pages/IndexContent';
import AccommodationDetailsPage from './pages/AccommodationDetailsPage'; // Import trang mới
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexContent />} />
        <Route path="/accommodation-details" element={<AccommodationDetailsPage />} /> {/* Tuyến đường mới */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;