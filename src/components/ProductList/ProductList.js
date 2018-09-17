import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>

            <div className="row">
                <div className="col-lg-6"><h3>Products</h3></div>
                <div className="col-lg-6 text-right">

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1"> Sort: Asc / Dsc</label>
                    </div>

                </div>
            </div>

            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-list__item">
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
