import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartProvider, useCart } from "react-use-cart";

export default function Example(props) {
  const { addItem } = useCart();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const  p=props.p;
const {
  isEmpty,
  cartTotal,
  totalUniqueItems,
  items,
  updateItemQuantity,
  removeItem,
} = useCart();




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <button onClick={() => addItem(p)}>Add to cart</button>
       
  <>
    <h1>Cart ({cartTotal})</h1>

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.quantity} x {item.name} &mdash;
          <button
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <button
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(item.id)}>&times;</button>
        </li>
      ))}
    </ul>
  </>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

