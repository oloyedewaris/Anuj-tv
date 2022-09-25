import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { registerYodoAds, showBannerAds, dismissBannerAds, showInterstitialAds, showRewardedAds } from './adFunctions';

const App = () => {
  useEffect(() => {
    registerYodoAds()
    showBannerAds()
  }, [])

  return (
    <WebView
      pullToRefreshEnabled
      onError={err=> console.log(err)}
      source={{ uri: 'https://teledhamaka.in' }}
      onLoad={() => showBannerAds()}
      onNavigationStateChange={navState => {
        if (navState.canGoBack) {
          showInterstitialAds()
        }
      }}
    />
  );
}

export default App;
