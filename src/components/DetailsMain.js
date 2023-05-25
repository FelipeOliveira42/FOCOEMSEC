// Componente criado para criar os cards da tela principal.
// Card horizontal de cada modulo e vertical de cada modulo

import { VStack, Text, HStack, Image, ScrollView, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

export function DetailsMain({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading)

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };
  

  const navigation = useNavigation();

  function handleOpenDetails(idAula){
    navigation.navigate('DetailsAula', {idAula});
  }
  return (
    <VStack>
      <Text pl={3} pt={3} pb={3} color="white" fontSize={17}>
        {item.nome}
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack pl={0} pr={5}>
          {item.aulas.map((aula) => (
            <Pressable key={aula.id} onPress={() => handleOpenDetails(aula.video)}>
              <Image
                resizeMode="contain"
                source={{ uri: aula.image }}
                alt="imagem da aula"
                width={150}
                height={250}
                marginLeft={5}
                borderRadius={20}
                onLoadStart={handleLoadStart}
                onLoadEnd={handleLoadEnd}
              />
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
