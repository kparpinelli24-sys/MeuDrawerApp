import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Configuraçoes from '../screens/Configuracoes';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){ 
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Perfil" component={Perfil}/>
            <Drawer.Screen name="Configurações" component={Configuraçoes}/>
        </Drawer.Navigator>
    );
}
