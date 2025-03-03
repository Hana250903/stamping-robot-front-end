import React from "react";

interface IconProps {
  item: React.ElementType;
  level: number;
}

const Icon: React.FC<IconProps> = ({ item: IconComponent, level }) => {
  return (
    <IconComponent
      size={level > 0 ? 5 : 20}
      strokeWidth={1.5}
      className="iconClass"
    />
  );
};

export default Icon;
