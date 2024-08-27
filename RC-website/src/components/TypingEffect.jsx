// TypingEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedRef = useRef(null); // Create a reference for the Typed.js element

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [
        "WELCOME TO RAMANUJAN COLLEGE",
        "FOLLOW YOUR DREAMS @ RAMANUJAN COLLEGE "
        
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      showCursor: false, 
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <span className="role" ref={typedRef}></span>; // Use the ref for Typed.js
};

export default TypingEffect;
