import React, {Component} from 'react';
import * as api from '../../services/entryService';
import {Link} from 'react-router-dom';

class HomePage extends Component{

state = {
  entries: []
}

componentWillMount() {
  api.getItems()
  .then(entries=>{
    console.log(entries)
    this.setState({entries})
  })
  .catch(e=>alert(e))
}

submitForm= (e) => {
  e.preventDefault();
const newEntry = {
  title: e.target.title.value,
  body: e.target.body.value,
  author: e.target.author.value,
  cover: e.target.cover.files[0]
 };
 api.addItem(newEntry)
 .then(nentry=>{
   const {entries} = this.state;
   entries.push(nentry);
   this.setState({entries});
 })
}


  render(){
    const {entries} = this.state;
    return(
      <div>
     {entries.map(e=>{
       return(
         <Link to={"/" + e._id}>
         <div key= {e._id}>{e.title}</div>
         </Link>
       )
     })}
        
        <form onSubmit={this.submitForm}>
          <input type="text" name="author" placeholder="author"/>
          <br/>
          <input type="text" name="title" placeholder="title"/>
          <br/>
          <textarea name="body" placeholder="body"></textarea>
          <br/>
          <input type="file" name="cover"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default HomePage;