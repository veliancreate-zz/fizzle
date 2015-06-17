var $ = function( selector ) {

  ////////////////////
  // Your code here //
  ////////////////////


  //reg expressions taken from Sizzle in the JQuery source code.
  var elements = [];
  var regEx = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
  var tagsRegEx = /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/;
  var match;

  //non-complex selectors - IE8 does not support getElementsByClassName. 
  //There are solutions on the internet, but I dont have an IE8 emulator to test them in the console.
  function regularMatchers( match ){
    var elem;
    if ( (elem = match[1]) ) { elements.push( document.getElementById( elem ) ); } 
    if ( match[2] ) { elements = document.getElementsByTagName( selector ); } 
    if ( (elem = match[3]) ) { elements = document.getElementsByClassName( elem ); }
  }

  //more complicated selectors
  function deeperMatchers( match ){
    var tags = document.getElementsByTagName( match[1] );
    for( i = 0; i < tags.length; i++ ){
      if( tags[i].id){ elements.push( tags[i] ); }
    }
  }

  if ( match = regEx.exec( selector ))  {
    regularMatchers( match )
  } else {
    match = tagsRegEx.exec( selector );
    deeperMatchers( match )
  }
  return elements;
}

