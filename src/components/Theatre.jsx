import {useState} from 'react'

export default function Theatre() {
    const [movie,setMovie] = useState(localStorage.getItem('movie'));
  return (
    <div>{movie}</div>
  )
}
