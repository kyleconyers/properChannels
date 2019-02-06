import React from "react"
import {Route, Redirect} from "react-router-dom"

// Route component that checks 
function ProtectedRoute(props) {
    const { component: Component, exact, path, auth, loaded, ...rest } = props
    console.log("LOADED"+loaded)
    console.log("ATHED"+auth)
    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={() =>
                // Check that data has fully loaded before allowing redirect
                loaded ? (
                    // Render component only if authorized user is present
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
                ) : (
                    // Don't render component if data not loaded
                    null
                )
            }
        />
    );
}

export default ProtectedRoute