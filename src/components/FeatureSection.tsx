import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Mic, Volume2, Gamepad2, Brain, Zap, Play } from "lucide-react";
import codingBlocks from "@/assets/coding-blocks.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";

const FeatureSection = () => {
  const features = [
    {
      icon: Bot,
      title: "آواتار هوشمند سه‌بعدی",
      description: "معلم مجازی با انیمیشن‌های زنده که با کودک شما تعامل می‌کند",
      color: "bg-primary"
    },
    {
      icon: Mic,
      title: "گفتگوی صوتی",
      description: "تشخیص گفتار و پاسخ صوتی برای تعامل طبیعی",
      color: "bg-secondary"
    },
    {
      icon: Gamepad2,
      title: "یادگیری بازی‌محور",
      description: "تبدیل مفاهیم پیچیده برنامه‌نویسی به بازی‌های جذاب",
      color: "bg-success"
    },
    {
      icon: Brain,
      title: "هوش مصنوعی پیشرفته",
      description: "تطبیق محتوا با سطح و سرعت یادگیری هر کودک",
      color: "bg-warning"
    },
    {
      icon: Zap,
      title: "پروژه‌های عملی",
      description: "ساخت پروژه‌های واقعی برای تقویت اعتماد به نفس",
      color: "bg-accent"
    },
    {
      icon: Volume2,
      title: "محتوای چندزبانه",
      description: "پشتیبانی از فارسی و انگلیسی",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-40 translate-y-40"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ویژگی‌های منحصر به فرد
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            پلتفرم ما با استفاده از جدیدترین تکنولوژی‌ها، تجربه‌ای بی‌نظیر از یادگیری برنامه‌نویسی ارائه می‌دهد
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-glow`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                چگونه کار می‌کند؟
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                سیستم ما مراحل یادگیری را از مفاهیم پایه شروع کرده و به تدریج پیچیده‌تر می‌شود
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">آشنایی با مفاهیم</h4>
                  <p className="text-muted-foreground">معرفی مفاهیم پایه با زبان ساده و مثال‌های جذاب</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">تمرین تعاملی</h4>
                  <p className="text-muted-foreground">حل مسائل با راهنمایی آواتار هوشمند</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-success text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">پروژه عملی</h4>
                  <p className="text-muted-foreground">ساخت پروژه‌های واقعی و کاربردی</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5 ml-2" />
              تجربه رایگان
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <img 
                src={codingBlocks} 
                alt="Interactive Coding Blocks"
                className="w-full rounded-2xl shadow-card hover:shadow-glow transition-all duration-300"
              />
              <Card className="p-6 bg-gradient-primary text-white border-0">
                <h4 className="font-bold mb-2">بلوک‌های کد</h4>
                <p className="text-sm text-white/90">درگ و درپ آسان برای کودکان</p>
              </Card>
            </div>
            <div className="space-y-6 mt-8">
              <Card className="p-6 bg-gradient-secondary text-white border-0">
                <h4 className="font-bold mb-2">یادگیری گروهی</h4>
                <p className="text-sm text-white/90">تعامل با سایر کودکان</p>
              </Card>
              <img 
                src={kidsLearning} 
                alt="Kids Learning Programming"
                className="w-full rounded-2xl shadow-card hover:shadow-glow transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;