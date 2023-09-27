import React from 'react';
import FruitButton from './FruitButton.jsx';

function FruitCounter({fruit, setFruit, productClass}) {
    return (
        <div className={productClass}>
            <FruitButton
                buttonType="button"
                buttonAction={() => setFruit(fruit - 1)}
                buttonState={fruit === 0}
            >
                -
            </FruitButton>
            <p>{fruit}</p>
            <FruitButton
                buttonType="button"
                buttonAction={() => setFruit(fruit + 1)}
            >
                +
            </FruitButton>
        </div>
    );
}

export default FruitCounter;