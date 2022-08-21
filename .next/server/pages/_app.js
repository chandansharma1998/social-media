(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\components\\Layout\\HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "The Social")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), user ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    style: {
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Ref, {
    innerRef: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
    floated: "left",
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
    width: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Visibility, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, children)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
    floated: "left",
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_Search__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  })))))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
    style: {
      paddingTop: "1rem"
    },
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, children)));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\components\\Layout\\Navbar.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), "Login")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "Signup"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\components\\Layout\\Search.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






let cancel;

const SearchComponent = () => {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    if (value.length === 0) return;
    if (value.trim().length === 0) return;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);
        return setLoading(false);
      }

      setResults(res.data);
    } catch (error) {
      alert("Error Searching");
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (text.length === 0 && loading) {
      setLoading(false);
    }
  }, [text]);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${data.result.username}`);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  });
};

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "Profile Pic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\components\\Layout\\SideMenu.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const SideMenu = ({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
    style: {
      paddingTop: "1rem"
    },
    size: "big",
    verticalAlign: "middle",
    selection: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    active: isActive('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "home",
    size: "large",
    color: isActive('/') && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
    content: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    active: isActive('/messages'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: unreadMessage && 'orange' || isActive('/messages') && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
    content: "Messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    active: isActive('/notifications'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large",
    color: unreadNotification && 'orange' || isActive('/notifications') && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
    content: "Notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/${username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    active: router.query.username === username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
    content: "Profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.logoutUser)(email),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "log out",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
    content: "Logout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);
SideMenu;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "C:\\Users\\chandan\\Desktop\\social-media\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 //retrieves cookies from backend




function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  })));
}

MyApp.getInitialProps = async appContext => {
  //We need to add this method to use getInitialProps bcoz we hv made custom _app.js which overrides default App.js properties. 
  const {
    Component,
    ctx
  } = appContext; //Component and ctx are properties of appContent. Component->active page 
  //console.log(appContext)

  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
  let pageProps = {};
  const protectedRoutes = ctx.pathname === "/";

  if (!token) {
    protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      //if any Component requests getInitialProps
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowStats
      } = res.data;
      if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, "/"); //if user is already logged in and trying to click login/signup

      pageProps.user = user;
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(ctx, "token");
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, "/login");
    }
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  //setLoading(true);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_semantic-ui-css_semantic_min_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcY2hhbmRhblxcRGVza3RvcFxcc29jaWFsLW1lZGlhXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwiUm91dGVyIiwiblByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwidHJpbSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsInVzZUVmZmVjdCIsIlJlc3VsdFJlbmRlcmVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSIsIlNpZGVNZW51IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiZW1haWwiLCJ1bnJlYWRNZXNzYWdlIiwicXVlcnkiLCJsb2dvdXRVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY3R4IiwicGFyc2VDb29raWVzIiwicHJvdGVjdGVkUm91dGVzIiwicmVkaXJlY3RVc2VyIiwidXNlckZvbGxvd1N0YXRzIiwiZGVzdHJveUNvb2tpZSIsInJlZ2lzdGVyVXNlciIsInNldEVycm9yIiwic2V0VG9rZW4iLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlc3BvbnNlIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxjQUF0QjtBQUFxQyxPQUFLLEVBQUMsT0FBM0M7QUFBbUQsTUFBSSxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FB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QUssQ0FBQ3FDLFFBQVYsRUFBb0I7QUFDbEI7QUFFQVIsWUFBUSxHQUFHN0IsS0FBSyxDQUFDcUMsUUFBTixDQUFldEMsSUFBMUI7QUFFQXVDLFdBQU8sQ0FBQ3RDLEtBQVIsQ0FBYzZCLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSTdCLEtBQUssQ0FBQ3VDLE9BQVYsRUFBbUI7QUFDeEI7QUFDQVYsWUFBUSxHQUFHN0IsS0FBSyxDQUFDdUMsT0FBakI7QUFFQUQsV0FBTyxDQUFDdEMsS0FBUixDQUFjNkIsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBRzdCLEtBQUssQ0FBQ3dDLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ3RDLEtBQVIsQ0FBYzZCLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFlQyxXQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgSGVhZFRhZ3MgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgc2l6ZXM9XCIxNioxNlwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbGlzdE1lc3NhZ2VzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMuY3NzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbnByb2dyZXNzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8dGl0bGU+VGhlIFNvY2lhbDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSBcIi4vU2lkZU1lbnVcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiXHJcbmltcG9ydCB7IFxyXG4gIENvbnRhaW5lcixcclxuICBWaXNpYmlsaXR5LFxyXG4gIEdyaWQsXHJcbiAgU3RpY2t5LFxyXG4gIFJlZixcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnRcclxuIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbix1c2VyfSkge1xyXG5cclxuICBjb25zdCBjb250ZXh0UmVmID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKT0+IG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKT0+IG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpPT4gblByb2dyZXNzLmRvbmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuICAgICAge3VzZXI/KFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxcmVtXCIsbWFyZ2luUmlnaHQ6XCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgPFJlZiBpbm5lclJlZj17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51IHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PiBcclxuICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHkgY29udGV4dD17Y29udGV4dFJlZn0+e2NoaWxkcmVufTwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1JlZj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPik6KDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fSB0ZXh0PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQge01lbnUsQ29udGFpbmVyLEljb259IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGU9PnJvdXRlci5wYXRobmFtZT09PXJvdXRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgZmx1aWQgYm9yZGVybGVzcz5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKFwiL2xvZ2luXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ24taW5cIi8+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKFwiL3NpZ251cFwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWdudXBcIi8+XHJcbiAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgPC9NZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0xpc3QsSW1hZ2UsU2VhcmNofSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiXHJcblxyXG5sZXQgY2FuY2VsO1xyXG5cclxuY29uc3QgU2VhcmNoQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLHNldFJlc3VsdHNdPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZT0+e1xyXG4gICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYodmFsdWUubGVuZ3RoPT09MClyZXR1cm4gXHJcblxyXG4gICAgaWYodmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMClyZXR1cm47XHJcblxyXG4gICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCYmY2FuY2VsKClcclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIilcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCx7XHJcbiAgICAgICAgaGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46bmV3IENhbmNlbFRva2VuKGNhbmNlbGVyPT57XHJcbiAgICAgICAgICBjYW5jZWw9Y2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmKHJlcy5kYXRhLmxlbmd0aD09PTApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoPjAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgU2VhcmNoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYodGV4dC5sZW5ndGg9PT0wICYmIGxvYWRpbmcpe1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LFt0ZXh0XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hcclxuICAgICAgb25CbHVyPXsoKT0+e1xyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoPjAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsZGF0YSk9PntSb3V0ZXIucHVzaChgLyR7ZGF0YS5yZXN1bHQudXNlcm5hbWV9YCl9fVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7X2lkLCBwcm9maWxlUGljVXJsLCBuYW1lfSk9PntcclxuICBcclxuICByZXR1cm4oXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZSBQaWNcIiBhdmF0YXIvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIi8+IFxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbXBvbmVudFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge0ljb24sTGlzdH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCJcclxuXHJcbmNvbnN0IFNpZGVNZW51ID0gKHt1c2VyOnt1bnJlYWROb3RpZmljYXRpb24sZW1haWwsdW5yZWFkTWVzc2FnZSx1c2VybmFtZX19KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaXNBY3RpdmUgPSByb3V0ZT0+cm91dGVyLnBhdGhuYW1lPT09cm91dGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOlwiMXJlbVwifX1cclxuICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzZWxlY3Rpb24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoJy8nKX0+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17aXNBY3RpdmUoJy8nKSYmXCJ0ZWFsXCJ9Lz5cclxuICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoJy9tZXNzYWdlcycpfT5cclxuICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgIG5hbWU9e3VucmVhZE1lc3NhZ2U/XCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJtYWlsIG91dGxpbmVcIn0gXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBcclxuICAgICAgICAgICAgICAgIGNvbG9yPXsodW5yZWFkTWVzc2FnZSYmJ29yYW5nZScpfHwoaXNBY3RpdmUoJy9tZXNzYWdlcycpJiZcInRlYWxcIikgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTWVzc2FnZXNcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpfT5cclxuICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgIG5hbWU9e3VucmVhZE5vdGlmaWNhdGlvbj9cImhhbmQgcG9pbnQgcmlnaHRcIjpcImJlbGwgb3V0bGluZVwifSBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiIFxyXG4gICAgICAgICAgICAgICAgY29sb3I9eyh1bnJlYWROb3RpZmljYXRpb24mJidvcmFuZ2UnKXx8KGlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpJiZcInRlYWxcIikgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTm90aWZpY2F0aW9uc1wiLz5cclxuICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e3JvdXRlci5xdWVyeS51c2VybmFtZT09PXVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlclwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtyb3V0ZXIucXVlcnkudXNlcm5hbWU9PT11c2VybmFtZSYmXCJ0ZWFsXCJ9Lz5cclxuICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJQcm9maWxlXCIvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKT0+bG9nb3V0VXNlcihlbWFpbCl9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudVxyXG5TaWRlTWVudSIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiXHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7cGFyc2VDb29raWVzLGRlc3Ryb3lDb29raWV9IGZyb20gXCJub29raWVzXCI7IC8vcmV0cmlldmVzIGNvb2tpZXMgZnJvbSBiYWNrZW5kXHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCJcclxuaW1wb3J0IHtyZWRpcmVjdFVzZXJ9IGZyb20gXCIuLi91dGlscy9hdXRoVXNlclwiXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc30pe1xyXG4gIHJldHVybihcclxuICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhhcHBDb250ZXh0KT0+eyAvL1dlIG5lZWQgdG8gYWRkIHRoaXMgbWV0aG9kIHRvIHVzZSBnZXRJbml0aWFsUHJvcHMgYmNveiB3ZSBodiBtYWRlIGN1c3RvbSBfYXBwLmpzIHdoaWNoIG92ZXJyaWRlcyBkZWZhdWx0IEFwcC5qcyBwcm9wZXJ0aWVzLiBcclxuICBjb25zdCB7Q29tcG9uZW50LGN0eH0gPSBhcHBDb250ZXh0Oy8vQ29tcG9uZW50IGFuZCBjdHggYXJlIHByb3BlcnRpZXMgb2YgYXBwQ29udGVudC4gQ29tcG9uZW50LT5hY3RpdmUgcGFnZSBcclxuICAgIC8vY29uc29sZS5sb2coYXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCB7dG9rZW59ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgbGV0IHBhZ2VQcm9wcz17fTtcclxuXHJcbiAgICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBjdHgucGF0aG5hbWU9PT1cIi9cIjtcclxuXHJcbiAgICBpZighdG9rZW4pe1xyXG4gICAgICBwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCxcIi9sb2dpblwiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7Ly9pZiBhbnkgQ29tcG9uZW50IHJlcXVlc3RzIGdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgIHBhZ2VQcm9wcz1hd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn19KVxyXG5cclxuICAgICAgICBjb25zdCB7dXNlcix1c2VyRm9sbG93U3RhdHN9PXJlcy5kYXRhXHJcblxyXG4gICAgICAgIGlmKHVzZXIpICFwcm90ZWN0ZWRSb3V0ZXMmJnJlZGlyZWN0VXNlcihjdHgsXCIvXCIpLy9pZiB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluIGFuZCB0cnlpbmcgdG8gY2xpY2sgbG9naW4vc2lnbnVwXHJcblxyXG4gICAgICAgIHBhZ2VQcm9wcy51c2VyPXVzZXI7XHJcbiAgICAgICAgcGFnZVByb3BzLnVzZXJGb2xsb3dTdGF0cz11c2VyRm9sbG93U3RhdHM7XHJcblxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkZXN0cm95Q29va2llKGN0eCxcInRva2VuXCIpXHJcbiAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCxcIi9sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHJldHVybiB7cGFnZVByb3BzfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIE15QXBwOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCJcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jKHVzZXIscHJvZmlsZVBpY1VybCxzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gIC8vc2V0TG9hZGluZyh0cnVlKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCx7dXNlcixwcm9maWxlUGljVXJsfSlcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmModXNlcixzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHt1c2VyfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LGxvY2F0aW9uKT0+e1xyXG4gIGlmKGN0eC5yZXEpe1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLHtMb2NhdGlvbjpsb2NhdGlvbn0pO1xyXG4gICAgY3R4LnJlcy5lbmQoKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuPT57XHJcbiAgY29va2llLnNldChcInRva2VuXCIsdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXI9ZW1haWw9PntcclxuICBjb29raWUuc2V0KFwidXNlckVtYWlsXCIsIGVtYWlsKTtcclxuICBjb29raWUucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgUm91dGVyLnJlbG9hZCgpO1xyXG59IiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yKSA9PiB7XHJcbiAgbGV0IGVycm9yTXNnID0gJyc7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==