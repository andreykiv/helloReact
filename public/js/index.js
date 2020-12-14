"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BooksApp = /*#__PURE__*/function (_React$Component) {
  _inherits(BooksApp, _React$Component);

  var _super = _createSuper(BooksApp);

  function BooksApp(props) {
    var _this;

    _classCallCheck(this, BooksApp);

    _this = _super.call(this, props);
    _this.chooseBook = _this.chooseBook.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.deleteAllBooks = _this.deleteAllBooks.bind(_assertThisInitialized(_this));
    _this.state = {
      books: [{
        title: 'Dune',
        author: 'Frank Herbert'
      }, {
        title: 'Stormlight Archive',
        author: 'Brandon Sanderson'
      }, {
        title: 'The Gambler',
        author: 'Fyodor Dostoyevsky'
      }, {
        title: 'Atlas Shrugged',
        author: 'Ayn Rand'
      }]
    };
    return _this;
  }

  _createClass(BooksApp, [{
    key: "chooseBook",
    value: function chooseBook(e) {
      e.preventDefault();
      var randomBook = Math.floor(Math.random() * this.state.books.length);
      alert("Book title: ".concat(this.state.books[randomBook].title, " Written by: ").concat(this.state.books[randomBook].author, " "));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var title = e.target.elements.title.value;
      var author = e.target.elements.author.value;
      this.setState({
        books: [].concat(_toConsumableArray(this.state.books), [{
          title: title,
          author: author
        }])
      });
      e.target.reset();
    }
  }, {
    key: "deleteAllBooks",
    value: function deleteAllBooks(e) {
      e.preventDefault();
      this.setState({
        books: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Biblioteca digital";
      var subTitle = 'Te asesoro sobre entidades alfanuméricas.';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(RecommendBook, {
        books: this.state.books,
        chooseBook: this.chooseBook
      }), /*#__PURE__*/React.createElement(Books, {
        books: this.state.books
      }), /*#__PURE__*/React.createElement(AddBook, {
        onSubmit: this.onSubmit
      }), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(DeleteAllBooks, {
        deleteAllBooks: this.deleteAllBooks
      }));
    }
  }]);

  return BooksApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subTitle));
    }
  }]);

  return Header;
}(React.Component);

var RecommendBook = /*#__PURE__*/function (_React$Component3) {
  _inherits(RecommendBook, _React$Component3);

  var _super3 = _createSuper(RecommendBook);

  function RecommendBook() {
    _classCallCheck(this, RecommendBook);

    return _super3.apply(this, arguments);
  }

  _createClass(RecommendBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        disabled: !this.props.books.length ? true : false,
        onClick: this.props.chooseBook
      }, "Recomendar Libro"));
    }
  }]);

  return RecommendBook;
}(React.Component);

var Books = /*#__PURE__*/function (_React$Component4) {
  _inherits(Books, _React$Component4);

  var _super4 = _createSuper(Books);

  function Books() {
    _classCallCheck(this, Books);

    return _super4.apply(this, arguments);
  }

  _createClass(Books, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, this.props.books.length ? "Hay ".concat(this.props.books.length, " libros") : "No hay libros disponibles", " "), /*#__PURE__*/React.createElement(Book, {
        books: this.props.books
      }));
    }
  }]);

  return Books;
}(React.Component);

var Book = /*#__PURE__*/function (_React$Component5) {
  _inherits(Book, _React$Component5);

  var _super5 = _createSuper(Book);

  function Book() {
    _classCallCheck(this, Book);

    return _super5.apply(this, arguments);
  }

  _createClass(Book, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.books.map(function (book, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index
        }, book.title, " / ", book.author);
      })));
    }
  }]);

  return Book;
}(React.Component);

var AddBook = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddBook, _React$Component6);

  var _super6 = _createSuper(AddBook);

  function AddBook() {
    _classCallCheck(this, AddBook);

    return _super6.apply(this, arguments);
  }

  _createClass(AddBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.props.onSubmit
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "title"
      }, "T\xEDtulo: "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "title",
        name: "title",
        required: true
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "author"
      }, "Autor: "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "author",
        name: "author",
        required: true
      }), /*#__PURE__*/React.createElement("button", null, "Submit")));
    }
  }]);

  return AddBook;
}(React.Component);

var DeleteAllBooks = /*#__PURE__*/function (_React$Component7) {
  _inherits(DeleteAllBooks, _React$Component7);

  var _super7 = _createSuper(DeleteAllBooks);

  function DeleteAllBooks() {
    _classCallCheck(this, DeleteAllBooks);

    return _super7.apply(this, arguments);
  }

  _createClass(DeleteAllBooks, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.deleteAllBooks
      }, "Eliminar libros"));
    }
  }]);

  return DeleteAllBooks;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(BooksApp, null), document.querySelector('#appRoot'));

//# sourceMappingURL=index.js.map