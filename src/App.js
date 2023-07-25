import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [podaci, setPodaci] = useState(null);

  const getData = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPodaci(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {podaci && (
        <>
          <img src={podaci.url} alt={podaci.title} />
          <h3>{podaci.title}</h3>
          <p>{podaci.explanation}</p>
        </>
      )}
    </div>
  );
}

export default App;
