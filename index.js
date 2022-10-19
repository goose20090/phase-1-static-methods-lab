class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
    
  }

  static titleize (string){
    // let capitalizeStringInStatic = this.capitalize(string)
    let sentenceArr = string.split(" ")
    let capitalizedSentenceArr = sentenceArr.map((word, index)=> {
      if (index === 0){
        return this.capitalize(word)
      }
      else if (word === "of"|| word === 'the' || word === "a" || word === 'an' || word === 'but'|| word === 'of'|| word === 'and'|| word === 'for' || word ==='at'|| word ==='by'|| word === 'from'){
        return word
      }
      else return this.capitalize(word)
    })

    let capitalizedString = capitalizedSentenceArr.join(" ")

    // let newString = this.capitalize(sentenceArr[0].this.capitalize()) + sentenceArr.slice(1).join(" ")
    return capitalizedString
  }
}

// if (word == 'the' || "a" || 'an' || 'but'|| 'of'|| 'and'|| 'for' || 'at'|| 'by'|| 'from'){