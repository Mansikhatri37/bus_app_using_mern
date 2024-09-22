import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { PrimaryColor, WhiteColor } from '../utils/colors';
import { bottomTabScreens as screens } from './screens';
import { styles } from '../utils/styles';

const BottomTabs = createMaterialBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <BottomTabs.Navigator
            initialRouteName="Home"
            activeColor={PrimaryColor}
            activeIndicatorStyle={{ backgroundColor: WhiteColor }}
            labeled={true}
            barStyle={styles.bottomTabBar}
            tabBarOptions={{ labelStyle: { fontWeight: "bold" } }}
        >
            {
                screens.map((screen, index) => (
                    <BottomTabs.Screen
                        name={screen.name}
                        component={screen.component}
                        key={index}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon name={screen.icon} color={color} size={24} />
                            ),
                            tabBarLabel: screen.name,
                        }}
                    />
                ))
            }
        </BottomTabs.Navigator>
    );
}