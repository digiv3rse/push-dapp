import { LeaderboardModelledResponse, LeaderboardResponse } from '../../types';

export const getRewardsLeaderboardModalCreator = (response: LeaderboardResponse): LeaderboardModelledResponse => {
  return response.users.map((user) => ({
    userId: user.userId,
    userWallet: user.userWallet,
    totalPoints: user.totalPoints,
    rank: user.rank,
  }));
};
