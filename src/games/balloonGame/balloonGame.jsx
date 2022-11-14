import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function BalloonGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../assets/Balloon/build/Build/build.loader",
    dataUrl: "../../assets/Balloon/build/Build/build.data/webgl.data",
    frameworkUrl: "../../assets/Balloon/build/Build/build.framework.js/build.framework",
    codeUrl: "../../assets/Balloon/build/Build/build.wasm/build.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}