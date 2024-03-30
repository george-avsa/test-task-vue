(function(){"use strict";var t={6161:function(t,n,e){var o=e(3751),r=e(641);const a={class:"app"};function s(t,n,e,o,s,l){const i=(0,r.g2)("navbar"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(i),(0,r.bF)(u)])}e(4114);function l(t,n,e,o,a,s){return(0,r.uX)(),(0,r.CE)("nav",null,[(0,r.Lk)("span",{class:"link-button",onClick:n[0]||(n[0]=n=>t.$router.push("/"))},"Главная"),(0,r.Lk)("span",{class:"link-button",onClick:n[1]||(n[1]=n=>t.$router.push("/contacts"))},"Конакты")])}var i={},u=e(6262);const c=(0,u.A)(i,[["render",l]]);var d=c,f={components:{Navbar:d}};const p=(0,u.A)(f,[["render",s]]);var v=p;const m={class:"main"};function h(t,n,e,o,a,s){const l=(0,r.g2)("modal-wrapper"),i=(0,r.g2)("saved-data");return(0,r.uX)(),(0,r.CE)("div",m,[a.modalVisibility?((0,r.uX)(),(0,r.Wv)(l,{key:0,onSave:s.saveData,onClose:s.closeModal},null,8,["onSave","onClose"])):(0,r.Q3)("",!0),(0,r.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>s.showModal&&s.showModal(...t))},"Начать"),(0,r.bF)(i,{records:a.records},null,8,["records"])])}const b={class:"modal"};function k(t,n,e,a,s,l){return(0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("div",{class:"modal__bg",onClick:n[0]||(n[0]=(...t)=>l.hideModal&&l.hideModal(...t))}),(0,r.Lk)("form",{class:"modal__content",onSubmit:n[6]||(n[6]=(0,o.D$)((()=>{}),["prevent"])),onClick:n[7]||(n[7]=(...n)=>t.stopBubble&&t.stopBubble(...n))},[(0,r.bo)((0,r.Lk)("input",{type:"text",name:"firstName",placeholder:"Имя","onUpdate:modelValue":n[1]||(n[1]=t=>s.form.name=t)},null,512),[[o.Jo,s.form.name]]),(0,r.bo)((0,r.Lk)("input",{type:"text",name:"lastName",placeholder:"Фамилия","onUpdate:modelValue":n[2]||(n[2]=t=>s.form.fullname=t)},null,512),[[o.Jo,s.form.fullname]]),(0,r.bo)((0,r.Lk)("input",{type:"text",name:"city",placeholder:"Город","onUpdate:modelValue":n[3]||(n[3]=t=>s.form.country=t)},null,512),[[o.Jo,s.form.country]]),(0,r.bo)((0,r.Lk)("input",{type:"text",name:"street",placeholder:"Улица","onUpdate:modelValue":n[4]||(n[4]=t=>s.form.address=t)},null,512),[[o.Jo,s.form.address]]),(0,r.Lk)("button",{class:"button",onClick:n[5]||(n[5]=(...t)=>l.saveData&&l.saveData(...t))},"Отправить")],32)])}var y={data(){return{form:{name:"",fullname:"",country:"",address:""}}},methods:{saveData(){this.$emit("save",this.form),this.$emit("close"),this.form={name:"",fullname:"",country:"",address:""}},hideModal(t){this.$emit("close")}}};const C=(0,u.A)(y,[["render",k]]);var g=C,w=e(33);const L={class:"saved-data"};function O(t,n,e,o,a,s){return(0,r.uX)(),(0,r.CE)("div",L,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.records,((t,n)=>((0,r.uX)(),(0,r.CE)("p",{key:t.id},[(0,r.Lk)("strong",null,(0,w.v_)(n+1)+".",1),(0,r.eW)(" "+(0,w.v_)(JSON.stringify(t).replaceAll(",",", ")),1)])))),128))])}var E={props:{records:{type:Array,required:!0}}};const x=(0,u.A)(E,[["render",O]]);var A=x,M={data(){return{records:[],modalVisibility:!1}},components:{ModalWrapper:g,SavedData:A},methods:{saveData(t){this.records.push({...t,id:""+ +new Date})},showModal(){this.modalVisibility=!0},closeModal(){this.modalVisibility=!1}}};const X=(0,u.A)(M,[["render",h]]);var D=X;const V={class:"contacts"},_=(0,r.Lk)("h2",null,"Конакты",-1),j=[_];function $(t,n,e,o,a,s){return(0,r.uX)(),(0,r.CE)("div",V,j)}var F={};const J=(0,u.A)(F,[["render",$]]);var S=J,N=e(5220);const U=[{path:"/",component:D},{path:"/contacts",component:S}],W=(0,N.aE)({routes:U,history:(0,N.LA)("/test-task-vue/")});var B=W;(0,o.Ef)(v).use(B).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],a=t[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[i])}))?o.splice(i--,1):(l=!1,a<s&&(s=a));if(l){t.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,r,a]}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,s=o[0],l=o[1],i=o[2],u=0;if(s.some((function(n){return 0!==t[n]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(i)var c=i(e)}for(n&&n(o);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(c)},o=self["webpackChunktest_task2"]=self["webpackChunktest_task2"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(6161)}));o=e.O(o)})();
//# sourceMappingURL=app.da505d86.js.map