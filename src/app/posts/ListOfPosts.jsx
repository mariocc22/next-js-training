import React from "react";

//component
import LikeButton from "./LikeButton";
import Link from "next/link";

const fetchPosts = () => {
  // this cache: 'no-store" we are saying: NOT STORE IT IN CACHE BECAUSE THIS IS SERVER RENDERING
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h2 style={{ color: "lightcoral" }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
    </section>
  );
}
