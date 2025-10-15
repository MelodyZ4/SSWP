import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpeg';
import cat3 from './assets/cat3.jpeg';
import cat4 from './assets/cat4.jpeg';
import cat5 from './assets/cat5.jpeg';
import cat6 from './assets/cat6.jpeg';
import cat7 from './assets/cat7.jpg';
import cat8 from './assets/cat8.jpg';
import cat9 from './assets/cat9.jpg';
import cat10 from './assets/cat10.jpg';
import cat11 from './assets/cat11.jpg';
import temp_cover from './assets/temp_cover.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  border: 'none',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.8,
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...ArrowStyle, right: '10px' }}
      onClick={onClick}
      aria-label="Next"
    >
      {'>'}
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...ArrowStyle, left: '10px' }}
      onClick={onClick}
      aria-label="Previous"
    >
      {'<'}
    </button>
  );
}

const Home = () => {
  const [stacked, setStacked] = useState(false);
  const topRectangleRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      let shouldStack = (window.innerWidth < 1.5 * window.innerHeight) || window.innerWidth < 900;

      if (topRectangleRef.current) {
        const el = topRectangleRef.current;
        if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
          shouldStack = true;
        }
      }
      setStacked(shouldStack);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  const rectangleStyle = {
    width: '60%',
    boxSizing: 'border-box',
    backgroundColor: '#B3ABD2',
    margin: '0 auto',
    marginBottom: '8vh'
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto'
  };

  const topSectionContainer = {
    width: '60%',
    display: 'flex',
    alignItems: 'stretch',
    margin: '0 auto',
    marginTop: '8vh',
    marginBottom: '8vh',
    gap: '24px',
    flexDirection: stacked ? 'column' : 'row',
    height: stacked ? 'auto' : '70vh',
  };

  const topRectangle = {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#B3ABD2',
    boxSizing: 'border-box',
    fontSize: '2.55vh',
    alignItems: 'left',
    borderRadius: '0',
    display: 'flex',
    paddingLeft: '3.5vw',
    paddingRight: '3vw',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '3vh',
    paddingBottom: '1.5vh',
    overflow: 'hidden',
  };

  const topImage = {
    height: '100%',
    width: 'auto',
    maxHeight: '1000vh',
    objectFit: 'cover',
    flexStretch: 1,
    marginTop: stacked ? '2vh' : 0,
    marginBottom: stacked ? '2vh' : 0,
    alignSelf: stacked ? 'center' : 'stretch',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <div style={topSectionContainer}>
        <div style={topRectangle} ref={topRectangleRef}>
          <div
            style={{
              color: '#092F37',
              fontSize: '5.2vh',
              textAlign: stacked ? 'center' : 'left',
              marginTop: '12px',
              marginBottom: '3vh',
              paddingLeft: 0,
              paddingRight: 0
            }}
          >
            <p style={{ margin: 0, fontFamily: 'Jockey One, sans-serif', lineHeight: 1.2 }}>
              The Crows of After, <br />
              a Collection of Horrors
            </p>
          </div>
          <div
            style={{
              color: '#092F37',
              fontSize: '2.55vh',
              textAlign: stacked ? 'center' : 'left',
              marginBottom: '3vh',
              paddingRight: stacked ? 0 : '3vw',
            }}
          >
            <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif' }}>
              Set in a classic style haunted house inhabited by dolls, fear and other strange things, this poetry collection accompanied by full-colour art explores the self and a series of childhood horrors in an entwining of lyricism, dark fantasy and disturbing imagery.
            </p>
          </div>
          <div
            style={{
              color: '#092F37',
              fontSize: '2.4vh',
              textAlign: 'left',
            }}
          >
            <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif', paddingBottom: '3vh' }}>
              Check out some reviews: <a href="https://www.cemeterydance.com/extras/review-crows-of-after/" style={{ textDecoration: 'underline' }}>Cemetery Dance</a> | <a href="https://horroraddicts.wordpress.com/2022/07/31/book-review-the-crows-of-after-by-exsanguine-hart/" style={{ textDecoration: 'underline' }}>Horror Addicts</a>
              <br /><br />
              Available at: <a href="https://www.amazon.ca/Crows-After-Collection-Horrors/dp/1777930308"
              style={{ textDecoration: 'underline' }}>Amazon</a>
              &nbsp;|&nbsp;
              <a href="https://www.indigo.ca/en-ca/the-crows-of-after-a-collection-of-horrors/9781777930301.html"
              style={{ textDecoration: 'underline' }}>Indigo</a>
              &nbsp;|&nbsp;
              <a href="https://www.barnesandnoble.com/w/the-crows-of-after-exsanguine-hart/1141461437?ean=2940166305909"
              style={{ textDecoration: 'underline' }}>Barnes & Noble</a>
            </p>
          </div>
          {stacked && (
            <img src={temp_cover} style={topImage} alt="Book cover" />
          )}
        </div>
        {!stacked && (
          <img src={temp_cover} style={topImage} alt="Book cover" />
        )}
      </div>
      <div style={rectangleStyle}>
        <div
          style={{
            color: '#092F37',
            fontSize: '5vh',
            textAlign: 'center',
            marginTop: '12px',
            paddingTop: '3vh',
            paddingLeft: '7vw',
            paddingRight: '7vw',
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Jockey One, sans-serif' }}>
            Who are we, and why are we on This Planet?
          </p>
        </div>
        <div
          style={{
            color: '#092F37',
            fontSize: '2.5vh',
            textAlign: 'center',
            marginBottom: '15px',
            paddingLeft: '7vw',
            paddingRight: '7vw',
            paddingBottom: '3vh',
            paddingTop: '2vh'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif' }}>
            Specimen SandWitch Press is a home for the things in life that are strange, unusual and experimental. Our focus is on publishing art and poetry that falls into the realms of horror, fantasy, and science fiction, and especially the things that stick out a little at the edges.
          </p>
        </div>
      </div>
      
      <div style={rectangleStyle}>
        <div
          style={{
            color: '#092F37',
            fontSize: '5vh',
            textAlign: 'center',
            marginTop: '12px',
            paddingLeft: '7vw',
            paddingRight: '7vw',
            paddingTop: '2vh'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Jockey One, sans-serif' }}>
            The Founders
          </p>
        </div>
        <div
          style={{
            color: '#092F37',
            fontSize: '2.5vh',
            textAlign: 'center',
            marginBottom: '15px',
            paddingLeft: '7vw',
            paddingRight: '7vw',
            paddingBottom: '3vh',
            paddingTop: '2vh'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif' }}>
            Exsanguine Hart is a poet and a doodler with a headstrong belief in dragons and a growing collection of dolls. Hart's favourite type of sandwich is orange marmelade on toast. Find Exsanguine on IG @exsanguine_hart <br />
            <br />
            Luscinia Kay is a scribbler and a daydreamer who spends more time in the clouds than on Earth. Luscinia has a fondness for anything made of chocolate. <br />
            <br />
            Together, we are storytellers and artists and creators, trying to figure out the world we live in through the one universal medium: art. Together, we are creating an outlet, a voice, a society for Things That Don’t Make Sense. Together we attempt to conquer and define escapism, all things imaginative, and one day, the universe. We are Specimen SandWitch Press. <br />
          </p>
        </div>
      </div>

      <div style={rectangleStyle}>
       <div
          style={{
            color: '#092F37',
            fontSize: '5vh',
            textAlign: 'center',
            marginTop: '12px',
            paddingLeft: '7vw',
            paddingRight: '7vw',
            paddingTop: '2vh'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Jockey One, sans-serif' }}>
            Cat Content
          </p>
        </div>
        <div
          style={{
            color: '#092F37',
            fontSize: '2.75vh',
            textAlign: 'center',
            marginBottom: '7px'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif' }}>
            Because cats are a necessity of life
          </p>
        </div>
        <Slider {...settings}>
          <div>
            <img src={cat1} style={imgStyle} />
          </div>
          <div>
            <img src={cat2} style={imgStyle} />
          </div>
          <div>
            <img src={cat3} style={imgStyle} />
          </div>
          <div>
            <img src={cat4} style={imgStyle} />
          </div>
          <div>
            <img src={cat5} style={imgStyle} />
          </div>
          <div>
            <img src={cat6} style={imgStyle} />
          </div>
          <div>
            <img src={cat7} style={imgStyle} />
          </div>
          <div>
            <img src={cat8} style={imgStyle} />
          </div>
          <div>
            <img src={cat9} style={imgStyle} />
          </div>
          <div>
            <img src={cat10} style={imgStyle} />
          </div>
          <div>
            <img src={cat11} style={imgStyle} />
          </div>
        </Slider>
        <div
          style={{
            color: '#092F37',
            fontSize: '2.5vh',
            textAlign: 'center',
            marginBottom: '15px'
          }}
        >
          <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif' }}>
            Check back for more soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
