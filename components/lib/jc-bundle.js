'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var antdMobile = require('antd-mobile');
var react = require('react');
var lodash = require('lodash');
var antdMobileIcons = require('antd-mobile-icons');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.pop-wrap {\n  padding: 10px;\n  height: 100%;\n}\n.pop-wrap .adm-tabs .adm-tabs-content {\n  overflow: auto;\n  height: 100%;\n  padding: 0;\n}\n\n.adm-infinite-scroll {\n  margin-bottom: 20px;\n}\n\n.content-wrap {\n  overflow: auto;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n\n.cmt_item {\n  padding-top: 16px;\n  padding-top: 10px;\n  width: 100%;\n  display: flex;\n}\n.cmt_item .cmt_head {\n  margin: 0 10px 0 0;\n  height: 35px;\n}\n.cmt_item .cmt_head img {\n  display: block;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.cmt_item .cmt_wrap {\n  flex: 1;\n}\n.cmt_item .cmt_wrap .cmt_header {\n  display: flex;\n}\n.cmt_item .cmt_wrap .cmt_header .cmt_meta {\n  flex: 1;\n}\n.cmt_item .cmt_wrap .cmt_header .cmt_meta .cmt_time {\n  font-size: 9px;\n  color: #999;\n}\n.cmt_item .cmt_wrap .cmt_header .cmt_like {\n  width: 65px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 11px;\n  color: #999;\n  text-align: right;\n}\n.cmt_item .cmt_wrap .cmt_header .cmt_like .cmt_count {\n  line-height: 22px;\n  font-size: 11px;\n  color: #999;\n}\n.cmt_item .cmt_wrap .cmt_header .cmt_like .like-ico {\n  font-size: 16px;\n  margin-left: 5px;\n  vertical-align: sub !important;\n}\n.cmt_item .cmt_content {\n  position: relative;\n  color: #333;\n  font-size: 14px;\n  line-height: 22px;\n  margin-top: 5px;\n}\n.cmt_item .cmt_content .at {\n  font-style: normal;\n  color: #507daf;\n}\n.cmt_item .reply {\n  margin: 5px 0;\n  padding: 10px;\n  color: #888;\n  font-size: 14px;\n  line-height: 21px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.cmt_item .reply .reply-user {\n  font-size: 12px;\n  margin-right: 5px;\n}\n\n.relate-playlist {\n  margin-top: 10px;\n}\n.relate-playlist .list-wrap {\n  display: flex;\n  margin-top: 12px;\n  margin-left: -10px;\n}\n.relate-playlist .list-wrap .list-item {\n  flex: 1;\n  margin-left: 10px;\n  overflow: hidden;\n}\n.relate-playlist .list-wrap .cover {\n  position: relative;\n  padding-bottom: 100%;\n  overflow: hidden;\n  border-radius: 4px;\n  background: url(data:image/png;base64,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) no-repeat;\n  background-position: 50%;\n  background-size: 100% auto;\n}\n.relate-playlist .list-wrap .cover img {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.relate-playlist .list-wrap .cover .ply-cnt {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n  z-index: 3;\n  padding-left: 13px;\n  color: #fff;\n  font-size: 12px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);\n  background-position: 0;\n  background-repeat: no-repeat;\n  background-size: 11px 10px;\n}\n.relate-playlist .list-wrap .tit {\n  font-size: 13px;\n  color: #333;\n  font-weight: normal;\n  line-height: 1.5;\n  width: 100%;\n  margin: 2px 0 -1px;\n}\n.relate-playlist .list-wrap .author {\n  font-size: 12px;\n  color: #999;\n}\n.relate-playlist .list-wrap .author span {\n  display: inline-block;\n  max-width: 90%;\n}\n.relate-playlist .list-wrap .author .tag {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ODg4NUM5M0FCMzUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOTBGMzZCRkFCNjUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOTBGMzZCRUFCNjUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiM2VkY2U0LWIwZjMtNGZkYi1iYjgyLWVlNjhiM2QxNjZiMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjZWFlNTY2LWYzYjEtMTE3YS04MjM2LWZhNWYwNjkxNWZiMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppto6ZUAAAViSURBVHja7FoNaFVlGP7u9Xrz7m67F12/akoZVqwfmpMIC60ItEiNpmUgQSNnWaGJEFQOhUhkaMVk4hKaWpqGloYR2QYJZRZSqP1gGdmYkonbvPu5c7s9785z7HQ4597tnnPaDp0Xnn3f+X7O7nPe73vf9/sJZTIZNRSSbigZSLNqU3pJogvP5vV/I/Ln6PixjUim27RpAmZYlP8OjDc8/1h6qvkmF79JFFgMhIHXgS43XhpmGpI/8UShumbSuH4kLk+qSHTkpToLuVY+UjR2meTvcZmsyKPAFYAMhXluvVQnLNoNpVovNHV3aB+y9c/zmYvpnpuzaF5kfrqz+xekBz0Y9c8a8i+4TViX9anWVH8mUZIUzVZl6SvqrwAaoF23DcHtwF3Ad8Ah4A7gTi8I7+1KdZ6AZlWsuECeF8pIt+l7HzAG2OKBdp9h+gXhmpbNhPuAN0XL4XBYFRTHk3h+3KbvY/JjoN2TLpFMALcBc4AFLNsAvMH8I/zI43Rjm7eVNkk95vKrRaOLS+KJuOpoS8mwrje1GQXMBZY6ILgauAWYCEwAkqb6BuAH5t8GngI+43Mv3NpppKeAP8RDwE29ki/hTqAOpF8GaRUdFS1Ld6WnouxrQ5tZ7LvTAWGxvrMNz23Ab8BJDuMaQ10lid0NTAbGGiBSl++Q1mVD+7m2tAQlGNaK/tAoMsx3A+0OCMs7Vxme3zMM6RqbIEQf0hsN5aug3cVOCbcA2zvbO1SsqN94zQdGs64IeJBDzqmsBJ6n7VhkMXWspJ5tpc8SkF3pxGiZXNQFFQqFVGGyKIbnJ1kuw/Avw3xyKm/RSKU5TzdmaVvHNtJ2AcjWOrXSRjnS093TCDelChL9w7qKUZdY5238wm7JDo6aXuBpG9sywqDZWSC7ww23ZJY14qIiIyMqVlhwA4f2A8A7HvjeoyR1BrhoUS8fo5m/+Se3/LBZPkWoeRyaVnFNyzKkjhjchZtSzvSwoWwyoUx15V4RzuhzWRYJWFwkXDJWuQiLpT4g/pU4wLJDbDPVK8IiWxF8nO3r7VMgLsZiu0eE9Vi5lC7vXg7dn5nfzZjac8J6ICL5fbTQbosYwzLmKxiELAduZTS2nD6/gm2mINIKe0VYD0S6PDJWIpPo52UKbQZuZPCRJmo4lzezTbFpbg8ulsYCIFc7CURiHu74XA98CSwDvsryG8QHbwLWAdflYzxDQ7WnNVQSVv8zCQgHhAPCAeGAcEA4IDx0EmmdOc2qPMp49ntTeSNDPFm5fMg491+S2H/Qdxqey3VnqUXddKXtWL4PHFPa5rhvh7Rsr6xR2qndTODdLP2Oc4XzAfuM8CPh17j2fQI4naOfrFGr2H4F+/qKsGhVNrirB9hPdg5lO/UhzuMVfIcvCIuBWs216GDlc0O/9XzXsCcs2yayqX4mz3fU0YDJOc88PxCW3cCPHLxD9ov1I5I5fiBcTg3ZyRTgY5X94OwTQ9vhHXgAVwF2d4BmkEyuufkr06v9oGGxsmNs6mstyB6zicx845ZabKIqEfPtMfk4z1m0m8C0xQ+EJV5+2Kb+RQYhsgu/H5jGeNos9zP9xg+E9yjt7PdKi/otnJdyCC7XHA5btJGwspL5PX4gLPc0zivrawYDkUWcEs3K2Z2P/9RoLWMMXT3I/nLItY55udHT7ZdYWjSzVml3LrbSVeXqJ5rdRwu91g/a1f2wLi8p7fxoidLucWzinJST+XNKu5E3kQaq0mDZa9lX+Y1wL11Ok9Ku6y5V2S+enSDRXb7a4rEok0X9Xi4qZPejTP1zAUwM07fc4tlptcUz3CU4PQwIB4QDwgHhgHBAOCAcEPZK/hZgAEdTXXaZE0liAAAAAElFTkSuQmCC) no-repeat;\n  background-size: 30px auto;\n  background-position: -15px 0;\n  vertical-align: text-top;\n}\n\n.jc-title {\n  color: #333;\n  font-weight: 700;\n  font-size: 17px;\n  margin-top: 10px;\n}\n\n.elp {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: normal;\n}\n\n.simi-lists {\n  margin-top: 20px;\n  line-height: 1.6;\n}\n\n.simi-wrap {\n  margin-top: 8px;\n}\n.simi-wrap .simi-item {\n  display: flex;\n  align-items: center;\n}\n.simi-wrap .simi-item .item-main {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.simi-wrap .simi-item .item-main img {\n  width: 40px;\n  height: 40px;\n  border-radius: 3px;\n  margin-right: 10px;\n}\n.simi-wrap .simi-item .item-main .item-cnt {\n  flex: 1;\n  overflow: hidden;\n}\n.simi-wrap .simi-item .item-main .item-cnt h3 {\n  font-weight: normal;\n  font-size: 15px;\n  color: #333;\n}\n.simi-wrap .simi-item .item-main .item-cnt p {\n  color: #999;\n}\n.simi-wrap .simi-item .ply-ico {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  display: flex;\n}\n.simi-wrap .simi-item .ply-ico .inner-ico {\n  margin: auto;\n}";
styleInject(css_248z);

var baseUrl = 'http://zhoup.top:7003';
var urlsMap = {
  simiPlayLists: '/simi/playlist',
  simiSongLists: '/simi/song',
  comments: '/comment/music'
};

function getSimiPlayLists(id) {
  return fetch("".concat(baseUrl).concat(urlsMap.simiPlayLists, "?id=").concat(id)).then(function (res) {
    return res.json();
  }).then(function (res) {
    var _res$playlists = res.playlists,
        playlists = _res$playlists === void 0 ? [] : _res$playlists;
    return playlists;
  });
}

function getSimiSongLists(id) {
  return fetch("".concat(baseUrl).concat(urlsMap.simiSongLists, "?id=").concat(id)).then(function (res) {
    return res.json();
  }).then(function (res) {
    var _res$songs = res.songs,
        songs = _res$songs === void 0 ? [] : _res$songs;
    return songs;
  });
}

var requestFnMap = {
  getSimiPlayLists: getSimiPlayLists,
  getSimiSongLists: getSimiSongLists
};
var requestMaps = {};
function useApiHooks(id) {
  console.log('excute');

  for (var _len = arguments.length, requestFns = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    requestFns[_key - 1] = arguments[_key];
  }

  requestFns.forEach(function (fn) {
    if (!requestMaps[fn] || id != requestMaps[fn].id) {
      requestMaps[fn] = {
        loading: true,
        result: null,
        _promise: requestFnMap[fn](id),
        id: id
      };
    }
  });
  Object.values(requestMaps).forEach(function (fnObj) {
    fnObj._promise.then(function (res) {
      fnObj.result = res;
      fnObj.loading = false;
    });
  });

  var getterFn = function getterFn(fnName) {
    var fnObj = requestMaps[fnName];

    if (fnObj.loading) {
      throw fnObj._promise;
    } else {
      return fnObj.result;
    }
  };

  return getterFn;
}
function getCmts(_ref) {
  var id = _ref.id,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 20 : _ref$limit,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset;
  return fetch("".concat(baseUrl).concat(urlsMap.comments, "?id=").concat(id, "&limit=").concat(limit, "&offset=").concat(offset)).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}

var HeadImg = function HeadImg(_ref) {
  var pic = _ref.pic;
  return /*#__PURE__*/React.createElement("div", {
    className: "cmt_head"
  }, /*#__PURE__*/React.createElement("img", {
    src: pic,
    alt: ""
  }));
};

var CmtWrap = function CmtWrap(_ref2) {
  var header = _ref2.header,
      body = _ref2.body,
      reply = _ref2.reply;
  return /*#__PURE__*/React.createElement("div", {
    className: "cmt_wrap"
  }, header, body, reply);
};

var CmtContent = function CmtContent(_ref3) {
  var content = _ref3.content,
      beReplied = _ref3.beReplied;
  var reply;

  if (beReplied) {
    reply = /*#__PURE__*/React.createElement("span", null, "\u56DE\u590D", /*#__PURE__*/React.createElement("em", {
      className: "at"
    }, beReplied.user.nickname), "\uFF1A");
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cmt_content"
  }, reply, content));
};

var CmtReply = function CmtReply(_ref4) {
  var beReplied = _ref4.beReplied;

  if (!beReplied) {
    return null;
  }

  var user = beReplied.user,
      content = beReplied.content;
  return /*#__PURE__*/React.createElement("div", {
    className: "reply"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reply-user"
  }, "@", user.nickname), /*#__PURE__*/React.createElement("span", null, content));
};

