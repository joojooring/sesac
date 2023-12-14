// PostList 컴포넌트
import { useEffect, useState } from 'react';
import PostItem from './PostItem';

interface PostItemList {
    id: number,
    title: string,
    body: string,
  }


const PostList = () => {
  const [posts, setPosts] = useState<PostItemList[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();
      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className='PostList'>
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
