// pages/ui-buttons.tsx
import UiChildCard from "@/components/shared/UiChildCard";

// Import các button components
import BaseButtons from "@/components/ui-components/button/BaseButtons";
import ColorsButtons from "@/components/ui-components/button/ColorsButtons";
import OutlinedButtons from "@/components/ui-components/button/OutlinedButtons";
import SizeButtons from "@/components/ui-components/button/SizeButtons";
import TextButtons from "@/components/ui-components/button/TextButtons";
import IconColorSizes from "@/components/ui-components/button/IconColorSizes";

export default function UiButtonsPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Default Buttons */}
            <div className="col-span-1 lg:col-span-2">
                <UiChildCard title="Default">
                    <BaseButtons />
                </UiChildCard>
            </div>

            {/* Color Buttons */}
            <UiChildCard title="Colors">
                <ColorsButtons />
            </UiChildCard>

            {/* Outlined Buttons */}
            <UiChildCard title="Outlined">
                <OutlinedButtons />
            </UiChildCard>

            {/* Size Buttons */}
            <div className="col-span-1 lg:col-span-2">
                <UiChildCard title="Size">
                    <SizeButtons />
                </UiChildCard>
            </div>

            {/* Text Buttons */}
            <UiChildCard title="Text Color">
                <TextButtons />
            </UiChildCard>

            {/* Icon Size Buttons */}
            <UiChildCard title="Icon Size">
                <IconColorSizes />
            </UiChildCard>
        </div>
    );
}
