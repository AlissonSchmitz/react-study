import logo from '../../../logo.svg';
import { Link } from "react-router-dom";

function Home(){
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Test
      </p>
      <Link to="/AboutMovie">About movie page</Link>
    </header>
  </div>
  )
}

export default Home