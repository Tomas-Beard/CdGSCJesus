
const Card =(props)=>{
    return(
        <div class="card" >
  <img src={props.imagen}
  height={100}
  width={300}
  className="card-img-top"/>
  <div class="card-body">
    <h2 class="card-title">{props.titulo}&rarr;</h2 >
    <p class="card-text">{props.parrafo}</p>
  </div>
</div>
    )
}

export default Card;