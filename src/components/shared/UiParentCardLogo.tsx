'use client';

import React from 'react';
import Logo from 'components/Layout/Full/logo/Logo';
import Card from 'antd/es/card';
import Divider from 'antd/es/divider';

type UiParentCardProps = {
    children: React.ReactNode;
    action?: React.ReactNode;
};

const UiParentCard: React.FC<UiParentCardProps> = ({ children, action }) => {
    return (
        <Card className="shadow-lg overflow-hidden">
            <div className="flex justify-between items-center py-4">
                <div className="text-xl font-semibold">
                    <Logo />
                </div>
                {action}
            </div>
            <Divider />
            <div>{children}</div>
        </Card>
    );
};

export default UiParentCard;
