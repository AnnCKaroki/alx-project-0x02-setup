import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 w-full max-w-xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{content}</p>
      <span className="text-sm text-gray-400">Posted by User #{userId}</span>
    </div>
  );
};

export default PostCard;
