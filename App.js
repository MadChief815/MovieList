import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Redux Store
import { store, persistor } from './Src/ReduxStore';

// Screens
import ListingScreen from './Screens/ListingScreen';
import ShortListedScreen from './Screens/ShortListedScreen';

// SVGs
import ListIcon from "./assets/SVG/TabBar/list.svg";
import MovieIcon from "./assets/SVG/TabBar/movie.svg";
import FocusListIcon from "./assets/SVG/TabBar/focuslist.svg";
import FocusMovieIcon from "./assets/SVG/TabBar/focusmovie.svg";

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

//Tab Bar Icons
const TabBarIcon = ({ focused, Icon, FocusedIcon }) => (
  <View style={{ paddingTop: hp(2) }}>
    {focused ? <FocusedIcon width={hp(3.5)} height={hp(3.5)} /> : <Icon width={hp(3.1)} height={hp(3.1)} />}
  </View>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Movies"
                screenOptions={{
                  headerShown: false,
                  tabBarStyle: {
                    backgroundColor: '#0E0E0E',
                    borderTopWidth: 0,
                    height: hp(6.4),
                  },
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: '#FFD700',
                  tabBarInactiveTintColor: '#888',
                  tabBarIconStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                }}
              >
                <Tab.Screen
                  name="Movies"
                  component={ListingScreen}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        Icon={MovieIcon}
                        FocusedIcon={FocusMovieIcon}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Shortlisted"
                  component={ShortListedScreen}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        Icon={ListIcon}
                        FocusedIcon={FocusListIcon}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
