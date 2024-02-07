import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Box minHeight='85vh' backgroundColor='#9413dc' padding='200px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Button
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </Layout>
  );
}

export default App;
