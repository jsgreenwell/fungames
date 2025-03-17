import { useState } from 'react'
import './App.css'

function App() {
    // 2 variables for user items but...the first will become a state (and 1 state)
    const selections = {
        weatherdesc: "rainy",
        temp: "cold",
        smelldesc: "delicious",
        food: "chicken",
        room: "kitchen"
    };
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
        // Now to make it look more like react (we'll need map for the full bit)
        let newLib = "";

        // This wasn't really the JavaScript way so we'll use a function
        // (with ternary and backticks)
        lib.split(" ").forEach((word) => {
            word.includes(":")
                ? newLib += ` ${selections[word.split(":")[1]]} `
                : newLib += ` ${word} `;
        });
        setLib(newLib);
    }
}

export default App