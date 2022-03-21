import { Link } from "react-router-dom";

const Aa =()=>{
    return(<>
    <ul class="nav nav-pills" >
  <li class="nav-item" >
    <button class="nav-link active"  data-bs-toggle="pill"    >Home</button>
  </li>
  <li class="nav-item" >
    <Link to={"/"}><button class="nav-link"  data-bs-toggle="pill"    >Profile</button></Link>
  </li>
  <li class="nav-item" >
    perro
  </li>
</ul>

    </>)
}

export default Aa;