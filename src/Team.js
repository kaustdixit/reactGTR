import {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Team(){
   var [result,setResult]  = useState("");
   var url = "http://localhost:3500/team/?_sort=Id&_order=asc";
   
   axios.get(url).then(response=>{
       console.log(response.data)
        setResult(response.data.map(item=>{
           return <tr style={{margin:"5px"}}>
               <td>{item.Id}</td>
               <td>{item.fname}</td>
               <td>{item.specialisation}</td>
               <td>{item.depno}</td>
               {/* <td><Link to={"/Details/" + item.Id} ><img src="https://pluspng.com/img-png/iconmonstr-eye-6-icon-image-1459-512.png" height="30" width="30"/></Link></td> */}
           </tr>    
       }))
   })
   return(
       <>
       <h3 align="center">Our Team</h3><hr/>
       <div style={{margin:"20px",padding:"5%"}}>
       <table>
           <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Specialisation</th>
               <th>Department</th>
           </tr>
           {result}
       </table>
       </div>
       </>
   )
}


export default Team



