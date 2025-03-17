import { useState } from 'react'
import './App.css'

function App() {
    // We will use this later (should use state for madlib but start with just variable)
    const original = "It was a :weatherdesc: :temp: day when I woke up to the :smelldesc: smell of :food: cooking in the :room: downstairs.";
    const [lib, setLib] = useState(original);

    return (
        <>
            <header>
                <h1>Welcome to a little mad lib</h1>
                <p>We'll add a bit more to this as we go and seperate them into sections with a menu.</p>
            </header>
            <main>
                <div className="card">
                    <p>
                        Click the button to change the text:
                        <button onClick={() => changeText()}>
                            Click me to show the mad lib with default options!
                        </button>
                    </p>
                    <p>{lib}</p>
                </div>
                <div className="card">
                        <button onClick={() => setLib(original)}>
                            Reset Text
                        </button>
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
        for (let word of lib.split(" ")) {
            if (word.includes(":")) {
                // We can use split and grab the middle item to find items between to dividers
                newLib += " " + selections[word.split(":")[1]] + " ";
            } else {
                newLib += " " + word + " ";
            }
        }
        setLib(newLib);
    }
}

export default App