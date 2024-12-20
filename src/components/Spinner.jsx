import React from 'react';

const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#007bff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    margin: '10px auto',
};

// Create a separate Spinner component
const Spinner = () => {
    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div style={spinnerStyle}></div>
        </>
    );
};

export default Spinner;
