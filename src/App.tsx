import { HeroSection } from "./components/HeroSection";
import { PackagesSection } from "./components/PackagesSection";
import { AdventureTripsSection } from "./components/AdventureTripsSection";
import { WhyEgySafarySection } from "./components/WhyEgySafarySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { FAQSection } from "./components/FAQSection";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Adventure Trips Section */}
        <AdventureTripsSection />
        
        {/* Packages Section */}
        <PackagesSection />
        
        {/* Why EGY SAFARY Section */}
        <WhyEgySafarySection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Booking Section */}
        <BookingSection />
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'Noto Sans Arabic, Cairo, sans-serif',
            direction: 'rtl'
          }
        }}
      />
    </div>
  );
}