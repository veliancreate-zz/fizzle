var $ = function( selector ) {

  ////////////////////
  // Your code here //
  ////////////////////


  var elements = [];
  var regEx = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
  var tagsRegEx = /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/;
  var match, elem, tags;

  if ( match = regEx.exec( selector ))  {
    if ( (elem = match[1]) ) {
      elements.push(document.getElementById( elem ));
    } else if ( match[2] ) {
      elements = document.getElementsByTagName( selector );
    } else if ( (elem = match[3]) ) {
      elements = document.getElementsByClassName( elem );
    }
  } else {
    match = tagsRegEx.exec(selector);
    tags = document.getElementsByTagName(match[1]);
    for(i = 0; i < tags.length; i++){
      if(tags[i].id){  
        elements.push(tags[i]);
        return elements;
      }
    }
  }
  return elements;
}

