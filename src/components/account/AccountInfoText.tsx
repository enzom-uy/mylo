import { UserWithNades } from '@/interfaces/user';
import { blurEmail } from '@/utils/blurEmail';
import { Box, Flex, SkeletonText, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ToggleEmail: React.FC<{ showEmail: boolean; size: string }> = ({
  showEmail,
  size,
}) => {
  return (
    <>
      {showEmail ? (
        <AiOutlineEye fontSize={size} />
      ) : (
        <AiOutlineEyeInvisible fontSize={size} />
      )}
    </>
  );
};

const AccountInfoText: React.FC<{
  user: UserWithNades | undefined;
  loading: boolean;
}> = ({ user, loading }) => {
  const [showEmail, setShowEmail] = useState(false);
  const { censoredEmail } = blurEmail(user!.email);
  return (
    <>
      <SkeletonText
        noOfLines={1}
        spacing="4"
        isLoaded={!loading}
        fadeDuration={1}
      >
        <Text fontWeight="semibold" fontSize="1.3rem">
          {user?.name}
        </Text>
      </SkeletonText>
      <SkeletonText
        noOfLines={1}
        spacing="4"
        isLoaded={!loading}
        fadeDuration={1}
      >
        <Text fontSize="1.15rem" fontWeight="medium">
          {user?.role === 'ADMIN' ? 'Admin ☝️🤓' : user?.role}
        </Text>
      </SkeletonText>
      <SkeletonText
        noOfLines={1}
        spacing="4"
        isLoaded={!loading}
        fadeDuration={1}
      >
        <Flex alignItems="center" gap={2}>
          <Text fontWeight="medium" fontSize="1rem">
            {showEmail ? user?.email : censoredEmail}{' '}
          </Text>
          <Box
            onClick={() => setShowEmail((prevShowEmail) => !prevShowEmail)}
            cursor="pointer"
          >
            <ToggleEmail showEmail={showEmail} size="1.3rem" />
          </Box>
        </Flex>
      </SkeletonText>
    </>
  );
};

export default AccountInfoText;
