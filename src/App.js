import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';
import Report from './components/Report';
import Footer from './components/Footer';
import ReportLostItem from './components/ReportLostItem';
import ReportFoundItem from './components/ReportFoundItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* Show Banner only on the home page */}
          <Route path="/" element={
            <>
              <Banner />
              <Report />
            </>
          } />
          
          {/* Other pages without Banner */}
          <Route path="/report-lost" element={<ReportLostItem />} />
          <Route path="/report-found" element={<ReportFoundItem />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

