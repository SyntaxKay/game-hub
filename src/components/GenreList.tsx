import { Avatar, Box, Button, Card, Flex, Spinner, Text } from "@radix-ui/themes";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useMemo } from "react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const sortedGenres = useMemo(() => {
    if (!selectedGenre) return data;
    
    return [
      ...data.filter(genre => genre.id === selectedGenre.id),
      ...data.filter(genre => genre.id !== selectedGenre.id)
    ];
  }, [data, selectedGenre]);

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      {sortedGenres.map((genre) => (
        <Card
          key={genre.id}
          mb={"2"}
          variant="ghost"
        >
          <Flex gap="3" align="center">
            <Avatar
              size="5"
              src={getCroppedImageUrl(genre.image_background)}
              radius="small"
              fallback="T"
            />
            <Box>
             <Button radius="small" variant={genre.id === selectedGenre?.id ? 'outline' : 'soft'} size="4" color="iris" onClick={() => onSelectedGenre(genre)}>
                {genre.name}
              </Button>
            </Box>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default GenreList;
