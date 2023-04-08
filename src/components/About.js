import React from "react";

const About = () => {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">
            Exitings tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-2">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quas dolores ipsum nisi aliquam accusamus sit tenetur corporis
              necessitatibus, ducimus eos eum vel, eaque distinctio. Rerum dicta
              iure minus. Beatae?
            </p>
            <h3 className="heading-tertiary u-margin-bottom-2">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              explicabo earum officiis sequi beatae quas iure, eos expedita, hic
              ex eaque.
            </p>
            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src="../img/nat-1-large.jpg"
                alt="Tour photo 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src="../img/nat-2-large.jpg"
                alt="Tour photo 1"
                className="composition__photo composition__photo--p2"
              />
              <img
                src="../img/nat-3-large.jpg"
                alt="Tour photo 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
