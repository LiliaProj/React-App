import React, { useState, useEffect } from 'react';
import HomeMain from './HomeMain';

const Home = () => {
    let [list, setList] = useState([]);
    let [quotes, setQuotes] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                let filterJson = json.filter(item => item.id <= 3);
                setList(list = filterJson.map((item, index) => {
                    let urlImg = `./img/journaling1${index}.jpg`;
                    return (
                        <div key={index} className={(index===0) ? "carousel-item active" : "carousel-item"}>
                            <img src={urlImg} className="d-block w-100" alt="..." style={{height: "60vh", objectFit: "cover"}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="text-uppercase">{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    );
                }));
                setQuotes(quotes = filterJson.map((item, index) => {
                    let urlImg = `./img/journaling${index}.jpg`;
                    return (
                        <div key={index+3} className="col-lg-4">
                            <img className="rounded-circle my-4" src={urlImg} alt="..." width="140" height="140"/>
                            <h5 className="text-uppercase">{item.title}</h5>
                            <p className="my-4">{item.body}</p>
                        </div>
                    );
                }));
            });
    }, []);

    return(
        <HomeMain listAtr={list} quotesAtr={quotes}/>
    );
}

export default Home;