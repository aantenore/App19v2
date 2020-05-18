import { Button,View, Text } from 'react-native';
import * as React from 'react';

export default class ComposeYourProduct extends React.Component {
    
    //TODO - Compose your products
    
    render(){
    return (
        <Button
            title={"Go to "+this.props.screen}
            onPress={() => {
                this.props.navigation.navigate(this.props.screen,
                {lastScreen: this.props.route.params?.currentScreen, currentScreen:this.props.screen })}}
        />
    );
  };
}