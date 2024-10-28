import {
  CommonActions,
  DrawerActions,
  StackActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {STACKS} from '../utilities/stacks';

let _navigator: NavigationContainerRef<any> | null = null;

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const setNavigator = (navigatorRef: NavigationContainerRef<any>) => {
  _navigator = navigatorRef;
};

// Navigation functions
export const navigate = (
  routeName: string,
  params?: Record<string, unknown>,
) => {
  navigationRef.current?.navigate(routeName, params);
};

export const push = (routeName: string, params?: Record<string, unknown>) => {
  navigationRef.current?.dispatch(StackActions.push(routeName, params));
};

export const replace = (
  routeName: string,
  params?: Record<string, unknown>,
) => {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
};

export const back = () => {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  } else {
    clearStack(STACKS.MAIN_STACK);
  }
};

// Drawer functions
export const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};

// Stack manipulation functions
export const clearStack = (
  routeName: string,
  params?: Record<string, unknown>,
) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params}],
    }),
  );
};

export const popToTop = () => {
  _navigator?.dispatch(StackActions.popToTop());
};

export const popToScreen = (numberOfScreens: number) => {
  _navigator?.dispatch(StackActions.pop(numberOfScreens));
};

// Utility functions
export const getCurrentRoute = (route?: any): any => {
  if (!route) {
    const state = _navigator?.getState();
    if (!state) return;
    route = state;
  }

  if (route.routes && route.routes.length > 0) {
    return getCurrentRoute(route.routes[route.index]);
  }
  return route;
};
