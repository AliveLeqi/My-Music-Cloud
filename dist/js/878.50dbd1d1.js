"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[878],{1878:function(t,a,s){s.r(a),s.d(a,{default:function(){return o}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lead-container"},t._l(t.leaderList,(function(a,i){return s("div",{key:i,staticClass:"lead-wrap",on:{click:function(s){return t.toPlaylist(a.id)}}},[s("div",{staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("span",{staticClass:"iconfont icon-play player-icon"}),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.coverImgUrl,expression:"item.coverImgUrl"}],attrs:{alt:""}}),s("div",{staticClass:"num-wrap"},[s("span",{staticClass:"iconfont icon-play num-icon"}),s("div",{staticClass:"num"},[t._v(t._s(t._f("ellipsisPlayVolume")(a.playCount)))])])]),s("div",{staticClass:"title"},[t._v(t._s(a.name))])])])})),0)},l=[],e=s(7871),n={name:"leaderboard",data(){return{leaderList:[]}},created(){(0,e.td)().then((t=>{this.leaderList=t.data.list}))},methods:{toPlaylist(t){this.$router.push(`/playlist?q=${t}`)}}},r=n,c=s(3736),u=(0,c.Z)(r,i,l,!1,null,null,null),o=u.exports}}]);
//# sourceMappingURL=878.50dbd1d1.js.map