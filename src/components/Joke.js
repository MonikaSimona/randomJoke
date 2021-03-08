import React, { useState,useEffect } from 'react'
import axios from 'axios'


export default function Joke() {
    const style = {}
    const [joke, setJoke] = useState('');
    const [jokeScale, setjokeScale] = useState('')
    const [isJoke, setisJoke] = useState(false)
    
    const getJoke = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke').then(data => {
            setJoke(data.data)
        })
        setisJoke(true)
    }
    useEffect (() => {
        let timeout;
        if(isJoke){
            setjokeScale('joke-scale');
             timeout = setTimeout(() => {
                setjokeScale('')
            },500)
            
        }
        return (() => clearTimeout(timeout))
    },[joke])
    return (
        <div>
            <div className="info">Click the button to get one random joke and smile!</div>
            <div className="btn"><button onClick={getJoke}>Get Random Joke</button></div>
            
            <div className="joke-container">
                <div className={`${jokeScale && jokeScale} joke`}>
                    <p>{joke ? `"` : null}{joke.setup}{joke ? `"` : null}</p>
                    <p>{joke ? `"` : null}{joke.punchline}{joke ? `"` : null}</p>
                </div>
                </div>

        </div>
    )
}
