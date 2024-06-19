import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/Signup/Signup';
import Service from './Pages/Services/Service/Service';
//import { detectTumor } from "./api";

// import React, { useState } from "react";
// import { detectTumor } from "./api";

// const BrainTumorDetection = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState("");
//   const [result, setResult] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
//       setSelectedFile(file);
//       setError("");
//     } else {
//       setSelectedFile(null);
//       setError("Please upload a valid image file (JPEG or PNG)");
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (selectedFile) {
//       try {
//         const data = await detectTumor(selectedFile);
//         setResult(data.result);
//       } catch (error) {
//         setError(error.message);
//       }
//     } else {
//       setError("Please select a file");
//     }
//   };

//   return (
//     <div className="brain-tumor-detection">
//       <header>
//         <h1>Brain Tumor Detection</h1>
//       </header>
//       <main>
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="scan">Upload a brain scan file:</label>
//             <input
//               type="file"
//               id="scan"
//               name="scan"
//               accept=".jpg,.jpeg,.png"
//               onChange={handleFileChange}
//               required
//             />
//             <span className="error" id="scan-error">
//               {error}
//             </span>
//           </div>
//           <button type="submit">Detect</button>
//         </form>
//         <div id="result">{result}</div>
//       </main>
//       <footer>
//         <p>© 2023 Brain Tumor Detection Inc.</p>
//       </footer>
//     </div>
//   );
// };

// export default BrainTumorDetection;

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/dentist' element={<Dentist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
