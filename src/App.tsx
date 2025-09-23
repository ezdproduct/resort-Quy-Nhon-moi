import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexContent from './pages/IndexContent';
import NotFound from './pages/NotFound';
import AccommodationDetail from './pages/AccommodationDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexContent />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;