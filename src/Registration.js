
import { useState } from "react"
import RegistrationObj from "./RegistrationService";

function Registration(){
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");
    var [password1,setPassword1]= useState("");
    var [errors,setErrors] = useState({
        email : "",
        password: "",
        password1 : "",
        name :""
    });
    var [city,setCity] = useState("");
    var [age,setAge] = useState("");
    var [name,setName] = useState("");

    

    function registrationForm(event){
        event.preventDefault();
        var regexEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        var temperrorObj = Object.assign({},errors);
        temperrorObj.name = (name.length<3)?"Minimum 3 characters required":"";
        temperrorObj.email = regexEmail.test(email)?"":"Enter Valid Email ID";
        temperrorObj.password = (password.length<5)?"Minimum 5 characters required":"";
        temperrorObj.password1 = (password1 == password)?"":"Password does not match";
        setErrors(temperrorObj);
        
        var studentObj = {
            name : name,
            email :email,
            age :age,
            city:city,
            password :password
        }
        RegistrationObj.addDetails(studentObj).then(response =>{
            console.log(response.data)
        })
    }
    return(
        <>  
        <hr/>
        <div style={{textAlign:"center",width:"50%",marginLeft:"25%"}}>
        <fieldset>
            <legend> Owner Registration </legend>
            <form onSubmit={registrationForm} noValidate>

            <input value={name} placeholder="Enter Name" onChange={e => setName(e.target.value) }/>
            <span style={{color:"red"}}>{errors.name}</span><br/>

            <input value={email} placeholder="Enter Email Id" onChange={e => setEmail(e.target.value) }/>
            <span style={{color:"red"}}>{errors.email}</span><br/>

            <input value={city} placeholder="Enter City" onChange={e => setCity(e.target.value) }/>
            <span></span><br/>

            <input value={age} placeholder="Enter Age" onChange={e => setAge(e.target.value) }/>
            <span></span><br/>

            <input value={password} placeholder="Create Password" onChange={e => setPassword(e.target.value) }/>
            <span style={{color:"red"}}>{errors.password}</span><br/>

            <input value={password1} placeholder="Re-enter Password" onChange={e => setPassword1(e.target.value) }/>
            <span style={{color:"red"}}>{errors.password1}</span><br/>

            <input type="submit" value="Register" />
            <span></span></form>

        </fieldset>
        </div>
        </>

    )
}
export default Registration