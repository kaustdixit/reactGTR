import axios, { Axios } from "axios"

var RegistrationObj = {}
var url = "http://localhost:3500/owner/"
 RegistrationObj.addDetails = function(obj){

    return axios.post(url,obj)
 }
export default RegistrationObj