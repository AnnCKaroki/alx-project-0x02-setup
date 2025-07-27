import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border w-full max-w-xl">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
