import React from 'react';
import Additional from '../components/Additional';
import CarCards from '../components/СarCards/CarCards';
import Options from '../components/Options';

const Cars = () => {
    return (
        <div class="Cars">
            <Additional />
            <Options />
            <CarCards />
        </div>
    );
};

export default Cars;