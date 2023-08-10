import React from 'react'
import "./index.css"

const Avatar = ({ userName }) => {
    const getRandomColor = () => {
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12', '#1abc9c'];
        return colors[Math.floor(Math.random() * colors.length)];
      };
    
      const randomColor = getRandomColor();
    
      return (
        <div className="avatar-container">
          <div className="avatar-circle" style={{ backgroundColor: randomColor }}>
            <span className="avatar-letter">{userName[0]}</span>
          </div>
        </div>
      );
    };

  export default Avatar;