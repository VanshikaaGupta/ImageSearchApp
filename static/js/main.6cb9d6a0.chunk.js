(this.webpackJsonpfirstreactapp=this.webpackJsonpfirstreactapp||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a(3),i=a(6),o=a(5),s=function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Search"),c.a.createElement("input",{type:"text",onChange:e.takeInput,className:"form-control",placeholder:"Type to search any image"}),c.a.createElement("button",{onClick:e.btClick,className:"btn btn-primary"},"Search Now"))},u=function(e){return c.a.createElement("img",{src:e.url,alt:"Image is missing"})},m=function(e){var t=e.imagedata.length;console.log("Props received",e.imagedata);var a=c.a.createElement("p",null," No record Found"),n=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"List of records ",t),e.imagedata.map((function(e){return c.a.createElement(u,{url:e.images.original.url})})));return c.a.createElement("div",null,0==e.imagedata.length?a:n)},h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).searchTxtValue="",n.state={imagedata:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"giveMeTheData",value:function(e){var t=this,a="https://api.giphy.com/v1/gifs/search?api_key=YN0VlHTGZpQqcjnRPkP5sw5lELMSxfHr&q=".concat(e,"&limit=5");fetch(a).then((function(e){console.log("Response is coming",e),e.json().then((function(e){console.log("Data is",e.data),t.setState({imagedata:e.data})})).catch((function(e){console.log("Error in json",e)}))})).catch((function(e){console.log("Error coming from the server",e)}))}},{key:"takeInput",value:function(e){var t=e.target.value;this.searchTxtValue=t,console.log("Calling by child",this.searchTxtValue)}},{key:"searchNow",value:function(){console.log("Search Button is clicked"),this.giveMeTheData(this.searchTxtValue)}},{key:"render",value:function(){return console.log(" RENDER Image data is",this.state.imagedata),c.a.createElement("div",null,c.a.createElement("h1",{className:"alert-success text-center"},this.props.title),c.a.createElement(s,{takeInput:this.takeInput.bind(this),btClick:this.searchNow.bind(this)}),c.a.createElement(m,{imagedata:this.state.imagedata}))}}]),a}(c.a.Component);var g=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(h,{title:"Image Search App"}))},p=a(4);a.n(p).a.render(c.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.6cb9d6a0.chunk.js.map