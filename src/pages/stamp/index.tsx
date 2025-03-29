import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import withAuth from "../withAuth"; // Import HOC
import StampTable from "./StampTable";


const Stamp = () => {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Header />

                    <div>
                        {/* code in here */}
                        <StampTable/>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default withAuth(Stamp); // Bọc HomePage bằng withAuth để bảo vệ

