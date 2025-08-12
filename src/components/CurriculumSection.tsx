import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Baby, 
  GraduationCap, 
  Trophy, 
  Clock, 
  CheckCircle, 
  Star,
  Puzzle,
  Rocket,
  Brain
} from "lucide-react";

const CurriculumSection = () => {
  const levels = [
    {
      id: 1,
      title: "کودکان نوپا (5-7 سال)",
      icon: Baby,
      color: "bg-success",
      duration: "2-3 ماه",
      projects: 4,
      skills: ["منطق پایه", "الگوها", "دنباله‌ها", "رنگ‌ها و اشکال"],
      description: "آشنایی با مفاهیم اولیه برنامه‌نویسی از طریق بازی و فعالیت‌های بصری"
    },
    {
      id: 2,
      title: "نوجوانان (8-12 سال)",
      icon: GraduationCap,
      color: "bg-primary",
      duration: "4-6 ماه",
      projects: 8,
      skills: ["بلوک کدنویسی", "حلقه‌ها", "شرط‌ها", "متغیرها"],
      description: "یادگیری مفاهیم اصلی برنامه‌نویسی با محیط بصری و پروژه‌های جذاب"
    },
    {
      id: 3,
      title: "نوجوانان پیشرفته (13-16 سال)",
      icon: Trophy,
      color: "bg-accent",
      duration: "6-8 ماه",
      projects: 12,
      skills: ["Python", "JavaScript", "وب سایت", "بازی‌سازی"],
      description: "ورود به دنیای حرفه‌ای برنامه‌نویسی با زبان‌های واقعی"
    }
  ];

  const modules = [
    {
      title: "مفاهیم پایه",
      icon: Puzzle,
      lessons: 12,
      color: "text-success"
    },
    {
      title: "منطق برنامه‌نویسی",
      icon: Brain,
      lessons: 18,
      color: "text-primary"
    },
    {
      title: "پروژه‌های عملی",
      icon: Rocket,
      lessons: 24,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            برنامه آموزشی جامع
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مسیر یادگیری طراحی شده برای تمام سنین از کودکی تا نوجوانی
          </p>
        </div>

        {/* Learning Levels */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {levels.map((level, index) => (
            <Card key={level.id} className="p-8 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`${level.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow`}>
                <level.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{level.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{level.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">مدت زمان: {level.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{level.projects} پروژه عملی</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-foreground">مهارت‌های کلیدی:</h4>
                <div className="flex flex-wrap gap-2">
                  {level.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                جزئیات بیشتر
              </Button>
            </Card>
          ))}
        </div>

        {/* Learning Modules Overview */}
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            ماژول‌های آموزشی
          </h3>
          <p className="text-lg text-muted-foreground">
            هر دوره شامل ماژول‌های متنوع و تعاملی است
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 text-center bg-white border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <module.icon className={`w-12 h-12 mx-auto mb-4 ${module.color}`} />
              <h4 className="text-xl font-semibold text-foreground mb-2">{module.title}</h4>
              <p className="text-muted-foreground mb-4">{module.lessons} درس تعاملی</p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <Card className="p-8 bg-gradient-hero text-white border-0 shadow-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">آماده شروع هستید؟</h3>
            <p className="text-white/90 mb-6">
              دوره مناسب فرزند خود را انتخاب کنید و سفر یادگیری را شروع کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="floating" size="lg">
                <CheckCircle className="w-5 h-5 ml-2" />
                مشاوره رایگان
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                مشاهده نمونه درس
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;