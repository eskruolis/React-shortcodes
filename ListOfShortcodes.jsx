// 1. Getting Data on Page Load fro API




// Getting Data on Page Load fro API
// + add the useEffect import
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://www.demo.com/api/custom-endpoint");
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array

  return (
    <div>render the data here</div>
  )
}
