import React from 'react'
import UserDashboard from '../../components/user/feature/UserDashBoard/UserDashboard'
import UserLogout from '../../components/user/feature/UserAuth/UserLogout' 
import UserProfile from '../../components/user/feature/UserProfile/UserProfile'


    let UserRoutes = [
        {
            path : "dashboard",
            element : <UserDashboard />
        },
        {
            path : "logout",
            element : <UserLogout />
        },
        {
            path : "profile",
            element : <UserProfile />
        },
    ]

export default UserRoutes