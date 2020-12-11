import React from 'react';
import Button from './button'
import Textfield from './textfields'

export default function Header () {
    return(
        <header>
            <p>This is header component.</p>
            <Textfield></Textfield>         
            <Button text="This is prop test."></Button>            
        </header>
    )
}