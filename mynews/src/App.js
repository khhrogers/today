import React, {useEffect, useState} from 'react';
import './App.css';

  
  function App() {

    // hold the data from site 
    const [universities, setUniversities] = useState([]);
  
    useEffect(() => {
      fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(response => response.json())
        .then(data => setUniversities(data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);
  
    return (

      // return the name of the university and web page by mapping through the data 
      <div>
        <h1 className='title'>Universities in the United States</h1>
       <ul>
        {universities.map((university, index) => (
          <li key={index}>{university.name} - <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">Website</a></li>
        ))}
</ul>
      </div>
  );
}

export default App;
