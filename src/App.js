import React, {useState} from 'react';
import './App.css';

import Button from './components/Button';
import ModalWindow from './components/ModalWindow';

function App() {
  const [visibleModal, setVisibleModal] = useState(false);
	const [activeTimer, setActiveTimer] = useState(false);

  if (visibleModal) {
    return (
      <ModalWindow 
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
      />
    )
  }

  return (
    <div className="App">
      <Button 
        visibleModal={visibleModal} 
        setVisibleModal={setVisibleModal} 
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
      />
    </div>
  );
}

export default App;