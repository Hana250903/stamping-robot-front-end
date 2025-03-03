import Typography from "antd/lib/typography";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";


interface UiParentCardProps {
    title?: string;
    children: React.ReactNode;
    action?: React.ReactNode;
}

const UiParentCard: React.FC<UiParentCardProps> = ({ title, children, action }) => {
    return (
        <Card className="shadow-md bg-white rounded-lg">
            <div className="py-4 px-6 flex justify-between items-center">
                {title && (
                    <Typography.Title level={5} className="mb-0 font-semibold">
                        {title}
                    </Typography.Title>
                )}
                {action && <div>{action}</div>}
            </div>
            <Divider />
            <div>{children}</div>
        </Card>
    );
};

export default UiParentCard;
