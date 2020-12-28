import logo from './logo.svg';
import './App.css';
import {increment} from './actions';
import {isLogged} from './actions';
import {useSelector , useDispatch} from 'react-redux';

function App() {

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter is : {counter} </h1>
      <button onClick = { () => { dispatch(increment() ) }}>+</button>

      <button onClick = { () => { dispatch(isLogged() ) }}>click to log in</button>
      {isLogged ? <h3>valuble information shouln't see </h3> : <h3>plese log in to see the stuff </h3>}
      
    </div>
  );
}

export default App;
