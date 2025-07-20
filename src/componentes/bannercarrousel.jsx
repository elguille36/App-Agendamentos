import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/header.css";

export default function BannerCarrossel() {
  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/liçoes-com-misionarios.png" alt="fotos de misionarios" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/limpeça-da-capela.png" alt="foto limpeza de capela" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/jesucristo exmplo de serviço.png" alt="foto jesucristo exemplo de serviço" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}