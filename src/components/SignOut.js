import { Button } from '@material-ui/core'
import React from 'react';
import {auth} from '../firebase';
import '../App.css';

function SignOut() {
  return (
    <div className="fixed">
    <div className='logout-navbar'>
    <Button className='signout' onClick={()=>auth.signOut()}>SignOut</Button>
    </div>
    </div>
  )
}

export default SignOut