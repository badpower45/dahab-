import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Clock,
  CreditCard,
  Shield
} from "lucide-react";

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحبًا EGY SAFARY، أريد المزيد من المعلومات");
    window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201234567890', '_self');
  };

  return (
    <footer id="contact" className="bg-deep-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-marine flex items-center justify-center">
                <span className="text-white font-bold text-lg">EGY</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">EGY SAFARY</h3>
                <p className="text-gray-300 text-sm">رحلات دهب المميزة</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              شريكك الموثوق في استكشاف دهب والبحر الأحمر. رحلات آمنة، أسعار مميزة، وذكريات لا تُنسى مع فريق محترف من المرشدين المعتمدين.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-turquoise" />
                <span>انطلاقنا من: Faculty of Specific Education, Port Said</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary-turquoise" />
                <span>ساعات العمل: 9 صباحاً - 10 مساءً (يومياً)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">روابط سريعة</h4>
            <nav className="space-y-3">
              <a href="#packages" className="block text-gray-300 hover:text-primary-turquoise transition-colors">
                الباكدجز
              </a>
              <a href="#adventures" className="block text-gray-300 hover:text-primary-turquoise transition-colors">
                الرحلات والأنشطة
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-primary-turquoise transition-colors">
                الأسئلة الشائعة
              </a>
              <a href="#booking" className="block text-gray-300 hover:text-primary-turquoise transition-colors">
                احجز الآن
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">تواصل معنا</h4>
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                size="sm"
                className="w-full bg-green-500 hover:bg-green-600 text-white gap-2 justify-start"
              >
                <MessageCircle className="w-4 h-4" />
                واتساب فوري
              </Button>
              
              <Button
                onClick={handleCallClick}
                variant="outline"
                size="sm"
                className="w-full border-primary-turquoise text-primary-turquoise hover:bg-primary-turquoise hover:text-white gap-2 justify-start"
              >
                <Phone className="w-4 h-4" />
                اتصال مباشر
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-turquoise" />
                <span className="ltr">info@egysafary.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="font-medium">تابعنا على</h5>
              <div className="flex gap-3">
                <button className="w-8 h-8 bg-primary-turquoise/20 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-primary-turquoise/20 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-primary-turquoise/20 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <Shield className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">مرشدين معتمدين</p>
              <p className="text-gray-400 text-xs">Licensed & Certified Guides</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <div>
              <p className="font-medium">دفع آمن ومتنوع</p>
              <p className="text-gray-400 text-xs">Cash, Fawry, Online Payment</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">دعم 24/7</p>
              <p className="text-gray-400 text-xs">WhatsApp & Phone Support</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div className="space-y-2">
            <p>&copy; 2024 EGY SAFARY. جميع الحقوق محفوظة.</p>
            <p>SEO Meta: رحلات دهب 4 أيام / 3 ليالي — EGY SAFARY | باص VIP من بورسعيد</p>
          </div>
          
          <div className="space-y-2 md:text-left">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-primary-turquoise transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-primary-turquoise transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-turquoise transition-colors">Refund Policy</a>
            </div>
            <p className="text-xs">
              احجز باكدج Dahab Inn Camp أو Sababa Hotel مع EGY SAFARY — رحلات، غوص، يخت، سفاري وخصومات للمجموعات.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-deep-navy border-t border-gray-700 p-4 z-40">
        <div className="flex gap-3">
          <Button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            واتساب
          </Button>
          <Button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 bg-accent-coral hover:bg-accent-coral/90 text-white"
          >
            احجز الآن
          </Button>
        </div>
      </div>
    </footer>
  );
}