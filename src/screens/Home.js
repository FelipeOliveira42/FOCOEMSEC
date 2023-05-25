// Tela principal do aplicativo, onde vai ter as aulas
// Foi utilizado o native base para criar os componentes
import { VStack } from 'native-base';
import { Main } from '../components/Main';
import { ScrollView } from 'react-native-virtualized-view';
// Foi utilizado o ScrollView da biblioteca react-native-virtualized-view para evitar comflito com a flatList

export function Home() {
  return (
 
    <VStack flex={1} bg="gray.800" >
        <ScrollView showsVerticalScrollIndicator={false}>
        <Main/>
        </ScrollView>
        
    </VStack>
   
  );
}