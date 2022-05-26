import { Sales } from 'database/sales';
// Import Swiper React components
import SwiperCorse, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as S from './styled'

SwiperCorse.use([Pagination, Scrollbar, A11y, EffectFade])

const Slider = () => {
    return (
        <>
            <S.SalesInTbilisi>Sales in Tbilisi</S.SalesInTbilisi>
            <Swiper
                // effect='fade'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {Sales.map((sale) => (
                    <SwiperSlide key={sale.shop_id}>
                        <S.ImageContainer>
                            <a href={sale.web_url} target="_blank" rel="noreferrer"><img width='100px' src={sale.image_url} alt='' /></a>
                        </S.ImageContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider