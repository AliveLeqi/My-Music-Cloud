"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[69],{8069:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"artist-container"},[s("div",{staticClass:"artist-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.artistData.img1v1Url,expression:"artistData.img1v1Url"}],attrs:{alt:""}})]),s("div",{staticClass:"artist-info"},[s("div",{staticClass:"author-wrap"},[s("h2",[t._v(t._s(t.artistData.name))]),s("div",{staticClass:"alias-wrap"},t._l(t.alias,(function(a,i){return s("span",{key:i},[t._v(t._s(a))])})),0)]),s("div",{staticClass:"creation-wrap"},[s("span",[t._v("单曲数:"+t._s(t.artistData.musicSize))]),s("span",[t._v("专辑数:"+t._s(t.artistData.albumSize))]),s("span",[t._v("MV数:"+t._s(t.artistData.mvSize))])]),s("div",{staticClass:"desc-wrap"},[s("p",[t._v("简介:"+t._s(t.artistData.briefDesc))])])])]),s("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"热门歌曲",name:"hotsongs"}},[s("table",{staticClass:"el-table"},[s("thead",[s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])]),s("tbody",t._l(t.hotSongs,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row",on:{dblclick:function(s){return t.PlayMusic(a)}}},[s("td",[t._v(t._s(i+1))]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("div",{staticClass:"first-title"},[t._v(t._s(a.name)),0!=a.mvid?s("span",{staticClass:"iconfont icon-mv"}):t._e()]),0!=a.alia.length?s("div",{staticClass:"second-title"},[t._v(t._s(a.alia[0]))]):t._e()])])]),s("td",[t._v(t._s(a.ar[0].name))]),s("td",[t._v(t._s(a.al.name))]),s("td",[t._v(t._s(t._f("formatDuration")(a.dt)))])])})),0)])])],1),s("div",{staticClass:"empty-wrap"})],1)},e=[],l=(s(6166),s(7871)),n=s(9059),r={name:"artist",data(){return{activeName:"hotsongs",artistId:this.$route.query.q,limit:50,page:1,artistData:{},alias:[],hotSongs:[]}},created(){this.getSingerSongs()},watch:{$route(t,a){this.search(this.$route.query.q)}},methods:{getSingerSongs(){let t=this.artistId;(0,l.wj)({id:t}).then((t=>{this.artistData=t.data.artist,0!=t.data.artist.alias.length&&(this.alias=t.data.artist.alias),this.hotSongs=t.data.hotSongs}))},PlayMusic(t){(0,n.Ai)(t.id).then((a=>{(0,n.TS)(t.id).then((t=>{this.$store.dispatch("saveSongUrl",t.data.data[0].url)})),(0,n.Pc)(t.id).then((t=>{console.log("detail",t),this.$store.dispatch("changePlayState",!0),this.$store.dispatch("saveSongDetail",t.data.songs[0]),this.$store.dispatch("addPlayinglist",t.data.songs[0])}))})).catch((t=>{console.log(t),this.$message({message:"暂时无法播放，换首试试",type:"warning",center:!0})}))}}},c=r,o=s(3736),d=(0,o.Z)(c,i,e,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=69.96478ca9.js.map