import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Matches from './screens/Matches';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </Layout>
  );
}

export default App;