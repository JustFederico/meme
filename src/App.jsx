import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css"

function App() {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
        setCurrentMeme(data.data.memes[0]);
      });
  }, []);

  return (
    <div className="App">
      {currentMeme && (
        <div className="meme-container">
          <img src={currentMeme.url} alt="Meme" />
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
          <button onClick={() => {
            const randomIndex = Math.floor(Math.random() * memes.length);
            setCurrentMeme(memes[randomIndex]);
          }}>Random Meme</button>
        </div>
      )}
    </div>
  );
  
}

export default App;
