export const showAddress = (str: string) => {
  if (!str || str.length < 8) {
    return '';
  }
  return str.slice(0, 4) + '...' + str.slice(-4);
}

export const calculateRewards = (amount: number, lastDepositTimestamp: number, currentTimeStamp: number) => {

  const timeDiff = currentTimeStamp - lastDepositTimestamp;

  const reward = (amount * 2 / 100) * timeDiff / (60 * 60 * 24);

  return reward;
}

export const calculateBiggerHolderRewards = (tvl: number, timesOfBiggerHolder: number, biggerHolderTimestamp: number, currentTimeStamp: number) => {

  const timeDiff = currentTimeStamp - biggerHolderTimestamp;

  const reward = (tvl * 5 / 100_000) * timeDiff / (60 * 60 * 24);

  return reward;
}