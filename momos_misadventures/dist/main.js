/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_momo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/momo */ \"./src/scripts/momo.js\");\n\n\n\nconst canvas = document.getElementById(\"gamescreen\");\nconst ctx = canvas.getContext(\"2d\");\nconst CANVAS_WIDTH = canvas.width = 600;\nconst CANVAS_HEIGHT = canvas.height = 600;\n\n/////////////////////////////////////////////////////////////\n//// this part of the code is me learning. will remove later\n\n// const playerImage = new Image();\n// playerImage.src = './src/assets/cats/shadow_dog.png';\n// const pspriteWidth = 575;\n// const pspriteHeight = 523;\n\n////////////////////////////////////////////////////////////\n\n//// start game here\n\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\", game.click.bind(game));\n// canvas.addEventListener(\"keydown\", game.click.bind(game));\nconsole.log(\"Webpack is working!\");\nconsole.log(game.momo.xVelocity);\nconsole.log(game.momo.yVelocity);\ncanvas.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowLeft\") {\n    // this.momo.calcXPos(-5);\n    undefined.momo.jump.bind(undefined);\n    console.log(\"jump - left arrow\");\n  } else if (e.key === \"ArrowUp\") {\n    undefined.momo.jump.bind(undefined);\n    console.log(\"up arrow\");\n    // fall through platform if not on ground\n  } else if (e.key === \"ArrowDown\") {\n    undefined.momo.jump();\n    console.log(\"down arrow\");\n  } else if (e.key === \"ArrowRight\") {\n    // this.momo.calcXPos(5);\n    undefined.momo.jump();\n    console.log(\"right arrow\");\n  }\n  // else if (e.key === )\n  // else if (e.key === ' ' || e.key === \"Spacebar\"){\n  // };\n  ;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFrQztBQUNTO0FBQ1Q7QUFHbEMsTUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsWUFBWSxHQUFHTCxNQUFNLENBQUNNLEtBQUssR0FBRyxHQUFHO0FBQ3ZDLE1BQU1DLGFBQWEsR0FBR1AsTUFBTSxDQUFDUSxNQUFNLEdBQUcsR0FBRzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJQyxJQUFJLEdBQUcsSUFBSVoscURBQUksQ0FBQ0csTUFBTSxDQUFDO0FBQzNCQSxNQUFNLENBQUNVLGdCQUFnQixDQUFDLFdBQVcsRUFBRUQsSUFBSSxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7QUFDM0Q7QUFDQUksT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7QUFDbENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUNNLElBQUksQ0FBQ0MsU0FBUyxDQUFDO0FBQ2hDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLENBQUNFLFNBQVMsQ0FBQztBQUVoQ2pCLE1BQU0sQ0FBQ1UsZ0JBQWdCLENBQUMsU0FBUyxFQUFHUSxDQUFDLElBQUc7RUFDdEMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3pCO0lBQ0EsU0FBSSxDQUFDSixJQUFJLENBQUNLLElBQUksQ0FBQ1IsSUFBSSxDQUFDLFNBQUksQ0FBQztJQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFDbEMsQ0FBQyxNQUFNLElBQUlJLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFNBQVMsRUFBRTtJQUM5QixTQUFJLENBQUNKLElBQUksQ0FBQ0ssSUFBSSxDQUFDUixJQUFJLENBQUMsU0FBSSxDQUFDO0lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDdkI7RUFDRixDQUFDLE1BQU0sSUFBSUksQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ2hDLFNBQUksQ0FBQ0osSUFBSSxDQUFDSyxJQUFJLEVBQUU7SUFFaEJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztFQUUzQixDQUFDLE1BQU0sSUFBSUksQ0FBQyxDQUFDQyxHQUFHLEtBQUssWUFBWSxFQUFDO0lBQ2hDO0lBQ0EsU0FBSSxDQUFDSixJQUFJLENBQUNLLElBQUksRUFBRTtJQUNoQlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzVCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuaW1wb3J0IE1vbW8gZnJvbSAnLi9zY3JpcHRzL21vbW8nO1xuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXNjcmVlblwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IENBTlZBU19XSURUSCA9IGNhbnZhcy53aWR0aCA9IDYwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vIHRoaXMgcGFydCBvZiB0aGUgY29kZSBpcyBtZSBsZWFybmluZy4gd2lsbCByZW1vdmUgbGF0ZXJcblxuLy8gY29uc3QgcGxheWVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbi8vIHBsYXllckltYWdlLnNyYyA9ICcuL3NyYy9hc3NldHMvY2F0cy9zaGFkb3dfZG9nLnBuZyc7XG4vLyBjb25zdCBwc3ByaXRlV2lkdGggPSA1NzU7XG4vLyBjb25zdCBwc3ByaXRlSGVpZ2h0ID0gNTIzO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLyBzdGFydCBnYW1lIGhlcmVcblxubGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZ2FtZS5jbGljay5iaW5kKGdhbWUpKTtcbi8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnYW1lLmNsaWNrLmJpbmQoZ2FtZSkpO1xuY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5jb25zb2xlLmxvZyhnYW1lLm1vbW8ueFZlbG9jaXR5KTtcbmNvbnNvbGUubG9nKGdhbWUubW9tby55VmVsb2NpdHkpO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XG4gIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgIC8vIHRoaXMubW9tby5jYWxjWFBvcygtNSk7XG4gICAgdGhpcy5tb21vLmp1bXAuYmluZCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhcImp1bXAgLSBsZWZ0IGFycm93XCIpXG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgdGhpcy5tb21vLmp1bXAuYmluZCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhcInVwIGFycm93XCIpO1xuICAgIC8vIGZhbGwgdGhyb3VnaCBwbGF0Zm9ybSBpZiBub3Qgb24gZ3JvdW5kXG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICB0aGlzLm1vbW8uanVtcCgpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiZG93biBhcnJvd1wiKTtcbiAgICBcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpe1xuICAgIC8vIHRoaXMubW9tby5jYWxjWFBvcyg1KTtcbiAgICB0aGlzLm1vbW8uanVtcCgpO1xuICAgIGNvbnNvbGUubG9nKFwicmlnaHQgYXJyb3dcIik7XG4gIH1cbiAgLy8gZWxzZSBpZiAoZS5rZXkgPT09IClcbiAgLy8gZWxzZSBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gXCJTcGFjZWJhclwiKXtcbiAgLy8gfTtcbiAgO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsIk1vbW8iLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkNBTlZBU19XSURUSCIsIndpZHRoIiwiQ0FOVkFTX0hFSUdIVCIsImhlaWdodCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsIm1vbW8iLCJ4VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJlIiwia2V5IiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _momo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./momo */ \"./src/scripts/momo.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\n\n//// starting a new game should entail:\n//// import /load game_view (or does new game go into game_view?) --> ask someone \n//// creating a canvas, saving ctx\n//// loop over all opjects, draw all\n//// logic to start a minigame and continue to next one if win (and update score)\n//// go back to main screen on loss \nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.restart();\n  }\n\n  //// starts fresh gamestate? what does this do \n  //// sets running to false, creates a new level (which is supposed to fill the background)\n  //// creates a new momo \n  //// probably need to add: reset score\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.momo = new _momo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions.width, this.dimensions.height, this.ctx);\n    this.play();\n  }\n  play() {\n    // this.running = true;\n    this.momo.drawMomo();\n    // TO ADD: cycle thru all objects & draw each\n\n    this.canvas.addEventListener(\"keydown\", e => {\n      //left key === 37\n      if (e.keyCode == '37') {\n        // this.momo.calcXPos(-5);\n        this.momo.jump();\n        console.log(\"jump - left arrow\");\n        //up key === 38\n      } else if (e.keyCode == '38') {\n        this.momo.jump.bind(this);\n\n        //down key === 40 (fall through platform if not on ground)\n      } else if (e.keyCode == '40') {\n        this.momo.jump();\n\n        //right key ==- 39\n      } else if (e.keyCode == '39') {\n        // this.momo.calcXPos(5);\n        this.momo.jump();\n      }\n      ;\n    });\n  }\n  click() {\n    this.momo.jump();\n  }\n\n  //// score \n\n  //// resetScore\n\n  //// pause\n\n  //// win?\n\n  //// lose?\n\n  //// next game\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNDOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxNQUFNRSxJQUFJLENBQUM7RUFDeEJDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxJQUFJLENBQUNMLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNNLE9BQU8sRUFBRTtFQUNoQjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQSxPQUFPLEdBQUc7SUFDUixJQUFJLENBQUNDLE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlYLDhDQUFLLENBQUMsSUFBSSxDQUFDTSxVQUFVLENBQUM7SUFDdkMsSUFBSSxDQUFDTSxJQUFJLEdBQUcsSUFBSWIsNkNBQUksQ0FBQyxJQUFJLENBQUNPLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDSixHQUFHLENBQUM7SUFDN0UsSUFBSSxDQUFDUyxJQUFJLEVBQUU7RUFDYjtFQUVBQSxJQUFJLEdBQUU7SUFDSjtJQUNBLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxRQUFRLEVBQUU7SUFDcEI7O0lBRUEsSUFBSSxDQUFDWCxNQUFNLENBQUNZLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFHO01BQzNDO01BQ0EsSUFBSUEsQ0FBQyxDQUFDQyxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ3JCO1FBQ0EsSUFBSSxDQUFDTCxJQUFJLENBQUNNLElBQUksRUFBRTtRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbEM7TUFDQSxDQUFDLE1BQU0sSUFBSUosQ0FBQyxDQUFDQyxPQUFPLElBQUksSUFBSSxFQUFFO1FBQzVCLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBRTNCO01BQ0EsQ0FBQyxNQUFNLElBQUlMLENBQUMsQ0FBQ0MsT0FBTyxJQUFJLElBQUksRUFBRTtRQUM1QixJQUFJLENBQUNMLElBQUksQ0FBQ00sSUFBSSxFQUFFOztRQUVoQjtNQUNGLENBQUMsTUFBTSxJQUFJRixDQUFDLENBQUNDLE9BQU8sSUFBSSxJQUFJLEVBQUM7UUFDM0I7UUFDQSxJQUFJLENBQUNMLElBQUksQ0FBQ00sSUFBSSxFQUFFO01BQ2xCO01BQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtFQUVBSSxLQUFLLEdBQUU7SUFDTCxJQUFJLENBQUNWLElBQUksQ0FBQ00sSUFBSSxFQUFFO0VBQ2xCOztFQUVBOztFQUVBOztFQUVBOztFQUVBOztFQUVBOztFQUVBO0FBS0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21vIGZyb20gJy4vbW9tbyc7XG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCdcblxuLy8vLyBzdGFydGluZyBhIG5ldyBnYW1lIHNob3VsZCBlbnRhaWw6XG4vLy8vIGltcG9ydCAvbG9hZCBnYW1lX3ZpZXcgKG9yIGRvZXMgbmV3IGdhbWUgZ28gaW50byBnYW1lX3ZpZXc/KSAtLT4gYXNrIHNvbWVvbmUgXG4vLy8vIGNyZWF0aW5nIGEgY2FudmFzLCBzYXZpbmcgY3R4XG4vLy8vIGxvb3Agb3ZlciBhbGwgb3BqZWN0cywgZHJhdyBhbGxcbi8vLy8gbG9naWMgdG8gc3RhcnQgYSBtaW5pZ2FtZSBhbmQgY29udGludWUgdG8gbmV4dCBvbmUgaWYgd2luIChhbmQgdXBkYXRlIHNjb3JlKVxuLy8vLyBnbyBiYWNrIHRvIG1haW4gc2NyZWVuIG9uIGxvc3MgXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICAvLy8vIHN0YXJ0cyBmcmVzaCBnYW1lc3RhdGU/IHdoYXQgZG9lcyB0aGlzIGRvIFxuICAvLy8vIHNldHMgcnVubmluZyB0byBmYWxzZSwgY3JlYXRlcyBhIG5ldyBsZXZlbCAod2hpY2ggaXMgc3VwcG9zZWQgdG8gZmlsbCB0aGUgYmFja2dyb3VuZClcbiAgLy8vLyBjcmVhdGVzIGEgbmV3IG1vbW8gXG4gIC8vLy8gcHJvYmFibHkgbmVlZCB0byBhZGQ6IHJlc2V0IHNjb3JlXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgIHRoaXMubW9tbyA9IG5ldyBNb21vKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCwgdGhpcy5jdHgpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG4gIFxuICBwbGF5KCl7XG4gICAgLy8gdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1vbW8uZHJhd01vbW8oKTtcbiAgICAvLyBUTyBBREQ6IGN5Y2xlIHRocnUgYWxsIG9iamVjdHMgJiBkcmF3IGVhY2hcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKT0+e1xuICAgICAgLy9sZWZ0IGtleSA9PT0gMzdcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gJzM3Jykge1xuICAgICAgICAvLyB0aGlzLm1vbW8uY2FsY1hQb3MoLTUpO1xuICAgICAgICB0aGlzLm1vbW8uanVtcCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImp1bXAgLSBsZWZ0IGFycm93XCIpXG4gICAgICAvL3VwIGtleSA9PT0gMzhcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09ICczOCcpIHtcbiAgICAgICAgdGhpcy5tb21vLmp1bXAuYmluZCh0aGlzKTtcbiAgICAgIFxuICAgICAgLy9kb3duIGtleSA9PT0gNDAgKGZhbGwgdGhyb3VnaCBwbGF0Zm9ybSBpZiBub3Qgb24gZ3JvdW5kKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzQwJykge1xuICAgICAgICB0aGlzLm1vbW8uanVtcCgpO1xuICAgICAgXG4gICAgICAgIC8vcmlnaHQga2V5ID09LSAzOVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzM5Jyl7XG4gICAgICAgIC8vIHRoaXMubW9tby5jYWxjWFBvcyg1KTtcbiAgICAgICAgdGhpcy5tb21vLmp1bXAoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjbGljaygpe1xuICAgIHRoaXMubW9tby5qdW1wKCk7XG4gIH1cblxuICAvLy8vIHNjb3JlIFxuXG4gIC8vLy8gcmVzZXRTY29yZVxuXG4gIC8vLy8gcGF1c2VcblxuICAvLy8vIHdpbj9cblxuICAvLy8vIGxvc2U/XG5cbiAgLy8vLyBuZXh0IGdhbWVcblxuICBcblxuXG59Il0sIm5hbWVzIjpbIk1vbW8iLCJMZXZlbCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0YXJ0IiwicnVubmluZyIsImxldmVsIiwibW9tbyIsInBsYXkiLCJkcmF3TW9tbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImp1bXAiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n//// game view should include the title, border for canvas, canvas, buttons (play, pause, restart, instructions)\n//// score (updates score or resets on loss)\n//// links to linkedin, etc\n//// link to about game\n//// later/bonus: splashscreen transitions between games\n\nclass GameView {\n\n  ////title\n\n  //// border and background outside of the canvas (or will this just be css?)\n\n  //// draw the canvas? \n\n  //// buttons to start game OR gamestart on click inside canvas?\n\n  //// buttons to pause, restart game\n\n  //// instructions / about game (or is this HMTL/css?)\n\n  //// links to Daphne LinkedIn, Github\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsTUFBTUEsUUFBUSxDQUFDOztFQUc1Qjs7RUFFQTs7RUFHQTs7RUFFQTs7RUFFQTs7RUFFQTs7RUFFQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8gZ2FtZSB2aWV3IHNob3VsZCBpbmNsdWRlIHRoZSB0aXRsZSwgYm9yZGVyIGZvciBjYW52YXMsIGNhbnZhcywgYnV0dG9ucyAocGxheSwgcGF1c2UsIHJlc3RhcnQsIGluc3RydWN0aW9ucylcbi8vLy8gc2NvcmUgKHVwZGF0ZXMgc2NvcmUgb3IgcmVzZXRzIG9uIGxvc3MpXG4vLy8vIGxpbmtzIHRvIGxpbmtlZGluLCBldGNcbi8vLy8gbGluayB0byBhYm91dCBnYW1lXG4vLy8vIGxhdGVyL2JvbnVzOiBzcGxhc2hzY3JlZW4gdHJhbnNpdGlvbnMgYmV0d2VlbiBnYW1lc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG5cblxuICAvLy8vdGl0bGVcblxuICAvLy8vIGJvcmRlciBhbmQgYmFja2dyb3VuZCBvdXRzaWRlIG9mIHRoZSBjYW52YXMgKG9yIHdpbGwgdGhpcyBqdXN0IGJlIGNzcz8pXG4gXG5cbiAgLy8vLyBkcmF3IHRoZSBjYW52YXM/IFxuXG4gIC8vLy8gYnV0dG9ucyB0byBzdGFydCBnYW1lIE9SIGdhbWVzdGFydCBvbiBjbGljayBpbnNpZGUgY2FudmFzP1xuXG4gIC8vLy8gYnV0dG9ucyB0byBwYXVzZSwgcmVzdGFydCBnYW1lXG5cbiAgLy8vLyBpbnN0cnVjdGlvbnMgLyBhYm91dCBnYW1lIChvciBpcyB0aGlzIEhNVEwvY3NzPylcblxuICAvLy8vIGxpbmtzIHRvIERhcGhuZSBMaW5rZWRJbiwgR2l0aHViXG5cbn0iXSwibmFtZXMiOlsiR2FtZVZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\n//// not sure I need this? refactor? \n//// maybe for each game I change the background here\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n  drawBackground(ctx) {\n    ctx.fillStyle = \"whitesmoke\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    console.log(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFZSxNQUFNQSxLQUFLLENBQUM7RUFDekJDLFdBQVcsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0VBQzlCO0VBRUFDLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2xCQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxZQUFZO0lBQzVCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FBQztJQUNqRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQztFQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9zY3JpcHRzL2xldmVsLmpzPzAxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLyBub3Qgc3VyZSBJIG5lZWQgdGhpcz8gcmVmYWN0b3I/IFxuLy8vLyBtYXliZSBmb3IgZWFjaCBnYW1lIEkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGhlcmVcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlc21va2VcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICBjb25zb2xlLmxvZyhjdHgpO1xuICB9XG59Il0sIm5hbWVzIjpbIkxldmVsIiwiY29uc3RydWN0b3IiLCJkaW1lbnNpb25zIiwiZHJhd0JhY2tncm91bmQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/scripts/momo.js":
/*!*****************************!*\
  !*** ./src/scripts/momo.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Momo; }\n/* harmony export */ });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/scripts/object.js\");\n//// this should include all the logic related to the main character momo\n//// how to draw and animate momo and source files\n//// momo moves and position\n\nconst CONSTANTS = {\n  GRAVITY: 2,\n  JUMP_SPEED: -8,\n  GROUND: 400,\n  TERMINAL_VEL: 12,\n  LEFTWALL: 0,\n  RIGHTWALL: 550\n};\nconst momo = new Image();\nmomo.src = \"./src/assets/cats/momo_walk_right.png\";\nconst spriteWidth = 120;\nconst spriteHeight = 120;\nlet frameX = 1;\nlet frameY = 0;\n//set a maxFrame variable per row\nlet gameFrame = 0;\n// let staggerFrames = 15;\n//bigger staggerFrame is slower looking move\n//15 should be slow walk (5, 10, 15) 3 speeds\n//max speed staggerFrames = 5\n\nclass Momo {\n  constructor(canvasWidth, canvasHeight, ctx, bounce) {\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ctx = ctx;\n    this.x = canvasWidth / 6;\n    this.y = CONSTANTS.GROUND;\n    this.yVelocity = 0;\n    this.xVelocity = 0;\n    this.calcXPos.bind(this);\n    this.calcYPos.bind(this);\n    this.jump.bind(this);\n  }\n  drawMomo() {\n    this.ctx.clearRect(0, 0, 600, 600);\n    this.calcYPos();\n    if (this.xVelocity > 0) {\n      this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);\n      // if (gameFrame % staggerFrames == 0){       //old version\n      if (gameFrame % (this.xVelocity / .5) == 0) {\n        // replace staggerFrames with xVelocity/3)\n        if (frameX < 3) frameX++;else frameX = 1;\n      }\n      gameFrame++;\n    } else {\n      this.ctx.drawImage(momo, 0 * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);\n    }\n    ;\n    requestAnimationFrame(this.drawMomo.bind(this));\n  }\n\n  //////// this is old animate code. breaking up to draw and calcYPos and calcXPos\n  // animate(){\n  //   this.ctx.clearRect(0,0,600, 600);\n  //   this.move();\n  //   this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);\n  //     if (gameFrame % staggerFrames == 0){\n  //       if (frameX < 3) frameX ++;\n  //       else frameX = 1;\n  //     }\n\n  //   gameFrame++;\n  //   requestAnimationFrame(this.animate.bind(this));\n  // }\n\n  // update Y position (height / vertical pos)\n  calcYPos(yVelocity) {\n    if (this.y <= CONSTANTS.GROUND) {\n      this.y += this.yVelocity;\n      if (this.y > 400) this.y = 400;\n    }\n    ;\n    if (this.yVelocity < CONSTANTS.TERMINAL_VEL) {\n      this.yVelocity += CONSTANTS.GRAVITY;\n    }\n  }\n\n  // updates X position (horizontal across board)\n  calcXPos(xVelocity) {\n    if (this.x >= CONSTANTS.LEFTWALL) {\n      this.x += this.xVelocity;\n      if (this.x < 0) this.x = 0;\n    }\n    ;\n    if (this.xVelocity < CONSTANTS.TERMINAL_VEL) {\n      this.xVelocity += CONSTANTS.GRAVITY;\n    }\n    if (this.x <= CONSTANTS.RIGHTWALL) {\n      this.x -= this.xVelocity;\n      if (this.x > 550) this.x = 550;\n    }\n    ;\n  }\n  jump() {\n    if (this.y === CONSTANTS.GROUND) {\n      this.yVelocity = -30;\n    }\n    ;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQzhCO0FBRTlCLE1BQU1DLFNBQVMsR0FBRztFQUNoQkMsT0FBTyxFQUFFLENBQUM7RUFDVkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxZQUFZLEVBQUcsRUFBRTtFQUNqQkMsUUFBUSxFQUFFLENBQUM7RUFDWEMsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJQyxLQUFLLEVBQUU7QUFDeEJELElBQUksQ0FBQ0UsR0FBRyxHQUFHLHVDQUF1QztBQUVsRCxNQUFNQyxXQUFXLEdBQUcsR0FBRztBQUN2QixNQUFNQyxZQUFZLEdBQUcsR0FBRztBQUN4QixJQUFJQyxNQUFNLEdBQUcsQ0FBQztBQUNkLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2Q7QUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNQyxJQUFJLENBQUM7RUFFeEJDLFdBQVcsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFO0lBQ2xELElBQUksQ0FBQ0gsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRSxDQUFDLEdBQUdKLFdBQVcsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0ssQ0FBQyxHQUFHdEIsU0FBUyxDQUFDRyxNQUFNO0lBQ3pCLElBQUksQ0FBQ29CLFNBQVMsR0FBRyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDRSxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDdEI7RUFJQUcsUUFBUSxHQUFFO0lBQ1IsSUFBSSxDQUFDVixHQUFHLENBQUNXLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDaEMsSUFBSSxDQUFDSCxRQUFRLEVBQUU7SUFDZixJQUFHLElBQUksQ0FBQ0gsU0FBUyxHQUFHLENBQUMsRUFBRztNQUN0QixJQUFJLENBQUNMLEdBQUcsQ0FBQ1ksU0FBUyxDQUFDeEIsSUFBSSxFQUFFSyxNQUFNLEdBQUdGLFdBQVcsRUFBRSxDQUFDLEVBQUVBLFdBQVcsRUFBRUMsWUFBWSxFQUFFLElBQUksQ0FBQ1UsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFWixXQUFXLEVBQUVDLFlBQVksQ0FBQztNQUN2SDtNQUNBLElBQUlHLFNBQVMsSUFBSSxJQUFJLENBQUNVLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDekM7UUFDQSxJQUFJWixNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEVBQUcsQ0FBQyxLQUNyQkEsTUFBTSxHQUFHLENBQUM7TUFDakI7TUFFQUUsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDSyxHQUFHLENBQUNZLFNBQVMsQ0FBQ3hCLElBQUksRUFBRSxDQUFDLEdBQUdHLFdBQVcsRUFBRSxDQUFDLEVBQUVBLFdBQVcsRUFBRUMsWUFBWSxFQUFFLElBQUksQ0FBQ1UsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFWixXQUFXLEVBQUVDLFlBQVksQ0FBQztJQUNwSDtJQUFDO0lBQ0RxQixxQkFBcUIsQ0FBQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2pEOztFQUVGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQUMsUUFBUSxDQUFDSixTQUFTLEVBQUM7SUFDZixJQUFJLElBQUksQ0FBQ0QsQ0FBQyxJQUFJdEIsU0FBUyxDQUFDRyxNQUFNLEVBQUU7TUFDOUIsSUFBSSxDQUFDbUIsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsU0FBUztNQUN4QixJQUFJLElBQUksQ0FBQ0QsQ0FBQyxHQUFHLEdBQUcsRUFDZCxJQUFJLENBQUNBLENBQUMsR0FBRyxHQUFHO0lBQ2hCO0lBQUM7SUFDRCxJQUFHLElBQUksQ0FBQ0MsU0FBUyxHQUFHdkIsU0FBUyxDQUFDSSxZQUFZLEVBQUU7TUFDeEMsSUFBSSxDQUFDbUIsU0FBUyxJQUFJdkIsU0FBUyxDQUFDQyxPQUFPO0lBQ3ZDO0VBQ0o7O0VBRUE7RUFDQXdCLFFBQVEsQ0FBQ0QsU0FBUyxFQUFDO0lBQ2YsSUFBSSxJQUFJLENBQUNILENBQUMsSUFBSXJCLFNBQVMsQ0FBQ0ssUUFBUSxFQUFFO01BQ2hDLElBQUksQ0FBQ2dCLENBQUMsSUFBSSxJQUFJLENBQUNHLFNBQVM7TUFDeEIsSUFBSSxJQUFJLENBQUNILENBQUMsR0FBRyxDQUFDLEVBQ1osSUFBSSxDQUFDQSxDQUFDLEdBQUcsQ0FBQztJQUNkO0lBQUM7SUFDRCxJQUFJLElBQUksQ0FBQ0csU0FBUyxHQUFHeEIsU0FBUyxDQUFDSSxZQUFZLEVBQUU7TUFDekMsSUFBSSxDQUFDb0IsU0FBUyxJQUFJeEIsU0FBUyxDQUFDQyxPQUFPO0lBQ3ZDO0lBQ0EsSUFBSSxJQUFJLENBQUNvQixDQUFDLElBQUlyQixTQUFTLENBQUNNLFNBQVMsRUFBQztNQUNoQyxJQUFJLENBQUNlLENBQUMsSUFBSSxJQUFJLENBQUNHLFNBQVM7TUFDeEIsSUFBSSxJQUFJLENBQUNILENBQUMsR0FBRyxHQUFHLEVBQ2QsSUFBSSxDQUFDQSxDQUFDLEdBQUcsR0FBRztJQUNoQjtJQUFDO0VBQ0w7RUFHQU8sSUFBSSxHQUFFO0lBQ0YsSUFBSSxJQUFJLENBQUNOLENBQUMsS0FBS3RCLFNBQVMsQ0FBQ0csTUFBTSxFQUFDO01BQzlCLElBQUksQ0FBQ29CLFNBQVMsR0FBRyxDQUFDLEVBQUU7SUFDdEI7SUFBQztFQUNMO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL3NjcmlwdHMvbW9tby5qcz9mOTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8gdGhpcyBzaG91bGQgaW5jbHVkZSBhbGwgdGhlIGxvZ2ljIHJlbGF0ZWQgdG8gdGhlIG1haW4gY2hhcmFjdGVyIG1vbW9cbi8vLy8gaG93IHRvIGRyYXcgYW5kIGFuaW1hdGUgbW9tbyBhbmQgc291cmNlIGZpbGVzXG4vLy8vIG1vbW8gbW92ZXMgYW5kIHBvc2l0aW9uXG5pbXBvcnQgT2JqZWN0IGZyb20gJy4vb2JqZWN0JztcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBHUkFWSVRZOiAyLFxuICBKVU1QX1NQRUVEOiAtOCxcbiAgR1JPVU5EOiA0MDAsXG4gIFRFUk1JTkFMX1ZFTDogIDEyLFxuICBMRUZUV0FMTDogMCxcbiAgUklHSFRXQUxMOiA1NTAsXG59O1xuXG5jb25zdCBtb21vID0gbmV3IEltYWdlKCk7XG5tb21vLnNyYyA9IFwiLi9zcmMvYXNzZXRzL2NhdHMvbW9tb193YWxrX3JpZ2h0LnBuZ1wiXG5cbmNvbnN0IHNwcml0ZVdpZHRoID0gMTIwO1xuY29uc3Qgc3ByaXRlSGVpZ2h0ID0gMTIwO1xubGV0IGZyYW1lWCA9IDE7XG5sZXQgZnJhbWVZID0gMDtcbi8vc2V0IGEgbWF4RnJhbWUgdmFyaWFibGUgcGVyIHJvd1xubGV0IGdhbWVGcmFtZSA9IDA7XG4vLyBsZXQgc3RhZ2dlckZyYW1lcyA9IDE1O1xuLy9iaWdnZXIgc3RhZ2dlckZyYW1lIGlzIHNsb3dlciBsb29raW5nIG1vdmVcbi8vMTUgc2hvdWxkIGJlIHNsb3cgd2FsayAoNSwgMTAsIDE1KSAzIHNwZWVkc1xuLy9tYXggc3BlZWQgc3RhZ2dlckZyYW1lcyA9IDVcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9tbyB7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY3R4LCBib3VuY2UpIHtcbiAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy54ID0gY2FudmFzV2lkdGggLyA2O1xuICAgIHRoaXMueSA9IENPTlNUQU5UUy5HUk9VTkQ7XG4gICAgdGhpcy55VmVsb2NpdHkgPSAwO1xuICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLmNhbGNYUG9zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjWVBvcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuanVtcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgXG5cbiAgZHJhd01vbW8oKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLDYwMCwgNjAwKTtcbiAgICB0aGlzLmNhbGNZUG9zKCk7XG4gICAgaWYodGhpcy54VmVsb2NpdHkgPiAwKSAge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKG1vbW8sIGZyYW1lWCAqIHNwcml0ZVdpZHRoLCAwLCBzcHJpdGVXaWR0aCwgc3ByaXRlSGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCk7XG4gICAgICAvLyBpZiAoZ2FtZUZyYW1lICUgc3RhZ2dlckZyYW1lcyA9PSAwKXsgICAgICAgLy9vbGQgdmVyc2lvblxuICAgICAgaWYgKGdhbWVGcmFtZSAlICh0aGlzLnhWZWxvY2l0eSAvIC41KSA9PSAwKXtcbiAgICAgICAgLy8gcmVwbGFjZSBzdGFnZ2VyRnJhbWVzIHdpdGggeFZlbG9jaXR5LzMpXG4gICAgICAgIGlmIChmcmFtZVggPCAzKSBmcmFtZVggKys7XG4gICAgICAgIGVsc2UgZnJhbWVYID0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZ2FtZUZyYW1lKytcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKG1vbW8sIDAgKiBzcHJpdGVXaWR0aCwgMCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCwgdGhpcy54LCB0aGlzLnksIHNwcml0ZVdpZHRoLCBzcHJpdGVIZWlnaHQpO1xuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhd01vbW8uYmluZCh0aGlzKSk7XG4gIH1cblxuLy8vLy8vLy8gdGhpcyBpcyBvbGQgYW5pbWF0ZSBjb2RlLiBicmVha2luZyB1cCB0byBkcmF3IGFuZCBjYWxjWVBvcyBhbmQgY2FsY1hQb3NcbiAgLy8gYW5pbWF0ZSgpe1xuICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsNjAwLCA2MDApO1xuICAvLyAgIHRoaXMubW92ZSgpO1xuICAvLyAgIHRoaXMuY3R4LmRyYXdJbWFnZShtb21vLCBmcmFtZVggKiBzcHJpdGVXaWR0aCwgMCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCwgNTAsIDQ1MCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCk7XG4gIC8vICAgICBpZiAoZ2FtZUZyYW1lICUgc3RhZ2dlckZyYW1lcyA9PSAwKXtcbiAgLy8gICAgICAgaWYgKGZyYW1lWCA8IDMpIGZyYW1lWCArKztcbiAgLy8gICAgICAgZWxzZSBmcmFtZVggPSAxO1xuICAvLyAgICAgfVxuICAgIFxuICAvLyAgIGdhbWVGcmFtZSsrO1xuICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gIC8vIH1cblxuICAvLyB1cGRhdGUgWSBwb3NpdGlvbiAoaGVpZ2h0IC8gdmVydGljYWwgcG9zKVxuICBjYWxjWVBvcyh5VmVsb2NpdHkpe1xuICAgICAgaWYgKHRoaXMueSA8PSBDT05TVEFOVFMuR1JPVU5EKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eVxuICAgICAgICBpZiAodGhpcy55ID4gNDAwKVxuICAgICAgICAgIHRoaXMueSA9IDQwMDtcbiAgICAgIH07XG4gICAgICBpZih0aGlzLnlWZWxvY2l0eSA8IENPTlNUQU5UUy5URVJNSU5BTF9WRUwgKXtcbiAgICAgICAgICB0aGlzLnlWZWxvY2l0eSArPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgIH0gXG4gIH1cbiAgXG4gIC8vIHVwZGF0ZXMgWCBwb3NpdGlvbiAoaG9yaXpvbnRhbCBhY3Jvc3MgYm9hcmQpXG4gIGNhbGNYUG9zKHhWZWxvY2l0eSl7XG4gICAgICBpZiAodGhpcy54ID49IENPTlNUQU5UUy5MRUZUV0FMTCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsb2NpdHlcbiAgICAgICAgaWYgKHRoaXMueCA8IDApXG4gICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy54VmVsb2NpdHkgPCBDT05TVEFOVFMuVEVSTUlOQUxfVkVMICl7XG4gICAgICAgICAgdGhpcy54VmVsb2NpdHkgKz0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICB9IFxuICAgICAgaWYgKHRoaXMueCA8PSBDT05TVEFOVFMuUklHSFRXQUxMKXtcbiAgICAgICAgdGhpcy54IC09IHRoaXMueFZlbG9jaXR5XG4gICAgICAgIGlmICh0aGlzLnggPiA1NTApXG4gICAgICAgICAgdGhpcy54ID0gNTUwO1xuICAgICAgfTtcbiAgfVxuXG5cbiAganVtcCgpe1xuICAgICAgaWYgKHRoaXMueSA9PT0gQ09OU1RBTlRTLkdST1VORCl7XG4gICAgICAgIHRoaXMueVZlbG9jaXR5ID0gLTMwO1xuICAgICAgfTtcbiAgfVxufSJdLCJuYW1lcyI6WyJPYmplY3QiLCJDT05TVEFOVFMiLCJHUkFWSVRZIiwiSlVNUF9TUEVFRCIsIkdST1VORCIsIlRFUk1JTkFMX1ZFTCIsIkxFRlRXQUxMIiwiUklHSFRXQUxMIiwibW9tbyIsIkltYWdlIiwic3JjIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJnYW1lRnJhbWUiLCJNb21vIiwiY29uc3RydWN0b3IiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImN0eCIsImJvdW5jZSIsIngiLCJ5IiwieVZlbG9jaXR5IiwieFZlbG9jaXR5IiwiY2FsY1hQb3MiLCJiaW5kIiwiY2FsY1lQb3MiLCJqdW1wIiwiZHJhd01vbW8iLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/momo.js\n");

