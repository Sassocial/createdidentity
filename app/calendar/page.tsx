import AppLayout from "../../components/layout/AppLayout";
import CalendarDay from "../../components/calendar/CalendarDay";

export default function CalendarPage() {
  return (
    <AppLayout
      title="Content Calendar"
      subtitle="Plan your week."
    >
      <div className="space-y-6">

        <CalendarDay
          day="Monday"
          posts={[
            "Wedding Suite Reel",
            "Pool Tour",
          ]}
        />

        <CalendarDay
          day="Tuesday"
          posts={[
            "Summer Cocktails",
          ]}
        />

        <CalendarDay
          day="Wednesday"
          posts={[
            "Peak Fitness Carousel",
          ]}
        />

        <CalendarDay
          day="Thursday"
          posts={[
            "Keller Event Promo",
          ]}
        />

      </div>
    </AppLayout>
  );
}