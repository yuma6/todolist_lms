// jsで配列リテラルはどのように記述するでしょうか。また、オブジェクトリテラルはどのように記述するでしょうか。
//配列
const array1 = ['value11','value12','value13'],
//オブジェクト
const object1 = {
    property11:'value11ob',
    property12:'value12ob',
    property13:'value13ob'
},

// jsで「配列の配列」を書いてください。これを二重配列と言います。
const array21 =['111','222','333'],//配列
const array22 =['aaa','bbb','ccc'],
const array23 =['123','456','789'],
const array2 = [array21,array22,array23],//配列の配列

// jsで「オブジェクトを値に持つオブジェクト」を書いてください。
const object21 = {property211:'value211ob',property212:'value212ob',property213:'value213ob'},//オブジェクト
const object22 = {property221:'value221ob',property222:'value222ob',property223:'value223ob'},
const object23 = {property231:'value231ob',property232:'value232ob',property233:'value233ob'},
const object2 = {property21:object21,property22:object22,property23:object23},//オブジェクトを値に持つオブジェクト

// jsで「配列を値に持つオブジェクトの配列」を書いてください。
const object31 = {property311:array21,property312:array22,property313:array23},//配列を値に持つオブジェクト
const object32 = {property321:array21,property322:array22,property323:array23},
const object33 = {property331:array21,property332:array22,property333:array23},
const array3 = [object31,object32,object33],//配列を値に持つオブジェクトの配列

// jsで「オブジェクトの配列を値に持つオブジェクト」を書いてください。
const array41 =[object21,object22,object23],//オブジェクトの配列
const array42 =[object21,object22,object23],
const array43 =[object21,object22,object23],
const object4 ={property41:array41,property42:array42,property43:array43}//オブジェクトの配列を値に持つオブジェクト