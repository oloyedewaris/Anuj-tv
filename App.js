import React, { useEffect } from 'react';
import { View, Button } from 'react-native'
import { registerYodoAds, showBannerAds, dismissBannerAds, showInterstitialAds, showRewardedAds } from './adFunctions';

const App = () => {
  useEffect(() => {
    registerYodoAds()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => showBannerAds()} title='Show Banner' />
      <Button onPress={() => dismissBannerAds()} title='Dismiss Banner' />
      <Button onPress={() => showInterstitialAds()} title='Show Interstial Ads' />
      <Button onPress={() => showRewardedAds()} title='Show Rewarded Ads' />
    </View>
  );
}

export default App;