var CmtHeader = function CmtHeader(_ref5) {
  var nickName = _ref5.nickName,
      time = _ref5.time,
      likeCount = _ref5.likeCount;
  return /*#__PURE__*/React.createElement("div", {
    className: "cmt_header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmt_meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmt_user"
  }, nickName), /*#__PURE__*/React.createElement("div", {
    className: "cmt_time"
  }, time)), /*#__PURE__*/React.createElement("div", {
    className: "cmt_like"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmt_count"
  }, likeCount), /*#__PURE__*/React.createElement(antdMobileIcons.HeartOutline, {
    className: "like-ico"
  })));
};

var CommentItem = function CommentItem(_ref6) {
  var _ref6$content = _ref6.content,
      content = _ref6$content === void 0 ? '' : _ref6$content,
      beReplied = _ref6.beReplied,
      _ref6$user = _ref6.user,
      user = _ref6$user === void 0 ? {
    avatarUrl: '',
    nickname: ''
  } : _ref6$user,
      _ref6$likedCount = _ref6.likedCount,
      likedCount = _ref6$likedCount === void 0 ? 0 : _ref6$likedCount,
      _ref6$timeStr = _ref6.timeStr,
      timeStr = _ref6$timeStr === void 0 ? '' : _ref6$timeStr;
  return /*#__PURE__*/React.createElement("div", {
    className: "cmt_item"
  }, /*#__PURE__*/React.createElement(HeadImg, {
    pic: "".concat(user.avatarUrl, "?imageView=1&type=webp&thumbnail=61x0")
  }), /*#__PURE__*/React.createElement(CmtWrap, {
    header: /*#__PURE__*/React.createElement(CmtHeader, {
      nickName: user.nickname,
      time: timeStr,
      likeCount: likedCount
    }),
    body: /*#__PURE__*/React.createElement(CmtContent, {
      content: content,
      beReplied: beReplied[0]
    }),
    reply: /*#__PURE__*/React.createElement(CmtReply, {
      beReplied: beReplied[0]
    })
  }));
};

