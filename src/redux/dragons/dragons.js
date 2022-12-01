import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

const fetchDragons = async () => {
  const response = await axios.get(url);
  const dragonsData = response.data;
  const dragons = Object.keys(dragonsData).map((key) => ({
    id: dragonsData[key].id,
    name: dragonsData[key].name,
    description: dragonsData[key].description,
    image: dragonsData[key].flickr_images[0],
  }));
  return dragons;
};

const GET_DRAGONS = 'GET_DRAGONS';

const getDragons = (payload) => ({
  type: GET_DRAGONS,
  payload,
});

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.paylaod;
    default:
      return state;
  }
};

export const getAllDragons = () => async (dispatch) => {
  const allDragons = await fetchDragons();
  dispatch(getDragons(allDragons));
};

export default dragonsReducer;
