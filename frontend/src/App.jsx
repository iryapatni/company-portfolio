import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminClients from "./pages/admin/AdminClients";
import AdminContacts from "./pages/admin/AdminContacts";
import AdminSubscribers from "./pages/admin/AdminSubscribers";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/subscribers" element={<AdminSubscribers />} />
      


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
