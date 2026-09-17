

import React, { use } from 'react';

const SearchFood = ({foodPromise}) => {

    const foods = use((foodPromise))
    return (
        <div>
            <h2>Top Foods: {foods.length}</h2>
        </div>
    );
};

export default SearchFood;