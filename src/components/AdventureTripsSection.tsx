import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Mountain, 
  Waves, 
  Car, 
  Ship, 
  TreePine, 
  Camera, 
  Users,
  Clock,
  Activity,
  AlertTriangle,
  Star
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AdventureTrip {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  suitable: string;
  includes: string;
  image: string;
  icon: React.ReactNode;
  badge?: string;
  warning?: string;
  price?: string;
}

export function AdventureTripsSection() {
  const adventures: AdventureTrip[] = [
    {
      id: "mountain-gathering",
      title: "سهرة جبل الطويلات & وادي ستار — Night Gathering",
      description: "سهرة بدوية على قمة جبل/تلة مع نار المخيم، شاي بدوي، موسيقى، ومشاهدة النجوم — تجربة اجتماعية مثالية للشباب.",
      duration: "مساء واحد (3–4 ساعات)",
      level: "سهلة — مناسبة للجميع",
      suitable: "جميع الأعمار",
      includes: "نقل محلي، ترحيب بدوي، جلسة نار",
      image: "https://images.unsplash.com/photo-1715205302740-7a5bc1bde595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZmlyZSUyMGJlZG91aW4lMjBuaWdodCUyMHN0YXJzJTIwZGVzZXJ0fGVufDF8fHx8MTc1Nzk0ODMxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Mountain className="w-6 h-6" />,
      badge: "عروض خاصة مع EGY SAFARY"
    },
    {
      id: "blue-hole",
      title: "Blue Hole, Abu Galoum & Blue Lagoon — Snorkeling & Boat Trip",
      description: "رحلة بحرية مُكثفة: غطس و سنوركلينج في Blue Hole الشهيرة، مرورا بمحميّة أبو جالوم والبلو لاغون — مياه فيروزيّة وشعاب ملونة.",
      duration: "يوم كامل (6–8 ساعات)",
      level: "مناسب للسباحين — للغوص العميق يُنصح بالمرشد",
      suitable: "للسباحين",
      includes: "زورق، معدات سنوركلينج، مرشد محلي",
      image: "https://images.unsplash.com/photo-1689934902196-961921798b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwaG9sZSUyMGRhaGFiJTIwZGl2aW5nJTIwdW5kZXJ3YXRlciUyMGNvcmFsfGVufDF8fHx8MTc1Nzk0ODMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Waves className="w-6 h-6" />,
      warning: "Blue Hole تجربه مميزة للغواصين المحترفين — يوجد خيارات سنوركلينج للمبتدئين."
    },
    {
      id: "three-pools",
      title: "Three Pools & وادي جني — Natural Pools",
      description: "استكشاف البرك الطبيعية الصافية، سباحة وغطس سطحي وسط مناظر صخرية مبهرة.",
      duration: "نصف يوم",
      level: "سهل — عائلي",
      suitable: "العائلات والأطفال",
      includes: "نقل محلي، دليل، وقفة تصوير",
      image: "https://images.unsplash.com/photo-1674240471461-8953b093444d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcG9vbHMlMjByb2NrcyUyMHN3aW1taW5nJTIwdHVycXVvaXNlJTIwd2F0ZXJ8ZW58MXx8fHwxNzU3OTQ4MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <TreePine className="w-6 h-6" />,
      badge: "مناسب للعائلات"
    },
    {
      id: "saint-catherine",
      title: "Saint Catherine & جبل موسى — Hiking & Sunrise",
      description: "رحلة تاريخية وجبلية لزيارة دير سانت كاترين، وصعود جبل موسى لمشاهدة شروق الشمس (مجهّز للمتسلقين).",
      duration: "يوم كامل / يمكن أن يكون overnight",
      level: "متوسط إلى صعب",
      suitable: "للبالغين ذوي اللياقة",
      includes: "مرشد جبلي محلي، معدات أساسية (قابلة للإيجار)",
      image: "https://images.unsplash.com/photo-1738972579367-c8e5d6422315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWludCUyMGNhdGhlcmluZSUyMG1vbmFzdGVyeSUyMHNpbmFpJTIwbW91bnRhaW4lMjBoaWtpbmd8ZW58MXx8fHwxNzU3OTQ4MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Mountain className="w-6 h-6" />,
      warning: "يتطلب لياقة بدنية وخبرة بسيطة في المشي الجبلي."
    },
    {
      id: "yacht-trip",
      title: "يخت في البحر الأحمر — Yacht Trip",
      description: "رحلة يخت خاصة: سباحة، سنوركلينج، موسيقى ودعوة للاسترخاء مع غداء على متن اليخت.",
      duration: "نصف يوم أو يوم كامل",
      level: "سهل — مثالي لجروبات الأصدقاء",
      suitable: "جميع الأعمار",
      includes: "نقل من الفندق، مشروبات خفيفة، قبطان وطاقم",
      image: "https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJvYXQlMjByZWQlMjBzZWElMjBlZ3lwdCUyMHNhaWxpbmd8ZW58MXx8fHwxNzU3OTQ4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Ship className="w-6 h-6" />
    },
    {
      id: "jeep-safari",
      title: "وادي الشواش — Jeep Safari",
      description: "مغامرة بسيارة جيب عبر الكثبان والصحاري، وقفات تصوير وإطلالات غروب لا تُنسى.",
      duration: "نصف يوم / مساءً",
      level: "مغامرة متوسطة",
      suitable: "البالغين والشباب",
      includes: "نقل جيب، مرشد بدوي، مياه",
      image: "https://images.unsplash.com/photo-1648812374776-8e0730492cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBqZWVwJTIwc2FmYXJpJTIwZWd5cHQlMjBzaW5haSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTc5NDgzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Car className="w-6 h-6" />
    },
    {
      id: "diving",
      title: "رحلة غطس / الغواصة — Diving Experience",
      description: "برامج غطس للمبتدئين والمحترفين مع مدربين معتمدين — دورات PADI متاحة حسب الطلب.",
      duration: "نصف يوم / يوم كامل",
      level: "مختلف: للمبتدئين بقارب تدريب وحتى الدورات المتقدمة",
      suitable: "حسب المستوى",
      includes: "معدات غوص، إنقاذ ومرشد معتمد",
      image: "https://images.unsplash.com/photo-1637308107185-1471e1eddeea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMHVuZGVyd2F0ZXIlMjBlZ3lwdCUyMGNvcmFsJTIwcmVlZnxlbnwxfHx8fDE3NTc5NDgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Waves className="w-6 h-6" />,
      warning: "يُطلب فحص صحي و/أو شهادة غوص للمستويات المتقدمة"
    },
    {
      id: "extra-activities",
      title: "رحلات إضافية مُقترحة",
      description: "وادي جني، رحلات قوارب قصيرة، غروب تصويري، جولات البازارات، جلسات يوغا على الشاطئ.",
      duration: "حسب النشاط",
      level: "متنوع",
      suitable: "للجميع",
      includes: "حسب النشاط المختار",
      image: "https://images.unsplash.com/photo-1672413085834-1aab08fb50fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWhhYiUyMGVneXB0JTIwcmVkJTIwc2VhJTIwbW91bnRhaW5zJTIwc3Vuc2V0fGVufDF8fHx8MTc1Nzk0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const handleBookAdventure = (title: string) => {
    const message = encodeURIComponent(`مرحبًا EGY SAFARY، أريد حجز ${title}. الرجاء إرسال التفاصيل والأسعار والتواريخ المتاحة.`);
    window.open(`https://wa.me/+201222239382?text=${message}`, '_blank');
  };

  return (
    <section id="adventures" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            مغامرات دهب الاستثنائية
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            اختر من مجموعة واسعة من المغامرات المثيرة — من الاسترخاء على الشواطئ إلى استكشاف أعماق البحر الأحمر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <Card 
              key={adventure.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-primary-turquoise">
                    {adventure.icon}
                  </div>
                </div>
                {adventure.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent-coral text-white text-xs">
                      {adventure.badge}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-deep-navy line-clamp-2">
                  {adventure.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {adventure.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary-turquoise" />
                    <span className="font-medium">المدة:</span>
                    <span className="text-gray-600">{adventure.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Activity className="w-4 h-4 text-primary-turquoise" />
                    <span className="font-medium">المستوى:</span>
                    <span className="text-gray-600">{adventure.level}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary-turquoise" />
                    <span className="font-medium">مناسب لـ:</span>
                    <span className="text-gray-600">{adventure.suitable}</span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium text-primary-turquoise">متضمن:</span>
                    <p className="text-gray-600 mt-1">{adventure.includes}</p>
                  </div>

                  {adventure.warning && (
                    <div className="flex items-start gap-2 text-sm bg-yellow-50 p-3 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-800">{adventure.warning}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    onClick={() => handleBookAdventure(adventure.title)}
                    className="w-full bg-primary-turquoise hover:bg-primary-turquoise/90 text-white group"
                  >
                    احجز الآن
                    <Star className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    عروض خاصة مع EGY SAFARY — أسعار مميزة عند الحجز مع الباكدج
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-turquoise/10 to-accent-coral/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-deep-navy mb-4">
            مش لاقي اللي بتدور عليه؟
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            تواصل معانا وهنساعدك نختار الرحلة المثالية ليك ولجروبك — عندنا حلول مخصصة لكل الاحتياجات
          </p>
          <Button 
            onClick={() => {
              const message = encodeURIComponent("مرحبًا EGY SAFARY، أريد رحلة مخصصة لمجموعتي. الرجاء التواصل معي.");
              window.open(`https://wa.me/+201222239382?text=${message}`, '_blank');
            }}
            size="lg"
            className="bg-accent-coral hover:bg-accent-coral/90 text-white"
          >
            تواصل معانا للرحلات المخصصة
          </Button>
        </div>
      </div>
    </section>
  );
}