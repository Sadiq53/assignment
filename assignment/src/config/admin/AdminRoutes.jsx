import React from 'react'
import AdminLogout from '../../components/admin/feature/AdminAuth/AdminLogout'
import AdminDashBoard from '../../components/admin/feature/AdminDashBoard/AdminDashBoard'
import AdminProfile from '../../components/admin/feature/AdminProfile/AdminProfile'

const AdminRoutes = [
    {
        path : 'logout',
        element : <AdminLogout />
    },
    {
        path : 'dashboard',
        element : <AdminDashBoard />
    },
    {
        path : 'profile',
        element : <AdminProfile />
    },
]

export default AdminRoutes