import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coin, CoinSchema } from '../../schema/Coin/coin.schema';
import {
  CoinPrice,
  CoinPriceSchema,
} from '../../schema/CoinPrice/coin-price.schema';
import {
  Currency,
  CurrencySchema,
} from '../../schema/Currency/currency.schema';
import { FeeInfo, FeeInfoSchema } from '../../schema/FeeInfo/fee-info.schema';
import { Network, NetworkSchema } from '../../schema/Network/network.schema';
import {
  StakeInvestmentInfo,
  StakeInvestmentInfoSchema,
} from '../../schema/StakeInvestmentInfo/stake-investment-info.schema';
import {
  StakingInfo,
  StakingInfoSchema,
} from '../../schema/StakingInfo/staking-info.schema';
import {
  StakingPlan,
  StakingPlanSchema,
} from '../../schema/StakingPlan/staking-plan.schema';
import { User, UserSchema } from '../../schema/User/user.schema';
import {
  UserStakeInfo,
  UserStakeInfoSchema,
} from '../../schema/UserStakeInfo/user-stake-info.schema';
import { Wallet, WalletSchema } from '../../schema/Wallet/wallet.schema';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coin.name, schema: CoinSchema },
      { name: Network.name, schema: NetworkSchema },
      { name: Currency.name, schema: CurrencySchema },
      { name: CoinPrice.name, schema: CoinPriceSchema },
      { name: FeeInfo.name, schema: FeeInfoSchema },
      { name: StakingPlan.name, schema: StakingPlanSchema },
      { name: StakingInfo.name, schema: StakingInfoSchema },
      { name: UserStakeInfo.name, schema: UserStakeInfoSchema },
      { name: StakeInvestmentInfo.name, schema: StakeInvestmentInfoSchema },
      { name: User.name, schema: UserSchema },
      { name: Wallet.name, schema: WalletSchema },
    ]),
  ],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
