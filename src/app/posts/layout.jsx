import Counter from "./Counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee>Home &bull; Posts</marquee>
      {children}
    </div>
  );
}
