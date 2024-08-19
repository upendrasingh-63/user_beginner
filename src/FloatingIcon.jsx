import React, { useState, useRef } from 'react';
import './static/FloatingIcon.css'; // Import the CSS file for styling

const FloatingIcon = ({ onSelect }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const iconRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    if (iconRef.current) {
      const iconWidth = iconRef.current.offsetWidth;
      const iconHeight = iconRef.current.offsetHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let newX = e.clientX - iconWidth / 2;
      let newY = e.clientY - iconHeight / 2;

      // Boundary checks
      if (newX < 0) newX = 0;
      if (newX > windowWidth - iconWidth) newX = windowWidth - iconWidth;
      if (newY < 0) newY = 0;
      if (newY > windowHeight - iconHeight) newY = windowHeight - iconHeight;

      setPosition({ x: newX, y: newY });
    }
    setShowMenu(false)
  };

  const handleMouseDown = () => {
    // e.preventDefault();
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleDrag);
    });
    // setShowMenu(false)
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (componentName) => {
    setShowMenu(false);
    onSelect(componentName);
  };

  return (
    <div
      className="floating-icon"
      ref={iconRef}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <span>Show</span>
      {showMenu && (
        <div className="menu">
          <button onClick={() => handleOptionClick('Clock')}>Clock</button>
          <button onClick={() => handleOptionClick('Stopwatch')}>Stopwatch</button>
          <button onClick={() => handleOptionClick('ColorPicker')}>ColorPicker</button>
          <button onClick={() => handleOptionClick('Card')}>Card</button>
          <button onClick={() => handleOptionClick('AddCar')}>AddCar</button>
          <button onClick={() => handleOptionClick('Counter')}>Counter</button>
        </div>
      )}
    </div>
  );
};

export default FloatingIcon;
