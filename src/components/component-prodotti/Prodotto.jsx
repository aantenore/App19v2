import * as React from 'react';
import {View,Image,Text} from 'react-native';
const Prodotto = props => {
    return(
        <View>
            <View>
                <Image source={props.imgsrc} alt="Cibo" className="card-img-top"/>
            </View>
            <View>
                <Text>Titolo</Text>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam eos, quo cumque sint dolores
                </Text>
            </View>
        </View>
    );
}
export default Prodotto;