import React from 'react'

const Post = ({params}) => {
  // estos params vienen de la URL! sin tener que pasar por props
  const {id} = params;
  return (
    <h1>Esto es el post {id}</h1>
  )
}

export default Post