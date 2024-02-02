import React, { useState, useEffect } from 'react';
import "./App.css"

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await response.json();
        setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3 px-3'>
          {data.map((item, index) => (
            <div className='col' key={index}><img className='img-fluid' src={item.url} /></div>
          ))}

        </div>
      </div>

    </>
  );
};

export default MyComponent;

