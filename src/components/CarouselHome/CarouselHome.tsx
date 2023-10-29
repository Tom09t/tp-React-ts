import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/setup-moderno.jpg" alt="" />
        <Carousel.Caption>
          <h3>Set up Modernos en tendencia</h3>
          <p>Los mejores set up que estan siendo tendencia en este año 2023.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/mouse_ptico_vs_l_ser.jpg" alt="" />
        <Carousel.Caption>
          <h3>El mejor mouse para gaming.</h3>
          <p>El mejor mouse para juegos de shotting y demas, la mejor velocidad y potencia asegurada.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/descarga.jpg" alt="" />
        <Carousel.Caption>
          <h3>intel vs ryzen</h3>
          <p>
          ¿Este 2023 que marca esta siendo tendencia?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;