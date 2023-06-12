import React from "react";

const Story = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video autoPlay loop muted className="bg-video__content">
          <source src="../img/video.mp4" type="video/mp4" />
          <source src="../img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="../img/nat-8.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-2">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias at
              similique suscipit corporis, esse magnam! Illo alias ab nihil a
              vitae, enim doloribus sint veritatis asperiores! Dicta laudantium
              vitae debitis. similique suscipit corporis, esse magnam! Illo
              alias ab nihil a vita.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="../img/nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-2">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias at
              similique suscipit corporis, esse magnam! Illo alias ab nihil a
              vitae, enim doloribus sint veritatis asperiores! Dicta laudantium
              vitae debitis. similique suscipit corporis, esse magnam! Illo
              alias ab nihil a vita.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-10">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Story;
