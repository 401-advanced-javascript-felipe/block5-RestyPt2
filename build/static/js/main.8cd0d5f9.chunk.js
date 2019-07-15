(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(47)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),s=a(4),o=a(3),l=a(5),i=a(0),c=a.n(i),h=a(17),u=a.n(h),p=a(22),d=(a(28),a(29),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"RESTy"))}}]),t}(c.a.Component)),m=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement("section",null,c.a.createElement("p",null,"\xa92019 Code Fellows")))}}]),t}(c.a.Component),b=a(8),y=a(6),E=(a(30),a(18)),g=a.n(E),O=a(19),f=a.n(O),j=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("aside",null,c.a.createElement("h2",null,"History"),c.a.createElement("ul",{id:"history"},this.props.history&&Object.keys(this.props.history).map(function(t){return c.a.createElement("li",{key:t,id:t,onClick:e.props.resetFormFromHistory},c.a.createElement("span",null,c.a.createElement("strong",null,e.props.history[t].method)),c.a.createElement("span",null,e.props.history[t].host),c.a.createElement("span",null,e.props.history[t].path))})))}}]),t}(c.a.Component),v=a(9),C=a.n(v),k=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"deck"},c.a.createElement("form",{onSubmit:this.props.callAPI},c.a.createElement("section",null,c.a.createElement("input",{type:"text",className:"wide",name:"url",placeholder:"URL",value:this.props.url,onChange:this.props.handleChange}),c.a.createElement("div",{id:"methods"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"method",checked:"get"===this.props.method,value:"get",onChange:this.props.handleChange}),c.a.createElement("span",null,"GET")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"method",checked:"post"===this.props.method,value:"post",onChange:this.props.handleChange}),c.a.createElement("span",null,"POST")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"method",checked:"put"===this.props.method,value:"put",onChange:this.props.handleChange}),c.a.createElement("span",null,"PUT")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"method",checked:"patch"===this.props.method,value:"patch",onChange:this.props.handleChange}),c.a.createElement("span",null,"PATCH")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"method",checked:"delete"===this.props.method,value:"delete",onChange:this.props.handleChange}),c.a.createElement("span",null,"DELETE")),c.a.createElement("label",null,c.a.createElement("button",{type:"submit"},"Go!")))),c.a.createElement("section",{className:"deck col-2"},c.a.createElement("div",{id:"body"},c.a.createElement("textarea",{placeholder:"Raw JSON Body",name:"requestBody",onChange:this.handleChange,value:this.props.requestBody,disabled:!!this.props.method.match(/get|delete/)})),c.a.createElement("div",{id:"headers"},c.a.createElement("button",{onClick:this.props.toggleHeaders},"Headers"),c.a.createElement("div",{className:"visible-"+this.props.headersVisible},c.a.createElement("h2",null,"Basic Authorization"),c.a.createElement("input",{onChange:this.props.handleChange,name:"username",placeholder:"Username",value:this.props.username}),c.a.createElement("input",{onChange:this.props.handleChange,name:"password",type:"password",placeholder:"Password",value:this.props.password})),c.a.createElement("div",{className:"visible-"+this.props.headersVisible},c.a.createElement("h2",null,"Bearer Token"),c.a.createElement("input",{onChange:this.props.handleChange,type:"text",className:"wide",name:"token",placeholder:"Token",value:this.props.token}))))),c.a.createElement("div",{id:"json"},c.a.createElement(C.a,{name:"Headers",enableClipboard:!1,collapsed:!0,src:this.props.header}),c.a.createElement(C.a,{name:"Response",enableClipboard:!1,collapsed:!1,src:this.props.body})))}}]),t}(c.a.Component),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).saveHistory=function(){localStorage.setItem("history",JSON.stringify(a.state.history))},a.updateHistory=function(){var e=new URL(a.state.url),t={host:e.hostname,path:e.pathname,url:a.state.url,method:a.state.method,requestBody:a.state.requestBody,username:a.state.username,password:a.state.password,token:a.state.token,body:{},header:{}},n=f()(JSON.stringify(t)),r=Object(y.a)({},n,t),s=Object(b.a)({},a.state.history,r);a.setState({history:s}),a.saveHistory()},a.resetFormFromHistory=function(e){e.preventDefault();var t=a.state.history[e.currentTarget.id];a.setState(Object(b.a)({},t))},a.handleChange=function(e){var t=e.target.name,n=e.target.value;if(a.setState(Object(y.a)({},t,n)),"token"===t){a.setState({username:"",password:""})}if(t.match(/username|password/)){a.setState({token:""})}},a.toggleHeaders=function(){var e=!a.state.headersVisible;a.setState({headersVisible:e})},a.callAPI=function(e){e.preventDefault();var t=a.state.token?{Authorization:"Bearer ".concat(a.state.token)}:{},n=a.state.username&&a.state.password?{Authorization:"Basic "+btoa("".concat(a.state.username,":").concat(a.state.password))}:{};g()(a.state.method,a.state.url).set("Content-Type","application/json").set(Object.assign({"Content-Type":"application/json"},t,n)).send(a.state.requestBody).then(function(e){var t=e.header,n=e.body;a.setState({header:t,body:n}),a.updateHistory()}).catch(function(e){var t={error:e.message};a.setState({header:{},body:t})})},a.state={url:"",method:"get",requestBody:"",username:"",password:"",token:"",header:{},body:{},history:{},headersVisible:!1},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){try{var e=JSON.parse(localStorage.getItem("history"));this.setState({history:e})}catch(t){console.error(t)}}},{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(j,{history:this.state.history,resetFormFromHistory:this.resetFormFromHistory}),c.a.createElement(k,{url:this.state.url,method:this.state.method,requestBody:this.state.requestBody,headersVisible:this.state.headersVisible,username:this.state.username,password:this.state.password,token:this.state.token,header:this.state.header,body:this.state.body,callAPI:this.callAPI,handleChange:this.handleChange,toggleHeaders:this.toggleHeaders}))}}]),t}(c.a.Component),S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(w,null),c.a.createElement(m,null))}}]),t}(c.a.Component),H=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(S,null))}}]),t}(c.a.Component),B=document.getElementById("root");u.a.render(c.a.createElement(H,null),B)}},[[23,1,2]]]);
//# sourceMappingURL=main.8cd0d5f9.chunk.js.map