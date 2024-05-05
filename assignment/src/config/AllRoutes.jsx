import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import UserModule from '../modules/UserModule';
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/admin/feature/AdminAuth/AdminLogin'
import UserLogin from '../components/user/feature/UserAuth/UserLogin'
import UserSignup from '../components/user/feature/UserAuth/UserSignup'
import AdminRoutes from './admin/AdminRoutes'
import UserRoutes from './user/UserRoutes'

const AllRoutes = () => {
  
        let isTokenPresent = () =>{
            let token = localStorage.getItem('usertoken');
            if(token){
            return true
            }else{
            return false
            }
        }
        let isAdminTokenPresent = () =>{
            let token = localStorage.getItem('admintoken');
            if(token){
            return true
            }else{
            return false
            }
        }

    let userRoutes = useRoutes([
        {
            path : '/',
            element : isTokenPresent() ? (
                <Navigate to='/user/dashboard' replace />
            ) : (<UserLogin />)
        },
        {
            path : '/',
            element : isAdminTokenPresent() ? (
                <Navigate to="/admin/dashboard" replace />
            ) : (<Navigate to="/user/dashboard" />),
        },
        {
            path : '/usersignup',
            element : isTokenPresent() ? (
                <Navigate to='/user/dashboard' replace />
            ) : (<UserSignup />)
        },
        {
            path : '/userlogin',
            element : isTokenPresent() ? (
                <Navigate to='/user/dashboard' replace />
            ) : (<UserLogin />)
        },
        {
            path : '/adminlogin',
            element : isAdminTokenPresent() ? (
                <Navigate to='/admin/dashboard' replace />
            ) : (<AdminLogin />)
        },
        {
            path : '/admin',
            element : <AdminModule />,
            children : AdminRoutes
        },
        {
            path : '/user',
            element : <UserModule />,
            children : UserRoutes
        }
    ])

    return (userRoutes)
}

export default AllRoutes