import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const importantDates = [
  {
    event: "Application Start Date",
    date: "December 1, 2025",
    time: "10:00 AM",
    status: "active"
  },
  {
    event: "Last Date for Registration",
    date: "December 15, 2025",
    time: "11:59 PM",
    status: "upcoming"
  },
  {
    event: "Admit Card Release",
    date: "January 5, 2026",
    time: "12:00 PM",
    status: "upcoming"
  },
  {
    event: "Entrance Examination",
    date: "January 15-20, 2026",
    time: "Various Slots",
    status: "upcoming"
  },
  {
    event: "Result Declaration",
    date: "February 1, 2026",
    time: "5:00 PM",
    status: "upcoming"
  },
  {
    event: "Counselling Begins",
    date: "February 10, 2026",
    time: "10:00 AM",
    status: "upcoming"
  }
];

export const ImportantDatesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Important Dates</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar with these crucial admission milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {importantDates.map((item, index) => (
                <div 
                  key={index}
                  className="relative animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-primary ml-16 md:ml-0">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            {item.status === "active" && (
                              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                            )}
                            <span className={`text-xs font-semibold uppercase ${item.status === "active" ? "text-secondary" : "text-muted-foreground"}`}>
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {item.event}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {item.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {item.time}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
