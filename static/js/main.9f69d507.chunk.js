(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(12),n(2)),i=n(3),h=n(5),l=n(4),b=n(0);var d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(r,".png?set=set3&size=200x200"),alt:"ROBOTS"}),Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})};var u=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{name:t[n].name,id:t[n].id,email:t[n].email},n)}))})};var j=function(e){var t=e.Search;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"0px solid black",height:"500px"},children:e.children})},O=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={ErrorHandle:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({ErrorHandle:!0})}},{key:"render",value:function(){return this.state.ErrorHandle?Object(b.jsx)("h1",{children:"Olley YEah toh Galat h "}):this.props.children}}]),n}(r.Component)),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r.setState({robots:e})}))},r.onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:""},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"RoboFriends"}),Object(b.jsx)(j,{Search:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(u,{robots:t})})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(r.Component),g=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))});s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.9f69d507.chunk.js.map