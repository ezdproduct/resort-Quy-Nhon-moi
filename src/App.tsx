import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexContent from './pages/IndexContent'; // Import IndexContent thay vì Index
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;