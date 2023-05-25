// Componente criado para fazer a personalização do Drower da tela principal do app
// Os icones foram criados com as bibliotecas do proprio expo @expo/vector-icons

import React, { useContext } from 'react';
import { VStack, Text, HStack, IconButton } from 'native-base';
import { Pressable, Linking  } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import useAuthContext from '../contexts/AuthContext';

export function CustomDrawer({ navigation }) {
    const {SignOutContext} = useAuthContext()

    function handleSingOut(){
        SignOutContext()
    }
    return (
      <VStack>
        <Text pt={20}></Text>
        <HStack>
            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={{
                    backgroundColor: '#525252', // Fundo preto
                    height: 55, // Altura do componente
                    width: "100%",
                    justifyContent: 'flex-start', // Centralizar conteúdo verticalmente
                    alignItems: 'center', // Centralizar conteúdo horizontalmente
                    flexDirection: 'row'
                }}
                >
                    <MaterialIcons name="house" size={35} color="white"
                     style={{
                        marginStart: 15,
                        marginEnd: 15,
                    }}
                    />
                <Text color="white" fontSize={19} fontWeight="bold">Inicio</Text>
            </Pressable>
        </HStack>

        <HStack>
        <Pressable
                onPress={() => Linking.openURL('https://t.me/+4s0EGAG2QxE2MjFh')}
                style={{
                    backgroundColor: '#292524', // Fundo preto
                    height: 55, // Altura do componente
                    width: "100%",
                    justifyContent: 'flex-start', // Centralizar conteúdo verticalmente
                    alignItems: 'center', // Centralizar conteúdo horizontalmente
                    flexDirection: 'row'
                }}
                >
                    <FontAwesome name="telegram" size={28} color="white"
                     style={{
                        marginStart: 15,
                        marginEnd: 15,
                    }}
                    />
                <Text color="white" fontSize={19} fontWeight="bold">Comunidade</Text>
            </Pressable>
        </HStack>

        <HStack >
            <Pressable 
                onPress={handleSingOut}
                style={{
                    marginTop: "250%",
                    backgroundColor: '#292524', // Fundo preto
                    height: 55, // Altura do componente
                    width: "100%",
                    justifyContent: 'flex-start', // Centralizar conteúdo verticalmente
                    alignItems: 'center', // Centralizar conteúdo horizontalmente
                    flexDirection: 'row'
                }}
                >
                    <Ionicons name="md-arrow-back-circle" size={34} color="white" 
                     style={{
                        marginStart: 15,
                        marginEnd: 15,
                    }}
                    />
                <Text color="white" fontSize={19} fontWeight="bold">Sair</Text>
            </Pressable>
        </HStack>

        

       
      </VStack>
    );
  }