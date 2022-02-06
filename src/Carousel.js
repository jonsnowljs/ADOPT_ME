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
    const { images } = this.props;
    return (
      <div className=" w-full card">
        <div className="">
          <figure className="">
            <img
              src={images[active]}
              className="object-fill rounded-lg"
              alt="dog-img"
            />
          </figure>
          <div className="justify-center text-center mt-10">
            {images.map((photo, index) => (
              // eslint-disable-next-line
              <div className="avatar">
                <div className="mx-5 mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
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
    );
  }
}
