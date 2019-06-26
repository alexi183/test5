import React from 'react';
import './Person.css';

const Person = (props) => {

   const {
      id,
      name,
      age,
      openPersonInfo ,
      openBlock,
      closedBlock} = props;


   return (
       <div className="Person">
          <div>Id - {props.id}</div>

          {!openPersonInfo ?
              <button onClick={() => openBlock(id)}>Open</button>
              :
              <button onClick={() => closedBlock(id)}>Close</button>
          }

          {openPersonInfo &&
              <div className="person-block">
                 <div>Имя - {name}</div>
                 <div>Возратс - {age}</div>
              </div>
          }
       </div>
   )

}

export default Person;
