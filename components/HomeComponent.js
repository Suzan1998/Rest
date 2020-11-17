import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
  const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
  })
  

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={{uri: baseUrl + item.image}}>
                    <Text 
                        style={{margin: 10}}>
                        {item.description}</Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}


class Home extends Component {
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }
    render() {
        const { dishes, promotions, leaders} = this.props;
        return(
            <ScrollView style={{backgroundColor:'black'}}>
                <RenderItem  item={dishes.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={promotions.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={leaders.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);