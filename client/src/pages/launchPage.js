import React, {Component} from 'react'
import './launchPage.css'


export class LaunchPage extends Component {
    render(){
        return(
            <div className='launchPage'>
                <div className='navBar'>
                    <button>login</button>
                    <button>sign up</button>
                </div>
                <div className='heading'>
                <h1>
                    Ask Me Anything but Pay Up!
                </h1>
                <p>
                AMA sessions with a twist - pay your favorite
creators to answer your questions!
                </p>
                <button>Get Started</button>
                </div>
            </div>
        )
    }
}