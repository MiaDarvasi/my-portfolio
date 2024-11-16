import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader.jsx'
import { Connect } from './cmps/Connect.jsx'
import { AbnbDetails } from './pages/AbnbDetails.jsx';
import { AppsusDetails } from './pages/AppsusDetails.jsx';
import { HomePage } from './pages/HomePage.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abnb" element={<AbnbDetails />} />
          <Route path="/appsus" element={<AppsusDetails />} />
        </Routes>
        <Connect />
      </div>
    </Router>
  );
}

export default App;
