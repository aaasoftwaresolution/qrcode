import React , {useState , useEffect } from 'react' ; 
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";


    

export default function LoginScreen() {
    const [ email , setEmail ] = useState ("") ;
    const [ password , setPassword ] = useState ("") ;
    const navigate = useNavigate() ;
    useEffect (()=> {
        const user = JSON.parse(localStorage.getItem('user-info'));
    
        if (user.success === true){
            alert("welcome")
            navigate( "/home" );
        }else{
            console.log("user not found");
        }
    },[])
   


    async function login() {
        
        console.log( email , password )
        let item = { email , password } ;
        let result = await fetch ( "https://qrorder.aaasoftwaresolution.com/api/login" , {
            method : 'POST' ,
            headers : {
                "Content-Type" : "application/json" ,
                "Accept" : "application/json"
            } ,
            body : JSON.stringify (item)
        } ) ;
        result = await result.json ( ) ;
        localStorage.setItem ( "user-info" , JSON.stringify(result))
        if (result===true){
            console.log("success");
           
        }else{
            console.log("errorrrrr");
        }
       
       
    }
    return(
        <>

<div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-transparent-33.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            QRCODE
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input 
                type="text" 
              onChange={(e)=>setEmail(e.target.value)}
                 
                  placeholder="email"
                   autoComplete="off"

                   />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input
                 type="password"
                 autoComplete="off"
                
                 
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </div>
            <button class="btn mt-3" type='submit' onClick={login()}> Staff Login</button>
            <button class="btn mt-3" >Guest</button>
        </form>
        <div class="text-center fs-6">
            {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
        </div>
    </div>
</>
    )

}
