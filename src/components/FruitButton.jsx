import React from 'react';
function FruitButton({buttonType, buttonAction, buttonState, children}) {
    return (
        <button
            type={buttonType}
            onClick={buttonAction}
            disabled={buttonState}
        >
            {children}
        </button>
    );
}

export default FruitButton;

