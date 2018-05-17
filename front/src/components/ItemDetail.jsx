import React, {Component} from 'react';
import {getSingleItem} from '../services/entryService'

class ItemDetail extends Component{
  
  state = {
    id: null,
    entry:{}
  }

componentWillMount() {
const id = this.props.match.params.id;
  this.setState({id}) 

getSingleItem(id)
  .then((entry)=>{
    this.setState({entry})
  })
  .catch(e=>alert(e))
  }


  render(){
    const {entry} = this.state;
    return (
      <div>
        <img width="400" src={entry.cover} alt=""/>
        <h1>{entry.title}</h1>
        <h2>{entry.author}</h2>

      </div>
    )
  }
}

export default ItemDetail;