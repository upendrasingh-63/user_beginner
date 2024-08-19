import { useState } from 'react';
import './static/ColorPicker.css'; // Import the CSS file

function ColorPicker() {
    const [color, setColor] = useState('#ffffff'); // Default to white

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className="color-picker-container">
            <div className="color-box" style={{ backgroundColor: color }}>
                <div className="color-info">
                    <span>Color Code:</span>
                    <br />
                    <span>{color}</span>
                </div>
            </div>
            <input type="color" value={color} onChange={handleColor} className="color-input" />
        </div>
    );
}

export default ColorPicker;
