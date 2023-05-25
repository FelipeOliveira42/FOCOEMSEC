// Componente criado para gerenciar os contextos da aplicação
import React, { createContext, useState, useEffect, useContext } from "react";
import * as Auth from "../services/Auth";
import api from "../services/api";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({ signed: null, user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  

  // Estou usando essa componente para salvar os dados do usuario no storage para se o usuario já tinver feito login, continuar longado mesmo apos sair do aplicativo
  
  useEffect(() => {
    async function loadStorageData(){
      const storageUser = await AsyncStorage.getItem('@FocoAuth:user')
      const storageToken = await AsyncStorage.getItem('@FocoAuth:token')

      if (storageUser && storageToken) {
        var token = "Token " + storageToken.substring(1, storageToken.length - 1);
        
        api.defaults.headers.common.Authorization = token
        
        setUser(JSON.parse(storageUser))
        
      }
      setLoading(false)
    }

    loadStorageData()
  }, [])

  const SignInContext = async (email, password) => {
    api.defaults.headers.common.Authorization = 'Token 4c136d863b4304ed24f4ff4092ebd8dc1f2ab8b7';
    const payload = {
      email: email,
      password: password
    };

    try {
      const response = await api.post('/authorization/', payload);
      console.log(response.data);
      
      
      setUser(response.data);
      await AsyncStorage.setItem('@FocoAuth:user', JSON.stringify(response.data))
      await AsyncStorage.setItem('@FocoAuth:token', JSON.stringify(response.data.token))
    } 
    catch (error) 
    {
      if (error.response && error.response.status === 400) 
      {
        console.log("Credenciais erradas");
        return Alert.alert('Entrar', 'Email ou senha invalidos')
      } 
      else 
      {
        console.log(error.response ? error.response.data : error.message);
        return Alert.alert('Entrar', 'Não foi possivel conectar, verifique sua conexão')
      }
    }
  };

  function SignOutContext(){
    AsyncStorage.clear().then(() => {
      setUser(null);
    })

  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, SignInContext, SignOutContext}}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;
export default function useAuthContext(){
  const context = useContext(AuthContext);

  return context;
}
