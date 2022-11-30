import axios from "axios";

const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [
  {
    id: 1,
    name: 'Dragon 1',
    description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
    flickr_images: [],
  },
];

const fetchDragons = async () => {
  const response = await axios.get(url);
  const dragonsData = response.data;
  const dragons = Object.keys(dragonsData).map((key)=>({
    id: dragonsData[key].id,
    name: dragonsData[key].name,
    description: dragonsData[key].description,
    image: dragonsData[key].flickr_images[0],
  }))
  return dragons;
}

const GET_DRAGONS = 'GET_DRAGONS';

const getDragons = (payload) => {
  return {
    type: GET_DRAGONS,
    payload,
  }
}

const dragonsReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_DRAGONS:
      return action.paylaod;
    default:
      return state;
  }
}

export const getAllDragons = () => async (dispatch) => {
  const dragons = await fetchDragons();
  dispatch(getDragons(dragons));
}

export default dragonsReducer;