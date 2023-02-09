import {useEffect } from 'react'

const DataTable= (props:any)=>{
    useEffect(()=>{
        props.toaster({
            open:true,msg:"Login to access page"
        })
    },[])

    return(
        <div className="full_page">
            <h1>Data Table</h1>
        </div>
    );
}


export default DataTable;