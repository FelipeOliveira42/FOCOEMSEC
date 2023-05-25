// Componente criado para gerenciar as rotas da aplicação
// No aplicativo foi utilizado dois tipos de rotas:
//  Steak - para cuidar das rotas externas quando o usuario não estinver longado (o contexto vai cuidar dessa parte)
// Drown - cuida das rotas internas dentro do aplicativo

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import useAuthContext from '../contexts/AuthContext';


import {NavegationDrown} from './NavegationDrown'
import { SignUp } from '../screens/SignUp';
import {SignIn} from '../screens/SignIn'
import { DetailsAula } from '../screens/DetailsAula';
import { Profile } from '../screens/Profile';

import { Loading } from '../components/Loading';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    // A variavel "signed" está sempre sendo verificada para saber se está TRUE ou FALSE
    // Se ela estinver como TRUE, ela vai ter acesso as rotas internas, caso contrario só vai ter acesso as rotas de LOGIN e CADASTRO.
    // Essa variavel é gerenciada pelo "AuthContext" que vai fazer a autenticação do usuario 
    
    const { signed, loading } = useAuthContext();

      if (loading){
      return(
        <Loading/> 
      )

    }

    return (
      <Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <>
          
            <Screen name="NavegationDrown" component={NavegationDrown} />
            <Screen name="DetailsAula" component={DetailsAula} />
            <Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Navigator>
    );
  }