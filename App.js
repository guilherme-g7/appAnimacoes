import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Animated } from 'react-native';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
          larAnimada: new Animated.Value(150),
          altAnimada: new Animated.Value(50),
          opacidadeAnimada: new Animated.Value(0)
        };



        Animated.sequence([


          Animated.timing(
            this.state.opacidadeAnimada,
            {
              toValue: 1,
              duration: 1500
            }
          ),

          Animated.parallel([
            Animated.timing(
              this.state.larAnimada,
              {
                toValue: 300,
                duration: 2000
              }
            ),
  
            Animated.timing(
              this.state.altAnimada,
              {
                toValue: 200,
                duration: 2000
              }
            )
          ]),

          Animated.timing(
            this.state.opacidadeAnimada,
            {
              toValue: 0,
              duration: 1500
            }
          )


        ]).start();



        /*
        Animated.timing(
          this.state.larAnimada, 
          {
            toValue: 300,
            duration: 2000
          }
        ).start();
        */
    }


    render(){

        return(
            <View style={styles.container}>

              <Animated.View style={{width: this.state.larAnimada, height: this.state.altAnimada, 
                                    backgroundColor: '#4169E1', justifyContent: 'center', opacity: this.state.opacidadeAnimada}}>
                <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>
              </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default App;