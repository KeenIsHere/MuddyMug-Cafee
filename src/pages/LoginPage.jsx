// import
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomField from "../components/CustomField";
import { useAuthContext } from "../context/useAuthContext";

const App = () => {
  const {login} = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const trimUsername = username.trim();
    const trimPassword = password.trim();

    if (trimUsername === "" || trimPassword === "") {
      setError("Please enter both username and password");
      setLoading(false);
      return;
    }
    const body = JSON.stringify({
      username: trimUsername,
      password: trimPassword,
    });
    try {
      const response = await fetch("http://localhost/react-auth-backend/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await response.json();
      if(response.ok && data.success){
        const token = data.token;
        login(token);
        setSuccess("Successfully logged in");
      }else{
        setError(data.error || "Login failed");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <CustomField
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <CustomField
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <CustomButton
            name={loading ? "Signing in..." : "Sign In"}
            onPress={handleLogin}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
