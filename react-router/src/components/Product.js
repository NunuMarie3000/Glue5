import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default class Product extends Component {
    constructor(props){
      super(props)
      this.state = {
        addedToCart: false,
      }
    }
  
    addItem = () => {
      this.setState({addedToCart: true}, ()=>console.log('item added to cart'));
    }
    removeItem = () => {
      this.setState({addedToCart: false}, ()=>console.log('item removed from  cart'));
    }

  render() {
    return (
      <>
      <Card style={{ width: '18rem' }}>
       <Link to={`/products/${this.props.id}`}><Card.Img className='card-img' variant="top" src={this.props.img} alt={this.props.title}/></Link>
       <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        {this.state.addedToCart ? <Button onClick={this.removeItem} variant='warning'>Remove 🛒</Button> : <Button onClick={this.addItem} variant='primary'>Add 🛒 {/*{this.state.cart}*/}</Button>}
       </Card.Body>
      </Card>
      </>
    )
  }
}
