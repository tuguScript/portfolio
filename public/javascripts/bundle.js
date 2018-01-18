/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

console.log(_data.featuredArticles);

_data.featuredArticles.map(function (post, i) {
  console.log(i);

  var item = '<article class="card"> \n    <figure> <img src="' + post.img + '" alt="" srcset=""></figure>\n    <div class="card-description">\n    <a href="/post/' + post.id + '">\n    <h2>' + post.title + '</h2>\n    </a><h3>' + post.category + '</h3></div></article>';

  document.getElementById('article-section').innerHTML += item;
});

var menuToggler = document.getElementById('menuToggler');
var menuTogglerLabel = document.getElementById('menuTogglerLabel');
var sidebar = document.getElementById('sidebar');
var menuItems = document.getElementsByClassName('menu__link');

menuToggler.addEventListener('change', function () {
  if (menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var menuItem = _step.value;

      if (menuToggler.checked) {
        menuItem.setAttribute('tabindex', '0');
      } else {
        menuItem.setAttribute('tabindex', '-1');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var featuredArticles = exports.featuredArticles = [{
    "id": 1,
    "title": "Todoro.ga",
    "category": "Progressive Web App",
    "img": 'http://lorempixel.com/400/400'
}, {
    "id": 2,
    "title": "Benefits of Cold Shower",
    "category": "Progressive Web App",
    "img": 'http://lorempixel.com/400/400'
}, {
    "id": 3,
    "title": "MeChef.ga",
    "category": "Progressive Web App",
    "img": 'http://lorempixel.com/400/400'
}, {
    "id": 4,
    "title": "Cryptocurrency Tracker",
    "category": "Web App",
    "img": 'http://lorempixel.com/400/400'
}, {
    "id": 5,
    "title": "Lady Bugs garden",
    "category": "Web & Mobile App",
    "img": 'http://lorempixel.com/400/400'
}, {
    "id": 6,
    "title": "Fireball",
    "category": "Web & Mobile App",
    "img": 'http://lorempixel.com/400/400'
}];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWU1ZDM2NTRiZGU1ZGJjZDA3YzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaSIsIml0ZW0iLCJpbWciLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibWVudVRvZ2dsZXIiLCJtZW51VG9nZ2xlckxhYmVsIiwic2lkZWJhciIsIm1lbnVJdGVtcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsIm1lbnVJdGVtIiwiZmVhdHVyZWRBcnRpY2xlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOztBQUVBQSxRQUFRQyxHQUFSOztBQUVBLHVCQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDOUJKLFVBQVFDLEdBQVIsQ0FBWUcsQ0FBWjs7QUFFQSxNQUFNQyw0REFDZUYsS0FBS0csR0FEcEIsNkZBR1dILEtBQUtJLEVBSGhCLG9CQUlBSixLQUFLSyxLQUpMLDJCQUtJTCxLQUFLTSxRQUxULDBCQUFOOztBQU9BQyxXQUFTQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0MsU0FBM0MsSUFBd0RQLElBQXhEO0FBQ0gsQ0FYRDs7QUFhQSxJQUFJUSxjQUFjSCxTQUFTQyxjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0EsSUFBSUcsbUJBQW1CSixTQUFTQyxjQUFULENBQXdCLGtCQUF4QixDQUF2QjtBQUNBLElBQUlJLFVBQVVMLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQUlLLFlBQVlOLFNBQVNPLHNCQUFULENBQWdDLFlBQWhDLENBQWhCOztBQUVBSixZQUFZSyxnQkFBWixDQUE2QixRQUE3QixFQUF1QyxZQUFXO0FBQ2hELE1BQUdMLFlBQVlNLE9BQWYsRUFBd0I7QUFDdEJMLHFCQUFpQk0sWUFBakIsQ0FBOEIsY0FBOUIsRUFBOEMsTUFBOUM7QUFDQUwsWUFBUUssWUFBUixDQUFxQixhQUFyQixFQUFvQyxPQUFwQztBQUNELEdBSEQsTUFHTztBQUNMTixxQkFBaUJNLFlBQWpCLENBQThCLGNBQTlCLEVBQThDLE9BQTlDO0FBQ0FMLFlBQVFLLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsTUFBcEM7QUFDRDs7QUFQK0M7QUFBQTtBQUFBOztBQUFBO0FBU2hELHlCQUFvQkosU0FBcEIsOEhBQStCO0FBQUEsVUFBdkJLLFFBQXVCOztBQUM3QixVQUFHUixZQUFZTSxPQUFmLEVBQXdCO0FBQ3RCRSxpQkFBU0QsWUFBVCxDQUFzQixVQUF0QixFQUFrQyxHQUFsQztBQUNELE9BRkQsTUFFTztBQUNMQyxpQkFBU0QsWUFBVCxDQUFzQixVQUF0QixFQUFrQyxJQUFsQztBQUNEO0FBQ0Y7QUFmK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCakQsQ0FoQkQsRTs7Ozs7Ozs7Ozs7O0FDdEJPLElBQU1FLDhDQUFtQixDQUM1QjtBQUNJLFVBQU0sQ0FEVjtBQUVJLGFBQVMsV0FGYjtBQUdJLGdCQUFZLHFCQUhoQjtBQUlJLFdBQU87QUFKWCxDQUQ0QixFQU81QjtBQUNJLFVBQU0sQ0FEVjtBQUVJLGFBQVMseUJBRmI7QUFHSSxnQkFBWSxxQkFIaEI7QUFJSSxXQUFPO0FBSlgsQ0FQNEIsRUFhNUI7QUFDSSxVQUFNLENBRFY7QUFFSSxhQUFTLFdBRmI7QUFHSSxnQkFBWSxxQkFIaEI7QUFJSSxXQUFPO0FBSlgsQ0FiNEIsRUFtQjVCO0FBQ0ksVUFBTSxDQURWO0FBRUksYUFBUyx3QkFGYjtBQUdJLGdCQUFZLFNBSGhCO0FBSUksV0FBTztBQUpYLENBbkI0QixFQXlCNUI7QUFDSSxVQUFNLENBRFY7QUFFSSxhQUFTLGtCQUZiO0FBR0ksZ0JBQVksa0JBSGhCO0FBSUksV0FBTztBQUpYLENBekI0QixFQStCNUI7QUFDSSxVQUFNLENBRFY7QUFFSSxhQUFTLFVBRmI7QUFHSSxnQkFBWSxrQkFIaEI7QUFJSSxXQUFPO0FBSlgsQ0EvQjRCLENBQXpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWU1ZDM2NTRiZGU1ZGJjZDA3YzMiLCJpbXBvcnQgeyBmZWF0dXJlZEFydGljbGVzIH0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuXG5jb25zb2xlLmxvZyhmZWF0dXJlZEFydGljbGVzKTtcblxuZmVhdHVyZWRBcnRpY2xlcy5tYXAoKHBvc3QsIGkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBcbiAgICBjb25zdCBpdGVtID0gYDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiPiBcbiAgICA8ZmlndXJlPiA8aW1nIHNyYz1cIiR7cG9zdC5pbWd9XCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+PC9maWd1cmU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj5cbiAgICA8YSBocmVmPVwiL3Bvc3QvJHtwb3N0LmlkfVwiPlxuICAgIDxoMj4ke3Bvc3QudGl0bGV9PC9oMj5cbiAgICA8L2E+PGgzPiR7cG9zdC5jYXRlZ29yeX08L2gzPjwvZGl2PjwvYXJ0aWNsZT5gXG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGljbGUtc2VjdGlvbicpLmlubmVySFRNTCArPSBpdGVtO1xufSlcblxubGV0IG1lbnVUb2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUb2dnbGVyJylcbmxldCBtZW51VG9nZ2xlckxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUb2dnbGVyTGFiZWwnKTtcbmxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51X19saW5rJyk7XG5cbm1lbnVUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICBpZihtZW51VG9nZ2xlci5jaGVja2VkKSB7XG4gICAgbWVudVRvZ2dsZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7ICAgIFxuICB9IGVsc2Uge1xuICAgIG1lbnVUb2dnbGVyTGFiZWwuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9XG4gIFxuICBmb3IobGV0IG1lbnVJdGVtIG9mIG1lbnVJdGVtcykge1xuICAgIGlmKG1lbnVUb2dnbGVyLmNoZWNrZWQpIHtcbiAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfVxuICB9ICBcbn0pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBmZWF0dXJlZEFydGljbGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcInRpdGxlXCI6IFwiVG9kb3JvLmdhXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJQcm9ncmVzc2l2ZSBXZWIgQXBwXCIsXG4gICAgICAgIFwiaW1nXCI6ICdodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICBcInRpdGxlXCI6IFwiQmVuZWZpdHMgb2YgQ29sZCBTaG93ZXJcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlByb2dyZXNzaXZlIFdlYiBBcHBcIixcbiAgICAgICAgXCJpbWdcIjogJ2h0dHA6Ly9sb3JlbXBpeGVsLmNvbS80MDAvNDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwidGl0bGVcIjogXCJNZUNoZWYuZ2FcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlByb2dyZXNzaXZlIFdlYiBBcHBcIixcbiAgICAgICAgXCJpbWdcIjogJ2h0dHA6Ly9sb3JlbXBpeGVsLmNvbS80MDAvNDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgIFwidGl0bGVcIjogXCJDcnlwdG9jdXJyZW5jeSBUcmFja2VyXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJXZWIgQXBwXCIsXG4gICAgICAgIFwiaW1nXCI6ICdodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiA1LFxuICAgICAgICBcInRpdGxlXCI6IFwiTGFkeSBCdWdzIGdhcmRlblwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiV2ViICYgTW9iaWxlIEFwcFwiLFxuICAgICAgICBcImltZ1wiOiAnaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC80MDAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpcmViYWxsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJXZWIgJiBNb2JpbGUgQXBwXCIsXG4gICAgICAgIFwiaW1nXCI6ICdodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMCdcbiAgICB9XG5dXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=