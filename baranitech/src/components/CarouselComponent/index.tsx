import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselButtonStyled, CarouselImageStyled, CarouselPtagStyled, CarouselStyled } from "./styles";

const CarouselComponent = () => {
  return (
    <CarouselStyled autoPlay infiniteLoop showThumbs={false}>
      <div>
        <CarouselImageStyled src="/carousel/image1.jpeg" />
        <CarouselPtagStyled className="legend">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</CarouselPtagStyled>
        <CarouselButtonStyled>Read More</CarouselButtonStyled>
      </div>
      <div>
      <CarouselImageStyled src="/carousel/image1.jpeg" />
        <CarouselPtagStyled className="legend">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</CarouselPtagStyled>
        <CarouselButtonStyled>Read More</CarouselButtonStyled>
      </div>
      <div>
      <CarouselImageStyled src="/carousel/image1.jpeg" />
        <CarouselPtagStyled className="legend">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</CarouselPtagStyled>
        <CarouselButtonStyled>Read More</CarouselButtonStyled>
      </div>
    </CarouselStyled>
  );
}

export default CarouselComponent