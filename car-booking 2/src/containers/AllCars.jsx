import React from 'react';
import Filter from '../components/Filter'
import DetailCarCards from '../components/СarCards/DetailCarCards';
import Options2 from '../components/SecOpt';

const AllCars = () => {
    return (
        <div class="AllCars">
            <Filter />
            <div className='blocks'>
                <Options2 />
                <DetailCarCards />
            </div>
        </div>
    );
};

export default AllCars;