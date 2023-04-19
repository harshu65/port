(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},21:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(7),r=t.n(l),c=(t(21),t(2)),i=t(3),m=t(5),o=t(4),u=t(6),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"home"},s.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm pt-sm-0 pb-sm-0 bg-dark justify-content-center"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("a",{className:"navbar-brand d-none",href:"#"},"Navbar"),s.a.createElement("button",{style:{backgroundColor:"#767676"},className:"navbar-toggler  ms-auto ms-sm-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse  justify-content-center",id:"navbarSupportedContent"},s.a.createElement("ul",{id:"nav",className:"navbar-nav  justify-content-center"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"smoothscroll nav-link",href:"#home"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"smoothscroll nav-link",href:"#about"},"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"smoothscroll nav-link",href:"#resume"},"Resume")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"smoothscroll nav-link",href:"#portfolio"},"Works")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"smoothscroll nav-link",href:"#contact"},"Contact")))))),s.a.createElement("div",{className:"row g-0 banner  mt-4 pt-5 pb-md-5 mt-md-5 pt-md-5"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline   ps-sm-4 pe-sm-4  pt-3 pt-sm-0",style:{color:"#e2e2e2",fontSize:"90px"}},"Hi, I am ",e.name,"."),s.a.createElement("h3",{className:"pt-md-3 ps-sm-5 pe-sm-5 ms-5 me-5 h4",style:{color:"#fff",fontFamily:"monospace "}},"I am a ",e.role,".",e.roleDescription),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("i",{className:e.className})))}))))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{className:"ps-sm-5 p-4 pb-0",id:"about"},s.a.createElement("div",{className:"row g-0"},s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",{className:"mb-0"},e.aboutme1),s.a.createElement("p",{className:"mb-0"},e.aboutme2),s.a.createElement("p",null,e.aboutme3),s.a.createElement("div",{className:"row g-0 g-0"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e.name),s.a.createElement("br",null),s.a.createElement("span",null,e.address),s.a.createElement("br",null),s.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"resume",className:"ps-sm-5 p-4 pb-0"},s.a.createElement("div",{className:"row g-0 education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return s.a.createElement("div",{className:"row g-0 item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.UniversityName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row g-0 work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return s.a.createElement("div",{className:"row g-0 item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.CompanyName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row g-0 skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("p",null,e.skillsDescription),s.a.createElement("div",{className:"bars  ps-0 ps-xl-3  pt-3 pt-sm-4"},s.a.createElement("ul",{className:"skills ps-0 ps-xl-3"},e.skills&&e.skills.map(function(e){return s.a.createElement("li",null,s.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),s.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=t(34),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(E.a,{id:"portfolio",variant:"dark",className:"px-sm-5 mb-xl-2 mb-sm-3 carousel slide carousel-dark"},s.a.createElement(E.a.Item,{pause:"hover"},s.a.createElement("img",{className:"d-block w-100",src:"https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/todo.jpg",alt:"First slide"}),s.a.createElement(E.a.Caption,{className:"text-white"},s.a.createElement("h2",{className:"skinc"},"Todo App"),s.a.createElement("p",{className:"mb-0"},"It's a Todo List App built Using ReactJS."),s.a.createElement("a",{className:"text-decoration-none",href:"https://harshu65.github.io/react-todo/"},s.a.createElement("p",null,s.a.createElement("kbd",{className:"h6 text-white"},"https://harshu65.github.io/react-todo/"))))),s.a.createElement(E.a.Item,{pause:"hover"},s.a.createElement("img",{className:"d-block w-100",src:"https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/techtonic.jpg",alt:"Second slide"}),s.a.createElement(E.a.Caption,{className:"text-white"},s.a.createElement("h2",{className:"skinc"},"Techtonic"),s.a.createElement("p",{className:"mb-0"},"It is a fully responsive static-website built using w3css."),s.a.createElement("a",{className:"text-decoration-none",href:"https://github.com/harshu65/techtonic"},s.a.createElement("p",null,s.a.createElement("kbd",{className:"h6 text-white"},"https://github.com/harshu65/techtonic"))))),s.a.createElement(E.a.Item,{pause:"hover"},s.a.createElement("img",{className:"d-block w-100",src:"https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/cal.jpg",alt:"Third slide"}),s.a.createElement(E.a.Caption,{className:"text-white"},s.a.createElement("h2",{className:"skinc"},"Calculator App"),s.a.createElement("p",{className:"mb-0"},"Calculator App Using ReactJS"),s.a.createElement("a",{className:"text-decoration-none",href:"https://harshu65.github.io/cal-reactjs/"},s.a.createElement("p",null,s.a.createElement("kbd",{className:"h6 text-white"},"https://harshu65.github.io/cal-reactjs/"))))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"contact",className:"ps-5"},s.a.createElement("div",{className:"row g-0 "},s.a.createElement("div",{className:"ten columns"},s.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),s.a.createElement("div",{className:"row g-0"},s.a.createElement("aside",{className:"eigth columns footer-widgets"},s.a.createElement("div",{className:"widget"},s.a.createElement("h4",{className:"fw-bold"},"LinkedIn\ud83e\udc6d",s.a.createElement("br",null),s.a.createElement("a",{href:"https://www.linkedin.com/in/harsh-kureel",className:"fw-normal text-white text-decoration-none"},e.linkedinId)),s.a.createElement("h4",{className:"fw-bold"},"Github\ud83e\udc6d",s.a.createElement("br",null),s.a.createElement("a",{href:"https://github.com/harshu65",className:"fw-normal text-white text-decoration-none"},e.website))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){this.props.resumeData;return s.a.createElement("footer",null,s.a.createElement("div",{className:"row  mx-auto px-auto"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"text-white lead"},"Made By Harsh"))))}}]),a}(n.Component),f={imagebaseurl:"https://rbhatia46.github.io/",name:"Harsh Kureel",role:"Frontend Developer",linkedinId:"https://www.linkedin.com/in/harsh-kureel",instagramid:"Your instagramid",roleDescription:" I'm seeking a challenge to apply my knowledge and skills in a consumer-focused software organization. Apart from technical skills, I love to create digital artworks and animations.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/harsh-kureel",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/harshu65",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/8_istique/?hl=en",className:"fa fa-instagram"}],aboutme1:"- Hello \ud83d\udc4b, I\u2019m Harsh, a 22 year old software engineer and web developer from India.",aboutme2:"- I am currently working as a web developer executive at Brand Bazooka Advertising Pvt. Ltd., Gurugram, India.I am also pursuing A-level(IT) course from National Institute of Electronics & Information Technology (NIELIT). I did my undergraduate studies in Software Development from Guru Gobind Singh Indraprastha University, Delhi, India.",aboutme3:"- I have experience in Front-end web development (HTML, CSS, W3CSS, Javascript, Content Management Systems) and I'm seeking a challenge to apply my knowledge and skills in a consumer-focused software organization. Apart from technical skills, I love to create digital artworks and animations.",address:"India",website:"https://github.com/harshu65",education:[{UniversityName:"Ambedkar Institute Of Technology",specialization:"Software Development",MonthOfPassing:"Aug",YearOfPassing:"2021"}],work:[{CompanyName:"Brand Bazooka Advertising Pvt. Ltd.",specialization:"Web Developer Executive",MonthOfLeaving:"July",YearOfLeaving:"2022",Achievements:"- Designed dynamic and responsive websites.-Optimized media and source code to resolve website performance issues.- Implemented cross-browser compatibilities.- Improved user experience and user engagement (time-on-page)."}],skillsDescription:"I have experience in Front-end web development (HTML, CSS, W3CSS, Javascript, Content Management Systems) and I'm seeking a challenge to apply my knowledge and skills in a consumer-focused software organization.",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"Library Management",description:"Managing Library Records",imgurl:"--images/portfolio/project1.jpg"},{name:"Stock Management",description:"Provides efficient and Accurate Inventory items",imgurl:"--images/portfolio/project2.jpg"},{name:"Coreldraw logo",description:"Logo Designing",imgurl:"--images/portfolio/project3.jpg"},{name:"Techtonic",description:"W3CSS Tech Review Website",imgurl:"--images/portfolio/project4.jpg"}]},N=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,{resumeData:f}),s.a.createElement(d,{resumeData:f}),s.a.createElement(h,{resumeData:f}),s.a.createElement(b,{resumeData:f}),s.a.createElement(g,{resumeData:f}),s.a.createElement(v,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(25),t(27);r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.da287204.chunk.js.map