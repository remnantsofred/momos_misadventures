!function(){"use strict";var t={d:function(i,s){for(var e in s)t.o(s,e)&&!t.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:s[e]})},o:function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}};!function(){t.d({},{l:function(){return L},v:function(){return T}});const i=new Image;i.src="./src/assets/cats/momo_walk_right.png";const s=new Image;s.src="./src/assets/cats/momo_walk_left.png";const e=120,h=114,o=new Image;o.src="./src/assets/cats/momo_pounce_right.png";const l=new Image;l.src="./src/assets/cats/momo_pounce_left_shortv1.png";const n=new Image;n.src="./src/assets/cats/momo_falling.png";const c=new Image;c.src="./src/assets/cats/momo_ambush_fall.png";const r=new Image;r.src="./src/assets/cats/momo_walk_right_upside_down.png";const a=new Image;a.src="./src/assets/cats/momo_walk_left_upside_down.png";const d=new Image;d.src="./src/assets/cats/ash_walk_right.png";const m=new Image;m.src="./src/assets/cats/ash_walk_left.png",(new Image).src="./src/assets/cats/ashy_scared.png",(new Image).src="./src/assets/cats/ambushcollision_justashy.png";const y=new Image;y.src="./src/assets/cats/ambushcollision.png";const g=new Image;g.src="./src/assets/cats/TigerMothFlap4.png";(new Image).src="./src/assets/cats/momo_ambush_fall_action_lines.png";let x=1,w=0,u=10;class f{constructor(t,i,s,e){let h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.canvasWidth=t,this.canvasHeight=i,this.calcXPos.bind(this),this.calcYPos.bind(this),this.jump.bind(this),this.ash=s,this.fly=e,this.level=h,this.upsidedown=!1,this.reset()}reset(){this.width=90,this.height=85.5,this.x=this.canvasWidth/8,this.y=this.momoBottom(),this.yVelocity=0,this.xVelocity=0,this.direction=null,this.jumped=!1,this.grounded=!0,this.upsidedown=!1}draw(t){let f=this.y;this.calcYPos(),this.y!==f||this.jumped?this.grounded=!1:this.grounded=!0,this.calcXPos(),this.ash||this.fly?this.ash?!1===this.jumped&&this.xVelocity>0&&"right"===this.direction?(t.drawImage(d,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1),w++):!1===this.jumped&&this.xVelocity<0&&"left"===this.direction?(t.drawImage(m,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1),w++):"scared"===this.direction&&(t.drawImage(y,0,0,285,283,this.x-75,this.y-55,213.75,212.25),this.width=213.75,this.height=212.25):this.fly&&(t.drawImage(g,163*x,0,163,80,this.x,this.y,163,80),this.width=163,this.height=80,w%u==0&&(x<3?x++:x=0),w++):("AMBUSH"===this.level&&!0===this.upsidedown&&("right"===this.direction&&this.xVelocity>0?(t.drawImage(r,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1)):"left"===this.direction&&this.xVelocity<0?(t.drawImage(a,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1)):(t.drawImage(r,0,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5)),!1===this.upsidedown&&(!1===this.jumped&&this.xVelocity>0&&"right"===this.direction?(t.drawImage(i,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1),w++):!1===this.jumped&&this.xVelocity<0&&"left"===this.direction?(t.drawImage(s,x*e,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5,w%u==0&&(x<3?x++:x=1),w++):!0===this.jumped&&"right"===this.direction?(t.drawImage(o,165*x,0,165,156,this.x,this.y,99.75,117),this.width=99.75,this.height=117,this.yVelocity<-3&&this.yVelocity>-30?x=2:this.yVelocity<3&&this.yVelocity>=-3?x=4:this.yVelocity<=12&&this.yVelocity>=3&&(x=5)):!0===this.jumped&&"left"===this.direction?(t.drawImage(l,133*x,0,133,156,this.x,this.y,99.75,117),this.width=99.75,this.height=117,x=this.yVelocity<-3&&this.yVelocity>-30?0:this.yVelocity<3&&this.yVelocity>-3?2:3):"AMBUSH"===this.level&&"down"===this.direction&&!1===this.grounded?(t.drawImage(c,0,0,104,119,this.x,this.y,78,89.25),this.width=78,this.height=89.25):"down"===this.direction&&0!==this.yVelocity?(t.drawImage(n,0,0,146,122,this.x,this.y,109.5,91.5),this.width=109.5,this.height=91.5):(t.drawImage(i,0,0,e,h,this.x,this.y,90,85.5),this.width=90,this.height=85.5)))}calcYPos(){this.fly||(this.yVelocity<12&&this.y<this.momoBottom()&&!this.grounded&&(this.yVelocity+=2),this.grounded&&!this.jumped&&"down"!==this.direction&&(this.yVelocity=0),this.y<=this.momoBottom()&&(this.y+=this.yVelocity,this.y>=this.momoBottom()&&(this.y=this.momoBottom(),this.jumped=!1,this.yVelocity=0)))}calcXPos(){this.ash?this.ash&&(this.x+=this.xVelocity):0!==this.xVelocity&&(this.x+=this.xVelocity,!1===this.jumped&&(this.xVelocity>0?(this.xVelocity-=.1,this.xVelocity<0&&(this.xVelocity=0)):(this.xVelocity+=.1,this.xVelocity>0&&(this.xVelocity=0))),this.x<=0&&(this.x=0,this.xVelocity=0),this.x>=710&&(this.x=710,this.xVelocity=0))}jump(){this.grounded&&(this.jumped=!0,this.grounded=!1,this.yVelocity=-30)}moveLeft(t){this.direction="left","walk"===t?this.xVelocity=-5:"run"===t&&(this.xVelocity=-9)}moveRight(t){this.direction="right","walk"===t?this.xVelocity=5:"run"===t&&(this.xVelocity=9)}moveDown(){this.y+this.height<this.momoBottom()&&this.grounded&&(this.yVelocity=2,this.direction="down",this.grounded=!1),this.upsidedown=!1}collide(t,i){if(t.collision)return!this.grounded&&this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y?(this.yVelocity>=0&&"down"!==this.direction&&!i?(this.yVelocity=0,this.grounded=!0,this.jumped=!1):this.yVelocity<0&&this.yVelocity>=-26&&!i&&(this.yVelocity=2,this.grounded=!1,this.jumped=!1,this.y=t.y+t.height+1),!0):(i||(this.grounded=!1),!1)}momoBottom(){return 453.5}automateMovement(){"right"===this.direction&&(this.xVelocity=this.fly?12:5,this.x>=710&&(this.direction="left",this.xVelocity=this.fly?-12:-5)),"left"===this.direction&&(this.xVelocity=this.fly?-12:-5,this.x>=710?this.xVelocity=this.fly?-12:-5:this.x<=0&&(this.xVelocity=this.fly?12:5,this.direction="right"))}changeStartingPos(t,i){this.x=t,this.y=i}}const v=new Image;v.src="./src/assets/backgrounds/kitchen_simplev3.png";const p=new Image;p.src="./src/assets/backgrounds/ambushlivingroom.png";const S=new Image;S.src="./src/assets/backgrounds/livingroom_updatedv4novase.png";class V{constructor(t,i,s,e,h,o,l,n){this.id=t,this.title=i,this.subtitle=s,this.background=e,this.maxtime=h,this.objects=o,this.target=n,this.gravityModifier=l}drawBackground(t){t.fillStyle="whitesmoke",this.background===v?t.drawImage(this.background,0,0,3332,2499,0,0,T,L):this.background===p?t.drawImage(this.background,0,0,1388,1041,0,0,T,L):this.background===S&&t.drawImage(this.background,0,0,1180,885,0,0,T,L)}drawTitle(t){t.font="60px Itim, cursive",t.fillStyle="#daa520",t.fillText(this.title,306,80),t.font="18px Itim, cursive",t.fillText(this.subtitle,270,120)}drawWinStatement(t){t.font="24px  Itim, cursive",t.fillStyle="#daa520",t.fillText("You win!",106,80)}drawLoseStatement(t){t.font="24px  Itim, cursive",t.fillStyle="#daa520",t.fillText("You Lose! :(",106,80)}}class I{constructor(t,i,s,e,h){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#000000",l=arguments.length>6?arguments[6]:void 0,n=arguments.length>8?arguments[8]:void 0;this.ctx=t,this.x=i,this.y=s,this.width=e,this.height=h,this.yVelocity=0,this.xVelocity=3,this.color=o,this.collision=l,this.bounce=!1,this.target=n}draw(t){t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height)}drawPlatform(t){t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height)}automateMovement(){"right"===this.direction&&(this.xVelocity=CONSTANTS.WALK_SPEED,this.x>=CONSTANTS.RIGHTWALL-walkspriteWidth*sizeModifier&&(this.direction="left",this.xVelocity=-CONSTANTS.WALK_SPEED)),"left"===this.direction&&(this.xVelocity=-CONSTANTS.WALK_SPEED,this.x>=CONSTANTS.RIGHTWALL-walkspriteWidth*sizeModifier?this.xVelocity=-CONSTANTS.WALK_SPEED:this.x<=0&&(this.xVelocity=CONSTANTS.WALK_SPEED,this.direction="right"))}}const A=document.getElementById("gamescreen"),T=(A.getContext("2d"),A.width=800),L=A.height=600;new class{constructor(t){this.ctx=t.getContext("2d"),this.dimensions={width:T,height:L},this.canvas=t,this.momo=new f(this.dimensions.width,this.dimensions.height,!1,!1);const i=new I(this.ctx,0,539,T,61,"#449903",!1,!1,!1),s=new I(this.ctx,0,800,0,0,"#000000",!0,!1,!1),e=new I(this.ctx,58,158,135,5,"#7cfd21",!0,!1,!0),h=new I(this.ctx,208,364,340,5,"#fde321",!0,!1,!1),o=(new I(this.ctx,450,203,120,5,"#fde321",!0,!1,!1),new I(this.ctx,265,160,165,5,"#7cfd21",!0,!1,!0)),l=new I(this.ctx,290,430,90,5,"#fde321",!0,!1,!1),n=new I(this.ctx,80,360,160,5,"#fde321",!0,!1,!1),c=new I(this.ctx,537,311,160,5,"#fde321",!0,!1,!1);this.Ashy=new f(this.dimensions.width,this.dimensions.height,!0,!1),new I(this.ctx,235,280,200,5,"#7cfd21",!1,!1,!1);const r=new I(this.ctx,250,275,200,5,"#FFffff",!0,!1,!1);this.fly=new f(this.dimensions.width,this.dimensions.height,!1,!0);const a=[i,s,e,h],d=[i,s,r],m=[i,s],y=[i,s,o,l,n,c],g=[i,s,n];this.levels=[new V(1,"CLIMB","",v,14,a,1,e),new V(2,"AMBUSH","",p,6,d,1,this.Ashy),new V(3,"KILL","",S,4,m,1,this.fly),new V(4,"CLIMB","",S,18,y,1,o),new V(5,"KILL","",v,7,a,1,this.fly),new V(6,"KILL","",S,7,g,1,this.fly)],this.prevlevel=null,this.level=this.levels[0],this.winCounter=0,this.wonMiniGame=!1,this.lostGame=!1,this.score=0,this.running=!1,this.started=!1,this.highScore=0,this.addEventListeners(),this.startGameScreen()}randomSelectLevel(){return this.prevlevel?this.prevlevel===this.levels[0]?this.levels[1]:this.prevlevel===this.levels[1]?this.levels[2]:this.prevlevel===this.levels[2]?this.levels[3]:this.prevlevel===this.levels[3]?this.levels[4]:this.prevlevel===this.levels[4]?this.levels[5]:this.prevlevel===this.levels[5]?(this.shuffleLevelArray(),this.levels[0]):void 0:this.levels[0]}shuffleLevelArray(){let t=this.levels.sort((()=>Math.random()-.5));this.levels=t}play(){this.started=!0,this.running=!0,this.resetGame()}addEventListeners(){window.addEventListener("keydown",this.keydownEvents.bind(this)),this.resetGame.bind(this)}keydownEvents(t){"ArrowLeft"===t.key?t.repeat?this.momo.moveLeft("run"):t.repeat||this.momo.moveLeft("walk"):"ArrowUp"===t.key?this.momo.jump():"ArrowDown"===t.key?this.momo.moveDown():"ArrowRight"===t.key?t.repeat?this.momo.moveRight("run"):t.repeat||this.momo.moveRight("walk"):"Enter"!==t.key||this.running||this.started||this.play()}animate(){if(this.running){this.ctx.clearRect(0,0,T,T),this.level.drawBackground(this.ctx),this.level.drawTitle(this.ctx);for(const t of this.level.objects)if(this.momo.collide(t)){!0===t.target&&(this.winCounter+=1,this.winCounter>11&&(this.running=!1,this.wonMiniGame=!0,this.winMiniGame()));break}for(const t of this.level.objects)t.draw(this.ctx);"AMBUSH"===this.level.title?(this.Ashy.draw(this.ctx),this.Ashy.automateMovement(),this.momo.collide(this.Ashy,!0)&&(this.Ashy.direction="scared",this.Ashy.draw(this.ctx),this.running=!1,this.wonMiniGame=!0,this.winMiniGame()),this.momo.y>=this.momo.momoBottom()&&(this.running=!1,this.lostGame=!0,this.loseGame())):"KILL"===this.level.title&&(this.fly.draw(this.ctx),this.fly.automateMovement(),this.momo.collide(this.fly,!0)&&(this.running=!1,this.wonMiniGame=!0,this.winMiniGame())),"AMBUSH"==this.level.title&&this.wonMiniGame||this.momo.draw(this.ctx),this.ctx.font="22px  Itim, cursive",this.ctx.fillStyle="#daa520",this.ctx.fillText("Score:",657,75),this.ctx.fillText(this.score.toString(),735,75),this.ctx.fillText("Time left:",626,100),this.ctx.fillText(this.timeremaining.toString(),735,100),requestAnimationFrame(this.animate.bind(this)),this.timeremaining-=.02,this.timeremaining<=0&&(this.running=!1,this.lostGame=!0,this.loseGame())}else this.running||this.paused?!this.running&&this.paused&&(this.ctx.fillStyle="#000000CC",this.ctx.fillRect(0,0,T,L),this.ctx.font="50px  Itim, cursive",this.ctx.fillStyle="#daa520",this.ctx.fillText(" *** PAUSED ***",T/3.75,L/2)):this.wonMiniGame?(this.ctx.fillStyle="#00000080",this.ctx.fillRect(0,0,T,L),this.ctx.font="50px  Itim, cursive",this.ctx.fillStyle="#daa520",this.ctx.fillText(" *** WIN GAME ***",T/3.75,L/2),window.cancelAnimationFrame(this.animate)):this.lostGame&&(this.ctx.fillStyle="#000000CC",this.ctx.fillRect(0,0,T,L),this.ctx.font="50px  Itim, cursive",this.ctx.fillStyle="#daa520",this.ctx.fillText(" *** GAME OVER ***",T/3.75,L/2),window.cancelAnimationFrame(this.animate))}startGameScreen(){this.ctx.fillStyle="#F5F5DC",this.ctx.fillRect(0,0,T,L),this.ctx.font="50px  Itim, cursive",this.ctx.fillStyle="#daa520",this.ctx.fillText("Press Enter to Start Game",T/7.5,150),this.ctx.fillText("-> Arrow keys to move",T/7.5,350)}retryGameScreen(){this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,T,L),this.ctx.font="50px  Itim, cursive",this.ctx.fillStyle="#daa520",0===this.highScore?(this.ctx.fillText("Your score was "+this.score,T/8,L/4),this.ctx.fillText("Your new high score is "+this.score,T/8,L/3),this.ctx.fillText("Press Enter to Retry",T/8,L/2),this.highScore=this.score):this.score<=this.highScore?(this.ctx.fillText("Your score was "+this.score,T/8,L/4),this.ctx.fillText("Your high score is "+this.highScore,T/8,L/3),this.ctx.fillText("Press Enter to Retry",T/8,L/2)):this.score>this.highScore&&(this.ctx.fillText("Your score was "+this.score,T/8,L/4),this.ctx.fillText("Your new high score is "+this.score,T/8,L/3),this.ctx.fillText("Press Enter to Retry",T/8,L/2),this.highScore=this.score)}loseGame(){this.level.drawLoseStatement(this.ctx),this.started=!1,setTimeout((()=>{this.retryGameScreen()}),1e3)}resetGame(){this.winCounter=0,this.wonMiniGame?(this.score+=1,this.lostGame=!1,this.wonMiniGame=!1):this.lostGame&&(this.score=0,this.lostGame=!1,this.wonMiniGame=!1,this.started=!1),this.level=this.randomSelectLevel(),this.prevlevel=this.level,this.timeremaining=this.level.maxtime,this.momo.reset(),"AMBUSH"===this.level.title?(this.momo.level="AMBUSH",this.momo.grounded=!0,this.momo.upsidedown=!0,this.momo.changeStartingPos(300,190),this.Ashy.direction="right",this.Ashy.collision=!0,this.Ashy.xVelocity=5):"KILL"===this.level.title&&(this.momo.level="KILL",this.momo.grounded=!0,3===this.level.id?this.fly.changeStartingPos(300,170):5===this.level.id?this.fly.changeStartingPos(425,85):6===this.level.id&&this.fly.changeStartingPos(275,65),this.fly.direction="right",this.fly.collision=!0,this.fly.xVelocity=5),this.running=!0,window.cancelAnimationFrame(this.animate),this.animate()}winMiniGame(){this.level.drawWinStatement(this.ctx),setTimeout((()=>{this.resetGame()}),2e3)}}(A)}()}();
//# sourceMappingURL=main.js.map