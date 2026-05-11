import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { RosterSection } from './components/RosterSection';
import { MatchesSection } from './components/MatchesSection';
import { GallerySection } from './components/GallerySection';
import { SponsorsSection } from './components/SponsorsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <RosterSection />
      <MatchesSection />
      <GallerySection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
