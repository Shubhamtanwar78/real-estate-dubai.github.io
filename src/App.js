import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Buy from "./pages/Buy"
import Rent from "./pages/Rent"
import OffPlan from "./pages/OffPlan"
import Layout from "./components/Layout"
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const location = useLocation();
  function PageWrapper({ children }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        );
    }

  return (
    <AnimatePresence mode='wait'>
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Layout /></PageWrapper>}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="buy" element={<PageWrapper><Buy /></PageWrapper>} />
          <Route path="rent" element={<PageWrapper><Rent /></PageWrapper>} />
          <Route path="off-plan" element={<PageWrapper><OffPlan /></PageWrapper>} />
        </Route>
      </Routes>
      </BrowserRouter>
      </AnimatePresence>
  );
}

export default App;
