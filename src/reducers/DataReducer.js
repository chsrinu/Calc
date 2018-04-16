import { actionCreators } from '../constants';

const INITIAL_STATE = {
  expression: '0',
  savedValues: [],
  customizedValue: '',
  evaluated: false,
};
export default (state = INITIAL_STATE, action) => {
  //console.log('type', action.type);
  switch (action.type) {
    case actionCreators.ACTION_BUTTON_CLICKED:
      //console.log(action.payload);
      if(state.evaluated && !isSymbol(action.payload)) {
          return { ...state,
          evaluated: false,
          expression: getExpression('', action.payload)
         };
      }
      if (state.expression.length > 15)//let it reset automatically if length exceeds 15
      return { ...state,
      evaluated: false,
      savedValues: [],
      customizedValue: '',
     };
      return { ...state,
        evaluated: false,
        expression: getExpression(state.expression, action.payload)
       };

    case actionCreators.ACTION_EVALUATE:
      state.savedValues.pop();
      let result = evaluateExpression(state.savedValues);
      return { ...state,
        evaluated: true,
        savedValues: [],
        customizedValue: result,
        expression: result };
    case actionCreators.ACTION_FOUND_NUMBER:
    var temp;
    if(state.evaluated){
      temp = '';
      temp = temp + action.payload;
      return { ...state, customizedValue: temp }
    }else{
      temp = state.customizedValue;
      temp = temp + action.payload;
      console.log(state);
      return { ...state, customizedValue: temp }
    }
    case actionCreators.ACTION_FOUND_SYMBOL:
      var temp = state.savedValues;
      if(state.customizedValue && Number(state.customizedValue) !== 0){
      temp.push(Number(state.customizedValue));
      temp.push(action.payload);
      }
      console.log(temp);
      return { ...state, customizedValue: '', savedValues: temp };
    /*case actionCreators.ACTION_CLEAR :
      return { ...INITIAL_STATE };*/
    default: return { ...state };
  }
};
function getExpression(expr, currentValue) {

  //if((expr === '0' && isSymbol(currentValue)) ||(isSymbol(expr[expr.length-1]) && isSymbol(currentValue)))
  console.log('in getExpression',expr, currentValue);
  if(expr === '0') {
    if(isSymbol(currentValue)){//prevents symbols at start
      console.log(' expr with 0 is followed by symbol or consecutive symbols');
      return expr;
    }
    else if(currentValue !== '.')//resets the default value to new number
      return currentValue;
    return expr + '' + currentValue;s
  }
  if((isSymbol(expr[expr.length-1])) && (isSymbol(currentValue)))
    return expr;//prevents continuous operators{
  console.log('everything looks good');
  return expr + '' + currentValue;
  }
/*function evaluateExpression(expr) {
  expr.pop();//remove the =
  //expr.push(finalValue);
  // order = ['/', '*', '+', '-'];

      while(expr.indexOf('/') != -1){
        let temp = expr.indexOf('/');
        console.log('index', expr, temp);
        expr[temp-1] = expr[temp-1] / expr[temp+1];
        expr.splice(temp,2);
      }
      while(expr.indexOf('*')!=-1){
        let temp = expr.indexOf('*');
        console.log('index', expr, temp);
        expr[temp-1] = expr[temp-1] * expr[temp+1];
        expr.splice(temp,2);
      }
      while(expr.indexOf('-')!=-1){
        let temp = expr.indexOf('-');
        console.log('index', expr, temp);
        expr[temp-1] = expr[temp-1] - expr[temp+1];
        expr.splice(temp,2);
      }
      while(expr.indexOf('+')!=-1){
        let temp = expr.indexOf('+');
        console.log('index', expr, temp);
        expr[temp-1] = expr[temp-1] + expr[temp+1];
        expr.splice(temp,2);
      }
    return Number(expr);
  }*/
  function isSymbol(sym){
    if(sym =='+'|sym == '-'|sym == '/'|sym=='*'){
        return true;
    }
    return false;
  }
  function evaluateExpression(expr){
    var order = ['/', '*', '-', '+'];
    if(expr.length <= 1)
      return expr;
    else{
      for(var i in order){
        if(expr.indexOf(order[i])!=-1){
          //console.log('performing',order[i],i);
          let temp = expr.indexOf(order[i]);
          //console.log(temp,i);
          switch(order[i]){
            case '/':
              expr[temp-1] = expr[temp-1] / expr[temp+1];
              break;
            case '*':
              expr[temp-1] = expr[temp-1] * expr[temp+1];
              break;
            case '-':
              expr[temp-1] = expr[temp-1] - expr[temp+1];
              break;
            case '+':
              expr[temp-1] = expr[temp-1] + expr[temp+1];
              break;
          }
          expr.splice(temp, 2);
          return evaluateExpression(expr);
        }
      }
    }
  }
