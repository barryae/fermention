(this.webpackJsonpfermention=this.webpackJsonpfermention||[]).push([[0],{133:function(e,t,a){e.exports=a(166)},138:function(e,t,a){},139:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=(a(138),a(29)),c=a(30),o=a(33),u=a(31),m=a(34),d=a(28),p=a(50),g=(a(139),a(15)),h=a(37),E=a.n(h),f={signup:function(e){return E.a.post("/api/signup",e)},authenticate:function(e){return E.a.post("/api/authenticate",e)},getUser:function(){return E.a.get("/api/me",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},createRecipe:function(e){return E.a.post("/api/recipes",e)},deleteRecipe:function(e){return E.a.delete("/api/recipes"+e)},getUserRecipes:function(e){return E.a.get("/api/recipes/"+e)},getAllRecipes:function(){return E.a.get("/api/recipes")}},v=a(38),b=a(197),y=a(167),w=a(68),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={brewDate:new Date(a.props.endTime),date:new Date,timer:"00:00:00:00"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"timetoBrew",value:function(e){if(e<=0)return"FINISHED!";var t=Math.floor(e/864e5);e%=864e5;var a=Math.floor(e/36e5);e%=36e5;var n=Math.floor(e/6e4);e%=6e4;var r=Math.floor(e/1e3);return"".concat(t," days ").concat(a," hours ").concat(n," minutes ").concat(r," seconds")}},{key:"tick",value:function(){var e=this.state.brewDate-this.state.date;this.setState({date:new Date,timer:this.timetoBrew(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.timer)}}]),t}(n.Component),O=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),marginBottom:e.spacing(1),marginTop:e.spacing(2)},image:{margin:e.spacing(0),marginTop:e.spacing(0),marginLeft:e.spacing(0),float:"left"}}})),j=function(e){var t=O();return r.a.createElement(b.a,{container:!0,item:!0,xs:12,key:e.id,spacing:2},r.a.createElement(y.a,{className:t.paper,variant:"outlined",elevation:2},r.a.createElement(b.a,{container:!0,item:!0,xs:12,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"h5"},e.title," by ",r.a.createElement("span",{onClick:function(){return e.setUser(e.user)},id:"username"},e.user?e.user:"Anonymous User")," ")),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement("img",{className:t.image,src:""!==e.picture?e.picture:"./images/fermention-default.jpg",style:{width:"100%"},alt:"User Brew"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(w.a,{variant:"body1"},r.a.createElement("b",null,"Category:\xa0"),e.category),r.a.createElement(w.a,{variant:"body1"},r.a.createElement("b",null,"Ingredients:")," "),r.a.createElement("ul",null,e.ingredients.length>0?e.ingredients.map((function(e){return r.a.createElement("li",{key:e.ingredient},e.ingredient,"\xa0",e.amount,e.units)})):r.a.createElement("p",null,"(None Listed)")),r.a.createElement(w.a,{variant:"body1"},r.a.createElement("b",null,"Description:\xa0"),e.description?e.description:"(Not Provided)")),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"body1"},r.a.createElement("b",null,"Total Brew Time:")," ",e.brewLength)),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"body1"},r.a.createElement("b",null,"Brewing Status:")," ",r.a.createElement(C,{endTime:e.endTime}))))))},k=a(210),I=a(211),x=a(168),S=a(112),N=a(201),D=Object(n.createContext)(),F=a(199),L=a(200);var B={isLoggedIn:function(){return!!localStorage.getItem("token")},logIn:function(e,t,a){E.a.post("/api/authenticate",{username:e,password:t}).then((function(e){localStorage.setItem("token",e.data.token),a(e.data)}))},logOut:function(e){localStorage.removeItem("token"),e()},getToken:function(){return localStorage.getItem("token")}},T=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),marginBottom:e.spacing(1),marginTop:e.spacing(2)},image:{margin:e.spacing(0),marginTop:e.spacing(0),marginLeft:e.spacing(0),float:"left"}}})),U=function(e){var t=T(),a=Object(p.f)();return r.a.createElement(b.a,{container:!0,item:!0,xs:12,spacing:2},r.a.createElement(y.a,{className:t.paper,variant:"outlined",elevation:2},r.a.createElement(b.a,{container:!0,item:!0,xs:12,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"h5"},e.user?e.user:"Anonymous User","'s Ferments"),r.a.createElement(F.a,null,r.a.createElement(L.a,{color:"inherit",onClick:function(){B.logOut((function(){a.push("/")}))},to:"/",className:t.link},"Logout"))))))},W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",database:[],recipes:[],category:"All",search:"",brewStatus:"All"},a.setUser=function(e){a.setState({user:e})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r),(function(){a.filterFeed()}))},a.loadRecipes=function(){f.getUserRecipes(a.state.user.username).then((function(e){a.setState({database:e.data,recipes:e.data})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&f.getUser().then((function(t){e.setUser(t.data),e.loadRecipes()}))}},{key:"filterFeed",value:function(){var e=this,t=this.state.database.filter((function(t){var a=!0;return"All"!==e.state.category&&(a=a&&e.categoryFilter(t)),e.state.search&&(a=a&&e.ingredientFilter(t)),"All"!==e.state.brewStatus&&(a=a&&e.statusFilter(t)),a}));this.setState({recipes:t})}},{key:"categoryFilter",value:function(e){return e.category===this.state.category}},{key:"statusFilter",value:function(e){return"Finished"===this.state.brewStatus?new Date(e.endTime)<new Date:"Brewing"===this.state.brewStatus?new Date(e.endTime)>new Date:void 0}},{key:"ingredientFilter",value:function(e){var t=this.state.search;if(0!==e.ingredients.length){for(var a=0;a<e.ingredients.length;a++)if(e.ingredients[a].ingredient.toLowerCase().includes(t.toLowerCase()))return e.ingredients[a].ingredient.toLowerCase().includes(t.toLowerCase());return!1}return!1}},{key:"render",value:function(){return r.a.createElement(b.a,{container:!0,justify:"center",spacing:6},r.a.createElement(b.a,{container:!0,item:!0,justify:"center",xs:12,sm:8},r.a.createElement(U,{user:this.state.user.username})),r.a.createElement(b.a,{item:!0,xs:12,sm:8},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(I.a,null,"Search Ingredients"),r.a.createElement(x.a,{value:this.state.search,name:"search",onChange:this.handleInputChange}))),r.a.createElement(b.a,{container:!0,item:!0,justify:"center",spacing:6,xs:12,sm:8},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(S.a,{value:this.state.category,name:"category",onChange:this.handleInputChange},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Beer"},"Beer"),r.a.createElement("option",{value:"Vinegar"},"Vinegar"),r.a.createElement("option",{value:"Bread"},"Bread"),r.a.createElement("option",{value:"Pickle"},"Pickle"),r.a.createElement("option",{value:"Kombucha"},"Kombucha"),r.a.createElement("option",{value:"Miso"},"Miso"),r.a.createElement("option",{value:"Wine"},"Wine"),r.a.createElement("option",{value:"Kimchi"},"Kimchi"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement(N.a,null,"Filter by Category"))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(S.a,{value:this.state.status,name:"brewStatus",onChange:this.handleInputChange},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Finished"},"Finished"),r.a.createElement("option",{value:"Brewing"},"Currently Brewing")),r.a.createElement(N.a,null,"Filter by Brewing Status")))),r.a.createElement(b.a,{container:!0,item:!0,justify:"center",xs:12,sm:8},this.state.recipes.length>0?r.a.createElement(r.a.Fragment,null,this.state.recipes.map((function(e){return r.a.createElement(j,{key:e._id,id:e._id,category:e.category,title:e.title,description:e.description,user:e.user,picture:e.picture,ingredients:e.ingredients,endTime:e.endTime,brewLength:e.brewLength}," ")}))):r.a.createElement(b.a,{item:!0,xs:12,sm:8},r.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);W.contextType=D;var A=W,P=a(61),M=a(67),R=a(212),K=a(203),V=a(208),q=a(83),_=a.n(q),H=a(202),G=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var z=Object(p.g)((function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(M.a)(t,2),i=a[0],l=a[1],s=Object(n.useContext)(D),c=function(e){var t=e.target,a=t.name,n=t.value,r=Object(P.a)({},i,Object(g.a)({},a,n));l(r)},o=function(t){t.preventDefault();var a=i.username,n=i.password;a&&n&&B.logIn(a,n,(function(t){s.setUser(t),e.history.push("/")}))},u=G();return r.a.createElement(H.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:u.paper},r.a.createElement(R.a,{className:u.avatar},r.a.createElement(_.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Log In"),r.a.createElement("form",{className:u.form,onSubmit:o,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:i.username,onChange:c})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i.password,onChange:c}))),r.a.createElement(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:u.submit,onClick:o},"Log In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0},r.a.createElement(L.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))}));var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null))},Q=a(85),X=a.n(Q),Y=a(117),Z=a(14),$=a(204),ee=a(214),te=a(115),ae=(a(165),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",category:"Other",description:"",ingredients:[],startTime:new Date,endTime:new Date,days:0,hours:0,mins:0,picture:"",ingredient:"",amount:1,units:"mL",loading:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value,i=t.type;a.setState(Object(g.a)({},n,"number"===i?parseInt(r):r))},a.handleDateChange=function(e){a.setState({startTime:e})},a.deleteIngredient=function(e){var t=a.state.ingredients.filter((function(t){return t.ingredient!==e}));a.setState({ingredients:t})},a.calcEndDate=function(e,t,n){var r=new Date,i=a.state.startTime;return r.setMinutes(i.getMinutes()+n),r.setHours(r.getHours()+t),r.setDate(r.getDate()+e),r},a.calcBrewLength=function(e,t,a){return"".concat(e," days ").concat(t," hours ").concat(a," minutes 0 seconds")},a.addIngredient=function(e){e.preventDefault();for(var t=a.state.ingredients,n=!0,r=0;r<t.length;r++)a.state.ingredient.toLowerCase()===t[r].ingredient.toLowerCase()&&(n=!1);if(a.state.ingredient&&n){var i={ingredient:a.state.ingredient,amount:a.state.amount,units:a.state.units};a.setState({ingredient:"",amount:1,units:"mL",ingredients:[].concat(Object(Y.a)(t),[i])})}},a.imageUpload=function(e){var t,n,r,i;return X.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.target.files,(n=new FormData).append("file",t[0]),n.append("upload_preset","fermention"),a.setState({loading:!0}),l.next=7,X.a.awrap(fetch("https://api.cloudinary.com/v1_1/dyiisb9c8/image/upload",{method:"POST",body:n}));case 7:return r=l.sent,l.next=10,X.a.awrap(r.json());case 10:i=l.sent,a.setState({picture:i.secure_url,loading:!1});case 12:case"end":return l.stop()}}))},a.handleSubmit=function(e){e.preventDefault();var t={user:a.context.user.username,title:a.state.title,category:a.state.category,ingredients:a.state.ingredients,description:a.state.description,startTime:a.state.startTime,endTime:a.calcEndDate(a.state.days,a.state.hours,a.state.mins),brewLength:a.calcBrewLength(a.state.days,a.state.hours,a.state.mins),picture:a.state.picture};""!==a.state.title&&(f.createRecipe(t).then((function(e){})).catch((function(e){return console.log(e)})),a.setState({title:"",category:"Other",description:"",ingredients:[],startTime:new Date,endTime:new Date,days:0,hours:0,mins:0,picture:"",ingredient:"",amount:1,units:"mL"}),a.fileInput.value="")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{maxWidth:"sm"},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement("h6",null,"Title:"),r.a.createElement(x.a,{value:this.state.title,name:"title",onChange:this.handleInputChange}),r.a.createElement(N.a,null,"Required")),r.a.createElement(k.a,{fullWidth:!0},r.a.createElement("h6",null,"Category:"),r.a.createElement(S.a,{value:this.state.category,name:"category",onChange:this.handleInputChange},r.a.createElement("option",{value:"Other"},"Other"),r.a.createElement("option",{value:"Beer"},"Beer"),r.a.createElement("option",{value:"Vinegar"},"Vinegar"),r.a.createElement("option",{value:"Bread"},"Bread"),r.a.createElement("option",{value:"Pickle"},"Pickle"),r.a.createElement("option",{value:"Kombucha"},"Kombucha"),r.a.createElement("option",{value:"Miso"},"Miso"),r.a.createElement("option",{value:"Wine"},"Wine"),r.a.createElement("option",{value:"Kimchi"},"Kimchi"))),r.a.createElement(k.a,{fullWidth:!0},r.a.createElement("h6",null,"Ingredients:"),r.a.createElement("ul",{className:"ingList"},this.state.ingredients.map((function(t){return r.a.createElement("li",{className:"ingListItem",key:t.ingredient},t.ingredient,": ",t.amount,t.units,r.a.createElement("button",{id:"ingBtn",onClick:function(){return e.deleteIngredient(t.ingredient)}},"\xd7"))}))),r.a.createElement("div",null,r.a.createElement("h5",{className:"subLabel"},"Name:"),r.a.createElement("input",{value:this.state.ingredient,id:"ingName",className:"subInput",name:"ingredient",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("h5",{className:"subLabel"},"Amount:"),r.a.createElement("input",{value:this.state.amount,id:"ingAmount",className:"subInput",type:"number",min:1,placeholder:1,name:"amount",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("h5",{className:"subLabel"},"Unit:"),r.a.createElement(S.a,{value:this.state.units,className:"subInput",id:"ingUnit",name:"units",onChange:this.handleInputChange},r.a.createElement("option",{value:"mL"},"mL"),r.a.createElement("option",{value:"L"},"L"),r.a.createElement("option",{value:"mg"},"mg"),r.a.createElement("option",{value:"g"},"g"),r.a.createElement("option",{value:"kg"},"kg")),r.a.createElement("br",null),r.a.createElement("button",{id:"ingBtn",onClick:this.addIngredient},"+"))),r.a.createElement(k.a,{fullWidth:!0},r.a.createElement("h6",null,"Description:"),r.a.createElement(V.a,{multiline:!0,value:this.state.description,onChange:this.handleInputChange,name:"description"})),r.a.createElement(k.a,null,r.a.createElement("h6",null,"Start Time:"),r.a.createElement(Z.a,{utils:te.a},r.a.createElement($.a,{margin:"normal",variant:"inline",format:"MM/dd/yyyy",onChange:this.handleDateChange,value:this.state.startTime}),r.a.createElement(ee.a,{margin:"normal",variant:"inline",onChange:this.handleDateChange,value:this.state.startTime}))),r.a.createElement(k.a,{fullWidth:!0},r.a.createElement("h6",null,"Brew Time:"),r.a.createElement("div",null,r.a.createElement("h5",{className:"subLabel"},"Days:"),r.a.createElement("input",{className:"subInput",id:"days",type:"number",min:0,name:"days",onChange:this.handleInputChange,placeholder:0,value:this.state.days}),r.a.createElement("br",null),r.a.createElement("h5",{className:"subLabel"},"Hours:"),r.a.createElement("input",{className:"subInput",id:"hours",type:"number",min:0,max:23,name:"hours",value:this.state.hours,onChange:this.handleInputChange,placeholder:0}),r.a.createElement("br",null),r.a.createElement("h5",{className:"subLabel"},"Minutes:"),r.a.createElement("input",{className:"subInput",id:"hours",type:"number",min:0,max:59,name:"mins",value:this.state.mins,onChange:this.handleInputChange,placeholder:0}))),r.a.createElement(k.a,null,r.a.createElement("h6",null,"Image:"),r.a.createElement("input",{type:"file",name:"file",onChange:this.imageUpload,ref:function(t){return e.fileInput=t}}),this.state.picture?r.a.createElement("img",{src:this.state.picture,alt:"Uploaded Brew",style:{width:"200px"}}):r.a.createElement("p",null,"No image uploaded.")),r.a.createElement("div",{id:"wrapper"},r.a.createElement(F.a,{size:"large",variant:"contained",color:"primary",id:"createBtn",onClick:this.handleSubmit},"Create New Brew"))))}}]),t}(n.Component));ae.contextType=D;var ne=ae;var re=function(){return r.a.createElement(ne,null)},ie=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={database:[],recipes:[],category:"All",search:"",brewStatus:"All",user:""},a.setUser=function(e){a.setState({user:e},a.filterFeed)},a.filterFeed=function(){var e=a.state.database.filter((function(e){var t=!0;return"All"!==a.state.category&&(t=t&&a.categoryFilter(e)),a.state.search&&(t=t&&a.ingredientFilter(e)),"All"!==a.state.brewStatus&&(t=t&&a.statusFilter(e)),a.state.user&&(t=t&&a.userFilter(e)),t}));a.setState({recipes:e})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r),(function(){a.filterFeed()}))},a.loadRecipes=function(){f.getAllRecipes().then((function(e){return a.setState({database:e.data,recipes:e.data})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadRecipes()}},{key:"categoryFilter",value:function(e){return e.category===this.state.category}},{key:"userFilter",value:function(e){return e.user===this.state.user}},{key:"statusFilter",value:function(e){return"Finished"===this.state.brewStatus?new Date(e.endTime)<new Date:"Brewing"===this.state.brewStatus?new Date(e.endTime)>new Date:void 0}},{key:"ingredientFilter",value:function(e){var t=this.state.search;if(0!==e.ingredients.length){for(var a=0;a<e.ingredients.length;a++)if(e.ingredients[a].ingredient.toLowerCase().includes(t.toLowerCase()))return e.ingredients[a].ingredient.toLowerCase().includes(t.toLowerCase());return!1}return!1}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{container:!0,justify:"center",spacing:6},r.a.createElement(b.a,{item:!0,xs:12,sm:8},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(I.a,null,"Search Ingredients"),r.a.createElement(x.a,{value:this.state.search,name:"search",onChange:this.handleInputChange}))),r.a.createElement(b.a,{container:!0,item:!0,justify:"center",spacing:6,xs:12,sm:8},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(S.a,{value:this.state.category,name:"category",onChange:this.handleInputChange},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Beer"},"Beer"),r.a.createElement("option",{value:"Vinegar"},"Vinegar"),r.a.createElement("option",{value:"Bread"},"Bread"),r.a.createElement("option",{value:"Pickle"},"Pickle"),r.a.createElement("option",{value:"Kombucha"},"Kombucha"),r.a.createElement("option",{value:"Miso"},"Miso"),r.a.createElement("option",{value:"Wine"},"Wine"),r.a.createElement("option",{value:"Kimchi"},"Kimchi"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement(N.a,null,"Filter by Category"))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{fullWidth:!0},r.a.createElement(S.a,{value:this.state.status,name:"brewStatus",onChange:this.handleInputChange},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Finished"},"Finished"),r.a.createElement("option",{value:"Brewing"},"Currently Brewing")),r.a.createElement(N.a,null,"Filter by Brewing Status")))),this.state.user?r.a.createElement(b.a,{item:!0,xs:12,sm:8},r.a.createElement(y.a,null,r.a.createElement(w.a,{variant:"h3",style:{padding:".5em"}},this.state.user,"'s Brews",r.a.createElement("span",{id:"clearUser",onClick:function(){return e.setUser("")}},"\xd7"))," ")):r.a.createElement(r.a.Fragment,null),r.a.createElement(b.a,{container:!0,item:!0,justify:"center",xs:12,sm:8},this.state.recipes.length>0?r.a.createElement(r.a.Fragment,null,this.state.recipes.map((function(t){return r.a.createElement(j,{key:t._id,id:t._id,category:t.category,title:t.title,description:t.description,user:t.user,picture:t.picture,ingredients:t.ingredients,endTime:t.endTime,brewLength:t.brewLength,setUser:e.setUser})}))):r.a.createElement(b.a,{item:!0,xs:12,sm:8},r.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),le=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},errors:{fontWeight:"bolder",color:"red"}}})),se=function(e){var t=!0;return Object.values(e).forEach((function(e){e.length>0&&(t=!1)})),t};var ce=Object(p.g)((function(e){var t=Object(n.useState)({username:"",password:"",confirmPassword:""}),a=Object(M.a)(t,2),i=a[0],l=a[1],s={username:"",password:"",confirmPassword:"",duplicate:""},c=Object(n.useState)(s),o=Object(M.a)(c,2),u=o[0],m=o[1],d=function(e){var t=e.target,a=t.name,n=t.value,r=Object(P.a)({},i,Object(g.a)({},a,n));l(r);var s=Object(P.a)({},u);switch(a){case"username":s.username=n.length<3?"minimum of 3 characters required":"";break;case"password":s.password=n.length<6?"minimum of 6 characters required":"";break;case"confirmPassword":s.confirmPassword=i.password!==n?"Must match Password":""}m(s)},p=Object(n.useContext)(D),h=function(t){t.preventDefault();var a=i.username,n=i.password,r=i.confirmPassword;if(se(u)&&a&&n===r){var l={username:a,password:n};f.signup(l).then((function(){B.logIn(a,n,(function(t){p.setUser(t),e.history.push("/")}))})).catch((function(e){console.log(e.response.data.error),m(Object(P.a)({},s,{duplicate:"Username is taken. Please try again."}))}))}},E=le();return r.a.createElement(H.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:E.paper},r.a.createElement(R.a,{className:E.avatar},r.a.createElement(_.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:E.form,onSubmit:h,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",noValidate:!0,autoFocus:!0,value:i.username,onChange:d}),u.username.length>0&&r.a.createElement("span",{className:E.errors},u.username),u.duplicate.length>0&&r.a.createElement("span",{className:E.errors},u.duplicate),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",noValidate:!0,autoComplete:"current-password",value:i.password,onChange:d}),u.password.length>0&&r.a.createElement("span",{className:E.errors},u.password),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,noValidate:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",value:i.confirmPassword,onChange:d}),u.confirmPassword.length>0&&r.a.createElement("span",{className:E.errors},u.confirmPassword))),r.a.createElement(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit,onClick:h},"Sign Up"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0},r.a.createElement(L.a,{href:"/login",variant:"body2"},"Already have an account? Log In"))))))}));var oe=function(){return r.a.createElement(ce,null)},ue=a(118),me=function(e){var t=e.component,a=Object(ue.a)(e,["component"]);return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return B.isLoggedIn()?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))},de=a(116),pe=a(207),ge=a(206),he=a(205),Ee=Object(v.a)((function(e){var t,a;return{root:{flexGrow:1,margin:e.spacing(3)},title:(t={flexGrow:1,margin:10},Object(g.a)(t,e.breakpoints.down("xs"),{display:"none"}),Object(g.a)(t,"float","left"),t),avatar:{margin:10,float:"left"},link:(a={color:"white"},Object(g.a)(a,e.breakpoints.down("xs"),{fontSize:".75rem"}),Object(g.a)(a,"textDecoration","none"),a),appitems:Object(g.a)({},e.breakpoints.down("xs"),{margin:"0 auto"})}})),fe=function(e){var t=Ee();return r.a.createElement(ge.a,{position:"static"},r.a.createElement(he.a,{className:t.appitems},e.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{variant:"square",src:"../logo192.png",className:t.avatar}),r.a.createElement(w.a,{variant:"h4",className:t.title},"Fermention")," ",r.a.createElement(F.a,null,r.a.createElement(d.b,{color:"inherit",to:"/home",className:t.link},"Home")),r.a.createElement(F.a,null,r.a.createElement(d.b,{color:"inherit",to:"/newbrew",className:t.link},"New Brew")),r.a.createElement(F.a,null,r.a.createElement(d.b,{color:"inherit",to:"/profile",className:t.link},"Profile"))):r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(R.a,{variant:"square",src:"../logo192.png",className:t.avatar}),r.a.createElement(w.a,{variant:"h4",className:t.title},"Fermention"))))},ve=Object(de.a)({palette:{primary:{main:"#55370f"}}}),be=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&f.getUser().then((function(t){e.setUser(t.data)}))}},{key:"render",value:function(){var e=this.state.user,t=this.setUser,a=B.isLoggedIn();return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{theme:ve},r.a.createElement(H.a,null,r.a.createElement(d.a,null,r.a.createElement(fe,{loggedIn:a}),r.a.createElement(D.Provider,{value:{user:e,setUser:t}},r.a.createElement(me,{exact:!0,path:"/",component:ie}),r.a.createElement(me,{exact:!0,path:"/home",component:ie}),r.a.createElement(me,{exact:!0,path:"/newbrew",component:re}),r.a.createElement(me,{exact:!0,path:"/profile",component:A}),r.a.createElement(p.b,{exact:!0,path:"/login",component:J}),r.a.createElement(p.b,{exact:!0,path:"/signup",component:oe}))))))}}]),t}(n.Component);l.a.render(r.a.createElement(be,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.145814c5.chunk.js.map