var CommentLists = function CommentLists(_ref7) {
  var id = _ref7.id;

  var _useState = react.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      hasMore = _useState2[0],
      setHasMore = _useState2[1];

  var _useState3 = react.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      hotCmts = _useState4[0],
      setHotCmts = _useState4[1]; //热评


  var _useState5 = react.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      cmts = _useState6[0],
      setCmts = _useState6[1]; //评论


  function loadMore() {
    return _loadMore.apply(this, arguments);
  }

  function _loadMore() {
    _loadMore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$getCmts, _yield$getCmts$hotCom, hotComments, more, _yield$getCmts$commen, comments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getCmts({
                id: id,
                offset: cmts.length
              });

            case 2:
              _yield$getCmts = _context.sent;
              _yield$getCmts$hotCom = _yield$getCmts.hotComments;
              hotComments = _yield$getCmts$hotCom === void 0 ? [] : _yield$getCmts$hotCom;
              more = _yield$getCmts.more;
              _yield$getCmts$commen = _yield$getCmts.comments;
              comments = _yield$getCmts$commen === void 0 ? [] : _yield$getCmts$commen;
              hotComments && setHotCmts(function (list) {
                return [].concat(_toConsumableArray(list), _toConsumableArray(hotComments));
              });
              setCmts(function (list) {
                return [].concat(_toConsumableArray(list), _toConsumableArray(comments));
              });
              setHasMore(more);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadMore.apply(this, arguments);
  }

  function reset() {
    //重置数据
    setHotCmts([]);
    setCmts([]);
    setHasMore(true);
  }

  react.useEffect(function () {
    reset();
  }, [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: "cmt-wrap"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "jc-title"
  }, "\u7CBE\u5F69\u8BC4\u8BBA"), hotCmts.map(function (item, index) {
    return /*#__PURE__*/React.createElement(CommentItem, _extends({
      key: index
    }, item));
  }), /*#__PURE__*/React.createElement("h3", {
    className: "jc-title"
  }, "\u5168\u90E8\u8BC4\u8BBA"), cmts.map(function (item, index) {
    return /*#__PURE__*/React.createElement(CommentItem, _extends({
      key: index
    }, item));
  }), /*#__PURE__*/React.createElement(antdMobile.InfiniteScroll, {
    loadMore: loadMore,
    hasMore: hasMore
  }));
};

