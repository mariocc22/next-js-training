import Link from "next/link";
import React from "react";

const fetchSinglePost = ({ id }) => {
  // this cache: 'no-store" we are saying: NOT STORE IT IN CACHE BECAUSE THIS IS SERVER RENDERING
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Post = async ({ children, params }) => {
  // estos params vienen de la URL! sin tener que pasar por props, asi es con todas las rutas anidadas
  const { id } = params;
  const post = await fetchSinglePost({ id });

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comments</Link>
      {children}
    </article>
  );
};

export default Post;
