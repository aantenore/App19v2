import { View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as React from 'react';
import firebaseClass from '../../constants/database';
import styles from './styles';
import Getter from '../../service/Getter'
import constants from '../../constants/constants'
import { ScreenLayout } from '../../AppStyles';
import HorizontalFlatList from '../../components/HorizontalFlatList/HorizontalFlatList';


export default class DiscoveryMenuScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'DiscoveryMenu'
    });
    render() {
        console.log(this.state.categoriesArray);
        return (
            <ScrollView style={ScreenLayout.container}>
                <HorizontalFlatList data={this.state.categories}>
                </HorizontalFlatList>
                {/*<HorizontalFlatList style={{ flex: 1 }}
                    data={this.state.categories}>
                </HorizontalFlatList>
                <FlatList
                    data={this.categoriesArray}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity >
                                <Image />
                                 <InputOrSlider item={item} index={index} navigation={this.props.navigation}></InputOrSlider>
                            </TouchableOpacity>
                        );
                    }}>
                </FlatList> */}
            </ScrollView>
        );
    };

    constructor(props) {
        super(props);
        this.state = { categoriesArray: [] };
    }

    componentDidMount() {
        this.setState({ categories: Getter.getChildren(constants.fixedDrinksPath() + '/birra') });
        this.findProducts();
    }

    findProducts() {
        let ref = firebaseClass.db().ref('/' + global.user + '/products');
        ref.child('fixed').once('value').then(categories => {
            let categoriesArray = [];
            categories.forEach(category => {
                let item = { category: category.key };
                category.child('features').forEach(feature => {
                    if (feature.key !== 'description') {
                        item[feature.key] = feature.val();
                    }
                });
                if (Object.keys(item).length > 1) categoriesArray.push(item);
            });
            this.setState({ categoriesArray });
        });
    }

}


/*
.on('value',snap=>{
            this.setState({combinedProducts:snap.child('combined'),fixedProducts:snap.child('fixed')});
        });
*/
