import { FC } from "react";
import { useSelector } from "react-redux";

import { Box } from "blocks";
import { useAccount } from "hooks";

import { useGetChannelDelegates, useGetChannelDetails } from "queries";

import { ChannelDashboardNotificationSettings } from "./ChannelDashboardNotificationSettings";
import { ChannelDashboardDelegates } from "./ChannelDashboardDelegates";

import { DashboardActiveState } from "../ChannelDashboard.types";
import { UserStoreType } from "types";

type ChannelDashboardBodyProps = {
  setChannelDashboardError: (error: string) => void;
  setActiveState: (activeState: DashboardActiveState) => void;

}

const ChannelDashboardBody: FC<ChannelDashboardBodyProps> = ({
  setChannelDashboardError,
  setActiveState
}) => {
  const { account } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const { data: channelDetails, isLoading: loadingChannelSettings } = useGetChannelDetails(account);

  const { data: channel_delegates, refetch: refetchChannelDelegate, isLoading: loadingDelegates } = useGetChannelDelegates(userPushSDKInstance);

  return (
    <Box
      display='flex'
      gap='spacing-md'
      width='100%'
      flexDirection={{ ml: 'column', initial: 'row' }}
    >
      <ChannelDashboardNotificationSettings
        channel_settings={channelDetails?.channel_settings}
        loadingChannelSettings={loadingChannelSettings}
      />

      <ChannelDashboardDelegates
        channel_delegates={channel_delegates}
        loadingDelegates={loadingDelegates}
        setChannelDashboardError={setChannelDashboardError}
        refetchChannelDelegate={refetchChannelDelegate}
        setActiveState={setActiveState}
      />
    </Box>
  );
};

export { ChannelDashboardBody };