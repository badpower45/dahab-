import { Button } from "./ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحبًا EGY SAFARY، أريد المزيد من المعلومات عن رحلات دهب");
    window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
  };

  const handleBookingClick = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-marine flex items-center justify-center">
              <span className="text-white font-bold">EGY</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-deep-navy">EGY SAFARY</h1>
              <p className="text-xs text-gray-600">رحلات دهب المميزة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#packages" className="text-deep-navy hover:text-primary-turquoise transition-colors">الباكدجز</a>
            <a href="#adventures" className="text-deep-navy hover:text-primary-turquoise transition-colors">الرحلات</a>
            <a href="#faq" className="text-deep-navy hover:text-primary-turquoise transition-colors">الأسئلة</a>
            <a href="#contact" className="text-deep-navy hover:text-primary-turquoise transition-colors">اتصل بنا</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white gap-2 hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </Button>
            <Button
              onClick={handleBookingClick}
              className="bg-primary-turquoise hover:bg-primary-turquoise/90 text-white gap-2 animate-pulse-subtle"
            >
              <Phone className="w-4 h-4" />
              احجز الآن
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}