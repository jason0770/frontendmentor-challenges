import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const navigate = useNavigate()
    function checkInvalid(e) {
        e.preventDefault();
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setIsEmailInvalid(true);
        } else {
            navigate('/success', {state:{email:email}});
        }
    }

  return (
    <div className='bg-[hsl(228,45%,44%)] h-[100vh] flex items-center flex-col max-[900px]:h-auto'>
        <div className='shadow-xl bg-white rounded-lg w-[960px] py-[10px] pr-[20px] m-auto flex justify-center items-center max-[900px]:flex-col-reverse max-[900px]:w-auto max-[900px]:p-0'>
            <div className='flex m-auto justify-center'>
                <div className= 'h-[593px] w-[400px] mr-10 ml-10 max-[900px]:m-0  max-[900px]:h-auto max-[900px]:w-[375px] max-[900px]:px-8'>
                    <div className='text-black font-bold text-5xl mt-20 max-[900px]:mt-6 max-[900px]:text-4xl'>
                        Stay updated!
                    </div>

                    <p className='mt-6'> 
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>

                    <ul className='mt-6 ml-7 list-image-[url("../public/images/icon-list.svg")]'>
                        <li>Product discovery and building what matters</li>    
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>     

                    <form className='mt-6 flex flex-col' 
                        onSubmit={(e) => checkInvalid(e)}
                    >
                        <div className='flex justify-between'>
                            <label className='font-bold'>Email address</label>
                            {isEmailInvalid ? <div className='font-bold text-[#ff4646]'>Valid Email Required</div> : <div></div>}
                        </div>

                        {isEmailInvalid ? 
                            <input className='text-xl p-4 border-2 rounded-lg border-[#ff4646] text-[#ff4646] bg-[#ffb0b0]' type="email"
                                onChange={(e) => {
                                    setIsEmailInvalid(false);
                                    setEmail(e.target.value);
                                }}
                            
                            />
                            :
                            <input className='text-xl p-4 border-2 rounded-lg border-black' placeholder="email@company.com" type="email" required 
                                onChange={(e) => {
                                    setIsEmailInvalid(false);
                                    setEmail(e.target.value);
                                }}
                            
                            />
                        }

                        <button className='rounded-lg text-white bg-slate-400 mt-6 py-5 hover:bg-slate-800 shadow-xl max-[900px]:mb-10' type="submit">Subscribe to monthly newsletter</button> 
                    </form> 
                </div>
                </div>
                <div className="w-[375px] h-[284px] bg-center bg-[url('../public/images/illustration-sign-up-desktop.svg')] max-[900px]:bg-[url('../public/images/illustration-sign-up-mobile.svg')]">
                    
                </div>
            
        </div>
    </div>
  )
}
