import { useAuth } from "../../hooks/useAuth"

export const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            {isLoggedIn ? <p>OK</p> : <p>NO</p>
    }
       </header> 
    )
}