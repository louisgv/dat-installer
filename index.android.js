import RNNode from "react-native-node";
import { run } from "@cycle/run";
import { makeHTTPDriver } from "@cycle/http";
import { makeSingleScreenNavDrivers } from "cycle-native-navigation";
import onionify from "cycle-onionify";
import { navigatorStyle } from "./lib/styles";
import main from "./lib/main";
import ApkInstaller from "react-native-apk-installer";

const { screenVNodeDriver, commandDriver } = makeSingleScreenNavDrivers(
  ["DatInstaller.Central", "DatInstaller.Addition", "DatInstaller.Details"],
  {
    screen: {
      screen: "DatInstaller.Central",
      title: "Dat Installer",
      navigatorStyle: navigatorStyle,
    },
  },
);

run(onionify(main), {
  screen: screenVNodeDriver,
  navCommand: commandDriver,
  http: makeHTTPDriver(),
  installApk: fullPath$ => {
    fullPath$.addListener({
      next: fullPath => ApkInstaller.install(fullPath),
    });
  },
});

RNNode.start();
