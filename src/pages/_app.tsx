import "@/styles/globals.scss";
import { emotionCache } from "@/utils/emotionCache";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
