import  axios  from "axios";
import {useParams} from 'react-router-dom';
import {useState} from 'react';

function Details(){
    const {id} = useParams();
    var [facObj,setFacObj] = useState({
        facultyId:"",
        fname:"",
        depno:"",
        imgurl:"",
        specialisation:""
    });

    var url = "http://localhost:3000/faculty/"; 
     axios.get(url+id).then(response=>{
        setFacObj(response.data)
     })

    return(
       <>
       <hr/>
       <div style={{border:"2px solid gray", textAlign:"center", padding:"10px", width:"50%",marginLeft:"25%"}}>
       <span>Faculty ID : {facObj.facultyId}</span><br/><br/>
        <img src={facObj.imgurl} height="100" width="100" style={{borderRadius:"30px"}}/><br/><br/>
        <span style={{fontWeight:"bold"}}>Faculty Name : {facObj.fname}</span><br/>
        <span>Faculty Department No : {facObj.Depno}</span><br/>
        <span>Specialisation : {facObj.specialisation}</span>
       </div>
       </>
    )
}
export default Details