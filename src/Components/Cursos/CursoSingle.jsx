import React from 'react';

const Portfolio = (props) => {
    return (
        <div className="curso_single">
            <img src={props.img} alt="" />
            <div>
                <h3>{props.titulo}</h3>
                <p>Data: {props.data}</p>
            </div>
        </div>
    );
}

export default Portfolio;