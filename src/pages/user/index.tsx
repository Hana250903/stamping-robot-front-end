import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import withAuth from "../withAuth"; // Import HOC
import UsersTable from "./UsersTable";


const Users = () => {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Header />

                    <div>
                        {/* code in here */}
                        <UsersTable />

                    </div>

                </div>
            </div>
        </div>
    );
};


export default withAuth(Users); // Bọc HomePage bằng withAuth để bảo vệ

