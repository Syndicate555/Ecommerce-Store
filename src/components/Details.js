import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            genre,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{genre}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <h1>{title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Location: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some Information About the Photo:
                    <p className="text-muted lead text-justify">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>Back to Products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
