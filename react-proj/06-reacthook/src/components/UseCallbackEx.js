import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx({ postId }) {
  const [post, setPost] = useState();
  const [text, setText] = useState("");

  //   https://jsonplaceholder.typicode.com/posts/
  const fetchData = useCallback( async () => {
    console.log("❤️")
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);

//   useEffect는 컴포넌트가 Mount되거나 Update될 때 동작;
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h3>useCallback 공부 2</h3>
      <div>조회한 포스트 ID: {postId}</div>

      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )}
    </>
  );
}

// useMemo vs useCallback
// useMemo : 특정 값을 기억하여, 불필요한 연산을 방지
// useCallback : 특정 함수를 기억하여, 불필요한 재선언을 방지