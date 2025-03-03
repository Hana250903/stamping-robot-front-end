/* Recent Transaction */
export type RecentTrans = {
    title: string;
    subtitle: string;
    textColor: string; // PascalCase để đồng nhất với codebase
    boldText: boolean;
    line: boolean;
    link: string;
    url: string;
};

/* Product Performance */
export type ProductPerformanceType = {
    id: number;
    name: string;
    post: string;
    pname: string;
    status: string;
    statusColor: string; // Đổi sang PascalCase để dễ đọc hơn
    budget: string;
};

/* Products Card Types */
export type ProductsCards = {
    title: string;
    link: string;
    photo: string;
    salesPrice: number;
    price: number;
    rating: number;
};
