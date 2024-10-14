import React, { useRef, useState } from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';          
import { Card } from "primereact/card"
import { Toast } from 'primereact/toast';
        
const Greet = () => {
    const [state,setState] = useState ({
        msg:'',
    })
    let toast = useRef(null)
    let greet = () =>{
        toast.current.show({severity:'success', summary: 'Success', detail: state.msg, life: 3000});
    }
  return (
    <>
        <div className="grid">
            <div className="col-4">
                <Card className="bg-black-alpha-20 m-4">
                    <from>
                        {/* <pre>{state.msg}</pre> */}
                        <InputText value={state.msg} onChange={(e)=>setState({...state,msg:e.target.value})} placeholder='Message'/>
                        <Button onClick={greet} label='Greet' className='p-button-success ml-2'/>
                    </from>
                </Card>
                <Toast ref={toast}/>
            </div>
        </div>
    </>
  )
}

export default Greet