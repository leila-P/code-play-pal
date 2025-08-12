import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Cpu, 
  Globe, 
  Headphones,
  Eye,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Bot,
      title: "ReadyPlayer + Mixamo",
      description: "آواتارهای سه‌بعدی با انیمیشن‌های طبیعی و حرفه‌ای",
      features: ["آواتار شخصی‌سازی شده", "انیمیشن‌های زنده", "تعامل بصری"],
      color: "bg-primary"
    },
    {
      icon: Cpu,
      title: "Three.js + Node.js",
      description: "موتور گرافیکی پیشرفته برای تجربه سه‌بعدی بی‌نظیر",
      features: ["گرافیک سه‌بعدی", "عملکرد بالا", "سازگاری کامل"],
      color: "bg-secondary"
    },
    {
      icon: Globe,
      title: "OpenAI GPT",
      description: "هوش مصنوعی پیشرفته برای گفتگو و آموزش هوشمند",
      features: ["پاسخ‌های هوشمند", "تطبیق محتوا", "یادگیری پیوسته"],
      color: "bg-accent"
    },
    {
      icon: Headphones,
      title: "STT & TTS",
      description: "تبدیل گفتار به متن و متن به گفتار با کیفیت بالا",
      features: ["تشخیص صوت دقیق", "صدای طبیعی", "پشتیبانی چندزبانه"],
      color: "bg-success"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "تشخیص بصری",
      description: "درک و تحلیل کدهای نوشته شده توسط کودک"
    },
    {
      icon: Zap,
      title: "پردازش سریع",
      description: "پاسخ فوری و بدون تاخیر در تمام تعاملات"
    },
    {
      icon: Shield,
      title: "امنیت داده‌ها",
      description: "حفاظت کامل از اطلاعات شخصی کودکان"
    },
    {
      icon: Smartphone,
      title: "چندپلتفرمه",
      description: "دسترسی از طریق وب، موبایل و تبلت"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-40 left-1/4 w-2 h-20 bg-primary/20 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-16 bg-secondary/20 rounded-full transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-24 bg-accent/20 rounded-full transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            تکنولوژی پیشرفته
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            پشت صحنه فناوری
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ترکیب بهترین تکنولوژی‌های روز دنیا برای ایجاد تجربه‌ای منحصر به فرد
          </p>
        </div>

        {/* Main Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-all duration-500 transform hover:-translate-y-3 bg-gradient-card border-0 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={`${tech.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow animate-glow`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{tech.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{tech.description}</p>
              
              <div className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20 animate-slide-up">
          <Card className="p-8 bg-gradient-hero text-white border-0 shadow-glow">
            <h3 className="text-3xl font-bold text-center mb-8">معماری سیستم</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-4">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">ورودی کاربر</h4>
                <p className="text-sm text-white/80">صوت، متن، تصویر</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Cpu className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">پردازش AI</h4>
                <p className="text-sm text-white/80">تحلیل و درک محتوا</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Bot className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">آواتار 3D</h4>
                <p className="text-sm text-white/80">نمایش و تعامل</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Headphones className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">خروجی</h4>
                <p className="text-sm text-white/80">صوت، تصویر، فیدبک</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Capabilities */}
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            قابلیت‌های پیشرفته
          </h3>
          <p className="text-lg text-muted-foreground">
            فناوری‌هایی که تجربه یادگیری را به سطح جدیدی می‌برد
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 bg-white border-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <capability.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;