import axios from "axios";

const url = 'https://api.spacexdata.com/v3/dragons';

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