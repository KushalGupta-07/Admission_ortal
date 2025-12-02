import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertCircle, Calendar } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Last Date Extended for Online Application",
    date: "2025-12-01",
    type: "important",
    description: "The last date for submitting online applications has been extended to December 15, 2025."
  },
  {
    id: 2,
    title: "Entrance Exam Schedule Released",
    date: "2025-11-28",
    type: "new",
    description: "Check the detailed schedule for entrance examinations scheduled in January 2026."
  },
  {
    id: 3,
    title: "Document Verification Dates Announced",
    date: "2025-11-25",
    type: "update",
    description: "Document verification will be conducted from January 20-25, 2026 at designated centers."
  },
  {
    id: 4,
    title: "Revised Merit List Published",
    date: "2025-11-20",
    type: "important",
    description: "The revised merit list for first-year admissions has been published on the portal."
  }
];

export const NoticesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Important Notices</h2>
            <p className="text-muted-foreground">Stay updated with latest announcements</p>
          </div>
        </div>

        <div className="grid gap-4">
          {notices.map((notice, index) => (
            <Card 
              key={notice.id} 
              className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-primary cursor-pointer group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={notice.type === "important" ? "destructive" : "default"}
                          className="uppercase text-xs"
                        >
                          {notice.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(notice.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {notice.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
