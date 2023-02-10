import React, { useState ,createContext } from 'react'
import reactLogo from './assets/react.svg'
import { Snackbar } from '@mui/material'
import Alert from '@mui/material/Alert'
import './App.css'
import Login_page from './pages/login_page'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import DataTable from './pages/data_table'


function App() {

  const [toast , set_toast]=useState({open:false , msg:"login to open page" })

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login_page/>
    },
    {
      path:"/data_table",
      element:<DataTable toaster= {set_toast} />
    }
  ])

  const handleClose=(open:boolean)=>{
    set_toast({...toast,open:open});
  }
  
  return (
    <div className="App">
      <RouterProvider router={ router} />
      <ToastMessage open={toast.open} close={handleClose} msg={toast.msg} />
      
      
    </div>
  )
}

function ToastMessage(props:any){
  return(
    <Snackbar onClose={()=>props.close(false)} open={props.open} autoHideDuration={6000} >
        <Alert severity="error" sx={{ width: '100%' }} onClose={()=>props.close(false)}>
          {props.msg}
        </Alert>
      </Snackbar>
  );
}

export default App
