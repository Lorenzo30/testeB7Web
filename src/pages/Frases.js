import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableHighlight,Image } from 'react-native';
import PushNotification from "react-native-push-notification";
import Share from 'react-native-share';
import Tts from 'react-native-tts';


import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';


const DATA = [
  {
    id: 'f1',
    title: '"Não é só ir treinar, é dar o seu melhor em todos os exercícios e ter foco para não se perder."',
  },
  {
    id: 'f2',
    title: '"Se não conseguiu fazer o exercício hoje, tente de novo amanhã. A prática é que vai te deixar melhor. Não desista!"',
  },
  {
    id: 'f3',
    title: '"Não busque ser melhor que os outros, busque ser melhor que o seu eu de ontem."',
  },
  {
    id: 'f4',
    title: '"O primeiro desafio é vencer a preguiça, depois concluir um treino que você se orgulhará do seu desempenho."',
  },
  {
    id: 'f5',
    title: '"O treino começa na sua mente que precisa ser convencida do quão bem ele te fará."',
  },
  {
    id: 'f6',
    title: '"O segredo para o sucesso dos seus treinos é só um: tenha força de vontade, garra e determinação."',
  }, 
  {
    id: 'f7',
    title: '"Os limites precisam ser vencidos para chegar onde você deseja. Respeite seu corpo, mas force-o um pouco mais a cada dia para que ele vença suas limitações."',
  }, 
  {
    id: 'f8',
    title: '"Faça exercícios porque você quer o seu bem e o bem do seu corpo."',
  }, 
  {
    id: 'f9',
    title: '"Só você tem o poder de mudar suas escolhas. Escolha treinar com força de vontade e não deixe que nada te impeça."',
  }, 
  {
    id: 'f10',
    title: '"Pessoas fortes vencem a preguiça e a vontade de ficar na cama para colocar o corpo em movimento porque sabem que essa é a melhor decisão."',
  }, 
  {
    id: 'f11',
    title: '"Disciplina é treinar mesmo quando tudo te atrai, menos a academia."',
  }, 
  {
    id: 'f12',
    title: '"Não há treino milagroso. Você precisa seguir o que te foi passado com disciplina, sem faltar e com força de vontade. Só assim, os resultados virão."',
  }, 
  {
    id: 'f14',
    title: '"O lugar dos preguiçosos é no passado porque não serão levados a sério quando forem cobrados. Treine para deixar o seu lado preguiçoso para trás."',
  }, 
  {
    id: 'f15',
    title: '"Faça da hora de malhar, um momento de prazer e você estará sempre motivado para treinar."',
  }, 
  {
    id: 'f16',
    title: '"Busque melhorar, busque evoluir, busque disciplina e tudo o que você deseja, se concretizará."',
  }, 
  {
    id: 'f17',
    title: '"Treinar é como tudo na vida, assusta um pouco no começo, mas depois a gente não se vê fazendo outra coisa."',
  }, 
  {
    id: 'f18',
    title: '"Desculpas não atingem resultados, muito treino, sim!."',
  }, 
  {
    id: 'f19',
    title: '"Os derrotados são os que desistem, seja um vencedor e persista até atingir o que deseja."',
  }, 
  {
    id: 'f20',
    title: '"Se está fácil é porque você já está forte o suficiente para mudar seu treino."',
  }, 
  {
    id: 'f21',
    title: '"Reclamar não vai mudar sua realidade. Seus objetivos só acontecem se você suar!."',
  },
  {
    id:'f22',
    title:'"Acredite em si. Engate a mente na sua boa estrela e reconheça que a sua luz interior o conduzirá sempre para cima e para a frente."'
  },
  {
    id:'f23',
    title:'"Acredite que você pode, assim você já está no meio do caminho."'
  },
  {
    id:'f24',
    title:'"Segredo de um bom treino: acreditar em você e ter paciência."'
  },
  {
    id:'f25',
    title:'"Imagine uma nova história para sua vida e acredite nela."'
  },
  {
    id:'f26',
    title:'"A disciplina é a mãe do êxito."'
  },
  {
    id:'f27',
    title:'"Minha cabeça diz “vai pra academia”. Meu corpo diz “vai pra cama”. Meu estômago diz “vai pra geladeira.” Não sei o que fazer!"'
  },
  {
    id:'f28',
    title:'"O sucesso começa com autodisciplina."'
  },
  {
    id:'f29',
    title:'"Um treino de uma hora é 4% do seu dia. Sem desculpas."'
  },
  {
    id:'f30',
    title:'"O corpo alcança o que a mente acredita."'
  },
  {
    id:'f31',
    title:'"Trabalhe duro em silêncio. Deixe o sucesso ser o seu barulho."'
  },
  {
    id:'f32',
    title:'"O levantamento mais difícil de todos é levantar a bunda do sofá."'
  },
  {
    id:'f33',
    title:'"Tudo se resume a uma coisa simples: o quanto você quer?."'
  },
  {
    id:'f34',
    title:'"Dar desculpas queima zero calorias por hora."'
  },
  {
    id:'f35',
    title:'"Obstáculos não podem impedi-lo. Os problemas não podem impedi-lo. As pessoas não podem te impedir. Só você pode pará-lo."'
  },
  {
    id:'f36',
    title:'"O único treino ruim é aquele que não aconteceu."'
  },
  {
    id:'f37',
    title:'"O exercício é como dizer ao seu corpo“ você vai me odiar por isso, mas vai me agradecer mais tarde."'
  },
  {
    id:'f38',
    title:'"Não limite seus desafios, desafie seus limites."'
  },
  {
    id:'f39',
    title:'"Acredite em você mesmo e em tudo o que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo."'
  },
  {
    id:'f40',
    title:'"Nada verdadeiramente grande jamais saiu de uma zona de conforto."'
  },
  {
    id:'f41',
    title:'"Você não precisa ser extremo, apenas consistente."'
  },
  {
    id:'f42',
    title:'"Menos açúcar, mais frutas. Menos refrigerante, mais água. Menos condução, mais caminhada. Menos preocupação, mais sono. Menos palavras, mais ação."'
  },
  {
    id:'f43',
    title:'"A diferença entre querer e realizar é a disciplina."'
  },
  {
    id:'f44',
    title:'"A parte difícil não é deixar seu corpo em forma. A parte difícil é colocar sua mente em forma."'
  },
  {
    id:'f45',
    title:'"Não tenha medo de ser um iniciante."'
  },
  {
    id:'f46',
    title:'"Primeiro eles vão rir. Então eles irão copiar. Não desista."'
  },
  {
    id:'f47',
    title:'"Se você quer algo que nunca teve, deve estar disposto a fazer algo que nunca fez."'
  },
  {
    id:'f48',
    title:'"Para dar qualquer coisa menos do que o seu melhor é sacrificar o presente."'
  },
  {
    id:'f49',
    title:'"A vida começa no final da sua zona de conforto."'
  },
  {
    id:'f50',
    title:'"Faça o que você tem que fazer até que você possa fazer o que quiser."'
  },
  {
    id:'f51',
    title:'"Vai ser uma jornada. Não é uma corrida para entrar em forma."'
  },
  {
    id:'f52',
    title:'"Lute pelo progresso, não pela perfeição."'
  },
  {
    id:'f53',
    title:'"Todas as grandes conquistas requerem tempo."'
  },
  {
    id:'f54',
    title:'"Quer ser respeitado? Ser consistente."'
  },
  {
    id:'f55',
    title:'"Se não o desafiar, não o mudará."'
  },
  {
    id:'f56',
    title:'"Ame a si mesmo o suficiente para viver um estilo de vida saudável."'
  },
  {
    id:'f57',
    title:'"Mate suas distrações. Alimente seu foco."'
  },
  {
    id:'f58',
    title:'"Quando perdi todas as minhas desculpas, encontrei meus resultados."'
  },
  {
    id:'f59',
    title:'"A força não vem da capacidade física. Vem de uma vontade indomável."'
  }
];

Tts.setDefaultRate(1.2, true);
Tts.setDefaultPitch(1.2);

const compartilhar = async (message) => {
  const shareOptions = {
    title: 'Compartilhar motivação academia',
    message:message
  };

  const shareResponse = await Share.open(shareOptions);
};

const ouvirMotivacao = (mensagem) => {
  Tts.setDefaultVoice('pt-pt-x-pmj-local');
  Tts.speak(mensagem, {
  iosVoiceId: 'fr-fr-x-vlf-local',
  androidParams: {
    KEY_PARAM_PAN: -1,
    KEY_PARAM_VOLUME: 1,
    KEY_PARAM_STREAM: 'STREAM_NOTIFICATION',
  },
  });
}


const Item = ({ title }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TouchableHighlight  onPress={() => compartilhar(title)} underlayColor={"transparent"}>
          <Image source={require("../images/share.png")} style={{width:20,height:20}} />
        </TouchableHighlight>
        <Image source={require("../images/motivacao.png")} style={{width:32,height:35}} />
        <TouchableHighlight  onPress={() => ouvirMotivacao(title)} underlayColor={"transparent"}>
          <Image source={require("../images/volume.png")} style={{width:32,height:35,alignSelf:"flex-start"}} />
        </TouchableHighlight>
    </View>
  </View>
);

const App = (props) => {
  AdMobInterstitial.setAdUnitID('ca-app-pub-3987405359474153/6056176926');
  AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
 
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
   
  props.navigation.setOptions({
    headerTitle: "Frases",
    headerTintColor: '#fff'
  })
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#284A66" barStyle="light-content"
        />
      <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-3987405359474153/7560830288"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#A1C9EA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    flexDirection:"column"
  },
  title: {
    fontSize: 20,
    flex:2,
    marginBottom:10
  },
  areaCompartilharFrase:{
    flexDirection:"row",
    flex:1
  }
});

export default App;