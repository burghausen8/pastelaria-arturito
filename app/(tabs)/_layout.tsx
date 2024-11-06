import appColors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import fonts from '@/constants/Fonts';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: { fontFamily: fonts.bold, fontSize: 10 },
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'}
              color={focused? appColors.primary: appColors.text}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarLabelStyle: { fontFamily: fonts.bold, fontSize: 10 },
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'}
              color={focused? appColors.primary: appColors.text}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarLabelStyle: { fontFamily: fonts.bold, fontSize: 10 },
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'}
              color={focused? appColors.primary: appColors.text}
              size={24}
            />
          )
        }}
      />
    </Tabs>
  );
}
