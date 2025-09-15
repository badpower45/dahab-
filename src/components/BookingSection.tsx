import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MessageCircle, Phone, Users, Calendar, User } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "",
    people: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppBooking = async () => {
    // Validation
    if (!formData.name || !formData.phone || !formData.package || !formData.people) {
      toast.error("من فضلك املأ جميع الحقول المطلوبة");
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("رقم تليفون غير صالح - يجب أن يكون 11 رقم");
      return;
    }

    try {
      // Save to Supabase
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b6254d0f/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          ...formData,
          submitted_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('فشل في حفظ البيانات');
      }

      // Create WhatsApp message
      const message = `مرحبًا EGY SAFARY، أريد حجز ${formData.package} لعدد ${formData.people} أشخاص.

تفاصيل الحجز:
- الاسم: ${formData.name}
- رقم التليفون: ${formData.phone}
- الباكدج/النشاط: ${formData.package}
- عدد الأشخاص: ${formData.people}

الرجاء إرسال التفاصيل والأسعار النهائية.`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/+201222239382?text=${encodedMessage}`, '_blank');
      
      toast.success("شكرًا! تم استلام طلبك. سنراسلُك قريبًا عبر WhatsApp لتأكيد الحجز.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        package: "",
        people: ""
      });
    } catch (error) {
      console.error('Booking error:', error);
      toast.error("حدث خطأ، الرجاء المحاولة مرة أخرى");
    }
  };

  const handleDirectCall = () => {
    window.open('tel:+201222239382', '_self');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary-turquoise/5 to-accent-coral/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            احجز رحلتك الآن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            املأ البيانات التالية وسنتواصل معك فوراً عبر WhatsApp لتأكيد حجزك — الدفع بعد التأكيد على موقعنا حسب الباكدج
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-2 border-primary-turquoise/10">
              <CardHeader className="bg-gradient-to-r from-primary-turquoise/10 to-accent-coral/10">
                <CardTitle className="text-2xl text-deep-navy flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary-turquoise" />
                  حجز سريع
                </CardTitle>
                <CardDescription>
                  املأ البيانات وسنتواصل معك خلال دقائق
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-deep-navy font-medium">
                      الاسم الكامل *
                    </Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="name"
                        placeholder="اكتب اسمك الكامل"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pr-10 text-right"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-deep-navy font-medium">
                      رقم التليفون *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="phone"
                        placeholder="01xxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pr-10 text-right ltr"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package" className="text-deep-navy font-medium">
                    الباكدج أو النشاط *
                  </Label>
                  <Select value={formData.package} onValueChange={(value) => handleInputChange('package', value)}>
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر الباكدج أو النشاط" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dahab-inn-camp">Dahab Inn Camp - 2399 جنيه</SelectItem>
                      <SelectItem value="sababa-hotel">Sababa Hotel - 2850 جنيه</SelectItem>
                      <SelectItem value="mountain-gathering">سهرة جبل الطويلات & وادي ستار</SelectItem>
                      <SelectItem value="blue-hole">Blue Hole & Abu Galoum & Blue Lagoon</SelectItem>
                      <SelectItem value="three-pools">Three Pools & وادي جني</SelectItem>
                      <SelectItem value="saint-catherine">Saint Catherine & جبل موسى</SelectItem>
                      <SelectItem value="yacht-trip">يخت في البحر الأحمر</SelectItem>
                      <SelectItem value="jeep-safari">وادي الشواش - Jeep Safari</SelectItem>
                      <SelectItem value="diving">رحلة غطس / الغواصة</SelectItem>
                      <SelectItem value="custom">رحلة مخصصة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people" className="text-deep-navy font-medium">
                    عدد الأشخاص *
                  </Label>
                  <div className="relative">
                    <Users className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                    <Select value={formData.people} onValueChange={(value) => handleInputChange('people', value)}>
                      <SelectTrigger className="pr-10 text-right">
                        <SelectValue placeholder="اختر عدد الأشخاص" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">شخص واحد</SelectItem>
                        <SelectItem value="2">2 أشخاص</SelectItem>
                        <SelectItem value="3">3 أشخاص</SelectItem>
                        <SelectItem value="4">4 أشخاص</SelectItem>
                        <SelectItem value="5">5 أشخاص</SelectItem>
                        <SelectItem value="6-10">6-10 أشخاص</SelectItem>
                        <SelectItem value="11-15">11-15 شخص</SelectItem>
                        <SelectItem value="16+">16+ شخص (مجموعة كبيرة)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <Button
                    onClick={handleWhatsAppBooking}
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white gap-3 py-4 text-lg font-bold animate-pulse-subtle"
                  >
                    <MessageCircle className="w-6 h-6" />
                    احجز الآن عبر WhatsApp
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    أو اتصل بنا مباشرة
                  </div>

                  <Button
                    onClick={handleDirectCall}
                    variant="outline"
                    size="lg"
                    className="w-full border-primary-turquoise text-primary-turquoise hover:bg-primary-turquoise hover:text-white gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    اتصال مباشر
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary-turquoise/10 to-accent-coral/10 border-primary-turquoise/20">
              <CardHeader>
                <CardTitle className="text-xl text-deep-navy">معلومات مهمة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-deep-navy">ما المتضمن في السعر؟</h4>
                  <p className="text-gray-600">
                    باص VIP (ذهاب/عودة)، الإقامة 3 ليالي، إفطار يومي، نشاطات محددة كما موضّح. بعض الأنشطة تُحسب بسعر إضافي.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-deep-navy">سياسة الإلغاء</h4>
                  <p className="text-gray-600">
                    إلغاء مجاني حتى 7 أيام قبل الرحلة. إلغاء بين 3–7 أيام: استرداد جزئي.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-deep-navy">نقطة التجمع</h4>
                  <p className="text-gray-600">
                    Faculty of Specific Education, Port Said
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-deep-navy">عروض خاصة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>عروض خاصة للمجموعات الكبيرة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>أسعار مميزة للأنشطة الإضافية</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>باكدجات شاملة للإقامة والمواصلات</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-coral rounded-full"></div>
                  <span>دفع آمن بعد التأكيد على الموقع</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}