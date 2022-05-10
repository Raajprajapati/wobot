import React from 'react';
import bluelines from '../../img/bluelines.png';
import './signupcard.css';

function SignupCard() {
  return (
    <>
        <div className="signup">
            <div className="header">
                <div className="logo">
                    <img src={bluelines} alt="blue lines image" />
                </div>
                <h2>It’s a delight to have you onboard</h2>
                <p>Help us know you better.</p>
                <p>(This is how we optimize Wobot as per your business needs)</p>
            </div>
            <div className="inputfield">
                <form >
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" name="company_name" id="company_name" placeholder="e.g. Example Inc"/>
                    <label htmlFor="industry">Industry</label>
                    <select name="" id="industry">
                        <option value="" selected disabled hidden  >Select</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="bio">Bio-lifescience</option>
                        <option value="computer">Computer science</option>
                        <option value="tele">Telecommunications</option>
                        <option value="research">Research & Development</option>
                    </select>
                    <p className="company_size_p">Company size</p>
                    <div className="company_size">
                        <input type="radio" id="size1" name="size" value="20"/>
                        <label htmlFor="size1">1-20</label>
                        <input type="radio" id="size2" name="size" value="50"/>
                        <label htmlFor="size2">21-50</label>  
                        <input type="radio" id="size3" name="size" value="200" defaultChecked/>
                        <label htmlFor="size3">51-200</label>
                        <input type="radio" id="size4" name="size" value="500"/>
                        <label htmlFor="size4">201-500</label>
                        <input type="radio" id="size5" name="size" value="501"/>
                        <label htmlFor="size5">500+</label>
                    </div>
                    <button type="submit" value="Submit" onClick={(e)=>e.preventDefault()}>get started</button>
                </form>
            </div>
        </div>

    </>
  )
}

export default SignupCard;