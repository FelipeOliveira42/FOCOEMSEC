// Index principal que vai exporta as rotas para a pagina inicial

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}