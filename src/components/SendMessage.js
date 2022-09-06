import { Button , Input } from '@material-ui/core'
import React ,{useState} from 'react';
import {db , auth} from '../firebase';
import firebase from 'firebase/compat/app';
import '../App.css';

function SendMessage({scroll}) {
  const [msg , setMsg] = useState('');

  async function sendMessage(e) {
    // prevent default stop reloading of page when submit
    e.preventDefault();
    const {uid, photoURL} =auth.currentUser
    await db.collection('messages').add({
      text:msg,
      photoURL,
      uid,
      createdAt : firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg('')
    scroll.current.scrollIntoView({ behavior: 'smooth' })
    
  }



  return (
    <div>
        <form onSubmit={sendMessage}>
          <div className='sendMsg'>
            <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="send messages.." />
            <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type='submit'>Send Messages</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage