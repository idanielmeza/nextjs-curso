import { FC } from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './ProductSlidesshow.module.css';
import 'react-slideshow-image/dist/styles.css'

interface Props{
    images: string[];
}

export const ProductSlidesshow: FC<Props> = ({images}) => {
  return (
    <Slide
        easing="ease"
        duration={7000}
        indicators
    >
        {
            images.map(image => {
                const url = `/products/${image}`;

                return (
                    <div key={image} className={styles['each-slide']}>
                        <div style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'cover',
                        }}>
                        </div>
                    </div>
                )
            })
        }

    </Slide>
  )
}
