import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/carousel/image1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/carousel/image1.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/carousel/image1.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent