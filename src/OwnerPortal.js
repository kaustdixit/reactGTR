import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function OwnerPortal(){
    const {id} = useParams();
    var [Obj,setObj] = useState({
        studentId : "",
        name: "",
        city: "",
        email : "",
        age: ""

    });
    let url = "http://localhost:3500/owner/";
    axios.get(url + id).then(response=>{
        setObj(response.data);
    })
  return(
    <>
    <hr/>
     <div style={{border:"2px solid black",width:"40%",marginLeft:"20%"}}>
        <span> ID : {Obj.studentId}</span><br/>
        <span> Name : {Obj.name}</span><br/>
        <span> City : {Obj.city}</span><br/>
        <span> Email : {Obj.email}</span><br/>
        <span> Age : {Obj.age}</span><br/>
     </div> 
    </>
  )
}
export default OwnerPortal;