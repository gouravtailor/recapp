import { Outlet, Link } from "react-router-dom";

export default function Admin(){
    // admin can navigate to every page
    // Links for : /sales, /R11, /R12, /R13, /R14, /clients
    
    return (<>
    <Link to="/">Admin</Link>
    <Link to="/sales">Sales</Link>
    <Link to="/r11">R11</Link>
    <Link to="/r12">R12</Link>
    <Link to="/r13">R13</Link>
    <Link to="/r14">R14</Link>
    <Link to="/clients">Clients</Link>

    <Outlet />
    </>);
}