/***/ }),

/***/ "./src/scripts/object.js":
/*!*******************************!*\
  !*** ./src/scripts/object.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Object; }\n/* harmony export */ });\n//// logic for parent class objects\n//// all objects have shared properties:\n//// x & y coordinates, dimensions, if they are moving or not, do they have bounce\n//// collision here? or game?\n//// static objects: platforms, ground\n//// moving objects: momo, ash, (daphne?), fly\n\nclass Object {\n  //// generic constructor for all objects (x & y coordinates, dimensions, moving or not, bounce y/n\n  constructor(canvasWidth, canvasHeight, ctx, x, y, width, height, bounce) {\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ctx = ctx;\n    this.x = canvasWidth / 6;\n    this.y = CONSTANTS.GROUND;\n    this.width = 0;\n    this.height = 0;\n    //// leave below blank for static objects\n    this.yVelocity = 0;\n    this.xVelocity = 3;\n    this.calcXPos.bind(this);\n    this.calcYPos.bind(this);\n    this.bounce = false;\n  }\n\n  //// collide\n\n  //// draw\n\n  //// animate\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYmplY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNQSxNQUFNLENBQUM7RUFFMUI7RUFDQUMsV0FBVyxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsR0FBRyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUN2RSxJQUFJLENBQUNQLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsQ0FBQyxHQUFHSCxXQUFXLEdBQUcsQ0FBQztJQUN4QixJQUFJLENBQUNJLENBQUMsR0FBR0ksU0FBUyxDQUFDQyxNQUFNO0lBQ3pCLElBQUksQ0FBQ0osS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2Y7SUFDQSxJQUFJLENBQUNJLFNBQVMsR0FBRyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDTixNQUFNLEdBQUcsS0FBSztFQUN2Qjs7RUFHRTs7RUFHQTs7RUFHQTtBQUlGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9zY3JpcHRzL29iamVjdC5qcz9mOWZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8gbG9naWMgZm9yIHBhcmVudCBjbGFzcyBvYmplY3RzXG4vLy8vIGFsbCBvYmplY3RzIGhhdmUgc2hhcmVkIHByb3BlcnRpZXM6XG4vLy8vIHggJiB5IGNvb3JkaW5hdGVzLCBkaW1lbnNpb25zLCBpZiB0aGV5IGFyZSBtb3Zpbmcgb3Igbm90LCBkbyB0aGV5IGhhdmUgYm91bmNlXG4vLy8vIGNvbGxpc2lvbiBoZXJlPyBvciBnYW1lP1xuLy8vLyBzdGF0aWMgb2JqZWN0czogcGxhdGZvcm1zLCBncm91bmRcbi8vLy8gbW92aW5nIG9iamVjdHM6IG1vbW8sIGFzaCwgKGRhcGhuZT8pLCBmbHlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0IHtcblxuICAvLy8vIGdlbmVyaWMgY29uc3RydWN0b3IgZm9yIGFsbCBvYmplY3RzICh4ICYgeSBjb29yZGluYXRlcywgZGltZW5zaW9ucywgbW92aW5nIG9yIG5vdCwgYm91bmNlIHkvblxuICBjb25zdHJ1Y3RvcihjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGJvdW5jZSkge1xuICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnggPSBjYW52YXNXaWR0aCAvIDY7XG4gICAgdGhpcy55ID0gQ09OU1RBTlRTLkdST1VORDtcbiAgICB0aGlzLndpZHRoID0gMDsgXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIC8vLy8gbGVhdmUgYmVsb3cgYmxhbmsgZm9yIHN0YXRpYyBvYmplY3RzXG4gICAgdGhpcy55VmVsb2NpdHkgPSAwO1xuICAgIHRoaXMueFZlbG9jaXR5ID0gMztcbiAgICB0aGlzLmNhbGNYUG9zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjWVBvcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmNlID0gZmFsc2U7XG59XG5cblxuICAvLy8vIGNvbGxpZGVcblxuICBcbiAgLy8vLyBkcmF3XG5cblxuICAvLy8vIGFuaW1hdGVcblxuXG5cbn0iXSwibmFtZXMiOlsiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImN0eCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJib3VuY2UiLCJDT05TVEFOVFMiLCJHUk9VTkQiLCJ5VmVsb2NpdHkiLCJ4VmVsb2NpdHkiLCJjYWxjWFBvcyIsImJpbmQiLCJjYWxjWVBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/object.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;