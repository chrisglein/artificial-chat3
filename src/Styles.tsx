import React from 'react';
import type {
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle
} from 'react-native';
import { PlatformColor } from 'react-native';
import { StyleSheet } from 'react-native';

const StylesContext = React.createContext<{
  appContent: StyleProp<ViewStyle>;
  popupBackground: StyleProp<ViewStyle>;
  sectionContainer: StyleProp<ViewStyle>;
  humanSection: StyleProp<ViewStyle>;
  AiSection: StyleProp<ViewStyle>;
  sectionTitle: StyleProp<TextStyle>;
  highlight: StyleProp<ViewStyle>;
  horizontalContainer: StyleProp<ViewStyle>;
  dalleImage: StyleProp<ImageStyle>;
  inlineCard: StyleProp<ViewStyle>;
  dialogTitleIcon: StyleProp<TextStyle>;
  dialogTitle: StyleProp<TextStyle>;
  dialogSectionsContainer: StyleProp<ViewStyle>;
  dialogSection: StyleProp<ViewStyle>;
  dialogSectionHeader: StyleProp<TextStyle>;
  dialogBackground: StyleProp<ViewStyle>;
  dialogButtons: StyleProp<ViewStyle>;
  codeBlockTitle: StyleProp<TextStyle>;
  codeBlockTitleText: StyleProp<TextStyle>;
  hyperlinkIdle: StyleProp<TextStyle>;
  hyperlinkPressing: StyleProp<TextStyle>;
  hyperlinkHovering: StyleProp<TextStyle>;
  hyperlinkDisabled: StyleProp<TextStyle>;
  textBox: StyleProp<ViewStyle>;
}>({});

const CreateStyles = (isDarkMode: boolean, isHighContrast: boolean) => {
  return StyleSheet.create({
    appContent: {
      backgroundColor: isDarkMode ? '#1F1F1F' : '#F5F5F5',
      justifyContent: 'space-between',
      height: '100%',
    },
    popupBackground: {
      backgroundColor: isDarkMode ? 'white' : 'black',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.3,
    },
    sectionContainer: {
      marginHorizontal: 12,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
    },
    humanSection: {
      backgroundColor: isDarkMode ? '#2F2F4A' : '#E8EBFA',
      marginRight: 64,
    },
    AiSection: {
      backgroundColor: isDarkMode ? '#292929' : '#FFFFFF',
      marginLeft: 64,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: '600',
    },
    highlight: {
      fontWeight: '700',
    },
    horizontalContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 12,
    },
    dalleImage: {
      width: 150,
      height: 150,
    },
    inlineCard: {
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 8,
      padding: 8,
    },
    dialogTitleIcon: {
      backgroundColor: 'gray',
      borderRadius: 4,
      alignSelf: 'center',
      padding: 2,
    },
    dialogTitle: {
      fontSize: 20,
    },
    dialogSectionsContainer: {
      gap: 12,
    },
    dialogSection: {
      backgroundColor: isDarkMode ? '#1F1F1F' : '#F5F5F5',
      borderRadius: 8,
      padding: 12,
    },
    dialogSectionHeader: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 4,
    },
    dialogBackground: {
      backgroundColor: isDarkMode ? '#292929' : '#FFFFFF',
      padding: 12,
      borderRadius: 8,
      minWidth: 300
    },
    dialogButtons: {
      marginTop: 12,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 4,
    },
    codeBlockTitle: {
      backgroundColor: isDarkMode ? 'white' : '#444',
    },
    codeBlockTitleText: {
      color: isDarkMode ? 'black' : 'white',
    },
    hyperlinkIdle: {
      color: isHighContrast ? PlatformColor("SystemColorWindowTextColor") : isDarkMode ? PlatformColor("SystemAccentColorDark2") : PlatformColor("SystemAccentColorLight3"),
      textDecorationLine: 'underline',
    },
    hyperlinkPressing: {
      color: isHighContrast ? PlatformColor("SystemColorWindowTextColor") : isDarkMode ? PlatformColor("SystemAccentColorDark2") : PlatformColor("SystemAccentColorLight2"),
    },
    hyperlinkHovering: {
      color: isHighContrast ? PlatformColor("SystemColorWindowTextColor") : isDarkMode ? PlatformColor("SystemAccentColorDark3") : PlatformColor("SystemAccentColorLight3"),
      textDecorationLine: 'underline',
    },
    hyperlinkDisabled: {
      color: isHighContrast ? PlatformColor("SystemColorGrayTextColor") : PlatformColor("AccentTextFillColorDisabled"),
      textDecorationLine: 'underline',
    },
    textBox: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: isDarkMode ? '#FFFFFFFF' : '#FFFFFFFF', // TextBoxBackgroundThemeBrush
      borderRadius: 4, // ControlCornerRadius
      borderWidth: 1, // TextControlBorderThemeThickness
      borderBottomWidth: 2,
      borderColor: isDarkMode ? '#FFFFFFFF' : '#A3000000', // TextBoxBorderThemeBrush
      borderBottomColor: isDarkMode ? '#8BFFFFFF' : '#72000000', // ControlStrongStrokeColorDefault
      paddingLeft: 10, // TextControlThemePadding
      paddingTop: 6,
      paddingRight: 6,
      paddingBottom: 5,
      minHeight: 32, // TextControlThemeMinHeight
    }

  });
}

export { StylesContext, CreateStyles };