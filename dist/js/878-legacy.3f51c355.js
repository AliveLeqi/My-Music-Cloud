"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[878],{1878:function(t,a,s){s.r(a),s.d(a,{default:function(){return o}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lead-container"},t._l(t.leaderList,(function(a,i){return s("div",{key:i,staticClass:"lead-wrap",on:{click:function(s){return t.toPlaylist(a.id)}}},[s("div",{staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("span",{staticClass:"iconfont icon-play player-icon"}),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.coverImgUrl,expression:"item.coverImgUrl"}],attrs:{alt:""}}),s("div",{staticClass:"num-wrap"},[s("span",{staticClass:"iconfont icon-play num-icon"}),s("div",{staticClass:"num"},[t._v(t._s(t._f("ellipsisPlayVolume")(a.playCount)))])])]),s("div",{staticClass:"title"},[t._v(t._s(a.name))])])])})),0)},l=[],n=s(4859),e={name:"leaderboard",data:function(){return{leaderList:[]}},created:function(){var t=this;(0,n.td)().then((function(a){t.leaderList=a.data.list}))},methods:{toPlaylist:function(t){this.$router.push("/playlist?q=".concat(t))}}},c=e,r=s(3736),u=(0,r.Z)(c,i,l,!1,null,null,null),o=u.exports}}]);
//# sourceMappingURL=878-legacy.3f51c355.js.map