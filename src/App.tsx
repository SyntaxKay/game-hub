import { Box, Grid, Text } from "@radix-ui/themes";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        columns={{ initial: "1", sm: "2" }}
        gap="3"
        rows="repeat(2, auto)"
        width="auto"
      >
        <Box>
          <Text>nav</Text>
        </Box>
        <Box display={{ initial: "none", sm: "block" }}>
          <Text>nav</Text>
        </Box>
        <Box display={{ initial: "none", sm: "block" }}>
          <Text>aside</Text>
        </Box>
        <Box>
          <Text>main</Text>
        </Box>
      </Grid>
    </>
  );
}

export default App;
