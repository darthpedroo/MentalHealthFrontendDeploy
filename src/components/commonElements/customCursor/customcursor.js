import React from "react";
import { useState, useEffect } from "react";
import './customcursor.css'


function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
  
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    // Track whether the cursor is over an element with 'cursor: pointer' style
    useEffect(() => {
      const checkIsPointer = () => {
        const hoveredElement = document.elementFromPoint(cursorPosition.x, cursorPosition.y);
        if (hoveredElement) {
          setIsPointer(
            getComputedStyle(hoveredElement).cursor === 'pointer'
          );
        }
      };
  
      window.addEventListener('mousemove', checkIsPointer);
  
      return () => {
        window.removeEventListener('mousemove', checkIsPointer);
      };
    }, [cursorPosition]);
  
    return (
      <div
        className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    );
  }

export default CustomCursor;