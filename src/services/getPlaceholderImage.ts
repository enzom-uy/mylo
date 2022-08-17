import axios from "axios";

export const getPlaceholderImage = async (width: number, height?: number) => {
  const URL = `https://picsum.photos/id/0/info`;

  const placeholderImage = await axios.get(URL).then((res) => res.data);
  return placeholderImage;
};
