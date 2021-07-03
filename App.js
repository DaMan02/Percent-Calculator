import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class App extends Component {

  state = {
    percent1: '',
    of1: '',
    result1: 0,
    percent2: '',
    of2: '',
    result2: 0,
    num1: '',
    num2: '',
    result3: 0
  }

  onChangePer1(t) {
    this.setState({ percent1: t })
  }

  onChangeOf1(t) {
    this.setState({ of1: t })
  }

  onChangePer2(t) {
    this.setState({ percent2: t })
  }

  onChangeOf2(t) {
    this.setState({ of2: t })
  }


  onChangeNum1(t) {
    this.setState({ num1: t })
  }
  onChangeNum2(t) {
    this.setState({ num2: t })
  }

  onReset1() {
    this.setState({
      percent1: '',
      of1: '',
      result1: 0,
    })
  }

  onReset2() {
    this.setState({
      percent2: '',
      of2: '',
      result2: 0,
    })
  }

  onReset3() {
    this.setState({
      num1: '',
      num2: '',
      result3: 0
    })
  }

  calcIncrease() {
    // console.log('------------------')
    let ofVal = parseFloat(this.state.of1);
    let perc = this.state.percent1 / 100;
    let res = perc * ofVal;       //console.log(res); console.log(typeof ofVal)
    res = res + ofVal;           // console.log(res)
    this.setState({ result1: res.toFixed(4) })
  }

  calcDecrease() {
    // console.log('------------------')
    let ofVal = parseFloat(this.state.of2);
    let perc = this.state.percent2 / 100;
    let res = perc * ofVal;       //console.log(res); console.log(typeof ofVal)
    res = ofVal - res;           // console.log(res)
    this.setState({ result2: res.toFixed(4) })
  }

  calcPer() {
    let num2Val = parseFloat(this.state.num2)
    let num1Val = parseFloat(this.state.num1)

    let res = 0.0;
    if (num2Val >= num1Val)
      res = num2Val / num1Val;
    else res = num1Val / num2Val;
    res = (res - 1) * 100;
    this.setState({ result3: res.toFixed(4) })
  }

  renderDivider() {
    return (
      <View style={{ marginVertical: 12, height: 0.8, backgroundColor: 'black' }}></View>
    )
  }

  render() {
    return (
      <View style={styles.master} >
        <Text style={{ ...styles.font, textAlign: 'center' }}>Percent Calculator</Text>
        <View style={styles.row}>
          <Text style={{ ...styles.font, fontSize: 40, color: 'green' }}>+</Text>
          <TextInput
            style={styles.input}
            onChangeText={(t) => this.onChangePer1(t)}
            value={this.state.percent1}
            placeholder="0.0%"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <Text style={{ ...styles.font, paddingHorizontal: 6, flex: 0.4 }}>%</Text>
          <TextInput
            style={styles.input2}
            onChangeText={(t) => this.onChangeOf1(t)}
            value={this.state.of1}
            placeholder="0.0"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <TouchableOpacity style={{ alignItems: 'center' }}
            onPress={() => this.calcIncrease()} activeOpacity={0.6}>
            <Text style={styles.equals}>=</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          ...styles.font, marginStart: 14, textAlignVertical: 'center',
          borderWidth: 1, borderRadius: 6
        }}>{this.state.result1}</Text>
        <TouchableOpacity onPress={() => this.onReset1()} style={{ marginHorizontal: 20, width: 60, marginVertical: 4 }}>
          <Text
            style={{
              padding: 2, borderWidth: 1, borderRadius: 4, textAlign: 'center', color: 'grey', borderColor: 'grey'
            }}>Clear</Text>
        </TouchableOpacity>
        {this.renderDivider()}

        {/* subtraction */}

        <View style={styles.row}>
          <Text style={{ ...styles.font, fontSize: 40, color: 'red' }}>−</Text>
          <TextInput
            style={styles.input}
            onChangeText={(t) => this.onChangePer2(t)}
            value={this.state.percent2}
            placeholder="0.0%"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <Text style={{ ...styles.font, marginHorizontal: 6, flex: 0.4 }}>%</Text>
          <TextInput
            style={styles.input2}
            onChangeText={(t) => this.onChangeOf2(t)}
            value={this.state.of2}
            placeholder="0.0"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <TouchableOpacity style={{ alignItems: 'center' }}
            onPress={() => this.calcDecrease()} activeOpacity={0.6}>
            <Text style={styles.equals}>=</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          ...styles.font, marginStart: 14, borderWidth: 1, textAlignVertical: 'center',
          borderRadius: 6
        }}>{this.state.result2}</Text>
        <TouchableOpacity onPress={() => this.onReset2()} style={{ marginHorizontal: 20, width: 60, marginVertical: 4 }}>
          <Text
            style={{
              padding: 2, borderWidth: 1, borderRadius: 4, textAlign: 'center', color: 'grey', borderColor: 'grey'
            }}>Clear</Text>
        </TouchableOpacity>
        {this.renderDivider()}
        {/* percent */}

        <View style={styles.row}>
          <TextInput
            style={styles.input2}
            onChangeText={(t) => this.onChangeNum1(t)}
            value={this.state.num1}
            placeholder="0.0"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <Text style={{ ...styles.font, marginHorizontal: 6, flex: 1 }}>~</Text>
          <TextInput
            style={styles.input2}
            onChangeText={(t) => this.onChangeNum2(t)}
            value={this.state.num2}
            placeholder="0.0"
            autoCompleteType='off'
            keyboardType="numeric"
          />
          <TouchableOpacity style={{ alignItems: 'center' }}
            onPress={() => this.calcPer()} activeOpacity={0.6}>
            <Text style={styles.equals}>%</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          ...styles.font, marginStart: 14, borderWidth: 1, textAlignVertical: 'center',
          borderRadius: 6
        }}>{this.state.result3}</Text>
        <TouchableOpacity onPress={() => this.onReset3()} style={{ marginHorizontal: 20, width: 60, marginVertical: 4 }}>
          <Text
            style={{
              padding: 2, borderWidth: 1, borderRadius: 4, textAlign: 'center', color: 'grey', borderColor: 'grey'
            }}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  master: {
    padding: 8,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1
  },
  input: {
    height: 38,
    margin: 12,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 6,
    width: 66,
  },
  input2: {
    height: 38,
    margin: 12,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 6,
    width: 114,
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  equals: {
    backgroundColor: 'brown',
    color: 'white',
    height: 30,
    textAlignVertical: 'center',
    width: 60,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 6
  }
});

export default App;
