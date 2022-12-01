import axios from 'axios';
import produce from 'immer';

const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

const fetchDragons = async () => {
  const response = await axios.get(url);
  const dragonsData = response.data;
  return dragonsData;
};

const GET_DRAGONS = 'GET_DRAGONS';
const BOOK_DRAGON = 'BOOK_DRAGON';

const getDragons = (payload) => ({
  type: GET_DRAGONS,
  payload,
});

export const bookDragon= (payload) => ({
  type: BOOK_DRAGON,
  payload,
});

const dragonsReducer = (state = initialState, { type, payload }) => {
  let newState = [];
  switch (type) {
    case GET_DRAGONS:
      newState = produce(state, (draftState) => Object.keys(payload).forEach((key) => {
        draftState.push({
          id: payload[key].id,
          name: payload[key].name,
          description: payload[key].description,
          flickr_images: payload[key].flickr_images[0],
          reserved: false,
        });
      }));
      return newState;
    case BOOK_DRAGON:
      newState = state.map(dragon => {
        if(dragon.id !== action.payload) 
            return dragon;
        return { ...dragon, reserved: true };
    });
    
    default:
      return state;
  }
};

export function getAllDragons() {
  return async function (dispatch) {
    const allDragons = await fetchDragons();
    (dispatch(getDragons(allDragons)));
  };
}

export default dragonsReducer;
