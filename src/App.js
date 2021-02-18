import React, { Component } from "react"
import Twitter from "./TwitterHook"

class App extends Component {
  state = {
    loading: false,
    actived: true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: true
      })
    },2000);
  }
  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render() {
    const posts = [
      {
        tittle: 'xpto',
        description: 'blabla'
      },
      {
        tittle: 'foo',
        description: 'blafoo'
      }
    ]
    return(
      <div>
        <button onClick={this.onRemove}>Remover componente</button>    
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />          
        )}  
      </div>
    )
  }
}

export default App