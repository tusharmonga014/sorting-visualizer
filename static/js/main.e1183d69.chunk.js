(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{14:function(t,e){},15:function(t,e){},16:function(t,e){},21:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(5),o=n.n(a),i=n(6),s=n(7),c=n(10),u=n(8),d=window.screen.width<=700?350:425,l=window.screen.width<=600?100:200,h=l/1.5,g="MERGE_SORT",p=function(t){return t<=10?4:t<=50?2:1},b=function(t){return window.screen.width<=600?.8:t<=16?.5:.66},m=(n(21),n(1)),f=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).getMarginBetweenBars=function(t){return p(t)},t.getBarsDisplayAreaWidth=function(t){var e=window.screen.width;return Math.floor(e*b(t))},t.getBarWidth=function(t,e,n){return(e-n*t)/t},t.showBarHeight=function(t){var e=t.target.id,n="bar"+e,r=document.getElementById(e),a=document.getElementById(n);r.style.opacity=.5,a.removeAttribute("hidden"),a.style.zIndex=1},t.hideBarHeight=function(t){var e=t.target.id,n="bar"+e,r=document.getElementById(e),a=document.getElementById(n);r.style.opacity=1,a.setAttribute("hidden",!0),a.style.zIndex=0},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.array,r=e.currentlyChecking,a=e.pivot,o=e.sortedArray,i=n.length,s=this.getBarsDisplayAreaWidth(i),c=this.getMarginBetweenBars(i),u=this.getBarWidth(i,s,c),d=window.screen.width>=500&&i<23;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"bars",style:{width:s},children:n.length>0&&n.map((function(e,n){var i=r.includes(n)?"blue":"rgb(0, 204, 255)";i=n===a?"rgb(102, 255, 51)":i,i=o.includes(n)?"purple":i;var s="bar"+n;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{id:s,className:"bar-height-display",hidden:!0,children:e}),Object(m.jsx)("div",{id:n,className:"bar",style:{width:u,height:e,backgroundColor:i,marginLeft:c},onMouseOver:t.showBarHeight,onMouseLeave:t.hideBarHeight,children:d?e:""})]},n)}))}),Object(m.jsx)("div",{className:"base-block bg-dark text-center"})]})}}]),n}(r.Component),S=n(4),y=Object(S.b)((function(t){return{array:t.array,algorithm:t.algorithm,currentlyChecking:t.currentlyChecking,pivot:t.pivot,sortedArray:t.sortedArray}}),(function(){return function(t){return{}}}))(f),v=(n(27),function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).resetArray=function(e){t.props.generateArray(e)},t.changeArraySize=function(e){t.resetArray(e.target.value)},t.getAlgorithmNameInTitleCase=function(t){switch(t){case"BUBBLE_SORT":return"Bubble Sort";case"MERGE_SORT":return"Merge Sort";case"QUICK_SORT":return"Quick Sort";case"HEAP_SORT":return"Heap Sort";default:console.error("No algorithm provided for conversion to title case")}},t.changeAlgorithm=function(e){var n=e.target.value;t.props.changeAlgorithm(n);var r=t.getAlgorithmNameInTitleCase(n);document.getElementById("dropdown-algo-selector").innerText=r},t.changeSpeed=function(e){var n=Number(e.target.value);t.props.changeSpeed(n)},t.disableArrayAlgorithmInputs=function(){for(var t=document.getElementsByClassName("input-disable-when-running"),e=0;e<t.length;e++)t[e].setAttribute("disabled",!0)},t.disableArrayAlgorithmTexts=function(){for(var t=document.getElementsByClassName("text-disable-when-running"),e=0;e<t.length;e++)t[e].classList.remove("text-white"),t[e].classList.add("text-muted")},t.enableArrayAlgorithmInputs=function(){for(var t=document.getElementsByClassName("input-disable-when-running"),e=0;e<t.length;e++)t[e].removeAttribute("disabled")},t.enableArrayAlgorithmTexts=function(){for(var t=document.getElementsByClassName("text-disable-when-running"),e=0;e<t.length;e++)t[e].classList.remove("text-muted"),t[e].classList.add("text-white")},t.hideStartSortingButton=function(){document.getElementById("btn-sort").setAttribute("hidden",!0)},t.showStartSortingButton=function(){document.getElementById("btn-sort").removeAttribute("hidden")},t.showPauseButton=function(){document.getElementById("btn-pause").removeAttribute("hidden")},t.hidePauseButton=function(){document.getElementById("btn-pause").setAttribute("hidden",!0)},t.showContinueButton=function(){document.getElementById("btn-continue").removeAttribute("hidden")},t.hideContinueButton=function(){document.getElementById("btn-continue").setAttribute("hidden",!0)},t.showStopSortinButton=function(){document.getElementById("btn-stop-sort").removeAttribute("hidden")},t.hideStopSortingButton=function(){document.getElementById("btn-stop-sort").setAttribute("hidden",!0)},t.manageControlBarFeaturesWhenSortingStarts=function(){t.disableArrayAlgorithmInputs(),t.disableArrayAlgorithmTexts(),t.hideStartSortingButton(),t.showPauseButton(),t.showStopSortinButton()},t.manageControlBarFeaturesWhenSortingStops=function(){t.enableArrayAlgorithmInputs(),t.enableArrayAlgorithmTexts(),t.hidePauseButton(),t.hideContinueButton(),t.hideStopSortingButton(),t.showStartSortingButton()},t.startSorting=function(){t.manageControlBarFeaturesWhenSortingStarts(),t.props.startSorting()},t.pauseSorting=function(){t.props.pauseSorting(),t.hidePauseButton(),t.showContinueButton()},t.continueSorting=function(){t.hideContinueButton(),t.showPauseButton(),t.props.continueSorting()},t.stopSorting=function(){t.manageControlBarFeaturesWhenSortingStops(),t.props.stopSorting()},t.handleIfSortingCompleted=function(){"COMPLETED"===t.props.sortingRunStatus&&t.manageControlBarFeaturesWhenSortingStops()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.resetArray(h)}},{key:"render",value:function(){var t=this,e=this.props.array.length;return this.handleIfSortingCompleted(),Object(m.jsxs)("div",{className:"nav navbar navbar-dark bg-dark text-center p-2",children:[Object(m.jsx)("div",{className:"navbar navbar-brand col-sm-12 col-md-6 col-lg-4 text-center m-0 p-0",children:Object(m.jsx)("h2",{children:"SORTING VISUALIZER"})}),Object(m.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-3 text-justify-end m-0 p-0 array-algo-buttons",children:[Object(m.jsx)("button",{className:"generate-array-button btn btn-white btn-round mt-1 mb-1 mr-2 input-disable-when-running",onClick:function(){t.resetArray(e)},children:"Generate New Array"}),Object(m.jsxs)("div",{className:"btn-group",children:[Object(m.jsx)("button",{type:"button",id:"dropdown-algo-selector",className:"btn btn-success dropdown-toggle input-disable-when-running","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:this.getAlgorithmNameInTitleCase(g)}),Object(m.jsxs)("div",{className:"dropdown-menu",children:[Object(m.jsx)("h1",{className:"dropdown-header text-large",children:"Select Algorithm"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("button",{className:"dropdown-item",value:"MERGE_SORT",onClick:this.changeAlgorithm,children:"Merge Sort"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("button",{className:"dropdown-item",value:"QUICK_SORT",onClick:this.changeAlgorithm,children:"Quick Sort"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("button",{className:"dropdown-item",value:"BUBBLE_SORT",onClick:this.changeAlgorithm,children:"Bubble Sort"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("button",{className:"dropdown-item",value:"HEAP_SORT",onClick:this.changeAlgorithm,children:"Heap Sort"})]})]})]}),Object(m.jsxs)("div",{className:"col-md-12 col-lg-3 row slider-controls text-justify-end",children:[Object(m.jsx)("div",{className:"text-white text-center text-disable-when-running slider-controls col-sm-4 col-md-6 col-lg-6 mt-1 mb-1",children:"Array Size :"}),Object(m.jsx)("input",{className:"input-disable-when-running text-center slider-controls slider-range col-sm-7 col-md-6 col-lg-6 mt-1 mb-1",type:"range",min:10,max:l,defaultValue:h,onChange:this.changeArraySize}),Object(m.jsx)("div",{className:"text-white text-center text-disable-when-running slider-controls col-sm-4 col-md-6 col-lg-6 mb-1",children:"Sorting Speed :"}),Object(m.jsx)("input",{className:"input-disable-when-running text-center slider-controls slider-range col-sm-7 col-md-6 col-lg-6 mb-1",type:"range",min:"1",max:500,defaultValue:500,onChange:this.changeSpeed})]}),Object(m.jsxs)("div",{className:"col-sm-12 col-md-12 col-lg-2 text-center mt-1 mb-1",children:[Object(m.jsx)("button",{id:"btn-sort",className:"btn btn-success",onClick:this.startSorting,children:"START SORTING"}),Object(m.jsx)("button",{id:"btn-pause",className:"btn btn-default",onClick:this.pauseSorting,hidden:!0,children:"Pause"}),Object(m.jsx)("button",{id:"btn-continue",className:"btn btn-default",onClick:this.continueSorting,hidden:!0,children:"Continue"}),Object(m.jsx)("button",{id:"btn-stop-sort",className:"btn btn-danger",onClick:this.stopSorting,hidden:!0,children:"STOP"})]})]})}}]),n}(r.Component)),O=n(2),j=n.n(O),E=n(3),x=n(9);function A(t,e){return(t<0||t>=e)&&(console.error(t+" passed for swapping is out of bounds for "+e+", can't swap values."),!0)}function w(t,e,n){var r=t.length;if(A(e,r)||A(n,r))return t;var a=t[e];return t[e]=t[n],t[n]=a,t}function T(t,e,n,r){return t.splice(e,n,r),t}var B=Object(x.a)({array:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ARRAY":return e.payload;case"SWAP_VALUES":return w(t,e.payload.firstIdx,e.payload.secondIdx);case"SET_VALUE":return T(t,e.payload.id,1,e.payload.data);default:return t}},algorithm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ALGORITHM":return e.payload;default:return t}},speed:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SPEED":return e.payload;default:return t}},currentlyChecking:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CURRENTLYCHECKING":return e.payload;default:return t}},pivot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PIVOT":return e.payload;default:return t}},sortedArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SORTEDARRAY":return e.payload;case"ADD_TO_SORTEDARRAY":return t.concat(e.payload);default:return t}},sortingRunStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NOT_RUNNING",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"STARTED":return"STARTED";case"CONTINUED":return"CONTINUED";case"PAUSED":return"PAUSED";case"STOPPED":return"STOPPED";case"COMPLETED":return"COMPLETED";default:return t}}}),N=Object(x.b)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),R=function(t,e){return{type:"SWAP_VALUES",payload:{firstIdx:t,secondIdx:e}}},C=function(t){return{type:"SET_CURRENTLYCHECKING",payload:t}},I=function(t){return{type:"ADD_TO_SORTEDARRAY",payload:t}};var _=function(){return N.getState().sortingRunStatus};function k(){return(k=Object(E.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("PAUSED"!==_()){t.next=4;break}return t.abrupt("return",new Promise((function(t,e){setInterval((function(){"CONTINUED"===_()?t():"STOPPED"===_()&&e()}),10)})));case 4:if("STOPPED"!==_()){t.next=8;break}return t.abrupt("return",new Promise((function(t,e){return e()})));case 8:return t.abrupt("return",new Promise((function(t){return t()})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var D=function(){return k.apply(this,arguments)};var P=function(){return 500-N.getState().speed};function L(){return(L=Object(E.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){setTimeout((function(){return t()}),P())}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U=function(){return L.apply(this,arguments)};function M(){return(M=Object(E.a)(j.a.mark((function t(){var e,n,r,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=N.getState(),n=e.array,r=e.array.length,!0,a=0;case 5:if(!(a<r-1)){t.next=40;break}o=0,o=0;case 8:if(!(o<r-a-1)){t.next=36;break}return t.next=11,D().then((function(){return!0})).catch((function(){return!1}));case 11:if(t.sent){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,U();case 16:if(N.dispatch(C([o,o+1])),!(n[o]>n[o+1])){t.next=26;break}return t.next=20,D().then((function(){return!0})).catch((function(){return!1}));case 20:if(t.sent){t.next=23;break}return t.abrupt("return");case 23:return t.next=25,U();case 25:N.dispatch(R(o,o+1));case 26:return t.next=28,D().then((function(){return!0})).catch((function(){return!1}));case 28:if(t.sent){t.next=31;break}return t.abrupt("return");case 31:return t.next=33,U();case 33:o++,t.next=8;break;case 36:N.dispatch(I(o));case 37:a++,t.next=5;break;case 40:N.dispatch(C([])),N.dispatch(I(0)),N.dispatch({type:"COMPLETED"});case 43:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=function(){return M.apply(this,arguments)},G=n(14),W=n.n(G),V=n(15),Y=n.n(V),z=n(16),F=n.n(z);var K=function(t,e){return Math.floor(Math.random()*(e+1))+t},Q=function(t){t(C([])),t({type:"SET_SORTEDARRAY",payload:[]})},X=Object(S.b)((function(t){return{array:t.array,algorithm:t.algorithm,sortingRunStatus:t.sortingRunStatus}}),(function(){return function(t){return{generateArray:function(e){var n=function(t){for(var e=[],n=d,r=0;r<t;r++)e.push(K(40,n));return e}(e);t({type:"SET_ARRAY",payload:n}),Q(t)},changeAlgorithm:function(e){Q(t),t({type:"SET_ALGORITHM",payload:e})},changeSpeed:function(e){Q(t),t({type:"SET_SPEED",payload:e})},startSorting:function(){Q(t),function(){switch(N.getState().algorithm){case"BUBBLE_SORT":N.dispatch({type:"STARTED"}),H();break;case"MERGE_SORT":N.dispatch({type:"STARTED"}),W()();break;case"QUICK_SORT":N.dispatch({type:"STARTED"}),Y()();break;case"HEAP_SORT":N.dispatch({type:"STARTED"}),F()();break;default:console.error("No sorting algorithm selected, can't sort")}}()},pauseSorting:function(){t({type:"PAUSED"})},continueSorting:function(){t({type:"CONTINUED"})},stopSorting:function(){t({type:"STOPPED"}),Q(t)}}}}))(v);var J=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(X,{}),Object(m.jsx)(y,{})]})};var Z=function(){return Object(m.jsx)(J,{})};o.a.render(Object(m.jsx)(S.a,{store:N,children:Object(m.jsx)(Z,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e1183d69.chunk.js.map