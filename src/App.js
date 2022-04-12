import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  const Home = () => (
    <div>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        facere incidunt iure eveniet dolorem, aliquid nemo explicabo eaque vitae
        doloribus perferendis aperiam velit sunt ducimus animi? Maxime
        voluptatum dolor maiores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Possimus tempore nulla perferendis, quis quibusdam
        iusto ex maxime doloribus fuga aut eius sequi. Sunt reiciendis atque
        maiores voluptate delectus porro nihil? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Minus, deleniti eos. Fugit nesciunt aut
        cum odit tempore iure laborum provident sit, quidem eligendi beatae
        deleniti minus nam amet fugiat dolore!
      </p>
    </div>
  );
  const About = () => (
    <div>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        facere incidunt iure eveniet dolorem, aliquid nemo explicabo eaque vitae
        doloribus perferendis aperiam velit sunt ducimus animi? Maxime
        voluptatum dolor maiores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Possimus tempore nulla perferendis, quis quibusdam
        iusto ex maxime doloribus fuga aut eius sequi. Sunt reiciendis atque
        maiores voluptate delectus porro nihil? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Minus, deleniti eos. Fugit nesciunt aut
        cum odit tempore iure laborum provident sit, quidem eligendi beatae
        deleniti minus nam amet fugiat dolore!
      </p>
    </div>
  );
  return (
    <Router>
      <div>
        Select page:
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}
export default App;
