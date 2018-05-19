import React,{Component} from 'react';

result=[];
export default class Calculator extends Component{

  One(){
    var one = 1;
    valuesUsed.push(one);
  }
  Two(){
    var two = 2;
    valuesUsed.push(two);
  }
  Three(){
    var three = 3;
    valuesUsed.push(three);
  }
  Four(){
    var four = 4;
    valuesUsed.push(four);
  }
  Five(){
    var five = 5;
    valuesUsed.push(five);
  }
  Six(){
    var six = 6;
    valuesUsed.push(six);
  }
  Seven(){
    var seven = 7;
    valuesUsed.push(seven);
  }
  Eight(){
    var eight = 8;
    valuesUsed.push(eight);
  }
  Nine(){
    var nine = 9;
    valuesUsed.push(nine);
  }

  addValue(){
      var firstNumber = valuesUsed.join("");
      numbersToCalculate.push(firstNumber);
      console.log(firstNumber);
      var additionOperation = "+";
      operationUsed.push(additionOperation);
    for( i=0; i < valuesUsed.length ; i++){
      valuesUsed.splice(i);
    }
  }

  divideValue(){
    var firstNumber = valuesUsed.join("");
    numbersToCalculate.push(firstNumber);
    console.log(firstNumber);
    var divisionOperation = "/";
    operationUsed.push(divisionOperation);
    for (var i = 0; i < valuesUsed.length; i++) {
      valuesUsed.splice(i);
    }
  }

  multiplyValue(){
    var firstNumber = valuesUsed.join("");
    numbersToCalculate.push(firstNumber);
    console.log(firstNumber);
    var multiplyOperation = "*";
    operationUsed.push(multiplyOperation);
    for (var i = 0; i < valuesUsed.length; i++) {
      valuesUsed.splice(i);
    }
  }

  equals(){
      var secondNumber = valuesUsed.join("");
      console.log(secondNumber);
      numbersToCalculate.push(secondNumber);
   if(operationUsed[0]== "+"){
      var finalResult = Number(numbersToCalculate[0]) + Number(numbersToCalculate[1]);
      console.log(finalResult);
      result.push(finalResult);
      this.refs.test.innerHTML = `${result[0]}` ;
      for (var i = 0; i < operationUsed.splice.length; i++) {
        operationUsed.splice(i);
      }
    }
    if(operationUsed[0]=="/"){
      var finalResult = Number(numbersToCalculate[0]) / Number(numbersToCalculate[1]);
      console.log(finalResult);
      result.push(finalResult);
      this.refs.test.innerHTML = `${result[0]}` ;
      for (var i = 0; i < operationUsed.splice.length; i++) {
        operationUsed.splice(i);
      }
    }
    if(operationUsed[0]=="*"){
      var finalResult = Number(numbersToCalculate[0]) * Number(numbersToCalculate[1]);
      console.log(finalResult);
      result.push(finalResult);
      this.refs.test.innerHTML = `${result[0]}` ;
      for (var i = 0; i < operationUsed.splice.length; i++) {
        operationUsed.splice(i);
      }
    }
}

  render(){
    valuesUsed =[];
    numbersToCalculate=[];
    operationUsed=[];
    result= [];
    return(
      <div>
        <button ref="1" onClick={this.One.bind(this)}> 1 </button>
        <button ref="2" onClick={this.Two.bind(this)}> 2 </button>
        <button ref="3" onClick={this.Three.bind(this)}> 3 </button>
        <button ref="4" onClick={this.Four.bind(this)}> 4 </button>
        <button ref="5" onClick={this.Five.bind(this)}> 5 </button>
        <button ref="6" onClick={this.Six.bind(this)}> 6 </button>
        <button ref="7" onClick={this.Seven.bind(this)}> 7 </button>
        <button ref="8" onClick={this.Eight.bind(this)}> 8 </button>
        <button ref="9" onClick={this.Nine.bind(this)}> 9 </button>
        <button ref="addition" onClick={this.addValue.bind(this)}> + </button>
        <button ref="division" onClick={this.divideValue.bind(this)}> / </button>
        <button ref="multiplication" onClick={this.multiplyValue.bind(this)}> * </button>
        <button ref="equals" onClick={this.equals.bind(this)}> = </button>
        <p ref="test"> </p>
      </div>
    )
  }
}
