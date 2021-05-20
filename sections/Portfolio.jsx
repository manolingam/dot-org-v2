import { Flex, Heading, HStack, Text, Button } from '@chakra-ui/react';

export const Portfolio = () => {
  return (
    <Flex
      minHeight='95vh'
      bgImage='url(/assets/raid__valhalla.png)'
      bgSize='cover'
      justify='center'
      align='center'
      direction='column'
      w='calc(100% - 2rem)'
      flex={1}
      m='1rem'
      border='5px solid'
      borderColor='red'
    >
      <Flex
        height={{ base: '95vh' }}
        width='100%'
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ backdropFilter: 'blur(.5rem)' }}
        p='1rem'
      >
        <Heading
          variant='primary'
          fontSize={{ base: '1.5rem', lg: '2rem' }}
          mb='1rem'
        >
          Our Portfolio
        </Heading>
        <Text
          variant='medium'
          fontSize={{ base: '1rem', lg: '1.3rem' }}
          mb='1rem'
        >
          A Decentralized Collective of Mercenaries Ready to Slay Your Web3
          Product Demons.
        </Text>
        <Button variant='primary' fontSize={{ base: '1rem', lg: '1.5rem' }}>
          View Projects
        </Button>
      </Flex>
    </Flex>
  );
};
