import React, { useState } from "react";
import { Box, Button, Flex, Text, Stack, Image, Divider, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaCoins } from "react-icons/fa";

const Index = () => {
  // Placeholder state for cards, bets, etc.
  const [playerHand, setPlayerHand] = useState(["Card1", "Card2"]);
  const [communityCards, setCommunityCards] = useState(["Card3", "Card4", "Card5", "Card6", "Card7"]);
  // For simplicity, chips and bet amounts are hardcoded
  const [playerChips, setPlayerChips] = useState(1000);
  const [currentBet, setCurrentBet] = useState(50);

  // Toast for simple notifications
  const toast = useToast();

  // Function to handle betting
  const handleBet = () => {
    // Implement betting logic here...
    toast({
      title: "Bet Placed",
      description: `You have bet ${currentBet} chips.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Function to handle folding
  const handleFold = () => {
    // Implement fold logic here...
    toast({
      title: "Player Folded",
      description: "You have folded your hand.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex justifyContent="center" mb={4}>
        <Text fontSize="4xl">Texas Hold'em Poker</Text>
      </Flex>
      <Divider mb={4} />
      <Stack spacing={4}>
        <Flex justifyContent="center">
          {communityCards.map((card, index) => (
            <Box key={index} p={2} border="1px" borderColor="gray.200" borderRadius="md">
              <Text>{card}</Text>
            </Box>
          ))}
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <FaUserCircle size="2em" />
            <Text ml={2}>Player 1</Text>
          </Flex>
          <Stack spacing={2} direction="row">
            {playerHand.map((card, index) => (
              <Box key={index} p={2} border="1px" borderColor="gray.200" borderRadius="md">
                <Text>{card}</Text>
              </Box>
            ))}
          </Stack>
          <Flex alignItems="center">
            <FaCoins />
            <Text ml={2}>{playerChips} Chips</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center">
          <Button colorScheme="green" mr={3} onClick={handleBet}>
            Bet {currentBet} Chips
          </Button>
          <Button colorScheme="red" onClick={handleFold}>
            Fold
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Index;
