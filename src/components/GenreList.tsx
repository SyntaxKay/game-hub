import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
   <>
      {data.map((genre) => (
        <Card key={genre.id} mb={"2"} variant="ghost">
          <Flex gap="3" align="center">
            <Avatar
              size="5"
              src={getCroppedImageUrl(genre.image_background)}
              radius="full"
              fallback="T"
            />
            <Box>
              <Text as="div" size="5">
                {genre.name}
              </Text>
            </Box>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default GenreList;
