function spellChecker(text){
  var correctlySpeltWords = ['a', 'these', 'spelt']

  var originalSentence = text.split(' ')

  var finalWord = originalSentence[originalSentence.length -1]

  var newSentence = "";

  originalSentence.forEach((word, i) => {
    if(correctlySpeltWords.includes(word.toLowerCase())){
      newSentence += word
    } else {
      newSentence += "~" + word + "~"
    }
    if(finalWord !== word){
      newSentence += " "
    }
  });

  return newSentence;
}
