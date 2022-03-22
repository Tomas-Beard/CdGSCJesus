
import Map from "../components/Map"
const Turnos =  () =>{
    return(
        <>
       <img src="/004.png" 
       height={400}
        width={1366}
        class="wall-image"
        alt="perrito"/> 

        <div class="container">
        
            <div className="card" id="cardturnos">
                <div class="row"><div class="col-6">
                    <h3>Turnos</h3>
              <h4> Para solicitarlos, Comunicate a nuestas lineas telefonicas</h4>
              <h5>Horario de Atención: <br/>8 a 18hs</h5>
              </div>
              <div class="col-6"> <h3>
                Lineas Telefonicas
              </h3>
              <h4 ><a href="tel:+541120800912">(11)2080-0912</a></h4>
              <h4><a href="tel:+541120832806">(11)2083-2806</a></h4></div>
              <Map></Map>
              </div>
              
            </div>
            <footer class="footer">
          
          
        </footer>
        
        </div>
        </>
    )
    }
    
    export default Turnos;