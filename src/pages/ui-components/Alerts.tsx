// pages/alerts.tsx
import UiParentCard from "@/components/shared/UiParentCard";
import UiChildCard from "@/components/shared/UiChildCard";

import Basic from "@/components/ui-components/alert/Basic";
import Filled from "@/components/ui-components/button/Filled";
import Closable from "@/components/ui-components/alert/Closable";

export default function AlertsPage() {
    return (
        <UiParentCard title="Alerts">
            <div className="grid grid-cols-1 gap-4">
                {/* Basic Alert */}
                <UiChildCard title="Alert Basic">
                    <Basic />
                </UiChildCard>

                {/* Filled Alert */}
                <UiChildCard title="Alert Filled">
                    <Filled />
                </UiChildCard>

                {/* Closable Alert */}
                <UiChildCard title="Alert Closable">
                    <Closable />
                </UiChildCard>
            </div>
        </UiParentCard>
    );
}
