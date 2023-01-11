import React, { ReactNode } from 'react';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,  	
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { TfiAgenda, TfiAnnouncement } from "react-icons/tfi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { RiBubbleChartFill } from "react-icons/ri"
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsBoundingBox } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { MdSchedule } from "react-icons/md";
import { CgReorder } from "react-icons/cg";
import { VscChecklist, VscArchive } from "react-icons/vsc";

import { Image } from '@chakra-ui/react';
interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Agendas', icon: TfiAgenda },
  { name: 'Assembleias', icon: SiGooglemeet },
  { name: 'Boletos', icon: FaRegMoneyBillAlt },
  { name: 'Comunicados', icon: TfiAnnouncement },
  { name: 'Contatos', icon: TiContacts },
  { name: 'Demonstrações Financeiras', icon: RiBubbleChartFill },
  { name: 'Moradores', icon: HiBuildingOffice2 },
  { name: 'Estoque', icon: VscArchive },
  { name: 'Funcionários', icon: GrUserWorker },
  { name: 'Reservas', icon: MdSchedule },
  { name: 'Ordens de Serviço', icon: CgReorder },
  { name: 'Solicitações', icon: VscChecklist },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="20px" fontFamily="heading" fontWeight="bold">
          Yukon Dashboard <br/>
        </Text> */}
        <Box boxSize=''>
          <Image src='https://cdn.discordapp.com/attachments/715350234762313843/1062342690295009340/yukonlogoy.png' alt='Dan Abramov' />
        </Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem fontSize="11px" key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'black',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
       
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};