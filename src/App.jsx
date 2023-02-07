import {useState } from 'react';
import './App.css';

function App() {
  const [inputOne,setInpustOne] = useState(1)
  const [inputTwo,setInpustTwo] = useState(2)
  const [operation,setOperation] = useState("/")
  const [result,setResult] = useState(0)
  
  const resultHandler = e => {  
    const equal =
    operation === "+" ? Number(inputOne) + Number(inputTwo) :
    operation === "-" ? inputOne - inputTwo :
    operation === "/" ? inputOne / inputTwo :
    operation === "x" && inputOne * inputTwo 
    setResult(equal)
  }

  const resetHandler = type => {
    if(type === "input"){
      setInpustOne(0)
      setInpustTwo(0)
    } else {
      setResult(0)
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-700">
      <div className="w-4/12 h-3/6 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <h1 className='py-5 capitalize text-slate-400 text-2xl text-center '>
          simplest working calculator app
        </h1>
        <div className="flex justify-center flex-col items-center gap-5">
          <div className="m-auto flex">
            <input 
            type="number"
            className='w-24 h-10 mx-5 p-5 outline-none bg-slate-900 text-yellow-300  rounded-2xl'
            value={inputOne}
            onChange={(e) => setInpustOne(e.target.value)}
            />
            <div className="rounded-full w-10 h-10 bg-slate-900 text-yellow-300  flex justify-center items-center font-bold text-2xl">
              <div className='flex items-center justify-center mb-1'>
                {operation}
              </div>
            </div>
            <input 
            type="number"
            className='w-24 h-10 mx-5 p-5 outline-none bg-slate-900 text-yellow-300 rounded-2xl'
            value={inputTwo}
            onChange={(e) => setInpustTwo(e.target.value)}
            />
          </div>
          <div className="flex">
            <div 
            className="p-3 m-2 bg-slate-900 text-green-500 font-bold rounded-xl cursor-pointer"
            onClick={() => setOperation("+")}
            >+</div>
            <div 
            className="p-3 m-2 bg-slate-900 text-green-500 font-bold rounded-xl cursor-pointer"
            onClick={() => setOperation("-")}
            >-</div>
            <div 
            className="p-3 m-2 bg-slate-900 text-green-500 font-bold rounded-xl cursor-pointer"
            onClick={() => setOperation("/")}
            >/</div>
            <div 
            className="p-3 m-2 bg-slate-900 text-green-500 font-bold rounded-xl cursor-pointer"
            onClick={() => setOperation("x")}
            >*</div>
          </div>
          <div className="flex gap-5">
            <div 
            className="text-pink-600 capitalize bg-slate-900 px-5 py-2 cursor-pointer rounded-lg font-semibold"
            onClick={() => resetHandler('input')}
            >reset input</div>
            <div 
            className="text-pink-600 capitalize bg-slate-900 px-5 py-2 cursor-pointer rounded-lg font-semibold"
            onClick={() => resetHandler('result')}
            > reset result </div>
          </div>
        </div>
        <div className="text-slate-200 text-center mt-10 text-3xl cursor-pointer w-fit m-auto hover:text-yellow-500 transition-all duration-500" onClick={resultHandler}> = </div>
        <div className={ result > 0 ? "text-5xl text-center mt-5 text-green-600" :  result < 0 ? "text-5xl text-center mt-5 text-red-600" : "text-5xl text-center mt-5 text-slate-200"}>
          {typeof result === 'number' && !isNaN(result) ? result : 0}
        </div>
      </div>
    {/* {result} */}
    {/* <button onClick={resultHandler}>click</button> */}
    </div>
  );
}

export default App;
 