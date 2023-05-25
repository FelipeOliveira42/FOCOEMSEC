// Tela de login da aplicação
import { useState } from 'react';
import { VStack, Heading, Icon } from "native-base";
import { ImageLogin } from '../components/ImageLogin';
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Envelope, Key } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import useAuthContext from '../contexts/AuthContext';

export function SignIn() {
  const { signed, user, SignInContext } = useAuthContext();
  console.log(signed);
  console.log(user);

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);
    // setIsLoading vai mudar o estado o botão para carregando, qual terminar de carregar ele vai receber um false e vai mudar de tela quando receber as informações no storage

    try {
      await SignInContext(email, password);
      // Vai chamar a função para fazer login
    } 
    catch (error) {
      console.log(error.response ? error.response.data : error.message);
    } 
    finally {
      setIsLoading(false);
    }
  }

  function handlePress() {
    // Função criada para levar para a tela de cadastro
    navigation.navigate('SignUp');
  }



  return (
    <VStack flex={1} alignItems="center" bg={"black"} px={8} pt={20}>
      <ImageLogin />
      <Heading color="white" fontSize="2xl" mt={0} mb={5}>
        Login
      </Heading>

      <Input
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Envelope color="gray" />} ml={2} mr={2} />}
        onChangeText={setEmail}
      />

      <Input
        mt={5}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color="gray" />} ml={2} mr={2} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button mt={16} w="full" title="Entrar" onPress={handleLogin} isLoading={isLoading} />
      <Button mt={4} w="full" title="Cadastrar" onPress={handlePress} />
    </VStack>
  );
}