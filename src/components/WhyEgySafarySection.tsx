import { Card, CardContent } from "./ui/card";
import { 
  Bus, 
  Users, 
  Shield, 
  Layers, 
  MessageCircle,
  MapPin,
  Star,
  Award,
  Clock,
  Heart
} from "lucide-react";

export function WhyEgySafarySection() {
  const features = [
    {
      icon: <Bus className="w-8 h-8 text-primary-turquoise" />,
      title: "انطلاق من بورسعيد",
      description: "باصات VIP مكيفة ذهاب/عودة من نقطة تجمع واحدة مريحة للجميع"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-coral" />,
      title: "أسعار خاصة وعروض مميزة",
      description: "عروض خاصة للمجموعات والعائلات مع أسعار مميزة للأنشطة الإضافية"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-turquoise" />,
      title: "دلائل معتمدين وأمان",
      description: "مرشدين محليين معتمدين وتجهيزات آمنة لكل الأنشطة البحرية والجبلية"
    },
    {
      icon: <Layers className="w-8 h-8 text-accent-coral" />,
      title: "مرونة كاملة",
      description: "اختر الباكدج الكامل أو احجز الأنشطة منفردة حسب رغبتك وميزانيتك"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "دعم WhatsApp فوري",
      description: "حجز سريع وسهل عبر WhatsApp مع خيارات دفع متنوعة ومرنة"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-turquoise" />,
      title: "خبرة محلية أصيلة",
      description: "تعرف على دهب من خلال أهلها — تجارب حقيقية وأماكن مخفية"
    }
  ];

  const stats = [
    { number: "500+", label: "رحلة منظمة", icon: <Star className="w-5 h-5" /> },
    { number: "2000+", label: "عميل سعيد", icon: <Heart className="w-5 h-5" /> },
    { number: "5", label: "سنوات خبرة", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "دعم متواصل", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-sand to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            ليه تختار EGY SAFARY؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أكثر من مجرد شركة سياحة — شريكك في خلق ذكريات لا تُنسى مع أعلى معايير الجودة والأمان
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-2">
                <div className="flex justify-center text-primary-turquoise">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-deep-navy">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-turquoise/20"
            >
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-turquoise/10 to-accent-coral/10 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-deep-navy mb-4">
              ضمانات الجودة والثقة
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-deep-navy">Licensed Guides</h4>
              <p className="text-sm text-gray-600">مرشدين معتمدين ومؤهلين</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-deep-navy">Special Offers</h4>
              <p className="text-sm text-gray-600">عروض خاصة للمجموعات والأنشطة</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-deep-navy">Secure Payments</h4>
              <p className="text-sm text-gray-600">دفع آمن ومتنوع (كاش، فوري، أونلاين)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}