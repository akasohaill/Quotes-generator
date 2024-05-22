import React, { useState } from 'react'
import './RandomQuote.css'
import reload from '../Assets/reload.jpg'
import twitter from '../Assets/x.avif'

const RandomQuote = () => {

    let quotes=[];

    async function loadQuotes (){
        let response= await fetch("https://type.fit/api/quotes");
        quotes=await response.json();
    }

    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select)
    }

    const [quote,setQuote] = useState({
        text: "honesty is the best policy",
        author: "akasohaill"
    })

    const tweet=()=>{
        window.open(`https://twitter.com/intent/tweet?text= ${quote.text} - ${quote.author.split(",")[0]}`)
    }

    loadQuotes();

    return (
        <div className='container'>
            <h1>Random Quote Generator</h1>
           
            <div className="quote">"{quote.text}"</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(",")[0]}</div>
                    <div className="icons">
                        <img id='img' onClick={()=>random()} src={reload} height={36} width={50} alt="" />
                        <img id='img' onClick={()=>tweet()} src={twitter} height={36} width={50} alt="" />
                    </div>
                </div>
            </div>
            <p>You can gererate different quotes in every reload button moreover you can also tweet the quotes from the X icon.</p>
        </div>
    )
}

export default RandomQuote
