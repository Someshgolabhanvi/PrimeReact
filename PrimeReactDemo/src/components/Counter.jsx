
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useState } from 'react';
         
        



const Counter = () => {

  const [state,setState] = useState({count:0});
  const incr = () =>{
    setState({
      ...state,
      count:state.count+1,
    })
  }
  const decr = () =>{
    setState({
      ...state,
      count:state.count-1 >= 0 ? state.count -1 : 0,
    })
  }
  return (
    <div className="grid">
      <div className="col-4">
        <Card className='m-3 shadow-5 bg-black-alpha-20'>
          <h3 className='text-4xl p-0'>{state.count}</h3>
          <Button label='Increament' className='p-button-success mr-2' onClick={incr}/>
          <Button label='Decreament' className='p-button-warning' onClick={decr}/>
        </Card>
      </div>
    </div>
  )
}

export default Counter