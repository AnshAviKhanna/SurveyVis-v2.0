
import React, { useState, useEffect } from 'react';
// import Histogram from './components/Histogram';
import Visualization from './Visualization';
import DropdownCat from './DropdownCat';
import DropdownNum from './DropdownNum';
import DropdownGroupedCat from './DropdownGroupedCat';
const Histogram = () => {
  const [data, setData] = useState([]);
  const [bins, setBins] = useState([]);

  useEffect(() => {
    // Dummy data and bins for numerical data
    const dummyData = [
      4.5, 4.8, 6.1, 4.2, 5.3, 6.7, 3.7, 5.0, 4.6, 3.9, 5.8, 6.2,
      4.4, 5.2, 3.6, 4.9, 5.7, 4.1, 6.0, 4.7, 5.5, 3.8, 6.3, 4.3,
      5.1, 6.5, 3.7, 5.6, 4.0, 5.9, 6.6, 4.3, 5.4, 3.7, 4.9, 5.3,
      6.4, 4.6, 5.2, 3.8, 5.1, 6.5, 4.2, 5.7, 4.4, 5.0, 6.1, 4.5,
      5.8, 4.1, 6.3, 5.4, 3.9, 6.0, 4.7, 5.6, 4.0, 5.5, 6.2, 4.3,
      5.9, 3.6, 6.7, 5.2, 4.8, 6.4, 3.5, 5.0, 4.9, 6.6, 5.3, 4.6,
      6.5, 4.4, 5.1, 6.2, 3.7, 5.7, 4.3, 6.0, 5.4, 3.8, 5.9, 4.0,
      6.3, 5.8, 4.1, 5.6, 6.1, 4.5, 5.0, 4.9, 6.5, 5.3, 4.2, 6.4
    ];
    const dummyBins = [2,5,7]; // Explicit bin edges

    // Uncomment to use categorical data instead
    // const dummyData = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'orange', 'banana', 'apple'];
    // const dummyBins = ['apple', 'banana', 'orange']; // Unique categories

    setData(dummyData);
    setBins(dummyBins);
  }, []);

  return (
<>
<div className='mx-[20vw] flex justify-between'>
    <DropdownNum/>
    <DropdownCat/>
    <DropdownGroupedCat/>
    </div>
      <div className='flex justify-center mt-4'>
        <Visualization data={data} bins={bins} />
      </div>
</>
  );
};

export default Histogram;
