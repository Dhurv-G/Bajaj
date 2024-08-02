import React, { useEffect, useState } from 'react';
const Story = () => {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
    // {handleInputChange}
  const [query, setQuery] = useState('');
  const API ="http://localhost:3000/data";

  const fetchApiData = async () => {
    // setIsLoading(true);
    const res = await fetch(API + query);
    const data = JSON.parse(await res.text());
    // setIsLoading(false);
    setData(data.hits);
  };

  useEffect(() => {
    fetchApiData();
  });

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
   
  // const handle = () => {
  //   fetchApiData();
  // };

  // if (isLoading) {
  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  return (
    <>
      <div>
        <input type="text" placeholder='Search' value={query} onChange={handleInputChange} />
        {/* <button onClick={handle}>Search</button> */}
      </div>
      {data.map((item) => {
        return (
          <ul key={item.data}>       {item.data}      </ul>
        );
      })}
    </>
  );
};

export default Story;
