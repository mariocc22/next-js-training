import React from 'react'

const Post = ({params}) => {
  // estos params vienen de la URL! sin tener que pasar por props, asi es con todas las rutas anidadas
  const {id} = params;
  return (
    <h1>Esto es el post {id}</h1>
  )
}

export default Post