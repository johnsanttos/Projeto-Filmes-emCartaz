import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, FlatList, Image, View, ActivityIndicator} from 'react-native';
import Css from './styles'


  export default function appFilmes() {


   const [loading, setLoading] = useState(true) //  esta carregando

  const [movies, setMovies] = useState([]) //useState com o array de json da req

useEffect (()=>{

const requestMovies = async () => {
        setLoading(true);
        const req = await fetch ('https://api.b7web.com.br/cinema/'); //requisição tipo get
        const json =await req.json () //transforma req em json
        
        if (json) {
        setMovies (json);
        }
        setLoading(false)
}
requestMovies()
}, [])


 return (
   <SafeAreaView
   style ={Css.container}
   >


{ loading &&
<View style ={Css.loadingArea}>
  <ActivityIndicator size = "large" color = '#ffff'/>
<Text style ={Css.loadingText}> carregando...</Text>

</View>

}



{!loading &&
<>
<Text  style ={Css.totalMoviesText}> Total de filmes: {movies.length}</Text>

          <FlatList
            style ={Css.list}
            data= {movies}
            renderItem = {({item} )=>(
            <View
            style = {Css.movieItem}
            >
            <Image 
            source = {{uri: item.avatar}} 
            style= {Css.movieImage}
            resizeMode = 'contain' // imagem aparece sempre inteira
            />
            <Text 
            style ={Css.movieTitle}
            >{item.titulo} </Text>

            </View>
          )}

          keyExtractor = {item => item.titulo}
          />



</>
}




   </SafeAreaView>
  );
}