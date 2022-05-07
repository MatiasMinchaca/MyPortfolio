import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const SlideImage = ({ slideImages }) => {
    return (
        <section>
            <SimpleImageSlider
                width={360}
                height={150}
                images={slideImages}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                slideDuration={0.6}
            />
        </section>
    );
};

export default SlideImage;
