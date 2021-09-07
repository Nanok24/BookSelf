import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nanok.bookself",
  appName: "BookSelf",
  webDir: "www",
  bundledWebRuntime: false,
  server: {
    url: "https://bookself-dabc8.firebaseapp.com/",
    cleartext: true,
  },
};

export default config;
