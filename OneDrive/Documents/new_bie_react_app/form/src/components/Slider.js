import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
        'new_bie_proj/first/IMG-20240918-WA0013.jpg',
        'new_bie_proj/first/IMG-20240918-WA0014.jpg',
        'new_bie_proj/first/IMG-20240918-WA0015.jpg',
        'new_bie_proj/first/IMG-20240918-WA0016.jpg',
        'new_bie_proj/first/IMG-20240918-WA0017.jpg',
        'new_bie_proj/first/IMG-20240918-WA0018.jpg',
        'new_bie_proj/first/IMG-20240918-WA0019.jpg',
        'new_bie_proj/first/IMG-20240918-WA0020.jpg',
        'new_bie_proj/first/IMG-20240918-WA0021.jpg',
        'new_bie_proj/first/IMG-20240918-WA0022.jpg',
        
  ];

  const images_second =[
        'new_bie_proj/second/IMG-20240814-WA0038.jpg',
        'new_bie_proj/second/IMG-20240814-WA0039.jpg',
        'new_bie_proj/second/IMG-20240814-WA0040.jpg',
        'new_bie_proj/second/IMG-20240814-WA0042.jpg',
        'new_bie_proj/second/IMG-20240814-WA0043.jpg',
        'new_bie_proj/second/IMG-20240814-WA0051.jpg',
        'new_bie_proj/second/IMG-20240814-WA0052.jpg',
        'new_bie_proj/second/IMG-20240814-WA0056.jpg',
        'new_bie_proj/second/IMG-20240814-WA0057.jpg',
        'new_bie_proj/second/IMG-20240814-WA0064.jpg',
        'new_bie_proj/second/IMG-20240814-WA0065.jpg',
        'new_bie_proj/second/IMG-20240814-WA0066.jpg',
        'new_bie_proj/second/IMG-20240814-WA0067.jpg',
        'new_bie_proj/second/IMG-20240814-WA0068.jpg',
        'new_bie_proj/second/IMG-20240814-WA0069.jpg',
        'new_bie_proj/second/IMG-20240814-WA0070.jpg',
        'new_bie_proj/second/IMG-20240814-WA0071.jpg',
        'new_bie_proj/second/IMG-20240814-WA0072.jpg',
        'new_bie_proj/second/IMG-20240814-WA0073.jpg',
        'new_bie_proj/second/IMG-20240814-WA0074.jpg',
        'new_bie_proj/second/IMG-20240814-WA0075.jpg',
        'new_bie_proj/second/IMG-20240814-WA0076.jpg',
        'new_bie_proj/second/IMG-20240814-WA0077.jpg',
        'new_bie_proj/second/IMG-20240814-WA0078.jpg',
        'new_bie_proj/second/IMG-20240814-WA0079.jpg',
        'new_bie_proj/second/IMG-20240814-WA0080.jpg',
        'new_bie_proj/second/IMG-20240814-WA0082.jpg',
        'new_bie_proj/second/IMG-20240814-WA0084.jpg',
        'new_bie_proj/second/IMG-20240814-WA0085.jpg',
        'new_bie_proj/second/IMG-20240814-WA0086.jpg',
        'new_bie_proj/second/IMG-20240814-WA0087.jpg',
        'new_bie_proj/second/IMG-20240814-WA0088.jpg',
        'new_bie_proj/second/IMG-20240814-WA0091.jpg',
        'new_bie_proj/second/IMG-20240814-WA0092.jpg',
        'new_bie_proj/second/IMG-20240814-WA0093.jpg',
        'new_bie_proj/second/IMG-20240814-WA0094.jpg',
        'new_bie_proj/second/IMG-20240814-WA0095.jpg',
        'new_bie_proj/second/IMG-20240814-WA0096.jpg',
        'new_bie_proj/second/IMG-20240814-WA0097.jpg',
        'new_bie_proj/second/IMG-20240814-WA0098.jpg',
        'new_bie_proj/second/IMG-20240814-WA0107.jpg',
        'new_bie_proj/second/IMG-20240814-WA0108.jpg'
  ]

  return (
    <div style={{ width: "800px", margin: "0 auto", display: "flex" }}>
        <section class="w-1/2 items-center m-[2rem] border border-black-9rem">
        <p class="font-bold">Our first trip together:</p>
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
            </div>
            ))}
        </Slider>
        </section>
        <section class="w-1/2 h-[8rem] items-center m-[2rem] border border-black">
        <p class="font-bold">Our second trip together:</p>
        <Slider {...settings}>
            {images_second.map((image, index) => (
            <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
            </div>
            ))}
        </Slider>
        </section>
        
      
        
      
    </div>
  );
};

export default Carousel;