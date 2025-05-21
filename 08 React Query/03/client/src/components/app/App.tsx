import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../../App.scss";
import { Home } from "./Home";
import { Loading } from "./Loading";
import { Navbar } from "./Navbar";
import { ToastContainer } from "./toast";

import { AuthContextProvider } from "@/auth/AuthContext";
import { Calendar } from "@/components/appointments/Calendar";
import { AllStaff } from "@/components/staff/AllStaff";
import { Treatments } from "@/components/treatments/Treatments";
import { Signin } from "@/components/user/Signin";
import { UserProfile } from "@/components/user/UserProfile";
import { theme } from "@/theme";

export function App() {
  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <AuthContextProvider>
          <Loading />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Staff" element={<AllStaff />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/Treatments" element={<Treatments />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </AuthContextProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </React.Fragment>
  );
}
