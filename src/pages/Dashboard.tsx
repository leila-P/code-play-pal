import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { LogOut, User, BookOpen, Trophy, Settings } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would clear authentication state
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">داشبورد کاربری</h1>
              <p className="text-sm text-muted-foreground">خوش آمدید</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            خروج
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-2xl">خوش آمدید به Code Play Pal</CardTitle>
              <CardDescription>
                آماده شروع سفر هیجان‌انگیز برنامه‌نویسی هستید؟
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  شروع یادگیری
                </Button>
                <Button variant="outline" className="gap-2">
                  <Trophy className="w-4 h-4" />
                  مشاهده پیشرفت
                </Button>
                <Button variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" />
                  تنظیمات
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle>پیشرفت شما</CardTitle>
              <CardDescription>وضعیت یادگیری</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>مفاهیم پایه</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>پروژه‌های عملی</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lessons Card */}
          <Card>
            <CardHeader>
              <CardTitle>درس‌های پیشنهادی</CardTitle>
              <CardDescription>آماده شروع</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-medium">مقدمه‌ای بر برنامه‌نویسی</h4>
                  <p className="text-sm text-muted-foreground">شروع سفر کدنویسی</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h4 className="font-medium">متغیرها و داده‌ها</h4>
                  <p className="text-sm text-muted-foreground">ذخیره اطلاعات</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatar Card */}
          <Card>
            <CardHeader>
              <CardTitle>آواتار شما</CardTitle>
              <CardDescription>دستیار هوشمند</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  آواتار هوشمند شما آماده کمک است
                </p>
                <Button size="sm" variant="outline">
                  گفتگو با آواتار
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;