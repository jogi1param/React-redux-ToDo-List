import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component {
    //let deleteBtn = 
    render(){
  return (
    <div className="App">
      <header className="App-header">
      <input 
      type="text" 
      placeholder="Enter Items"
      onChange={this.props.onHandleChange} />
      <br />
      <button onClick={this.props.onHandleClick}>Add</button>

      <br />

      <ol>
        {this.props.list.map((listItem, index)=>{
          return(
            <div>
              <li>{listItem} <button onClick={this.props.onHandleDelete.bind(this, index)}>Delete</button></li>
            </div>
            )
        })}
      </ol>
        
      </header>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return{
    str: state.str,
    list: state.list
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    onHandleChange: (e) => dispatch({type: 'inputChange', val: e.target.value}),
    onHandleClick: () => dispatch({type: 'addItem'}),
    onHandleDelete: (id) => dispatch({type: 'deleteItem', val: id})
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
