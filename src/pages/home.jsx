import Card from "../components/card";
import Carrousel from "../components/carrousel";
import MainBar from "../components/mainbar";
import mainPageData from "../data/mainpageData";
import Map from "../components/Map"
import { MdOutlinePlace } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";

const Home =  () =>{
return(<>
    <div>
        <Carrousel></Carrousel>
    </div>  
<div class="container"><main class="main"><div class="grid">
    <MainBar 
    Data={mainPageData}
    navcolor={"nav-link bg-secondary bg-opacity-50"}
    ></MainBar>
    <Card imagen={"/001.png"}parrafo={"Brindar un servicion de asistencia medica de vanguardia y la mas alta calidad, adecuandonos a las necesidades de nuestro pacientes"} titulo={"Mision"}></Card>
    <Card imagen={"/001.png"}parrafo={"Ser un centro medico comprometido con la prevencion y atencion de pacientes cons enfermedades digestivas, en constante capacitacion y actualizacion tecnologica, dentro de los parametros de etica y dignidad, tanto para los pacientes como para el personal de la institucion"} titulo={"Vision"}></Card>
    <Card imagen={"/001.png"}parrafo={<ul>
        <li>Servir con amor al projimo es nuestra prioridad</li>
        <li>Cuidar la vida y la condición humana</li>
        <li>
          Entender y acompañar al paciente en su dolencia en un ambiente
          calido y respetuoso
        </li>
      </ul>} titulo={"Valores"}></Card>


</div></main>
<footer class="footer">
          <Map></Map>
          <ul className="ulist">
            <div className="card">
              <h3>
                <MdOutlinePlace />
                Brandsen 434
              </h3>
              <h4>Quilmes,Buenos Aires</h4>
              <h5>Horario de Atención: <br/>8 a 18hs</h5>
            </div>
            <div className="card">
              <h3>
                <BsTelephoneInbound />
                Turnos
              </h3>
              <h4>(11)2080-0912</h4>
              <h4>(11)2083-2806</h4>
            </div>
          </ul>
        </footer>
</div>      
</>    
)}


export default Home;