// Navegação interna da aplicação
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { CustomDrawer } from '../components/CustomDrawer';

export function NavegationDrown() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{ 
        headerShown: false, 
        drawerStyle: {
        backgroundColor: '#292524',
        width: 220,
      }, }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
