import React, { useContext } from 'react';
import MainContext from '../../context';
import { Toaster } from 'react-hot-toast';

const Basket = () => {
  const { basket, handleBasketDelete, decrementCounter, addToBasket } = useContext(MainContext);
  let totalPrice = 0;

  return (
    <>
      <table style={{marginTop:"120px"}}>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Price</th>
            <th>Decrease</th>
            <th>Count</th>
            <th>Increase</th>
            <th>Delete</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((data, index) => {
            totalPrice += data.totalPrice;

            return (
              <tr key={index}>
                <td>{data.product.name}</td>
                <td>{data.product.price} Azn</td>
                <td>
                  <button className='decrease' disabled={data.count === 1 ? true : false} onClick={() => decrementCounter(data)}>
                    -
                  </button>
                  <Toaster/>
                </td>
                <td>{data.count}</td>
                <td>
                  <button className='increase' onClick={() => addToBasket(data.product)}>
                    +
                  </button>
                </td>
                <td>
                  <button className='deleteBasket' onClick={() => handleBasketDelete(data._id)}>
                    Delete
                  </button>
                  <Toaster/>
                </td>
                <td>{data.totalPrice} Azn</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3 className='total'>Total Price : {totalPrice} Azn</h3>
    </>
  );
};

export default Basket;
