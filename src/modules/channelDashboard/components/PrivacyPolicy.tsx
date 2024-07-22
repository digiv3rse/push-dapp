import { Box, CircleFilled, Link, Text } from 'blocks';

const PrivacyPolicy = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignSelf="stretch"
      padding="spacing-none spacing-sm"
      color="text-tertiary"
    >
      <Box display="flex" flexDirection={{ initial: 'row', ml: 'column' }} gap={{ initial: 's4', ml: 's0' }}>
        <Link to="https://push.org/privacy/" target="_blank">
          <Text variant="bes-semibold">Privacy Policy</Text>
        </Link>
        <Link to="https://push.org/tos/" target="_blank">
          <Text variant="bes-semibold">Terms and Conditions</Text>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" gap="s2">
        <CircleFilled color='icon-success-bold' size={9} />
        <Text variant="bes-semibold">All systems operational</Text>
      </Box>
    </Box>
  );
};

export { PrivacyPolicy };
