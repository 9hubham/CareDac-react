import Register from "./components/register";
import Login from "./components/login";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Otp from "./components/Otp";
import Signup from "./components/signup";
import Info from "./components/info";
import NeedsCare from "./components/needsCare";
import ForgotPassword from "./components/forgotPassword";
import Member from "./components/Memberdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/services";
import ResetYourPassword from "./components/resetYourPassword";
import PatientDetails from"./components/patientDetails";

// import Login from "./components/login";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/needsCare" element={<NeedsCare />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/info" element={<Info />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/resetYourPassword" element={<ResetYourPassword />} />
          <Route path="/patientDetails" element={<PatientDetails />} />
          <Route path="/Memberdetails" element={<Member />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
