import { Wrap, WrapItem, Tooltip, IconButton, Icon, Link } from '@chakra-ui/react';
import { GitHubIcon, InstagramIcon, QiitaIcon, TwitterIcon, ZennIcon } from './Icons';
import { links } from '../constants/socials';

export const SocialIcons = () => {
  const icons = [
    {
      label: 'Twitter',
      icon: TwitterIcon,
      color: 'twitter.500',
      link: links.twitter,
    },
    {
      label: 'Instagram',
      icon: InstagramIcon,
      link: links.instagram,
    },
    {
      label: 'GitHub',
      icon: GitHubIcon,
      link: links.github,
    },
    {
      label: 'Zenn',
      icon: ZennIcon,
      color: '#3EA8FF',
      link: links.zenn,
    },
    {
      label: 'Qiita',
      icon: QiitaIcon,
      link: links.qiita,
    },
    // {
    //   label: 'Wantedly',
    //   icon: WantedlyIcon,
    //   link: 'https://www.wantedly.com/id/haruki_murasaki1102',
    // },
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
                size="sm"
                icon={<Icon as={icon.icon} w="6" h="6" color={icon.color} />}
              />
            </Link>
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  );
};
