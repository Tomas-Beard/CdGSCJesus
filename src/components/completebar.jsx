import mainBarData from "../data/mainBarData";
import Logobar from "./logobar";
import { useEffect, useState } from "react";
import MainBar from "./mainbar";

const CompleteBar = () => {
  const [lat, Setlat] = useState();
  useEffect(() => {
    window.onscroll = function () {
      var y = window.scrollY;
      console.log(y);
      Setlat(y);
    };
  }, []);

  let as = "";
  if (lat > 75) {
    as = "sticky-top rounded-bottom ";
  } else {
    as = "";
  }
  return (
    <div id="alpha" class={as}>
      <div class="shadow p-3 mb-5  rounded">
        <nav class="container-fluid">
          <Logobar></Logobar>
          <MainBar
            Data={mainBarData}
            navcolor={"nav-link bg-white"}
            
          ></MainBar>
        </nav>
      </div>
    </div>
  );
};

export default CompleteBar;