import { useAuthContext } from "../../contexts/AuthContext";
import { useOrderContext } from "../../contexts/OrderContext";
import Orders from "../Oders/Orders";

export default function Home() {
    const { isAuthenticated } = useAuthContext();
    return (
        <>
            {isAuthenticated ?
                <Orders />
                :
                <h1>Welcome to Ebag admin page</h1>
            }
        </>
    )

}