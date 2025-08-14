import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Smartphone, Shield } from "lucide-react";

const Auth = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 11) {
      toast({
        title: "خطا",
        description: "لطفا شماره تلفن معتبر وارد کنید",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate SMS sending
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      toast({
        title: "کد ارسال شد",
        description: `کد تایید به شماره ${phoneNumber} ارسال شد`,
      });
    }, 1500);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otpValue !== "12345") {
      toast({
        title: "کد نادرست",
        description: "کد وارد شده صحیح نمی‌باشد",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast({
        title: "ورود موفق",
        description: "به داشبورد هدایت می‌شوید",
      });
      navigate("/dashboard");
    }, 1000);
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setOtpValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            {step === "phone" ? (
              <Smartphone className="w-6 h-6 text-primary" />
            ) : (
              <Shield className="w-6 h-6 text-primary" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-foreground">ورود به حساب کاربری</h1>
          <p className="text-muted-foreground">
            {step === "phone" 
              ? "شماره تلفن خود را وارد کنید" 
              : "کد تایید ارسال شده را وارد کنید"
            }
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl text-center">
              {step === "phone" ? "شماره تلفن" : "کد تایید"}
            </CardTitle>
            <CardDescription className="text-center">
              {step === "phone" 
                ? "برای دریافت کد تایید شماره خود را وارد کنید"
                : `کد تایید به شماره ${phoneNumber} ارسال شد`
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {step === "phone" ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تلفن</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="09123456789"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-left"
                    dir="ltr"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "در حال ارسال..." : "دریافت کد تایید"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-center block">کد تایید ۵ رقمی</Label>
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={5}
                      value={otpValue}
                      onChange={(value) => setOtpValue(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    کد تست: 12345
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading || otpValue.length !== 5}
                  >
                    {isLoading ? "در حال بررسی..." : "ورود"}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={handleBackToPhone}
                  >
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    بازگشت و تغییر شماره
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Back to home */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="text-sm"
          >
            بازگشت به صفحه اصلی
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;