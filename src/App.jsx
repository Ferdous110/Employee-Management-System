import React, { Children, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   setLocalStorage();
  // },[]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      console.log(admin)
    } else if (email === 'user@me.com' && password ==='123') {
      setUser('employee')
      console.log(employee)
    } else {
      alert("Invalid Credential")
    }

  }


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  );
}

export default App
