import './App.scss';
import HomeComponent from './componente/HomeComponent/HomeComponent';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" Component={HomeComponent} />
      </Routes>
    </Router>
  );
}

export default App;
