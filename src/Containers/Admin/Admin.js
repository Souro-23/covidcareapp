import React, { useEffect } from 'react'
import { useAuth } from '../../Contexts/AuthContext'

export default function Admin(props) {
    const { currentUser, logout  } = useAuth()

    const chechState=()=>{
        if(!localStorage.getItem("user")){
            console.log("not loged in")
            props.history.push('/login')
        }
    }
    useEffect(() => {
        chechState()
    }, [])

    const onLogout=()=>{
        logout()
        props.history.push('/login')
    }
    

    return (
        <div>
            <>
            {currentUser?.uid}
            <button onClick={onLogout}>logout</button>

            <button onClick={()=>props.history.push('/admin/food')}>Food </button>
            </>
        </div>
    )
}
