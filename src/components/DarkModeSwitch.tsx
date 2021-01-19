import { useColorMode, Switch, SwitchProps } from '@chakra-ui/react';

export const DarkModeSwitch = (props: SwitchProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return <Switch colorScheme="purple" isChecked={isDark} onChange={toggleColorMode} {...props} />;
};
