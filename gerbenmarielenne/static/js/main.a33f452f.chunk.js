(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],[,,,,,,,,function(t,e,i){t.exports=i.p+"static/media/close-circle-outline.64600fb0.svg"},,function(t,e,i){t.exports=i(19)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var o=i(0),n=i.n(o),a=i(7),l=i.n(a),d=(i(15),i(1)),r=i(2),c=i(3),s=i(4),u=(i(16),i(5)),p=i.n(u);function g(){return null===window.localStorage.getItem("foundLocations")&&window.localStorage.setItem("foundLocations","[]"),JSON.parse(window.localStorage.getItem("foundLocations")||"")}function m(){window.localStorage.setItem("foundLocations","[]")}i(17);var k,h=i(8),v=i.n(h);!function(t){t[t.Open=0]="Open",t[t.Hidden=1]="Hidden",t[t.Peek=2]="Peek"}(k||(k={}));var f=function(t){Object(s.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(d.a)(this,i);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={modalState:t.props.modalState||k.Open},t}return Object(r.a)(i,[{key:"render",value:function(){var t,e=this,i="modal";i+=" modal"+this.state.modalState.toString(),i+=" modal"+(null===(t=this.props.modalState)||void 0===t?void 0:t.toString())+"intro";var o=null;return this.state.modalState===k.Peek||this.props.hideClose||(o=n.a.createElement("img",{onClick:function(){return e.setState({modalState:k.Hidden})},src:v.a,className:"modalclose",alt:"logo"})),n.a.createElement("div",{className:i,style:{zIndex:this.props.modalState===k.Open?100:50}},n.a.createElement("div",{className:"modaltop"},n.a.createElement("h1",{onClick:function(){return e.setState({modalState:e.state.modalState===k.Open?k.Peek:k.Open})}},this.props.title),o),this.props.children)}},{key:"onmodalclick",value:function(){var t=document.getElementById("modal");null===t||void 0===t||t.classList.remove("element-animation"),null===t||void 0===t||t.classList.add("element-animation-reverse")}}]),i}(n.a.Component),w=(i(18),function(t){Object(s.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(d.a)(this,i);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).modals=[],t}return Object(r.a)(i,[{key:"render",value:function(){var t=this;this.modals=this.modals.filter((function(t){var e;return(null===(e=t.state)||void 0===e?void 0:e.modalState)!==k.Hidden}));var e=g().map((function(e){return n.a.createElement("li",{key:e.id,onClick:function(){if(void 0===e)return null;var i;0!==e.coordinates.latitude&&(null===(i=t.props.map)||void 0===i||i.easeTo({center:[e.coordinates.longitude,e.coordinates.latitude-.01],zoom:13.5},[e.coordinates.longitude,e.coordinates.latitude-.01]));t.modals.push(n.a.createElement(f,{key:Date.now(),title:e.title,modalState:k.Open},n.a.createElement("p",null,e.description),n.a.createElement("a",{className:"modal-link",href:e.link,target:"blank"},n.a.createElement("p",{className:"modal-link-container"},"Open secret")))),t.forceUpdate()}},e.title)})).concat([n.a.createElement("li",{key:"debug",onClick:function(){t.modals.push(n.a.createElement(f,{key:"debug",title:"Debug menu",modalState:k.Open},n.a.createElement("div",{className:"modal-link",onClick:function(){var e=t.props.debugThing;m(),[{id:"groen",title:"Albert Heijn",description:"Its an Albert Heijn. Gotta debug somehow",coordinates:{latitude:51.9915572,longitude:4.3276931},link:"https://nntn.nl"},{id:"location-78",title:"Het begin",description:"",coordinates:{latitude:51.610239,longitude:4.791088},link:""},{id:"location-91",title:"Het begin van de relatie",description:"",coordinates:{latitude:51.629087,longitude:4.838759},link:""},{id:"location-2",title:"51.642.524",description:"",coordinates:{latitude:51.642524,longitude:4.851408},link:""},{id:"location-4",title:"51.639.249",description:"",coordinates:{latitude:51.639249,longitude:4.87617},link:""},{id:"location-niet-87",title:"51.656.784",description:"",coordinates:{latitude:51.656784,longitude:4.862427},link:""},{id:"location-1",title:"51.676.249",description:"",coordinates:{latitude:51.676249,longitude:4.865101},link:""},{id:"location-29",title:"Let's play a game...",description:"Een pauzemomentje halverwege de route:<br/>Tijd om jullie bouwkunsten op de proef te stellen!",coordinates:{latitude:51.665229,longitude:4.93125},link:""},{id:"location-28",title:"5.165.727",description:"",coordinates:{latitude:51.65727,longitude:4.934658},link:""},{id:"location-5",title:"51.646.998",description:"",coordinates:{latitude:51.646998,longitude:4.929589},link:""},{id:"location-3",title:"51.631.251",description:"",coordinates:{latitude:51.631251,longitude:4.911146},link:""},{id:"location-30",title:"51.626.449",description:"",coordinates:{latitude:51.626449,longitude:4.913882},link:""},{id:"location-52",title:"5.160.745",description:"",coordinates:{latitude:51.60745,longitude:4.917798},link:""},{id:"location-40",title:"51.600.171",description:"",coordinates:{latitude:51.600171,longitude:4.894667},link:""},{id:"location-88",title:"51.593.455",description:"",coordinates:{latitude:51.593455,longitude:4.86109},link:""},{id:"location-87",title:"51.586.824",description:"",coordinates:{latitude:51.586824,longitude:4.8564},link:""},{id:"location-86",title:"5.157.739",description:"",coordinates:{latitude:51.57739,longitude:4.842077},link:""},{id:"location-85",title:"51.572.457",description:"",coordinates:{latitude:51.572457,longitude:4.826822},link:""},{id:"location-81",title:"51.587.241",description:"",coordinates:{latitude:51.587241,longitude:4.786334},link:""},{id:"location-80",title:"5.159.292",description:"",coordinates:{latitude:51.59292,longitude:4.787877},link:""}].map((function(t){return e.addToLocalStorage(t)}))}},n.a.createElement("p",{className:"modal-link-container"},"Add all")),n.a.createElement("div",{className:"modal-link",onClick:function(){m()}},n.a.createElement("p",{className:"modal-link-container"},"Remove all")))),t.forceUpdate()}},"Debug options")]);return[n.a.createElement(f,{key:"a",title:"Found locations",modalState:k.Peek,hideClose:!0},n.a.createElement("ul",{className:"itemList"},e))].concat(this.modals)}}]),i}(n.a.Component)),y=i(9),b=i.n(y),E=function(t){Object(s.a)(i,t);var e=Object(c.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var t,e,i,o,a,l=this,d=window.outerWidth,r=window.innerHeight,c=((null===(t=this.state)||void 0===t?void 0:t.newLocations)||[]).map((function(t){return n.a.createElement(f,{key:t.id,title:t.title+" \ud83c\udf89",modalState:k.Peek},n.a.createElement("p",null,t.description),n.a.createElement("a",{className:"modal-link",href:t.link,target:"blank"},n.a.createElement("p",{className:"modal-link-container"},"Open secret")))}));return setTimeout((function(){l.setState({confettiTimeout:!0})}),7e3),[n.a.createElement(b.a,{numberOfPieces:(null===(e=this.state)||void 0===e?void 0:e.confettiTimeout)||0===((null===(i=this.state)||void 0===i||null===(o=i.newLocations)||void 0===o?void 0:o.length)||0)?0:200,width:d,height:r,key:"Confetti"}),n.a.createElement("div",{key:"a",id:"map"}),n.a.createElement(w,{key:"b",map:null===(a=this.state)||void 0===a?void 0:a.map,debugThing:this}),c]}},{key:"componentDidMount",value:function(){try{this.SetupMap(),this.checkForNewLocations()}catch(t){this.logError("Error. App.tsx:30",t)}}},{key:"logError",value:function(t,e){alert(t+" "+JSON.stringify(e,this.replaceErrors)),console.error(e)}},{key:"SetupMap",value:function(){p.a.accessToken="pk.eyJ1IjoibmV3bm90dGFrZW5uYW1lIiwiYSI6ImNrZjhuZzZvZjA2MDUyd3B4MmdkMzhpamEifQ.3p91vKWfOce6fRzddTg_qA";var t=new p.a.Map({container:"map",style:"mapbox://styles/newnottakenname/ckf8o4w885kx21and6jq56h8q",zoom:6,center:[5.55,52.316667]});this.setState({map:t});var e=g();[{id:"groen",title:"Albert Heijn",description:"Its an Albert Heijn. Gotta debug somehow",coordinates:{latitude:51.9915572,longitude:4.3276931},link:"https://nntn.nl"},{id:"location-78",title:"Het begin",description:"",coordinates:{latitude:51.610239,longitude:4.791088},link:""},{id:"location-91",title:"Het begin van de relatie",description:"",coordinates:{latitude:51.629087,longitude:4.838759},link:""},{id:"location-2",title:"51.642.524",description:"",coordinates:{latitude:51.642524,longitude:4.851408},link:""},{id:"location-4",title:"51.639.249",description:"",coordinates:{latitude:51.639249,longitude:4.87617},link:""},{id:"location-niet-87",title:"51.656.784",description:"",coordinates:{latitude:51.656784,longitude:4.862427},link:""},{id:"location-1",title:"51.676.249",description:"",coordinates:{latitude:51.676249,longitude:4.865101},link:""},{id:"location-29",title:"Let's play a game...",description:"Een pauzemomentje halverwege de route:<br/>Tijd om jullie bouwkunsten op de proef te stellen!",coordinates:{latitude:51.665229,longitude:4.93125},link:""},{id:"location-28",title:"5.165.727",description:"",coordinates:{latitude:51.65727,longitude:4.934658},link:""},{id:"location-5",title:"51.646.998",description:"",coordinates:{latitude:51.646998,longitude:4.929589},link:""},{id:"location-3",title:"51.631.251",description:"",coordinates:{latitude:51.631251,longitude:4.911146},link:""},{id:"location-30",title:"51.626.449",description:"",coordinates:{latitude:51.626449,longitude:4.913882},link:""},{id:"location-52",title:"5.160.745",description:"",coordinates:{latitude:51.60745,longitude:4.917798},link:""},{id:"location-40",title:"51.600.171",description:"",coordinates:{latitude:51.600171,longitude:4.894667},link:""},{id:"location-88",title:"51.593.455",description:"",coordinates:{latitude:51.593455,longitude:4.86109},link:""},{id:"location-87",title:"51.586.824",description:"",coordinates:{latitude:51.586824,longitude:4.8564},link:""},{id:"location-86",title:"5.157.739",description:"",coordinates:{latitude:51.57739,longitude:4.842077},link:""},{id:"location-85",title:"51.572.457",description:"",coordinates:{latitude:51.572457,longitude:4.826822},link:""},{id:"location-81",title:"51.587.241",description:"",coordinates:{latitude:51.587241,longitude:4.786334},link:""},{id:"location-80",title:"5.159.292",description:"",coordinates:{latitude:51.59292,longitude:4.787877},link:""}].forEach((function(i){new p.a.Marker({color:e.some((function(t){return i.id===t.id}))?"orange":void 0}).setLngLat([i.coordinates.longitude,i.coordinates.latitude]).addTo(t)}))}},{key:"replaceErrors",value:function(t,e){if(e instanceof Error){var i={};return Object.getOwnPropertyNames(e).forEach((function(t){i[t]=e[t]})),i}return e}},{key:"onPositionUpdate",value:function(t){var e=this,i=t.coords.latitude,o=t.coords.longitude,n=g();[{id:"groen",title:"Albert Heijn",description:"Its an Albert Heijn. Gotta debug somehow",coordinates:{latitude:51.9915572,longitude:4.3276931},link:"https://nntn.nl"},{id:"location-78",title:"Het begin",description:"",coordinates:{latitude:51.610239,longitude:4.791088},link:""},{id:"location-91",title:"Het begin van de relatie",description:"",coordinates:{latitude:51.629087,longitude:4.838759},link:""},{id:"location-2",title:"51.642.524",description:"",coordinates:{latitude:51.642524,longitude:4.851408},link:""},{id:"location-4",title:"51.639.249",description:"",coordinates:{latitude:51.639249,longitude:4.87617},link:""},{id:"location-niet-87",title:"51.656.784",description:"",coordinates:{latitude:51.656784,longitude:4.862427},link:""},{id:"location-1",title:"51.676.249",description:"",coordinates:{latitude:51.676249,longitude:4.865101},link:""},{id:"location-29",title:"Let's play a game...",description:"Een pauzemomentje halverwege de route:<br/>Tijd om jullie bouwkunsten op de proef te stellen!",coordinates:{latitude:51.665229,longitude:4.93125},link:""},{id:"location-28",title:"5.165.727",description:"",coordinates:{latitude:51.65727,longitude:4.934658},link:""},{id:"location-5",title:"51.646.998",description:"",coordinates:{latitude:51.646998,longitude:4.929589},link:""},{id:"location-3",title:"51.631.251",description:"",coordinates:{latitude:51.631251,longitude:4.911146},link:""},{id:"location-30",title:"51.626.449",description:"",coordinates:{latitude:51.626449,longitude:4.913882},link:""},{id:"location-52",title:"5.160.745",description:"",coordinates:{latitude:51.60745,longitude:4.917798},link:""},{id:"location-40",title:"51.600.171",description:"",coordinates:{latitude:51.600171,longitude:4.894667},link:""},{id:"location-88",title:"51.593.455",description:"",coordinates:{latitude:51.593455,longitude:4.86109},link:""},{id:"location-87",title:"51.586.824",description:"",coordinates:{latitude:51.586824,longitude:4.8564},link:""},{id:"location-86",title:"5.157.739",description:"",coordinates:{latitude:51.57739,longitude:4.842077},link:""},{id:"location-85",title:"51.572.457",description:"",coordinates:{latitude:51.572457,longitude:4.826822},link:""},{id:"location-81",title:"51.587.241",description:"",coordinates:{latitude:51.587241,longitude:4.786334},link:""},{id:"location-80",title:"5.159.292",description:"",coordinates:{latitude:51.59292,longitude:4.787877},link:""}].forEach((function(a){if(!n.some((function(t){return a.id===t.id}))){var l;if(e.isCloseTo(a,o,i))e.addToLocalStorage(a),e.setState({newLocations:((null===(l=e.state)||void 0===l?void 0:l.newLocations)||[]).concat([a])});e.state.currentLocation.setLngLat([t.coords.longitude,t.coords.latitude])}}))}},{key:"checkForNewLocations",value:function(){var t=this;if(navigator.geolocation){var e;if(navigator.geolocation.getCurrentPosition((function(e){try{void 0!==t.state.map&&(t.setMapSettings(t.state.map,e),t.addRouteToMap(t.state.map)),t.onPositionUpdate(e)}catch(i){t.logError("Error. App.tsx:88 ",i)}}),(function(e){t.logError("Error getting current location",e)})),0===g().length)this.addToLocalStorage({id:"introduction",coordinates:{latitude:0,longitude:0},description:"Welcome to your present! This website will guide you through a lot of fun memories. Go to the points on the map and have fun!",title:"Introduction",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),this.setState({newLocations:((null===(e=this.state)||void 0===e?void 0:e.newLocations)||[]).concat({id:"introduction",coordinates:{latitude:0,longitude:0},description:"Welcome to your present! This website will guide you through a lot of fun memories. Go to the points on the map and have fun!",title:"Introduction",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})});navigator.geolocation.watchPosition((function(e){return t.onPositionUpdate(e)}),(function(e){t.logError("Error getting watch on location",e)}),{enableHighAccuracy:!0})}else alert("Please allow me to use your location. Pls?")}},{key:"addRouteToMap",value:function(t){t.on("load",(function(){t.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[51.610239,4.791088],[51.611474,4.791369],[51.61302,4.792185],[51.614566,4.793],[51.614138,4.794956],[51.61371,4.796911],[51.613282,4.798867],[51.612854,4.800822],[51.612426,4.802777],[51.611997,4.804732],[51.611569,4.806688],[51.611141,4.808643],[51.611238,4.810843],[51.611335,4.813042],[51.611431,4.815242],[51.611528,4.817441],[51.612681,4.817827],[51.613833,4.818213],[51.615458,4.818084],[51.615229,4.819865],[51.614999,4.821646],[51.614769,4.823427],[51.614539,4.825208],[51.616165,4.826238],[51.617177,4.826753],[51.618136,4.826667],[51.619056,4.82626],[51.619975,4.825852],[51.620428,4.825895],[51.621545,4.827433],[51.622663,4.828972],[51.62378,4.83051],[51.624897,4.832048],[51.626014,4.833586],[51.627132,4.835125],[51.628249,4.836663],[51.629366,4.838201],[51.629087,4.838759],[51.629087,4.838759],[51.628993,4.839177],[51.630372,4.840347],[51.631751,4.841516],[51.633129,4.842686],[51.634508,4.843855],[51.63551,4.844799],[51.636512,4.845743],[51.637514,4.846688],[51.638516,4.847632],[51.639518,4.848576],[51.64052,4.84952],[51.641522,4.850464],[51.642524,4.851408],[51.642524,4.851408],[51.642777,4.851226],[51.643803,4.851269],[51.645126,4.851647],[51.646449,4.852025],[51.646972,4.852298],[51.647235,4.85298],[51.647434,4.85394],[51.647504,4.85608],[51.646529,4.856247],[51.645973,4.856182],[51.645793,4.856719],[51.645607,4.85821],[51.644488,4.857481],[51.644242,4.857384],[51.644116,4.857277],[51.643766,4.857202],[51.643646,4.857019],[51.643024,4.857051],[51.643037,4.858081],[51.643224,4.85821],[51.64317,4.858768],[51.643184,4.859208],[51.642651,4.859508],[51.642884,4.860624],[51.641882,4.861703],[51.64088,4.862781],[51.641086,4.864272],[51.640926,4.866761],[51.64066,4.868467],[51.639968,4.870414],[51.639275,4.872361],[51.639222,4.873016],[51.639388,4.873756],[51.639415,4.874797],[51.639249,4.87617],[51.639249,4.87617],[51.640112,4.875494],[51.640974,4.874818],[51.641836,4.874142],[51.642698,4.873466],[51.643377,4.875044],[51.644056,4.876621],[51.645161,4.878423],[51.64618,4.87793],[51.647198,4.877436],[51.647558,4.877082],[51.646712,4.874797],[51.646328,4.872834],[51.645943,4.87087],[51.645559,4.868907],[51.645174,4.866943],[51.645121,4.865055],[51.644935,4.86307],[51.645334,4.862298],[51.645407,4.861708],[51.645274,4.861697],[51.645347,4.860656],[51.646353,4.860699],[51.646819,4.860528],[51.64825,4.860509],[51.649682,4.86049],[51.651113,4.860471],[51.652544,4.860452],[51.653203,4.86086],[51.654308,4.861617],[51.655412,4.862373],[51.656784,4.862427],[51.656784,4.862427],[51.657609,4.862394],[51.657862,4.861386],[51.658155,4.86115],[51.659167,4.861493],[51.660178,4.861836],[51.660444,4.862266],[51.661509,4.862593],[51.662574,4.86292],[51.662787,4.862791],[51.663789,4.863194],[51.66479,4.863596],[51.665123,4.864004],[51.666585,4.864602],[51.668047,4.8652],[51.668223,4.865377],[51.66838,4.865393],[51.669331,4.864545],[51.670574,4.864296],[51.671817,4.864047],[51.673344,4.864219],[51.674871,4.86439],[51.676249,4.865101],[51.676249,4.865101],[51.676973,4.865559],[51.677791,4.866428],[51.678609,4.867297],[51.678723,4.869432],[51.678576,4.87072],[51.678546,4.873064],[51.678516,4.875408],[51.678683,4.877951],[51.679821,4.87778],[51.680958,4.877608],[51.681004,4.878337],[51.680565,4.879759],[51.680126,4.881181],[51.68138,4.881578],[51.682634,4.881974],[51.682834,4.881567],[51.682914,4.881577],[51.68304,4.882286],[51.682933,4.882843],[51.682172,4.88375],[51.68141,4.884657],[51.680925,4.886041],[51.680439,4.887425],[51.679954,4.888809],[51.679468,4.890193],[51.679481,4.891158],[51.679069,4.892703],[51.678656,4.894248],[51.678809,4.895868],[51.679025,4.898062],[51.679241,4.900256],[51.679241,4.900256],[51.679348,4.902509],[51.678989,4.905267],[51.679009,4.908131],[51.678896,4.91047],[51.678789,4.910642],[51.677815,4.911425],[51.67684,4.912208],[51.675999,4.912745],[51.675157,4.913281],[51.674651,4.914193],[51.674545,4.914998],[51.674391,4.915255],[51.673919,4.91533],[51.673833,4.915534],[51.673793,4.91592],[51.673507,4.916028],[51.67354,4.916489],[51.674897,4.91621],[51.67507,4.916339],[51.67515,4.917251],[51.674598,4.919016],[51.674046,4.920781],[51.67348,4.923377],[51.673041,4.924407],[51.672442,4.924847],[51.671344,4.925265],[51.670057,4.925947],[51.668769,4.926628],[51.668024,4.928677],[51.667558,4.929396],[51.667345,4.930319],[51.667066,4.93049],[51.66664,4.930372],[51.665149,4.930598],[51.665229,4.93125],[51.665229,4.93125],[51.66477,4.931542],[51.663922,4.931789],[51.663275,4.931518],[51.662561,4.932318],[51.661552,4.932606],[51.660218,4.933175],[51.659191,4.933344],[51.658595,4.934262],[51.65727,4.934658],[51.65727,4.934658],[51.657026,4.934637],[51.655922,4.932947],[51.655482,4.932668],[51.655163,4.932759],[51.65479,4.932615],[51.653925,4.932813],[51.653539,4.932631],[51.652499,4.932843],[51.651459,4.933054],[51.650713,4.933398],[51.650646,4.930952],[51.649994,4.928763],[51.648496,4.929176],[51.646998,4.929589],[51.646998,4.929589],[51.646772,4.929042],[51.64603,4.928114],[51.645287,4.927185],[51.644545,4.926256],[51.643803,4.925327],[51.643061,4.924399],[51.642318,4.92347],[51.641576,4.922541],[51.640833,4.921612],[51.640091,4.920684],[51.639348,4.919755],[51.638606,4.918826],[51.637864,4.917897],[51.637122,4.916969],[51.636379,4.91604],[51.635637,4.915111],[51.634894,4.914182],[51.633822,4.91297],[51.632537,4.912058],[51.631251,4.911146],[51.631251,4.911146],[51.629593,4.910159],[51.628494,4.910406],[51.627395,4.910653],[51.626569,4.912713],[51.626449,4.913882],[51.626449,4.913882],[51.626463,4.914957],[51.626676,4.916352],[51.62711,4.917447],[51.627031,4.917704],[51.626072,4.917511],[51.625899,4.91735],[51.625806,4.917296],[51.624082,4.916771],[51.622762,4.916245],[51.62169,4.915784],[51.620465,4.915253],[51.619998,4.914878],[51.619452,4.914245],[51.618959,4.913494],[51.618249,4.9125],[51.617676,4.911889],[51.61697,4.911481],[51.616455,4.911483],[51.615842,4.911655],[51.615229,4.91217],[51.61401,4.91328],[51.613103,4.91415],[51.612195,4.91502],[51.611568,4.915621],[51.610309,4.916554],[51.609371,4.917137],[51.608433,4.917719],[51.60745,4.917798],[51.60745,4.917798],[51.606557,4.917948],[51.605465,4.918302],[51.604372,4.918656],[51.603432,4.916403],[51.602492,4.91415],[51.601799,4.913313],[51.600733,4.911511],[51.60118,4.91002],[51.601626,4.908528],[51.601806,4.907069],[51.601986,4.90561],[51.603172,4.90355],[51.603479,4.90355],[51.604332,4.901726],[51.603945,4.901791],[51.603639,4.902241],[51.602772,4.902606],[51.602173,4.900825],[51.601573,4.899044],[51.600973,4.897263],[51.600373,4.895482],[51.600171,4.894667],[51.600171,4.894667],[51.600123,4.89451],[51.599603,4.892926],[51.599135,4.891539],[51.598666,4.890152],[51.598034,4.88826],[51.597402,4.886368],[51.596878,4.884591],[51.596686,4.882461],[51.596494,4.880331],[51.596869,4.879085],[51.596916,4.877545],[51.596963,4.876004],[51.595982,4.87605],[51.594629,4.876149],[51.593658,4.876084],[51.593663,4.874228],[51.593667,4.872372],[51.593686,4.870609],[51.593705,4.868845],[51.593765,4.867189],[51.593825,4.865532],[51.5935,4.862796],[51.593455,4.86109],[51.593455,4.86109],[51.592379,4.860981],[51.591343,4.860852],[51.590782,4.860026],[51.589631,4.858264],[51.589217,4.857981],[51.588969,4.857556],[51.588798,4.855937],[51.588566,4.855533],[51.587152,4.856036],[51.586824,4.8564],[51.586824,4.8564],[51.586334,4.854698],[51.585671,4.853092],[51.584837,4.851022],[51.584201,4.849435],[51.583486,4.848512],[51.582569,4.848166],[51.581717,4.847661],[51.580663,4.846069],[51.57964,4.844449],[51.578242,4.842886],[51.577487,4.842062],[51.57739,4.842077],[51.57739,4.842077],[51.577083,4.840679],[51.57673,4.839188],[51.576376,4.837697],[51.576096,4.837525],[51.575269,4.838373],[51.574442,4.83922],[51.574042,4.83782],[51.573642,4.83642],[51.573242,4.83502],[51.572842,4.83362],[51.572242,4.832654],[51.571042,4.831967],[51.571769,4.830433],[51.572495,4.828899],[51.572457,4.826822],[51.572457,4.826822],[51.57246,4.825565],[51.572381,4.823353],[51.572302,4.82114],[51.57288,4.818877],[51.573457,4.816614],[51.573941,4.815216],[51.574425,4.813818],[51.574814,4.812317],[51.575203,4.810815],[51.57592,4.809393],[51.576636,4.807971],[51.577519,4.807096],[51.578401,4.80622],[51.579329,4.805484],[51.580257,4.804747],[51.581591,4.803865],[51.582924,4.802983],[51.583981,4.801789],[51.585038,4.800594],[51.585876,4.79839],[51.586101,4.796721],[51.586326,4.795052],[51.586555,4.792873],[51.586784,4.790693],[51.587012,4.788514],[51.587241,4.786334],[51.587241,4.786334],[51.588082,4.786964],[51.588923,4.787593],[51.59019,4.788301],[51.591456,4.789009],[51.592096,4.789052],[51.592576,4.788558],[51.59292,4.787877]].map((function(t){return[t[1],t[0]]}))}}}),t.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#16a085","line-width":8}})}))}},{key:"setMapSettings",value:function(t,e){t.easeTo({center:[e.coords.longitude,e.coords.latitude],zoom:12});var i=document.createElement("div");i.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' height='41px' width='27px' viewBox='0 0 512 512'><title>ionicons-v5-h</title><path d='M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><path d='M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><polyline points='256 360 256 274 192 232 272 144 312 216 368 216' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z'/></svg>";var o=new p.a.Marker({element:i}).setLngLat([e.coords.longitude,e.coords.latitude]).addTo(t);this.setState({currentLocation:o})}},{key:"addToLocalStorage",value:function(t){window.localStorage.setItem("foundLocations",JSON.stringify(g().concat([t])))}},{key:"isCloseTo",value:function(t,e,i){var o=this.distance(t.coordinates.longitude,t.coordinates.latitude,e,i);return console.warn(o,t,e,i),o<.5}},{key:"distance",value:function(t,e,i,o){function n(t){return t*Math.PI/180}var a=n(o-e),l=n(i-t),d=Math.sin(a/2)*Math.sin(a/2)+Math.cos(n(e))*Math.cos(n(o))*Math.sin(l/2)*Math.sin(l/2);return 6371*(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)))}}]),i}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a33f452f.chunk.js.map