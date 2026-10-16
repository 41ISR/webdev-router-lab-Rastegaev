import { Outlet } from "react-router-dom"
import Header from '../components/Header.jsx';
export const Layout = () => {
    return (
        <>
            <Header />
            <main className="content">
                <Outlet/>
            </main>
        </>
    )
}