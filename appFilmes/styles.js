import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
flex:1,
backgroundColor: '#333'

    },

    totalMoviesText:{
        color: '#fff',
        fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,



    },

    list:{
        flex:1,
    },

    movieTitle: {
        color: '#fff',
        fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
    },

    movieImage: {
height: 400
    },

    movieItem: {
        marginBottom: 30,
    },



loadingArea: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',

},

loadingText: {
    color: '#fff'
}



})