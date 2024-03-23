import { jwtDecode } from "jwt-decode";

function loggedIn(stuff) {
  return jwtDecode(stuff);
}


export default loggedIn;