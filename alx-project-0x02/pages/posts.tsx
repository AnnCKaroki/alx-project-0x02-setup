import Header from '@/components/layout/Header';
import { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';





export default function PostsPage() {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-yellow-50 p-6 space-y-6">
        <h1 className="text-4xl font-bold text-yellow-700">Current Posts </h1>
        {posts.length === 0 ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
}
