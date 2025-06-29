import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="page">
                <Outlet />
            </main>
        </>
    );
}