import {Carousel} from "react-bootstrap";

function CarouselSpotlightMoviesItemComponent (){
    return (
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-300"
          src="https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg"
          height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
}

export default CarouselSpotlightMoviesItemComponent