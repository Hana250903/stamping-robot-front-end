// pages/icons.tsx (React + Next.js)
import UiParentCard from "@/components/shared/UiParentCard";

export default function IconsPage() {
  return (
    <div className="container">
      <UiParentCard title="Icons">
        <div className="p-7 pt-0">
          <iframe
            src="https://tabler-icons.io/"
            title="Inline Frame Example"
            frameBorder="0"
            width="100%"
            height="650"
          />
        </div>
      </UiParentCard>
    </div>
  );
}
