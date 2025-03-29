import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import withAuth from "../withAuth"; // Import HOC
import RobotsTable from "./RobotsTable";


const Robot = () => {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Header />

                    <div>
                        {/* code in here */}
                        <RobotsTable/>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default withAuth(Robot); // Bọc HomePage bằng withAuth để bảo vệ

