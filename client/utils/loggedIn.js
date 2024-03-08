import { jwtDecode } from "jwt-decode";

function LoggedIn(stuff) {
    const token = jwtDecode(stuff.token)   ;
    return token;
  }





// function giveMeMyStuff(stuff) {
//   return jwtDecode(stuff);
// }


export default LoggedIn;