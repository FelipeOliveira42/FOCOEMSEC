// Conteudo da tela principal

import React, { useState, useEffect } from 'react';
import { HStack, VStack, IconButton, Image, FlatList } from 'native-base';
import { ImageBackground, View } from 'react-native';
import { List, UserCircle } from 'phosphor-react-native';
import { DetailsMain } from '../components/DetailsMain';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import { Loading } from './Loading';
import useAuthContext from '../contexts/AuthContext';

export function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const { user } = useAuthContext();
  var tokenUser = ("Token "+ user.token)
  console.log(tokenUser)
 
  

  useEffect(() => {
    setIsLoading(true);
    // Se for a primeira autenticação, para garantir que sempre tenha o token do usuario, estou setando neste momento.
    // Se já estinver longado, vai ser setado na hora que entrar na aplicação pelo contexto
    api.defaults.headers.common.Authorization = tokenUser;

    api.get('/modulos')
      .then(response => {
        setTimeout(() => {
          setOrders(response.data.results);
          setIsLoading(false);
        }, 2000);
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  }, []);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.toggleDrawer();
  };

  // function handleOpenDetails() {
  //   navigation.navigate('DetailsAula');
  // }

  function handleOpenProfile() {
    navigation.navigate('Profile');
  }

  return (
    <VStack>
      <HStack w="full" justifyContent="space-between" alignItems="center">
        <IconButton
          mt={29}
          pt={19}
          icon={<List size={40} width={2} color="white" />}
          onPress={handlePress}
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1,
            backgroundColor: 'transparent'
          }}
        />

        <Image
          resizeMode="contain"
          source={require('../../assets/Iconfoco.png')}
          alt="Descrição da imagem"
          style={{
            position: 'absolute',
            top: 26,
            left: 125,
            zIndex: 1,
            backgroundColor: 'transparent',
            maxWidth: '100%',
            maxHeight: '100%',
            width: '40%',
            height: '40%',
          }}
        />

        <IconButton
          mt={29}
          pt={19}
          icon={<UserCircle size={40} width={2} color="white" />}
          onPress={handleOpenProfile}
          style={{
            position: 'absolute',
            top: 36,
            right: 10,
            transform: [{ translateY: -20 }],
            zIndex: 1,
            backgroundColor: 'transparent'
          }}
        />

        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/backgroudHome.jpg')}
          style={{
            width: 500,
            height: 300,
            position: 'relative',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            
          </View>
        </ImageBackground>
      </HStack>
      <VStack pb={5}>
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Loading/>
          </View>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => <DetailsMain item={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </VStack>
    </VStack>
  );
}
