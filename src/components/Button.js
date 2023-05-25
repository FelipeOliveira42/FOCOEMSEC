
// Componente para criação de botões das paginas de login e cadastro. O botões foram construidos com a biblioteca Native Base.
import { Button as NativeBaseButton, Heading } from 'native-base';


export function Button(props) {
    const { title, ...rest } = props;
    
    return (
      <NativeBaseButton 
      variant="outline"
      borderWidth={2}
      {...rest}>
          <Heading color="white" fontSize={20}>{title}</Heading>
      </NativeBaseButton>
    );
  }