var CommentLists$1 = /*#__PURE__*/react.memo(CommentLists);

function transCount(count) {
  return (count / 10000).toFixed(1) + '万';
}

var ListsWrap = function ListsWrap(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "list-wrap"
  }, children);
};

ListsWrap.Item = function (_ref2) {
  var pic = _ref2.pic,
      count = _ref2.count,
      tit = _ref2.tit,
      author = _ref2.author;
  return /*#__PURE__*/React.createElement("div", {
    className: "list-item"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "cover"
  }, /*#__PURE__*/React.createElement("img", {
    src: pic,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "ply-cnt"
  }, count)), /*#__PURE__*/React.createElement("h3", {
    className: "tit elp"
  }, tit), /*#__PURE__*/React.createElement("p", {
    className: "author"
  }, /*#__PURE__*/React.createElement("span", {
    className: "elp"
  }, "by ", author), /*#__PURE__*/React.createElement("i", {
    className: "tag"
  })));
};

var RelateLists = function RelateLists(_ref3) {
  var requestCb = _ref3.requestCb;
  var cresolveLists = react.useContext(ResolveProvider);
  var simiLists = requestCb('getSimiPlayLists');
  react.useEffect(function () {// simiLists = requestCb('getSimiPlayLists')
  }, []);
  cresolveLists[0]();
  return /*#__PURE__*/React.createElement("div", {
    className: "relate-playlist"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "jc-title"
  }, "\u5305\u542B\u8FD9\u9996\u6B4C\u7684\u6B4C\u5355"), /*#__PURE__*/React.createElement(ListsWrap, null, simiLists.map(function (item) {
    return /*#__PURE__*/React.createElement(ListsWrap.Item, {
      key: item.id,
      pic: item.coverImgUrl,
      count: transCount(item.playCount),
      tit: item.name,
      author: item.creator.nickname
    });
  })));
};

