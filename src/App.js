import React from 'react';

class App extends React.Component{
constructor () {
  super();
   this.state = {
     text:"",
     textE:""
   }

   this.handleChange=this.handleChange.bind(this);
   this.handleEnter=this.handleEnter.bind(this)
}
   handleChange(event){
     this.setState({text:event.target.value})
   }

   handleEnter(event){
     if(event.key==="Enter"){

      this.setState({textE:"asdasdasdasdas"})

      alert(this.state.textE)
     }
   }








  render(){
    return (
              <div>
                <textarea type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleEnter} />

              </div>
            )
  }

}


/*Revisar que el archivo index.js tenga:

ReactDOM.render(
  <App name="Diego" lastname="Herrera" />,
  document.getElementById('root')
);


*/


export default App
