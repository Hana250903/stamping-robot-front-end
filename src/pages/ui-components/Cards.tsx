// pages/ui-cards.tsx
import UiChildCard from "@/components/shared/UiChildCard";

// Import các card components
import CardsProps from "@/components/ui-components/cards/CardsProps";
import CardsSlots from "@/components/ui-components/cards/CardsSlots";
import CardsContentWrap from "@/components/ui-components/cards/CardsContentWrap";
import CardsMedia from "@/components/ui-components/cards/CardsMedia";
import CardsWeather from "@/components/ui-components/cards/CardsWeather";
import CardsTwitter from "@/components/ui-components/cards/CardsTwitter";

export default function UiCardsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* With Props */}
      <UiChildCard title="With Props">
        <CardsProps />
      </UiChildCard>

      {/* With Slots */}
      <UiChildCard title="With Slots">
        <CardsSlots />
      </UiChildCard>

      {/* Content Wrap */}
      <UiChildCard title="Content Wrap">
        <CardsContentWrap />
      </UiChildCard>

      {/* Card Media */}
      <UiChildCard title="Card Media">
        <CardsMedia />
      </UiChildCard>

      {/* Weather Card */}
      <UiChildCard title="Weather Card">
        <CardsWeather />
      </UiChildCard>

      {/* Twitter Card */}
      <UiChildCard title="Twitter Card">
        <CardsTwitter />
      </UiChildCard>
    </div>
  );
}
