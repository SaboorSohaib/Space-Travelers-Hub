import React from 'react';
import { useDispatch } from 'react-redux';
import { bookDragon, cancelBooking } from '../redux/dragons/dragons';

function Dragon(props) {
  const dragon = props;
  const dispatch = useDispatch();

  const bookADragon = (id) => {
    dispatch(bookDragon(id));
    console.log(id);
  };

  const cancelDragonBooking = (id) => {
    dispatch(cancelBooking(id));
    console.log(id);
  };

  return (
    <div className="dragon">
      <img src={dragon.image} alt="Dragon" className="dragon-image" />
      <div className="dragon-details">
        <h3 className="dragon-name">{dragon.name}</h3>
        <p className="dragon-description">
          <button type="button" className="reserved-btn">Reserved</button>
          {dragon.description}
        </p>
        <button
          className="cancel-dragon-button"
          onClick={() => cancelDragonBooking(dragon.id)}
          type="button"
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  )
}

export default Dragon;