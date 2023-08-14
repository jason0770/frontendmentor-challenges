import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Success() {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div className='bg-[hsl(228,45%,44%)] h-[100vh] flex items-center justify-center max-[900px]:h-full max-[900px]:block'>
        <div className='rounded-lg w-[500px] flex flex-col bg-white p-10 max-[900px]:w-auto max-[900px]:rounded-none'>
            
            <div className="w-[64px] h-[64px] bg-center bg-[url('../public/images/icon-success.svg')] max-[900px]:mt-20">
                
            </div>
            
            <div className='text-5xl font-bold mt-6'>
                Thanks for subscribing!
            </div>

            <p className='mt-6'>
                A confirmation email has been sent to <span className='font-bold'>{location.state.email}. </span> 
                Please open it and click the button inside to confirm your subscription.
            </p>

            <div className='rounded-lg text-white bg-slate-400 mt-6 py-5 hover:bg-slate-800 shadow-xl text-center max-[900px]:absolute max-[900px]:bottom-0 max-[900px]:right-0 max-[900px]:left-0 max-[900px]:w-[80%] max-[900px]:m-auto max-[900px]:mb-10'
                onClick={() => {navigate('/')}}
            >
                Dismiss message
            </div>
        </div>
    </div>
  )
}
