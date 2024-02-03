import { IImages } from '@/pages/GamePage/model/types/IImages';
import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface CarouselProps {
  images?: IImages;
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images?.results.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
