import { UserSetting } from '@pushprotocol/restapi';

export type UserSubscriptionData = {
  channel: string;
  user_settings: string;
};

export type UserSubscriptionsResponse = Array<UserSubscriptionData>;
