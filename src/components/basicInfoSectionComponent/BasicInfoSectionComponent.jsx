
import React from "react";
import InfoComponent from "./components/InfoComponent";
import imgBadge from "../../assets/imgs/basicInfo/badge.png";
import headphone from "../../assets/imgs/basicInfo/headphones.png";
import imgRocket from "../../assets/imgs/basicInfo/rocket.png";

const BasicInfoSectionComponent = () => {
    return (
        <div className="container d-flex justify-content-center ">
            <InfoComponent
                img={imgRocket}
                title={"Free Shipping Worldwide"}
                content={"Free Shipping In The World"}
            />
            <InfoComponent
                img={headphone}
                title={"24/7 Customer Support"}
                content={"Service Support 24/7"}
            />
            <InfoComponent
                img={imgBadge}
                title={"Best Quality Product"}
                content={"Premium Quality Product"}
            />
        </div>
    );
};

export default BasicInfoSectionComponent;