import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, FlatList, Image, View} from 'react-native';


  export default function appFilmes() {



  const [movies, setMovies] = useState([]) //useState com o array de json da req
  const handleLoadButton = async () => {
  
  
  const req = await fetch ('https://api.b7web.com.br/cinema/'); //requisição tipo get
  const json =await req.json () //transforma req em json
  
  if (json) {
    setMovies (json);
  }
  
  }

 return (
   <SafeAreaView>
<Button 
title ='Carregar'
onPress ={handleLoadButton} />

<Text> Total de filmes: {movies.length}</Text>

<FlatList
data= {movies}
renderItem = {({item} )=>(
  <View>
  <Image source = {{uri: item.avatar}} style= {{ width: 200, height:200}} />
  <Text>{item.titulo} </Text>

  </View>
)}

keyExtractor = {item => item.titulo}
/>

   </SafeAreaView>
  );
}