import {useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from 'axios'


const DataTable= (props:any)=>{
    const navigate  =useNavigate();
    const [rows , set_rows] = useState([]);
    const columns =[
        {field : 'id' , headerName : 'SNo.' , width:50},
        {field : 'title' , headerName : 'Title' , width:150},
        {field : 'price' , headerName : 'Price' , width:100},
        {field : 'category' , headerName : 'Category' , width:150},
    ]

    console.log(localStorage)

    useEffect(()=>{

        setTimeout(()=>{
            let name =  localStorage.getItem("name");
            let phone =  localStorage.getItem("phone");
            let email =  localStorage.getItem("email");
            console.log(name , phone , email)
        if ((name=== null)&&(phone=== null)&&(email=== null)){
        props.toaster({
            open:true,msg:"Login to access page"
        })
        console.table(localStorage)
        // navigate("/");
    }
    localStorage.clear()
} , 100)

    axios.get('https://fakestoreapi.com/products').then(
        data=>{
            set_rows(data.data)
        }
    )



    },[])

    return(
        <div className="full_page">
            <h1>Data Table</h1>
            <DataGrid sx={{  height:"400px" , width: "480px"  }} 
            rows = {rows} columns={columns} 
            
            /> 
        </div>
    );
}


export default DataTable;