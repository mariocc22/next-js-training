import React, { Suspense } from "react";
import ListOfPosts from "./ListOfPosts";

export default function PostPage() {
  return (
    <>
      {/* con esto harias un tipo "loader" para cualquier llamado asyncrono que esta en proceso o en "loading" */}
      <Suspense fallback={<p>Cargando posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </>
  );
}
