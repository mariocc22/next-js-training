import Link from "next/link";
import React from "react";
import Image from "next/image";

const fetchComments = async ({ id }) => {
  await new Promise((res) => setTimeout(res, 3000));
  // this cache: 'no-store" we are saying: NOT STORE IT IN CACHE BECAUSE THIS IS SERVER RENDERING
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Comments = async ({ params }) => {
  // estos params vienen de la URL! sin tener que pasar por props, asi es con todas las rutas anidadas
  const { id } = params;
  const comments = await fetchComments({ id });

  return (
    <ul style={{ fontSize: "12px", background: "#444" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            width="50"
            height="50"
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg
            `}
            alt="image comment"
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
