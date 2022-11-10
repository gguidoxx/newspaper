import axios from "axios";
export function getNews() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/`);
    return dispatch({
      type: "GET_NEWS",
      payload: json.data,
    });
  };
}
