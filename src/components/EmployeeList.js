import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions'
import ListItem from './ListItem';

import _ from 'lodash';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeeFetch();
    }

    // componentWillReceiveProps(nextProps) {}
    // createDataSource({ employees }) {}

    renderRow(employee) {
        return <ListItem item={employee} />;
    }

    render() {
        return (
            <View>
                <FlatList 
                    data={this.props.employees}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item) => {
                        return item.uid.toString(); 
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => { 
        return  { ...val, uid };
    });
    
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);