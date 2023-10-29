import React from 'react'
import ContactIMG from '../assets/contact.jpeg'
import '../styles/contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${ContactIMG})`}}></div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>
            Ad Soyad
          </label>
          <input type='text' name='name' placeholder='Lütfen Adınızı Soyadınızı Giriniz...'/>
          <label>
            Email
          </label>
          <input type='email' name='email' placeholder='Lütfen Emailinizi Soyadınızı Giriniz...'/>
          <label>
            Ad Soyad
          </label>
          <textarea  name='message' rows={6} placeholder='Lütfen Mesajınızı Soyadınızı Giriniz...'/>
        </form>
      </div>
    </div>
  )
}
