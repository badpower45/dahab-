import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HelpCircle, MessageCircle, Phone, Clock } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "ما المتضمن في السعر؟",
      answer: "باص VIP (ذهاب/عودة)، الإقامة 3 ليالي، إفطار يومي، نشاطات محددة كما موضّح في كل باكدج. بعض الأنشطة الإضافية قد تُحسب بسعر منفصل."
    },
    {
      question: "هل يوجد مصاريف دخول/تذاكر للمواقع؟",
      answer: "بعض المحميات الطبيعية قد تطلب رسوم دخول رمزية — غالباً غير مُضمّنة في السعر الأساسي. سنعرض عليك التكلفة الكاملة قبل تأكيد الحجز."
    },
    {
      question: "ما هي سياسة الإلغاء؟",
      answer: "إلغاء مجاني حتى 7 أيام قبل الرحلة. إلغاء بين 3–7 أيام: استرداد جزئي 50%. إلغاء أقل من 72 ساعة: لا يوجد استرداد. يمكن تأجيل الحجز بدلاً من الإلغاء."
    },
    {
      question: "هل الرحلات مناسبة للعائلات/الأطفال؟",
      answer: "نعم — نوضح مستوى كل رحلة وننصح بالأنشطة المناسبة. لبعض الأنشطة (غوص عميق/تسلق جبال) توجد متطلبات سن وصحة محددة."
    },
    {
      question: "كيف يتم الدفع؟",
      answer: "الدفع يتم بعد التأكيد على موقعنا الإلكتروني حسب الباكدج المختار. نقبل الدفع عبر فوري، التحويل البنكي، أو الدفع الإلكتروني الآمن."
    },
    {
      question: "هل توجد عروض للمجموعات؟",
      answer: "نعم! عندنا عروض خاصة للمجموعات الكبيرة وأسعار مميزة للأنشطة الإضافية عند الحجز مع الباكدج."
    },
    {
      question: "ماذا أحضر معي؟",
      answer: "ملابس مريحة، ملابس سباحة، كريم حماية من الشمس، نظارة شمسية، حذاء مريح للمشي، وكاميرا للتصوير. سنرسل لك قائمة تفصيلية بعد الحجز."
    },
    {
      question: "هل يمكن تخصيص الرحلة؟",
      answer: "بالطبع! يمكننا ترتيب رحلات مخصصة حسب اهتماماتك وميزانيتك. تواصل معنا عبر WhatsApp لمناقشة التفاصيل."
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("مرحبًا EGY SAFARY، عندي سؤال عن رحلات دهب");
    window.open(`https://wa.me/+201222239382?text=${message}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-light-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إجابات لأهم الأسئلة اللي بتيجي في بالكم — ولو عندك سؤال تاني، تواصل معانا فوراً
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-deep-navy flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary-turquoise" />
                  أسئلة وأجوبة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-right text-deep-navy hover:text-primary-turquoise transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary-turquoise/10 to-accent-coral/10 border-primary-turquoise/20">
              <CardHeader>
                <CardTitle className="text-xl text-deep-navy">ما لقيتش اللي بتدور عليه؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  تواصل معانا مباشرة وهنرد عليك في أسرع وقت
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full flex items-center gap-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>واتساب فوري</span>
                  </button>
                  
                  <div className="flex items-center gap-3 p-3 bg-primary-turquoise/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary-turquoise" />
                    <div className="text-sm">
                      <p className="font-medium text-deep-navy">اتصال مباشر</p>
                      <p className="text-gray-600 ltr">+20 122 223 9382</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-accent-coral/10 rounded-lg">
                    <Clock className="w-5 h-5 text-accent-coral" />
                    <div className="text-sm">
                      <p className="font-medium text-deep-navy">ساعات العمل</p>
                      <p className="text-gray-600">9 صباحاً - 10 مساءً</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-deep-navy">نصائح مهمة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-turquoise">للحجز السريع:</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• احجز قبل السفر بأسبوع على الأقل</li>
                    <li>• تأكد من صحة رقم التليفون</li>
                    <li>• حدد تاريخ مرن للحصول على أفضل سعر</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-turquoise">للمجموعات:</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• تواصل معنا لترتيبات خاصة</li>
                    <li>• عروض مميزة للمجموعات الكبيرة</li>
                    <li>• إمكانية تخصيص البرنامج حسب الرغبة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}