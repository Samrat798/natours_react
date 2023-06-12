import React from "react";

const Booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-4 u-margin-bottom-8">
                <h2 className="heading-secondary">Start booking Now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form__input"
                  placeholder="Full Name"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
