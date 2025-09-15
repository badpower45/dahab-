import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  trip: string;
  date: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "أحمد محمد",
      location: "بورسعيد",
      rating: 5,
      comment: "رحلة رائعة جداً! الفريق كان متعاون والتنظيم ممتاز. البلو هول كانت تجربة لا تُنسى. هنكرر الرحلة أكيد!",
      trip: "Sababa Hotel Package",
      date: "نوفمبر 2024"
    },
    {
      id: "2", 
      name: "فاطمة علي",
      location: "القاهرة",
      rating: 5,
      comment: "أول مرة أروح دهب وكانت تجربة مذهلة. المرشد كان بيعرف كل حاجة والأماكن كانت خرافية. الأسعار كويسة جداً مقارنة بالخدمة.",
      trip: "Dahab Inn Camp + Blue Hole",
      date: "أكتوبر 2024"
    },
    {
      id: "3",
      name: "محمود حسن",
      location: "الإسكندرية", 
      rating: 5,
      comment: "رحلة جماعية مع الأصحاب كانت أحلى حاجة عملناها السنة دي. جيب السفاري في وادي الشواش والسهرة الليلية كانوا top!",
      trip: "Custom Group Trip",
      date: "سبتمبر 2024"
    },
    {
      id: "4",
      name: "مريم سالم",
      location: "بورسعيد",
      rating: 5,
      comment: "عائلتنا استمتعت جداً. الإقامة كانت نضيفة والإفطار لذيذ. الأطفال حبوا السباحة والأنشطة المائية. خدمة عملاء ممتازة.",
      trip: "Family Package - Sababa Hotel",
      date: "أغسطس 2024"
    },
    {
      id: "5",
      name: "يوسف أحمد",
      location: "المنصورة",
      rating: 5,
      comment: "كطلاب حصلنا على خصم حلو، والرحلة كانت تستاهل أكتر من الفلوس. الباص كان مريح والوقت اتنظم كويس جداً.",
      trip: "Student Group - Dahab Inn Camp",
      date: "يوليو 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شوف إيه اللي قاله العملاء عن تجربتهم معانا — آراء حقيقية من رحلات حقيقية
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-turquoise mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-sm text-gray-600">متوسط التقييم</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-coral mb-2">500+</div>
            <div className="text-sm text-gray-600">رحلة منظمة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-turquoise mb-2">2000+</div>
            <div className="text-sm text-gray-600">عميل سعيد</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-coral mb-2">95%</div>
            <div className="text-sm text-gray-600">معدل الرضا</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start">
                        <Quote className="w-8 h-8 text-primary-turquoise/30" />
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Comment */}
                      <p className="text-gray-700 leading-relaxed text-sm">
                        "{testimonial.comment}"
                      </p>

                      {/* Trip Badge */}
                      <Badge variant="secondary" className="text-xs bg-primary-turquoise/10 text-primary-turquoise">
                        {testimonial.trip}
                      </Badge>

                      {/* User Info */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-deep-navy">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                          </div>
                          <div className="text-xs text-gray-400">
                            {testimonial.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-turquoise/10 to-accent-coral/10 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-navy mb-4">
              انضم لعائلة EGY SAFARY
            </h3>
            <p className="text-gray-600 mb-6">
              آلاف العملاء السعداء اختاروا EGY SAFARY لرحلاتهم — كن واحد منهم واختبر الفرق
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Licensed Guides</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}