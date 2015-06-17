var $ = function( selector ) {

  ////////////////////
  // Your code here //
  ////////////////////

  var regEx = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
  var results = [];
  var match, elem;

  var finders = {
    ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
    CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
    TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/
  };  

  function deeperMatch(){
    match = []
    match.push(finders.ID.exec(selector));
    match.push(finders.CLASS.exec(selector));
    match.push(finders.TAG.exec(selector));
    return match;
  }

  if ( match = regEx.exec( selector ))  {
    if ( (elem = match[1]) ) {
      results.push(document.getElementById( elem ));
    } else if ( match[2] ) {
      results = document.getElementsByTagName( selector );
    } else if ( (elem = match[3]) ) {
      results = document.getElementsByClassName( elem );
    }
  } else {
    match = deeperMatch();
    var tags = document.getElementsByTagName(match[2][1]);
    for(i = 0; i < tags.length; i++){
      if(tags[i].id){  
        results.push(tags[i]);
        return results;
      }
    }
  }
  return results;
}

