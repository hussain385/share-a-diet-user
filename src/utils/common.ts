import { Keyboard } from "react-native";

import { screen_width } from "@/constants/common";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";

export function format(input: string) {
  if (input.length === 1) {
    return "0" + input;
  } else {
    return input;
  }
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// A reusable function to dismiss the keyboard
export const dismissKeyboard = (callback: () => void) => {
  // Dismiss the keyboard
  Keyboard.dismiss();

  // Add a listener to wait for the keyboard to be fully hidden
  const keyboardListener = Keyboard.addListener("keyboardDidHide", () => {
    // Execute any additional callback (like navigation)
    if (callback) {
      callback();
    }

    // Remove listener to avoid memory leaks
    keyboardListener.remove();
  });
};

export const moderateScale = (size: number, factor = 0.5) => {
  const sample_width = 414;
  const scale = (sizeProp: number) => (screen_width / sample_width) * sizeProp;
  return size + (scale(size) - size) * factor;
};

export function startTwoMinuteTimer(
    onTick: (timeRemaining: number) => void,
    onComplete: () => void
): void {
  let timeRemaining = 120; // 2 minutes in seconds

  const timerInterval = setInterval(() => {
    onTick(timeRemaining); // Call the onTick callback with the remaining time

    timeRemaining -= 1;

    if (timeRemaining < 0) {
      clearInterval(timerInterval); // Stop the timer
      onComplete(); // Call the onComplete callback
    }
  }, 1000);
}

export async function decodeLatLng(lat: number, lng: number, setFormattedAddress: (address: string) => void) {
  const API_KEY = 'AIzaSyBNIx8hF5fYoN3AXEYkhKLKyWU9GrCFXkU'; // Replace with your API key

  try {
    const responseAny = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    );
    const response = await responseAny.json();
    if (response.status === 'OK') {
      const formattedAddress = response.results[0]?.formatted_address;
      setFormattedAddress(formattedAddress || 'No address found');
    } else {
      Toast.show({
        type: "error",
        text2: 'Failed to fetch address',
      });
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text2: 'Failed to fetch address',
    });
  }
}

export async function getCurrentLocation(setLocation: (location: Location.LocationObject | null) => void, setFormattedAddress: (address: string) => void) {

  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Toast.show({
      type: "error",
      text2: 'Permission to access location was denied',
    });
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  setLocation(location);
  const {latitude, longitude} = location.coords
  await decodeLatLng(latitude, longitude, ((address) => setFormattedAddress(address)))
}
