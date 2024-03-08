import './App.css';
import BotonCalculadora from './BotonCalculadora';

function App() {
  const CONTAINER_STYLES = {
    display: 'flex',
    padding: '15px',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App">
      <h1>Calculadora <br /><small>Con demo de flex</small></h1>
      <div style={CONTAINER_STYLES}>
        <BotonCalculadora number={1} style={{ border: '2px solid red' }} />
        <BotonCalculadora number={2} style={{ border: '2px solid blue' }} />
        <BotonCalculadora number={3} style={{ border: '2px solid green' }} />
      </div>
    </div>
  );
}

export default App;
