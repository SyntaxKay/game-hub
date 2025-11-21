import { Card, Inset, Heading, Flex, Skeleton, Text } from "@radix-ui/themes";

const GameCardSkeleton = () => {
  return (
    <Card style={{width: "100%"}}> 
      <Inset clip="padding-box" side="top" pb="current">
        <Skeleton>
          <div
            style={{
              display: "block",
              width: "100%",
              height: 200,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Skeleton>
      </Inset>

      <Heading as="h3" mt="2">
        <Skeleton>Loading</Skeleton>
      </Heading>

      {/* Platforms + Metacritic skeletons */}
      <Flex justify="between" align="center" mt="3">
        <Text mt="2">
          <Skeleton>Loading</Skeleton>
        </Text>

        {/* Metacritic badge skeleton */}
        <Skeleton>
          <div
            style={{
              width: 32,
              height: 24,
              borderRadius: 6,
            }}
          />
        </Skeleton>
      </Flex>
    </Card>
  );
};

export default GameCardSkeleton;
