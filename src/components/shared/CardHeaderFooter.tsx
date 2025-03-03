import Typography from "antd/lib/typography";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";


interface CardWithHeaderFooterProps {
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

const CardWithHeaderFooter: React.FC<CardWithHeaderFooterProps> = ({
    title,
    children,
    footer,
}) => {
    return (
        <Card bordered={true} className="shadow-sm rounded-lg">
            {title && (
                <>
                    <Typography.Title level={5} className="mb-2">
                        {title}
                    </Typography.Title>
                    <Divider className="my-2" />
                </>
            )}

            <div className="py-2">{children}</div>

            <Divider className="my-2" />

            {footer && <div className="flex justify-end">{footer}</div>}
        </Card>
    );
};

export default CardWithHeaderFooter;
