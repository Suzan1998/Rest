import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';
import {COMMENTS} from '../shared/comments';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments
    }
  }
const favorites= [0]
isFav=false;
function RenderDish(props) {
    markFavorite=(dishId)=> {
        var fav = favorites.includes(dishId);
        if(fav){
            isFav=false;
            favorites.splice(dishId);
            console.log("removd from fav");
            console.log(favorites)
        }
        else{
            isFav=true;
            favorites.push(dishId);
            console.log('added to fav') 
            console.log(favorites)

        }
    }
    const  dish= props.dish;
    if(dish!=null){
        return(
            <Card
            featuredTitle={dish.name}
            image={{uri: baseUrl + dish.image}}>
                <Text style={{margin:10}}> {dish.description} </Text>
                <Icon
                    onPress={() => markFavorite(dish.id)}
                    raised
                    reverse
                    name={ isFav ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                   
                    />
            </Card>
        );}

        else {
            return(
                <View style={{flex:1}}></View>
            );
        }
    }
  

    function RenderComments(props) {

         const comments = props.comments;
                
        const renderCommentItem = ({item, index}) => {
            
            return (
                <View key={index} style={{margin: 10}}>
                    <Text style={{fontSize: 14}}>{item.comment}</Text>
                    <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                    <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
                </View>
            );
        };
        
        return (
            <Card title='Comments' >
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
                />
            </Card>
        );
    }

      Dishdetail = ({navigation, route}) =>
    {
        const { dishId ,dishes,comments} = route.params;
        
        return(
            <ScrollView>
               <RenderDish dish={dishes[+dishId]}
               />
               <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>

        )
    }       

    export default connect(mapStateToProps)(Dishdetail);