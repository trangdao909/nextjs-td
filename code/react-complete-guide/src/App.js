import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState]= useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false

  });

  const [otherState, setOtherState] = useState('some other value');
  const [showPersons, setShowPersons] = useState('false');

  const switchNameHandler = (newName) =>{
    // DONT DO THIS personState.persons[0].name = "Trang";
    setPersonState({persons: [
     { name: newName, age: 28},
     { name: 'Manu', age: 29},
     { name: 'Stephanie', age: 27}
     ]
     }) 
   };

  const nameChangeHandler =(event) =>{
    setPersonState({persons: [
      { name: "Max", age: 28},
      { name: event.target.value, age: 29},
      { name: 'Stephanie', age: 27}
      ]
      }) 
  };

  // Style and inline style
  const style = {
    backgroundColor: 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const togglePersonHandler = () =>{
    const doesShow = personState.showPersons;
    setPersonState({showPersons: !doesShow})
  }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
         {/* Not recommend */}
        <button
          style ={style}
          onClick={togglePersonHandler}>
          Switch Name
        </button>
         {/* if showPerson true, show <div>, else: null */}
       { personState.showPersons ? 
       <div>
            <Person 
            name={personState.persons[0].name} 
            age={personState.persons[0].age} />
            <Person 
            name={personState.persons[1].name} 
            age={personState.persons[1].age} 
            changed = {nameChangeHandler}/>
            <Person 
            click = {switchNameHandler.bind(this, 'Trang!')}
            name={personState.persons[2].name}
            age={personState.persons[2].age}
            >My hobbies: racing </Person> 

        </div> : null
        }
        
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I \'m a react app !!!!'))
  
}

export default App;


