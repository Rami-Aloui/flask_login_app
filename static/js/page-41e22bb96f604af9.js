(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{9109:function(e,t,n){Promise.resolve().then(n.bind(n,2944))},2944:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i,o,a=n(3827),r=n(4090),s=n(6588),c=n.n(s),l=n(6136),d=n(1196),p=e=>{var t;let n,{labels:i=[],tooltipLabel:o,donutData:s,backgroudColors:p,gradientColor:m,borderColors:u,borderWidth:_,tooltipEnabled:x=!1,legendEnabled:h=!1,containerClass:g,externalRadius:C="100%",innerRadius:f="50%"}=e,j=(0,r.useRef)(null),[v,b]=(0,r.useState)(j.current&&j.current);(0,r.useEffect)(()=>{j.current&&b(j.current),v&&(window.addEventListener("beforeprint",()=>{v.resize(600,600)}),window.addEventListener("resize",()=>{v.resize()}))},[j,v]),l.kL.register(l.qi,x?l.u:{},h?l.De:{}),(t=n||(n={})).inner="inner",t.center="center";let N={labels:i,datasets:[{label:o,data:s,backgroundColor:m?v&&((e,t,n)=>{if(e){let t=e.createConicGradient(11.07,110,110);return n.forEach(e=>{let{color:n,stop:i}=e;t.addColorStop(i,n)}),t}return""})(v.ctx,0,m):p,borderColor:u,borderWidth:_,radius:C,cutout:f,weight:1.2,responsive:!0,borderAlign:"inner"}]};return(0,a.jsx)("div",{className:"".concat(g," ").concat(c().donutChartWrapper),children:(0,a.jsx)(d.$I,{ref:j,data:N})})},m=n(9956),u=n.n(m),_=e=>{let{img:t,icon:n,title:i,children:o,imgClass:r,titleClass:s,childClass:c,containerClass:l}=e;return(0,a.jsxs)("div",{className:"".concat(u().infoItemWraper," ").concat(l),children:[(t||n)&&(0,a.jsx)("div",{className:r,children:t?(0,a.jsx)("img",{src:t}):n}),(0,a.jsx)("div",{className:s,children:(0,a.jsx)("p",{children:i})}),(0,a.jsx)("div",{className:c,children:o})]})},x=n(5213),h=n.n(x),g=n(7517),C=n(523),f=n.n(C),j=e=>{let{points:t=3,pointsColors:n,pointWidth:i="40px",linesColors:o,lineWidth:r,containerClass:s}=e,c=[];if(t)for(let e=1;e<=t;e++){let s=(0,a.jsxs)("div",{className:f().point,style:{height:e<t?"calc(100% / ".concat(t-1,")"):"",marginTop:e>1?"-2px":0},children:[(0,a.jsx)("div",{className:f().dot,style:{background:Array.isArray(n)?n[e-1]:n,width:i||""}}),e<t&&(0,a.jsx)("div",{className:f().line,style:{background:Array.isArray(o)?o[e-1]:o,width:r||"",height:e<t?"calc(100% - ".concat(i," + 1px)"):""}})]},e);c.push(s)}return(0,a.jsx)("div",{className:"".concat(f().timeline," ").concat(s),children:c})},v=n(6489),b=n(4097),N=n.n(b);(i=o||(o={})).left="left",i.center="center",i.right="right";var k=e=>{let{containerClass:t,decoratorText:n,decoratorClass:i,titleText:o,titleClass:r,titleSize:s="40px",children:c,buttonText:l,buttonStyle:d,buttonAlign:p="left",buttonContainerClass:m,buttonClass:u,infoContentWidth:_,infoContentClass:x,img:h,imgAlign:g="right",imgContainerClass:C}=e;return(0,a.jsxs)("div",{className:"".concat(N().infoComponentWrapper," ").concat(t),children:[h&&"left"===g&&(0,a.jsx)("div",{className:"".concat(C," ").concat(N().imageContainer),children:(0,a.jsx)("img",{src:h})}),(0,a.jsxs)("div",{className:"".concat(N().infocontainer," ").concat(x),style:{maxWidth:_,justifyContent:h?g:"center"},children:[n&&(0,a.jsx)("div",{className:"".concat(i||""," ").concat(N().decoratorContainer),children:(0,a.jsx)("p",{children:n})}),(0,a.jsx)("div",{style:{fontSize:s},className:"".concat(r||""," ").concat(N().titleContainer),children:(0,a.jsx)("p",{children:o})}),(0,a.jsxs)("div",{children:[" ",c]}),l&&(0,a.jsx)("div",{className:"".concat(N().buttonContainer," \n            ").concat(N()[p]," \n            ").concat(m),children:(0,a.jsx)(v.ZP,{buttonStyle:d,className:u,children:l})})]}),h&&"left"!==g&&(0,a.jsx)("div",{className:"".concat(C," ").concat(N().imageContainer),children:(0,a.jsx)("img",{src:h})})]})},w=n(9028),L=n.n(w),W=e=>{let{img:t,name:n,profession:i,description:o}=e;return(0,a.jsxs)("div",{className:L().coverLetterWrapper,children:[(0,a.jsx)("div",{className:L().imgContainer,children:(0,a.jsx)("img",{src:t})}),(0,a.jsxs)("div",{className:L().group,children:[(0,a.jsx)("p",{className:L().name,children:n}),(0,a.jsx)("p",{className:L().profession,children:i}),(0,a.jsx)("p",{className:L().description,children:o})]})]})},y=n(1089),I=n.n(y),T=e=>{let{img:t,text:n,name:i}=e;return(0,a.jsxs)("div",{className:I().quoteWrapper,children:[(0,a.jsx)("div",{className:I().imgContainer,children:(0,a.jsx)("img",{src:t})}),(0,a.jsxs)("div",{className:I().textGroup,children:[(0,a.jsx)("p",{className:I().text,children:n}),(0,a.jsx)("p",{className:I().name,children:i})]})]})},A=()=>(0,a.jsxs)("div",{className:h().investorsWrapper,children:[(0,a.jsx)(_,{containerClass:h().initialInfo,title:"Inversores",titleClass:h().title,children:(0,a.jsx)("p",{className:h().text,children:"Mirando hacia el futuro, Tribu Corp se posiciona como un jugador clave en el mundo de los activos digitales y la consultoría tecnológica. Con un enfoque claro en la creación de valor a largo plazo y la maximización del éxito, estamos listos para seguir liderando y transformando el paisaje de la inversión digital."})}),(0,a.jsxs)("div",{className:h().donutChartGroup,children:[(0,a.jsx)(_,{icon:(0,a.jsx)(g.J$,{}),imgClass:h().icon,title:"Metodologia",titleClass:h().title,containerClass:"".concat(h().infoItems," ").concat(h().topLeft),children:(0,a.jsxs)("p",{className:h().textInfo,style:{maxWidth:"252px"},children:[(0,a.jsx)("span",{className:h().innerTitle,children:"Accede a los servicios"})," ","Nuestras oportunidades 10X"]})}),(0,a.jsx)(_,{icon:(0,a.jsx)(g.rL,{}),imgClass:h().icon,title:"Tecnologia",titleClass:h().title,containerClass:"".concat(h().infoItems," ").concat(h().bottomCenter),children:(0,a.jsxs)("p",{className:h().textInfo,children:[(0,a.jsx)("span",{className:h().innerTitle,children:" Accede a las plataformas"})," ","Aumenta tu potencial con nuestras plataformas con IA"]})}),(0,a.jsx)(_,{icon:(0,a.jsx)(g.Tl,{}),imgClass:h().icon,title:"Equipo",titleClass:h().title,containerClass:"".concat(h().infoItems,"  ").concat(h().topRight),children:(0,a.jsxs)("p",{className:h().textInfo,style:{maxWidth:"252px"},children:[(0,a.jsx)("span",{className:h().innerTitle,children:"Nuestro equipo de trabajo"})," ","Conoce a nuestro experimentado staff"]})}),(0,a.jsx)(p,{containerClass:h().donutChatContainer,donutData:[3,3,3],backgroudColors:["#403fff","#34D1BF","#ff905b"],borderColors:"#fff",borderWidth:1,innerRadius:"80%"})]}),(0,a.jsxs)("div",{className:h().timelineContainer,children:[(0,a.jsx)(k,{img:"/_next/static/media/investment.e0ee9f6e.png",titleText:"Metodolog\xeda 10x",containerClass:"".concat(h().infoGroup," ").concat(h().top),infoContentClass:h().leftContainer,imgContainerClass:h().imgContainer,buttonText:"Saber m\xe1s",children:(0,a.jsxs)("p",{className:h().infoTex,children:["Nuestro proceso metodol\xf3gico nos permite identificar oportunidades 10x, una vez identificado se le asigna un capital de MVP, hasta que tienen los primeros clientes y un primer modelo de negocio.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Si los KPI son buenos se somete a comit\xe9 para integrarlo en el portafolio de Tribu 10x, donde se le va a dotar de recursos y equipo para que aceleren.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Por ultimo se implementa el plan metodol\xf3gico Tribu 10X, que nos permite aumentar las posibilidades de \xe9xito."]})}),(0,a.jsx)(k,{img:"/_next/static/media/percentages.9f786a7f.png",titleText:"Tecnolog\xeda",containerClass:"".concat(h().infoGroup," ").concat(h().center),infoContentClass:h().leftContainer,imgContainerClass:h().imgContainer,imgAlign:"left",buttonText:"Saber m\xe1s",children:(0,a.jsxs)("p",{className:h().infoTex,children:["La IA ha experimentado un crecimiento significativo, siendo la aplicaci\xf3n tecnol\xf3gica de m\xe1s r\xe1pido crecimiento en la historia, como lo demuestra el ejemplo de Chat GPT, que alcanz\xf3 100 millones de usuarios en solo dos meses.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Este crecimiento se ve reflejado en una mayor automatizaci\xf3n de procesos, reducci\xf3n del error humano, y en la toma de decisiones m\xe1s \xe1gil y precisa, lo que impulsa la creatividad humana."]})}),(0,a.jsx)(j,{containerClass:h().timeline,points:3,pointsColors:["#FD9262","#35D2AA","#6749E5"],linesColors:["linear-gradient(180deg, rgba(253,146,98,1) 0%, rgba(53,210,170,1) 100%)","linear-gradient(180deg, rgba(53,210,170,1) 0%, rgba(103,73,229,1) 100%)"]}),(0,a.jsx)(k,{titleText:"Equipo",titleClass:h().title,img:"/_next/static/media/engineeringTeam.e56ae009.png",containerClass:"".concat(h().infoGroup," ").concat(h().bottom),infoContentClass:h().leftContainer,imgContainerClass:h().imgContainer,buttonText:"Saber m\xe1s",buttonClass:h().button,children:(0,a.jsxs)("div",{className:h().teamGroup,children:[(0,a.jsx)(W,{img:"/_next/static/media/javier.4c826b4f.png",name:"Javier Molina",profession:"DISE\xd1ADOR COMPUTACIONAL",description:"Soy Dise\xf1ador Computacional. Me ocupo de la creaci\xf3n y el desarrollo de sistemas computarizados, incluyendo la arquitectura y el dise\xf1o de software y hardware."}),(0,a.jsx)(W,{img:"/_next/static/media/daniel.106121d4.png",name:"Daniel Cardel\xfas",profession:"DISE\xd1ADOR COMPUTACIONAL",description:"Creo desde cero los activos digitales que las empresas necesitan para eficientar al máximo sus operaciones o lanzar los productos que enamoraran a sus clientes."})]})})]}),(0,a.jsxs)("div",{className:h().numericDataRow,children:[(0,a.jsx)(_,{title:"6",titleClass:h().title,containerClass:h().dataContainer,children:(0,a.jsx)("p",{className:h().text,children:"Soluciones 10x"})}),(0,a.jsx)(_,{title:"x20",titleClass:h().title,containerClass:h().dataContainer,children:(0,a.jsx)("p",{className:h().text,children:"Oportunidades de negocio de nuestros inversores"})}),(0,a.jsx)(_,{title:"$30M",titleClass:h().title,containerClass:h().dataContainer,children:(0,a.jsx)("p",{className:h().text,children:"Valoraci\xf3n actual de los activos"})})]}),(0,a.jsx)("div",{className:h().investContact,children:(0,a.jsxs)("div",{className:h().messageContainer,children:[(0,a.jsx)("p",{className:h().title,children:"Invierte en tu futuro con TribuCorp"}),(0,a.jsx)(v.ZP,{buttonStyle:v.ZJ.lightColor,children:"Contacta con nosotros"})]})}),(0,a.jsx)("div",{className:h().quoteContainer,children:(0,a.jsx)(T,{img:"/_next/static/media/javier2.62fc65d7.jpg",text:"Los activos digitales son la fuente de la prosperidad economica del presente de las empresas o de los emprendedores que los generan",name:"JAVIER MOLINA CEO NOVA STUDIO"})})]})},6489:function(e,t,n){"use strict";n.d(t,{ZJ:function(){return a},aV:function(){return r}});var i,o,a,r,s=n(3827),c=n(4063),l=n.n(c);(i=a||(a={})).primaryColor="primaryColor",i.lightColor="lightColor",i.noBg="noBg",(o=r||(r={})).normal="normalPadding",o.small="smallPadding",t.ZP=e=>{let{className:t,children:n,width:i,height:o,buttonStyle:a="primaryColor",buttonPadding:r="normalPadding"}=e;return(0,s.jsx)("div",{className:"".concat(l().buttonWrapper," ").concat(t||"","\n       ").concat(l()[a]," ").concat(l()[r]),style:{height:o||"",width:i||""},children:n})}},7517:function(e,t,n){"use strict";n.d(t,{ol:function(){return o},ZH:function(){return a},rL:function(){return r},Tl:function(){return s},J$:function(){return c}});var i=n(3827);n(4090);var o=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 18 18",...e,children:(0,i.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:2,d:"M10.82 4.447 15.373 9l-4.553 4.552M2.625 9h12.623"})}),a=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:2,d:"m19.918 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0l-6.52-6.52"})}),r=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 47 46",...e,children:[(0,i.jsx)("path",{stroke:"#35D2A2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.336 17.25v-1.917c0-5.75 3.833-9.583 9.583-9.583h19.167c5.75 0 9.583 3.833 9.583 9.583v15.334c0 5.75-3.833 9.583-9.583 9.583h-1.917"}),(0,i.jsx)("path",{stroke:"#35D2A2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7.578 22.443c8.855 1.131 15.353 7.648 16.503 16.503M5.523 28.883c6.498.824 11.27 5.616 12.114 12.113"}),(0,i.jsx)("path",{stroke:"#35D29C",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.297 36.148c3.239.422 5.635 2.799 6.057 6.057"})]}),s=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 47 46",...e,children:[(0,i.jsx)("path",{stroke:"#6753E2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.059 20.835a3.5 3.5 0 0 0-.633 0c-4.561-.154-8.184-3.891-8.184-8.491a8.503 8.503 0 0 1 8.51-8.51c4.696 0 8.51 3.814 8.51 8.51-.019 4.6-3.642 8.338-8.203 8.49M31.952 7.666a6.703 6.703 0 0 1 6.709 6.708 6.72 6.72 0 0 1-6.46 6.709 2.2 2.2 0 0 0-.498 0M8.47 27.906c-4.637 3.105-4.637 8.165 0 11.25 5.272 3.528 13.916 3.528 19.187 0 4.638-3.104 4.638-8.164 0-11.25-5.252-3.508-13.896-3.508-19.186 0"}),(0,i.jsx)("path",{stroke:"#6746E5",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M35.648 38.334c1.38-.288 2.684-.843 3.757-1.668 2.99-2.242 2.99-5.941 0-8.184-1.054-.805-2.338-1.341-3.7-1.648"})]}),c=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 47 46",...e,children:[(0,i.jsx)("path",{stroke:"#FF9D5E",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.766 4.848 8.228 12.381c-3.7 2.415-3.7 7.82 0 10.235l11.538 7.532c2.07 1.361 5.482 1.361 7.552 0l11.48-7.532c3.68-2.415 3.68-7.801 0-10.216l-11.48-7.533c-2.07-1.38-5.482-1.38-7.552-.019"}),(0,i.jsx)("path",{stroke:"#FF9D5E",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m11.293 25.07-.02 8.99c0 2.434 1.879 5.04 4.179 5.807l6.114 2.032c1.054.345 2.798.345 3.872 0l6.114-2.032c2.3-.767 4.178-3.373 4.178-5.807v-8.894M41.516 28.75v-11.5"})]})},5213:function(e){e.exports={investorsWrapper:"page_investorsWrapper__rpaMh",initialInfo:"page_initialInfo__ZMsQw",title:"page_title__O_SHF",text:"page_text__cW3J_",donutChartGroup:"page_donutChartGroup__s_thx",donutChatContainer:"page_donutChatContainer__YsYKF",infoItems:"page_infoItems__qnI7A",topLeft:"page_topLeft__OgJlg",topRight:"page_topRight__Cw0QO",bottomCenter:"page_bottomCenter__6JinI",icon:"page_icon__vThW9",textInfo:"page_textInfo__cRABt",innerTitle:"page_innerTitle__vDkP_",timelineContainer:"page_timelineContainer__2bDk8",timeline:"page_timeline__WQs64",infoGroup:"page_infoGroup__TVyCv",top:"page_top__QGsd1",center:"page_center__5AJHF",bottom:"page_bottom__Fcf2z",leftContainer:"page_leftContainer__hPljP",infoTex:"page_infoTex__4cC7K",teamGroup:"page_teamGroup__Kc_wF",imgContainer:"page_imgContainer__KjtVG",button:"page_button__H8JAU",numericDataRow:"page_numericDataRow__6wj49",dataContainer:"page_dataContainer__ubzsL",investContact:"page_investContact__5ODAF",messageContainer:"page_messageContainer__F07__",quoteContainer:"page_quoteContainer__yYsim"}},4063:function(e){e.exports={buttonWrapper:"button_buttonWrapper__NwRg4",primaryColor:"button_primaryColor__O1Xqh",lightColor:"button_lightColor__YN8hz",noBg:"button_noBg__8TbX8",normalPadding:"button_normalPadding__h0kDk",smallPadding:"button_smallPadding__uup0J"}},9028:function(e){e.exports={coverLetterWrapper:"coverLetter_coverLetterWrapper__4d1Ik",imgContainer:"coverLetter_imgContainer__1O6k_",group:"coverLetter_group__2U7_P",name:"coverLetter_name__anZl_",profession:"coverLetter_profession__eSgec",description:"coverLetter_description__HJ1ao"}},6588:function(e){e.exports={donutChartWrapper:"donutChart_donutChartWrapper__AoF6_"}},9956:function(e){e.exports={infoItemWraper:"infoItem_infoItemWraper__nCBue"}},4097:function(e){e.exports={infoComponentWrapper:"info_infoComponentWrapper__0zDMB",infocontainer:"info_infocontainer__xWWPz",decoratorContainer:"info_decoratorContainer__0Ayrt",titleContainer:"info_titleContainer__Oywfo",buttonContainer:"info_buttonContainer__vcHHh",left:"info_left__baleA",center:"info_center__e57_6",right:"info_right__85k2H",imageContainer:"info_imageContainer__cbFul"}},1089:function(e){e.exports={quoteWrapper:"quote_quoteWrapper___cp8X",imgContainer:"quote_imgContainer__GhTSI",textGroup:"quote_textGroup__FbHvk",text:"quote_text__d87iz",name:"quote_name__mSBV_"}},523:function(e){e.exports={timeline:"timeline_timeline___O2hr",point:"timeline_point__yIi1W",dot:"timeline_dot__VguxF",line:"timeline_line__w420v"}}},function(e){e.O(0,[674,796,971,69,744],function(){return e(e.s=9109)}),_N_E=e.O()}]);