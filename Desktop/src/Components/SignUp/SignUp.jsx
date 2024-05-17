import React from 'react'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="main">
            <div className="box">
                <div className="inner_box">
                    <div className="carousel">
                        <div className='image_wrapper'>
                            <img src="/src/assets/Autumn-amico.png" alt="" />
                        </div>
                    </div>
                    <div className="form_wrap">
                        <div className="logo">
                            <img src="/src/assets/Logo.png" alt="easyclass" />
                        </div>
                        <form action="index.html" autoComplete='off' className="sing_in_form">
                            <div className="header">
                                <h1>Create An Account</h1>
                            </div>
                            <div className="actual_form">
                                <div className="input_wrap">
                                    <p>Full Name</p>
                                    <input type="text" autoComplete='off' placeholder='Enter Full Name' className="input_field" required />
                                </div>
                                <div className="input_wrap_email">
                                    <p>Email</p>
                                    <input type="email" autoComplete='off' placeholder='Enter Your Email' className="input_field" required />
                                </div>
                                <div className="input_wrap">
                                    <p>Password</p>
                                    <input type="password" autoComplete='off' placeholder='Enter Your Password' className="input_field" required />
                                </div>
                            </div>

                            <div className="button">
                                <button>Sign-Up</button>
                            </div>

                            <p className="Or"> - Or -</p>

                            <div className='social_links'>
                                <img src="/src/assets/Google.png" alt="" />
                                <img className='apple' src="/src/assets/Facebook.png" alt="" />
                                <img src="/src/assets/Apple.png" alt="" />
                            </div>

                            <div className="login">
                                <p>Already have an account ?</p>
                                <p><link rel="stylesheet" href="#" />Login</p>
                            </div>


                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignUp