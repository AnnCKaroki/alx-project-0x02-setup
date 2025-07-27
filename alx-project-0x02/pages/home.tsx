import React from 'react';
import {useState} from 'react';
import Card from "@/components/common/Card";;
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';
import Header from "@/components/layout/Header"


const HomePage: React.FC =() => {

     const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Welcome to ALX',
      content: 'This project demonstrates reusable components using Next.js and TypeScript.',
    },
  ]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return(
    <>
    <h1>Welcome</h1>
    <Card title="Learn by doing" content="Do hard things!" />

    <div className="space-y-4 w-full flex flex-col items-center">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

    <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <Header />
    </>
  )
}

export default HomePage;
