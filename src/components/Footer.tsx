import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">کد پلی پال</h3>
            <p className="text-white/80">
              آموزش برنامه‌نویسی برای کودکان با هوش مصنوعی
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">لینک‌های سریع</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">درباره ما</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">دوره‌ها</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">قیمت‌ها</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">تماس با ما</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">پشتیبانی</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">راهنما</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">سوالات متداول</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">انجمن کاربران</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">گزارش مشکل</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تماس با ما</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80">info@codeplaypal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80">+98 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80">تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 کد پلی پال. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">شرایط استفاده</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">حریم خصوصی</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">کوکی‌ها</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;