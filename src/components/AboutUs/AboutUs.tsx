import { Button, Card} from "react-bootstrap";
import './AboutUs.css';
const AboutUs = () => {
    return (
        <>
        <div>
        <h2>Sobre nosotros</h2>
        <p>
        Bienvenidos a TomiElectro, tu destino número uno para descubrir las últimas y más emocionantes innovaciones en el mundo de la electrónica. Desde que abrimos nuestras puertas, nos hemos comprometido a ofrecer a nuestros clientes una experiencia única y satisfactoria al adentrarse en el apasionante universo de la tecnología.
        </p>
        <p>
        La historia de TomiElectro comenzó con una visión audaz: proporcionar a nuestros clientes un acceso sencillo a la mejor tecnología disponible. Fundada por un grupo de apasionados por la electrónica, nuestra tienda nació con el propósito de marcar la diferencia en la vida de las personas, conectando a individuos de todas las edades con las últimas novedades en electrónica y gadgets.
        </p>
        <p>
          Todo opinion de ustedes es importante para nosotros asi que no dude en contactarnos ante cualquier inquietud.
        </p>
      </div>

      <div className="container">
      
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/intelI5.jpg" />
            <Card.Body>
              <Card.Title>Procesador intel I5</Card.Title>
              <Card.Text>
                Procedor intel i5 10th generacion.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>

      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/reddragonKumara.jpg" />
            <Card.Body>
              <Card.Title>Red Dragon kumara</Card.Title>
              <Card.Text>
                Teclado red Dragon Kumara k552.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>

      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/ryzen.jpg" />
            <Card.Body>
              <Card.Title>Ryzen i7</Card.Title>
              <Card.Text>
                Procedor Ryzen 7 
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/221_08-02-2023-01-02-13-1107-producto-stka1-5210.jpg" />
            <Card.Body>
              <Card.Title>Gabinete</Card.Title>
              <Card.Text>
                Gabinete Gamer RGB, comodo y practico.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      </div>
      </>
    )

}

export default AboutUs;