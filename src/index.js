import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FetchNews from "./screens/FetchNews";
import RickMorty from "./screens/RickMorty";
import RMGameScreen from "./screens/RMGameScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabes = createMaterialBottomTabNavigator();
function TabsNavigation() {
  return (
    <Tabes.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tabes.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarLabel: "Cadastro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="FetchNews"
        component={FetchNews}
        options={{
          tabBarLabel: "FetchNews",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cat" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="RickMorty"
        component={RickMorty}
        options={{
          tabBarLabel: "RickMorty",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flower" color={color} size={26} />
          ),
        }}
      />
      <Tabes.Screen
        name="RMRickMorty"
        component={RMGameScreen}
        options={{
          tabBarLabel: "RMGameScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="robot" color={color} size={26} />
          ),
        }}
      />
    </Tabes.Navigator>
  );
}

