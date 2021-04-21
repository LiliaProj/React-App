import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

const Home = () => {
    let [list, setList] = useState([]);
    let [quotes, setQuotes] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                let filterJson = json.filter(item => item.id <= 3);
                setList(list = filterJson.map((item, index) => {
                    let urlImg = `./img/journaling${index}.jpg`;
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
        <main>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {list}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Prev</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <div className="row text-center">{quotes}</div>
            </div>
        </main>
    );
}

export default connect()(Home);