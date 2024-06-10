import { Unity, useUnityContext } from "react-unity-webgl";

const HomePage = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/FlappyBirdPhantom.loader.js",
    dataUrl: "Build/FlappyBirdPhantom.data",
    frameworkUrl: "Build/FlappyBirdPhantom.framework.js",
    codeUrl: "Build/FlappyBirdPhantom.wasm",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <>
      {isLoaded === false && (
        <div className="loading-overlay absolute top-[50%]">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="w-full h-full" unityProvider={unityProvider} />
    </>
  );
};

export default HomePage;
