import React from 'react';
import {
  Button,
  Image,
  ImageSourcePropType,
  Linking,
  Pressable,
  Text,
  Switch,
  View,
} from 'react-native';
import { StylesContext } from './Styles';
import { CodeBlock } from './CodeBlock';

type HoverButtonProps = {
  content: string;
  tooltip: string,
  onPress: () => void;
};
function HoverButton({content, tooltip, onPress}: HoverButtonProps): JSX.Element {
  const [hovering, setHovering] = React.useState(false);

  const backgroundBaseStyle = {padding: 2, borderRadius: 8, borderWidth: 1, borderColor: 'transparent'};
  const backgroundPressedStyle = {borderColor: 'white', backgroundColor: 'black'};
  const backgroundHoverStyle = {borderColor: 'white', backgroundColor: 'gray'};
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={tooltip}
      tooltip={tooltip}
      onPress={onPress}
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}>
      {({pressed}) => (
        <View style={[backgroundBaseStyle, pressed ? backgroundPressedStyle : hovering ? backgroundHoverStyle : null]}>
          <Text style={{minWidth: 20, textAlign: 'center'}}>{content}</Text>
        </View>        
      )}
    </Pressable>
  );
}

type AttributionProps = {
  source: string;
};
function Attribution({source}: AttributionProps): JSX.Element {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 12, fontStyle: 'italic'}}>source:</Text>
      <Text style={{fontSize: 12, marginHorizontal: 4}}>{source}</Text>
      <Text style={{fontSize: 12}}>🔍</Text>
    </View>
  );
}

type ConsentSwitchProps = {
  title: string;
  source: string;
  details: string;
  defaultValue?: boolean;
};
function ConsentSwitch({title, source, defaultValue, details}: ConsentSwitchProps): JSX.Element {
  const styles = React.useContext(StylesContext);
  const [value, onValueChange] = React.useState(defaultValue);

  return (
    <View
      style={[styles.horizontalContainer, {marginBottom: 8}]}
      tooltip={details}>
      <Switch value={value} onValueChange={onValueChange}/>
      <View>
        <Text>{title}</Text>
        <Attribution source={source}/>
      </View>
    </View>
  );
}

type ImageSelectionProps = {
  image: ImageSourcePropType;
};
function ImageSelection({image}: ImageSelectionProps): JSX.Element {
  const styles = React.useContext(StylesContext);
  return (
    <View>
      <Image style={styles.dalleImage} source={image}/>
      <View style={[styles.horizontalContainer, {marginTop: 4, justifyContent: 'space-between'}]}>
        <Button title="Variations"/>
        <Button title="Select"/>
      </View>
    </View>
  );
}

type HyperlinkProps = {
  url: string,
  text?: string,
};
function Hyperlink({url, text}: HyperlinkProps): JSX.Element {
  const styles = React.useContext(StylesContext);
  const [hovering, setHovering] = React.useState(false);
  const [pressing, setPressing] = React.useState(false);

  let displayText = text ?? url;

  return (
    <Pressable
      tooltip={url}
      accessibilityRole="link"
      accessibilityLabel={displayText}
      onPress={() => Linking.openURL(url)}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}>
      <Text
        style={
          pressing ? styles.hyperlinkPressing : 
          hovering ? styles.hyperlinkHovering : 
          styles.hyperlinkIdle}>
        {displayText}
      </Text>
    </Pressable>
  );
}

function SwitchWithLabel({label, value, onValueChange}: {label: string, value: boolean, onValueChange: (value: boolean) => void}): JSX.Element {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
      <Switch
        style={{marginTop: -6}}
        accessibilityLabel={label}
        value={value}
        onValueChange={onValueChange}/>
      <Text style={{marginTop: 4}}>{label}</Text>
    </View>
  );
}

export { HoverButton, Attribution, ConsentSwitch, ImageSelection, Hyperlink, CodeBlock, SwitchWithLabel };