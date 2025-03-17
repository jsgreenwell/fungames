import { useState } from 'react'
import './App.css'

// This is the more Java way to do this (i.e. using strict variables)
// We'll then convert it to the React way (more state handling and functional variables)

function App() {
    // We will use this later (should use state for madlib but start with just variable)
    //const [lib, setLib] = useState("It was a :weatherdesc: :temp: day when I woke up to the :smelldesc: smell of :food: cooking in the :room: downstairs.");
    let madLib = {
        lib: "It was a :weatherdesc: :temp: day when I woke up to the :smelldesc: smell of :food: cooking in the :room: downstairs.",
        changed: "It was a :weatherdesc: :temp: day when I woke up to the :smelldesc: smell of :food: cooking in the :room: downstairs."
    };

    return (
        <>
          <header>
              <h1>Welcome to a little mad lib</h1>
              <p>We'll add a bit more to this as we go and separate them into sections with a menu.</p>
          </header>
          <main>
              <div className="card">
                  <p>
                      Click the button to change the text:
                      <button onClick={() => changeText()}>
                          Click me to show the mad lib with default options!
                      </button>
                  </p>
              </div>
              <div className="card">
                  <p>
                      {madLib.changed}
                  </p>
              </div>
          </main>
        </>
      )

        function changeText() {
            // first the simple way using for
            // Well the more Java way
            const selections = {
                weatherdesc: "rainy",
                temp: "cold",
                smelldesc: "delicious",
                food: "chicken",
                room: "kitchen"
            };

            let newLib = "";

            // Make sure you don't use 'in' Python people
            // let word in text would give indexes
            // .split(/\s/) would be better
            for (let word of madLib.lib.split(" ")) {
                if (word.includes(":")) {
                    // We can use split and grab the middle item to find items between to dividers
                    newLib += " " + selections[word.split(":")[1]] + " ";
                } else {
                    newLib += " " + word + " ";
                }
            }
            // This won't work but I want to show why we need states
            // To actually do this we'd need to assign the DOM Element directly but react uses States
            madLib.changed = newLib;
        }
    }

export default App
