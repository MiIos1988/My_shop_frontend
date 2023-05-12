import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import img1 from "../../assets/image/slider-img1.jpg";
import img2 from "../../assets/image/slider-img2.jpg";

const HomeSliderComponent = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mx-md-5 my-5 "
      >
        <SwiperSlide>
          <div className="slideField ">
            <div className="imgField">
              <img src={img1} alt="img" />
            </div>
            <div className="linkField d-flex ms-auto me-auto align-items-center">
              <div>
                <h1 className="mb-3 display-5">GO TO THE SHOP</h1>
                <Link to={"/shop"} className="btn btn-dark">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideField d-flex">
            <div className="imgField">
              <img src={img2} alt="img" />
            </div>
            <div className="linkField d-flex ms-auto me-auto align-items-center">
              <div>
                <h1 className="mb-3 display-5">GO TO THE SHOP</h1>
                <Link to={"/shop"} className="btn btn-dark">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderComponent;
