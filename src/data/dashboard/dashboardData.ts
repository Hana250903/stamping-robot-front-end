import type { RecentTrans, ProductPerformanceType, ProductsCards } from "../../types/dashboard";
// Recent Transactions
const recentTransaction: RecentTrans[] = [
    {
        title: "09:30 am",
        subtitle: "Payment received from John Doe of $385.90",
        textColor: "primary",
        boldText: false,
        line: true,
        link: "",
        url: "",
    },
    {
        title: "10:00 am",
        subtitle: "New sale recorded",
        textColor: "secondary",
        boldText: true,
        line: true,
        link: "#ML-3467",
        url: "",
    },
    {
        title: "12:00 am",
        subtitle: "Payment was made of $64.95 to Michael",
        textColor: "success",
        boldText: false,
        line: true,
        link: "",
        url: "",
    },
    {
        title: "09:30 am",
        subtitle: "New sale recorded",
        textColor: "warning",
        boldText: true,
        line: true,
        link: "#ML-3467",
        url: "",
    },
    {
        title: "09:30 am",
        subtitle: "New arrival recorded",
        textColor: "error",
        boldText: true,
        line: true,
        link: "",
        url: "",
    },
    {
        title: "12:00 am",
        subtitle: "Payment Received",
        textColor: "success",
        boldText: false,
        line: false,
        link: "",
        url: "",
    },
];

// Product Performance Table
const productPerformance: ProductPerformanceType[] = [
    {
        id: 1,
        name: "Sunil Joshi",
        post: "Web Designer",
        pname: "Elite Admin",
        status: "Low",
        statusColor: "primary",
        budget: "$3.9",
    },
    {
        id: 2,
        name: "Andrew McDownland",
        post: "Project Manager",
        pname: "Real Homes WP Theme",
        status: "Medium",
        statusColor: "secondary",
        budget: "$24.5k",
    },
    {
        id: 3,
        name: "Christopher Jamil",
        post: "Project Manager",
        pname: "MedicalPro WP Theme",
        status: "High",
        statusColor: "error",
        budget: "$12.8k",
    },
    {
        id: 4,
        name: "Nirav Joshi",
        post: "Frontend Engineer",
        pname: "Hosting Press HTML",
        status: "Critical",
        statusColor: "success",
        budget: "$2.4k",
    },
    {
        id: 5,
        name: "Tim Geroge",
        post: "Web Designer",
        pname: "Hosting Press HTML",
        status: "Critical",
        statusColor: "indigo",
        budget: "$5.4k",
    },
];

// Product Cards
const productsCard: ProductsCards[] = [
    {
        title: "Boat Headphone",
        link: "/",
        photo: "/images/products/s4.jpg",
        salesPrice: 375,
        price: 285,
        rating: 4,
    },
    {
        title: "MacBook Air Pro",
        link: "/",
        photo: "/images/products/s5.jpg",
        salesPrice: 650,
        price: 900,
        rating: 5,
    },
    {
        title: "Red Velvet Dress",
        link: "/",
        photo: "/images/products/s7.jpg",
        salesPrice: 150,
        price: 200,
        rating: 3,
    },
    {
        title: "Cute Soft Teddybear",
        link: "/",
        photo: "/images/products/s11.jpg",
        salesPrice: 285,
        price: 345,
        rating: 2,
    },
];

export { recentTransaction, productPerformance, productsCard };
