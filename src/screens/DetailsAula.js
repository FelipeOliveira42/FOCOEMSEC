// Player de videos para visualizar as aulas
import React, { useState, useRef, useEffect } from 'react';
import {  StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
// Para o player de video foi utilziado a biblioteca do EXPO a expo av

export function DetailsAula() {
  useEffect(() => {
    // Estou utilizando a vizualização do tipo LANDSCAPE para iniciar em modo paisagem 
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  // Estou recebendo os parametros da outra tela
  const route = useRoute();
  const { idAula } = route.params;
  const videoUrl = idAula;


  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <VStack style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