var Loading$1 = function Loading() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(antdMobile.Skeleton.Title, {
    animated: true
  }), /*#__PURE__*/React.createElement(antdMobile.Skeleton.Paragraph, {
    lineCount: 5,
    animated: true
  }));
};

var RelateLists$1 = /*#__PURE__*/react.memo(function (_ref4) {
  var id = _ref4.id;
  var requestCb = useApiHooks(id, 'getSimiPlayLists');
  return /*#__PURE__*/React.createElement(react.Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loading$1, null)
  }, /*#__PURE__*/React.createElement(RelateLists, {
    requestCb: requestCb
  }));
});

var SimiLists = function SimiLists(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "simi-wrap"
  }, children);
};

SimiLists.Item = function (_ref2) {
  var pic = _ref2.pic,
      tit = _ref2.tit,
      info = _ref2.info;

  function renderCover(pic) {
    return /*#__PURE__*/React.createElement("img", {
      src: pic,
      alt: ""
    });
  }

  function renderContent(_ref3) {
    var tit = _ref3.tit,
        info = _ref3.info;
    return /*#__PURE__*/React.createElement("div", {
      className: "item-cnt"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "elp"
    }, tit), /*#__PURE__*/React.createElement("p", {
      className: "elp"
    }, info));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "simi-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-main"
  }, renderCover(pic), renderContent({
    tit: tit,
    info: info
  })), /*#__PURE__*/React.createElement("i", {
    className: "ply-ico"
  }, /*#__PURE__*/React.createElement(antdMobileIcons.PlayOutline, {
    className: "inner-ico"
  })));
};

