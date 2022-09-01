import {useState, useRef, useEffect} from "react";


function useGame(defaultValue = 10){
    const [text, setText] = useState("")
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(defaultValue) 
    const [wordCount, setWordCount] = useState(0)
    const textRef = useRef(null)
  
    function startGame(){
      setIsTimeRunning(true)
      setTimeRemaining(defaultValue)
      setText("")
      setWordCount(0)
      textRef.current.disabled = false
      textRef.current.focus() // makes the textArea be the area of focus
    }
    
    function endGame(){
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text))
    }
  
    function handleChange(event){
      const {value} = event.target
      setText(value)
    }
  
    function calculateWordCount(text){
      const textArr = text.trim().split(" ")
      return textArr.filter(item => item !== "").length
    }
  
    useEffect(() =>{
      if(isTimeRunning && timeRemaining > 0){
        setTimeout(() =>{
          setTimeRemaining(prev => prev - 1)
        },1000)
      }else if(timeRemaining === 0){
        endGame()
      }
    },[timeRemaining, isTimeRunning])

    return {textRef,isTimeRunning,handleChange,wordCount,text,timeRemaining,startGame}
  
}
export default useGame

//This is a custom Hook