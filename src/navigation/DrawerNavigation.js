import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Configuraçoes from '../screens/Configuracoes';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){ 
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Configuraçoes" component={Configuraçoes}/>
        </Drawer.Navigator>
    );
}
