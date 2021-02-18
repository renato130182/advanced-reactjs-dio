import React, { Component  } from "react";

class Twitter extends Component{
    state = {
        tweet: 'title'
    }
    componentDidMount(){
        const {posts,loading} = this.props
        console.log('componentDidMount' , posts)
        console.log('Component Loading..', loading )
    }

    componentDidUpdate(prevProps){
        const {loading} = this.props
        if(this.props.loading !== prevProps.loading) {
            console.log('Component loading..', loading )
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount : fui removido')
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !== nextState.tweet
        //return true
    }

    tweet = () =>{
        this.setState({
            tweet: true
        })
    }
    render() {
        const {posts} = this.props
        console.log('componentDidMount' , posts)
        return (
            <div>
                <button onClick={this.tweet}>Re-render</button>
                test
            </div>
        )
    }

}
export default Twitter;
