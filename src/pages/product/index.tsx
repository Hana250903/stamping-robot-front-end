import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import withAuth from "../withAuth"; // Import HOC
import ProductTable from "./ProductTable";


const Product = () => {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Header />

                    <div>
                        {/* code in here */}
                        <ProductTable />

                    </div>

                </div>
            </div>
        </div>
    );
};


export default withAuth(Product); // Bọc HomePage bằng withAuth để bảo vệ

