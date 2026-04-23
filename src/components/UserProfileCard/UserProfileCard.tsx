import React from 'react';
import type { UserProfileCardProps } from '../../types';
import defaultAvatar from '../../assets/defaultAvatar.png';

// Component that displays user information based on props passed from test file
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {

  // setting default avatar if user doesn't have one or if the provided avatar fails to load
  const avatarSrc = user.avatarUrl || defaultAvatar;

  return (
    // Parent container for the profile card with styling
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">

        {/* Avatar section with error handling to fallback to default avatar if the image fails to load */}
        <div className="flex flex-col items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mb-2"
            src={avatarSrc}
            alt={user.name}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = defaultAvatar;
            }}
          />
        </div>

            {/* User name section with styling */}
        <h2 className="text-xl font-extrabold !text-gray-900 text-center mb-2">
          {user.name}
        </h2>

    {/* User information section that conditionally renders email and role based on props */}
        {showRole && (
          <p className="text-gray-600 text-center">{user.role}</p>
        )}

        {showEmail && (
          <p className="text-gray-600 text-center">{user.email}</p>
        )}

{/* Edit button section that conditionally renders based on presence of onEdit prop and calls the provided function with user ID when clicked */}
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