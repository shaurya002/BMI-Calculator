import React,{useState} from "react";
import './index.css';

function App() {

  //state
  const [weight, setWeight] = useState(0)

  const [height, setHeight] = useState(0)

  const [bmi, setBmi] = useState('')

  const [message, setMessage] = useState('')



  let calcBMI = (event) => {
    //for preventing to get submitted on server
    event.preventDefault()

    //calculation part
    if(weight===0 || height===0){
      alert('Please enter valid data')
    }else{
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

         //message part
      if(bmi < 25){
        setMessage('You are Under-Weight!')
      }else if(bmi >= 25 && bmi < 30){
        setMessage('You have Healthy-Weight!')
      }else{
        setMessage('You are Over-Weight!')
      }
    } 
  }

    let clear = () =>{
      window.location.reload()
    }


  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weigth (lbs)</label>
            <input value={weight} onChange={(event)=>setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event)=>setHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="submit" onClick={clear}>Clear</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi} </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
