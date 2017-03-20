import React from 'react';

class App extends React.Component{
constructor () {
  super();
   this.state = {
     text:"",
     textE:""
   }
   this.message="Escribi algo en el campo de texto y presiona Enter"
   this.handleChange=this.handleChange.bind(this)
   this.handleEnter=this.handleEnter.bind(this)
}
   handleChange(event){
     this.setState({text:event.target.value})
   }

   handleEnter(event){

     if(event.key==="Enter"){

    //  console.log(this.state.text)

      alert(this.state.text)
     }
   }

  render(){
    return (
              <div>
                <h3>{this.message}</h3>
                <textarea type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleEnter} />
              </div>

            )
  }

}

export default App