var SimilarLists = function SimilarLists(_ref4) {
  var requestCb = _ref4.requestCb;
  var resolveLists = react.useContext(ResolveProvider);
  var simiLists = requestCb('getSimiSongLists');
  resolveLists[1]();
  return /*#__PURE__*/React.createElement("div", {
    className: "simi-lists"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "jc-title"
  }, "\u559C\u6B22\u8FD9\u9996\u6B4C\u7684\u4EBA\u4E5F\u542C"), /*#__PURE__*/React.createElement(SimiLists, null, simiLists.map(function (item) {
    return /*#__PURE__*/React.createElement(SimiLists.Item, {
      key: item.id,
      pic: item.album.picUrl,
      tit: item.name,
      info: "".concat(item.artists[0].name, " - ").concat(item.album.name)
    });
  })));
};

var Loading = function Loading() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(antdMobile.Skeleton.Title, {
    animated: true
  }), /*#__PURE__*/React.createElement(antdMobile.Skeleton.Paragraph, {
    lineCount: 5,
    animated: true
  }));
};

var SimilarLists$1 = /*#__PURE__*/react.memo(function (_ref5) {
  var id = _ref5.id;
  var requestCb = useApiHooks(id, 'getSimiSongLists');
  return /*#__PURE__*/React.createElement(react.Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loading, null)
  }, /*#__PURE__*/React.createElement(SimilarLists, {
    requestCb: requestCb
  }));
});

var tabLists = [//分类表头
{
  label: '相关歌单',
  key: 'relateLists'
}, {
  label: '相似歌曲',
  key: 'similarSongs'
}, {
  label: '精彩评论',
  key: 'comments'
}];

var TabArea = function TabArea(_ref) {
  var ownKey = _ref.ownKey,
      id = _ref.id;

  switch (ownKey) {
    case 'relateLists':
      return /*#__PURE__*/React.createElement(RelateLists$1, {
        id: id
      });

    case 'similarSongs':
      return /*#__PURE__*/React.createElement(SimilarLists$1, {
        id: id
      });

    case 'comments':
      return /*#__PURE__*/React.createElement(CommentLists$1, {
        id: id
      });

    default:
      return null;
  }
};

