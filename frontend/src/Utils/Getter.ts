// Dependencies
import axios from "axios";

export const getMain = async () => {
  try {
    let data = await axios
      .get(`http://localhost:8000/`)
      .then((data) => data?.data || data)
      .catch((err) => {
        console.error(err.response?.data || err);
        return err?.response?.data || err;
      });

    console.log(data);
  } catch (error) {
    console.error(error, "error in try and catch with axios get Beatmakers");
  }
};
