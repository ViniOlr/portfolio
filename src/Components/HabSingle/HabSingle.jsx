import React from 'react';

const HabSingle = (props)=> {
  return (
        <div className="habSingle">
            <div className="flex">
                <p>{props.titulo}</p>
                <p className='porcent'>{props.porcent}</p>
            </div>
            <div className="progress" ><span style={{width: props.porcent}}></span></div>
        </div>
  )
}

export default HabSingle;