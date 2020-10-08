__NUXT_JSONP__("/blog/why-im-moving-to-typescript", (function(a){return {data:[{title:"Why I'm moving to Typescript!",author:"soulsam480",authorlink:"https:\u002F\u002Fgithub.com\u002Fsoulsam480",date:"2020-10-08T08:04:24.552Z",update:"2020-10-08T08:04:24.571Z",published:a,updated:a,type:"ts",thumbnail:"\u002Fimages\u002Fuploads\u002Fts-baner.webp",summary:"I have been a Javascript user for about three years. My first line of code was in javascript. I love writing code in Javascript because of its simplicity and adaptability. Javascript has escaped the browser long ago thanks to Nodejs and Ryan Dahl and there are possibly a few devices that can't run js. It feels great to write the front end and backend of an application in the same language regardless of it's size. Also, the community support of javascript and all the frameworks based on it is immense. Big tech companies to small startups you name it all use javascript in some part of their product\u002Fservice. So It's not easy to run away from javascript.",slug:"why-im-moving-to-typescript",html:"\u003Cp\u003EI have been a Javascript user for about three years. My first line of code was in javascript. I love writing code in Javascript because of its simplicity and adaptability. Javascript has escaped the browser long ago thanks to Nodejs and Ryan Dahl and there are possibly a few devices that can't run Js. It feels great to write the front end and backend of an application in the same language regardless of it's size. Also, the community support of javascript and all the frameworks based on it is immense. Big tech companies to small startups you name it all use javascript in some part of their product\u002Fservice. So It's not easy to run away from javascript.\u003C\u002Fp\u003E\n\u003Cp\u003EI came to know of Typescript a year ago or less. I didn't know much about it as I never came to use it before. So after getting a bit familiar with Vue, I thought of learning React. Like Vue, I tried to learn React by myself, and in the process, I found that React is more intuitive with Typescript. For those who don't know of React, it uses a flavor of Javascript which is \u003Ccode\u003EJSX\u003C\u002Fcode\u003E. JSX makes it possible to write HTML in Javascript. It's not some alien stuff, just javascript combined with HTML. I went through a couple of youtube tutorials on React and I noticed that when wrote with \u003Ccode\u003ETSX\u003C\u002Fcode\u003E(Typescript counterpart of JSX) it's more error-proof, intuitive and the overall experience of coding is good.\nSo I hopped on to learn Ts. Typescript is not a new language, it's more like a superset of Javascript. Any valid Javascript code is valid in Ts. To understand the need for Typescript we have to find out what are the problems with Javascript.\u003C\u002Fp\u003E\n\u003Cp\u003ESo if anybody is familiar with statically typed languages like Java and C, should have noticed that there is no such thing as type declarations in Javascript. Javascript is a dynamically typed language i.e. a variable which has a string value can be reassigned to number value and Js won't through an error. But in production or runtime, there may be unknown errors. Writing and using classes in Js is pain. Ts makes it more easy and intuitive to work with classes and modules support. Documenting a codebase in Js is also hard, ex.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E\u002F**\n * @param {object} user \n * \n*\u002F\n\nfunction yolo(user){\n    console.log(user.name)\n    console.log(user.email)\n}\n\nconst user1 = &quot;sambit&quot;\n\nyolo(user1) \u002F\u002F IDE won't warn us here but this will throw \n\u002F\u002F an error in runtime\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EAs we can see that even with JsDoc there is no way our editor can warn us if we pass the user parameter as a string.\u003C\u002Fp\u003E\n\u003Cp\u003EBut with Ts this is possible\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Einterface User{\n    name:string,\n    email:string\n}\n\nfunction yolo(user:User){\n    console.log(user.name)\n    console.log(user.email)\n}\n\nconst user1 = &quot;sambit&quot;\n\nyolo(user1) \n\u002F\u002F here Ts will throw an error because the type of user doesn't match\n\u002F\u002F the required type.\n\nconst user2:User = {\n    name:&quot;sambit&quot;,\n    email:&quot;sambit@yd.com&quot;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EAs we can see above the constant \u003Ccode\u003Euser2\u003C\u002Fcode\u003Eis assigned a type of \u003Ccode\u003EUser\u003C\u002Fcode\u003E by type assertion. So Ts knows that user1is of User type and the function yolo accepts user parameter which has the type User. As a result, there won't be any runtime error.\nBut if we try to do this\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Econst user2:User = {\n    name:&quot;sambit&quot;,\n    email:&quot;sambit@yd.com&quot;,\n    age: 21,\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ETs will throw an error as there is no property age defined in the User interface. This will make the development process error-free and the experience will be great.\u003C\u002Fp\u003E\n\u003Cp\u003EThe main purpose of Ts is to provide type definitions so that there will be fewer runtime errors. With type definitions, we will be knowing what type of parameters a function accepts, and that will lead to a clean codebase.\u003C\u002Fp\u003E\n\u003Cp\u003EIt's been about two months since I started using Ts in my projects. The experience has been great. Ts is not fully integrated into Vue 2.x so there are some problems during development. But Vue 3.0.0 is completely written in Typescript. This means you don't need any additional tooling to use TypeScript with Vue 3 - it has first-class citizen support. With React, the experience is great. In my backend projects, I'm slowly starting to use Ts. I'm also migrating my old codebases in Javascript to Typescript.\u003C\u002Fp\u003E\n\u003Cp\u003ETypescript has revolutionized the Javascript development scenario. Microsoft has done a great job in creating Ts and it's also open-source. It's in active development and a new version comes out in regular intervals. Ending this post with an amazing comment from Ryan Dahl (the creator of Nodejs)\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E&quot;I'm convinced that Typescript is future version of Javascript.&quot;\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003EThank you for reading. Peace ✌🏼.\u003C\u002Fp\u003E\n\u003Ch6\u003Eimage from www.positronx.io\u003C\u002Fh6\u003E\n"}],fetch:[],mutations:void 0}}("Thursday, Oct 8, 2020")));