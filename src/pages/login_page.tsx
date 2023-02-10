import {useRef , useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate , Navigate} from 'react-router-dom'
import "./login.css"


const Login_page= (props:any)=>{

    const ref = useRef({});
    const [phone_error, set_phone_error] = useState(false);
    const [email_error, set_email_error] = useState(false);
    const [name, set_name] = useState("");
    const [phone, set_phone] = useState("");
    const [email, set_email] = useState("");

    const navigate = useNavigate();

    function phone_validation():boolean{
        if (phone.length !== 10){
        set_phone_error(true);
        return true}
        return false;
    }
    function email_validation():boolean{
        if (email.search("@") == -1 ){
            set_email_error(true);
            return true}
            return false;
    }

    const submitForm = (e:any)=>{
        // e.stopPropagation();
        e.preventDefault();
        
        const name_el:any = ref.current.name?;
        const phone_el:any = ref.current.phone?;
        const email_el:any = ref.current.email?;
        if ((phone_validation()===true) && (email_validation()=== true)){
            console.log("validation failed")
            return false;
        }
        
        
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        
        navigate("data_table")

    }

    return(
        <div className="full_page">
            <h1>Login Form</h1>

            <form name = "details_form"  className='details_form' onSubmit={submitForm}>

            <TextField
          required
          ref = {el=>ref.current.name = el}
          id="name"
          label="Name"
        name= "details_form"
        value={ name}
        onChange = {e=>set_name(e.target.value)}
        />
        <TextField
        error={phone_error}
        onInput= {()=>set_phone_error(false)}
          required
          id="phone"
          label="Phone Number"
          type="number"
          inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
          ref = {el=>ref.current.phone = el}
        name= "details_form"
        value={ phone}
        onChange = {e=>set_phone(e.target.value)}

        />
        <TextField
        error={email_error}
        onInput= {()=>set_email_error(false)}
          required
          id="email"
          label="Email"
          type="email"
          ref = {el=>ref.current.email = el}
        name= "details_form"
        value={ email}
        onChange = {e=>set_email(e.target.value)}
        />

        <Button variant="contained"
        name= "details_form"
        type='submit'
        >Submit</Button>

            </form>
        </div>
    );
}


export default Login_page;
