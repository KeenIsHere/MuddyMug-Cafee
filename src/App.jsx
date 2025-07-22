import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthContext } from "./context/useAuthContext";
import HomePage from "./pages/HomePage.jsx";
import { useState } from "react";

const App = () => {
  const { isAuthenticated } = useAuthContext();
  // Show signup page by default
  const [showSignup, setShowSignup] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState("");

  const handleSignupSuccess = () => {
    setShowSignup(false);
    setSignupSuccess("Registration successful! Please log in.");
  };

  return (
    <div>
      {isAuthenticated ? (
        <HomePage />
      ) : showSignup ? (
        <>
          <SignupPage onSignupSuccess={handleSignupSuccess} />
          <div className="login-footer">
            <p>
              Already have an account?{' '}
              <button onClick={() => setShowSignup(false)} style={{ color: '#667eea', background: 'none', border: 'none', cursor: 'pointer' }}>
                Log in
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          <LoginPage />
          {signupSuccess && <div className="success-message" style={{ maxWidth: 400, margin: '20px auto' }}>{signupSuccess}</div>}
          <div className="login-footer">
            <p>
              Don&apos;t have an account?{' '}
              <button onClick={() => { setShowSignup(true); setSignupSuccess(""); }} style={{ color: '#667eea', background: 'none', border: 'none', cursor: 'pointer' }}>
                Sign up
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
