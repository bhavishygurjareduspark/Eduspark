!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});



// my javascript 
AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 50 });

        const firebaseConfig = { // IMPORTANT: REPLACE WITH YOUR ACTUAL FIREBASE CONFIG
            apiKey: "AIzaSyBNi6BHTKNd62VAY7q1oHQmxjZ3r0MUA9U", // Replace with your actual API key
            authDomain: "edusparkk.xyz",
            projectId: "eduspark-new",
            storageBucket: "eduspark-new.appspot.com",
            messagingSenderId: "564501033350",
            appId: "1:564501033350:web:70c0f9873f96e9bd74fc07",
            measurementId: "G-NM2SE3DE7J"
        };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();
        const storage = firebase.storage();
        const appCheck = firebase.appCheck();
        appCheck.activate('6LcmlWArAAAAAMZ3J-ZJ-PcHjK3ckRZbMq4HLLhO', true)
        
       
  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Lf781IrAAAAAKUivV71zU3gRGRX2pSwvJbsR4zx', {action: 'LOGIN'});
    });
  }

        const $ = (s) => document.querySelector(s);
        const $$ = (s) => document.querySelectorAll(s);

        const elements = {
            loadingOverlay: $('#loadingOverlay'), loadingMessage: $('#loadingMessage'), body: document.body, header: $('.header'),
            userAvatar: $('#userAvatar'), avatarInitials: $('#avatarInitials'),
            logoLink: $('#logoLink'), searchInput: $('#searchInput'), searchResults: $('#searchResults'), searchContainer: $('#searchContainer'),searchToggleBtn:$("#searchToggleBtn"),
            
            allBatchesNavBtn: $('#allBatchesNavBtn'), myBatchesNavBtn: $('#myBatchesNavBtn'),
            supportNavBtn: $('#supportNavBtn'), profileNavBtn: $('#profileNavBtn'), notificationsNavBtn: $('#notificationsNavBtn'),
            
            allBatchesPage: $('#allBatchesPage'), myBatchesPage: $('#myBatchesPage'),
            supportPage: $('#supportPage'), profilePage: $('#profilePage'), notificationsPage: $('#notificationsPage'),
            
            allBatchesContainer: $('#allBatchesContainer'), emptyStateAllBatches: $('#emptyStateAllBatches'),
            myBatchesContainer: $('#myBatchesContainer'), emptyStateMyBatches: $('#emptyStateMyBatches'),
            
            chatArea: $('#chatArea'), supportInput: $('#supportInput'), sendSupportBtn: $('#sendSupportBtn'), emptyStateSupport: $('#emptyStateSupport'),
            quickResponsesContainer: $('#quickResponsesContainer'), faqBtn: $('#faqBtn'),

            profileBackBtn: $('#profileBackBtn'), profileAvatarLarge: $('#profileAvatarLarge'),
            profileAvatarInitialsLarge: $('#profileAvatarInitialsLarge'), profileNameLarge: $('#profileNameLarge'),
            profileUsernameLarge: $('#profileUsernameLarge'), profileEmailLarge: $('#profileEmailLarge'),
            profileJoinedLarge: $('#profileJoinedLarge'), 
            profilePointsLarge: $('#profilePointsLarge'), profileLastActiveLarge: $('#profileLastActiveLarge'),
            profileBioText: $('#profileBioText'), 
            profileBatchesEnrolledCount: $('#profileBatchesEnrolledCount'), profilePointsStat: $('#profilePointsStat'),
            profileEnrolledBatchesList: $('#profileEnrolledBatchesList'), emptyStateProfileBatches: $('#emptyStateProfileBatches'),
            editProfileBtn: $('#editProfileBtn'), logoutBtn: $('#logoutBtn'),

            notificationsListContainer: $('#notificationsListContainer'), notificationsBackBtn: $('#notificationsBackBtn'), 
            emptyStateNotifications: $('#emptyStateNotifications'), unreadNotificationsBadge: $('#unreadNotificationsBadge'),
            markAllNotificationsReadBtn: $('#markAllNotificationsReadBtn'),
            
            loginModal: $('#loginModal'), signupModal: $('#signupModal'), editProfileModal: $('#editProfileModal'), faqModal: $('#faqModal'),
            closeLoginModal: $('#closeLoginModal'), closeSignupModal: $('#closeSignupModal'), closeEditProfileModal: $('#closeEditProfileModal'), closeFaqModal: $('#closeFaqModal'),
            loginForm: $('#loginForm'), signupForm: $('#signupForm'), editProfileForm: $('#editProfileForm'),
            switchToSignup: $('#switchToSignup'), switchToLogin: $('#switchToLogin'),
            googleLoginBtn: $('#googleLoginBtn'), googleSignupBtn: $('#googleSignupBtn'),
            profilePictureInput: $('#profilePictureInput'), profilePicturePreview: $('#profilePicturePreview'),
            faqListContainer: $('#faqListContainer'), emptyStateFaq: $('#emptyStateFaq'),
            toastContainer: $('#toastContainer')
        };

        let currentUser = null, userData = null, isUserDataLoading = true, currentChatThreadId = null;
        let userEnrolledBatchesIds = [];
        let allBatchesCache = [];
        let tempProfilePicFile = null;
        let listeners = { user: null, batches: null, enrolledBatches: null, supportChatThread: null, supportChatMessages: null, userNotifications: null, allBatchesSearch: null };
        const BATCHES_PER_PAGE = 9; 
        let lastVisibleBatch = null;
        let isLoadingBatches = false;
        let hasMoreBatches = true;
        let lastActiveMainPageKey = 'allBatches'; // For back button logic

        const QUICK_RESPONSES = ["How to enroll?", "What are the timings?", "Fee structure?", "Need tech support"];
        const FAQS = [
            { q: "How do I enroll in a batch?", a: "To enroll, find the batch you're interested in on the 'All Batches' page and click the 'Explore & Enroll' button. If a batch link is provided, it may take you to an external site for enrollment." },
            { q: "Can I access recordings if I miss a live class?", a: "This depends on the specific batch. Please check the batch description or contact support for details about recordings for a particular batch." },
            { q: "What are the payment options?", a: "Payment options are usually detailed on the batch enrollment page, which you can access via the 'Explore & Enroll' or 'Go to Course' button. We use external links for batch specific pages." },
            { q: "How do I get support for a technical issue?", a: "You can use the 'Support Chat' feature available on the bottom navigation bar. Our team will assist you as soon as possible." },
            { q: "Is there a mobile app?", a: "Currently, EduSparK Batches is web-based and accessible on all devices through your browser. A dedicated mobile app might be considered in the future." }
        ];

        const loadingMessages = [ "Loading Courses...", "Fetching Your Profile...", "Preparing the Awesomeness...", "Sparking Your Learning...", "Almost Ready..." ];
        let loadingMessageIndex = 0;
        let loadingInterval;

        function startLoadingMessages() {
            if (elements.loadingMessage) {
                elements.loadingMessage.textContent = loadingMessages[0];
                loadingInterval = setInterval(() => {
                    loadingMessageIndex = (loadingMessageIndex + 1) % loadingMessages.length;
                    elements.loadingMessage.textContent = loadingMessages[loadingMessageIndex];
                }, 2000); 
            }
        }
        function stopLoadingMessages() { clearInterval(loadingInterval); }

        function escapeHTML(str) { if (str === null || str === undefined) return ''; return String(str).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
        function showToast(message, type = "info", duration = 3500) { const toastId='toast-'+Date.now();const t=document.createElement('div');t.className=`toast ${type}`;t.id=toastId;let i='fas fa-info-circle';type==='success'&&(i='fas fa-check-circle');type==='error'&&(i='fas fa-times-circle');t.innerHTML=`<i class="${i}"></i><span>${escapeHTML(message)}</span><button class="toast-close" aria-label="Close toast">&times;</button>`;elements.toastContainer.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));t.querySelector('.toast-close').onclick=()=>{t.classList.remove('show');setTimeout(()=>{t.parentElement&&t.remove()},500)};setTimeout(()=>{const currentToast=document.getElementById(toastId); if(currentToast){currentToast.classList.remove('show');setTimeout(()=>{currentToast.parentElement&&currentToast.remove()},500)}},duration);}
        function openModal(modalEl) { modalEl.classList.add('active'); elements.body.style.overflow = 'hidden'; AOS.refresh(); }
        function closeModal(modalEl) { modalEl.classList.remove('active'); const anyModalActive=!!$$('.modal.active').length;const anyPageActive=!!$$('.profile-page.active, .notifications-page.active').length;if(!anyModalActive && !anyPageActive)elements.body.style.overflow = 'auto'; }
        function getInitials(name) { if(!name || typeof name !=='string')return 'U';const p=name.trim().split(' ').filter(s=>s.length>0);if(p.length===0)return 'U';if(p.length===1)return p[0].charAt(0).toUpperCase();return(p[0].charAt(0)+p[p.length-1].charAt(0)).toUpperCase(); }
        function formatDate(ts) { if(!ts)return 'N/A';const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}); }
        function formatDateTime(ts) { if(!ts)return 'N/A';const d=ts.toDate?ts.toDate():new Date(ts);return `${d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})} ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`; }

        function toggleSpinner(btn, show) { if (!btn) return; const spinner = btn.querySelector('.spinner'); const textSpans = btn.querySelectorAll('span:not(.spinner)'); btn.disabled = show; if(spinner) spinner.style.display = show ? 'inline-block' : 'none'; textSpans.forEach(s => s.style.opacity = show ? (s.classList.contains('icon-text') ? 1: 0.5) : 1); if(show) btn.classList.add('loading'); else btn.classList.remove('loading');}
        function cleanupListeners() { for(const k in listeners) { if(listeners[k]) { try{ listeners[k](); } catch(e){} listeners[k]=null; } } }
        function hideLoadingOverlay() { elements.loadingOverlay.classList.add('hidden'); stopLoadingMessages(); }
        
        async function createNotification(userId, title, message, type = 'info', link = null) {
            if(!userId) return;
            try {
                await db.collection('users').doc(userId).collection('batches_notification').add({
                    title: title, message: message, type: type, link: link, 
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(), read: false
                });
            } catch (error) { console.error("Error creating notification:", error); }
        }

        auth.onAuthStateChanged(async (user) => {
            console.log("Batches Auth State Changed. User:", user ? user.uid : 'No User');
            cleanupListeners();
            currentUser = user;
            if (user) {
                isUserDataLoading = true;
                updateUIAfterLogin(); 

                listeners.user = db.collection('users').doc(user.uid).onSnapshot(async (doc) => {
                    console.log("User doc snapshot received for batches page. Exists:", doc.exists);
                    if (doc.exists) {
                        userData = { id: doc.id, ...doc.data() };
                        userEnrolledBatchesIds = userData.enrolledBatches || [];
                        isUserDataLoading = false;
                        updateUIAfterLogin(); 
                        loadInitialData(); 
                        fetchUserNotifications();
                        setupAllBatchesListenerForSearch();
                        loadSupportChatThreadListener(); 
                    } else { 
                        console.log("User exists in Auth but not Firestore. Creating document...");
                        await createUserDocument(user, user.displayName, null, null);
                    }
                     if (!elements.loadingOverlay.classList.contains('hidden')) hideLoadingOverlay();
                }, (error) => {
                    console.error("Error fetching user data:", error);
                    showToast("Could not load your profile. Please refresh.", "error");
                    userData = null; isUserDataLoading = false; updateUIAfterLogin();
                     if (!elements.loadingOverlay.classList.contains('hidden')) hideLoadingOverlay();
                });
                 try {
                    await db.collection('users').doc(user.uid).update({ lastActive: firebase.firestore.FieldValue.serverTimestamp() })
                    .catch(err => { if (err.code === 'not-found') console.warn("User doc not found for lastActive, will be created."); else console.error("Error updating lastActive:", err);});
                } catch (e) { /* caught */ }

            } else { 
                userData = null; isUserDataLoading = false;
                userEnrolledBatchesIds = [];
                currentChatThreadId = null;
                allBatchesCache = [];
                if (listeners.allBatchesSearch) listeners.allBatchesSearch(); listeners.allBatchesSearch = null; 
                
                updateUIAfterLogout();
                closeAllPagesAndModals();
                resetNavigation();
                
                if (elements.allBatchesContainer) elements.allBatchesContainer.innerHTML = '';
                if (elements.myBatchesContainer) elements.myBatchesContainer.innerHTML = '';
                if (elements.chatArea) { elements.chatArea.innerHTML = ''; if (elements.emptyStateSupport) elements.emptyStateSupport.style.display = 'flex';}
                if (elements.notificationsListContainer) { elements.notificationsListContainer.innerHTML = ''; if (elements.emptyStateNotifications) elements.emptyStateNotifications.style.display = 'flex'; }
                if (elements.profileEnrolledBatchesList) { elements.profileEnrolledBatchesList.innerHTML = ''; if(elements.emptyStateProfileBatches) elements.emptyStateProfileBatches.style.display = 'flex';}


                if (elements.emptyStateAllBatches) { elements.emptyStateAllBatches.innerHTML = `<i class="fas fa-sign-in-alt"></i><h3>Login to Discover Batches</h3><p>Please login to see available batches.</p>`; elements.emptyStateAllBatches.style.display = 'flex';}
                if (!elements.loadingOverlay.classList.contains('hidden')) hideLoadingOverlay();
            }
        });

        async function createUserDocument(firebaseUser, nameOverride, usernameOverride, bioOverride) {
            const name = nameOverride || firebaseUser.displayName || "EduSpark User";
            let username = usernameOverride;
            if (!username && firebaseUser.email) {
                username = firebaseUser.email.split('@')[0].replace(/[^a-z0-9_.]/gi, '').toLowerCase();
                if (username.length > 15) username = username.substring(0, 15);
                 if (username.length < 3) username = `user${Date.now().toString().slice(-7)}`;
            } else if (!username) {
                 username = `user${Date.now().toString().slice(-7)}`;
            }
             try { 
                const usernameSnapshot = await db.collection('users').where('username', '==', username).get();
                if (!usernameSnapshot.empty && usernameSnapshot.docs[0].id !== firebaseUser.uid) {
                    username = `${username.substring(0,10)}${Date.now().toString().slice(-5)}`;
                }
            } catch (e) { console.warn("Error checking username uniqueness:", e); }

            const initialUserData = {
                uid: firebaseUser.uid, email: firebaseUser.email, name: name, username: username,
                bio: bioOverride || "Passionate learner exploring new horizons on EduSparK!", 
                profilePictureURL: firebaseUser.photoURL || null,
                points: 0, createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastActive: firebase.firestore.FieldValue.serverTimestamp(),
                enrolledBatches: [], isAdmin: false
            };
            try {
                await db.collection('users').doc(firebaseUser.uid).set(initialUserData);
                console.log("User document created for:", firebaseUser.uid);
                showToast("Welcome! Your EduSparK account is set up.", "success");
            } catch (error) { console.error("Error creating user document in Firestore:", error); showToast("Error setting up your account.", "error"); }
        }

        function loadInitialData() {
            if (!currentUser || isUserDataLoading) return;
            fetchBatches(false); 
            if (elements.myBatchesPage.classList.contains('active')) fetchMyBatches();
        }

        function updateUIAfterLogin() {
            elements.body.classList.add('logged-in'); elements.body.classList.remove('logged-out');
            if (elements.emptyStateAllBatches && elements.emptyStateAllBatches.querySelector('h3').textContent.startsWith('Login')) { // Clear login prompt
                 elements.emptyStateAllBatches.innerHTML = `<i class="fas fa-search-minus"></i> <h3>No Batches Found</h3> <p>Check back later for new batches!</p>`;
                 elements.emptyStateAllBatches.style.display = 'none'; // Will be shown if fetchBatches finds nothing
            }
            if (userData) {
                if (userData.profilePictureURL) elements.userAvatar.innerHTML = `<img src="${escapeHTML(userData.profilePictureURL)}" alt="User Avatar">`;
                else elements.userAvatar.innerHTML = `<span id="avatarInitials">${getInitials(userData.name)}</span>`;
                
                // Always update these if elements exist, for consistency when profile page is opened
                if(elements.profileAvatarLarge){ 
                    if (userData.profilePictureURL) elements.profileAvatarLarge.innerHTML = `<img src="${escapeHTML(userData.profilePictureURL)}" alt="Profile Picture">`;
                    else elements.profileAvatarLarge.innerHTML = `<span id="profileAvatarInitialsLarge">${getInitials(userData.name)}</span>`;
                    
                    elements.profileNameLarge.textContent = escapeHTML(userData.name);
                    elements.profileUsernameLarge.textContent = `@${escapeHTML(userData.username)}`;
                    elements.profileEmailLarge.innerHTML = `<i class="fas fa-envelope"></i> ${escapeHTML(userData.email)}`;
                    elements.profileJoinedLarge.innerHTML = `<i class="fas fa-calendar-alt"></i> Joined: ${formatDate(userData.createdAt)}`;
                    elements.profilePointsLarge.innerHTML = `<i class="fas fa-star"></i> Points: ${userData.points !== undefined ? userData.points : 0}`;
                    elements.profileLastActiveLarge.innerHTML = `<i class="fas fa-history"></i> Last Seen: ${userData.lastActive ? formatDateTime(userData.lastActive) : 'N/A'}`;
                    elements.profileBioText.textContent = escapeHTML(userData.bio || "No bio yet. Add one by editing your profile!");
                    elements.profileBatchesEnrolledCount.textContent = userEnrolledBatchesIds.length;
                    elements.profilePointsStat.textContent = userData.points !== undefined ? userData.points : 0;
                    renderProfileEnrolledBatches(); 
                }
            } else { 
                elements.userAvatar.innerHTML = `<span id="avatarInitials">L</span>`; 
                if(elements.profileAvatarLarge) {
                     elements.profileAvatarLarge.innerHTML = `<span id="profileAvatarInitialsLarge">U</span>`;
                     elements.profileNameLarge.textContent = 'User...';
                     elements.profileUsernameLarge.textContent = '@loading';
                     elements.profileEmailLarge.innerHTML = `<i class="fas fa-envelope"></i> loading...`;
                     elements.profileJoinedLarge.innerHTML = `<i class="fas fa-calendar-alt"></i> Joined: -`;
                     elements.profilePointsLarge.innerHTML = `<i class="fas fa-star"></i> Points: ...`;
                     elements.profileLastActiveLarge.innerHTML = `<i class="fas fa-history"></i> Last Seen: ...`;
                     elements.profileBioText.textContent = 'Loading bio...';
                     elements.profileBatchesEnrolledCount.textContent = '0';
                     elements.profilePointsStat.textContent = '0';
                }
            }
        }
        function updateUIAfterLogout() {
            elements.body.classList.remove('logged-in'); elements.body.classList.add('logged-out');
            elements.userAvatar.innerHTML = `<span id="avatarInitials">U</span>`;
            if (elements.unreadNotificationsBadge) elements.unreadNotificationsBadge.style.display = 'none';

            if (elements.profileAvatarLarge) { 
                elements.profileAvatarLarge.innerHTML = `<span id="profileAvatarInitialsLarge">U</span>`;
                elements.profileNameLarge.textContent = 'User Name';
                elements.profileUsernameLarge.textContent = '@username';
                elements.profileEmailLarge.innerHTML = `<i class="fas fa-envelope"></i> email@example.com`;
                elements.profileJoinedLarge.innerHTML = `<i class="fas fa-calendar-alt"></i> Joined: -`;
                elements.profilePointsLarge.innerHTML = `<i class="fas fa-star"></i> Points: 0`;
                elements.profileLastActiveLarge.innerHTML = `<i class="fas fa-history"></i> Last Seen: -`;
                elements.profileBioText.textContent = 'Login to see your bio.';
                elements.profileBatchesEnrolledCount.textContent = '0';
                elements.profilePointsStat.textContent = '0';
                elements.profileEnrolledBatchesList.innerHTML = '';
                elements.emptyStateProfileBatches.style.display = 'flex';
            }
        }

                // THIS IS AN ASSUMPTION OF YOUR CURRENT WORKING FUNCTION
        function createBatchCardHTML(batch) {
            const isEnrolled = userEnrolledBatchesIds.includes(batch.id); // Assuming you have this
            let descItemsHTML = '';
            // ... [your existing code to build descItemsHTML] ...
            if (batch.instructorName) { descItemsHTML += ` <div class="batch-desc-item"> <span class="label"><i class="fas fa-chalkboard-teacher"></i> Instructor:</span> <span class="value">${escapeHTML(batch.instructorName)}</span> </div>`;}
            if (batch.durationText) { descItemsHTML += ` <div class="batch-desc-item"> <span class="label"><i class="far fa-clock"></i> Duration:</span> <span class="value">${escapeHTML(batch.durationText)}</span> </div>`;}
            if (batch.lessonsCount) { descItemsHTML += ` <div class="batch-desc-item"> <span class="label"><i class="fas fa-book-open"></i> Lessons:</span> <span class="value">${escapeHTML(batch.lessonsCount)}</span> </div>`;}
            if (batch.difficulty) { descItemsHTML += ` <div class="batch-desc-item"> <span class="label"><i class="fas fa-signal"></i> Difficulty:</span> <span class="value">${escapeHTML(batch.difficulty)}</span> </div>`;}


            // **THIS IS THE PART WE'LL CHANGE**
            // const oldButtonHTML = `<button class="batch-action-btn" data-action="some_action_you_had" data-batch-id="${batch.id}">...</button>`;
            
            // **NEW LINKED BUTTON HTML**
            const detailPageLink = `batch-detail.html?batchId=${batch.id}`;
            const newButtonHTML = `
                <a href="${detailPageLink}" class="batch-action-btn" data-batch-id="${batch.id}">
                    <span class="spinner" style="display:none;"></span> <!-- Keep spinner if needed for future JS actions -->
                    <span><i class="fas fa-search-plus"></i> View Details</span>
                </a>`;

            return `
                <div class="batch-card" data-id="${batch.id}" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div class="batch-img-container">
                        <img src="${escapeHTML(batch.imageUrl) || 'https://via.placeholder.com/400x225/333/888?text=EduSpark+Batch'}" alt="${escapeHTML(batch.name)}" class="batch-img" loading="lazy">
                        ${batch.priceDisplay ? `<div class="batch-price-tag">${escapeHTML(batch.priceDisplay)}</div>` : ''}
                        ${isEnrolled ? `<div class="batch-enroll-status"><i class="fas fa-check-circle"></i> Enrolled</div>` : ''}
                    </div>
                    <div class="batch-info">
                        <h3 class="batch-name">${escapeHTML(batch.name)}</h3>
                        ${descItemsHTML ? `<div class="batch-description-items">${descItemsHTML}</div>` : ''}
                        ${newButtonHTML} 
                    </div>
                </div>`;
        }

        function renderSkeletonBatchCards(container, count) { 
            let skeletons = '';
            for (let i = 0; i < count; i++) {
                skeletons += `
                    <div class="batch-card skeleton-batch-card" data-aos="fade-up">
                        <div class="batch-img-container"></div>
                        <div class="batch-info">
                            <div class="batch-name"></div>
                            <div class="batch-description-items"> <div class="batch-desc-item"></div> <div class="batch-desc-item"></div> <div class="batch-desc-item"></div> </div>
                            <div class="batch-action-btn"></div>
                        </div>
                    </div>`;
            }
            container.innerHTML = skeletons;
        }

        async function fetchBatches(loadMore = false) { 
            if(isLoadingBatches||(!hasMoreBatches&&loadMore))return;
            isLoadingBatches=true;
            if(!currentUser && elements.emptyStateAllBatches) { // If logged out, ensure login prompt is shown.
                elements.allBatchesContainer.innerHTML = '';
                elements.emptyStateAllBatches.innerHTML = `<i class="fas fa-sign-in-alt"></i><h3>Login to Discover Batches</h3><p>Please login to see available batches.</p>`;
                elements.emptyStateAllBatches.style.display='flex';
                isLoadingBatches = false;
                return;
            }

            if(!loadMore){renderSkeletonBatchCards(elements.allBatchesContainer,BATCHES_PER_PAGE);lastVisibleBatch=null;hasMoreBatches=true;elements.allBatchesContainer.innerHTML=''} 
            if(elements.emptyStateAllBatches)elements.emptyStateAllBatches.style.display='none';
            let query=db.collection('batches').where('status','==','active').orderBy('createdAt','desc').limit(BATCHES_PER_PAGE);
            if(loadMore&&lastVisibleBatch)query=query.startAfter(lastVisibleBatch);
            try{
                const snapshot=await query.get();
                if(!loadMore && elements.allBatchesContainer.querySelector('.skeleton-batch-card'))elements.allBatchesContainer.innerHTML=''; 
                const newBatches=[];
                snapshot.forEach(doc=>newBatches.push({id:doc.id,...doc.data()}));
                newBatches.forEach(batch=>{
                    const existingBatch = allBatchesCache.find(b => b.id === batch.id);
                    if (!existingBatch) allBatchesCache.push(batch); else Object.assign(existingBatch, batch); // Update cache
                    elements.allBatchesContainer.insertAdjacentHTML('beforeend', createBatchCardHTML(batch));
                });
                if(newBatches.length>0)lastVisibleBatch=snapshot.docs[snapshot.docs.length-1];
                hasMoreBatches=newBatches.length===BATCHES_PER_PAGE;
                if(elements.allBatchesContainer.children.length===0&&!loadMore){if(elements.emptyStateAllBatches)elements.emptyStateAllBatches.style.display='flex'} 
                AOS.refresh(); 
            }catch(error){
                console.error("Error fetching batches:",error);showToast("Could not load batches. Please try again.","error");
                if(!loadMore&&elements.emptyStateAllBatches && elements.allBatchesContainer.innerHTML==='')elements.emptyStateAllBatches.style.display='flex';
            }finally{isLoadingBatches=false;}
        }
        window.addEventListener('scroll', () => { if (elements.allBatchesPage.classList.contains('active') && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300 && !isLoadingBatches && hasMoreBatches && currentUser) { fetchBatches(true); } });

        async function fetchMyBatches() { 
            if(!currentUser || isUserDataLoading){if(elements.emptyStateMyBatches)elements.emptyStateMyBatches.style.display='flex';elements.myBatchesContainer.innerHTML = ''; return} 
            renderSkeletonBatchCards(elements.myBatchesContainer,userEnrolledBatchesIds.length||3);
            if(userEnrolledBatchesIds.length===0){elements.myBatchesContainer.innerHTML='';if(elements.emptyStateMyBatches)elements.emptyStateMyBatches.style.display='flex';return} 
            if(elements.emptyStateMyBatches)elements.emptyStateMyBatches.style.display='none';
            try{
                const batchPromises=userEnrolledBatchesIds.map(id=>db.collection('batches').doc(id).get());
                const batchDocs=await Promise.all(batchPromises);
                elements.myBatchesContainer.innerHTML='';
                const myBatchesData = [];
                batchDocs.forEach(doc=>{if(doc.exists){const batchData = { id: doc.id, ...doc.data() }; myBatchesData.push(batchData); elements.myBatchesContainer.insertAdjacentHTML('beforeend', createBatchCardHTML(batchData));}});
                if(elements.myBatchesContainer.children.length===0){if(elements.emptyStateMyBatches)elements.emptyStateMyBatches.style.display='flex'} 
                // Profile page list is updated by updateUIAfterLogin -> renderProfileEnrolledBatches
                AOS.refresh();
            }catch(error){console.error("Error fetching my batches:",error);showToast("Could not load your enrolled batches.","error");if(elements.emptyStateMyBatches&&elements.myBatchesContainer.innerHTML==='')elements.emptyStateMyBatches.style.display='flex'}}
        
        elements.allBatchesContainer.addEventListener('click', handleBatchActionClick);
        elements.myBatchesContainer.addEventListener('click', handleBatchActionClick);

        async function handleBatchActionClick(e){
            const button = e.target.closest('.batch-action-btn');
            if (!button || !currentUser) { if(!currentUser) openModal(elements.loginModal); return; }
            if (isUserDataLoading) { showToast("Please wait, user data is loading.", "info"); return; }

            const action = button.dataset.action;
            const batchId = button.dataset.batchId;
            const batchLink = button.dataset.batchLink;

            toggleSpinner(button, true);

            if(action === 'enroll_explore'){
                if (!userEnrolledBatchesIds.includes(batchId)) {
                    try {
                        const batchDocRef = db.collection('batches').doc(batchId);
                        const batchDoc = await batchDocRef.get();
                        if(!batchDoc.exists) {showToast("This batch is no longer available.", "error"); toggleSpinner(button, false); return;}
                        const batchData = batchDoc.data();

                        await db.collection('users').doc(currentUser.uid).update({
                            enrolledBatches: firebase.firestore.FieldValue.arrayUnion(batchId)
                        });
                        // Only increment if enrollmentCount exists to avoid creating it if not used
                        if (batchData.enrollmentCount !== undefined) {
                            await batchDocRef.update({ enrollmentCount: firebase.firestore.FieldValue.increment(1) });
                        }
                        
                        // userEnrolledBatchesIds will be updated by the user snapshot listener
                        showToast(`Successfully enrolled in ${batchData.name}!`, "success");
                        await createNotification(currentUser.uid, "Enrollment Success!", `You are now enrolled in "${batchData.name}".`, "success", batchLink || '#');

                        // Optimistically update card if it's in allBatchesContainer or myBatchesContainer
                        const cardToUpdate = button.closest('.batch-card');
                        if(cardToUpdate) {
                            const updatedCardHTML = createBatchCardHTML({...batchData, id: batchId}); // Pass a copy
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = updatedCardHTML;
                            cardToUpdate.replaceWith(tempDiv.firstChild);
                            AOS.refreshHard(); // For replaced element
                        }
                        // Profile will auto-update its list due to user data listener.
                        if(elements.myBatchesPage.classList.contains('active')) fetchMyBatches();

                    } catch(err){ console.error("Error enrolling in batch:", err); showToast("Enrollment failed. Please try again.", "error"); }
                }
                 if(batchLink && batchLink !== '#') window.open(batchLink, '_blank');

            } else if (action === 'goto_course'){
                 if(batchLink && batchLink !== '#') window.open(batchLink, '_blank');
                 else showToast("Course link not available for this batch.", "info");
            }
            toggleSpinner(button, false);
        }

        async function renderProfileEnrolledBatches(batchesData = null) {
            elements.profileEnrolledBatchesList.innerHTML = '';
            elements.emptyStateProfileBatches.style.display = 'none';

            if (!currentUser || userEnrolledBatchesIds.length === 0) {
                elements.emptyStateProfileBatches.style.display = 'flex';
                return;
            }
            
            let batchesToRender = batchesData;
            if(!batchesToRender && userEnrolledBatchesIds.length > 0){ 
                 const batchPromises = userEnrolledBatchesIds.map(id => db.collection('batches').doc(id).get());
                 try {
                     const batchDocs = await Promise.all(batchPromises);
                     batchesToRender = batchDocs.filter(doc => doc.exists).map(doc => ({id: doc.id, ...doc.data()}));
                 } catch (error) {
                    console.error("Error fetching batches for profile list:", error);
                    elements.profileEnrolledBatchesList.innerHTML = '<li class="empty-state" style="display:block; min-height:50px; padding:10px 0;">Error loading enrolled batches.</li>';
                    AOS.refresh(); return;
                 }
            }
            
            if(batchesToRender && batchesToRender.length === 0 && userEnrolledBatchesIds.length > 0) {
                elements.profileEnrolledBatchesList.innerHTML = '<li class="empty-state" style="display:block; min-height:50px; padding:10px 0;">Some enrolled batches may no longer exist or could not be loaded.</li>';
                AOS.refresh(); return;
            } else if (!batchesToRender || batchesToRender.length === 0) {
                elements.emptyStateProfileBatches.style.display = 'flex';
                 AOS.refresh(); return;
            }

            batchesToRender.forEach(batch => {
                const li = document.createElement('li');
                li.className = 'enrolled-batch-item-profile'; 
                li.setAttribute('data-aos', 'fade-left'); 
                li.innerHTML = `
                    <div class="enrolled-batch-item-profile-header">
                        <img src="${escapeHTML(batch.imageUrl || 'https://via.placeholder.com/160x90/333/888?text=N/A')}" alt="${escapeHTML(batch.name)}">
                        <span class="name">${escapeHTML(batch.name)}</span>
                    </div>
                    <div class="enrolled-batch-item-profile-details">
                        ${batch.instructorName ? `<span><i class="fas fa-chalkboard-teacher"></i> ${escapeHTML(batch.instructorName)}</span>` : ''}
                        ${batch.durationText ? `<span><i class="far fa-clock"></i> ${escapeHTML(batch.durationText)}</span>` : ''}
                        ${batch.priceDisplay && batch.priceDisplay.toLowerCase() !== 'free' ? `<span><i class="fas fa-dollar-sign"></i> ${escapeHTML(batch.priceDisplay)}</span>` : (batch.priceDisplay ? `<span><i class="fas fa-gift"></i> ${escapeHTML(batch.priceDisplay)}</span>` : `<span><i class="fas fa-gift"></i> Free</span>`)}
                    </div>
                    <a href="${escapeHTML(batch.batchLink || '#')}" target="_blank" class="view-course-btn-profile" ${(!batch.batchLink || batch.batchLink ==='#') ? 'style="opacity:0.6; cursor:default;"' : ''}>
                        <i class="fas fa-external-link-alt"></i> View Course
                    </a>
                `;
                elements.profileEnrolledBatchesList.appendChild(li);
            });
            AOS.refresh();
        }

        function initializeQuickResponses(){
            elements.quickResponsesContainer.innerHTML = '';
            QUICK_RESPONSES.forEach(text => {
                const btn = document.createElement('button');
                btn.className = 'quick-response-btn';
                btn.textContent = text;
                btn.onclick = () => { elements.supportInput.value = text; elements.supportInput.focus(); };
                elements.quickResponsesContainer.appendChild(btn);
            });
        }
        
        async function loadSupportChatThreadListener() {
            if (!currentUser || isUserDataLoading) return;
            if (listeners.supportChatThread) listeners.supportChatThread();

            let threadQuerySnapshot;
            try { threadQuerySnapshot = await db.collection('support_threads').where('userId', '==', currentUser.uid).limit(1).get(); } 
            catch (error) { console.error("Error fetching support thread:", error); showToast("Could not initialize support chat.", "error"); return; }
            
            if (threadQuerySnapshot.empty) {
                const newThreadRef = db.collection('support_threads').doc();
                currentChatThreadId = newThreadRef.id;
                try {
                    await newThreadRef.set({
                        userId: currentUser.uid, userName: userData.name || "EduSpark User",
                        userProfilePic: userData.profilePictureURL || null, status: 'open', 
                        lastMessage: "Support thread started.", lastMessageAt: firebase.firestore.FieldValue.serverTimestamp(),
                        lastMessageSender: 'system', unreadByAdmin: true, unreadByUser: false,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                } catch (error) { console.error("Error creating new support thread:", error); showToast("Could not start support chat.", "error"); return; }
            } else { currentChatThreadId = threadQuerySnapshot.docs[0].id; }
            
            listeners.supportChatThread = db.collection('support_threads').doc(currentChatThreadId)
                .onSnapshot(async (docSnapshot) => {
                    if(docSnapshot.exists){
                        const threadData = docSnapshot.data();
                        if (threadData.unreadByUser && threadData.lastMessageSender === 'admin' && !pages.support.classList.contains('active') && !pages.notifications.classList.contains('active') ) {
                             // Notification only if support or notifications not active
                             await createNotification(currentUser.uid, "New Support Reply", `Admin: "${threadData.lastMessage.substring(0,30)}..."`, 'support_reply', '#support'); 
                        }
                        if(pages.support.classList.contains('active') && threadData.unreadByUser){
                             db.collection('support_threads').doc(currentChatThreadId).update({unreadByUser: false}).catch(e => console.warn("Could not mark unreadByUser to false", e));
                        }
                    }
                }, error => { console.error("Error listening to support thread:", error); showToast("Support chat connection error.", "warning");});

            loadSupportChatMessages();
        }

        function loadSupportChatMessages(){
            if (!currentChatThreadId) return;
            if (listeners.supportChatMessages) listeners.supportChatMessages();
            elements.emptyStateSupport.style.display = 'none';

            listeners.supportChatMessages = db.collection('support_threads').doc(currentChatThreadId)
                .collection('messages').orderBy('timestamp', 'asc') 
                .onSnapshot(snapshot => {
                    const currentMessageIds = new Set(Array.from(elements.chatArea.children).map(el => el.dataset.messageId));
                    let newMessagesAdded = false;

                    if(snapshot.empty && elements.chatArea.innerHTML === ''){ elements.emptyStateSupport.style.display = 'flex'; } 
                    else { elements.emptyStateSupport.style.display = 'none'; }

                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            const msg = change.doc.data();
                            const msgId = change.doc.id;

                            if (!currentMessageIds.has(msgId)) { 
                                const msgDiv = document.createElement('div');
                                msgDiv.dataset.messageId = msgId; 
                                msgDiv.classList.add('chat-message', msg.senderId === currentUser.uid ? 'user' : (msg.senderId === 'system' ? 'system' : 'admin'));
                                msgDiv.innerHTML = `<p>${escapeHTML(msg.text)}</p><div class="message-meta">${msg.timestamp ? formatDateTime(msg.timestamp) : 'Sending...'}</div>`;
                                elements.chatArea.insertBefore(msgDiv, elements.chatArea.firstChild);
                                newMessagesAdded = true;
                            }
                        }
                    });
                    if(newMessagesAdded || elements.chatArea.scrollTop === 0) { elements.chatArea.scrollTop = 0; }
                }, error => {
                    console.error("Error fetching support messages:", error); showToast("Could not load chat messages.", "error");
                    elements.emptyStateSupport.style.display = 'flex';
                });
        }

        elements.sendSupportBtn.addEventListener('click', sendSupportMessage);
        elements.supportInput.addEventListener('keypress', (e) => { if(e.key === 'Enter' && !e.shiftKey) {e.preventDefault(); sendSupportMessage();} });

        async function sendSupportMessage() {
            const text = elements.supportInput.value.trim();
            if (!text || !currentChatThreadId || !currentUser || isUserDataLoading) return;
            toggleSpinner(elements.sendSupportBtn, true);
            const tempMessageId = `temp_${Date.now()}`; 

            const msgDiv = document.createElement('div');
            msgDiv.dataset.messageId = tempMessageId;
            msgDiv.classList.add('chat-message', 'user');
            msgDiv.innerHTML = `<p>${escapeHTML(text)}</p><div class="message-meta">Sending...</div>`;
            elements.chatArea.insertBefore(msgDiv, elements.chatArea.firstChild);
            elements.chatArea.scrollTop = 0; 
            elements.supportInput.value = '';

            try {
                await db.collection('support_threads').doc(currentChatThreadId).collection('messages').add({
                    senderId: currentUser.uid, text: text, timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                await db.collection('support_threads').doc(currentChatThreadId).update({
                    lastMessage: text.substring(0, 70), lastMessageAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastMessageSender: 'user', unreadByAdmin: true, status: 'pending_admin' 
                });
                 if(elements.emptyStateSupport.style.display === 'flex') elements.emptyStateSupport.style.display = 'none';
            } catch (error) {
                console.error("Error sending support message:", error); showToast("Message could not be sent.", "error");
                const failedMsgEl = elements.chatArea.querySelector(`[data-message-id="${tempMessageId}"]`);
                if(failedMsgEl) failedMsgEl.remove();
            } finally { toggleSpinner(elements.sendSupportBtn, false); }
        }
        
        elements.faqBtn.onclick = () => { renderFAQs(); openModal(elements.faqModal); };
        elements.closeFaqModal.onclick = () => closeModal(elements.faqModal);

        function renderFAQs() {
            elements.faqListContainer.innerHTML = '';
            if (FAQS.length === 0) { elements.emptyStateFaq.style.display = 'flex'; return; }
            elements.emptyStateFaq.style.display = 'none';
            FAQS.forEach(faq => {
                const itemDiv = document.createElement('div'); itemDiv.className = 'faq-item';
                itemDiv.innerHTML = `<div class="faq-question">${escapeHTML(faq.q)}</div><div class="faq-answer">${escapeHTML(faq.a)}</div>`; 
                elements.faqListContainer.appendChild(itemDiv);
            });
        }
        
        const pages = { allBatches: elements.allBatchesPage, myBatches: elements.myBatchesPage, support: elements.supportPage, profile: elements.profilePage, notifications: elements.notificationsPage };
        const navButtons = { allBatches: elements.allBatchesNavBtn, myBatches: elements.myBatchesNavBtn, support: elements.supportNavBtn, profile: elements.profileNavBtn, notifications: elements.notificationsNavBtn };

        function setActivePage(pageKey) { 
             Object.values(pages).forEach(p=>p.classList.remove('active')); 
             Object.values(navButtons).forEach(b=>b.classList.remove('active')); 
             
             if(pages[pageKey]) pages[pageKey].classList.add('active'); 
             if(navButtons[pageKey]) navButtons[pageKey].classList.add('active');
             
             AOS.refresh();

             if(pageKey==='myBatches'&&currentUser)fetchMyBatches();
             else if(pageKey==='support'&&currentUser){ if(!currentChatThreadId && !isUserDataLoading) loadSupportChatThreadListener(); else loadSupportChatMessages(); } 
             else if(pageKey==='profile'&&currentUser) updateUIAfterLogin();
             else if(pageKey==='notifications'&&currentUser)fetchUserNotifications();
             else if(pageKey==='allBatches') { if(elements.allBatchesContainer.innerHTML==='' && currentUser) fetchBatches(false); else if (!currentUser) fetchBatches(false); /* Show login prompt if no current user */ }
        }
        
        function updateLastActiveMainPage() {
             const activeMainNavItem = Array.from(document.querySelectorAll('.nav-item.active, .action-nav-btn.active'))
                .find(b => b !== elements.profileNavBtn && b !== elements.notificationsNavBtn); // Exclude flyout page buttons
            if (activeMainNavItem && navButtons[activeMainNavItem.id.replace('NavBtn','')]) {
                 lastActiveMainPageKey = activeMainNavItem.id.replace('NavBtn','');
            }
        }

        elements.allBatchesNavBtn.onclick = () => { setActivePage('allBatches'); lastActiveMainPageKey = 'allBatches'; };
        elements.myBatchesNavBtn.onclick = () => { if (currentUser) { setActivePage('myBatches'); lastActiveMainPageKey = 'myBatches';} else openModal(elements.loginModal); };
        elements.supportNavBtn.onclick = () => { if (currentUser) {setActivePage('support'); lastActiveMainPageKey = 'support';} else openModal(elements.loginModal); };
        
        elements.profileNavBtn.onclick = () => { if (currentUser) { updateLastActiveMainPage(); openPage(elements.profilePage); setActivePage('profile');} else openModal(elements.loginModal); };
        elements.notificationsNavBtn.onclick = () => { if (currentUser) { updateLastActiveMainPage(); openPage(elements.notificationsPage); setActivePage('notifications');} else openModal(elements.loginModal); };
        
        elements.logoLink.onclick = (e) => { e.preventDefault(); setActivePage('allBatches'); lastActiveMainPageKey = 'allBatches'; closeAllFlyoutPages(); };
        elements.userAvatar.onclick = () => { if (currentUser) { updateLastActiveMainPage(); openPage(elements.profilePage); setActivePage('profile'); } else openModal(elements.loginModal); };


        function openPage(pageEl){ pageEl.classList.add('active'); elements.body.style.overflow = 'hidden'; AOS.refresh();}
        function closePage(pageEl){ pageEl.classList.remove('active'); if(!$$('.profile-page.active, .notifications-page.active').length && !$$('.modal.active').length) elements.body.style.overflow='auto';}
        function closeAllFlyoutPages() { 
            if (elements.profilePage.classList.contains('active')) closePage(elements.profilePage);
            if (elements.notificationsPage.classList.contains('active')) closePage(elements.notificationsPage);
        }

        elements.profileBackBtn.onclick = () => { closePage(elements.profilePage); setActivePage(lastActiveMainPageKey || 'allBatches');};
        elements.notificationsBackBtn.onclick = () => { closePage(elements.notificationsPage); setActivePage(lastActiveMainPageKey || 'allBatches');};
        
        elements.editProfileBtn.addEventListener('click', () => { if(currentUser && userData){ $('#editProfileName').value = userData.name || ''; $('#editProfileUsername').value = userData.username || ''; $('#editProfileBio').value = userData.bio || ''; elements.profilePicturePreview.src = userData.profilePictureURL || "https://via.placeholder.com/100?text=Pic"; tempProfilePicFile = null; openModal(elements.editProfileModal);} else if(!currentUser) {openModal(elements.loginModal);} });
        elements.logoutBtn.addEventListener('click', async () => { toggleSpinner(elements.logoutBtn,true); try {await auth.signOut();}catch(e){showToast("Logout failed.", "error");}finally{toggleSpinner(elements.logoutBtn,false);/* UI update via onAuthStateChanged */}});
        
        elements.profilePictureInput.addEventListener('change', (e)=>{ const file = e.target.files[0]; if(file){ if (file.size > 2 * 1024 * 1024) { showToast("Image too large (Max 2MB).", "error"); elements.profilePictureInput.value = ''; return; } tempProfilePicFile = file; const reader = new FileReader(); reader.onload = (event)=>{ elements.profilePicturePreview.src = event.target.result;}; reader.readAsDataURL(file);}});
        elements.editProfileForm.addEventListener('submit', async (e) => { e.preventDefault(); if(!currentUser || !userData) return; const newName = $('#editProfileName').value; const newUsername = $('#editProfileUsername').value.trim().toLowerCase(); const newBio = $('#editProfileBio').value; if (!/^[a-z0-9_.]{3,15}$/.test(newUsername)) { showToast("Username: 3-15 chars, lowercase, numbers, '_', '.'", "error"); return; } const btn = $('#saveProfileBtn'); toggleSpinner(btn,true); try { if (newUsername !== userData.username) { const usernameSnapshot = await db.collection('users').where('username', '==', newUsername).get(); if (!usernameSnapshot.empty && usernameSnapshot.docs[0].id !== currentUser.uid) { showToast("Username already taken.", "error"); toggleSpinner(btn,false); return;} } let profilePictureURL = userData.profilePictureURL; if(tempProfilePicFile){ const storageRef = storage.ref(`profile_pictures/${currentUser.uid}/${Date.now()}_${tempProfilePicFile.name}`); const uploadTask = await storageRef.put(tempProfilePicFile); profilePictureURL = await uploadTask.ref.getDownloadURL(); tempProfilePicFile=null;} await db.collection('users').doc(currentUser.uid).update({ name: newName, username: newUsername, bio: newBio, profilePictureURL: profilePictureURL }); showToast("Profile updated!", "success"); closeModal(elements.editProfileModal); } catch(err){ console.error("Profile update error:", err); showToast("Profile update failed: " + err.message + (err.code ? ` (Code: ${err.code})` : ''), "error");} finally {toggleSpinner(btn,false);}});

        async function fetchUserNotifications() { 
            if(!currentUser||isUserDataLoading){if(elements.emptyStateNotifications)elements.emptyStateNotifications.style.display='flex';elements.notificationsListContainer.innerHTML='';return} 
            if(elements.emptyStateNotifications)elements.emptyStateNotifications.style.display='none';
            if(listeners.userNotifications)listeners.userNotifications();
            
            listeners.userNotifications=db.collection('users').doc(currentUser.uid).collection('batches_notification').orderBy('timestamp','desc').limit(30).onSnapshot(snapshot=>{
                elements.notificationsListContainer.innerHTML='';let unreadCount=0;
                if(snapshot.empty){if(elements.emptyStateNotifications)elements.emptyStateNotifications.style.display='flex'}
                else{
                    if(elements.emptyStateNotifications)elements.emptyStateNotifications.style.display='none';
                    snapshot.forEach(doc=>{
                        const notif={id:doc.id,...doc.data()}; if(!notif.read)unreadCount++;
                        let iconClass='fa-info-circle'; if(notif.type==='success')iconClass='fa-check-circle'; else if(notif.type==='support_reply')iconClass='fa-headset'; else if(notif.type==='warning')iconClass='fa-exclamation-triangle'; else if(notif.type==='error')iconClass='fa-times-circle';
                        elements.notificationsListContainer.insertAdjacentHTML('beforeend',` <div class="notification-item ${notif.read?'':'unread'}" data-id="${notif.id}" data-link="${notif.link || ''}" data-aos="fade-left" data-aos-delay="50"> <div class="notification-icon"><i class="fas ${iconClass}"></i></div> <div class="notification-content"> <h4 class="notification-title">${escapeHTML(notif.title)}</h4> <p class="notification-message">${escapeHTML(notif.message)}</p> <p class="notification-timestamp">${notif.timestamp ? formatDateTime(notif.timestamp) : 'Just now'}</p> </div> </div>`);
                    })
                };
                if(elements.unreadNotificationsBadge){elements.unreadNotificationsBadge.textContent=unreadCount>9?'9+':unreadCount;elements.unreadNotificationsBadge.style.display=unreadCount>0?'flex':'none'}
                elements.markAllNotificationsReadBtn.style.display = unreadCount > 0 ? 'inline-flex' : 'none';
                AOS.refresh();
            },err=>{console.error("Error fetching notifications:",err);showToast("Failed to load notifications.","error"); if(elements.emptyStateNotifications && elements.notificationsListContainer.innerHTML==='')elements.emptyStateNotifications.style.display='flex'});
        }
        elements.notificationsListContainer.addEventListener('click', async (e) => { 
            const item = e.target.closest('.notification-item'); 
            if (item && currentUser) {
                const notifId = item.dataset.id; const notifLink = item.dataset.link;
                if (item.classList.contains('unread') && notifId) {
                    try { await db.collection('users').doc(currentUser.uid).collection('batches_notification').doc(notifId).update({read: true});} 
                    catch (err) { console.error("Error marking notification read:", err); } 
                }
                if (notifLink) {
                    if (notifLink.startsWith('#')) { 
                        const pageKey = notifLink.substring(1);
                        if (pages[pageKey]) {
                            updateLastActiveMainPage(); // Save current main page before switching
                            closePage(elements.notificationsPage); 
                            setActivePage(pageKey);
                            if (pageKey === 'profile' || pageKey === 'support') { // If link is to another flyout or a main page
                                 openPage(pages[pageKey]);
                            }
                            // else: it was a main content page, setActivePage handled it.
                        }
                    } else { window.open(notifLink, '_blank');}
                }
            } 
        });
        elements.markAllNotificationsReadBtn.onclick = async () => {
            if (!currentUser || !userData) return;
            const unreadNotifsQuery = db.collection('users').doc(currentUser.uid).collection('batches_notification').where('read', '==', false);
            try {
                toggleSpinner(elements.markAllNotificationsReadBtn, true);
                const batch = db.batch();
                const snapshot = await unreadNotifsQuery.get();
                if(snapshot.empty){showToast("No unread notifications.", "info"); return;}
                snapshot.docs.forEach(doc => { batch.update(doc.ref, { read: true }); });
                await batch.commit();
                showToast("All notifications marked as read.", "success");
            } catch (error) { console.error("Error marking all notifications read:", error); showToast("Failed to mark all as read.", "error");} 
            finally { toggleSpinner(elements.markAllNotificationsReadBtn, false); }
        };
        
        elements.loginForm.addEventListener('submit', async (e)=>{ e.preventDefault(); const em =$('#loginEmail').value; const pw = $('#loginPassword').value; const btn = $('#loginBtn'); toggleSpinner(btn,true); try {await auth.signInWithEmailAndPassword(em,pw); closeModal(elements.loginModal); } catch(err){ showToast(err.message,"error");} finally {toggleSpinner(btn,false);}});
        elements.signupForm.addEventListener('submit', async (e)=>{ e.preventDefault(); const nm = $('#signupName').value; const un = $('#signupUsername').value.trim().toLowerCase(); const em = $('#signupEmail').value; const pw = $('#signupPassword').value; if (!/^[a-z0-9_.]{3,15}$/.test(un)) { showToast("Username: 3-15 chars, lowercase, numbers, '_', '.'", "error"); return; } if(pw.length<6){showToast("Password too short.", "error"); return;} const btn = $('#signupBtn'); toggleSpinner(btn,true); try { const methods = await auth.fetchSignInMethodsForEmail(em); if (methods.length > 0) { showToast("Email already in use.", "error"); toggleSpinner(btn,false); return; } const usernameSnapshot = await db.collection('users').where('username', '==', un).get(); if(!usernameSnapshot.empty){showToast("Username taken.","error");toggleSpinner(btn,false);return;} await auth.createUserWithEmailAndPassword(em,pw); closeModal(elements.signupModal); /* createUserDocument is handled by onAuthStateChanged if doc missing */ } catch(err){ showToast(err.message, "error");} finally {toggleSpinner(btn,false);}});
        elements.googleLoginBtn.onclick = async () => { const prov = new firebase.auth.GoogleAuthProvider(); toggleSpinner(elements.googleLoginBtn,true); try {await auth.signInWithPopup(prov); closeModal(elements.loginModal);} catch(err){showToast(err.message,"error");}finally{toggleSpinner(elements.googleLoginBtn,false);}};
        elements.googleSignupBtn.onclick = async () => { const prov = new firebase.auth.GoogleAuthProvider();toggleSpinner(elements.googleSignupBtn,true); try {await auth.signInWithPopup(prov); closeModal(elements.signupModal);} catch(err){showToast(err.message,"error");}finally{toggleSpinner(elements.googleSignupBtn,false);}};
        elements.switchToSignup.onclick = ()=>{closeModal(elements.loginModal); openModal(elements.signupModal);};
        elements.switchToLogin.onclick = ()=>{closeModal(elements.signupModal); openModal(elements.loginModal);};
        elements.closeLoginModal.onclick = () => closeModal(elements.loginModal);
        elements.closeSignupModal.onclick = () => closeModal(elements.signupModal);
        elements.closeEditProfileModal.onclick = () => closeModal(elements.editProfileModal);
        $$('.modal').forEach(m => m.addEventListener('click', (e)=>{if(e.target===m)closeModal(m);}));
        
        function closeAllPagesAndModals() { Object.values(pages).forEach(p=>p.classList.remove('active')); $$('.modal.active').forEach(closeModal); closeAllFlyoutPages(); }
        function resetNavigation() { setActivePage('allBatches'); lastActiveMainPageKey = 'allBatches'; } 

        function setupAllBatchesListenerForSearch() { if (!currentUser) {allBatchesCache = []; if(listeners.allBatchesSearch) listeners.allBatchesSearch(); listeners.allBatchesSearch = null; return;} if(listeners.allBatchesSearch) return; listeners.allBatchesSearch = db.collection('batches').where('status', '==', 'active').onSnapshot(snapshot => {allBatchesCache = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})); console.log("Batches search cache updated:", allBatchesCache.length); if (elements.searchInput.value.length >=2) handleBatchSearch(); /* Re-filter if search input has text */}, error => {console.error("Error listening to batches for search:", error); showToast("Search might be limited due to network error.", "warning");});}
        let searchTimeout;
        elements.searchInput.addEventListener('input', () => { clearTimeout(searchTimeout); searchTimeout = setTimeout(handleBatchSearch, 300); });
        elements.searchInput.addEventListener('focus', () => { if (elements.searchInput.value.length >=2) handleBatchSearch(); }); // Show results on focus if query present
        function handleBatchSearch(){ if (!currentUser) {elements.searchResults.style.display = 'none'; return; } const query = elements.searchInput.value.toLowerCase().trim(); if(query.length < 2) { elements.searchResults.style.display = 'none'; return; } const results = allBatchesCache.filter(batch => batch.name.toLowerCase().includes(query) || (batch.descriptionItems && batch.descriptionItems.some(item => String(item.value).toLowerCase().includes(query) || String(item.label).toLowerCase().includes(query))) || (batch.instructorName && batch.instructorName.toLowerCase().includes(query)) ).slice(0, 5); renderBatchSearchResults(results);}
        function renderBatchSearchResults(results){ if(results.length === 0){ elements.searchResults.innerHTML = '<div class="no-results">No batches found.</div>';} else { elements.searchResults.innerHTML = results.map(batch => ` <div class="search-result-item" data-batch-id="${batch.id}"> <h4>${escapeHTML(batch.name)}</h4> <p>${escapeHTML(batch.instructorName || (batch.descriptionItems && batch.descriptionItems.length > 0 ? batch.descriptionItems[0].label +': '+ batch.descriptionItems[0].value : 'Course'))}</p> </div> `).join('');} elements.searchResults.style.display = 'block';}
        elements.searchResults.addEventListener('click', (e)=>{ const item = e.target.closest('.search-result-item'); if(!currentUser) {openModal(elements.loginModal); return;} if(item && item.dataset.batchId){ setActivePage('allBatches'); lastActiveMainPageKey = 'allBatches'; const batchCard = elements.allBatchesContainer.querySelector(`.batch-card[data-id="${item.dataset.batchId}"]`); if(batchCard){ batchCard.scrollIntoView({behavior: 'smooth', block: 'center'}); batchCard.classList.add('batch-card-highlighted'); setTimeout(() => batchCard.classList.remove('batch-card-highlighted'), 2500); } else { showToast("Batch found. It might be further down the list, try scrolling.", "info");} elements.searchResults.style.display = 'none'; elements.searchInput.value = ''; if (elements.searchContainer.classList.contains('active') && window.innerWidth <= 768) { elements.searchContainer.classList.remove('active'); } } });
        document.addEventListener('click', (e)=>{ if (!elements.searchContainer.contains(e.target)) { elements.searchResults.style.display = 'none'; } if (elements.searchContainer.classList.contains('active') && window.innerWidth <= 768 && !elements.searchContainer.contains(e.target) && e.target !== elements.searchToggleBtn){ elements.searchContainer.classList.remove('active'); }});
        elements.searchToggleBtn.addEventListener('click', (e)=>{ e.stopPropagation(); elements.searchContainer.classList.toggle('active'); if(elements.searchContainer.classList.contains('active')) elements.searchInput.focus(); else elements.searchResults.style.display = 'none'; });
        window.addEventListener('scroll', () => { if (window.scrollY > 50) elements.header.classList.add('scrolled'); else elements.header.classList.remove('scrolled'); });

        document.addEventListener('DOMContentLoaded', () => {
            startLoadingMessages();
            initializeQuickResponses();
            resetNavigation(); 
            // Auth state change will handle initial data loading and UI setup.
        });