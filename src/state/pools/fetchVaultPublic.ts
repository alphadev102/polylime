import BigNumber from 'bignumber.js'
import { convertSharesToCake } from 'views/Pools/helpers'
// import { multicallv2 } from 'utils/multicall'
import multicall from 'utils/multicall'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import { getCakeVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestLimeRewards',
      'calculateTotalPendingLimeRewards',
    ].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedCakeBountyReward], [totalpendingLimeHarvest]] = await multicall(
      cakeVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalCakeInVaultEstimate = convertSharesToCake(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: totalCakeInVaultEstimate.cakeAsBigNumber.toJSON(),
      estimatedCakeBountyReward: new BigNumber(estimatedCakeBountyReward.toString()).toJSON(),
      totalpendingLimeHarvest: new BigNumber(totalpendingLimeHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
      estimatedCakeBountyReward: null,
      totalpendingLimeHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicall(cakeVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
