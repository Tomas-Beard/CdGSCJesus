const Carrousel =()=>{
    return(<div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="/001.png"
                height={400}
                width={1600}
                className="d-block w-100"
                alt="perrito"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/001.png"
                height={400}
                width={1600}
                className="d-block w-100"
                alt="ag"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="/001.png"
                height={400}
                width={1600}
                className="d-block w-100"
                alt="gatito"
              />
            </div>
           
          </div>
          </div>
          </div>)
}

export default Carrousel
