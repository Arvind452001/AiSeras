import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #141133, #2F2267)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", color: "#c3cbd9", marginBottom: "10px" }}>
        404
      </h1>
      <h2 style={{ fontSize: "36px", color: "#9ca3af", marginBottom: "10px" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#9ca3af", margin: "10px 0 20px" }}>
        The page you are looking for does not exist
      </p>

      <Link
        to="/"
        style={{
          padding: "10px 20px",
          background: "#3E70A1",
          borderRadius: 6,
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
