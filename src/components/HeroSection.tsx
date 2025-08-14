import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Code, Users, Star } from "lucide-react";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-success/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                کد پلی پال
                <span className="block text-3xl lg:text-4xl font-normal text-white/90 mt-2">
                  Code Play Pal
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 font-light max-w-2xl mx-auto lg:mx-0">
                آموزش برنامه‌نویسی برای کودکان با هوش مصنوعی
              </p>
              <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                یادگیری کدنویسی با آواتار سه‌بعدی هوشمند، گفتگوی صوتی و تعامل زنده
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/auth'}
              >
                <Play className="w-5 h-5 ml-2" />
                شروع رایگان
              </Button>
              <Button variant="floating" size="lg" className="text-lg px-8 py-4">
                <Code className="w-5 h-5 ml-2" />
                مشاهده دمو
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-white">+500</div>
                <div className="text-white/80 text-sm">کودک یادگیرنده</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-white/80 text-sm">درس تعاملی</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">رضایت والدین</div>
              </Card>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroRobot} 
                alt="AI Robot Teacher for Kids Programming"
                className="w-full h-auto rounded-3xl shadow-glow animate-glow"
              />
              <div className="absolute -top-6 -right-6 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
                <Star className="w-4 h-4 inline ml-1" />
                AI هوشمند
              </div>
              <div className="absolute -bottom-6 -left-6 bg-warning text-warning-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <Users className="w-4 h-4 inline ml-1" />
                برای همه سنین
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;