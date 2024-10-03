
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./style.scss";

const ImageReveal = () => {
  const [resetKey, setResetKey] = useState(0);
  const [images, setImages] = useState([
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image1.jpg", className: "image1" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image2.jpg", className: "image2" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image3.jpg",className: "image3" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image4.png", className: "image4" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image5.jpg", className: "image5" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image6.jpg", className: "image6" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image7.jpg", className: "image7" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image8.jpeg", className: "image8" },
    { src: "./src/v1/modules/customer_site/pages/pageLanding/assets/images/image9.jpg", className: "image9" },
  ]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "65px",
      duration: 2600,
      delay: 450,
      reset: true, 
    });

    sr.reveal('.image1', { delay: 50, origin: 'bottom' });
    sr.reveal('.image2', { delay: 50, origin: 'bottom' });
    sr.reveal('.image3', { delay: 300, origin: 'bottom' });
    sr.reveal('.image4', { delay: 900, origin: 'bottom' });
    sr.reveal('.image5', { delay: 1200, origin: 'bottom' });
    sr.reveal('.image6', { delay: 1500, origin: 'bottom' });
    sr.reveal('.image7', { delay: 1800, origin: 'bottom' });
    sr.reveal('.image8', { delay: 2100, origin: 'bottom' });
    sr.reveal('.image9', { delay: 2100, origin: 'bottom' });

    const interval = setInterval(() => {
      setResetKey(Key => Key + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [resetKey, images]); 

  return (
    <div className="MuaSam_Image" key={resetKey}>
      <div className="image-container ">
        <img className="image1" src={images[0].src} alt="" />
        <img className="image2" src={images[1].src} alt="" />
      </div>

      {images.slice(2, 7).map((image) => (
        <div className="image-container" key={image.className}>
          <img className={image.className} src={image.src} alt="" />
        </div>
      ))}
      <div className="image-container ">
        <img className="image8" src={images[7].src} alt="" />
        <img className="image9" src={images[8].src} alt="" />
      </div>
    </div>
  );
};

export default ImageReveal;