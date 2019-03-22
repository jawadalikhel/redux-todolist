const initialState = {
  posts: [
    {id: '1', title: 'title title title title title title ba', body: 'body body body body body body'},
    {id: '2', title: 'title title title title title bla ba', body: 'body body body body body body'},
    {id: '3', title: 'bla bla bla bla bla bla ba', body: 'body body body body body body'},
  ]
}
const rootReducer = (state=initialState, action) =>{
  return state;
}

export default rootReducer;
