import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUserAuth = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (userInfo && userInfo.token) {
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
          await axios.get("/api/user/user-auth", config);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUserAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
