import React, { useEffect, useState } from 'react'
import { UserService } from '../services/UserService';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        

const UserList = () => {
    const [state,setState] = useState({
        loading:false,
        users:[],
        errorMessage : null
    });
    useEffect( async ()=>{
        try{
            setState({...state,loading:true});
            const response = await UserService.getAllUsers();
            let {results} = response.data;
            setState({
                ...state,
                loading:false,
                users:results,
            })
        }
        catch(error){
            setState({
                ...state,
                errorMessage:error,
            })
        }
    },[])

    // const DispalySNO = (rowData) => {
    //         return rowData.login.uuid.subString(0,5);
    // }
    
  return (
   <>
        <div className="grid">
            <div className="col">
                <DataTable value={state.users}>
                    <Column field='login.uuid' header="Sr.No" />
                    <Column header='Email' field='email'/>
                </DataTable>
            </div>
        </div>
   </>
  )
}

export default UserList