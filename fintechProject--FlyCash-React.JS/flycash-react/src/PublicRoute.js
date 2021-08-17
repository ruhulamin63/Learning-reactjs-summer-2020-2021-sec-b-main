import { Redirect , Route } from "react-router-dom";
import { getEmail } from "./components/auth/connect/getSession";

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <>
            <Route
                {...rest}
                render={props =>{
                    return !getEmail() ? <Component {...props} />
                    : <Redirect to={{ pathname: "/officer-dashboard"}}/>                
                } }
            />
            <Route
                {...rest}
                render={props =>{
                    return !getEmail() ? <Component {...props} />
                    : <Redirect to={{ pathname: "/customer-dashboard"}}/>                
                } }
            />
        </>
        
    )
}

export default PublicRoute;