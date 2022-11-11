import axios from "axios";
export function getNews() {
  return async function (dispatch) {
    var json = await axios.get(process.env.REACT_APP_API_URL);
    return dispatch({
      type: "GET_NEWS",
      payload: json.data,
    });
  };
}
export const pagesControl = (number) => {
  return {
    type: "CURRENT_PAGES",
    payload: number,
  };
};
