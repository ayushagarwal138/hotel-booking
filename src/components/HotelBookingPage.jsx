import React, { useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import RoomExplorer from './RoomExplorer';
import BlogSection from './BlogSection';
import FacilitiesSection from './FacilitiesSection';
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function HotelBookingPage() {
  const aboutRef = useRef(null);
  const roomExplorerRef = useRef(null);
  const blogRef = useRef(null);
  const facilitiesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onExploreRooms={() => scrollToSection(roomExplorerRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onBlogClick={() => scrollToSection(blogRef)}
        onFacilitiesClick={() => scrollToSection(facilitiesRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main className="flex-grow">
        <HeroSection onExploreRooms={() => scrollToSection(roomExplorerRef)} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={roomExplorerRef}>
          <RoomExplorer />
        </div>
        <div ref={facilitiesRef}>
          <FacilitiesSection />
        </div>
        <div ref={blogRef}>
          <BlogSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}