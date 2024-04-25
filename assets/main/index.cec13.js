window.__require=function e(t,i,n){function r(a,l){if(!i[a]){if(!t[a]){var c=a.split("/");if(c=c[c.length-1],!t[c]){var u="function"==typeof __require&&__require;if(!l&&u)return u(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var s=i[a]={exports:{}};t[a][0].call(s.exports,function(e){return r(t[a][1][e]||e)},s,s.exports,e,t,i,n)}return i[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<n.length;a++)r(n[a]);return r}({Background:[function(e,t,i){"use strict";var n,r,o;function a(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}cc._RF.push(t,"5a3b3RdsZdKd4o4aruuIlUy","Background"),i.__esModule=!0,i.default=void 0;var u,s,p,h,f=cc._decorator,d=f.ccclass,b=f.property,y=d((r=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return a(t=e.call.apply(e,[this].concat(n))||this,"speed",o,l(t)),t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,c(t,i);var r=n.prototype;return r.onLoad=function(){this.init=!1},r.update=function(e){var t=this;this.init||(this.resetPosition(),this.init=!0);var i=this.node.children;i.forEach(function(i){return i.y-=t.speed*e}),i[0].y<=0&&this.resetPosition()},r.resetPosition=function(){var e=this.node.children;e[0].setPosition(0,e[0].height),e[1].setPosition(0,0)},n}(cc.Component),u=r.prototype,s=[b],p={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}},h={},Object.keys(p).forEach(function(e){h[e]=p[e]}),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),void 0===(h=s.slice().reverse().reduce(function(e,t){return t(u,"speed",e)||e},h)).initializer&&(Object.defineProperty(u,"speed",h),h=null),o=h,n=r))||n;i.default=y,t.exports=i.default,cc._RF.pop()},{}],Bullet:[function(e,t,i){"use strict";var n,r,o;function a(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}cc._RF.push(t,"f34acVWlUhAgY8NBhfGk6KV","Bullet"),i.__esModule=!0,i.default=void 0;var u,s,p,h,f=cc._decorator,d=f.ccclass,b=f.property,y=d((r=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return a(t=e.call.apply(e,[this].concat(n))||this,"speed",o,l(t)),t.move=!1,t.player=null,t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,c(t,i);var r=n.prototype;return r.update=function(e){this.move&&(this.node.y+=this.speed*e),this.node.y>this.node.parent.height/2+this.node.height/2&&this.player.destroyBullet(this.node)},r.init=function(e){this.player=e;var t=this.player.node.x,i=this.player.node.y+this.player.node.height/2+this.node.height/2;this.node.setPosition(t,i),this.move=!0},r.startMove=function(){this.move=!0},r.stopMove=function(){this.move=!1},r.onCollisionEnter=function(){this.player.destroyBullet(this.node)},n}(cc.Component),u=r.prototype,s=[b],p={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}},h={},Object.keys(p).forEach(function(e){h[e]=p[e]}),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),void 0===(h=s.slice().reverse().reduce(function(e,t){return t(u,"speed",e)||e},h)).initializer&&(Object.defineProperty(u,"speed",h),h=null),o=h,n=r))||n;i.default=y,t.exports=i.default,cc._RF.pop()},{}],Enemy:[function(e,t,i){"use strict";var n,r,o,a,l;function c(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,i,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}cc._RF.push(t,"d79f6Ot8ThGG45KY8ANsIwW","Enemy"),i.__esModule=!0,i.default=void 0;var h=cc._decorator,f=h.ccclass,d=h.property,b=(n=d(cc.AudioClip),f((o=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return c(t=e.call.apply(e,[this].concat(n))||this,"speed",a,u(t)),c(t,"boomAudioClip",l,u(t)),t.move=!1,t.game=null,t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,s(t,i);var r=n.prototype;return r.onLoad=function(){this.initWidth=this.node.width,this.initHeight=this.node.height,this.initOpacity=this.node.opacity,this.initSpriteFrame=this.node.getComponent(cc.Sprite).spriteFrame},r.update=function(e){this.move&&(this.node.y-=this.speed*e),this.node.y<-this.node.parent.height/2-this.node.height/2&&this.game.destroyEnemy(this.node)},r.init=function(e){var t=this;this.game=e,this.node.width=this.initWidth,this.node.height=this.initHeight,this.node.opacity=this.initOpacity,this.node.getComponent(cc.Sprite).spriteFrame=this.initSpriteFrame;var i=this.node.parent.width-this.node.width,n=i*Math.random()-i/2,r=this.node.parent.height/2+this.node.height/2;this.node.setPosition(n,r),this.node.getComponent(cc.Collider).enabled=!0;var o=this.node.getComponent(cc.Animation);o.on("play",function(){t.node.getComponent(cc.Collider).enabled=!1},this),o.on("finished",function(){t.game.destroyEnemy(t.node)},this),this.startMove()},r.startMove=function(){this.move=!0},r.stopMove=function(){this.move=!1},r.onCollisionEnter=function(e){"Bullet"===e.node.name&&(this.game.plusScore(),cc.audioEngine.play(this.boomAudioClip,!1,.3),this.node.getComponent(cc.Animation).play())},n}(cc.Component),a=p(o.prototype,"speed",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l=p(o.prototype,"boomAudioClip",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),r=o))||r);i.default=b,t.exports=i.default,cc._RF.pop()},{}],GameOverModal:[function(e,t,i){"use strict";var n,r,o,a,l,c,u,s,p,h,f,d;function b(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,i,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}cc._RF.push(t,"177b932R5FGfbuPQ0o/MSy9","GameOverModal"),i.__esModule=!0,i.default=void 0;var g=cc._decorator,O=g.ccclass,w=g.property,P=(n=w(cc.Label),r=w(cc.EditBox),o=w(cc.Label),a=w(cc.Label),l=w(cc.Label),O((u=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return b(t=e.call.apply(e,[this].concat(n))||this,"scoreLabel",s,y(t)),b(t,"nameEditBox",p,y(t)),b(t,"rank1",h,y(t)),b(t,"rank2",f,y(t)),b(t,"rank3",d,y(t)),t.game=null,t.score=0,t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,v(t,i);var r=n.prototype;return r.init=function(e){this.game=e},r.openModal=function(e){void 0===e&&(e=0),this.score=e,this.getScores(),this.scoreLabel.string="Score: "+this.score,this.node.active=!0},r.closeModal=function(){this.node.active=!1},r.onStartClick=function(){var e=this.nameEditBox.textLabel.string;this.score>=50&&e&&this.postScore(e,this.score),this.game.startGame(),this.closeModal()},r.getScores=function(){var e=this,t=new XMLHttpRequest;t.onload=function(){if(200===t.status){var i=JSON.parse(t.responseText);i[0]&&(e.rank1.string=i[0].score+": "+i[0].name),i[1]&&(e.rank2.string=i[1].score+": "+i[1].name),i[2]&&(e.rank3.string=i[2].score+": "+i[2].name)}},t.open("GET","https://score-server.deno.dev/scores"),t.send()},r.postScore=function(e,t){var i=new XMLHttpRequest;i.onload=function(){200===i.status&&console.log(i.responseText)},i.open("POST","https://score-server.deno.dev/scores"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify({name:e,score:t}))},n}(cc.Component),s=m(u.prototype,"scoreLabel",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=m(u.prototype,"nameEditBox",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=m(u.prototype,"rank1",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=m(u.prototype,"rank2",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=m(u.prototype,"rank3",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=u))||c);i.default=P,t.exports=i.default,cc._RF.pop()},{}],Game:[function(e,t,i){"use strict";cc._RF.push(t,"929baZ8q6NHPbkn5gQOj4cV","Game"),i.__esModule=!0,i.default=void 0;var n,r,o,a,l,c,u,s,p,h,f,d,b,y=m(e("./Player")),v=m(e("./GameOverModal"));function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,i,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var _=cc._decorator,z=_.ccclass,E=_.property,C=(n=E(y.default),r=E(cc.Prefab),o=E(cc.Label),a=E(v.default),l=E(cc.AudioClip),z((u=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return g(t=e.call.apply(e,[this].concat(n))||this,"player",s,O(t)),g(t,"enemyPrefab",p,O(t)),g(t,"createEnemyInterval",h,O(t)),g(t,"scoreLabel",f,O(t)),g(t,"gameOverModal",d,O(t)),g(t,"bgmAudioClip",b,O(t)),t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,w(t,i);var r=n.prototype;return r.onLoad=function(){this.openCollision(),this.initEnemyPool(50),this.gameOverModal.init(this)},r.start=function(){this.startGame()},r.openCollision=function(){cc.director.getCollisionManager().enabled=!0},r.startGame=function(){this.destroyAll(),this.resetScore(),this.player.init(this),this.startCreateEnemySchedule(),this.playBgm()},r.gameOver=function(){this.player.stop(),this.stopAll(),this.startCreateEnemySchedule(!1),this.gameOverModal.openModal(this.score),this.stopBgm()},r.startCreateEnemySchedule=function(e){void 0===e&&(e=!0),e?this.schedule(this.createEnemy,this.createEnemyInterval,cc.macro.REPEAT_FOREVER,0):this.unschedule(this.createEnemy)},r.initEnemyPool=function(e){void 0===e&&(e=0),this.enemyPool=new cc.NodePool;for(var t=0;t<e;t++){var i=cc.instantiate(this.enemyPrefab);this.enemyPool.put(i)}},r.createEnemy=function(){var e=null;(e=this.enemyPool.size()>0?this.enemyPool.get():cc.instantiate(this.enemyPrefab)).parent=this.node,e.getComponent("Enemy").init(this)},r.destroyEnemy=function(e){this.enemyPool.put(e)},r.resetScore=function(){this.score=0,this.refreshScoreLabel()},r.plusScore=function(){this.score+=1,this.refreshScoreLabel()},r.refreshScoreLabel=function(){this.scoreLabel.string="Score: "+this.score},r.stopAll=function(){for(var e=this.node.children,t=e.length-1;t>=0;t--){var i=e[t];"Enemy"===i.name?i.getComponent("Enemy").stopMove():"Bullet"===i.name&&i.getComponent("Bullet").stopMove()}},r.destroyAll=function(){for(var e=this.node.children,t=e.length-1;t>=0;t--){var i=e[t];"Enemy"===i.name?this.destroyEnemy(i):"Bullet"===i.name&&this.player.destroyBullet(i)}},r.playBgm=function(){this.bgm=cc.audioEngine.play(this.bgmAudioClip,!0,1)},r.stopBgm=function(){cc.audioEngine.stop(this.bgm)},n}(cc.Component),s=P(u.prototype,"player",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=P(u.prototype,"enemyPrefab",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=P(u.prototype,"createEnemyInterval",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=P(u.prototype,"scoreLabel",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=P(u.prototype,"gameOverModal",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=P(u.prototype,"bgmAudioClip",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=u))||c);i.default=C,t.exports=i.default,cc._RF.pop()},{"./GameOverModal":"GameOverModal","./Player":"Player"}],Player:[function(e,t,i){"use strict";var n,r,o,a,l,c,u;function s(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,i,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}cc._RF.push(t,"afa02FGVopO5LXh2wwaeioQ","Player"),i.__esModule=!0,i.default=void 0;var d=cc._decorator,b=d.ccclass,y=d.property,v=(n=y(cc.Prefab),r=y(cc.AudioClip),b((a=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return s(t=e.call.apply(e,[this].concat(n))||this,"bulletPrefab",l,p(t)),s(t,"createBulletInterval",c,p(t)),s(t,"bulletAudioClip",u,p(t)),t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,h(t,i);var r=n.prototype;return r.onLoad=function(){this.initPosition=this.node.position,this.initBulletPool(10)},r.init=function(e){this.game=e,this.node.setPosition(this.initPosition),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.schedule(this.createBullet,this.createBulletInterval,cc.macro.REPEAT_FOREVER,0)},r.stop=function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.unschedule(this.createBullet)},r.onTouchMove=function(e){var t=this.node,i=this.node.parent,n=e.getDelta();t.x+=n.x,t.y+=n.y;var r=-i.width/2+t.width/2,o=i.width/2-t.width/2,a=i.height/2-t.height/2,l=-i.height/2+t.height/2;t.x<=r?t.x=r:t.x>=o&&(t.x=o),t.y<=l?t.y=l:t.y>=a&&(t.y=a)},r.initBulletPool=function(e){void 0===e&&(e=0),this.bulletPool=new cc.NodePool;for(var t=0;t<e;t++){var i=cc.instantiate(this.bulletPrefab);this.bulletPool.put(i)}},r.createBullet=function(){var e=null;(e=this.bulletPool.size()>0?this.bulletPool.get():cc.instantiate(this.bulletPrefab)).parent=this.node.parent,cc.audioEngine.play(this.bulletAudioClip,!1,.6),e.getComponent("Bullet").init(this)},r.destroyBullet=function(e){this.bulletPool.put(e)},r.onCollisionEnter=function(){this.game.gameOver()},n}(cc.Component),l=f(a.prototype,"bulletPrefab",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=f(a.prototype,"createBulletInterval",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=f(a.prototype,"bulletAudioClip",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=a))||o);i.default=v,t.exports=i.default,cc._RF.pop()},{}]},{},["Background","Bullet","Enemy","Game","GameOverModal","Player"]);