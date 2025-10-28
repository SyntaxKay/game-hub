import { Box, Grid, Text } from "@radix-ui/themes";
import "./App.css";
import NavBar from "./components/NavBar";

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
          <NavBar />
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
