import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { 
  Check, 
  X, 
  MapPin, 
  Users, 
  Utensils, 
  Waves, 
  Mountain, 
  Bed,
  Car,
  Coffee,
  Music,
  Sunset
} from "lucide-react";

export function PackagesSection() {
  const handleBooking = (packageType: 'camp' | 'hotel') => {
    if (packageType === 'camp') {
      window.open('https://egy-safary.odoo.com/ar/shop/rhlh-dhb-1-21', '_blank');
    } else {
      window.open('https://egy-safary.odoo.com/ar/shop/rhl-dhb-2-22', '_blank');
    }
  };

  return (
    <section id="packages" className="py-20 bg-light-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            اختر باكدجك المثالي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            باكدجين شاملين للإقامة والمواصلات — باقي الأنشطة متاحة بعروض خاصة وأسعار إضافية حسب الطلب
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8">
            {/* Package Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Dahab Inn Camp Package */}
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-turquoise/20">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">أفضل للميزانية</Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-deep-navy flex items-center gap-3">
                    <Mountain className="w-6 h-6 text-primary-turquoise" />
                    Dahab Inn Camp
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-accent-coral">
                    2399 جنيه
                    <span className="text-sm font-normal text-gray-500 mr-2">للشخص</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>3 ليالي في Dahab Inn Camp (A/C)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>أجواء مخيمية أصيلة، تيراس مطل على الجبال</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>جلسات ليلية + نار المخيم</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>مسبح متاح</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">لا يوجد وصول مباشر للبحر</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>باص VIP ذهاب/عودة + إفطار يومي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-primary-turquoise font-medium">باقي الأنشطة متاحة بعروض خاصة وأسعار إضافية</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBooking('camp')}
                    className="w-full bg-primary-turquoise hover:bg-primary-turquoise/90 text-white mt-6"
                  >
                    احجز Dahab Inn Camp
                  </Button>
                </CardContent>
              </Card>

              {/* Sababa Hotel Package */}
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent-coral/20">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent-coral text-white">مريح + شاطئ</Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-deep-navy flex items-center gap-3">
                    <Waves className="w-6 h-6 text-accent-coral" />
                    Sababa Hotel
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-accent-coral">
                    2850 جنيه
                    <span className="text-sm font-normal text-gray-500 mr-2">للشخص</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>3 ليالي في Sababa Hotel (A/C)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>موقع قريب من الكورنيش</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>وصول مباشر للبحر</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>عشاء على الشاطئ، روف للاسترخاء</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>باص VIP + إفطار يومي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>جولة ترحيب على الكورنيش</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-primary-turquoise font-medium">باقي الأنشطة متاحة بعروض خاصة وأسعار إضافية</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBooking('hotel')}
                    className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white mt-6"
                  >
                    احجز Sababa Hotel
                  </Button>
                </CardContent>
              </Card>
            </div>

          
          {/* Schedule Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-deep-navy text-center mb-8">البرنامج اليومي</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="day1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary-turquoise" />
                    <span className="text-lg font-medium">اليوم الأول - الانطلاق والوصول</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-deep-navy">البرنامج:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• انطلاق من Faculty of Specific Education, Port Said</li>
                        <li>• رحلة بالباص VIP المكيف</li>
                        <li>• وصول دهب وتشيك إن</li>
                        <li>• سهرة ترحيب وتعارف</li>
                        <li>• عشاء جماعي</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-deep-navy">التوقيتات:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 7:00 ص - التجمع والانطلاق</li>
                        <li>• 2:00 م - وصول دهب</li>
                        <li>• 3:00 م - تشيك إن واستراحة</li>
                        <li>• 7:00 م - سهرة الترحيب</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="day2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Waves className="w-5 h-5 text-primary-turquoise" />
                    <span className="text-lg font-medium">اليوم الثاني - مغامرات بحرية</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-deep-navy mb-2">أنشطة اختيارية متاحة:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-light-sand/50 p-4 rounded-lg">
                          <h5 className="font-medium text-primary-turquoise">للمسترخين:</h5>
                          <ul className="text-sm text-gray-600 mt-2">
                            <li>• استرخاء بالمسبح (Camp) أو الشاطئ (Hotel)</li>
                            <li>• قراءة وتأمل</li>
                            <li>• جلسات تصوير</li>
                          </ul>
                        </div>
                        <div className="bg-primary-turquoise/10 p-4 rounded-lg">
                          <h5 className="font-medium text-primary-turquoise">للمغامرين:</h5>
                          <ul className="text-sm text-gray-600 mt-2">
                            <li>• بلو هول (snorkeling)</li>
                            <li>• جيب سفاري</li>
                            <li>• أبو جالوم بالقارب</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">* المساء: سهرة مخيمية أو عشاء شاطئ حسب الباكدج</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="day3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-turquoise" />
                    <span className="text-lg font-medium">اليوم الثالث - استكشاف دهب</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Coffee className="w-8 h-8 text-accent-coral mx-auto mb-2" />
                      <h5 className="font-medium">الصباح</h5>
                      <p className="text-sm text-gray-600">كورنيش دهب والبازارات</p>
                    </div>
                    <div className="text-center">
                      <Sunset className="w-8 h-8 text-accent-coral mx-auto mb-2" />
                      <h5 className="font-medium">بعد الظهر</h5>
                      <p className="text-sm text-gray-600">تصوير ووقت حر</p>
                    </div>
                    <div className="text-center">
                      <Music className="w-8 h-8 text-accent-coral mx-auto mb-2" />
                      <h5 className="font-medium">المساء</h5>
                      <p className="text-sm text-gray-600">تجمع مسائي وسهرة</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="day4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary-turquoise rtl-flip" />
                    <span className="text-lg font-medium">اليوم الرابع - المغادرة</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-accent-coral" />
                        إفطار أخير
                      </li>
                      <li className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-accent-coral" />
                        تشيك أوت ووقت حر صباحاً
                      </li>
                      <li className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-accent-coral" />
                        مغادرة بالباص VIP عائدين لبورسعيد
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-primary-turquoise font-medium">
                      وصول بورسعيد: حوالي 6:00 مساءً
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}