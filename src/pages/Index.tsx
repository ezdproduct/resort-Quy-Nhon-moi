import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexContent from './IndexContent'; // Đổi tên Index thành IndexContent để chứa logic
import NotFound from './NotFound';

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