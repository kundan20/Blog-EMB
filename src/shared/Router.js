import React, { Suspense, lazy } from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import {routes} from '../routes'
import NotFound from '../shared/NotFound'
import Header from '../components/Header'

const Router = () => {
    return (
        <>
            <AppRouter>
                <Suspense fallback={<div>Loading...</div>} >
                    <Header />                
                    <Switch>
                        {routes && routes.map((item, ind) => {
                            return (                    
                                <Route 
                                    exact = {true}
                                    path = {item.path}
                                    render = {() => <item.component />}
                                    key = {ind}
                                />
                            )
                        })}
                        <Route 
                            path = '*'
                            render = {() => <NotFound />}
                        />
                    </Switch>
                </Suspense>
            </AppRouter>
        </>
    )
}

export default Router
