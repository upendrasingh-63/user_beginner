import Stopwatch from "./Stopwatch";
import AddCar from './AddCar'
import Counter from './Counter'
import ColorPicker from './ColorPicker'
import Clock from './DigitalClock'
import Card from './Card'
import {useState} from 'react'
import FloatingIcon from './FloatingIcon'
function App() {
  const [selectedComponent, setSelectedComponent] = useState('Clock');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Clock':
        return <Clock />;
      case 'Stopwatch':
        return <Stopwatch />;
      case 'ColorPicker':
        return <ColorPicker/>;
      case 'Counter':
        return <Counter/>;
      case 'Card':
        return <Card/>;
      case 'AddCar':
        return <AddCar/>;
      default:
        return null;
    }
  };
  return (
    <div className="app-container">
      {renderComponent()}
      <FloatingIcon onSelect={setSelectedComponent} />
    </div>
  );
}

export default App;
