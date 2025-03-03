import Typography from "antd/lib/typography";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";

interface CardComponentProps {
    title?: string;
    children: React.ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, children }) => {
    return (
        <Card className="shadow-md bg-white rounded-lg">
            <div className="py-4 px-6">
                {title && (
                    <Typography.Title level={5} className="mb-0">
                        {title}
                    </Typography.Title>
                )}
            </div>
            <Divider />
            <div>{children}</div>
        </Card>
    );
};

export default CardComponent;
