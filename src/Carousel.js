import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images, description, animal, breed, city, state } = this.props;
    return (
      <div className="">
        <div className="card lg:card-side card-bordered">
          <figure className="px-10 pt-10">
            <img src={images[active]} className="rounded-xl" alt="dog-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{`${animal} - ${breed} - ${city}, ${state}`}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-accent">More info</button>
            </div>
            <div className="content-center -space-x-5 avatar-group py-5">
              {images.map((photo, index) => (
                // eslint-disable-next-line
                <div className="avatar">
                  <div className="w-32 sm:w-8 md:w-16 lg:w-24 xl:w-32 2xl:w-40">
                    <img
                      key={photo}
                      src={photo}
                      data-index={index}
                      onClick={this.handleIndexClick}
                      className={index === active ? "blur-sm " : ""}
                      alt="animal thumbnail"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
