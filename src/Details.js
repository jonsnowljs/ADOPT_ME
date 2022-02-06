import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

import ModalTemplate from "./ModalTemplate";
class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="mx-20 card lg:card-side card-bordered">
        <Carousel
          images={images}
          description={description}
          animal={animal}
          breed={breed}
          city={city}
          state={state}
        />
        <div className="card-body  justify-center mx-10">
          <h1 className="card-title font-bold text-3xl">{name}</h1>
          <h2 className="card-title">{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <p card-body>{description}</p>

          <div className="card-actions justify-center">
            <ThemeContext.Consumer>
              {([theme]) => (
                <button
                  className="btn btn-primary"
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme }}
                >
                  Adopt {name}
                </button>
              )}
            </ThemeContext.Consumer>
          </div>
          {showModal ? (
            <ModalTemplate name={name}/>
            // <Modal>
            //   <h1>Would you like to adopt {name}?</h1>
            //   <div className="buttons">
            //     <button className="btn btn-secondary" onClick={this.adopt}>
            //       Yes
            //     </button>
            //     <button
            //       className="btn btn-secondary"
            //       onClick={this.toggleModal}
            //     >
            //       No
            //     </button>
            //   </div>
            // </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
