import React, {Component} from 'react';
import {FlatList, StyleSheet,View} from 'react-native';
import {List, ListItem } from 'react-native-elements';

import Prodotto from './Prodotto';
import cibo from '../../assets/img/cibo.jpg'; 
import drink from '../../assets/img/cocktail.png'; 

// class Prodotti extends React.Component {

//     state = {
//         seed: 1,
//         page: 1,
//         users: [],
//         isLoading: false,
//         isRefreshing: false,
//     };

//     handleRefresh = () => {
//         this.setState({
//             seed: this.state.seed + 1,
//             isRefreshing: true,
//         }, () => {
//             this.loadProducts();
//         });
//     };

//     handleLoadMore = () => {
//         this.setState({
//             page: this.state.page + 1
//         }, () => {
//             this.loadProducts();
//         });
//     };

//     componentDidMount() {

//         this.loadProducts();
//     };

//     loadProducts = () => {
//         const { users, seed, page } = this.state;
//         this.setState({ isLoading: true });

//         fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`)
//             .then(res => res.json())
//             .then(res => {
//                 this.setState({
//                     users: page === 1 ? res.results : [...users, ...res.results],
//                     isRefreshing: false,
//                 });
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     };

//     render() {
//         const { users, isRefreshing } = this.state;

//         return (
//             <List style={style.scene}>
//                     <FlatList
//                         data={users}
//                         renderItem={({item}) => (
//                             <ListItem
//                                 roundAvatar
//                                 title={item.name.first}
//                                 subtitle={item.email}
//                                 avatar={{uri: item.picture.thumbnail}}
//                             />
//                         )}
//                         keyExtractor={i => i.email}
//                         refreshing={isRefreshing}
//                         onRefresh={this.handleRefresh}
//                         onEndReached={this.handleLoadMore}
//                         onEndThreshold={0}
//                     />
//             </List>
//         )
//     }
// }

// const style = StyleSheet.create({
//     scene: {
//         flex: 1,
//         paddingTop: 25,
//     },
//     user: {
//         width: '100%',
//         backgroundColor: '#333',
//         marginBottom: 10,
//         paddingLeft: 25,
//     },
//     userName: {
//         fontSize: 17,
//         paddingVertical: 20,
//         color: '#fff'
//     }
// });

// export default Prodotti;


class Prodotti extends Component {
    render (){
        return(
                <View style ={{flex:1,flexDirection:'row'}}>
                    <View style ={{flex:1}}>
                        <Prodotto imgsrc={cibo}/>
                    </View>
                    <View style ={{flex:1}}>
                        <Prodotto imgsrc={drink}/>
                    </View>
                    <View style ={{flex:1}}>
                        <Prodotto imgsrc={cibo}/>
                    </View>
                </View>

        );
    }
}
export default Prodotti;