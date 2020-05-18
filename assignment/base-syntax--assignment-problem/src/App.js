import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = (props) => {
  const [userState, setUserState]= useState({
    users: [
      { username: 'Trang', age: 28},
      { username: 'Manu', age: 29},
      { username: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'

  });

  const switchNameHandler = () =>{
    // DONT DO THIS personState.persons[0].name = "Trang";
    setUserState({
      users: [
        { username: 'Dao', age: 28},
        { username: 'ManuLy', age: 29},
        { username: 'Stephaniely', age: 30}
      ]
     }) 
   };

   const nameChangeHandler =(event) =>{
    setUserState({
      users: [
        { username: event.target.value, age: 28},
        { username: event.target.value, age: 29},
        { username: event.target.value, age: 30}
      ]
      }) 
  };

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        
        <UserOutput  username='TD' />         
        <UserInput  />
        <UserOutput 
          click={switchNameHandler}
          username = {userState.users[0].username}> 
           How are you 
        </UserOutput>
        <UserInput username = {userState.users[0].username} changed = {nameChangeHandler}/>
        <UserOutput > I am ok </UserOutput>  
        <UserInput />      
      </div>
    );
  }


export default App;
