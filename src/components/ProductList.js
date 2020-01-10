import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div>
          <div>
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

//const ProductWrapper = styled.section``;
