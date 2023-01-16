import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

const PrivateRoute = () => { 
  const { loggedIn, checkinStatus } = useAuthStatus()

  if(checkinStatus){
    return (
      <div className="spinner">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#000"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  
  return (
    loggedIn ? <Outlet /> : <Navigate to="/Login" />
  )
} 

export default PrivateRoute