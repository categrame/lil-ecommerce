import React from 'react'
import doggy from '../../assets/img/dog1.jpg'

const ProductCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={doggy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Lil example</p>
              <a href="#" className="btn btn-primary">34.99$</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCards