import { Wrap, WrapItem, Tooltip, IconButton, Icon, Link } from '@chakra-ui/react';
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
      link: 'https://twitter.com/purp1eeeee',
    },
    {
      label: 'Instagram',
      icon: InstagramIcon,
      link: 'https://www.instagram.com/_murasakigasuki/',
    },
    {
      label: 'GitHub',
      icon: GitHubIcon,
      link: 'https://github.com/Murasaki-1102',
    },
    {
      label: 'Zenn',
      icon: ZennIcon,
      color: '#3EA8FF',
      link: 'https://zenn.dev/murasaki',
    },
    {
      label: 'Qiita',
      icon: QiitaIcon,
      link: 'https://qiita.com/purple',
    },
    {
      label: 'Wantedly',
      icon: WantedlyIcon,
      link: 'https://www.wantedly.com/id/haruki_murasaki1102',
    },
  ];
  return (
    <Wrap justify="center" spacing="1">
      {icons.map((icon, index) => (
        <WrapItem key={index}>
          <Tooltip label={icon.label}>
            <Link href={icon.link} isExternal>
              <IconButton
                aria-label={icon.label}
                isRound
                size="xs"
                icon={<Icon as={icon.icon} w="4" h="4" color={icon.color} />}
              />
            </Link>
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  );
};
