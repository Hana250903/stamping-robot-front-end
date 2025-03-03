import Typography from "antd/lib/typography";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";

interface CardComponentProps {
  heading?: string;
  children: React.ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ heading, children }) => {
  return (
    <Card className="shadow-lg rounded-lg">
      {heading && (
        <>
          <Typography.Title level={5} className="mb-2">
            {heading}
          </Typography.Title>
          <Divider className="my-2" />
        </>
      )}
      <div className="p-4">{children}</div>
    </Card>
  );
};

export default CardComponent;
