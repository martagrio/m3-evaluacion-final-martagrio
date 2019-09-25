(window["webpackJsonpm3-evaluacion-final-martagrio"]=window["webpackJsonpm3-evaluacion-final-martagrio"]||[]).push([[0],{23:function(e,a,t){e.exports=t(40)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),s=t.n(n),l=(t(28),t(16)),m=t(17),i=t(21),u=t(18),o=t(9),d=t(22),h=function(e){return c.a.createElement("header",{className:"app__header"},c.a.createElement("h1",{className:"app__title"},"rick and morty"))},p=(t(29),function(e){var a=e.getQuery,t=e.query;return c.a.createElement("div",{className:"app__search"},c.a.createElement("label",{htmlFor:"query"}),c.a.createElement("input",{className:"app__input",id:"query",type:"text",onChange:a,value:t,placeholder:"Please, enter the name of the desired character"}))}),E=(t(30),function(e){var a=e.image,t=e.name,r=e.species;return c.a.createElement("div",{className:"character__card"},c.a.createElement("div",{className:"character__img"},c.a.createElement("img",{src:a,alt:t})),c.a.createElement("h2",{className:"chacracter__name"},t),c.a.createElement("h3",{className:"character__species"},r," ","Human"===r?c.a.createElement("i",{className:"fas fa-restroom"}):c.a.createElement("i",{className:"fab fa-reddit-alien"})))}),_=t(5),f=(t(31),function(e){var a=e.characters,t=e.query;return c.a.createElement("ul",{className:"characters__list"},a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return c.a.createElement("li",{className:"character",key:e.id},c.a.createElement(_.b,{to:"/detail/".concat(e.id),className:"character__link"},c.a.createElement(E,{image:e.image,name:e.name,species:e.species})))})))}),g=function(e){var a=e.getQuery,t=e.query,r=e.characters;return c.a.createElement("main",{className:"app__main"},c.a.createElement(p,{getQuery:a,query:t}),c.a.createElement(f,{characters:r,query:t}))},y=(t(37),function(e){var a=e.routerProps,t=e.characters,r=parseInt(a.match.params.charId),n=t.filter((function(e){return e.id===r}));if(r>t.length)return c.a.createElement("div",{className:"detail__error"},c.a.createElement(_.b,{to:"/",className:"app__go-back"},"< back"),c.a.createElement("p",{className:"error_message"},"Actualmente s\xf3lo hay 20 personajes."));if(n[0]){var s=n[0],l=s.image,m=s.name,i=s.status,u=s.origin,o=s.episode;return c.a.createElement("div",{className:"detail__box"},c.a.createElement(_.b,{to:"/",className:"app__go-back"},"< back"),c.a.createElement("div",{className:"character__detail"},c.a.createElement("div",{className:"detail__image"},c.a.createElement("img",{src:l,alt:m,className:"detail__img"})),c.a.createElement("div",{className:"detail__text"},c.a.createElement("h2",{className:"detail__name"},m),c.a.createElement("p",{className:"detail__status"},c.a.createElement("strong",null,"Status:")," ","Dead"===i?c.a.createElement("i",{className:"fas fa-skull-crossbones"}):"".concat(i)),c.a.createElement("p",{className:"detail__origin"},c.a.createElement("strong",null,"Origin:")," ",u.name),c.a.createElement("p",{className:"detail_episodes"},c.a.createElement("strong",null,"Episodes:")," ",o.length))))}return c.a.createElement("div",{className:"detail__error"},c.a.createElement(_.b,{to:"/",className:"app__go-back"},"< back"),c.a.createElement("p",{className:"error_message"}," Ese personaje no est\xe1 actualmente registrado"))}),N=t(6),v=(t(38),t(39),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={characters:[],query:""},t.getQuery=t.getQuery.bind(Object(o.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"getCharacters",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(a){e.setState({characters:a.results})}))}},{key:"getQuery",value:function(e){var a=e.currentTarget.value;this.setState({query:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.characters,r=a.query;return c.a.createElement("div",{className:"app"},c.a.createElement(h,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",render:function(){return c.a.createElement(g,{getQuery:e.getQuery,characters:t,query:r})}}),c.a.createElement(N.a,{path:"/detail/:charId",render:function(e){return c.a.createElement(y,{routerProps:e,characters:t})}})))}}]),a}(c.a.Component));s.a.render(c.a.createElement(_.a,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.763aef09.chunk.js.map