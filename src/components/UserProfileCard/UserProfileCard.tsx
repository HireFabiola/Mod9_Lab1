import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex flex-col items-center mb-4">
          {user.avatarUrl && (
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={user.avatarUrl}
              alt={user.name}
            />
          )}
         
        </div>
        <h2 className="text-xl font-extrabold !text-gray-900 text-center w-full mb-2">{user.name}</h2>
        <div>
            {showRole && <p className="text-gray-600">{user.role}</p>}
          </div>
        {showEmail && (
          <p className="text-gray-600 text-center">{user.email}</p>
        )}
        {onEdit && (
          <div className="text-center mt-4">
            <button
              onClick={() => onEdit(user.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};