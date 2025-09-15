import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, MapPin, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const handleBookingClick = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackagesClick = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672413085834-1aab08fb50fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWhhYiUyMGVneXB0JTIwcmVkJTIwc2VhJTIwbW91bnRhaW5zJTIwc3Vuc2V0fGVufDF8fHx8MTc1Nzk0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="دهب - البحر الأحمر والجبال عند الغروب"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/50 to-transparent"></div>
        <div className="absolute inset-0 gradient-marine opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge className="bg-accent-coral/90 text-white border-0 gap-2">
            <Star className="w-3 h-3" />
            أفضل الأسعار
          </Badge>
          <Badge className="bg-primary-turquoise/90 text-white border-0 gap-2">
            <Users className="w-3 h-3" />
            خصومات جماعية
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 gap-2">
            <MapPin className="w-3 h-3" />
            انطلاق من بورسعيد
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          اكتشف دهب مع
          <span className="block gradient-marine bg-clip-text text-transparent">
            EGY SAFARY
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
          مغامرات، استرخاء وخصومات خاصة
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
          باكدجين 4 أيام / 3 ليالي — انطلاق من بورسعيد باصات VIP — اختيارات بين ستايل التخييم أو راحة الفندق
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={handleBookingClick}
            size="lg"
            className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent-coral/50 transition-all duration-300 hover:scale-105 gap-3 w-full sm:w-auto animate-pulse-subtle"
          >
            احجز رحلتك الآن
            <ArrowLeft className="w-5 h-5 rtl-flip" />
          </Button>
          <Button
            onClick={handlePackagesClick}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg bg-white/10 backdrop-blur-sm w-full sm:w-auto"
          >
            اطلع على الباكدجين
          </Button>
        </div>

        {/* Microcopy */}
        <div className="text-center text-white/80 space-y-2">
          <p className="flex items-center justify-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            انطلاق من: Faculty of Specific Education, Port Said
          </p>
          <p className="text-sm">العودة لبورسعيد</p>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}