import React from 'react'
import UserInfo from './UserInfo'

export default function Comments(props) {
  return (
    <div> Comments 
  {/* <UserInfo name={props.author.name}/> */}
  <UserInfo author={props.author}/>


  
<h3> Comments are : {props.comment} </h3>
Comment Date : {props.date}
    </div>
  )
}
