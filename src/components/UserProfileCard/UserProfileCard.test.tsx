import React from 'react';

import femaleAvatar from '../../assets/femaleAvatar.jpeg'
import meAvatar from '../../assets/meAvatar.jpeg'
import type { User, UserProfileCardProps } from '../../types';
import { UserProfileCard } from './UserProfileCard';

// Create user instances 
const user1: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: null
};

const user2: User = {
  id: '2',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: femaleAvatar,
};

const user3: User = {
  id: '3',
  name: 'Fabiola Aurelien',
  email: 'fabulousone@example.com',
  role: 'Senior Software Engineer',
  avatarUrl: meAvatar
};


// Create profile card configurations for each user with different prop combinations for testing
const user1ProfileCardProps: UserProfileCardProps = {
  user: user1,
  showEmail: false,
  showRole: false,
  // onEdit: (userId: string) => alert(`Editing user ${userId}`),
  // children: <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
};

const user2ProfileCardProps: UserProfileCardProps = {
  user: user2,
  showEmail: false,
  showRole: true,
  onEdit: (userId: string) => alert(`Editing user ${userId}`),
  children: <div className="text-sm text-gray-500">Last login: 1 hour ago</div>
};

const user3ProfileCardProps: UserProfileCardProps = {
  user: user3,
  showEmail: true,
  showRole: true,
  onEdit: (userId: string) => alert(`Not allowed to edit user ${userId}`),
  children: <div className="text-sm text-gray-500">Administarive Access Granted</div>
};

// Call to component that renders profile cards with the configured props
export const UserProfileCardTest: React.FC = () => {
  return (
    <div className="space-y-4">
      <UserProfileCard {...user3ProfileCardProps} />
      <UserProfileCard {...user2ProfileCardProps} />
      <UserProfileCard {...user1ProfileCardProps} />
    </div>
  );
};


