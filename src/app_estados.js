import React from 'react';

class App extends React.Component{
constructor () {
  super();
   this.state = {
     text:[]
   }
}
  update(e){

    this.state.text.push(e.key)
    console.log(this.state.text)


  }
  render(){
    return (
              <div>
                <input type="text" value={this.state.text} onKeyPress={this.update.bind(this)} />
                <h1>{this.state.text}</h1>
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
