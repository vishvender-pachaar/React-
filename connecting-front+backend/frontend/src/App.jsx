import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
    axios.get('/api/jokes') 
      .then((response) => {
        console.log("API Response:", response.data); // Log the response
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  },[]); 

  return (
    <>
      <h1>Chai aur Fullstack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.length > 0 ? (
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        ))
      ) : (
        <p>Loading jokes...</p>
      )}
    </>
  );
}

export default App;
