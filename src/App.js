import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import Plan from './plan';

class App extends Component {
  state = {
    items:[],
    text:
    ""
  }
  handleEvent = e =>{
    this.setState({text : e.target.value})
  }

  handleAdd = e =>{
    if(this.state.text !== ""){
      const items = [...this.state.items,this.state.text]
      this.setState({items :items,text:""});
    }
  }

  handleDelete = id =>{
    console.log("Delete",id)
    alert('Do you want Delete This?!');
    const Olditems = [...this.state.items] 
    const items = Olditems.filter((Element,i) =>{
      return i !== id
    })
    this.setState({items : items,text:""})
  }
  render(){
    return(
      <div className='container-fluid my-5'>
          <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg'>
          <h1 className='text-center'>Today's Plan</h1>
          <div className='row'>
          <div className='col-9'>
         <input type="text" className="form-control" placeholder='Write Plan Here' value={this.state.text}
         onChange={this.handleEvent}></input>
          </div>
          <div className='col-2'>
            <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
          </div>
          <div className='container-fluid'>
              <ul className='list-unstyled row m-5'>
               <Plan p={this.state.items} sendDelete={this.handleDelete}></Plan>
               {/* {console.log(this.state.items)} */}
               {/* {
                this.state.items.map((value,i)=>{
                  return <Plan key ={i} value={value} id={i} sendData={this.handleDelete}></Plan>
                })
               } */}
              </ul>
          </div>
          </div>
         </div>
         </div>
    </div>
    )
  }
}

export default App;