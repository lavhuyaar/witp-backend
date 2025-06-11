import db from '../db';

export const addUser = async (name: string, score: number) => {
  const user = await db.user.create({
    data: {
      name,
      timeTook: score,
    },
  });

  return user;
};

export const getUsersData = async () => {
  const users = await db.user.findMany({
    orderBy: { timeTook: 'desc' },
    take: 25,
    select: {
      name: true,
      timeTook: true,
    },
  });

  return users;
};
