import React, { Component } from 'react'

import Product from './Product'

import data from '../data.json'
const productData = data.products;

export default class Contacts extends Component {
  render() {
    return (
      <>
        <h1>Products</h1>
        <div className='products-container'>
            {productData.map(obj=> <Product key={obj.id} id={obj.id} title={obj.title} img={obj.images[0]} description={obj.description}/>)}
        </div>
      </>
    )
  }
}