import  "./style.css"
import ejemplo from  "./ejemplo.js"

import {personajes}  from  "./personajes.js"
const root = document.getElementById('root')

document.addEventListener('DOMContentLoaded',  async ()=>{
    console.log("prueba");
    root.innerHTML+= ejemplo()
    const lista = await  personajes()
    lista.forEach(objeto => {
        
        const {image, name, species}= objeto
        root.innerHTML += `
        <h1>Personajes Rick and Morty</h1>
        <div className="card">

            <img className="card-img-top" src=${image} alt="" />
            <div className="card-body">
                <h5 className="card-title">${name}</h5>
                <p className="card-text">${species}</p>
                <a href="/" className="btn btn-primary">...Más</a>
            </div>
        </div>
 
        
        ` 
        
    });
})
