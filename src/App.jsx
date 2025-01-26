import React, { useState } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState('');
    const [matchup, setMatchup] = useState('');

    const generateMatchup = () => {
        let itemList = items.split('\n').map(item => item.trim()).filter(item => item !== '');
        if (itemList.length < 2) {
            alert('Enter at least two items to match up.');
            return;
        }

        shuffleArray(itemList);
        let selectedMatchup = `${itemList[0]} vs ${itemList[1]}`;
        setMatchup(selectedMatchup);
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    return (
        <div className="App" style={{ textAlign: 'center', margin: '50px' }}>
            <h1>Random Matchup Generator</h1>
            <textarea 
                style={{ width: '80%', height: '150px', marginBottom: '20px' }}
                placeholder="Enter items, one per line"
                value={items}
                onChange={(e) => setItems(e.target.value)}
            ></textarea>
            <br />
            <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} onClick={generateMatchup}>Generate Matchup</button>
            <div style={{ marginTop: '20px' }}>
                <h2>Matchup:</h2>
                <p>{matchup}</p>
            </div>
        </div>
    );
}

export default App;
