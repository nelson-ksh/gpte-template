import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import WalletStatus from "../components/walletStatus"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <WalletStatus />
      <Component {...pageProps} />
    </MeshProvider>
  );
}
