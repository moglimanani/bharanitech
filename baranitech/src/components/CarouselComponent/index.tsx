import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselButtonStyled, CarouselImageStyled, CarouselPtagStyled, CarouselStyled } from "./styles";

const CarouselComponent = () => {
  return (
    <CarouselStyled autoPlay infiniteLoop showThumbs={false}>
      <div>
        <CarouselImageStyled src="/carousel/bharaniTechphase1.jpg" />
        <CarouselPtagStyled className="legend"> Hands-on expertise in troubleshooting and commissioning of power system 
protection, switchyard & switchgear equipment’s in the oil and gas, pulp and paper sectors in 
Indonesia and Singapore. </CarouselPtagStyled>
        {/* <CarouselButtonStyled>Read More</CarouselButtonStyled> */}
      </div>
      <div>
      <CarouselImageStyled src="/carousel/bharaniTechphase2.jpg" />
        <CarouselPtagStyled className="legend">
        METHODOLOGIESI like are Interactive lectures and knowledge sharing ,
Audio visual stimulants , Group discussion, Experiential learning activities and
Assessment
        </CarouselPtagStyled>
        {/* <CarouselButtonStyled>Read More</CarouselButtonStyled> */}
      </div>
      <div>
      <CarouselImageStyled src="/carousel/bharaniTechphase3.jpg" />
        <CarouselPtagStyled className="legend">We actively leads the power system protection training programmed and has trained 
        750+engineers in the field of power system protection a</CarouselPtagStyled>
        {/* <CarouselButtonStyled>Read More</CarouselButtonStyled> */}
      </div>
    </CarouselStyled>
  );
}

export default CarouselComponent