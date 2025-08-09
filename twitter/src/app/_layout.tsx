import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import "@/global.css"

export default function RootLayout() {
  const [loaded,error] = useFonts({
    'poppins': require('@/src/assets/fonts/Poppins-Regular.ttf')
  })
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(main)" />
    </Stack>
  )
}
