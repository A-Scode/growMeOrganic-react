import {useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const DataTable= (props:any)=>{
    const navigate  =useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem("name")=== null)&&(localStorage.getItem("phone")=== null)&&(localStorage.getItem("email")=== null))
        props.toaster({
            open:true,msg:"Login to access page"
        })
        navigate("/");
    },[])

    return(
        <div className="full_page">
            <h1>Data Table</h1>
        </div>
    );
}


export default DataTable;