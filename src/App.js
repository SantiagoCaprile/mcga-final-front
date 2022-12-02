import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Matches from './screens/Matches';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
