import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
//import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import FitBot from "./pages/FitBot";
import ContactPage from './pages/ContactForm';
import BlogPage from './pages/Blog';
import Blog1 from './components/Blog1';
import Blog5 from './components/Blog5';
import Blog2 from './components/Blog2';
import Blog7 from './components/Blog7';
import Blog6 from './components/Blog6';
import Blog8 from './components/Blog8';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;


function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/fitbot" exact element={<FitBot />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/blog4" element={<Blog4 />} />
              <Route path="/blog5" element={<Blog5 />} />
              <Route path="/blog6" element={<Blog6 />} />
              <Route path="/blog7" element={<Blog7 />} />
              <Route path="/blog8" element={<Blog8 />} />
              
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;