import { IImages } from '@/pages/GamePage/model/types/IImages';
import { Image } from 'antd';
import { FC, useState } from 'react';
import cls from './Carousel.module.scss';

interface AlbumProps {
  images: IImages;
}

export const Carousel: FC<AlbumProps> = ({ images }) => {
  const [visibleImageGroup, setVisibleImageGroup] = useState(false);

  return (
    <div className={cls.carouselContainer}>
      <Image.PreviewGroup
        preview={{
          visible: visibleImageGroup,
          onVisibleChange: value => setVisibleImageGroup(value),
        }}
      >
        <Image width='100%' src={images.results[0].image} />
        <div className={cls.imageFlexContainer}>
          {images.results.slice(1, images.results.length).map((img, index) => (
            <div key={index} className={cls.imageContainer}>
              <Image width='100px' src={img.image} />
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
};
