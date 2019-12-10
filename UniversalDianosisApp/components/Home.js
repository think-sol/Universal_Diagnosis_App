import React,{Component} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img from './images/1.jpg';
import {Icon,Input,Header,Card,Text,Divider,Rating,Button,Avatar} from 'react-native-elements';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

class Home extends Component{
  state={
    isPopularChange:false,
    isAllChange:false,
    isHighChange:false,
  }

  handlePopularChange=()=>{
    this.setState({
      isPopularChange:true,
      isAllChange:false,
      isHighChange:false,
    })
  }

  handleAllChange=()=>{
    this.setState({
      isPopularChange:false,
      isAllChange:true,
      isHighChange:false,
    })
  }

  handleHighChange=()=>{
    this.setState({
      isPopularChange:false,
      isAllChange:false,
      isHighChange:true,
    })
  }
  render(){
    return (
      <View style={styles.homearea}>
          <View>
              <Header 
                containerStyle={{borderBottomRightRadius:10,borderBottomLeftRadius:10,backgroundColor:'#572cd7',height:50}}
                leftContainerStyle={{marginBottom:20}}
                leftComponent={<Icon type="material" name="keyboard-arrow-left" size={30} color='white' />} 
                centerContainerStyle={{marginBottom:20}}
                centerComponent={<Text style={{color:'white',fontSize:17}}>Universal Diagnosis Clinic</Text>}  
              />
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.body} contentContainerStyle={{justifyContent:'center'}}>

              {/* Search View */}
              <View>
                <Input placeholder="Search" inputStyle={{width:'100%',fontSize:20,backgroundColor:'#e5e5e5'}} 
                      inputContainerStyle={{borderBottomWidth:0,marginTop:10,backgroundColor:'#e5e5e5',borderRadius:10}}
                      leftIcon={<Icon type="material" name="search" color="gray" />}
                      rightIcon={<Icon type="material" name="mic" color="red" iconStyle={{marginRight:10}} />}
                />
            </View>
            
            {/* Image View */}
            <View>
              <Image source={img} style={{width:wp('92%'),height:hp('30%'),borderRadius:10,marginLeft:10,marginTop:10}} />
            </View>

              {/* Card View */}
            <View>
              <Card 
                  containerStyle={{backgroundColor:'#eae8e8',borderRadius:5}}
              >
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontSize:17}}>Universal Diagnosis Clinic</Text>
                  <Icon 
                      type="material" 
                      name="favorite" 
                      size={20} 
                      color="red" 
                      containerStyle={{backgroundColor:'white',marginTop:-15,paddingTop:15,paddingRight:3,paddingLeft:3,borderBottomLeftRadius:8,borderBottomRightRadius:8}} 
                  />
                </View>
                 <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />
                  
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Icon name="room" type="material" size={20} color="gray" containerStyle={{padding:5}} />
                    <Text>Shop no 145</Text>
                  </View>

                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Icon name="room" type="material" size={20} color="gray" containerStyle={{padding:5}} />
                    <Text>4.25 km away from you</Text>
                  </View>

                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Icon name="eye" type="antdesign" size={20} color="gray" containerStyle={{padding:5}} />
                    <Text>250 views</Text>
                  </View>

              </Card>
            </View>

            <View style={{marginTop:10,backgroundColor:'#653fd8',padding:10,marginLeft:15,marginRight:15,borderRadius:10,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

                    <View>
                        <View style={{backgroundColor:'#9485c4',padding:8,borderRadius:50}}>
                            <View style={{backgroundColor:'#653fd8',padding:8,borderRadius:50,borderColor:'white',borderWidth:5}}>
                                    <Text style={{fontSize:25,color:'white'}}>4.0</Text>
                            </View>
                        </View>
                    </View>
              <Rating imageSize={20} type='custom' />
              <Text style={{color:'white'}}>150 Ratings</Text>

            </View>

            <View style={{marginTop:10,padding:10,height:100,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <View>
                  <Icon raised name="phone-forwarded" type="material" color="#653fd8" />
                  <Text style={{textAlign:'center'}}>Call</Text>
                </View>
                <View>
                  <Icon raised name="room" type="material" color="#653fd8" />
                  <Text style={{textAlign:'center'}}>Directions</Text>
                </View>
                <View>
                  <Icon raised name="sms" type="material" color="#653fd8" />
                  <Text style={{textAlign:'center'}}>Messages</Text>
                </View>
                <View>
                  <Icon raised name="sharealt" type="antdesign" color="#653fd8" />
                  <Text style={{textAlign:'center'}}>Share</Text>
                </View>
            </View>

            <View style={{marginTop:10,height:50,marginRight:15,marginLeft:15,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Button title="Book Appointment" buttonStyle={{width:wp('45%'),backgroundColor:'#5cd7fd'}} />
                <Button title="Send Inquiry" buttonStyle={{width:wp('43%'),backgroundColor:'#fe8c00'}} />
            </View>

            <View style={{backgroundColor:'#e0dced',padding:10,marginTop:10,height:45,marginRight:15,marginLeft:15,borderRadius:10,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <Icon name="clockcircle" type="antdesign" />
              <Text style={{fontSize:15}}>Timing - 10:00 AM - 8:00 PM - Open</Text>
            </View>

            <View style={{height:225}}>
              <Card containerStyle={{borderRadius:10}}>
                <Text style={{color:'blue'}}>Contact Details</Text>
                <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />
                
                <View style={{display:'flex',flexDirection:'row',marginBottom:5}}>
                    <Icon name="mobile1" type="antdesign" />
                    <Text style={{fontSize:15,marginLeft:10}}>033333333</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row',marginBottom:5}}>
                    <Icon name="mobile1" type="antdesign" />
                    <Text style={{fontSize:15,marginLeft:10}}>033333333</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row',marginBottom:5}}>
                    <Icon name="phone" type="material" />
                    <Text style={{fontSize:15,marginLeft:10}}>No Available</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row',marginBottom:5}}>
                    <Icon name="mail" type="material" />
                    <Text style={{fontSize:15,marginLeft:10}}>universaldiagnosis@gmail.com</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Icon name="web" type="foundation" />
                    <Text style={{fontSize:15,marginLeft:10}}>www.universaldiagnosis.com</Text>
                </View>
                
              </Card>
            </View>

            <View style={{marginTop:15,height:300,marginRight:15,marginLeft:15,display:'flex'}}>

              <Text h4 style={{color:'blue'}}>About</Text>  
              <Text>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                  The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.            
              </Text>            
                          
                          
            </View>

            <View style={{marginTop:15,height:200,marginRight:15,marginLeft:15,display:'flex'}}>
                <Text h4 style={{color:'blue'}}>Photos</Text>  

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[
                      {image:img},
                      {image:img},
                      {image:img},
                      {image:img}
                    ]}
                    renderItem={({item}) => <Image style={{width:wp('30%'),height:100,borderRadius:10,marginRight:5}} source={item.image}/>}
                />

                <Button title="Upload Photos" type="outline" buttonStyle={{borderRadius:10}} />
            </View>

            <View style={{marginTop:15,height:650,marginRight:15,marginLeft:15,display:'flex'}}>

              <Text h4 style={{color:'blue'}}>Address</Text>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <Text>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Text>
                
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{marginTop:10,display:'flex',flexDirection:'row'}}>
                  <Icon name="clockcircle" type="antdesign" size={20} />
                  <Text style={{fontSize:10,marginLeft:5}}>Available Now 09:00 AM - 7:30 PM (MON-SUN)</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row'}}>
                  <Icon name="phone" type="material" />
                  <Text style={{fontSize:15,marginLeft:10}}>03333333333</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />
              
              <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:15,marginRight:10,color:"blue"}}>Make Payment Using App</Text>
                  <Icon name="payment" type="materialicons" />
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row'}}>
                  <Icon name="edit" type="material" />
                  <Text style={{fontSize:15,marginLeft:10}}>Edit this listing</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />
              
              <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:15,marginLeft:10}}>offer</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:15,marginLeft:10,color:'red'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                  <Text style={{fontSize:15}}>Booking Plicy</Text>
                  <Text style={{fontSize:15}}>No Restrictions</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                  <Text style={{fontSize:15}}>Consultation Fee</Text>
                  <Text style={{fontSize:15}}>Rs: 200</Text>
              </View>
              <Divider style={{backgroundColor:'gray',marginTop:10,marginBottom:10}} />

              <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                  <Text style={{fontSize:15}}>Specialization</Text>
                  <Text style={{fontSize:15}}>All Check up</Text>
              </View>
            </View>
            

            <View style={{display:'flex',marginTop:10,height:140,marginRight:15,marginLeft:15}}>
                  <Text style={{fontSize:20,marginRight:10,color:"blue"}}>Reviews & Ratings</Text>
                  
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:30}}>
                    <View>
                          <View style={{backgroundColor:'#aaf74c',padding:10,borderRadius:50}}>
                              <View style={{backgroundColor:'#aaf74c',padding:10,borderRadius:50,borderColor:'white',borderWidth:5}}>
                                  <Text style={{fontSize:25,color:'white'}}>4.0</Text>
                              </View>
                          </View>
                    </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{fontSize:20}}>Ratings</Text>
                      <Text style={{fontSize:12}}>Rating based on 5 ratings across the web</Text>
                    </View>
                  </View>
            </View>
            <Divider style={{backgroundColor:'gray',marginTop:15,marginBottom:10}} />

            <View style={{display:'flex',marginTop:10,height:400,marginRight:15,marginLeft:15}}>
                  <Text style={{fontSize:20}}>User Reviews</Text>

                  <View style={{marginLeft:10,marginRight:10,marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

                      <Button title="Popular" type="outline" buttonStyle={{borderRadius:20,width:110,backgroundColor:this.state.isPopularChange===true ? 'skyblue' : '#f3f4f2'}} onPress={this.handlePopularChange} />
                      <Button title="All" type="outline" buttonStyle={{borderRadius:20,width:70,backgroundColor:this.state.isAllChange===true ? 'skyblue' : '#f3f4f2'}}  onPress={this.handleAllChange}/>
                      <Button title="High to Low" type="outline" buttonStyle={{borderRadius:20,width:110,backgroundColor:this.state.isHighChange===true ? 'skyblue' : '#f3f4f2'}} onPress={this.handleHighChange}/>

                </View>

                    <FlatList
                    
                        data={[
                            {name:'Syed Mutahir',review:'1 Review',rating:'4.0',date:'10-Dec-2019',comment:'Nice'},
                            {name:'Ali khan',review:'5 Review',rating:'4.5',date:'7-Dec-2019',comment:'Great'},
                        ]}   
                    
                        renderItem={({item})=>
                            <View>
                                  <View style={{display:'flex',flexDirection:'row',marginTop:40}}>
                                    <View>
                                        <Avatar 
                                          rounded 
                                          title="SM" 
                                          size="large" 
                                        />
                                    </View>
                                    <View style={{marginLeft:10}}>
                                        <Text h4>{item.name}</Text>
                                        <Text>{item.review}</Text>
            
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                              <Text style={{fontSize:20}}>{item.rating}</Text>
                                              <Rating readonly imageSize={17} />
                                            </View>
                                            <Text style={{marginLeft:15}}>{item.date}</Text>
                                        </View>
                                    </View>
                                  </View>
            
                                  <Text style={{fontSize:20,marginTop:20}}>{item.comment}</Text>
                            </View>                  
                        
                      }
                    
                    
                    />
                  

            </View>
             
            <View style={{marginTop:20,height:250}}>
                  <Card containerStyle={{borderRadius:10}} > 
                      <Rating type="custom" ratingBackgroundColor="lightgray" imageSize={40} />
                      <Text style={{textAlign:'center',marginTop:10}}>Rate Your Experience with us</Text>

                      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:30}}>
                        <View>
                            <Icon name="facebook-square" type="antdesign" size={50} />
                            <Text>Like Us On Facebook</Text>
                        </View>
                        <View>
                            <Icon name="instagram" type="entypo" size={49} />
                            <Text>Follow Us On Instagram</Text>
                        </View>
                      </View>
                  </Card>
            </View>


          </ScrollView>
         
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  homearea:{
    flex:1,
  },
  body:{
      width:wp('98%'),
      marginLeft:5,
      display:'flex'
  }
});

export default Home;
