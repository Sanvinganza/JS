// window.ARRAYUTILS = (function(){
//     function ARRAYUTILS(el){
//         for(let i = 0; i < el.length; i++ ){
//             this[i] = el[i];
//         }
//         this.lenght = el.length;
//     }

//     let ARRAYUTILS = {
//         get: function (selector){
//             let el;
//             if(typeof selector === "string"){
//                 el = document.querySelectorAll(selector);
//             } else if(selector.lengh){
//                 el = selector;
//             } else {
//                 el = [selector];
//             }
//             return new ARRAYUTILS(el);
//         }
//     };
//     return ARRAYUTILS;
// })();

// let test = new ARRAYUTILS;