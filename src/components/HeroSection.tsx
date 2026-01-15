import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const HeroSection = () => {
  const navigate = useNavigate();
  const {
    user
  } = useAuth();
  const handleNewRegistration = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };
  const handleCheckStatus = () => {
    navigate("/application-status");
  };

  return (
    <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-sm font-medium">
            Admissions Open for 2025-26
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to Student Admission Portal
          </h1>

          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Apply for undergraduate and postgraduate programs. Complete your application process online with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 shadow-lg hover:shadow-xl transition-all"
              onClick={handleNewRegistration}
            >
              <FileText className="h-5 w-5" />
              New Registration
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white"
              onClick={handleCheckStatus}
            >
              <CheckCircle className="h-5 w-5" />
              Check Application Status
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-sm text-primary-foreground/80">Applications Received</div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground p-1">Applications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground p-1">Institutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground p-1">Courses</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Visual */}
        <ScrollReveal animation="scale-in" delay={500} className="hidden lg:block relative">
          <div className="relative animate-float">
            <div className="relative z-10 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-2xl rounded-2xl border border-white/10 p-8 shadow-2xl">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary rounded-full blur-2xl opacity-40"></div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Application Status</div>
                    <div className="text-lg font-semibold">In Progress</div>
                  </div>
                  <div className="ml-auto">
                    <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-primary rounded-full animate-shimmer bg-[size:200%_100%]"></div>
                    </div>
                  </div>
                </div>

                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {i}
                    </div>
                    <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border border-primary/20 rounded-2xl"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};