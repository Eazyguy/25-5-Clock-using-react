import {useState,useRef,useEffect} from 'react'
import {Card} from 'react-bootstrap'

const Clock = () => {
  const [session,setSession] = useState(25)
  const [brkSes,setBrkSes] = useState(5)
  const [min,setMin] = useState(session)
  const [sec,setSec] = useState(0)
  const [brk,setBrk] = useState(brkSes-1)
  const [play,setPlay] = useState(false)
  const [intervalID,setIntervalID]= useState(null)
  
const hasTimerEnded = sec <= -1

const isTimerRunning = intervalID != null


const timer =()=> {
    setSec((sec)=>sec-1)
}


const handlePlay=()=>{
 if(!play){
  if(!hasTimerEnded && !isTimerRunning){
  setIntervalID(setInterval(timer,1000))
  }

  }else{
    clearInterval(intervalID)
    setIntervalID(null)
  }
  setPlay((play)=>(!play))
}
  

useEffect(() => {

      if (hasTimerEnded) {
            setSec(59)
            if(min>-1){
          setMin(min-1)
            }else if(brk>0){
              setBrk(brk-1)
            } else if(brk==0){
               setMin(session-1)
               setBrk(brkSes-1)
            }
 }
  
    }, [hasTimerEnded,session])

     return (
          <>
          {/*Container*/}
          <h1 className="fw-bold mb-0">25+5 Clock</h1>
          <div className={min<=0 && min>=0||min<=1 && min>=0&&sec==0|| brk<=0 && brk>=0|| brk<=1 && brk>=0 && sec==0?"container-fluid border border-5 border-danger p-4 m-0 rounded-3":"container-fluid border border-5 border-dark p-4 m-0 rounded-3"}>
          {/*Increment and Decrement buttons*/}
          <div className="row justify-content-between mb-1">
          <div className="fw-bold col"><span>break length</span>
         <br/> <button className="text-dark" onClick={()=>{!isTimerRunning&& brk ==brkSes-1&&sec==0&& setBrk((state=>state < 60?state+1:state)),!isTimerRunning&& brk==brkSes-1&&sec==0&& setBrkSes((state)=>state<60?state+1:state)}}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" className="interval"><path fill="currentColor" d="M24 31.4q.65 0 1.075-.425.425-.425.425-1.075v-7.6l2.65 2.65q.45.45 1.05.45.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05l-5.2-5.2q-.25-.25-.5-.35-.25-.1-.55-.1-.3 0-.55.1-.25.1-.5.35l-5.2 5.2q-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45.6 0 1.05-.45l2.65-2.65v7.6q0 .65.425 1.075.425.425 1.075.425ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-3q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Zm0-17Z"/></svg></button>
         <span className="text-center pt-0 mt-0 mx-2">{brkSes}</span>
         <button className="text-dark" onClick={()=>{!isTimerRunning&& brk==brkSes-1&&sec==0&& setBrk((state=>state >=1 ? state-1:state)),!isTimerRunning&& brk==brkSes-1&&sec==0&& setBrkSes((state)=>state>=2?state-1:state)}}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" className="interval"><path fill="currentColor" d="M24 30.8q.3 0 .55-.1.25-.1.5-.35l5.2-5.2q.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45L25.5 25.7v-7.6q0-.65-.425-1.075Q24.65 16.6 24 16.6q-.65 0-1.075.425-.425.425-.425 1.075v7.6l-2.65-2.65q-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05l5.2 5.2q.25.25.5.35.25.1.55.1ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-3q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Zm0-17Z"/></svg></button>
          </div>
                    <div className="fw-bold col "><span className="text-nowrap">Session length</span>
         <br/> <button className="text-dark" onClick={()=>{!isTimerRunning&& min==session&&sec==0&& setMin((state)=>state < 60>0?state+1:state),!isTimerRunning&& min==session&&sec==0&& setSession((state)=>state < 60>0?state+1:state)}}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" className="interval"><path fill="currentColor" d="M24 31.4q.65 0 1.075-.425.425-.425.425-1.075v-7.6l2.65 2.65q.45.45 1.05.45.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05l-5.2-5.2q-.25-.25-.5-.35-.25-.1-.55-.1-.3 0-.55.1-.25.1-.5.35l-5.2 5.2q-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45.6 0 1.05-.45l2.65-2.65v7.6q0 .65.425 1.075.425.425 1.075.425ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-3q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Zm0-17Z"/></svg></button>
         <span className="text-center pt-0 mt-0 mx-2">{session}</span>
         <button className="text-dark" onClick={()=>{!isTimerRunning&& min==session&&sec==0&& setMin((state=>state > 0?state-1:state)),!isTimerRunning&& min==session&&sec==0&& setSession((state)=>state >0?state-1:state)}}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" className="interval"><path fill="currentColor" d="M24 30.8q.3 0 .55-.1.25-.1.5-.35l5.2-5.2q.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45L25.5 25.7v-7.6q0-.65-.425-1.075Q24.65 16.6 24 16.6q-.65 0-1.075.425-.425.425-.425 1.075v7.6l-2.65-2.65q-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05l5.2 5.2q.25.25.5.35.25.1.55.1ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-3q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Zm0-17Z"/></svg></button>
         </div>
         </div>
         {/*Timer Border*/}
          <Card bg={'dark'} className={min<=0 && min>=0||min<=1 && min>=0&&sec==0|| brk<=0 && brk>=0|| brk<=1 && brk>=0 && sec==0? "text-danger border border-5 border-danger rounded-pill fs-1 fw-bold mb-0":"text-light border border-5 border-warning rounded-pill fs-1 fw-bold mb-0"}>
          {/*Timer Body*/}
          <Card.Body>
          <p>{min>-1?"Session":"Break"}</p>
         {min>-1&&min<10?"0"+min:min>=10?min:brk<10?"0"+brk:brk}:{sec<10&&sec>=0?"0"+sec:sec}
          </Card.Body>
          </Card>
                    {/*Play and Pause Button*/}
          <button className="text-dark" onClick={handlePlay}>
          {!play?<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="3.5em" width="3.5em"><path fill="currentColor" d="M18.3 36.4q-.75.5-1.525.05Q16 36 16 35.1V12.6q0-.9.775-1.35.775-.45 1.525.05L36 22.6q.7.45.7 1.25T36 25.1Zm.7-12.55Zm0 8.55 13.45-8.55L19 15.3Z"/></svg>:
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="3em" width="3em"><path fill="currentColor" d="M29.25 38q-1.25 0-2.125-.875T26.25 35V13q0-1.25.875-2.125T29.25 10H35q1.25 0 2.125.875T38 13v22q0 1.25-.875 2.125T35 38ZM13 38q-1.25 0-2.125-.875T10 35V13q0-1.25.875-2.125T13 10h5.75q1.25 0 2.125.875T21.75 13v22q0 1.25-.875 2.125T18.75 38Zm16.25-3H35V13h-5.75ZM13 35h5.75V13H13Zm0-22v22Zm16.25 0v22Z"/></svg>}
          </button>
                    {/*Reset Button*/}
          <button className="text-dark" onClick={()=>{!isTimerRunning&& setMin(25),!isTimerRunning&& setBrk(4),!isTimerRunning&& setSession(25),!isTimerRunning&& setBrkSes(5),!isTimerRunning&& setSec(0)}}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2.5em" width="2.5em"><path fill="currentColor" d="M20.9 41.7q-5.55-1.05-9.225-5.45T8 26.05q0-3.55 1.5-6.7Q11 16.2 13.75 14q.4-.3.95-.275.55.025.95.425.5.5.45 1.15-.05.65-.65 1.15-2.1 1.75-3.275 4.275Q11 23.25 11 26.05q0 4.7 2.9 8.175 2.9 3.475 7.35 4.475.55.1.925.55.375.45.375 1 0 .7-.5 1.125-.5.425-1.15.325Zm6.3 0q-.65.1-1.15-.325-.5-.425-.5-1.125 0-.55.375-1 .375-.45.925-.55 4.5-1 7.35-4.475 2.85-3.475 2.85-8.175 0-5.45-3.775-9.225Q29.5 13.05 24.05 13.05h-1L25 15q.4.4.4 1.05T25 17.1q-.45.45-1.1.45-.65 0-1.05-.45l-4.55-4.5q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.55.1-.25.35-.5l4.55-4.55q.4-.4 1.05-.4t1.1.4q.4.45.4 1.1 0 .65-.4 1.05l-1.95 1.95h1q6.7 0 11.35 4.675 4.65 4.675 4.65 11.325 0 5.8-3.65 10.2-3.65 4.4-9.2 5.45Z"/></svg>
          </button>
          </div>
          </>
          )
}

export default Clock