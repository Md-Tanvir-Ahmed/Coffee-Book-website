import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-16">
            <Navbar></Navbar>
            </div>



            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                {/* Dynamin section */}
                <Outlet></Outlet>
                </div>




            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;