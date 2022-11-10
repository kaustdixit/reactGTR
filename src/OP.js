import {useState} from 'react';
import axios from "axios";
import { Link,Outlet } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function OP(){
    var [email,setEmail] = useState("");
    var [password , setPassword] = useState("");
    var [result,setResult] = useState("");
    var OwnerPortal = useNavigate();
    var url = " http://localhost:3500/owner/";
    var index;

    function loginValidation(){
        axios.get(url).then(response=>{
            console.log(response.data)
       
        index = response.data.findIndex(item => item.email == email)
        if(index == -1){
            setResult("Not Registered");

        }
        if(password == response.data[index].password){
            OwnerPortal("/OwnerPortal/" + response.data[index].OId);

        }
        else{
            setResult("Incorrect Password");
        }
    });
    }
 return(
    <>
    <hr/>
    <div style={{border:"2px solid gray",width:"45%",textAlign:"center",padding:"9px",marginLeft:"25%",borderRadius:"10px"}}>
    <fieldset style={{fontSize:"18px"}}>
        <legend>Owner Login Form</legend>
        <br/>
        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
        <br/>
        <br/>
        <input required value={password} onChange ={e=>setPassword(e.target.value)} placeholder="Password"/>
        <br/>
        <br/>
        <input type="button" onClick={loginValidation} value="Login"/><br/>
    </fieldset>
    <span>{result}</span>
    </div>
    </>
 )
}
export default OP;