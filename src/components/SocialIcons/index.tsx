import { Wrap, WrapItem, Tooltip, IconButton, Icon } from '@chakra-ui/react';
import {
  GitHubIcon,
  InstagramIcon,
  QiitaIcon,
  TwitterIcon,
  WantedlyIcon,
  ZennIcon,
} from '../Icons';

export const SocialIcons = () => {
  const icons = [
    {
      label: 'Twitter',
      icon: TwitterIcon,
      color: 'twitter.500',
    },
    {
      label: 'Instagram',
      icon: InstagramIcon,
    },
    {
      label: 'Github',
      icon: GitHubIcon,
    },
    {
      label: 'Zenn',
      icon: ZennIcon,
      color: '#3EA8FF',
    },
    {
      label: 'Qiita',
      icon: QiitaIcon,
    },
    {
      label: 'Wantedly',
      icon: WantedlyIcon,
    },
  ];
  return (
    <Wrap justify="center" spacing="1">
      {icons.map((icon, index) => (
        <WrapItem key={index}>
          <Tooltip label={icon.label}>
            <IconButton
              aria-label={icon.label}
              isRound
              size="xs"
              icon={<Icon as={icon.icon} w="4" h="4" color={icon.color} />}
            />
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  );
};
