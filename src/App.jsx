import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Redirects root URL '/' to '/signup' */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;