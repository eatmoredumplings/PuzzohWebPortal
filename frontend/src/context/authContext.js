import Axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentVendor, setCurrentVendor] = useState(
    JSON.parse(localStorage.getItem("vendor")) || null
  );

  const login = async (inputs) => {
    const res = await Axios.post("/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentVendor(res.data)
  };

  useEffect(() => {
    localStorage.setItem("vendor", JSON.stringify(currentVendor));
  }, [currentVendor]);

  return (
    <AuthContext.Provider value={{ currentVendor, login }}>
      {children}
    </AuthContext.Provider>
  );
};
