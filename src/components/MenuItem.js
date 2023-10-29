import React from 'react'

function MenuItem({name,image,content,price}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${image})`}}></div>
      <h1 style={{marginBottom:'10px'}}>{name}</h1>
      <h6 style={{marginTop:0}}>{content}</h6>
      <i style={{color:'brown'}}>{price} TL</i>
    </div>
  )
}

export default MenuItem
