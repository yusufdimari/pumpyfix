import React from "react";
import { BookingDetails, ChooseAuth, Login, Signup } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "./routes";
import BottomTabsNavigation from "./bottomTabs";
import { useAppContext } from "../contexts/appProvider";

const Stack = createNativeStackNavigator();

function AppStack() {
  const { user } = useAppContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen
            name={ROUTES.BOTTOM_TABS}
            component={BottomTabsNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.BOOKING_DETAILS}
            options={{
              headerTitle: "Details",
            }}
            component={BookingDetails}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={ROUTES.CHOOSE_AUTH} component={ChooseAuth} />
          <Stack.Screen name={ROUTES.LOGIN} component={Login} />
          <Stack.Screen name={ROUTES.SIGNUP} component={Signup} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
