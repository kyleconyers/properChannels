import React from "react"
import {Route, Redirect} from "react-router-dom"

// Route component that checks 
function ProtectedRoute(props) {
    const { component: Component, exact, path, auth, ...rest } = props
    console.log("ATHED"+auth)
    return (
        <Route
            exact={exact}
            path={path}
            render={() =>
                auth ? (
                    <Component {...rest} />
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                    />
                )
            }
        />
    );
}

export default ProtectedRoute