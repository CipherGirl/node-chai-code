import { User } from './users.model.js';

const createUser = async (user) => {
  const createdUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create user!');
  }
  return createdUser;
};

export default {
  createUser,
};
