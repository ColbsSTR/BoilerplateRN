import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { Container, Content, Card, CardItem, Body, Left } from 'native-base';

const TabIcon = (props) => (
    <Icon
	    name='home'
  		type='font-awesome'
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    constructor(props) {
        super(props);

        this.state = {
            //Placeholder data until the database is setup
            items:  [
                {
                  name: 'Item 1',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                  price: '10',
                },
                {
                  name: 'Item 2',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                  price: '5',
                },
                {
                    name: 'Item 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    price: '50',
                  },
                  {
                    name: 'Item 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    price: '25',
                  },
              ],
              modalVisible: false
        };
    }

    componentDidMount() {

    }

    detailView() {
        return (
            <Overlay
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                    width="90%"
                    height="90%"
                >
                    <View style={{marginTop: 22}}>
                    <View>
                        <Text>Detail view!</Text>
                    </View>
                    </View>
            </Overlay>
        );
    }

    itemCard(item) {
        return (
            <TouchableOpacity onPress={() => {this.setState({modalVisible: true})}}>
                <Content style={{ padding: 5 }}>
                    <Card>
                        <CardItem header bordered style={styles.card}>
                            <Left>
                                <Icon
                                    name='item'
                                    type='font-awesome'
                                />
                                <Body>
                                    <Text style={{ color: 'darkblue', paddingBottom: 5}}>{item.name}</Text>
                                    <Text>${item.price}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={styles.card}>
                            <Body>
                                <Text>{item.description}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Container style={styles.background}> 
                <Content>
                    <FlatList
                        data={this.state.items}
                        renderItem={({item}) => this.itemCard(item)}
                    />
                </Content>
                {this.detailView()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
   background: {
       backgroundColor: 'white'
   },
   card: {
       backgroundColor: 'white'
   }
});