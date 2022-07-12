import React from "react";
import OrderBy from "./OrderBy";
import { connect } from 'react-redux';

class Products extends React.Component {

  handleOrderBy = (event) => {
    this.props.dispatch({
      type: 'selectedOrder',
      value: event.target.value
    });
  };

  handleOrderProducts = () => {
    this.props.dispatch({
      type: 'sortProduct',
    });
  };

  render() {
    let { selectedOrder } = this.props;

    return (
      <div>
        <div className="products-filter">
          <p>
            {`${this.props.data.length} 
            Product${this.props.data.length > 1 ? "s" : ""
              } found.`}{" "}
          </p>
          <OrderBy
            selectedOrder={selectedOrder}
            handleOrderBy={this.handleOrderBy}
          />
        </div>
        <div className="flex wrap">
          {this.props.sortedProducts.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    );
  }
}

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedOrder: state.selectedOrder,
    sortedProducts: state.sortedProducts
  }
}

export default connect(mapStateToProps)(Products);
