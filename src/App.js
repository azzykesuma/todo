import React from 'react';
import './App.css';
import ListItem from './listItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // binding the two method is very important, otherwise it will return referenceerror to all object contain this since this is not binded
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }0
  // this is the method of handleinput. notice that it is using setstate as it is setting the state of the value of each key. 

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const newitems = [...this.state.items,newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  // preventing default is important to prevent the code from running if its cancelable.
  // the steps in additem. 
  // 1. define the current state, in this case the currentItem. 
  // 2. write the conditional statement to check if the newitem.text is not empty. if its not, then 
  // define a new variable to store the new item. the ... is the destructuring component, and the this.state.items is taking the 
  // empty Array, which will later store the text and key. 
  // 3. finally, set the state again to reset the input form. 

  // this is a method to handle the input/ the text we are going to type inside the form. 
  // e.target.value is a syntax to follow the typing of the form, so that it can be recorded by the browser. 

  deleteItem(key) {
    const filteredItem = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItem
    })
  }

  render() {
  return (
    <div className='App'>
      <header>
        <form id='to-do-form' onSubmit={this.addItem}>
          <input type='text' placeholder='enter task'
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          />
          <button type='submit'>Add task!</button>
          {/* remember to put the button INSIDE the form element, it won't get the CSS style since the 
          styles is inside the id to-do-form */}
        </form>
      </header>
      <ListItem items={this.state.items} deleteItem={this.deleteItem}/>
    </div>
  );
  }   
}
// this is where all things concerning UI are rendered. all components will be imported to here, and displayed here.
// this is a presentational class, meaning it will have no logic at all

export default App;