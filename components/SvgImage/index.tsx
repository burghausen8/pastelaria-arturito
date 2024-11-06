import HomeBanner from '../../assets/svg/home-banner.svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export enum SvgAsset {
 HomeBanner,
}
type SvgImageProps = {
 width?: number;
 height?: number;
 asset: SvgAsset;
};

export const SvgImage = ({ width, height, asset }: SvgImageProps) => {
 const renderSvg = (type: SvgAsset) => {
  switch (type) {
   case SvgAsset.HomeBanner:
    return <HomeBanner />;
   default:
    return null;
  }
 };

 return <View style={styles.container}>
  {renderSvg(asset)}
 </View>;
}

const styles = StyleSheet.create({
 container: {
  alignSelf: 'center',
 },
});