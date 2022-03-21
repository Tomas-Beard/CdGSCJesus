import { Link, NavLink } from "react-router-dom";

const MainBar = (props) => {
    const navlinkbgcolor = props.navcolor;
    return (
      <>
        <div class="container-fluid">
          <ul class="nav nav-pills nav-fill">
            {props?.Data?.map((items, index) => {
              return (
                <li key={index} class="nav-item"  >
                    
                    <button
                       id={items.idname}
                      data-bs-toggle="pill"
                      class={items.cname ? items.cname : navlinkbgcolor} 
                    >
                    <Link to={`${items.path}`} class="linkto" >
                    {items.title}
                 </Link> 
                    </button>
                   
                    
                    
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };
  
  export default MainBar;

// como esta por fuera de App no funciona Link, hay que pasar el router al index o pasar la complete bar a App