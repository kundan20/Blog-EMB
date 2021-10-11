import React, { lazy } from 'react';

export const routes = [
    {
        path: '/',
        component: lazy(() => import('./components/AllBlogs'))
    },
    {
        path: '/blog',
        component: lazy(() => import('./components/Home'))
    },
    {
        path: '/login',
        component: lazy(() => import('./components/Login'))
    },
    {
        path: '/signup',
        component: lazy(() => import('./components/Signup'))
    }
]