var CommentsTabs = function CommentsTabs(_ref2) {
  var _ref2$tops = _ref2.tops,
      tops = _ref2$tops === void 0 ? [] : _ref2$tops,
      id = _ref2.id;
  var scrollHandler = lodash.debounce(function () {
    var curTop = Math.ceil(scrollWrap.current.scrollTop);

    if (curTop < tops[0]) {
      setActiveKey('relateLists');
    } else if (curTop >= tops[0] && curTop < tops[1]) {
      setActiveKey('similarSongs');
    } else {
      setActiveKey('comments');
    }
  }, 50);
  react.useLayoutEffect(function () {
    scrollWrap.current.addEventListener('scroll', scrollHandler);
  }, [tops]); // tab页切换事件

  function tabChange(key) {
    setActiveKey(key);

    switch (key) {
      case 'relateLists':
        return scrollWrap.current.scrollTo(0, 0, {});

      case 'similarSongs':
        return scrollWrap.current.scrollTo(0, tops[0]);

      case 'comments':
        return scrollWrap.current.scrollTo(0, tops[1]);
    }
  } // 激活状态key


  var _useState = react.useState('relateLists'),
      _useState2 = _slicedToArray(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1]; //滚动容器ref


  var scrollWrap = react.useRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(antdMobile.Tabs, {
    onChange: tabChange,
    activeKey: activeKey
  }, tabLists.map(function (_ref3) {
    var label = _ref3.label,
        key = _ref3.key;
    return /*#__PURE__*/React.createElement(antdMobile.Tabs.Tab, {
      title: label,
      key: key
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "content-wrap",
    ref: scrollWrap
  }, tabLists.map(function (_ref4) {
    var key = _ref4.key;
    return /*#__PURE__*/React.createElement(TabArea, {
      ownKey: key,
      key: key,
      id: id
    });
  })));
};

var resolveLists = [];
var _ref = [createPromise(), createPromise()],
    promise1 = _ref[0],
    promise2 = _ref[1];

function createPromise() {
  return new Promise(function (resolve) {
    resolveLists.push(resolve);
  });
}

var ResolveProvider = /*#__PURE__*/react.createContext();

var Comment = function Comment(_ref2, ref) {
  var id = _ref2.id;

  // 展示/隐藏popup
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPop = _useState2[0],
      setPop = _useState2[1]; // 给外部提供show/hide方法


  react.useImperativeHandle(ref, function () {
    return {
      show: function show() {
        return setPop(true);
      },
      hide: function hide() {
        return setPop(false);
      }
    };
  });

  var _useState3 = react.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tops = _useState4[0],
      setTops = _useState4[1];

  react.useEffect(function () {
    Promise.all([promise1, promise2]).then(function () {
      console.log('loaded');
      var simiListsDom = document.querySelector('.simi-lists');
      var cmtWrapDom = document.querySelector('.cmt-wrap');
      var admTabsDom = document.querySelector('.adm-tabs');
      var top1 = simiListsDom.offsetTop - admTabsDom.clientHeight - 10,
          top2 = cmtWrapDom.offsetTop - admTabsDom.clientHeight - 10;
      setTops([top1, top2]);
    });
  }, []);
  return /*#__PURE__*/React.createElement(antdMobile.Popup, {
    visible: showPop,
    onMaskClick: function onMaskClick() {
      setPop(false);
    },
    bodyStyle: {
      height: '85vh',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-wrap"
  }, /*#__PURE__*/React.createElement(ResolveProvider.Provider, {
    value: resolveLists
  }, /*#__PURE__*/React.createElement(CommentsTabs, {
    tops: tops,
    id: id
  }))));
};

var Comment$1 = /*#__PURE__*/react.forwardRef(Comment);
/* 
  生成2个promise
  分别resolve之后获取dom属性
*/

exports.Comment = Comment$1;
