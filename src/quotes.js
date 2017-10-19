import React from 'react';
import Quoteslist from './quoteslist';
import './index.css';
import { Button, ControlLabel, ProgressBar } from 'react-bootstrap';
 
class Quotes extends React.Component {
    
    constructor(props, context) {
        super(props, context);
 
        this.state = {
            items: []
        };
 
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
   /* Creating the progress bar     
    var ProgressBar = React.createClass({
      getInitialState: function() {
        return {
            value: "0%"
        };
      }*/
    
    addItem(e) {
        var itemArray = this.state.items;
 
        if (this._inputElement.value !== "") {
            itemArray.unshift(
        {
            text: this._inputElement.value,
            key: Date.now()
        }
        );
 
        this.setState({
            items: itemArray
        });
 
        this._inputElement.value = "";
        }
 
        console.log(itemArray);
   
        e.preventDefault();
    }
    
    
    
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
 
        this.setState({
            items: filteredItems
        });
    }
    
  render() {
    return (
      <div className="quotesMain">
        <ProgressBar className="right" min="0" max="10" active now={5} label={'5/10'}/>
        <div className="header">
          <form onSubmit={this.addItem}>
            <ControlLabel>Quotes</ControlLabel><br/>
            <input ref={(a) => this._inputElement = a} placeholder="enter a quote"></input><br/><br/>
            <div className='text-center'><Button bsStyle='primary' type="submit">Add Quote</Button></div>
          </form>
        </div>
        <Quoteslist entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default Quotes;