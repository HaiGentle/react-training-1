import './App.css';
import logo from './logo.svg';
import Card from './components/index';

function App() {
  return (
    <Card
      url={logo}
      tilte={'Styled'}
      desc={'styled components and somethings here'}
      buy={'Buy'}
    />
  );
}

export default App;