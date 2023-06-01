import React from 'react'
import { useSelector } from 'react-redux'
import './dashboard.scss'

const Dashboard = () => {
    const { user} = useSelector((state) => state.auth)
  return (
    <div className='dashboard'>
        <div className="dashboard__container">
            <div className="dashboard__info">
            <h3>DASHBOARD</h3>
            <h4>My Profile</h4>
            <p>Hello, {user?.name}!</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard