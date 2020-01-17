import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Grid, Col } from 'native-base';
import Speedometer from 'react-native-speedometer-chart';
import firebase from 'firebase'
import AnwesController from '../controller/anwescontroller';
import Funcoes from '../utils/funcoes';


export default class Main extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props);



    this.state = {
      nextdate: ''
    };

    this.state = {
      resulthpv: '',
      txRiscoHpv: ''
    };




  }

  componentDidMount() {
    var controller = new AnwesController();


    var self = this;
    controller.getDatas(
      function (error) {
        self.setState({
          nextdate: "Você precisa fazer o exame Papanicolau"
        })
      },
      function (succes) {
        var funcoes = new Funcoes();

        var idade = funcoes.idade(succes);

        console.log(idade);


        var d = funcoes.addDate(1095, succes)
        self.setState({
          nextdate: d.toLocaleDateString()
        })
      },
      "Data_ult_papan");

    controller.getDatas(
      function (error) {
        self.setState({
          resultHpv: "Você ainda não tomou a vacina do HPV, procure a ubs mais próxima para tomar."
        })
      },
      function (succes) {


        if (succes == "N") {
          self.setState({
            resultHpv: "Você ainda não tomou a vacina do HPV, procure a ubs mais próxima para tomar.",
            txRiscoHpv: 0
          })

        } else {

          self.setState({
            resultHpv: "Parabéns você esta em dia com a vacina contra HPV.",
            txRiscoHpv: 20


          })

          mountGauge();

        }



      },
      "Vac_Hpv");

    function mountGauge() {


      <Speedometer
        value={50}
        totalValue={150}
        size={250}
        outerColor="#d3d3d3"
        internalColor="#ff0000"
        showText
        text="50.00"
        textStyle={{ color: 'green' }}
        showLabels
        labelStyle={{ color: 'blue' }}
        showPercent
        percentStyle={{ color: 'red' }}
      />





    }






  }

  render() {
    return (

      <Container style={styles.container}>
        <Image
          style={{ height: 100, width: 75 }}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />

        <Content />




        <Grid style={styles.styleGrid1}>
          <Col style={styles.styleCol}>
            <Text> A data Prevista para o proximo exame é: {this.state.nextdate}</Text>

          </Col>


          <Col style={styles.styleCol}>
            <Text> {this.state.resultHpv} </Text>

          </Col>
        </Grid>
        
    <Speedometer
    value={50}
    totalValue={150}
    size={250}
    outerColor="#d3d3d3"
    internalColor="#ff0000"
    showText
    text="50.00"
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    showPercent
    percentStyle={{ color: 'red' }}
  />




        <Footer>
          <FooterTab>
            <Button active vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home" />
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
              <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',


  },




  textFooter: {
    fontSize: 8,

  },


  styleGrid1: {
    marginTop: "-60%",

  },
  styleGrid2: {

    marginTop: "-20%",
  },

  styleCol: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    height: 100
  },






})