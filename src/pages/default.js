// pages/Home.js
import React from 'react';
import Left from '../components/Left';
import Right from '../components/Right';

const Default = () => {

    const x = 12;
    const y = 13;
    const result = x + y;
    const name = "Root Benji";
    return (
        <div>
            <Left result={result} name={name} />
            <Right result={result} />
        </div>
    );
};

export default Default;
