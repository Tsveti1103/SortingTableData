import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Orders from "../Oders/Orders";

export default function Home() {
    const { isAuthenticated } = useAuthContext();
    return (
        <>
            {isAuthenticated ?
                <Orders />
                :
                <h1>Welcome to admin page. Pleace <Link to="/login" style={{  'text-decoration': 'none',color:'#158e8d' }}>login</Link> to view orders.</h1>
            }
        </>
    )

}