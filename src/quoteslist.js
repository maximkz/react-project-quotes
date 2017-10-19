import React from 'react';
 
class Quoteslist extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.createQuote = this.createQuote.bind(this);
    this.delete = this.delete.bind(this);
  }
 
  createQuote(item) {
    return <li onClick={(e) => this.delete(item.key, e)} key={item.key}>{item.text}</li>;
  }
  
  delete(key) {
      this.props.delete(key);
  }
 
  render() {
    var quoteEntries = this.props.entries;
    var listItems = quoteEntries.map(this.createQuote);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
}
 
export default Quoteslist;