import React from 'react'
import "./style.css"

export function Button({text,type="button"}) {
  return (
    <button className='Button' type={type}>{text}</button>
  )
}