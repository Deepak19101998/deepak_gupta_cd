import data from '../../test_units_data.json'

const initialState = {
  data : data,
}
const unitDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default unitDataReducer;
