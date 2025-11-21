import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Spinner,
} from "@radix-ui/themes";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useMemo } from "react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const sortedGenres = useMemo(() => {
    if (!selectedGenre) return data;

    return [
      ...data.filter((genre) => genre.id === selectedGenre.id),
      ...data.filter((genre) => genre.id !== selectedGenre.id),
    ];
  }, [data, selectedGenre]);

  if (error) return null;

  return (
    <>
      <Heading as="h1" size="6" my="4">Genre</Heading>
      {isLoading && <Spinner />}
      {sortedGenres.map((genre) => (
        <Card key={genre.id} mb={"2"} variant="ghost">
          <Flex gap="3" align="center">
            <Avatar
              size="5"
              src={getCroppedImageUrl(genre.image_background)}
              radius="small"
              fallback="T"
            />
            <Box>
              <Link
                href="javascript:void(0)"
                onClick={() => onSelectedGenre(genre)}
                color="iris"
                underline={genre.id === selectedGenre?.id ? "always" : "hover"}
                size={"5"}
              >
                {genre.name}
              </Link>
            </Box>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default GenreList;
