import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from './stack'

export default function Router() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}
