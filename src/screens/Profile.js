import React, {useState, useEffect} from 'react';
import { VStack, IconButton, Text, HStack, Heading } from 'native-base';
import { UserCircle } from 'phosphor-react-native';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '../components/Input';
import useAuthContext from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile() {
    const [userData, setUserData] = useState('');
    
    

    useEffect(() => {
        retrieveData();
      }, []);


      const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('@FocoAuth:user');
          if (value !== null) {
            
            setUserData(JSON.parse(value));
          }
        } catch (error) {
          // Erro ao recuperar os dados
          console.log('Erro ao recuperar os dados:', error);
        }
      };
     


    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack()
    }

    

  return (
    <VStack flex={1} alignItems="center" bg={"black"} px={8} pt={20}>
        <IconButton
        mt={30}
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

        <IconButton mt={10}
          icon={<UserCircle size={100} width={2} color="white" />}
          
        />

        <Heading color="white" fontSize="2xl" mt={0} mb={5}>
        Informações pessoais
        </Heading>


        <HStack alignItems="flex-start" ml={'-82%'}>
            <Text color="white" fontSize={16} fontWeight='bold'>Usuario:</Text>
        </HStack>

        <Input 
            mb={3}
            defaultValue={userData.email}
            isReadOnly
        />

        <HStack alignItems="flex-start" ml={'-84%'}>
            <Text color="white" fontSize={16} fontWeight='bold'>E-mail:</Text>
        </HStack>

        <Input 
            mb={3}
            defaultValue={userData.email}
            isReadOnly
        />

        <HStack alignItems="flex-start" ml={'-87%'}>
            <Text color="white" fontSize={16} fontWeight='bold'>CPF:</Text>
        </HStack>

        <Input 
            mb={3}
            defaultValue={userData.cpf}
            isReadOnly
        />

        <HStack alignItems="flex-start" ml={'-54%'}>
            <Text color="white" fontSize={16} fontWeight='bold'>Data de nascimento:</Text>
        </HStack>

        <Input 
            mb={3}
            defaultValue={userData.data_de_nascimento}
            isReadOnly
        />

        <HStack alignItems="flex-start" ml={'-81%'}>
            <Text color="white" fontSize={16} fontWeight='bold'>Telefone:</Text>
        </HStack>

        <Input 
            mb={3}
            defaultValue={userData.fone}
            isReadOnly
        />

    </VStack>
  );
}