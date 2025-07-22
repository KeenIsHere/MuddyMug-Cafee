import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomField from "../components/CustomField";

const SignupPage = ({ onSignupSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("http://localhost/react-auth-backend/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess("Registration successful! You can now log in.");
        setLoading(false);
        if (onSignupSuccess) onSignupSuccess();
      } else {
        setError(data.error || "Registration failed");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSignup();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Create Account</h1>
          <p>Sign up to get started</p>
        </div>
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="signup-username">Username</label>
            <CustomField
              id="signup-username"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <CustomField
              id="signup-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <CustomButton
            name={loading ? "Signing up..." : "Sign Up"}
            onPress={handleSignup}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default SignupPage; 