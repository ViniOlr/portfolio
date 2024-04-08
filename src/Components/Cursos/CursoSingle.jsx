import React from 'react';

const Portfolio = (props) => {
    return (
        <div className="curso_single">
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <h3>{props.titulo}</h3>
                <p><b>Data:</b> {props.data}</p>
                <p><b>Instituição:</b> {props.inst}</p>
            </div>
        </div>
    );
}

export default Portfolio;