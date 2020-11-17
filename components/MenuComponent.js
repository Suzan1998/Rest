import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes,
    comments: state.comments.comments,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
})


class Menu extends Component{

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
  }

  render(){
    const { dishes, comments} = this.props;
    renderMenuItem = ({item, index}) => {
        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true} 
                    onPress={() =>{ this.props.navigation.navigate('Dishdetail',{dishes:dishes, comments:comments,dishId: item.id})}}
                    leftAvatar={{ source:{uri: baseUrl + item.image}}}
                  /> 
        );
    };
    return (
            <FlatList style={{backgroundColor:'black'}}
                data={dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
  }

     

     
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);