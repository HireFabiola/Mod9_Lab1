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
        <div className="flex items-center mb-4">
          {user.avatarUrl && (
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={user.avatarUrl}
              alt={user.name}
            />
          )}
          <div>
            {showRole && <p className="text-gray-600">{user.role}</p>}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black text-center w-full mb-2">{user.name}</h2>
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