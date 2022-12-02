import React from 'react';
import { useDispatch } from 'react-redux';
import { bookDragon, cancelBooking } from '../redux/dragons/dragons';

function Dragon(props) {
  const dragon = props;
  const dispatch = useDispatch();

  const bookADragon = (id) => {
    dispatch(bookDragon(id));
  };

  const cancelDragonBooking = (id) => {
    dispatch(cancelBooking(id));
  };

  return dragon.reserved ? (
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
  ) : (
    <div className="dragon">
      <img src={dragon.image} alt="Dragon" className="dragon-image" />
      <div className="dragon-details">
        <h3 className="dragon-name">{dragon.name}</h3>
        <p className="dragon-description">{dragon.description}</p>
        <button
          className="dragon-button"
          onClick={() => bookADragon(dragon.id)}
          type="button"
        >
          Reserve Dragon
        </button>
      </div>
    </div>
  );
}

export default Dragon;
