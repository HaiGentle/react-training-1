import './App.css';
import logo from './logo.svg';
import CardWapper from './components/CardWapper'
import CardImg from './components/CardImg'
import CardBody from './components/CardBody'
import CardTitle from './components/CardTitle'
import CardDesc from './components/CardDesc'
import CardBuy from './components/CardBuy'

function App() {
  return (
    <CardWapper>
      <CardImg url={logo} />
      <CardBody>
        <CardTitle>Styled</CardTitle>
        <CardDesc>styled components and somethings here</CardDesc>
        <CardBuy>Buy</CardBuy>
      </CardBody>
    </CardWapper>
  );
}

export default App;