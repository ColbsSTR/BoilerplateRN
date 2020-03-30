import React, { Component } from 'react';
import { Text, View , Button} from 'react-native';
import { Icon } from 'react-native-elements'
import { addOne } from '../state/Actions/addOne';
import { connect } from 'react-redux';

const TabIcon = (props) => (
    <Icon
      name="person"
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

class Profile extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        console.log('state', this.props.state);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello from profile screen</Text>
                <Button
                    title="Press to add one"
                    onPress={() => {this.props.AddOne()}}
                />
                {/* <Text>Current count: {this.props.count}</Text> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    };
};

const mapDispatchToProps = () => {
    return {
        AddOne: addOne
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


