import React from 'react'
import "./style.css"
import {Text} from "../../components"

export function NumberStudents({icon,number,type,iconBg}) {
  return (
    <div className='NumberStudents d-flex align-items-center gap-3'>
        <div className='icon flex-c' style={{backgroundColor:iconBg}}>{icon}</div>
        <div className='info d-flex flex-column'>
            <Text weight='bold' size='regular'>{number}</Text>
            <Text weight='light'>{type}</Text>
        </div>
    </div>
  )
}
