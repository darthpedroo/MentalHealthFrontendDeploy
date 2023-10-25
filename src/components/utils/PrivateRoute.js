import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const PrivateRoute = () => {
    let {user} = useContext(AuthContext)
    
  //  console.log("User: " ,user)
 //   console.log("Autenticado")

    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoute