// Tela de cadastro do usuario
import { VStack, Heading, Icon, IconButton } from "native-base";
import {ImageLogin} from '../components/ImageLogin'
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import {  Envelope, Key, IdentificationBadge   } from 'phosphor-react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import React, { useState } from 'react';
import api from "../services/api";

// Foi utilizado dois tipos de Icones, @expo/vector-icons e phosphor-react-native
// Nos inputs foi utilizado os icones do phosphor
// Para criar o icone para voltar de tela foi utilizado o icone do EXPO
 
export function SignUp() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleCadastro(){
        
        if (nome === '' || email === '' || password === '' || confPassword === '') {
            return Alert.alert('Cadastro', 'Todos os campos são obrigatorio')
          }
          
        // expressão regular que verifica se o e-mail contém pelo menos um caractere antes do "@", pelo menos um caractere entre o "@" e o ".", e pelo menos um caractere após o ".".
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) {
            
            return Alert.alert('E-mail invalido', 'E-mail invalido, por favor verifique')
          }

        if (password !== confPassword) {
            return Alert.alert("Cadastro", "As senhas não conferem, por favor verifique")
        }

        setIsLoading(true); // Habilita o estado de carregamento

        const payload = {
            first_name: nome,
            username: email,
            email: email,
            password: password,
            fone: null
          };
          api.defaults.headers.common.Authorization = 'Token 4c136d863b4304ed24f4ff4092ebd8dc1f2ab8b7';
          
          try{
            // console.log("entrou")
            const response = await api.post('/usuarios/', payload);
            // console.log(response.data);
            setIsLoading(false); // Desabilita o estado de carregamento
            Alert.alert("Sucesso","Cadastro feito com sucesso, faça login para continuar")
            handleGoBack()

            
          }
          catch (error) {
            setIsLoading(false); // Desabilita o estado de carregamento em caso de erro
            var dados = error.response.data
            if (dados.email[0] === "usuário com este E-mail já existe."){
              return Alert.alert("Usuario cadastrado", "Esse email já esta cadastrado com um usuario")
            }
            if (error.response.status === "500"){
              return Alert.alert("Conexão instavel", "Por favor verifique sua conexão de internete")
            }
            return Alert.alert("Cadastro", "Não foi possivel realizar o cadastro, tente novamente mais tarde")
          }   
    }

    
    const navigation = useNavigation();

    function handleGoBack(){
        // Função para voltar para a tela anterior
        navigation.goBack();
    }
  return (
    <VStack flex={1} alignItems="center" bg={"black"} px={8} pt={20}>
        <IconButton
        mt={35}
        pt={29}
        icon={<AntDesign name="arrowleft" size={39} color="white" />}
        onPress={handleGoBack}
        style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1,
            backgroundColor: 'transparent'
        }}
        />

        <ImageLogin/>

        {/* Foi utilizado o componente "Heading" para criar os titulos (NativeBase) */}
        <Heading color="white" fontSize="2xl" mt={0} mb={5}>
                Cadastro
        </Heading>

        <Input 
            placeholder="Nome"
            mb={3}
            InputLeftElement={<Icon as={<IdentificationBadge  color="gray"/>} ml={2} mr={2}/>} 
            onChangeText={setNome}
        />

        <Input 
            placeholder="E-mail"
            mb={3}
            InputLeftElement={<Icon as={<Envelope color="gray"/>} ml={2} mr={2}/>} 
            onChangeText={setEmail}
        />

        <Input 
            placeholder="Senha"
            mb={3}
            InputLeftElement={<Icon as={<Key color="gray"/>} ml={2} mr={2}/>} 
            secureTextEntry
            onChangeText={setPassword}
        />

        <Input 
            placeholder="Confirma senha"
            mb={3}
            InputLeftElement={<Icon as={<Key color="gray"/>} ml={2} mr={2}/>} 
            secureTextEntry
            onChangeText={setConfPassword}
        />
        
        <Button mt={4} w="full" title="Cadastrar" onPress={handleCadastro} isLoading={isLoading} />


    </VStack>
  );
}