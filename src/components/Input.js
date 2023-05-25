// Componente criado para ser os inputs de texto da aplicação
import React from 'react';
import { Input as NativeBaseInput } from 'native-base';

export function Input({...rest}) {
  return (
    <NativeBaseInput
    variant="underlined" 
    fontSize="md"
    fontFamily="body"
    color="white"
    // placeholderTextColor="gray"
    _focus={{
         borderColor: 'red.400',
        borderBottomWidth: '2'
    }}
    
    {...rest}
    />
    
  );
}