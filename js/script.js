const inputText = document.getElementById('text-in');
const outputText = document.getElementById('text-out');

function textFormat(){
  return document.querySelector(
    'input[name="select-text-format"]:checked').value;
}

const inputTextHandler = function(x){
  updateText(x.target.value);
}

function radioButtonHandler(){
  updateText(inputText.value);
}

inputText.addEventListener('input', inputTextHandler);

function updateText(text){
  switch(textFormat()){
    case 'all-caps':
      outputText.value = toTitleCase(text);
      break;
    case 'all-small':
      outputText.value = text.toLowerCase();
      break;
    case 'true-title':
      outputText.value = toTrueTitleCase(text);
      break;
  }
}