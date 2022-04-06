import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export default function PrivateRoute({ component: Component, ...rest }: any) {
    return (
        <>
            <Route
                {...rest}
                render={props => {
                    return localStorage.getItem("user") ? <Component {...props} /> : <Redirect to='/home' />
                }}>
            </Route>

        </>
    )
}
