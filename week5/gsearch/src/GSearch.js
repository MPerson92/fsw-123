import React from 'react'
import {useState, useEffect } from 'react';

function GSearch({initialQuery}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [alt, setAlt] = useState('');

    const fetchImage = (query = initialQuery) => {

        setLoading(true);
        const encodedQuery = encodeURIComponent(query)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=CKrpDq0aXG6iJb0vbcZcGgJxXLAy4eeY&tag=${encodedQuery}`

        fetch(url, {
            method: 'GET',
        }).then(function(response){
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function({data}) {
            setLoading(false);
            setImgSrc(data.fixed_height_downsampled_url);
            setAlt(data.title)
        }).catch(function(error) {
            setLoading(false);
            setError(true);
            console.warn('Something went Bad', error )
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchImage(evt.target.query.value)
    }

    useEffect(fetchImage, [initialQuery]);


    return (
        <div>
          <br /><br />
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="query" placeholder='Enter Text Here' style={{width:'275px'}} /> &nbsp;
                    <button type="submit">Search</button>
                </form>
            </header>
            <br /><br /> 
            <main>
                <section>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error has occured</div>}
                    {!loading && !error && !imgSrc &&
                    <div>Nothing Found</div>}
                    {!loading && !error && imgSrc &&
                        <div><img src={imgSrc} alt={alt} style={{width:'400px'}}/></div>}
                </section>
            </main>
        </div>
    )
}

export default GSearch

