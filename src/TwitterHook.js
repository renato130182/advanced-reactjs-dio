import React, { useEffect,useState, memo  } from "react";
// Equivalente shouldComponentUpdate, porem com logica invertida "!== X ===""
const areEqual = (prevProp,nextProps) => {
    return prevProp.loading === nextProps.loading
}

function Twitter (props){
    const {loading} = props
    const [tweet, setTweet] = useState('title')
    //Equivalente componentDidMount
    useEffect(() =>{
        const {posts,loading} = props
        console.log('componentDidMount' , posts)
        console.log('Component Loading..', loading )
    },[])
    
    // Equivalente componentDidUpdate
    useEffect(()=>{                
            console.log('Component loading..', loading )
    },[loading])

    //Equivalente componentWillUnmount
    useEffect(()=>{
        return () => {
            console.log('componentWillUnmount : fui removido')    
        }
    },[])

    const handleTweet = () =>{
        setTweet('Tweet atualizado')
    }
       
    console.log('Tweet Atualizado' , tweet)
    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            test
        </div>
    )
    
}
export default memo(Twitter,areEqual);
