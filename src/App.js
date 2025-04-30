import Register from "./components/register";
import Login from "./components/login";
import Otp from "./components/Otp";
import Signup from "./components/signup";
import Info from "./components/info";
import NeedsCare from "./components/needsCare";
import ForgotPassword from "./components/forgotPassword";
import Member from "./components/Memberdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/services";
import ResetYourPassword from "./components/resetYourPassword";
import PatientDetails from "./components/patientDetails";
import Bookings from "./components/bookings";
// Import your own Payments component, not from MUI
import Payments from "./components/payments"; // This needs to be created if it doesn't exist
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import Profile from "./components/profile";
import Profile2 from "./components/Profile2";
import EditMember from "./components/editMember";
import MyCondition from "./components/myCondition";
import AddPaymentdetails from "./components/addPaymentdetails";
import ChangePassword from "./components/changePassword";
import FamilyMemberCard from "./components/familyMemberCard";
import ServicesNeed from "./components/servicesNeed";
import SpecialNeeds from "./components/specialNeeds";
import EditPaymentdetails from "./components/editPaymentdetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/needsCare" element={<NeedsCare />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/needsCare" element={<NeedsCare />} />
          <Route path="/info" element={<Info />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/resetYourPassword" element={<ResetYourPassword />} />
          <Route path="/patientDetails" element={<PatientDetails />} />
          <Route path="/Memberdetails" element={<Member />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/appointment" element={<Bookings />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/editMember" element={<EditMember />} />
          <Route path="/mycondition" element={<MyCondition />} />
          <Route path="/addPaymentdetails" element={<AddPaymentdetails />} />
          <Route path="/editPaymentdetails" element={<EditPaymentdetails />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/familyMemberCard" element={<FamilyMemberCard />} />
          <Route path="/mycondition" element={<MyCondition />} />
          <Route path="/servicesneed" element={<ServicesNeed />} />
          <Route path="/specialneeds" element={<SpecialNeeds />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
