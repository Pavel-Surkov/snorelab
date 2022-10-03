"use strict";
self["webpackHotUpdatewebpack_boilerplate"]("index",{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/events */ "./src/helpers/events.js");
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
 //import ReactDOM from 'react-dom';





var PAGES = {
  Home: _pages__WEBPACK_IMPORTED_MODULE_4__.Home,
  HowWorks: _pages__WEBPACK_IMPORTED_MODULE_4__.HowWorks,
  SuccessStories: _pages__WEBPACK_IMPORTED_MODULE_4__.SuccessStories,
  Insights: _pages__WEBPACK_IMPORTED_MODULE_4__.Insights,
  Insight: _pages__WEBPACK_IMPORTED_MODULE_4__.Insight,
  StopBang: _pages__WEBPACK_IMPORTED_MODULE_4__.StopBang,
  Epworth: _pages__WEBPACK_IMPORTED_MODULE_4__.Epworth,
  Faq: _pages__WEBPACK_IMPORTED_MODULE_4__.Faq,
  Reviews: _pages__WEBPACK_IMPORTED_MODULE_4__.Reviews,
  Contact: _pages__WEBPACK_IMPORTED_MODULE_4__.Contact,
  About: _pages__WEBPACK_IMPORTED_MODULE_4__.About,
  Privacy: _pages__WEBPACK_IMPORTED_MODULE_4__.Privacy,
  Terms: _pages__WEBPACK_IMPORTED_MODULE_4__.Terms,
  Careers: _pages__WEBPACK_IMPORTED_MODULE_4__.Careers,
  Shop: _pages__WEBPACK_IMPORTED_MODULE_4__.Shop,
  Product: _pages__WEBPACK_IMPORTED_MODULE_4__.Product
};

var renderPageElement = function renderPageElement(el) {
  var Page = PAGES[el.id];

  if (!Page) {
    return;
  }

  var props = Object.assign({}, el.dataset);

  var App = function App() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "app-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Page, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  };

  ReactDOM.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, props), el);
};

/* harmony default export */ __webpack_exports__["default"] = (renderPageElement);

/***/ }),

/***/ "./src/components/AboutPage.jsx":
/*!**************************************!*\
  !*** ./src/components/AboutPage.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": function() { return /* binding */ AboutPage; }
/* harmony export */ });
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;
var AboutPage = function AboutPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "about-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-page__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l about-page__title"
  }, "About Snorelab"), /*#__PURE__*/React.createElement("div", {
    className: "about-page__note"
  }, /*#__PURE__*/React.createElement("p", null, "SnoreLab is the leading snoring analysis app for iPhone and Android, with millions of\xA0downloads and outstanding user reviews. It\xA0is\xA0one\xA0of\xA0the leading apps in\xA0the\xA0iPhone medical category in several countries.")), /*#__PURE__*/React.createElement("div", {
    className: "about-page__content"
  }, /*#__PURE__*/React.createElement("p", null, "SnoreLab uses sophisticated algorithms to\xA0detect, record and measure snoring, allowing users to\xA0understand the severity of\xA0their snoring problem and to\xA0find ways to\xA0improve it. SnoreLab plans to grow on\xA0its\xA0position as the leading smartphone app\xA0for snorers through developing partnerships with leading companies in\xA0the\xA0medical device industry."), /*#__PURE__*/React.createElement("p", null, "SnoreLab was created by Jules Goldberg in\xA02012 after his wife complained about his\xA0snoring. SnoreLab is owned and published by\xA0Reviva Softworks Ltd, an\xA0independent app developer dedicated to\xA0developing high quality smartphone apps in the medical category."), /*#__PURE__*/React.createElement("p", null, "The company is located in London, UK."), /*#__PURE__*/React.createElement("p", null, "SnoreLab is a registered trade-mark.")))));
};

/***/ }),

/***/ "./src/components/Accordion.jsx":
/*!**************************************!*\
  !*** ./src/components/Accordion.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": function() { return /* binding */ Accordion; }
/* harmony export */ });
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;
var Accordion = function Accordion(_ref) {
  var title = _ref.title,
      elements = _ref.elements;

  var handleAccordionClick = function handleAccordionClick(e) {
    var target = e.target;
    target.classList.toggle('accordion-btn_open');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "accordion"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "title title_fade-s accordion-title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "accordion-list"
  }, elements.map(function (element) {
    return /*#__PURE__*/React.createElement("li", {
      className: "accordion-list__item",
      key: element.faq_item_title
    }, /*#__PURE__*/React.createElement("button", {
      className: "accordion-btn",
      onClick: function onClick(evt) {
        return handleAccordionClick(evt);
      }
    }, element.faq_item_title), /*#__PURE__*/React.createElement("div", {
      className: "accordion-content__wrapper"
    }, element.faq_item_image && /*#__PURE__*/React.createElement("img", {
      src: element.faq_item_image.url,
      srcSet: element.faq_item_image_2x ? "".concat(element.faq_item_image.url, " 1x, ").concat(element.faq_item_image_2x.url, " 2x") : null,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: "accordion-content",
      dangerouslySetInnerHTML: {
        __html: element.faq_item_content
      }
    })));
  })));
};

/***/ }),

/***/ "./src/components/CareersForm.jsx":
/*!****************************************!*\
  !*** ./src/components/CareersForm.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareersForm": function() { return /* binding */ CareersForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_form_submit_modal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/form-submit-modal.svg */ "./src/images/form-submit-modal.svg");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_upload_file_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/upload-file.gif */ "./src/images/upload-file.gif");




var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    forwardRef = _wp$element.forwardRef,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState;



var CareersForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      formValues = _useState4[0],
      setFormValues = _useState4[1];

  var _useState5 = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    resume: '',
    message: ''
  }),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      formErrors = _useState6[0],
      setFormErrors = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      resumeFile = _useState8[0],
      setResumeFile = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      resumeFileName = _useState10[0],
      setResumeFileName = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      fileProgress = _useState12[0],
      setFileProgress = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      progressActive = _useState14[0],
      setProgressActive = _useState14[1];

  var uploadInputRef = useRef(null);
  var careersModalMessage = useRef(null);

  var handleInputChange = function handleInputChange(e) {
    var target = e.target; // Name attribute of the target input element must match formValues key
    // to update the state

    var formValuesKey = target.name;
    setFormValues(function (prev) {
      var newFormValues = Object.assign({}, prev);
      newFormValues["".concat(formValuesKey)] = target.value;
      return newFormValues;
    });
  };

  var handleFileUpload = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var target, uploadLabel, fileName, formData, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              target = e.target;
              uploadLabel = target.nextElementSibling;
              setResumeFile(target.files[0]);
              console.log(target.files[0]);
              fileName = target.value.split('\\').pop();
              formData = new FormData();
              uploadLabel.classList.remove('careers-form__upload_loaded');
              formData.append('sl-resume', resumeFile);
              setResumeFileName('');
              setFileProgress(0);
              setProgressActive(true);
              res = axios__WEBPACK_IMPORTED_MODULE_5___default().request({
                method: "post",
                url: "https://snorelab.ux-mind.pro/wp-content/themes/snorelab/upload-file.php",
                data: formData,
                onUploadProgress: function onUploadProgress(p) {
                  console.log(p.loaded / (p.total * 0.01));
                  setFileProgress(Math.round(p.loaded / (p.total * 0.01)));
                }
              }).then(function (data) {
                setTimeout(function () {
                  setProgressActive(false);
                  setResumeFileName(fileName);
                  uploadLabel.classList.add('careers-form__upload_loaded');
                }, 500);
              });

              if (res.status === 200) {
                console.log('file uploaded');
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFileUpload(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // For removing resume file


  var handleFileDelete = function handleFileDelete(e) {
    var uploadInput = uploadInputRef.current;
    var uploadLabel = uploadInput.nextElementSibling;
    uploadInput.value = null;
    uploadLabel.classList.remove('careers-form__upload_loaded');
    setResumeFile(null);
    setResumeFileName('');
    setFileProgress(0);
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      var blocker, errorSubmit, formData, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              blocker = ref.current;
              errorSubmit = false;
              Object.keys(formValues).map(function (key) {
                if (!formValues[key]) {
                  errorSubmit = true;
                  setFormErrors(function (prev) {
                    var newFormErrors = Object.assign({}, prev);
                    newFormErrors["".concat(key)] = 'This field can`t be empty. Please fill in the information.';
                    return newFormErrors;
                  });
                } else {
                  setFormErrors(function (prev) {
                    var newFormErrors = Object.assign({}, prev);
                    newFormErrors["".concat(key)] = '';
                    return newFormErrors;
                  });
                }
              });

              if (!/\S+@\S+\.\S+/.test(formValues['email'])) {
                setFormErrors(function (prev) {
                  var newFormErrors = Object.assign({}, prev);
                  newFormErrors['email'] = 'Not valid e-mail';
                  return newFormErrors;
                });
                errorSubmit = true;
              }

              if (formValues['email'] && formValues['email'].indexOf('@') === -1) {
                setFormErrors(function (prev) {
                  var newFormErrors = Object.assign({}, prev);
                  newFormErrors['email'] = 'An e-mail address must contain a single @.';
                  return newFormErrors;
                });
                errorSubmit = true;
              }

              if (errorSubmit) {
                _context2.next = 25;
                break;
              }

              _context2.prev = 7;

              /*const data = {
                'name': formValues.name,
                'surname': formValues.surname,
                'email': formValues.email,
                'subject': formValues.subject,
                'resume': formValues.resume,
                'message': formValues.message,
              }
              console.log(JSON.stringify(data));*/
              formData = new FormData();
              formData.append('sl-name', formValues.name);
              formData.append('sl-surname', formValues.surname);
              formData.append('sl-email', formValues.email);
              formData.append('sl-subject', formValues.subject);
              formData.append('sl-resume', resumeFile);
              formData.append('sl-message', formValues.message);
              _context2.next = 17;
              return fetch("https://snorelab.ux-mind.pro/wp-content/themes/snorelab/send-form.php", {
                method: "POST",
                body: formData
              });

            case 17:
              res = _context2.sent;
              console.log(res);

              if (res.status === 200) {
                setFormValues({
                  name: '',
                  surname: '',
                  email: '',
                  subject: '',
                  message: ''
                });
                handleFileDelete();
                blocker.classList.add('blocker_open');
                setIsModalOpen(true);
              } else {
                alert("Some error occured");
              }

              _context2.next = 25;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](7);
              console.log(_context2.t0);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 22]]);
    }));

    return function handleFormSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleModalClose = function handleModalClose(e) {
    var blocker = ref.current;
    blocker.classList.remove('blocker_open');
    setIsModalOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    className: "careers-form",
    method: "post",
    action: "send-form.php",
    "accept-charset": "utf-8",
    enctype: "multipart/form-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "First name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: "careers-form__input",
    type: "text",
    name: "name",
    onChange: function onChange(evt) {
      return handleInputChange(evt);
    },
    value: formValues.name
  })), formErrors.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.name) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Last name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: "careers-form__input",
    type: "text",
    name: "surname",
    onChange: function onChange(evt) {
      return handleInputChange(evt);
    },
    value: formValues.surname
  })), formErrors.surname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.surname) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Email*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__input-border",
    "data-error": "This field can`t be empty. Please fill in the information."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: "careers-form__input",
    type: "email",
    name: "email",
    onChange: function onChange(evt) {
      return handleInputChange(evt);
    },
    value: formValues.email
  })), formErrors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.email) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Subject*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: "careers-form__input",
    type: "text",
    name: "subject",
    onChange: function onChange(evt) {
      return handleInputChange(evt);
    },
    value: formValues.subject
  })), formErrors.subject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.subject) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Attach resume*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    // className="careers-form__input-border careers-form__input-error"
    className: "careers-form__input-border",
    "data-error": "Upload failed. Max size for files is 10 MB."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: "careers-form__input",
    id: "uploadResume",
    type: "file",
    name: "resume",
    onChange: function onChange(evt) {
      return handleFileUpload(evt);
    },
    ref: uploadInputRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", {
    className: "careers-form__upload",
    htmlFor: "uploadResume"
  }, resumeFileName, progressActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    "class": "careers-form__upload-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    alt: "",
    src: _images_upload_file_gif__WEBPACK_IMPORTED_MODULE_6__
  }), " Uploading ", fileProgress, " %") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__upload-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    className: "careers-form__upload-btn",
    style: {
      display: resumeFile ? 'inline-block' : 'none'
    },
    onClick: function onClick(evt) {
      return handleFileDelete(evt);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null))))), formErrors.resume ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.resume) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__field careers-form__field-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Message*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("textarea", {
    className: "careers-form__textarea",
    name: "message",
    onChange: function onChange(evt) {
      return handleInputChange(evt);
    },
    value: formValues.message
  })), formErrors.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "careers-form__error"
  }, formErrors.message) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__submit-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "submit",
    className: "careers-form__submit",
    onClick: function onClick(evt) {
      return handleFormSubmit(evt);
    }
  }, "Send message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__modal-wrapper ".concat(isModalOpen ? 'careers-form__modal_open' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__modal",
    ref: careersModalMessage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "careers-form__modal-close-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    className: "careers-form__modal-close",
    onClick: function onClick(evt) {
      return handleModalClose(evt);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    className: "careers-form__modal-img",
    src: _images_form_submit_modal_svg__WEBPACK_IMPORTED_MODULE_4__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", {
    className: "title title_size-s careers-form__modal-title"
  }, "Thank you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "We have received your message."))));
});

/***/ }),

/***/ "./src/components/CareersPage.jsx":
/*!****************************************!*\
  !*** ./src/components/CareersPage.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareersPage": function() { return /* binding */ CareersPage; }
/* harmony export */ });
/* harmony import */ var _CareersForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CareersForm */ "./src/components/CareersForm.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    forwardRef = _wp$element.forwardRef,
    useRef = _wp$element.useRef;

var currentJobsArr = ['iOS Developer', 'Android Developer'];
var CareersPage = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("section", {
    className: "careers-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "careers-page__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l careers-page__title"
  }, "Careers"), /*#__PURE__*/React.createElement("div", {
    className: "careers-page__subtitle"
  }, /*#__PURE__*/React.createElement("p", null, "We are seeking talented people to join our team.")), /*#__PURE__*/React.createElement("div", {
    className: "careers-page__info"
  }, /*#__PURE__*/React.createElement("p", null, "We are small team who are passionate about creating a best in class product to help the world\u2019s snorers (and their partners!) improve their sleep. We are located in London, UK."), /*#__PURE__*/React.createElement("span", {
    className: "careers-page__jobs-title"
  }, "At this time we are seeking:"), /*#__PURE__*/React.createElement("ul", {
    className: "careers-page__jobs-list"
  }, currentJobsArr.map(function (job) {
    return /*#__PURE__*/React.createElement("li", {
      className: "careers-page__jobs-item",
      key: job
    }, job);
  }))), /*#__PURE__*/React.createElement(_CareersForm__WEBPACK_IMPORTED_MODULE_0__.CareersForm, {
    ref: ref
  }))));
});

/***/ }),

/***/ "./src/components/ContactPage.jsx":
/*!****************************************!*\
  !*** ./src/components/ContactPage.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": function() { return /* binding */ ContactPage; }
/* harmony export */ });
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;
var ContactPage = function ContactPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "contact-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-page__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l contact-page__title"
  }, "Contact Us"), /*#__PURE__*/React.createElement("div", {
    className: "contact-page__content"
  }, /*#__PURE__*/React.createElement("p", null, "If you encounter any issues with SnoreLab or\xA0would like to contact us\xA0for\xA0press enquiries or\xA0business development opportunities, you\xA0can\xA0reach us via the Send feedback link in\xA0the app, or directly on\xA0", /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@snorelab.com",
    className: "link"
  }, "support@snorelab.com"))))));
};

/***/ }),

/***/ "./src/components/EpworthQuestionnaire.jsx":
/*!*************************************************!*\
  !*** ./src/components/EpworthQuestionnaire.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EpworthQuestionnaire": function() { return /* binding */ EpworthQuestionnaire; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _Questionnaire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questionnaire */ "./src/components/Questionnaire.jsx");

//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useState = _wp$element.useState;
 //const { createElement, render } = wp.element;

 // import { epworthQuestions } from '../helpers/variables';

var EpworthQuestionnaire = function EpworthQuestionnaire() {
  var epworth = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/pages?slug=epworth', {});

  var _useState = useState(-1),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      resultNumber = _useState2[0],
      setResultNumber = _useState2[1];

  if (!epworth.data) {
    return /*#__PURE__*/React.createElement("section", {
      className: "questionnaire"
    }, /*#__PURE__*/React.createElement("div", {
      className: "questionnaire-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "title title_size-m questionnaire-title"
    }, "Epworth Sleepiness Scale"), /*#__PURE__*/React.createElement("h2", {
      className: "title title_size-l"
    }, "Loading..."))));
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "questionnaire"
  }, /*#__PURE__*/React.createElement("div", {
    className: "questionnaire-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, resultNumber === -1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "title title_size-m questionnaire-title"
  }, "Epworth Sleepiness Scale"), /*#__PURE__*/React.createElement("div", {
    className: "questionnaire-text"
  }, /*#__PURE__*/React.createElement("p", null, "Feeling excessively sleepy during the day is a key symptom of sleep apnea. A useful way to measure your fatigue is by using the Epworth Sleepiness Scale."), /*#__PURE__*/React.createElement("p", null, "Consider the scenarios below and think about how likely you are to fall asleep."), /*#__PURE__*/React.createElement("p", null, "You can", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "#"
  }, "read more about identifying obstructive\xA0sleep apnea"), ' ', "in\xA0SnoreLab\u2019s Insights area."), /*#__PURE__*/React.createElement("p", null, "You can also assess your sleep apnea risk using the", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "#"
  }, "STOP-Bang Questionnaire"), "."))) : '', /*#__PURE__*/React.createElement(_Questionnaire__WEBPACK_IMPORTED_MODULE_2__.Questionnaire, {
    questionsType: epworth.data[0].slug,
    questions: epworth.data,
    btnTitle: "Calculate results",
    resultNumber: resultNumber,
    setResultNumber: setResultNumber
  }), /*#__PURE__*/React.createElement("div", {
    className: "questionnaire-change"
  }, /*#__PURE__*/React.createElement("a", {
    type: "button",
    className: "btn btn-arrow questionnaire-change__prev",
    href: "/stopbang/"
  }, /*#__PURE__*/React.createElement("div", null, "Prev")), /*#__PURE__*/React.createElement("a", {
    type: "button",
    className: "btn btn-arrow btn_gray-text questionnaire-change__next",
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/React.createElement("div", null, "Next"))))));
};

/***/ }),

/***/ "./src/components/FaqPage.jsx":
/*!************************************!*\
  !*** ./src/components/FaqPage.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": function() { return /* binding */ FaqPage; }
/* harmony export */ });
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/loader.gif */ "./src/images/loader.gif");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion */ "./src/components/Accordion.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

 //const { createElement, render } = wp.element;

 // import faqElementsArr from '@/helpers/faqContent';

var FaqPage = function FaqPage() {
  var faqElements = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/pages?slug=faqs', {});
  console.log(faqElements);

  if (!faqElements.data) {
    return /*#__PURE__*/React.createElement("section", {
      className: "faq-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-page__wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "title title_fade title_size-l faq-page__title"
    }, "FAQ"), /*#__PURE__*/React.createElement("span", {
      className: "faq-page__subtitle"
    }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("img", {
      className: "insight-loader",
      alt: "",
      src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_0__
    }), /*#__PURE__*/React.createElement("div", {
      className: "insight-loader-title"
    }, "Loading..."))));
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "faq-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-page__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l faq-page__title"
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    className: "faq-page__subtitle"
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("div", {
    className: "faq-page__block"
  }, faqElements.data[0].acf.faq_sections.map(function (element) {
    return /*#__PURE__*/React.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
      key: element.faq_section_title,
      title: element.faq_section_title,
      elements: element.faq_section_items
    });
  })))));
};

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _FooterNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterNavigation */ "./src/components/FooterNavigation.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;



var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__col-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "logo footer-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__,
    alt: "logo"
  })), /*#__PURE__*/React.createElement("p", null, "The Snoring Management App for iOS and Android"), /*#__PURE__*/React.createElement("div", {
    className: "d-none d-lg-flex footer__social-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link footer__social-link",
    "aria-label": "twitter link"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z",
    fill: "#1DA1F2"
  })))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link footer__social-link",
    "aria-label": "facebook link"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "13.125",
    fill: "url(#paint0_linear_96_358)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.8879 19.014L20.4709 15.3095H16.8236V12.9066C16.8236 11.8928 17.3322 10.9041 18.9658 10.9041H20.625V7.7503C20.625 7.7503 19.1199 7.5 17.6815 7.5C14.6764 7.5 12.7141 9.27463 12.7141 12.486V15.3095H9.375V19.014H12.7141V27.9698C13.3844 28.0725 14.0702 28.125 14.7688 28.125C15.4675 28.125 16.1533 28.0725 16.8236 27.9698V19.014H19.8879Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_96_358",
    x1: "15",
    y1: "1.875",
    x2: "15",
    y2: "28.0471",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#18ACFE"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0163E0"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/React.createElement(_FooterNavigation__WEBPACK_IMPORTED_MODULE_1__.FooterNavigation, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__col-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__info-apps"
  }, /*#__PURE__*/React.createElement("a", {
    href: "##",
    className: "link home-main__info-app google-play-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "32",
    viewBox: "0 0 28 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter0_ii_658_1975)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0.561464 0.49402C0.208579 0.877212 -5.18105e-07 1.47191 -5.18105e-07 2.24203V29.7572C-5.18105e-07 30.5286 0.208579 31.122 0.561464 31.5052L0.6512 31.5948L15.6749 16.1813V15.9996V15.818L0.6512 0.403198L0.561464 0.49402Z",
    fill: "url(#paint0_linear_658_1975)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.6819 21.3207L15.6748 16.1812V15.9996V15.818L20.6831 10.6797L20.7958 10.7456L26.7294 14.2043C28.4235 15.1922 28.4235 16.8083 26.7294 17.7974L20.7958 21.2561L20.6819 21.3207Z",
    fill: "url(#paint1_linear_658_1975)"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter1_i_658_1975)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.7958 21.2548L15.6736 15.9996L0.561372 31.5052C1.1192 32.1124 2.04203 32.187 3.08128 31.5824L20.7958 21.2548Z",
    fill: "url(#paint2_linear_658_1975)"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M20.7958 10.7444L3.08128 0.418122C2.04203 -0.18777 1.1192 -0.111878 0.561372 0.495258L15.6748 16.0009L20.7958 10.7444Z",
    fill: "url(#paint3_linear_658_1975)"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "filter0_ii_658_1975",
    x: "0",
    y: "0",
    width: "28",
    height: "32",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "-0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect1_innerShadow_658_1975"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "effect1_innerShadow_658_1975",
    result: "effect2_innerShadow_658_1975"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "filter1_i_658_1975",
    x: "0.561371",
    y: "15.9996",
    width: "20.2345",
    height: "16.0004",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "-0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect1_innerShadow_658_1975"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_658_1975",
    x1: "14.3431",
    y1: "1.9509",
    x2: "-6.52904",
    y2: "22.2951",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00A0FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.0066",
    stopColor: "#00A1FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.2601",
    stopColor: "#00BEFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5122",
    stopColor: "#00D2FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.7604",
    stopColor: "#00DFFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#00E3FF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint1_linear_658_1975",
    x1: "28.9346",
    y1: "15.9996",
    x2: "-0.40682",
    y2: "15.9996",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFE000"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.4087",
    stopColor: "#FFBD00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.7754",
    stopColor: "#FFA500"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FF9C00"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint2_linear_658_1975",
    x1: "18.0141",
    y1: "18.8535",
    x2: "-10.2912",
    y2: "46.4429",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FF3A44"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C31162"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint3_linear_658_1975",
    x1: "-3.24469",
    y1: "-8.66429",
    x2: "9.3944",
    y2: "3.65511",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#32A071"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.0685",
    stopColor: "#2DA771"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.4762",
    stopColor: "#15CF74"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.8009",
    stopColor: "#06E775"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#00F076"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: "107",
    height: "34",
    viewBox: "0 0 107 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.6562 4.21167C7.6562 5.25649 7.34319 6.08812 6.7159 6.70903C6.00405 7.44714 5.07511 7.8162 3.93412 7.8162C2.8411 7.8162 1.9109 7.44215 1.14729 6.69407C0.382432 5.94473 0 5.01711 0 3.90994C0 2.80152 0.382432 1.8739 1.14729 1.12581C1.9109 0.376478 2.8411 0.00243618 3.93412 0.00243618C4.47685 0.00243618 4.99559 0.107168 5.48783 0.315385C5.98133 0.524849 6.37638 0.802888 6.67172 1.15075L6.00657 1.80906C5.5055 1.21683 4.8151 0.921335 3.93286 0.921335C3.13518 0.921335 2.44604 1.19813 1.86419 1.75171C1.28234 2.30529 0.992049 3.0247 0.992049 3.90869C0.992049 4.79268 1.28234 5.51209 1.86419 6.06567C2.44604 6.61926 3.13518 6.89605 3.93286 6.89605C4.7785 6.89605 5.48404 6.61801 6.04822 6.06069C6.41425 5.69786 6.62629 5.19291 6.68308 4.54581H3.93286V3.64686H7.60193C7.63979 3.84261 7.6562 4.03088 7.6562 4.21167Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.4748 1.08723H10.0266V3.45866H13.1366V4.35762H10.0266V6.72905H13.4748V7.64919H9.05352V0.168332H13.4748V1.08723Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5779 7.64919H16.6048V1.08723H14.4895V0.168332H19.6933V1.08723H17.5779V7.64919Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.4582 7.64919V0.168332H24.4314V7.64919H23.4582Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.7469 7.64919H27.7737V1.08723H25.6584V0.168332H30.8622V1.08723H28.7469V7.64919Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40.713 6.6829C39.9683 7.43847 39.0432 7.81625 37.9363 7.81625C36.8294 7.81625 35.9042 7.43847 35.1608 6.6829C34.4161 5.92734 34.0451 5.0022 34.0451 3.90875C34.0451 2.8153 34.4161 1.89016 35.1608 1.1346C35.9042 0.37903 36.8294 0 37.9363 0C39.0369 0 39.9608 0.380277 40.708 1.13958C41.4552 1.89889 41.8288 2.82153 41.8288 3.90875C41.8288 5.0022 41.4564 5.92734 40.713 6.6829ZM35.879 6.05576C36.4394 6.61682 37.1247 6.89611 37.9363 6.89611C38.7478 6.89611 39.4345 6.61558 39.9936 6.05576C40.554 5.49469 40.8354 4.77902 40.8354 3.90875C40.8354 3.03848 40.554 2.32281 39.9936 1.76174C39.4345 1.20068 38.7478 0.921393 37.9363 0.921393C37.1247 0.921393 36.4394 1.20193 35.879 1.76174C35.3198 2.32281 35.0384 3.03848 35.0384 3.90875C35.0384 4.77902 35.3198 5.49469 35.879 6.05576Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43.1944 7.64919V0.168332H44.3783L48.0588 5.9872H48.1004L48.0588 4.54588V0.168332H49.0319V7.64919H48.0158L44.165 1.54731H44.1234L44.165 2.98862V7.64919H43.1944Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.1967 18.6318C31.2281 18.6318 28.8086 20.8624 28.8086 23.9345C28.8086 26.9879 31.2281 29.2372 34.1967 29.2372C37.1665 29.2372 39.5861 26.9879 39.5861 23.9345C39.5848 20.8624 37.1653 18.6318 34.1967 18.6318ZM34.1967 27.15C32.5698 27.15 31.1675 25.8247 31.1675 23.9358C31.1675 22.0269 32.571 20.7215 34.1967 20.7215C35.8236 20.7215 37.2258 22.0269 37.2258 23.9358C37.2258 25.8234 35.8236 27.15 34.1967 27.15ZM22.441 18.6318C19.4724 18.6318 17.0529 20.8624 17.0529 23.9345C17.0529 26.9879 19.4724 29.2372 22.441 29.2372C25.4109 29.2372 27.8304 26.9879 27.8304 23.9345C27.8304 20.8624 25.4109 18.6318 22.441 18.6318ZM22.441 27.15C20.8141 27.15 19.4119 25.8247 19.4119 23.9358C19.4119 22.0269 20.8154 20.7215 22.441 20.7215C24.0679 20.7215 25.4702 22.0269 25.4702 23.9358C25.4714 25.8234 24.0679 27.15 22.441 27.15ZM8.45893 22.5094H13.9089C13.7461 23.7749 13.3195 24.6988 12.6682 25.3409C11.8756 26.1239 10.6349 26.9879 8.45893 26.9879C5.10413 26.9879 2.48139 24.316 2.48139 21.002C2.48139 17.688 5.10413 15.0161 8.45893 15.0161C10.2689 15.0161 11.5903 15.7193 12.566 16.6232L14.1727 15.036C12.8096 13.7506 11.0009 12.7668 8.45893 12.7668C3.86344 12.7668 0 16.4624 0 21.002C0 25.5416 3.86344 29.2372 8.45893 29.2372C10.9391 29.2372 12.8108 28.433 14.2737 26.9268C15.7781 25.4406 16.2464 23.351 16.2464 21.6641C16.2464 21.1429 16.206 20.6604 16.124 20.2589H8.45893V22.5094ZM65.6444 22.0069C65.1976 20.8225 63.8345 18.6318 61.0489 18.6318C58.2836 18.6318 55.9852 20.7813 55.9852 23.9345C55.9852 26.9069 58.2634 29.2372 61.3127 29.2372C63.7726 29.2372 65.1963 27.751 65.787 26.887L63.9569 25.6813C63.3473 26.5653 62.513 27.1475 61.3127 27.1475C60.1137 27.1475 59.2592 26.6052 58.7102 25.5404L65.888 22.6079L65.6444 22.0069ZM58.3239 23.7749C58.2634 21.7252 59.9307 20.6816 61.131 20.6816C62.0662 20.6816 62.8588 21.1441 63.1239 21.8062L58.3239 23.7749ZM52.489 28.9168H54.8467V13.3304H52.489V28.9168ZM48.5435 19.8175C48.0147 19.1941 46.9974 18.6318 45.7176 18.6318C43.033 18.6318 40.5731 20.9621 40.5731 23.9557C40.5731 26.9281 43.033 29.2384 45.7176 29.2384C46.9987 29.2384 48.0147 28.6761 48.5435 28.034H48.6243V28.7971C48.6243 30.8256 47.5262 31.9104 45.758 31.9104C44.3141 31.9104 43.4192 30.8867 43.0532 30.0227L40.9997 30.8668C41.5891 32.2719 43.1542 34 45.758 34C48.5233 34 50.8621 32.3929 50.8621 28.4754V18.9547H48.6256V19.8175H48.5435ZM45.9208 27.15C44.2939 27.15 42.932 25.8035 42.932 23.9557C42.932 22.0867 44.2939 20.7215 45.9208 20.7215C47.5262 20.7215 48.7871 22.0867 48.7871 23.9557C48.7871 25.8035 47.5262 27.15 45.9208 27.15ZM76.6933 13.3304H71.0502V28.9168H73.4041V23.0119H76.692C79.3021 23.0119 81.8693 21.1454 81.8693 18.1717C81.8693 15.1981 79.3034 13.3304 76.6933 13.3304ZM76.7538 20.8424H73.4041V15.4998H76.7538C78.5145 15.4998 79.5142 16.9399 79.5142 18.1717C79.5142 19.3787 78.5145 20.8424 76.7538 20.8424ZM91.309 18.6044C89.6038 18.6044 87.8381 19.3462 87.1073 20.9908L89.1974 21.8523C89.6442 20.9908 90.4772 20.709 91.3493 20.709C92.5673 20.709 93.8055 21.4309 93.8257 22.7139V22.8747C93.3991 22.6341 92.4853 22.2738 91.3695 22.2738C89.1166 22.2738 86.822 23.4969 86.822 25.7823C86.822 27.8682 88.6698 29.211 90.7397 29.211C92.3225 29.211 93.1959 28.5091 93.7437 27.6862H93.8244V28.8893H96.0988V22.9134C96.1001 20.1479 94.0074 18.6044 91.309 18.6044ZM91.0237 27.1463C90.2538 27.1463 89.1772 26.7648 89.1772 25.8222C89.1772 24.619 90.5176 24.1577 91.675 24.1577C92.7087 24.1577 93.1971 24.3784 93.8257 24.6789C93.6427 26.1239 92.3843 27.1463 91.0237 27.1463ZM104.381 18.9448L101.681 25.7025H101.601L98.7986 18.9448H96.2616L100.463 28.3894L98.0678 33.6434H100.524L107 18.9448H104.381ZM83.1693 28.9168H85.5233V13.3304H83.1693V28.9168Z",
    fill: "white"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "##",
    className: "link home-main__info-app app-store-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "32",
    viewBox: "0 0 26 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.7159 17.0175C21.7476 14.5472 23.0725 12.2098 25.1742 10.916C23.8483 9.01984 21.6275 7.81763 19.317 7.74524C16.8526 7.48623 14.4635 9.22186 13.2077 9.22186C11.9276 9.22186 9.9941 7.77096 7.91204 7.81386C5.19816 7.90165 2.66815 9.44668 1.34779 11.8225C-1.49046 16.743 0.626619 23.9746 3.34542 27.952C4.7057 29.8996 6.29547 32.0752 8.37566 31.998C10.4112 31.9135 11.1715 30.6982 13.6286 30.6982C16.0629 30.6982 16.7762 31.998 18.8986 31.949C21.0829 31.9135 22.4591 29.9927 23.7716 28.0266C24.749 26.6389 25.5011 25.1051 26 23.4821C23.4331 22.395 21.7189 19.8083 21.7159 17.0175Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.707 5.12951C18.898 3.6979 19.4847 1.85781 19.3426 0C17.5231 0.191361 15.8424 1.06213 14.6353 2.43882C13.455 3.78391 12.8407 5.59163 12.9569 7.37843C14.777 7.39719 16.5664 6.55002 17.707 5.12951Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "106",
    height: "34",
    viewBox: "0 0 106 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0.402125V8.57489H3.05302C5.57278 8.57489 7.0319 7.074 7.0319 4.46302C7.0319 1.89169 5.56106 0.402125 3.05302 0.402125H0ZM1.31262 1.55753H2.90652C4.65864 1.55753 5.69584 2.63363 5.69584 4.48001C5.69584 6.3547 4.67622 7.41948 2.90652 7.41948H1.31262V1.55753Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5007 8.69382C13.3641 8.69382 14.5068 7.48745 14.5068 5.48815C14.5068 3.50018 13.3583 2.28815 11.5007 2.28815C9.63722 2.28815 8.48868 3.50018 8.48868 5.48815C8.48868 7.48745 9.63136 8.69382 11.5007 8.69382ZM11.5007 7.61205C10.4049 7.61205 9.78958 6.83612 9.78958 5.48815C9.78958 4.15151 10.4049 3.36992 11.5007 3.36992C12.5906 3.36992 13.2118 4.15151 13.2118 5.48815C13.2118 6.83046 12.5906 7.61205 11.5007 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.2378 2.40708H22.9779L21.8411 7.11364H21.7415L20.4288 2.40708H19.2217L17.9091 7.11364H17.8153L16.6726 2.40708H15.3952L17.1532 8.57489H18.4482L19.7608 4.03258H19.8604L21.1789 8.57489H22.4857L24.2378 2.40708Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.6887 8.57489H26.9486V4.96709C26.9486 4.00426 27.5404 3.4039 28.4722 3.4039C29.4039 3.4039 29.8493 3.89665 29.8493 4.8878V8.57489H31.1091V4.58196C31.1091 3.11505 30.3239 2.28815 28.8999 2.28815C27.9389 2.28815 27.306 2.7016 26.9955 3.38691H26.9017V2.40708H25.6887V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.0933 8.57489H34.3532V0H33.0933V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39.0915 8.69382C40.955 8.69382 42.0977 7.48745 42.0977 5.48815C42.0977 3.50018 40.9491 2.28815 39.0915 2.28815C37.2281 2.28815 36.0795 3.50018 36.0795 5.48815C36.0795 7.48745 37.2222 8.69382 39.0915 8.69382ZM39.0915 7.61205C37.9957 7.61205 37.3804 6.83612 37.3804 5.48815C37.3804 4.15151 37.9957 3.36992 39.0915 3.36992C40.1815 3.36992 40.8026 4.15151 40.8026 5.48815C40.8026 6.83046 40.1815 7.61205 39.0915 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.8515 7.6517C45.1659 7.6517 44.6678 7.32887 44.6678 6.77382C44.6678 6.2301 45.0663 5.94125 45.9453 5.88461L47.504 5.78833V6.30373C47.504 7.06833 46.8008 7.6517 45.8515 7.6517ZM45.5292 8.67683C46.3672 8.67683 47.0645 8.32568 47.4454 7.70833H47.545V8.57489H48.758V4.36107C48.758 3.05841 47.8556 2.28815 46.2558 2.28815C44.8084 2.28815 43.7771 2.96779 43.6482 4.02691H44.8671C45.0077 3.5908 45.4941 3.3416 46.1973 3.3416C47.0587 3.3416 47.504 3.70974 47.504 4.36107V4.89346L45.7753 4.98975C44.2576 5.08036 43.4021 5.72037 43.4021 6.83046C43.4021 7.95754 44.2986 8.67683 45.5292 8.67683Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53.0334 8.67683C53.9124 8.67683 54.6566 8.27471 55.0375 7.60072H55.1371V8.57489H56.3443V0H55.0844V3.38691H54.9906C54.6449 2.70726 53.9066 2.30514 53.0334 2.30514C51.422 2.30514 50.3847 3.53983 50.3847 5.48815C50.3847 7.44214 51.4102 8.67683 53.0334 8.67683ZM53.3909 3.39824C54.4457 3.39824 55.1078 4.20815 55.1078 5.49382C55.1078 6.78515 54.4515 7.58373 53.3909 7.58373C52.3244 7.58373 51.6856 6.79647 51.6856 5.48815C51.6856 4.19116 52.3302 3.39824 53.3909 3.39824Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64.5142 8.69382C66.3776 8.69382 67.5203 7.48745 67.5203 5.48815C67.5203 3.50018 66.3718 2.28815 64.5142 2.28815C62.6507 2.28815 61.5022 3.50018 61.5022 5.48815C61.5022 7.48745 62.6449 8.69382 64.5142 8.69382ZM64.5142 7.61205C63.4184 7.61205 62.8031 6.83612 62.8031 5.48815C62.8031 4.15151 63.4184 3.36992 64.5142 3.36992C65.6041 3.36992 66.2253 4.15151 66.2253 5.48815C66.2253 6.83046 65.6041 7.61205 64.5142 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.1881 8.57489H70.4479V4.96709C70.4479 4.00426 71.0398 3.4039 71.9715 3.4039C72.9033 3.4039 73.3486 3.89665 73.3486 4.8878V8.57489H74.6085V4.58196C74.6085 3.11505 73.8232 2.28815 72.3993 2.28815C71.4383 2.28815 70.8054 2.7016 70.4948 3.38691H70.4011V2.40708H69.1881V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80.411 0.872214V2.4354H79.3972V3.46054H80.411V6.94373C80.411 8.13311 80.9677 8.60887 82.3682 8.60887C82.6143 8.60887 82.8487 8.58055 83.0538 8.54657V7.53276C82.878 7.54975 82.7667 7.56108 82.5733 7.56108C81.9463 7.56108 81.6709 7.27789 81.6709 6.63223V3.46054H83.0538V2.4354H81.6709V0.872214H80.411Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.745 8.57489H86.0049V4.97275C86.0049 4.03824 86.5791 3.40956 87.6105 3.40956C88.5012 3.40956 88.9758 3.90797 88.9758 4.89346V8.57489H90.2357V4.59328C90.2357 3.12638 89.3977 2.29381 88.0382 2.29381C87.0772 2.29381 86.4033 2.70726 86.0928 3.39824H85.9931V0H84.745V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M94.7807 3.32461C95.7124 3.32461 96.3218 3.95328 96.3511 4.92178H93.1282C93.1985 3.95895 93.8489 3.32461 94.7807 3.32461ZM96.3453 6.90975C96.1109 7.39117 95.5893 7.65736 94.8275 7.65736C93.8196 7.65736 93.1692 6.97205 93.1282 5.89028V5.82231H97.6344V5.39753C97.6344 3.46054 96.5621 2.28815 94.7865 2.28815C92.9875 2.28815 91.8448 3.53983 91.8448 5.51081C91.8448 7.48179 92.9641 8.69382 94.7924 8.69382C96.2515 8.69382 97.2711 8.01418 97.5583 6.90975H96.3453Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M66.4629 14.4941V17.6205H64.4354V19.6708H66.4629V26.6372C66.4629 29.0159 67.5763 29.9674 70.3773 29.9674C70.8696 29.9674 71.3384 29.9108 71.7486 29.8428V27.8152C71.397 27.8492 71.1743 27.8718 70.7875 27.8718C69.5335 27.8718 68.9827 27.3055 68.9827 26.0141V19.6708H71.7486V17.6205H68.9827V14.4941H66.4629Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M78.8841 30.1373C82.611 30.1373 84.8963 27.7246 84.8963 23.726C84.8963 19.7501 82.5992 17.326 78.8841 17.326C75.1572 17.326 72.8601 19.7501 72.8601 23.726C72.8601 27.7246 75.1454 30.1373 78.8841 30.1373ZM78.8841 27.9738C76.6925 27.9738 75.4619 26.4219 75.4619 23.726C75.4619 21.0527 76.6925 19.4895 78.8841 19.4895C81.0639 19.4895 82.3063 21.0527 82.3063 23.726C82.3063 26.4106 81.0639 27.9738 78.8841 27.9738Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M86.8517 29.8995H89.3714V22.6159C89.3714 20.8828 90.7192 19.7161 92.6295 19.7161C93.0749 19.7161 93.825 19.7954 94.0359 19.8633V17.4619C93.7664 17.3939 93.2859 17.36 92.9108 17.36C91.2466 17.36 89.8285 18.2435 89.4652 19.4555H89.2777V17.5639H86.8517V29.8995Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100.292 19.3989C102.156 19.3989 103.375 20.6563 103.433 22.5932H96.9874C97.1281 20.6676 98.429 19.3989 100.292 19.3989ZM103.422 26.5692C102.953 27.532 101.91 28.0644 100.386 28.0644C98.3704 28.0644 97.0695 26.6938 96.9874 24.5302V24.3943H106V23.5448C106 19.6708 103.855 17.326 100.304 17.326C96.7062 17.326 94.4208 19.8293 94.4208 23.7713C94.4208 27.7133 96.6593 30.1373 100.316 30.1373C103.234 30.1373 105.273 28.778 105.848 26.5692H103.422Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.9387 25.3441C50.133 28.3732 52.7447 30.3104 56.6318 30.3104C60.7862 30.3104 63.3857 28.2793 63.3857 25.0389C63.3857 22.4912 61.9037 21.0823 58.3081 20.2722L56.3767 19.8143C54.093 19.2977 53.1698 18.605 53.1698 17.3957C53.1698 15.8695 54.6032 14.8715 56.7533 14.8715C58.794 14.8715 60.2031 15.846 60.4582 17.4075H63.1063C62.9484 14.5545 60.3489 12.5469 56.7897 12.5469C52.9633 12.5469 50.4124 14.5545 50.4124 17.5719C50.4124 20.0609 51.8579 21.5402 55.0284 22.2563L57.2878 22.7847C59.6079 23.313 60.6283 24.0879 60.6283 25.3793C60.6283 26.8821 59.0248 27.974 56.8383 27.974C54.4939 27.974 52.8662 26.9526 52.6354 25.3441H49.9387Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.8365 17.36C22.102 17.36 20.6018 18.1982 19.8283 19.6028H19.6408V17.5639H17.2148V34H19.7345V28.0304H19.9338C20.6018 29.3331 22.0434 30.1034 23.8599 30.1034C27.0829 30.1034 29.1339 27.6453 29.1339 23.726C29.1339 19.8067 27.0829 17.36 23.8365 17.36ZM23.1216 27.9172C21.012 27.9172 19.6877 26.3087 19.6877 23.7373C19.6877 21.1547 21.012 19.5462 23.1333 19.5462C25.2663 19.5462 26.5438 21.1207 26.5438 23.726C26.5438 26.3426 25.2663 27.9172 23.1216 27.9172Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.9509 17.36C36.2164 17.36 34.7162 18.1982 33.9427 19.6028H33.7552V17.5639H31.3292V34H33.849V28.0304H34.0482C34.7162 29.3331 36.1578 30.1034 37.9744 30.1034C41.1973 30.1034 43.2483 27.6453 43.2483 23.726C43.2483 19.8067 41.1973 17.36 37.9509 17.36ZM37.236 27.9172C35.1264 27.9172 33.8021 26.3087 33.8021 23.7373C33.8021 21.1547 35.1264 19.5462 37.2477 19.5462C39.3807 19.5462 40.6582 21.1207 40.6582 23.726C40.6582 26.3426 39.3807 27.9172 37.236 27.9172Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.6939 29.8995H15.5849L9.25622 12.9578H6.32872L0 29.8995H2.79387L4.40946 25.4028H11.0905L12.6939 29.8995ZM7.65278 16.0338H7.85928L10.3981 23.1956H5.10185L7.65278 16.0338Z",
    fill: "white"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "d-lg-none footer__social-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link footer__social-link",
    "aria-label": "twitter link"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z",
    fill: "#1DA1F2"
  })))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link footer__social-link",
    "aria-label": "facebook link"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "13.125",
    fill: "url(#paint0_linear_944_15001)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.8879 19.014L20.4709 15.3095H16.8236V12.9066C16.8236 11.8928 17.3322 10.9041 18.9658 10.9041H20.625V7.7503C20.625 7.7503 19.1199 7.5 17.6815 7.5C14.6764 7.5 12.7141 9.27463 12.7141 12.486V15.3095H9.375V19.014H12.7141V27.9698C13.3844 28.0725 14.0702 28.125 14.7688 28.125C15.4675 28.125 16.1533 28.0725 16.8236 27.9698V19.014H19.8879Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_944_15001",
    x1: "15",
    y1: "1.875",
    x2: "15",
    y2: "28.0471",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#18ACFE"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0163E0"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2022 SnoreLab. All rights reserved")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/FooterNavigation.jsx":
/*!*********************************************!*\
  !*** ./src/components/FooterNavigation.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterNavigation": function() { return /* binding */ FooterNavigation; }
/* harmony export */ });
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var FooterNavigation = function FooterNavigation() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navigation footer-navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-navigation__col"
  }, /*#__PURE__*/React.createElement("p", null, "Support"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-navigation__col-list"
  }, _helpers_variables__WEBPACK_IMPORTED_MODULE_0__.footerLinks.support.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      className: "footer-navigation__col-item",
      key: link.text
    }, /*#__PURE__*/React.createElement("a", {
      className: "link",
      href: link.link
    }, link.text));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer-navigation__col"
  }, /*#__PURE__*/React.createElement("p", null, "Company"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-navigation__col-list"
  }, _helpers_variables__WEBPACK_IMPORTED_MODULE_0__.footerLinks.company.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      className: "footer-navigation__col-item",
      key: link.text
    }, /*#__PURE__*/React.createElement("a", {
      className: "link",
      href: link.link
    }, link.text));
  }))));
};

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMenu */ "./src/components/MobileMenu.jsx");
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    createRef = _wp$element.createRef;




var Header = function Header() {
  var menuElementRef = createRef();

  var handleMenuClick = function handleMenuClick(e) {
    var menuBtn = e.target.closest('#m-menu__button');
    var menuEl = menuElementRef.current;

    if (!menuEl || !menuBtn) {
      return;
    }

    document.documentElement.classList.toggle('is-locked');
    menuBtn.classList.toggle('m-menu__button_close');
    menuEl.classList.toggle('m-menu_active');
  };

  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-lg-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__logo"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__,
    alt: "logo"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-lg-9"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "navigation header__navigation"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "d-none d-lg-flex header__navigation-list"
  }, _helpers_variables__WEBPACK_IMPORTED_MODULE_2__.navigationLinks.map(function (_ref) {
    var text = _ref.text,
        link = _ref.link;
    return /*#__PURE__*/React.createElement("li", {
      className: "header__navigation-item",
      key: text
    }, /*#__PURE__*/React.createElement("a", {
      href: link,
      className: "link"
    }, text));
  })), /*#__PURE__*/React.createElement("button", {
    id: "m-menu__button",
    className: "d-lg-none m-menu__button",
    onClick: function onClick(evt) {
      return handleMenuClick(evt);
    },
    "aria-label": "menu button"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))))), /*#__PURE__*/React.createElement(_MobileMenu__WEBPACK_IMPORTED_MODULE_1__.MobileMenu, {
    ref: menuElementRef
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/HomeDescription.jsx":
/*!********************************************!*\
  !*** ./src/components/HomeDescription.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDescription": function() { return /* binding */ HomeDescription; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_phone3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/phone3.png */ "./src/images/phone3.png");
/* harmony import */ var _images_phone3_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/phone3@2x.png */ "./src/images/phone3@2x.png");
/* harmony import */ var _images_star_3_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/star-3.svg */ "./src/images/star-3.svg");
/* harmony import */ var _images_star_4_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/star-4.svg */ "./src/images/star-4.svg");
/* harmony import */ var _images_star_5_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/star-5.svg */ "./src/images/star-5.svg");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;





 // import { descriptionCards } from '@/h elpers/variables';

var HomeDescription = function HomeDescription(_ref) {
  var cards = _ref.cards;

  if (!cards) {
    return null;
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "description-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "description__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade title_size-m"
  }, "The Snoring Management App for iOS and Android"), /*#__PURE__*/React.createElement("p", null, "SnoreLab has helped millions of people to understand their snoring problem and to discover solutions to improve their sleep.")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "description__phone"
  }, /*#__PURE__*/React.createElement("img", {
    className: "bg-light-5",
    alt: "",
    src: _images_star_3_svg__WEBPACK_IMPORTED_MODULE_3__
  }), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-6",
    alt: "",
    src: _images_star_4_svg__WEBPACK_IMPORTED_MODULE_4__
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_phone3_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_phone3_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_phone3_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "description__list"
  }, cards.map(function (card) {
    return /*#__PURE__*/React.createElement("li", {
      className: "description__item",
      key: card.description_card_icon.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "description__item-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "description__item-icon"
    }, /*#__PURE__*/React.createElement("img", {
      src: card.description_card_icon.url,
      alt: "description icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "description__item-text"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "title title_card description__item-title"
    }, card.description_card_title), /*#__PURE__*/React.createElement("p", null, card.description_card_text))));
  }))))), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-7",
    alt: "",
    src: _images_star_5_svg__WEBPACK_IMPORTED_MODULE_5__
  })));
};

/***/ }),

/***/ "./src/components/HomeInsights.jsx":
/*!*****************************************!*\
  !*** ./src/components/HomeInsights.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeInsights": function() { return /* binding */ HomeInsights; }
/* harmony export */ });
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _images_ellipse_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ellipse-1.png */ "./src/images/ellipse-1.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;



var HomeInsights = function HomeInsights() {
  var pageInsights = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/pages/18', {});
  var posts = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100', {});
  var tags = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});

  if (!pageInsights.data || !posts.data || !tags.data) {
    return /*#__PURE__*/React.createElement("section", {
      className: "home-insights"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-insights__wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "title title_fade title_size-m home-insights__title"
    }, "Snoring insights"), /*#__PURE__*/React.createElement("div", {
      className: "home-insights__container"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "title title_fade title_size-s"
    }, "Loading...")))));
  }

  var ids = pageInsights.data.acf.home_page_insights.map(function (insight) {
    return insight.home_page_insight.ID;
  });
  var filteredPosts = ids.map(function (id) {
    return posts.data.find(function (post) {
      return post.id === id;
    });
  });
  /*const filteredPosts = posts.data.filter((post) => {
    return ids.includes(post.id);
  })*/

  return /*#__PURE__*/React.createElement("section", {
    className: "home-insights"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-insights__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade title_size-m home-insights__title"
  }, "Snoring insights"), /*#__PURE__*/React.createElement("div", {
    className: "home-insights__container"
  }, filteredPosts.map(function (post, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "home-insights__item",
      key: post.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-insights__item-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-insights__item-flags"
    }, post.categories.map(function (tag, i, arr) {
      var tagData = tags.data.find(function (item) {
        return item.id === tag;
      });

      if (!tagData) {
        return null;
      }

      return /*#__PURE__*/React.createElement("span", {
        key: tagData.id
      }, /*#__PURE__*/React.createElement("a", {
        className: "link",
        href: '/insights/?category=' + tagData.slug,
        dangerouslySetInnerHTML: {
          __html: tagData.name
        }
      }), i === arr.length - 1 ? '' : ' , ');
    })), /*#__PURE__*/React.createElement("a", {
      className: "link home-insights__item-title",
      href: post.link
    }, /*#__PURE__*/React.createElement("h4", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    })), i === 0 && post.excerpt.rendered && /*#__PURE__*/React.createElement("div", {
      className: "home-insights__excerpt",
      dangerouslySetInnerHTML: {
        __html: post.excerpt.rendered
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "home-insights__img",
      style: {
        background: "url(".concat(post.fimg_url, ")"),
        backgroundSize: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "home-insights__item-fade"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "home-insights__read-more"
  }, /*#__PURE__*/React.createElement("a", {
    className: "link btn btn-arrow",
    href: "/insights"
  }, /*#__PURE__*/React.createElement("div", null, "Read more")))), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-3 changed",
    alt: "",
    src: _images_ellipse_1_png__WEBPACK_IMPORTED_MODULE_2__
  })));
};

/***/ }),

/***/ "./src/components/HomeMain.jsx":
/*!*************************************!*\
  !*** ./src/components/HomeMain.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMain": function() { return /* binding */ HomeMain; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_icons_sl_logo_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/sl-logo-icon.png */ "./src/images/icons/sl-logo-icon.png");
/* harmony import */ var _images_icons_sl_logo_icon_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/sl-logo-icon@2x.png */ "./src/images/icons/sl-logo-icon@2x.png");
/* harmony import */ var _images_phone1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/phone1.png */ "./src/images/phone1.png");
/* harmony import */ var _images_phone1_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/phone1@2x.png */ "./src/images/phone1@2x.png");
/* harmony import */ var _images_phone2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/phone2.png */ "./src/images/phone2.png");
/* harmony import */ var _images_phone2_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/phone2@2x.png */ "./src/images/phone2@2x.png");
/* harmony import */ var _images_star_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/star-2.svg */ "./src/images/star-2.svg");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;








var HomeMain = function HomeMain() {
  return /*#__PURE__*/React.createElement("section", {
    className: "home-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-main__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-main__info"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "home-main__info-icon",
    src: _images_icons_sl_logo_icon_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_icons_sl_logo_icon_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_icons_sl_logo_icon_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l home-main__title"
  }, "SnoreLab: Record\xA0Your Snoring"), /*#__PURE__*/React.createElement("p", null, "SnoreLab is the No.1 iOS and Android app for\xA0recording and\xA0tracking snoring and\xA0discovering solutions."), /*#__PURE__*/React.createElement("div", {
    className: "home-main__info-apps"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://play.google.com/store/apps/details?id=com.snorelab.app",
    className: "link home-main__info-app google-play-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "32",
    viewBox: "0 0 28 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter0_ii_658_1975)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0.561464 0.49402C0.208579 0.877212 -5.18105e-07 1.47191 -5.18105e-07 2.24203V29.7572C-5.18105e-07 30.5286 0.208579 31.122 0.561464 31.5052L0.6512 31.5948L15.6749 16.1813V15.9996V15.818L0.6512 0.403198L0.561464 0.49402Z",
    fill: "url(#paint0_linear_658_1975)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.6819 21.3207L15.6748 16.1812V15.9996V15.818L20.6831 10.6797L20.7958 10.7456L26.7294 14.2043C28.4235 15.1922 28.4235 16.8083 26.7294 17.7974L20.7958 21.2561L20.6819 21.3207Z",
    fill: "url(#paint1_linear_658_1975)"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter1_i_658_1975)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.7958 21.2548L15.6736 15.9996L0.561372 31.5052C1.1192 32.1124 2.04203 32.187 3.08128 31.5824L20.7958 21.2548Z",
    fill: "url(#paint2_linear_658_1975)"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M20.7958 10.7444L3.08128 0.418122C2.04203 -0.18777 1.1192 -0.111878 0.561372 0.495258L15.6748 16.0009L20.7958 10.7444Z",
    fill: "url(#paint3_linear_658_1975)"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "filter0_ii_658_1975",
    x: "0",
    y: "0",
    width: "28",
    height: "32",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "-0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect1_innerShadow_658_1975"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "effect1_innerShadow_658_1975",
    result: "effect2_innerShadow_658_1975"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "filter1_i_658_1975",
    x: "0.561371",
    y: "15.9996",
    width: "20.2345",
    height: "16.0004",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "-0.159375"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect1_innerShadow_658_1975"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_658_1975",
    x1: "14.3431",
    y1: "1.9509",
    x2: "-6.52904",
    y2: "22.2951",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00A0FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.0066",
    stopColor: "#00A1FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.2601",
    stopColor: "#00BEFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5122",
    stopColor: "#00D2FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.7604",
    stopColor: "#00DFFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#00E3FF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint1_linear_658_1975",
    x1: "28.9346",
    y1: "15.9996",
    x2: "-0.40682",
    y2: "15.9996",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFE000"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.4087",
    stopColor: "#FFBD00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.7754",
    stopColor: "#FFA500"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FF9C00"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint2_linear_658_1975",
    x1: "18.0141",
    y1: "18.8535",
    x2: "-10.2912",
    y2: "46.4429",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FF3A44"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C31162"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint3_linear_658_1975",
    x1: "-3.24469",
    y1: "-8.66429",
    x2: "9.3944",
    y2: "3.65511",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#32A071"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.0685",
    stopColor: "#2DA771"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.4762",
    stopColor: "#15CF74"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.8009",
    stopColor: "#06E775"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#00F076"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: "107",
    height: "34",
    viewBox: "0 0 107 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.6562 4.21167C7.6562 5.25649 7.34319 6.08812 6.7159 6.70903C6.00405 7.44714 5.07511 7.8162 3.93412 7.8162C2.8411 7.8162 1.9109 7.44215 1.14729 6.69407C0.382432 5.94473 0 5.01711 0 3.90994C0 2.80152 0.382432 1.8739 1.14729 1.12581C1.9109 0.376478 2.8411 0.00243618 3.93412 0.00243618C4.47685 0.00243618 4.99559 0.107168 5.48783 0.315385C5.98133 0.524849 6.37638 0.802888 6.67172 1.15075L6.00657 1.80906C5.5055 1.21683 4.8151 0.921335 3.93286 0.921335C3.13518 0.921335 2.44604 1.19813 1.86419 1.75171C1.28234 2.30529 0.992049 3.0247 0.992049 3.90869C0.992049 4.79268 1.28234 5.51209 1.86419 6.06567C2.44604 6.61926 3.13518 6.89605 3.93286 6.89605C4.7785 6.89605 5.48404 6.61801 6.04822 6.06069C6.41425 5.69786 6.62629 5.19291 6.68308 4.54581H3.93286V3.64686H7.60193C7.63979 3.84261 7.6562 4.03088 7.6562 4.21167Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.4748 1.08723H10.0266V3.45866H13.1366V4.35762H10.0266V6.72905H13.4748V7.64919H9.05352V0.168332H13.4748V1.08723Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5779 7.64919H16.6048V1.08723H14.4895V0.168332H19.6933V1.08723H17.5779V7.64919Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.4582 7.64919V0.168332H24.4314V7.64919H23.4582Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.7469 7.64919H27.7737V1.08723H25.6584V0.168332H30.8622V1.08723H28.7469V7.64919Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40.713 6.6829C39.9683 7.43847 39.0432 7.81625 37.9363 7.81625C36.8294 7.81625 35.9042 7.43847 35.1608 6.6829C34.4161 5.92734 34.0451 5.0022 34.0451 3.90875C34.0451 2.8153 34.4161 1.89016 35.1608 1.1346C35.9042 0.37903 36.8294 0 37.9363 0C39.0369 0 39.9608 0.380277 40.708 1.13958C41.4552 1.89889 41.8288 2.82153 41.8288 3.90875C41.8288 5.0022 41.4564 5.92734 40.713 6.6829ZM35.879 6.05576C36.4394 6.61682 37.1247 6.89611 37.9363 6.89611C38.7478 6.89611 39.4345 6.61558 39.9936 6.05576C40.554 5.49469 40.8354 4.77902 40.8354 3.90875C40.8354 3.03848 40.554 2.32281 39.9936 1.76174C39.4345 1.20068 38.7478 0.921393 37.9363 0.921393C37.1247 0.921393 36.4394 1.20193 35.879 1.76174C35.3198 2.32281 35.0384 3.03848 35.0384 3.90875C35.0384 4.77902 35.3198 5.49469 35.879 6.05576Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43.1944 7.64919V0.168332H44.3783L48.0588 5.9872H48.1004L48.0588 4.54588V0.168332H49.0319V7.64919H48.0158L44.165 1.54731H44.1234L44.165 2.98862V7.64919H43.1944Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.1967 18.6318C31.2281 18.6318 28.8086 20.8624 28.8086 23.9345C28.8086 26.9879 31.2281 29.2372 34.1967 29.2372C37.1665 29.2372 39.5861 26.9879 39.5861 23.9345C39.5848 20.8624 37.1653 18.6318 34.1967 18.6318ZM34.1967 27.15C32.5698 27.15 31.1675 25.8247 31.1675 23.9358C31.1675 22.0269 32.571 20.7215 34.1967 20.7215C35.8236 20.7215 37.2258 22.0269 37.2258 23.9358C37.2258 25.8234 35.8236 27.15 34.1967 27.15ZM22.441 18.6318C19.4724 18.6318 17.0529 20.8624 17.0529 23.9345C17.0529 26.9879 19.4724 29.2372 22.441 29.2372C25.4109 29.2372 27.8304 26.9879 27.8304 23.9345C27.8304 20.8624 25.4109 18.6318 22.441 18.6318ZM22.441 27.15C20.8141 27.15 19.4119 25.8247 19.4119 23.9358C19.4119 22.0269 20.8154 20.7215 22.441 20.7215C24.0679 20.7215 25.4702 22.0269 25.4702 23.9358C25.4714 25.8234 24.0679 27.15 22.441 27.15ZM8.45893 22.5094H13.9089C13.7461 23.7749 13.3195 24.6988 12.6682 25.3409C11.8756 26.1239 10.6349 26.9879 8.45893 26.9879C5.10413 26.9879 2.48139 24.316 2.48139 21.002C2.48139 17.688 5.10413 15.0161 8.45893 15.0161C10.2689 15.0161 11.5903 15.7193 12.566 16.6232L14.1727 15.036C12.8096 13.7506 11.0009 12.7668 8.45893 12.7668C3.86344 12.7668 0 16.4624 0 21.002C0 25.5416 3.86344 29.2372 8.45893 29.2372C10.9391 29.2372 12.8108 28.433 14.2737 26.9268C15.7781 25.4406 16.2464 23.351 16.2464 21.6641C16.2464 21.1429 16.206 20.6604 16.124 20.2589H8.45893V22.5094ZM65.6444 22.0069C65.1976 20.8225 63.8345 18.6318 61.0489 18.6318C58.2836 18.6318 55.9852 20.7813 55.9852 23.9345C55.9852 26.9069 58.2634 29.2372 61.3127 29.2372C63.7726 29.2372 65.1963 27.751 65.787 26.887L63.9569 25.6813C63.3473 26.5653 62.513 27.1475 61.3127 27.1475C60.1137 27.1475 59.2592 26.6052 58.7102 25.5404L65.888 22.6079L65.6444 22.0069ZM58.3239 23.7749C58.2634 21.7252 59.9307 20.6816 61.131 20.6816C62.0662 20.6816 62.8588 21.1441 63.1239 21.8062L58.3239 23.7749ZM52.489 28.9168H54.8467V13.3304H52.489V28.9168ZM48.5435 19.8175C48.0147 19.1941 46.9974 18.6318 45.7176 18.6318C43.033 18.6318 40.5731 20.9621 40.5731 23.9557C40.5731 26.9281 43.033 29.2384 45.7176 29.2384C46.9987 29.2384 48.0147 28.6761 48.5435 28.034H48.6243V28.7971C48.6243 30.8256 47.5262 31.9104 45.758 31.9104C44.3141 31.9104 43.4192 30.8867 43.0532 30.0227L40.9997 30.8668C41.5891 32.2719 43.1542 34 45.758 34C48.5233 34 50.8621 32.3929 50.8621 28.4754V18.9547H48.6256V19.8175H48.5435ZM45.9208 27.15C44.2939 27.15 42.932 25.8035 42.932 23.9557C42.932 22.0867 44.2939 20.7215 45.9208 20.7215C47.5262 20.7215 48.7871 22.0867 48.7871 23.9557C48.7871 25.8035 47.5262 27.15 45.9208 27.15ZM76.6933 13.3304H71.0502V28.9168H73.4041V23.0119H76.692C79.3021 23.0119 81.8693 21.1454 81.8693 18.1717C81.8693 15.1981 79.3034 13.3304 76.6933 13.3304ZM76.7538 20.8424H73.4041V15.4998H76.7538C78.5145 15.4998 79.5142 16.9399 79.5142 18.1717C79.5142 19.3787 78.5145 20.8424 76.7538 20.8424ZM91.309 18.6044C89.6038 18.6044 87.8381 19.3462 87.1073 20.9908L89.1974 21.8523C89.6442 20.9908 90.4772 20.709 91.3493 20.709C92.5673 20.709 93.8055 21.4309 93.8257 22.7139V22.8747C93.3991 22.6341 92.4853 22.2738 91.3695 22.2738C89.1166 22.2738 86.822 23.4969 86.822 25.7823C86.822 27.8682 88.6698 29.211 90.7397 29.211C92.3225 29.211 93.1959 28.5091 93.7437 27.6862H93.8244V28.8893H96.0988V22.9134C96.1001 20.1479 94.0074 18.6044 91.309 18.6044ZM91.0237 27.1463C90.2538 27.1463 89.1772 26.7648 89.1772 25.8222C89.1772 24.619 90.5176 24.1577 91.675 24.1577C92.7087 24.1577 93.1971 24.3784 93.8257 24.6789C93.6427 26.1239 92.3843 27.1463 91.0237 27.1463ZM104.381 18.9448L101.681 25.7025H101.601L98.7986 18.9448H96.2616L100.463 28.3894L98.0678 33.6434H100.524L107 18.9448H104.381ZM83.1693 28.9168H85.5233V13.3304H83.1693V28.9168Z",
    fill: "white"
  }))), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://itunes.apple.com/app/id529443604",
    className: "link home-main__info-app app-store-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "32",
    viewBox: "0 0 26 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.7159 17.0175C21.7476 14.5472 23.0725 12.2098 25.1742 10.916C23.8483 9.01984 21.6275 7.81763 19.317 7.74524C16.8526 7.48623 14.4635 9.22186 13.2077 9.22186C11.9276 9.22186 9.9941 7.77096 7.91204 7.81386C5.19816 7.90165 2.66815 9.44668 1.34779 11.8225C-1.49046 16.743 0.626619 23.9746 3.34542 27.952C4.7057 29.8996 6.29547 32.0752 8.37566 31.998C10.4112 31.9135 11.1715 30.6982 13.6286 30.6982C16.0629 30.6982 16.7762 31.998 18.8986 31.949C21.0829 31.9135 22.4591 29.9927 23.7716 28.0266C24.749 26.6389 25.5011 25.1051 26 23.4821C23.4331 22.395 21.7189 19.8083 21.7159 17.0175Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.707 5.12951C18.898 3.6979 19.4847 1.85781 19.3426 0C17.5231 0.191361 15.8424 1.06213 14.6353 2.43882C13.455 3.78391 12.8407 5.59163 12.9569 7.37843C14.777 7.39719 16.5664 6.55002 17.707 5.12951Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "106",
    height: "34",
    viewBox: "0 0 106 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0.402125V8.57489H3.05302C5.57278 8.57489 7.0319 7.074 7.0319 4.46302C7.0319 1.89169 5.56106 0.402125 3.05302 0.402125H0ZM1.31262 1.55753H2.90652C4.65864 1.55753 5.69584 2.63363 5.69584 4.48001C5.69584 6.3547 4.67622 7.41948 2.90652 7.41948H1.31262V1.55753Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5007 8.69382C13.3641 8.69382 14.5068 7.48745 14.5068 5.48815C14.5068 3.50018 13.3583 2.28815 11.5007 2.28815C9.63722 2.28815 8.48868 3.50018 8.48868 5.48815C8.48868 7.48745 9.63136 8.69382 11.5007 8.69382ZM11.5007 7.61205C10.4049 7.61205 9.78958 6.83612 9.78958 5.48815C9.78958 4.15151 10.4049 3.36992 11.5007 3.36992C12.5906 3.36992 13.2118 4.15151 13.2118 5.48815C13.2118 6.83046 12.5906 7.61205 11.5007 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.2378 2.40708H22.9779L21.8411 7.11364H21.7415L20.4288 2.40708H19.2217L17.9091 7.11364H17.8153L16.6726 2.40708H15.3952L17.1532 8.57489H18.4482L19.7608 4.03258H19.8604L21.1789 8.57489H22.4857L24.2378 2.40708Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.6887 8.57489H26.9486V4.96709C26.9486 4.00426 27.5404 3.4039 28.4722 3.4039C29.4039 3.4039 29.8493 3.89665 29.8493 4.8878V8.57489H31.1091V4.58196C31.1091 3.11505 30.3239 2.28815 28.8999 2.28815C27.9389 2.28815 27.306 2.7016 26.9955 3.38691H26.9017V2.40708H25.6887V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.0933 8.57489H34.3532V0H33.0933V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39.0915 8.69382C40.955 8.69382 42.0977 7.48745 42.0977 5.48815C42.0977 3.50018 40.9491 2.28815 39.0915 2.28815C37.2281 2.28815 36.0795 3.50018 36.0795 5.48815C36.0795 7.48745 37.2222 8.69382 39.0915 8.69382ZM39.0915 7.61205C37.9957 7.61205 37.3804 6.83612 37.3804 5.48815C37.3804 4.15151 37.9957 3.36992 39.0915 3.36992C40.1815 3.36992 40.8026 4.15151 40.8026 5.48815C40.8026 6.83046 40.1815 7.61205 39.0915 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.8515 7.6517C45.1659 7.6517 44.6678 7.32887 44.6678 6.77382C44.6678 6.2301 45.0663 5.94125 45.9453 5.88461L47.504 5.78833V6.30373C47.504 7.06833 46.8008 7.6517 45.8515 7.6517ZM45.5292 8.67683C46.3672 8.67683 47.0645 8.32568 47.4454 7.70833H47.545V8.57489H48.758V4.36107C48.758 3.05841 47.8556 2.28815 46.2558 2.28815C44.8084 2.28815 43.7771 2.96779 43.6482 4.02691H44.8671C45.0077 3.5908 45.4941 3.3416 46.1973 3.3416C47.0587 3.3416 47.504 3.70974 47.504 4.36107V4.89346L45.7753 4.98975C44.2576 5.08036 43.4021 5.72037 43.4021 6.83046C43.4021 7.95754 44.2986 8.67683 45.5292 8.67683Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53.0334 8.67683C53.9124 8.67683 54.6566 8.27471 55.0375 7.60072H55.1371V8.57489H56.3443V0H55.0844V3.38691H54.9906C54.6449 2.70726 53.9066 2.30514 53.0334 2.30514C51.422 2.30514 50.3847 3.53983 50.3847 5.48815C50.3847 7.44214 51.4102 8.67683 53.0334 8.67683ZM53.3909 3.39824C54.4457 3.39824 55.1078 4.20815 55.1078 5.49382C55.1078 6.78515 54.4515 7.58373 53.3909 7.58373C52.3244 7.58373 51.6856 6.79647 51.6856 5.48815C51.6856 4.19116 52.3302 3.39824 53.3909 3.39824Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64.5142 8.69382C66.3776 8.69382 67.5203 7.48745 67.5203 5.48815C67.5203 3.50018 66.3718 2.28815 64.5142 2.28815C62.6507 2.28815 61.5022 3.50018 61.5022 5.48815C61.5022 7.48745 62.6449 8.69382 64.5142 8.69382ZM64.5142 7.61205C63.4184 7.61205 62.8031 6.83612 62.8031 5.48815C62.8031 4.15151 63.4184 3.36992 64.5142 3.36992C65.6041 3.36992 66.2253 4.15151 66.2253 5.48815C66.2253 6.83046 65.6041 7.61205 64.5142 7.61205Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.1881 8.57489H70.4479V4.96709C70.4479 4.00426 71.0398 3.4039 71.9715 3.4039C72.9033 3.4039 73.3486 3.89665 73.3486 4.8878V8.57489H74.6085V4.58196C74.6085 3.11505 73.8232 2.28815 72.3993 2.28815C71.4383 2.28815 70.8054 2.7016 70.4948 3.38691H70.4011V2.40708H69.1881V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80.411 0.872214V2.4354H79.3972V3.46054H80.411V6.94373C80.411 8.13311 80.9677 8.60887 82.3682 8.60887C82.6143 8.60887 82.8487 8.58055 83.0538 8.54657V7.53276C82.878 7.54975 82.7667 7.56108 82.5733 7.56108C81.9463 7.56108 81.6709 7.27789 81.6709 6.63223V3.46054H83.0538V2.4354H81.6709V0.872214H80.411Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.745 8.57489H86.0049V4.97275C86.0049 4.03824 86.5791 3.40956 87.6105 3.40956C88.5012 3.40956 88.9758 3.90797 88.9758 4.89346V8.57489H90.2357V4.59328C90.2357 3.12638 89.3977 2.29381 88.0382 2.29381C87.0772 2.29381 86.4033 2.70726 86.0928 3.39824H85.9931V0H84.745V8.57489Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M94.7807 3.32461C95.7124 3.32461 96.3218 3.95328 96.3511 4.92178H93.1282C93.1985 3.95895 93.8489 3.32461 94.7807 3.32461ZM96.3453 6.90975C96.1109 7.39117 95.5893 7.65736 94.8275 7.65736C93.8196 7.65736 93.1692 6.97205 93.1282 5.89028V5.82231H97.6344V5.39753C97.6344 3.46054 96.5621 2.28815 94.7865 2.28815C92.9875 2.28815 91.8448 3.53983 91.8448 5.51081C91.8448 7.48179 92.9641 8.69382 94.7924 8.69382C96.2515 8.69382 97.2711 8.01418 97.5583 6.90975H96.3453Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M66.4629 14.4941V17.6205H64.4354V19.6708H66.4629V26.6372C66.4629 29.0159 67.5763 29.9674 70.3773 29.9674C70.8696 29.9674 71.3384 29.9108 71.7486 29.8428V27.8152C71.397 27.8492 71.1743 27.8718 70.7875 27.8718C69.5335 27.8718 68.9827 27.3055 68.9827 26.0141V19.6708H71.7486V17.6205H68.9827V14.4941H66.4629Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M78.8841 30.1373C82.611 30.1373 84.8963 27.7246 84.8963 23.726C84.8963 19.7501 82.5992 17.326 78.8841 17.326C75.1572 17.326 72.8601 19.7501 72.8601 23.726C72.8601 27.7246 75.1454 30.1373 78.8841 30.1373ZM78.8841 27.9738C76.6925 27.9738 75.4619 26.4219 75.4619 23.726C75.4619 21.0527 76.6925 19.4895 78.8841 19.4895C81.0639 19.4895 82.3063 21.0527 82.3063 23.726C82.3063 26.4106 81.0639 27.9738 78.8841 27.9738Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M86.8517 29.8995H89.3714V22.6159C89.3714 20.8828 90.7192 19.7161 92.6295 19.7161C93.0749 19.7161 93.825 19.7954 94.0359 19.8633V17.4619C93.7664 17.3939 93.2859 17.36 92.9108 17.36C91.2466 17.36 89.8285 18.2435 89.4652 19.4555H89.2777V17.5639H86.8517V29.8995Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100.292 19.3989C102.156 19.3989 103.375 20.6563 103.433 22.5932H96.9874C97.1281 20.6676 98.429 19.3989 100.292 19.3989ZM103.422 26.5692C102.953 27.532 101.91 28.0644 100.386 28.0644C98.3704 28.0644 97.0695 26.6938 96.9874 24.5302V24.3943H106V23.5448C106 19.6708 103.855 17.326 100.304 17.326C96.7062 17.326 94.4208 19.8293 94.4208 23.7713C94.4208 27.7133 96.6593 30.1373 100.316 30.1373C103.234 30.1373 105.273 28.778 105.848 26.5692H103.422Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.9387 25.3441C50.133 28.3732 52.7447 30.3104 56.6318 30.3104C60.7862 30.3104 63.3857 28.2793 63.3857 25.0389C63.3857 22.4912 61.9037 21.0823 58.3081 20.2722L56.3767 19.8143C54.093 19.2977 53.1698 18.605 53.1698 17.3957C53.1698 15.8695 54.6032 14.8715 56.7533 14.8715C58.794 14.8715 60.2031 15.846 60.4582 17.4075H63.1063C62.9484 14.5545 60.3489 12.5469 56.7897 12.5469C52.9633 12.5469 50.4124 14.5545 50.4124 17.5719C50.4124 20.0609 51.8579 21.5402 55.0284 22.2563L57.2878 22.7847C59.6079 23.313 60.6283 24.0879 60.6283 25.3793C60.6283 26.8821 59.0248 27.974 56.8383 27.974C54.4939 27.974 52.8662 26.9526 52.6354 25.3441H49.9387Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.8365 17.36C22.102 17.36 20.6018 18.1982 19.8283 19.6028H19.6408V17.5639H17.2148V34H19.7345V28.0304H19.9338C20.6018 29.3331 22.0434 30.1034 23.8599 30.1034C27.0829 30.1034 29.1339 27.6453 29.1339 23.726C29.1339 19.8067 27.0829 17.36 23.8365 17.36ZM23.1216 27.9172C21.012 27.9172 19.6877 26.3087 19.6877 23.7373C19.6877 21.1547 21.012 19.5462 23.1333 19.5462C25.2663 19.5462 26.5438 21.1207 26.5438 23.726C26.5438 26.3426 25.2663 27.9172 23.1216 27.9172Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.9509 17.36C36.2164 17.36 34.7162 18.1982 33.9427 19.6028H33.7552V17.5639H31.3292V34H33.849V28.0304H34.0482C34.7162 29.3331 36.1578 30.1034 37.9744 30.1034C41.1973 30.1034 43.2483 27.6453 43.2483 23.726C43.2483 19.8067 41.1973 17.36 37.9509 17.36ZM37.236 27.9172C35.1264 27.9172 33.8021 26.3087 33.8021 23.7373C33.8021 21.1547 35.1264 19.5462 37.2477 19.5462C39.3807 19.5462 40.6582 21.1207 40.6582 23.726C40.6582 26.3426 39.3807 27.9172 37.236 27.9172Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.6939 29.8995H15.5849L9.25622 12.9578H6.32872L0 29.8995H2.79387L4.40946 25.4028H11.0905L12.6939 29.8995ZM7.65278 16.0338H7.85928L10.3981 23.1956H5.10185L7.65278 16.0338Z",
    fill: "white"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-main__phones"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_phone1_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_phone1_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_phone1_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_phone2_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_phone2_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_phone2_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-4",
    alt: "",
    src: _images_star_2_svg__WEBPACK_IMPORTED_MODULE_7__
  })))))));
};

/***/ }),

/***/ "./src/components/HomeReviews.jsx":
/*!****************************************!*\
  !*** ./src/components/HomeReviews.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeReviews": function() { return /* binding */ HomeReviews; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.js");

//import React, { useState, useEffect, useRef } from 'react';
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    memo = _wp$element.memo;
 //const { useState, useEffect, useRef, createElement, render } = wp.element;







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
var HomeReviews = React.memo(function () {
  var _useState = useState(0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      slidesPerView = _useState2[0],
      setSlidesPerView = _useState2[1];

  var reviews = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/reviews?reviews_categories=11', {});
  console.log(reviews);
  window.addEventListener('resize', function () {
    var slidesCount = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_7__.calculateSlidesPerView)();
    setSlidesPerView(slidesCount);
  });
  useEffect(function () {
    var slidesCount = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_7__.calculateSlidesPerView)();
    setSlidesPerView(slidesCount);
  }, []);

  if (!reviews.data) {
    return /*#__PURE__*/React.createElement("section", {
      className: "home-reviews"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-reviews__wrapper"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "title title_fade title_size-m home-reviews__title"
    }, "App User Reviews"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "title title_fade title_size-l"
    }, "Loading..."))));
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "home-reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-reviews__wrapper"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade title_size-m home-reviews__title"
  }, "App User Reviews"), /*#__PURE__*/React.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
    spaceBetween: 12,
    slidesPerView: slidesPerView,
    onSwiper: function onSwiper(swiper) {
      return console.log(swiper);
    },
    pagination: {
      clickable: true,
      el: '.home-reviews__pagination'
    },
    loop: true,
    initialSlide: 3,
    centeredSlides: true
  }, reviews.data.map(function (review) {
    var starsCount = +review.acf.review_stars;
    var starsArr = [];

    for (var i = 0; i < starsCount; i++) {
      starsArr.push(i);
    }

    return /*#__PURE__*/React.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
      key: review.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-reviews__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-reviews__item-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reviews-stars home-reviews__stars"
    }, starsArr.map(function (star) {
      return /*#__PURE__*/React.createElement("span", {
        className: "star-wrapper",
        key: star
      }, /*#__PURE__*/React.createElement("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M11.25 0.899902L14.3717 8.35321L22.4249 9.01895L16.3011 14.2911L18.1565 22.1559L11.25 17.9609L4.34352 22.1559L6.19894 14.2911L0.0750856 9.01895L8.12827 8.35321L11.25 0.899902Z",
        fill: "#FED301"
      })));
    })), /*#__PURE__*/React.createElement("p", null, review.acf.review_text), /*#__PURE__*/React.createElement("div", {
      className: "home-reviews__item-title"
    }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {
      width: "40",
      height: "40",
      src: review.acf.review_icon_x1.url,
      srcSet: "".concat(review.acf.review_icon_x1.url, " 1x, ").concat(review.acf.review_icon_x1 ? review.acf.review_icon_x1.url : '', " 2x"),
      alt: "reviewer"
    }), /*#__PURE__*/React.createElement("h5", {
      className: "title"
    }, review.title.rendered)))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "home-reviews__pagination-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-reviews__pagination"
  })))));
});

/***/ }),

/***/ "./src/components/HowWorksIntro.jsx":
/*!******************************************!*\
  !*** ./src/components/HowWorksIntro.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksBottom": function() { return /* binding */ HowWorksBottom; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var HowWorksBottom = function HowWorksBottom() {
  var _useState = useState('not voted'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isPostHelpful = _useState2[0],
      setIsPostHelpful = _useState2[1];

  useEffect(function () {
    var storageKey = 'how Snorelab works';
    var lastVote = localStorage.getItem(storageKey);
    console.log(lastVote);

    if (lastVote !== null) {
      setIsPostHelpful('voted');
    }
  }, []);

  var handleYesClick = function handleYesClick() {
    setIsPostHelpful(true);
    var storageKey = 'how Snorelab works';
    localStorage.setItem(storageKey, true);
  };

  var handleNoClick = function handleNoClick() {
    setIsPostHelpful(false);
    var storageKey = 'how Snorelab works';
    localStorage.setItem(storageKey, false);
  };

  var handleCancelClick = function handleCancelClick() {
    setIsPostHelpful('not voted');
    var storageKey = 'how Snorelab works';
    localStorage.removeItem(storageKey);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "how-works__intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works__intro-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_fade-s how-works__intro-title"
  }, "This is a short introduction to SnoreLab"), /*#__PURE__*/React.createElement("div", {
    className: "how-works__intro-text"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1169",
    height: "218",
    viewBox: "0 0 1169 218",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M819.122 0L759.395 83.2686L1169 119.509L722.482 134.731L662.755 218L446.518 144.139L0 159.362L312.877 98.4911L96.6401 24.6305L506.245 60.8708L819.122 0Z",
    fill: "#1A25EF",
    fillOpacity: "0.8"
  })), /*#__PURE__*/React.createElement("p", null, "There are lots of other features and tools in\xA0the app. You can find out more about these and how to interpret your results in our", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "/faqs"
  }, "FAQs"), /*#__PURE__*/React.createElement("br", null), "You can also get in touch with us\xA0on", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "mailto:support@snorelab.com"
  }, "support@snorelab.com")))))), /*#__PURE__*/React.createElement("section", {
    className: "how-works__review"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works__review-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-review__content",
    style: isPostHelpful === 'not voted' ? {
      display: 'block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_fade-s insight-review__title"
  }, "Let us know if you liked the post. That\u2019s the only way we can improve."), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__note"
  }, /*#__PURE__*/React.createElement("p", null, "Was this post helpful?")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "link btn btn-arrow insight-review__btn",
    onClick: handleYesClick
  }, /*#__PURE__*/React.createElement("div", null, "Yes")), /*#__PURE__*/React.createElement("button", {
    className: "link btn btn-arrow btn_gray-text insight-review__btn",
    onClick: handleNoClick
  }, /*#__PURE__*/React.createElement("div", null, "No")))), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__feedback",
    style: isPostHelpful === true ? {
      display: 'inline-block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Thank you for your feedback!")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__feedback",
    style: isPostHelpful === 'voted' ? {
      display: 'inline-block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", null, "You have already voted for this post")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__form",
    style: isPostHelpful === false ? {
      display: 'block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "insight-review__text"
  }, "Sorry to hear that this article was not helpful. We pride ourselves on being the best online resource for snoring and sleep apnea information so please leave a comment to help us improve our website's content."), /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "feedback-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Message*"), /*#__PURE__*/React.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/React.createElement("textarea", {
    required: true,
    className: "careers-form__textarea",
    type: "text",
    name: "message"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Name*"), /*#__PURE__*/React.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "careers-form__input",
    type: "text",
    name: "name"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "careers-form__submit-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn careers-form__cancel",
    onClick: handleCancelClick
  }, /*#__PURE__*/React.createElement("div", null, "Cancel")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "careers-form__submit"
  }, "Send feedback"))))))));
};

/***/ }),

/***/ "./src/components/HowWorksMain.jsx":
/*!*****************************************!*\
  !*** ./src/components/HowWorksMain.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksMain": function() { return /* binding */ HowWorksMain; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Dashboard_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Dashboard.png */ "./src/images/Dashboard.png");
/* harmony import */ var _images_Dashboard_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Dashboard@2x.png */ "./src/images/Dashboard@2x.png");
/* harmony import */ var _images_Audio_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Audio.png */ "./src/images/Audio.png");
/* harmony import */ var _images_Audio_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Audio@2x.png */ "./src/images/Audio@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;





var HowWorksMain = function HowWorksMain() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-main__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-main__info"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l how-works-main__title"
  }, "How SnoreLab Works"), /*#__PURE__*/React.createElement("p", null, "SnoreLab is an app that records your snoring, giving you\xA0objective data to help find the solutions that work for you.", /*#__PURE__*/React.createElement("br", null), "This is our concise guide to getting started with SnoreLab\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Anti-snoring remedies and\xA0techniques"), /*#__PURE__*/React.createElement("p", null, "By measuring nightly changes in your snoring intensity with SnoreLab, you can try different anti-snoring remedies and\xA0techniques and hopefully discover one which really works.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "590",
    height: "458",
    viewBox: "0 0 590 458",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z",
    fill: "#0598FA"
  }))), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Dashboard_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Dashboard_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Dashboard_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-audio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "What you sound like"), /*#__PURE__*/React.createElement("p", null, "Crucially, SnoreLab also allows you to hear what you sound like so\xA0you don\u2019t just have to take your partner\u2019s word for it! We find this can be a dramatic revelation which spurs you to take action.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "590",
    height: "458",
    viewBox: "0 0 590 458",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z",
    fill: "#488F83"
  }))), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Audio_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Audio_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Audio_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/HowWorksMake.jsx":
/*!*****************************************!*\
  !*** ./src/components/HowWorksMake.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksMake": function() { return /* binding */ HowWorksMake; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Delay_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Delay.png */ "./src/images/Delay.png");
/* harmony import */ var _images_Delay_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Delay@2x.png */ "./src/images/Delay@2x.png");
/* harmony import */ var _images_Soundscape_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Soundscape.png */ "./src/images/Soundscape.png");
/* harmony import */ var _images_Soundscape_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Soundscape@2x.png */ "./src/images/Soundscape@2x.png");
/* harmony import */ var _images_Alarm_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Alarm.png */ "./src/images/Alarm.png");
/* harmony import */ var _images_Alarm_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Alarm@2x.png */ "./src/images/Alarm@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;







var HowWorksMake = function HowWorksMake() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-make"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-make__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-make__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-make__title"
  }, "Make use of our soundscapes and\xA0alarm clock"), /*#__PURE__*/React.createElement("p", null, "SnoreLab is an app that records your snoring, giving you\xA0objective data to help find the solutions that work for you. ", /*#__PURE__*/React.createElement("br", null), "This is our concise guide to getting started with SnoreLab\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-delay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Set a delay"), /*#__PURE__*/React.createElement("p", null, "Before starting your session, consider setting a\xA0delay. This means that SnoreLab won\u2019t record the\xA0noises you make before you\xA0finally get to sleep. This is done by pressing the Time to Sleep button on the Start screen.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Delay_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Delay_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Delay_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-soundscape"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Choose a\xA0soundscape"), /*#__PURE__*/React.createElement("p", null, "Here, you can also choose a\xA0relaxing soundscape to help you\xA0drift off. This will cut off once SnoreLab starts recording.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Soundscape_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Soundscape_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Soundscape_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-alarm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Set SnoreLab\u2019s alarm clock"), /*#__PURE__*/React.createElement("p", null, "By setting SnoreLab\u2019s alarm clock, your session will automatically stop at this chosen time. Our selection of sounds slowly fade in to gently wake you up.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Alarm_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_Alarm_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_Alarm_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/HowWorksNotes.jsx":
/*!******************************************!*\
  !*** ./src/components/HowWorksNotes.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksNotes": function() { return /* binding */ HowWorksNotes; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Mockup_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Mockup.png */ "./src/images/Mockup.png");
/* harmony import */ var _images_Mockup_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Mockup@2x.png */ "./src/images/Mockup@2x.png");
/* harmony import */ var _images_Time_to_bed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Time-to-bed.png */ "./src/images/Time-to-bed.png");
/* harmony import */ var _images_Time_to_bed_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Time-to-bed@2x.png */ "./src/images/Time-to-bed@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;





var HowWorksNotes = function HowWorksNotes() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-notes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-notes__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-notes__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-notes__title"
  }, "Add notes and look at your trends")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-note"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Make a note"), /*#__PURE__*/React.createElement("p", null, "If there\u2019s anything that you think might be related to\xA0your snoring \u2014 make a note of it. Perhaps you\xA0woke up with a\xA0dry\xA0mouth, or\xA0had\xA0to\xA0use\xA0the\xA0bathroom several times? Snoring is complicated so getting to the root of it needs as\xA0much information as possible.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "590",
    height: "458",
    viewBox: "0 0 590 458",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z",
    fill: "#0598FA"
  }))), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Mockup_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Mockup_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Mockup_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-trends"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "The trends"), /*#__PURE__*/React.createElement("p", null, "You can also edit factors such as your weight (a hugely important influence on snoring) and any of the remedies and factors. The\xA0Trends view summarises all of this information. Here, you\xA0can see what impact your selected remedies and factors are\xA0having \u2014 a valuable tool when trying to find the best snoring solutions for you.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "590",
    height: "458",
    viewBox: "0 0 590 458",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z",
    fill: "#488F83"
  }))), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Time_to_bed_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Time_to_bed_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Time_to_bed_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/HowWorksSee.jsx":
/*!****************************************!*\
  !*** ./src/components/HowWorksSee.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksSee": function() { return /* binding */ HowWorksSee; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Score_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Score.png */ "./src/images/Score.png");
/* harmony import */ var _images_Score_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Score@2x.png */ "./src/images/Score@2x.png");
/* harmony import */ var _images_m_Score_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/m-Score.png */ "./src/images/m-Score.png");
/* harmony import */ var _images_m_Score_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/m-Score@2x.png */ "./src/images/m-Score@2x.png");
/* harmony import */ var _images_Audio_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Audio-1.png */ "./src/images/Audio-1.png");
/* harmony import */ var _images_Audio_1_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Audio-1@2x.png */ "./src/images/Audio-1@2x.png");
/* harmony import */ var _images_m_Audio_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/m-Audio-1.png */ "./src/images/m-Audio-1.png");
/* harmony import */ var _images_m_Audio_1_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/m-Audio-1@2x.png */ "./src/images/m-Audio-1@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;









var HowWorksSee = function HowWorksSee() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-see"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-see__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-see__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-see__title"
  }, "See your results and listen to your sounds"), /*#__PURE__*/React.createElement("p", null, "Now to assess the damage!")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Snore score"), /*#__PURE__*/React.createElement("p", null, "SnoreLab gives you a Snore Score: our unique measurement of\xA0snoring intensity. We also give you\xA0a breakdown of how long you\xA0were snoring and\xA0at what levels \u2014 quiet, light, loud and epic!")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-none d-lg-block",
    src: _images_Score_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Score_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Score_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-lg-none",
    src: _images_m_Score_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_m_Score_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_m_Score_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-listen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Listen to the sounds you\xA0make for yourself"), /*#__PURE__*/React.createElement("p", null, "But don\u2019t take our word for it \u2014 by tapping on the chart, you\xA0can\xA0listen to the sounds you\xA0make for yourself. Use\xA0the\xA0control panel to scroll through your recordings, or drag the\xA0blue dot to the point on the chart you want to listen to.\xA0SnoreLab\u2019s default is to save 20\xA0audio samples per night, but\xA0you can opt to listen to audio for the entire night with Full\xA0Night Recording.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-none d-md-block",
    src: _images_Audio_1_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_Audio_1_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_Audio_1_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-md-none",
    src: _images_m_Audio_1_png__WEBPACK_IMPORTED_MODULE_7__,
    srcSet: "".concat(_images_m_Audio_1_png__WEBPACK_IMPORTED_MODULE_7__, " 1x, ").concat(_images_m_Audio_1_2x_png__WEBPACK_IMPORTED_MODULE_8__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/HowWorksSelect.jsx":
/*!*******************************************!*\
  !*** ./src/components/HowWorksSelect.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksSelect": function() { return /* binding */ HowWorksSelect; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Factors_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Factors.png */ "./src/images/Factors.png");
/* harmony import */ var _images_Factors_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Factors@2x.png */ "./src/images/Factors@2x.png");
/* harmony import */ var _images_Create_Remedies_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Create-Remedies.png */ "./src/images/Create-Remedies.png");
/* harmony import */ var _images_Create_Remedies_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Create-Remedies@2x.png */ "./src/images/Create-Remedies@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;





var HowWorksSelect = function HowWorksSelect() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-select"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-select__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-select__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-select__title"
  }, "Select relevant remedies and\xA0factors"), /*#__PURE__*/React.createElement("p", null, "Do you have a blocked nose? Did\xA0you\xA0shower before bed? Are\xA0you\xA0trying any specific remedies to\xA0help your snoring?")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-factors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Factors and\xA0remedies"), /*#__PURE__*/React.createElement("p", null, "It\u2019s a great idea to keep track of\xA0all\xA0of these factors and remedies in SnoreLab. This can help you\xA0identify the things that trigger your snoring and what measures help you to snore less.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Factors_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Factors_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Factors_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-create"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Create your own remedies and\xA0factors"), /*#__PURE__*/React.createElement("p", null, "If you don\u2019t see the appropriate remedy or factor, remember, you\xA0can\xA0create your own! Simply tap the Create New button to\xA0make custom remedies and factors.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Create_Remedies_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Create_Remedies_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Create_Remedies_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/HowWorksSleep.jsx":
/*!******************************************!*\
  !*** ./src/components/HowWorksSleep.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksSleep": function() { return /* binding */ HowWorksSleep; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Record_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Record.png */ "./src/images/Record.png");
/* harmony import */ var _images_Record_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Record@2x.png */ "./src/images/Record@2x.png");
/* harmony import */ var _images_Pause_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Pause.png */ "./src/images/Pause.png");
/* harmony import */ var _images_Pause_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Pause@2x.png */ "./src/images/Pause@2x.png");
/* harmony import */ var _images_Slide_btn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Slide-btn.png */ "./src/images/Slide-btn.png");
/* harmony import */ var _images_Slide_btn_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Slide-btn@2x.png */ "./src/images/Slide-btn@2x.png");
/* harmony import */ var _images_m_Slide_btn_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/m-Slide-btn.png */ "./src/images/m-Slide-btn.png");
/* harmony import */ var _images_m_Slide_btn_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/m-Slide-btn@2x.png */ "./src/images/m-Slide-btn@2x.png");
/* harmony import */ var _images_Rating_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/Rating-1.png */ "./src/images/Rating-1.png");
/* harmony import */ var _images_Rating_1_2x_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/Rating-1@2x.png */ "./src/images/Rating-1@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;











var HowWorksSleep = function HowWorksSleep() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-sleep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-sleep__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-sleep__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-sleep__title"
  }, "Go to sleep and let SnoreLab do\xA0its\xA0thing")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-record"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-1 order-xl-0 example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "SnoreLab will listen to\xA0you\xA0snore"), /*#__PURE__*/React.createElement("p", null, "We\xA0use\xA0sophisticated snore detection algorithms to calculate your scores and give you\xA0a picture of what you\xA0sound like.")), /*#__PURE__*/React.createElement("div", {
    className: "order-0 order-xl-1 example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Record_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Record_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Record_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "order-1 order-lg-0 example example-pause"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Pause"), /*#__PURE__*/React.createElement("p", null, "Remember, you can pause the\xA0monitoring if\xA0you get\xA0up\xA0in\xA0the\xA0middle of\xA0the\xA0night.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Pause_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Pause_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Pause_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "example example-stop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-none d-lg-block",
    src: _images_Slide_btn_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_Slide_btn_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_Slide_btn_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-block d-lg-none",
    src: _images_m_Slide_btn_png__WEBPACK_IMPORTED_MODULE_7__,
    srcSet: "".concat(_images_m_Slide_btn_png__WEBPACK_IMPORTED_MODULE_7__, " 1x, ").concat(_images_m_Slide_btn_2x_png__WEBPACK_IMPORTED_MODULE_8__, " 2x"),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Stop the session"), /*#__PURE__*/React.createElement("p", null, "In the morning, when you are ready to end your session, use the Slide button to stop the session."))), /*#__PURE__*/React.createElement("div", {
    className: "order-1 order-lg-0 example example-rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Rest rating"), /*#__PURE__*/React.createElement("p", null, "You can then register your Rest Rating \u2014 a great way of tracking how your snoring affects your sleep quality.")), /*#__PURE__*/React.createElement("div", {
    className: "example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Rating_1_png__WEBPACK_IMPORTED_MODULE_9__,
    srcSet: "".concat(_images_Rating_1_png__WEBPACK_IMPORTED_MODULE_9__, " 1x, ").concat(_images_Rating_1_2x_png__WEBPACK_IMPORTED_MODULE_10__, " 2x"),
    alt: ""
  }))))), /*#__PURE__*/React.createElement("svg", {
    "data-svg": "decorative",
    width: "503",
    height: "878",
    viewBox: "0 0 503 878",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M462 0L570.889 335.127H923.262L638.187 542.246L747.076 877.373L462 670.254L176.924 877.373L285.813 542.246L0.737579 335.127H353.111L462 0Z",
    fill: "#17A2FF",
    fillOpacity: "0.4"
  }))));
};

/***/ }),

/***/ "./src/components/HowWorksStart.jsx":
/*!******************************************!*\
  !*** ./src/components/HowWorksStart.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorksStart": function() { return /* binding */ HowWorksStart; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Start_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Start.png */ "./src/images/Start.png");
/* harmony import */ var _images_Start_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Start@2x.png */ "./src/images/Start@2x.png");
/* harmony import */ var _images_Placement_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Placement.png */ "./src/images/Placement.png");
/* harmony import */ var _images_Placement_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Placement@2x.png */ "./src/images/Placement@2x.png");
/* harmony import */ var _images_m_Start_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/m-Start.png */ "./src/images/m-Start.png");
/* harmony import */ var _images_m_Start_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/m-Start@2x.png */ "./src/images/m-Start@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;







var HowWorksStart = function HowWorksStart() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how-works-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-start__wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-svg": "decorative",
    width: "576",
    height: "1314",
    viewBox: "0 0 576 1314",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M594.372 0.74997L817.121 458.827L1321.61 388.534L954.787 741.935L1177.54 1200.01L728.077 960.348L361.253 1313.75L450.296 812.228L0.837613 572.564L505.328 502.271L594.372 0.74997Z",
    fill: "url(#paint0_linear_537_1130)",
    fillOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_537_1130",
    x1: "703.018",
    y1: "631.335",
    x2: "102.534",
    y2: "466.13",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1F12D3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#3FAFDE"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works-start__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title title_fade-m how-works-start__title"
  }, "Press Start and place the\xA0phone\xA0down")), /*#__PURE__*/React.createElement("div", {
    className: "examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example example-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-lg-1 example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "737",
    height: "630",
    viewBox: "0 0 737 630",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M516.418 0L478.763 240.639L737 345.37L455.491 389.361L417.836 630L281.509 416.55L0 460.541L197.254 284.63L60.9271 71.18L319.164 175.911L516.418 0Z",
    fill: "#0598FA"
  }))), /*#__PURE__*/React.createElement("img", {
    className: "d-none d-lg-block",
    src: _images_Start_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_Start_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_Start_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    className: "d-lg-none",
    src: _images_m_Start_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_m_Start_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_m_Start_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "order-lg-0 example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Start"), /*#__PURE__*/React.createElement("p", null, "Once you\u2019re ready, press the Start button and put your phone face-down near to your bed. We\xA0recommend having your phone about an arm\u2019s length away from your face with the\xA0device\u2019s microphones facing towards you."))), /*#__PURE__*/React.createElement("div", {
    className: "example example-placement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-lg-1 example__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s example-title"
  }, "Placement"), /*#__PURE__*/React.createElement("p", null, "Having the phone face-down isn\u2019t vital \u2014 this simply allows you\xA0to keep the device unlocked whilst making use\xA0of\xA0the\xA0phone\u2019s proximity sensor to turn off the screen. This means that if you want to check your phone during the\xA0night, there aren\u2019t any annoying unlocking procedures to\xA0go\xA0through.")), /*#__PURE__*/React.createElement("div", {
    className: "order-lg-0 example-img how-works-main__example-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "example-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "737",
    height: "556",
    viewBox: "0 0 737 556",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M516.418 0L478.763 240.639L737 345.37L455.491 389.361L417.836 630L281.509 416.55L0 460.541L197.254 284.63L60.9271 71.18L319.164 175.911L516.418 0Z",
    fill: "#43CB83"
  }))), /*#__PURE__*/React.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyLoadImage, {
    src: _images_Placement_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_Placement_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_Placement_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  })))))));
};

/***/ }),

/***/ "./src/components/InsightAdvice.jsx":
/*!******************************************!*\
  !*** ./src/components/InsightAdvice.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsightAdvice": function() { return /* binding */ InsightAdvice; }
/* harmony export */ });
/* harmony import */ var _InsightSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightSection */ "./src/components/InsightSection.jsx");
/* harmony import */ var _images_insight_img_3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/insight-img-3.png */ "./src/images/insight-img-3.png");
/* harmony import */ var _images_insight_img_3_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/insight-img-3@2x.png */ "./src/images/insight-img-3@2x.png");
/* harmony import */ var _images_insight_img_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/insight-img-4.png */ "./src/images/insight-img-4.png");
/* harmony import */ var _images_insight_img_4_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/insight-img-4@2x.png */ "./src/images/insight-img-4@2x.png");
/* harmony import */ var _images_m_insight_img_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/m_insight-img-3.png */ "./src/images/m_insight-img-3.png");
/* harmony import */ var _images_m_insight_img_3_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/m_insight-img-3@2x.png */ "./src/images/m_insight-img-3@2x.png");
/* harmony import */ var _images_m_insight_img_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/m_insight-img-4.png */ "./src/images/m_insight-img-4.png");
/* harmony import */ var _images_m_insight_img_4_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/m_insight-img-4@2x.png */ "./src/images/m_insight-img-4@2x.png");
//import React, { useEffect, useState } from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;









var InsightAdvice = function InsightAdvice() {
  return /*#__PURE__*/React.createElement(_InsightSection__WEBPACK_IMPORTED_MODULE_0__.InsightSection, {
    className: "insight-advice",
    title: '1. Sleep on your side',
    marginBottom: 55
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-note insight-note_left-stick"
  }, /*#__PURE__*/React.createElement("p", null, "One of the simplest ways to combat your snoring is to make sure you sleep on your side.")), /*#__PURE__*/React.createElement("div", {
    className: "insight-text"
  }, /*#__PURE__*/React.createElement("p", null, "Sleeping on your back makes you far more likely to snore or\xA0experience sleep apnea; here, your jaw recedes, your tongue falls back, and weight on your neck compresses your upper airway. All\xA0of\xA0these disturb airflow and cause vibration [1]."), /*#__PURE__*/React.createElement("span", {
    className: "insight-text__list-title"
  }, "There are several ways to get yourself sleeping on your side:"), /*#__PURE__*/React.createElement("ul", {
    className: "insight-text__list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "insight-text__list-item"
  }, "Use pillows effectively. You can buy specialist pillows that promote side sleeping or you can use normal pillows to prop yourself up\xA0to\xA0prevent you rolling onto your back."), /*#__PURE__*/React.createElement("li", {
    className: "insight-text__list-item"
  }, "Make back sleeping difficult. The well-known method amongst many back-sleeping snorers is to", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link"
  }, "tape\xA0a\xA0tennis\xA0ball"), ' ', "to the back of\xA0your pajamas so that sleeping on your back is uncomfortable and practically impossible."), /*#__PURE__*/React.createElement("li", {
    className: "insight-text__list-item"
  }, "Positional trainers. There are devices that detect when you\xA0are\xA0sleeping on your back and give a small vibration which tells your subconscious mind that it is time to turn over."))), /*#__PURE__*/React.createElement("div", {
    className: "insight-img insight-img_without-border insight-img_with-note m-note-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    "data-img": "desktop",
    src: _images_insight_img_3_png__WEBPACK_IMPORTED_MODULE_1__,
    srcSet: "".concat(_images_insight_img_3_png__WEBPACK_IMPORTED_MODULE_1__, " 1x, ").concat(_images_insight_img_3_2x_png__WEBPACK_IMPORTED_MODULE_2__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    "data-img": "mobile",
    src: _images_m_insight_img_3_png__WEBPACK_IMPORTED_MODULE_5__,
    srcSet: "".concat(_images_m_insight_img_3_png__WEBPACK_IMPORTED_MODULE_5__, " 1x, ").concat(_images_m_insight_img_3_2x_png__WEBPACK_IMPORTED_MODULE_6__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Additional notes made on a session will appear in the Sleep Notes")), /*#__PURE__*/React.createElement("div", {
    className: "insight-img insight-img_without-border insight-img_with-note insight-img_text-left"
  }, /*#__PURE__*/React.createElement("img", {
    "data-img": "desktop",
    src: _images_insight_img_4_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_images_insight_img_4_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_images_insight_img_4_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    "data-img": "mobile",
    src: _images_m_insight_img_4_png__WEBPACK_IMPORTED_MODULE_7__,
    srcSet: "".concat(_images_m_insight_img_4_png__WEBPACK_IMPORTED_MODULE_7__, " 1x, ").concat(_images_m_insight_img_4_2x_png__WEBPACK_IMPORTED_MODULE_8__, " 2x"),
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Inconsistent snoring patterns with obvious pauses could indicate risky breathing periods. This was given to\xA0us\xA0by\xA0a\xA0SnoreLab user who went on to get a sleep apnea diagnosis.")), /*#__PURE__*/React.createElement("div", {
    className: "insight-note insight-note_advice"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_size-s insight-note__title"
  }, "Read SnoreLab\u2019s full article on specialist anti-snoring pillows"), /*#__PURE__*/React.createElement("div", {
    className: "insight-text"
  }, /*#__PURE__*/React.createElement("p", null, "We often get asked if SnoreLab can use recorded snoring to\xA0find sleep apnea. It\xA0is important to note that SnoreLab is\xA0not an automatic sleep apnea detector."), /*#__PURE__*/React.createElement("p", null, "Sleep apnea does often have some very distinctive sounds. Whilst SnoreLab could detect this typical sound profile, apnea events are\xA0not\xA0actually defined by sound."), /*#__PURE__*/React.createElement("p", null, "An apnea is a period during sleep where breathing stops and\xA0is\xA0therefore identified by measuring both breathing effort and\xA0airflow (or lack thereof). A\xA0drop in blood oxygen saturation also helps to confirm. Measuring this requires specialist equipment beyond the reach of a consumer app."), /*#__PURE__*/React.createElement("p", null, "In SnoreLab, you can search your session for risky sounds using Full Night Recording mode to ensure that every sound and event is\xA0captured."), /*#__PURE__*/React.createElement("p", null, "Some users have used this feature to discover sounds in\xA0their recordings that suggested apnea events. They have then found them useful in\xA0subsequent medical consultations. For many people, SnoreLab has helped flag sleep apnea they weren\u2019t aware that they had."))));
};

/***/ }),

/***/ "./src/components/InsightDownload.jsx":
/*!********************************************!*\
  !*** ./src/components/InsightDownload.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsightDownload": function() { return /* binding */ InsightDownload; }
/* harmony export */ });
/* harmony import */ var _images_google_play_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/google-play.svg */ "./src/images/google-play.svg");
/* harmony import */ var _images_app_store_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/app-store.svg */ "./src/images/app-store.svg");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;


var InsightDownload = function InsightDownload() {
  return /*#__PURE__*/React.createElement("section", {
    className: "insight-download-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-download__wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-svg": "decorative",
    width: "1122",
    height: "425",
    viewBox: "0 0 1122 425",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M786.189 0L728.863 162.336L1122 232.988L693.434 262.664L636.109 425L428.566 281.006L0 310.683L300.297 192.012L92.7547 48.0183L485.891 118.67L786.189 0Z",
    fill: "#1A25EF",
    fillOpacity: "0.6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-download__info-apps"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://play.google.com/store/apps/details?id=com.snorelab.app",
    className: "link insight-download__info-app google-play-btn"
  }, /*#__PURE__*/React.createElement("img", {
    src: _images_google_play_svg__WEBPACK_IMPORTED_MODULE_0__,
    alt: "google play"
  })), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://itunes.apple.com/app/id529443604",
    className: "link insight-download__info-app app-store-btn"
  }, /*#__PURE__*/React.createElement("img", {
    src: _images_app_store_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "app store"
  }))))));
};

/***/ }),

/***/ "./src/components/ProductBottom.jsx":
/*!******************************************!*\
  !*** ./src/components/ProductBottom.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBottom": function() { return /* binding */ ProductBottom; }
/* harmony export */ });
/* harmony import */ var _images_product_star_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/product-star.png */ "./src/images/product-star.png");
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var ProductBottom = function ProductBottom(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/React.createElement("section", {
    className: "product-bottom"
  }, /*#__PURE__*/React.createElement("img", {
    className: "product-bottom__bg",
    alt: "",
    src: _images_product_star_png__WEBPACK_IMPORTED_MODULE_0__
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-bottom__block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-bottom__title",
    dangerouslySetInnerHTML: {
      __html: product.data.acf.bottom_title
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "product-bottom__link",
    target: "_blank",
    href: product.data.acf.bottom_button_link,
    dangerouslySetInnerHTML: {
      __html: product.data.acf.bottom_button_text
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "product-bottom__line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "product-bottom__subscript"
  }, "Snorelab only endores products that we have tested and verified give great result for our users. We earn a small comission on purchases made through our app and website wich supports the app's development at no extra cost to you.")));
};

/***/ }),

/***/ "./src/components/ProductFullReview.jsx":
/*!**********************************************!*\
  !*** ./src/components/ProductFullReview.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFullReview": function() { return /* binding */ ProductFullReview; }
/* harmony export */ });
/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/usePost */ "./src/hooks/usePost.jsx");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _images_mouthpiece_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mouthpiece.png */ "./src/images/mouthpiece.png");
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useEffect = _wp$element.useEffect;



var ProductFullReview = function ProductFullReview(_ref) {
  var product = _ref.product;
  var post = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_0__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100', product.data.acf.product_full_review_post.post_name, {});
  useEffect(function () {
    console.log('post');
    console.log(post);
  }, [post]);
  var tags = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});
  return /*#__PURE__*/React.createElement("section", {
    className: "product-full-review"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__subscript"
  }, product.data.acf.product_full_review_title), post.data ? /*#__PURE__*/React.createElement("a", {
    href: post.data.link,
    className: "product-full-review-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__left-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__tags"
  }, tags.data ? post.data.categories.map(function (tag, i, arr) {
    var tagData = tags.data.find(function (item) {
      return item.id === tag;
    });

    if (!tagData) {
      return null;
    }

    return /*#__PURE__*/React.createElement("span", {
      key: tagData.id
    }, /*#__PURE__*/React.createElement("a", {
      className: "link",
      href: '/insights/?category=' + tagData.slug,
      dangerouslySetInnerHTML: {
        __html: tagData.name
      }
    }), i === arr.length - 1 ? '' : ' , ');
  }) : ''), /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__title",
    dangerouslySetInnerHTML: {
      __html: post.data.title.rendered
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__center-block",
    dangerouslySetInnerHTML: {
      __html: post.data.excerpt.rendered
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "product-full-review__right-block",
    style: {
      background: "url(".concat(post.data.fimg_url, ") no-repeat center center / cover")
    }
  })) : ''));
};

/***/ }),

/***/ "./src/components/ProductInfo.jsx":
/*!****************************************!*\
  !*** ./src/components/ProductInfo.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductInfo": function() { return /* binding */ ProductInfo; }
/* harmony export */ });
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;
var ProductInfo = function ProductInfo(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/React.createElement("section", {
    className: "product-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-info__title"
  }, "Product information"), /*#__PURE__*/React.createElement("div", {
    className: "product-info__text"
  }, /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: product.data.acf.product_info_text
    }
  }), product.data.acf.product_info_items && product.data.acf.product_info_items.map(function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, item.product_info_item_title ? /*#__PURE__*/React.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: item.product_info_item_title
      }
    }) : '', item.product_info_item_text ? /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.product_info_item_text
      }
    }) : '');
  })))));
};

/***/ }),

/***/ "./src/components/ProductMain.jsx":
/*!****************************************!*\
  !*** ./src/components/ProductMain.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductMain": function() { return /* binding */ ProductMain; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _images_product_main_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/product-main.png */ "./src/images/product-main.png");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");

var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useState = _wp$element.useState;


var ProductMain = function ProductMain(_ref) {
  var product = _ref.product;

  var _useState = useState(product.data.acf.product_gallery[0].product_gallery_image.url),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      mainImg = _useState2[0],
      setMainImg = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      activeImg = _useState4[0],
      setActiveImg = _useState4[1];

  var handleImageClick = function handleImageClick(e) {
    var number = Number(e.target.id.split('-').reverse()[0]);
    setActiveImg(number);
    setMainImg(product.data.acf.product_gallery[number].product_gallery_image.url);
    e.currentTarget.classList.add('img-active');
  };

  console.log('product main');
  console.log(product);
  return /*#__PURE__*/React.createElement("section", {
    className: "product-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-main-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prodcut-main__gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prodcut-main__main-image-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prodcut-main__main-image",
    style: {
      background: "url(".concat(mainImg, ") center center / cover")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "prodcut-main__images"
  }, product.data.acf.product_gallery && product.data.acf.product_gallery.map(function (image, idx) {
    return /*#__PURE__*/React.createElement("div", {
      className: "prodcut-main__image ".concat(activeImg === idx ? 'active-img' : ''),
      style: {
        background: "url(".concat(image.product_gallery_image.url, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      id: "product-img-".concat(idx),
      onClick: handleImageClick
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "prodcut-main__images images-mobile"
  }, /*#__PURE__*/React.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
    spaceBetween: 5,
    slidesPerView: 4.5,
    onSwiper: function onSwiper(swiper) {
      return console.log(swiper);
    },
    loop: true,
    initialSlide: 0
  }, product.data.acf.product_gallery && product.data.acf.product_gallery.map(function (image, idx) {
    return /*#__PURE__*/React.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "prodcut-main__image ".concat(activeImg === idx ? 'active-img' : ''),
      style: {
        background: "url(".concat(image.product_gallery_image.url, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      id: "product-img-".concat(idx),
      onClick: handleImageClick
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "product-main__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-main__icons"
  }, product.data.acf.product_preview_icons && product.data.acf.product_preview_icons.map(function (icon) {
    return /*#__PURE__*/React.createElement("img", {
      className: "product-main__icon",
      src: icon.product_preview_icon.url,
      alt: "icon"
    });
  })), /*#__PURE__*/React.createElement("h1", {
    className: "product-main__name",
    dangerouslySetInnerHTML: {
      __html: product.data.title.rendered
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "product-main__description",
    dangerouslySetInnerHTML: {
      __html: product.data.acf.product_top_text
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "product-main__info-bottom"
  }, product.data.acf.product_price ? /*#__PURE__*/React.createElement("div", {
    className: "product-main__price"
  }, "$", product.data.acf.product_price) : '', product.data.acf.product_discount_text ? /*#__PURE__*/React.createElement("div", {
    className: "product-main__price-discount",
    dangerouslySetInnerHTML: {
      __html: product.data.acf.product_discount_text
    }
  }) : '', /*#__PURE__*/React.createElement("a", {
    className: "product-main__link",
    href: product.data.acf.product_buy_button_link,
    target: "_blank",
    dangerouslySetInnerHTML: {
      __html: product.data.acf.product_buy_button_text
    }
  }))))));
};

/***/ }),

/***/ "./src/components/ProductRemedies.jsx":
/*!********************************************!*\
  !*** ./src/components/ProductRemedies.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRemedies": function() { return /* binding */ ProductRemedies; }
/* harmony export */ });
/* harmony import */ var _images_mouth_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/mouth.svg */ "./src/images/mouth.svg");
/* harmony import */ var _images_lips_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/lips.svg */ "./src/images/lips.svg");
/* harmony import */ var _images_remedies_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/remedies.png */ "./src/images/remedies.png");
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;



var ProductRemedies = function ProductRemedies(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/React.createElement("section", {
    className: "product-remedies"
  }, /*#__PURE__*/React.createElement("img", {
    className: "product-remedies__bg",
    src: _images_remedies_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-remedies-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-remedies__title",
    dangerouslySetInnerHTML: {
      __html: product.data.acf.product_remedies_title
    }
  }), product.data.acf.product_remedies_icons ? /*#__PURE__*/React.createElement("div", {
    className: "product-remedies__icons"
  }, product.data.acf.product_remedies_icons.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-remedies__circle"
    }, /*#__PURE__*/React.createElement("img", {
      className: "product-remedies__lips",
      src: item.product_remedies_icon.url,
      alt: ""
    }));
  })) : '')));
};

/***/ }),

/***/ "./src/components/ProductReviews.jsx":
/*!*******************************************!*\
  !*** ./src/components/ProductReviews.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductReviews": function() { return /* binding */ ProductReviews; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _images_review_star_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/review-star.svg */ "./src/images/review-star.svg");

var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var ProductReviews = function ProductReviews(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/React.createElement("section", {
    className: "product-reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-reviews-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-reviews__title"
  }, "Reviews"), /*#__PURE__*/React.createElement("div", {
    className: "product-reviews__items"
  }, product.data.acf.product_reviews_items && product.data.acf.product_reviews_items.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-review"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-review__top"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "product-review__title",
      dangerouslySetInnerHTML: {
        __html: item.product_review_title
      }
    }), /*#__PURE__*/React.createElement("div", {
      "class": "product-review__stars"
    }, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(Number(item.product_review_stars))).map(function (x, i) {
      return /*#__PURE__*/React.createElement("img", {
        src: _images_review_star_svg__WEBPACK_IMPORTED_MODULE_1__,
        key: "star-".concat(i),
        alt: "",
        "class": "product-review__star"
      });
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "product-review__text",
      dangerouslySetInnerHTML: {
        __html: item.product_review_text
      }
    }), /*#__PURE__*/React.createElement("div", {
      "class": "product-review__author"
    }, "by ", item.product_review_author));
  })))));
};

/***/ }),

/***/ "./src/components/SuccessStoriesBottom.jsx":
/*!*************************************************!*\
  !*** ./src/components/SuccessStoriesBottom.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessStoriesBottom": function() { return /* binding */ SuccessStoriesBottom; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var SuccessStoriesBottom = function SuccessStoriesBottom() {
  var _useState = useState('not voted'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isPostHelpful = _useState2[0],
      setIsPostHelpful = _useState2[1];

  useEffect(function () {
    var storageKey = 'success stories';
    var lastVote = localStorage.getItem(storageKey);
    console.log(lastVote);

    if (lastVote !== null) {
      setIsPostHelpful('voted');
    }
  }, []);

  var handleYesClick = function handleYesClick() {
    setIsPostHelpful(true);
    var storageKey = 'success stories';
    localStorage.setItem(storageKey, true);
  };

  var handleNoClick = function handleNoClick() {
    setIsPostHelpful(false);
    var storageKey = 'success stories';
    localStorage.setItem(storageKey, false);
  };

  var handleCancelClick = function handleCancelClick() {
    setIsPostHelpful('not voted');
    var storageKey = 'success stories';
    localStorage.removeItem(storageKey);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "how-works__intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works__intro-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works__intro-text"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1169",
    height: "218",
    viewBox: "0 0 1169 218",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M819.122 0L759.395 83.2686L1169 119.509L722.482 134.731L662.755 218L446.518 144.139L0 159.362L312.877 98.4911L96.6401 24.6305L506.245 60.8708L819.122 0Z",
    fill: "#1A25EF",
    fillOpacity: "0.8"
  })), /*#__PURE__*/React.createElement("p", null, "Do you have an experience of SnoreLab you\u2019d like to share? We\u2019d love to hear from you. Please contact us on", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "mailto:support@snorelab.com"
  }, "support@snorelab.com"), "or send us a message on", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "https://www.facebook.com/"
  }, "Facebook"), "or", ' ', /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "https://twitter.com/"
  }, "Twitter")))))), /*#__PURE__*/React.createElement("section", {
    className: "how-works__review"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-works__review-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-review__content",
    style: isPostHelpful === 'not voted' ? {
      display: 'block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title title_fade-s insight-review__title"
  }, "Let us know if you liked the post. That\u2019s the only way we can improve."), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__note"
  }, /*#__PURE__*/React.createElement("p", null, "Was this post helpful?")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "link btn btn-arrow insight-review__btn",
    onClick: handleYesClick
  }, /*#__PURE__*/React.createElement("div", null, "Yes")), /*#__PURE__*/React.createElement("button", {
    className: "link btn btn-arrow btn_gray-text insight-review__btn",
    onClick: handleNoClick
  }, /*#__PURE__*/React.createElement("div", null, "No")))), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__feedback",
    style: isPostHelpful === true ? {
      display: 'inline-block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Thank you for your feedback!")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__feedback",
    style: isPostHelpful === 'voted' ? {
      display: 'inline-block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", null, "You have already voted for this post")), /*#__PURE__*/React.createElement("div", {
    className: "insight-review__form",
    style: isPostHelpful === false ? {
      display: 'block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "insight-review__text"
  }, "Sorry to hear that this article was not helpful. We pride ourselves on being the best online resource for snoring and sleep apnea information so please leave a comment to help us improve our website's content."), /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "feedback-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Message*"), /*#__PURE__*/React.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/React.createElement("textarea", {
    required: true,
    className: "careers-form__textarea",
    type: "text",
    name: "message"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "careers-form__field"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title title_fade careers-form__field-title"
  }, "Name*"), /*#__PURE__*/React.createElement("span", {
    className: "careers-form__input-border"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "careers-form__input",
    type: "text",
    name: "name"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "careers-form__submit-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn careers-form__cancel",
    onClick: handleCancelClick
  }, /*#__PURE__*/React.createElement("div", null, "Cancel")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "careers-form__submit"
  }, "Send feedback"))))))));
};

/***/ }),

/***/ "./src/components/SuccessStoriesMain.jsx":
/*!***********************************************!*\
  !*** ./src/components/SuccessStoriesMain.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessStoriesMain": function() { return /* binding */ SuccessStoriesMain; }
/* harmony export */ });
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Dashboard_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Dashboard.png */ "./src/images/Dashboard.png");
/* harmony import */ var _images_Dashboard_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Dashboard@2x.png */ "./src/images/Dashboard@2x.png");
/* harmony import */ var _images_Audio_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Audio.png */ "./src/images/Audio.png");
/* harmony import */ var _images_Audio_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Audio@2x.png */ "./src/images/Audio@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;





var SuccessStoriesMain = function SuccessStoriesMain() {
  return /*#__PURE__*/React.createElement("section", {
    className: "success-stories-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "success-stories-main__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "success-stories-main__info"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title title_fade title_size-l success-stories-main__title"
  }, "SnoreLab Success Stories")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__text"
  }, /*#__PURE__*/React.createElement("p", null, "SnoreLab was created out of desire to help people and we love hearing stories about the app achieving just that. This page is a collection of genuine user stories taken from iTunes user reviews."), /*#__PURE__*/React.createElement("p", null, "You\u2019ll notice that everyone has a different snoring trigger and hence a different snoring solution. SnoreLab aims to help you find those triggers to get the solution that works for you\u2026")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__stories"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "For some snorers, weight loss can be a powerful tool:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, "I had a very high snore score and thought I tried everything. I was diagnosed with asthma after allergy tests came back normal. I started asthma treatment and my score is now 0. I watched the SnoreLab graph drop over the last 4 months. I am amazed. My snoring was caused by asthma. I\u2019m now able to sleep longer and feel rested. I also ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "lost 25 pounds"), ". Amazing how awesome I feel after I sleep thru out the night without getting \u201Celbowed\u201D by my spouse and being able to breath.")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "Often, allergies and hay fever can worsen snoring:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, "\u201CUsing this product I identified ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "hay fever as the source of\xA0my\xA0snoring"), ". Adding a Tempur pillow and a hay fever remedy has had a dramatic effect after one week, more energy, ability to\xA0concentrate after getting a good nights sleep. Went from a\xA0score of plus fifty to less than 10 in one week. Brilliant!\u201D")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "Sometimes, just simple weather changes or the climate you live in can make you snore:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, "\u201CLove this app \u2014 I live in a very dry climate \u2014 after several scores between 35 and 50 \u2014 I bought a ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "humidifier"), " and now my score was 7!\u201D")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "For many of our users, anti-snoring mouthpieces can massively reduce snoring:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CIf you snore, think you snore or are positive that you don\u2019t snore: get this app! For me, it app proved to me that I did snore. The problem was how to fix it. I started with ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "nasal strips"), " and nasal sprays. The app proved that these remedies had no effect, so\xA0I\xA0decided to buy a snore guard (", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "SnoreRx"), ") and viola\u2026 no\xA0snoring! How do I know? This app records you all night long, graphs snoring episodes and the intensity and gives you a Snore Score. Before the device, my Snore Scores were between 15 and 45. Since the device, my scores are 1 to 3! I\u2019m also starting to feel refreshed in the morning.\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CAfter a few nights, I bought the upgrade to this app. It\u2019s both the most expensive app I\u2019ve ever bought, and some of the best money I\u2019ve ever spent. I have been experimenting with different types of\xA0anti-snore devices to see what works best and is most comfortable for me, and this app helped me quickly and objectively rate how effective they are at preventing me from snoring. The interface is easy, and it supports every feature I\xA0wanted. After spending literally thousands of dollars on sleep medicine doctors, I\u2019m now sleeping better after using this app to\xA0help me choose between a few, comparatively inexpensive, over-the-counter remedies. This ended up far more effective than I\xA0had imagined (specifically for me, ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "the tongue-retention class of\xA0device"), "), and this app helped me do it in a couple of weeks (and I\xA0knew what was and was not working after each night!)\u201D"))), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "We hear from plenty of users who attribute their snoring to sleeping position. Specialist pillows can be invaluable in these instances:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CThis app is brilliant. It proved my theory that I snore when I sleep on my back and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "I don\u2019t snore when I sleep on my side"), ". What a\xA0great idea this app is!!! I have chronic health problems and, without a good night\u2019s sleep, I just can\u2019t function. So it\u2019s very important to know how to get the best, and most restful sleep. I\xA0can also share that arthritis and a poor mattress had made sleeping on my side all but impossible for many years and, during that time, I became a walking zombie from snoring and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "sleep apnea"), ". I NEVER felt rested and could fall asleep ANYWHERE on\xA0a\xA0dime (and give you 9-cents change). For example: when I\xA0stopped the car at traffic lights and stop signs (it\u2019s the God\u2019s-Honest Truth). Then, I got a foam mattress from IKEA and voil\xE1! I\xA0sleep comfortably on my side again! And what a dramatic difference it has made in my life! I wake up feeling REFRESHED! A\xA0sensation I had forgotten entirely. I wish the same sweet recovery for all of you who wake up every morning feeling like what you really need is \u2026 another 8 hours of sleep! Snore less and sleep more \u2013 you\u2019re gonna LOVE it!\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CWhen I first started using the App my Snore Index was anywhere between 50 and 96. I started to try some of the different Remedies. Bought a wedge pillow and in one night my Snore Index went down to near zero and has stayed near zero ever since using the pillow \u2013 and is actually zero most nights. Had seen three doctors, two specialists, one dentist and had a sleep study conducted \u2013 they all pointed me to dental appliances which I had troubles wearing due to a gag reflex. None had suggested a\xA0", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "wedge pillow"), ". Thank you Snore Lab!\u201D"))), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "Sometimes, a problem as simple as a blocked nose can cause snoring:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CI have used this app for six weeks now. I have adjusted my ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "sinus aids"), " and my snoring has reduced from 210 to 60! I can be a ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "travel"), " companion once again!\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CI started using Snore Lab on the 23rd of January (a week ago), first on its own and now I use ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "nasal strips"), " at night. My wife has not had to get out of bed and go to another bedroom at all. I was supposed to see a doctor today at a sleep clinic where I went back in November, but I cancelled the appointment as I know what he\xA0was going to say \u201Cyou suffer from sleep apnea\u201D and here\u2019s the solution!! The CPAP mask. Enough already, if I wanted to wear a\xA0mask I\u2019d go nuts. Thank you SnoreLab, keep doing your thing!\u201D"))), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "SnoreLab can also be very useful in medical consultations:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CGreat app to monitor the severity of your own snoring and take to\xA0doctor to play the audio. Saved me from another ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "sleep study"), " in\xA0the lab.\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CThis is a fantastic app. It really gives you a great concept of your snoring pattern and how long you sleep for. In the end I learned I\xA0have severe case of ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "sleep apnea"), ".\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CI\u2019ve never really understood why my wife wears earplugs to bed. This app has allowed me to record and track my nightly racket and convince me that a ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "sleep apnea test"), " should be next. Life changing app.\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CNow that I can hear what I sound like, I have been able to act upon my snoring and have reduced it significantly. Truly great app!\u201D"))), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "The app is widely acclaimed by dentists and medical professionals:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, "\u201CAs a qualified ABDSM dentist who exclusively treats obstructive sleep apnea patients using oral appliances, we sometimes struggle to have fast, easy, objective metrics for our patients to see and appreciate. SnoreLab gives us that and then some! We have all of our patients download SnoreLab at their consult appointment and use the data to help them confirm their condition. After treatment they can see the results immediately the next morning. They experience vast improvements in snoring scores. They will still have to undergo a follow up sleep test to confirm the treatment is successful, but this quick and easy app helps them see the changes right away.\u201D")), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-title"
  }, "We aim to give you understanding of your snoring problem so you can make the most appropriate changes:"), /*#__PURE__*/React.createElement("div", {
    "class": "success-stories-main__story-text"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CThis app is a revelation. For the first time I feel in control of\xA0my\xA0snoring problem. I can monitor scientifically what exacerbates and what alleviates the problem. I feel certain now I\xA0can cure the problem and get my wife back to our bed! Thank you SnoreLab.\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CHelped an Epic snorer! Simple to use and has customisable features to personalise your war against the snore. Helps to show your patterns and records them. Quite frightening but useful. Helped me identify remedies and lifestyle patterns that impacted on my \u2018snore\u2019 . Now obsessed by the nightly graphs.\u201D"), /*#__PURE__*/React.createElement("p", null, "\u201CThis is the best sleep recorder I have tried. While it doesn\u2019t do\xA0anything directly to cut down on your snoring, it is helpful to\xA0know how loud your snoring is. It allows you to test out various ways to cut down on snoring. I\u2019m down 40 plus percent in just two weeks!\u201D")))))));
};

/***/ }),

/***/ "./src/pages/About.jsx":
/*!*****************************!*\
  !*** ./src/pages/About.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": function() { return /* binding */ About; }
/* harmony export */ });
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AboutPage */ "./src/components/AboutPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var About = function About() {
  return /*#__PURE__*/React.createElement("main", {
    className: "about"
  }, /*#__PURE__*/React.createElement(_components_AboutPage__WEBPACK_IMPORTED_MODULE_0__.AboutPage, null));
};

/***/ }),

/***/ "./src/pages/Careers.jsx":
/*!*******************************!*\
  !*** ./src/pages/Careers.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Careers": function() { return /* binding */ Careers; }
/* harmony export */ });
/* harmony import */ var _components_CareersPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CareersPage */ "./src/components/CareersPage.jsx");
//import React, { useRef } from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useRef = _wp$element.useRef;

var Careers = function Careers() {
  var blockerRef = useRef(null);
  return /*#__PURE__*/React.createElement("main", {
    className: "careers"
  }, /*#__PURE__*/React.createElement(_components_CareersPage__WEBPACK_IMPORTED_MODULE_0__.CareersPage, {
    ref: blockerRef
  }), /*#__PURE__*/React.createElement("div", {
    id: "careers-form-modal",
    className: "blocker",
    ref: blockerRef
  }));
};

/***/ }),

/***/ "./src/pages/Contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var _components_ContactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContactPage */ "./src/components/ContactPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Contact = function Contact() {
  return /*#__PURE__*/React.createElement("main", {
    className: "contact"
  }, /*#__PURE__*/React.createElement(_components_ContactPage__WEBPACK_IMPORTED_MODULE_0__.ContactPage, null));
};

/***/ }),

/***/ "./src/pages/Epworth.jsx":
/*!*******************************!*\
  !*** ./src/pages/Epworth.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Epworth": function() { return /* binding */ Epworth; }
/* harmony export */ });
/* harmony import */ var _components_EpworthQuestionnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EpworthQuestionnaire */ "./src/components/EpworthQuestionnaire.jsx");
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Share */ "./src/components/Share.jsx");
/* harmony import */ var _components_InsightsAssess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InsightsAssess */ "./src/components/InsightsAssess.jsx");
/* harmony import */ var _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/stop-bang.png */ "./src/images/stop-bang.png");
/* harmony import */ var _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/stop-bang@2x.png */ "./src/images/stop-bang@2x.png");
/* harmony import */ var _images_screening_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/screening.png */ "./src/images/screening.png");
/* harmony import */ var _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/screening@2x.png */ "./src/images/screening@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;








var questionnaireArticles = [{
  title: 'Sleep Apnea: Screening, Testing and Treatment',
  link: 'stopbang',
  image: {
    '1x': _images_screening_png__WEBPACK_IMPORTED_MODULE_6__,
    '2x': _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_7__
  }
}, {
  title: 'What is Sleep Apnea?',
  link: 'stopbang',
  image: {
    '1x': _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_4__,
    '2x': _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_5__
  }
}];
var Epworth = function Epworth() {
  return /*#__PURE__*/React.createElement("main", {
    className: "epworth"
  }, /*#__PURE__*/React.createElement(_components_EpworthQuestionnaire__WEBPACK_IMPORTED_MODULE_0__.EpworthQuestionnaire, null), /*#__PURE__*/React.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_2__.Share, {
    title: "Share",
    links: _helpers_variables__WEBPACK_IMPORTED_MODULE_1__.shareQuestionnaireLinks
  }), /*#__PURE__*/React.createElement(_components_InsightsAssess__WEBPACK_IMPORTED_MODULE_3__.InsightsAssess, {
    light: false,
    titleClass: "title_fade-s",
    titleText: window.innerWidth > 991 ? 'Learn more about obstructive sleep apnea' : 'Related articles',
    articles: questionnaireArticles
  }));
};

/***/ }),

/***/ "./src/pages/Faq.jsx":
/*!***************************!*\
  !*** ./src/pages/Faq.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Faq": function() { return /* binding */ Faq; }
/* harmony export */ });
/* harmony import */ var _components_FaqPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FaqPage */ "./src/components/FaqPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Faq = function Faq() {
  return /*#__PURE__*/React.createElement("main", {
    className: "faq"
  }, /*#__PURE__*/React.createElement(_components_FaqPage__WEBPACK_IMPORTED_MODULE_0__.FaqPage, null));
};

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _components_HomeMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomeMain */ "./src/components/HomeMain.jsx");
/* harmony import */ var _components_HomeDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeDescription */ "./src/components/HomeDescription.jsx");
/* harmony import */ var _components_HomeReviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeReviews */ "./src/components/HomeReviews.jsx");
/* harmony import */ var _components_PartnerApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PartnerApp */ "./src/components/PartnerApp.jsx");
/* harmony import */ var _components_HomeInsights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeInsights */ "./src/components/HomeInsights.jsx");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/star.png */ "./src/images/star.png");
/* harmony import */ var _images_star_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/star-2.png */ "./src/images/star-2.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;
 //const { createElement, render } = wp.element;








var Home = function Home() {
  var descriptionCards = [];
  var appCards = [];
  var homeData = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_0__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/pages?slug=home-page', {});

  if (homeData.data) {
    descriptionCards = homeData.data[0].acf.description_cards;
    appCards = homeData.data[0].acf.partner_description_cards;
  }

  return /*#__PURE__*/React.createElement("main", {
    className: "home"
  }, /*#__PURE__*/React.createElement(_components_HomeMain__WEBPACK_IMPORTED_MODULE_1__.HomeMain, null), /*#__PURE__*/React.createElement(_components_HomeDescription__WEBPACK_IMPORTED_MODULE_2__.HomeDescription, {
    cards: descriptionCards
  }), /*#__PURE__*/React.createElement(_components_HomeReviews__WEBPACK_IMPORTED_MODULE_3__.HomeReviews, null), /*#__PURE__*/React.createElement(_components_PartnerApp__WEBPACK_IMPORTED_MODULE_4__.PartnerApp, {
    cards: appCards
  }), /*#__PURE__*/React.createElement(_components_HomeInsights__WEBPACK_IMPORTED_MODULE_5__.HomeInsights, null), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-1",
    alt: "",
    src: _images_star_png__WEBPACK_IMPORTED_MODULE_6__
  }), /*#__PURE__*/React.createElement("img", {
    className: "bg-light-2",
    alt: "",
    src: _images_star_2_png__WEBPACK_IMPORTED_MODULE_7__
  }));
};

/***/ }),

/***/ "./src/pages/HowWorks.jsx":
/*!********************************!*\
  !*** ./src/pages/HowWorks.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWorks": function() { return /* binding */ HowWorks; }
/* harmony export */ });
/* harmony import */ var _components_HowWorksMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/HowWorksMain */ "./src/components/HowWorksMain.jsx");
/* harmony import */ var _components_HowWorksSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HowWorksSelect */ "./src/components/HowWorksSelect.jsx");
/* harmony import */ var _components_HowWorksMake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HowWorksMake */ "./src/components/HowWorksMake.jsx");
/* harmony import */ var _components_HowWorksStart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HowWorksStart */ "./src/components/HowWorksStart.jsx");
/* harmony import */ var _components_HowWorksSleep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HowWorksSleep */ "./src/components/HowWorksSleep.jsx");
/* harmony import */ var _components_HowWorksSee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HowWorksSee */ "./src/components/HowWorksSee.jsx");
/* harmony import */ var _components_HowWorksNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HowWorksNotes */ "./src/components/HowWorksNotes.jsx");
/* harmony import */ var _components_HowWorksIntro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HowWorksIntro */ "./src/components/HowWorksIntro.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;








var HowWorks = function HowWorks() {
  return /*#__PURE__*/React.createElement("main", {
    className: "how-works"
  }, /*#__PURE__*/React.createElement(_components_HowWorksMain__WEBPACK_IMPORTED_MODULE_0__.HowWorksMain, null), /*#__PURE__*/React.createElement(_components_HowWorksSelect__WEBPACK_IMPORTED_MODULE_1__.HowWorksSelect, null), /*#__PURE__*/React.createElement(_components_HowWorksMake__WEBPACK_IMPORTED_MODULE_2__.HowWorksMake, null), /*#__PURE__*/React.createElement(_components_HowWorksStart__WEBPACK_IMPORTED_MODULE_3__.HowWorksStart, null), /*#__PURE__*/React.createElement(_components_HowWorksSleep__WEBPACK_IMPORTED_MODULE_4__.HowWorksSleep, null), /*#__PURE__*/React.createElement(_components_HowWorksSee__WEBPACK_IMPORTED_MODULE_5__.HowWorksSee, null), /*#__PURE__*/React.createElement(_components_HowWorksNotes__WEBPACK_IMPORTED_MODULE_6__.HowWorksNotes, null), /*#__PURE__*/React.createElement(_components_HowWorksIntro__WEBPACK_IMPORTED_MODULE_7__.HowWorksBottom, null));
};

/***/ }),

/***/ "./src/pages/Insight.jsx":
/*!*******************************!*\
  !*** ./src/pages/Insight.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Insight": function() { return /* binding */ Insight; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/usePost */ "./src/hooks/usePost.jsx");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_InsightSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InsightSection */ "./src/components/InsightSection.jsx");
/* harmony import */ var _components_InsightMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InsightMain */ "./src/components/InsightMain.jsx");
/* harmony import */ var _components_InsightAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InsightAdvice */ "./src/components/InsightAdvice.jsx");
/* harmony import */ var _components_InsightStudies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InsightStudies */ "./src/components/InsightStudies.jsx");
/* harmony import */ var _components_InsightReview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/InsightReview */ "./src/components/InsightReview.jsx");
/* harmony import */ var _components_InsightDownload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InsightDownload */ "./src/components/InsightDownload.jsx");
/* harmony import */ var _components_References__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/References */ "./src/components/References.jsx");
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Share */ "./src/components/Share.jsx");
/* harmony import */ var _components_InsightsRelative__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/InsightsRelative */ "./src/components/InsightsRelative.jsx");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'html-react-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/loader.gif */ "./src/images/loader.gif");

//import React, { useEffect } from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;


 //const { createElement, render, useEffect } = wp.element;














var Insight = function Insight() {
  var _useState = useState(window.location.href),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentPath = _useState2[0],
      setCurrentPath = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      currentSlug = _useState4[0],
      setCurrentSlug = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      currentTags = _useState6[0],
      setCurrentTags = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      loaded = _useState8[0],
      setLoaded = _useState8[1];

  var post = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100', currentSlug, {});
  useEffect(function () {
    var reversedPath = currentPath.split('/').reverse();
    var slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];
    console.log(slug);
    setCurrentSlug(slug);
  }, [currentPath]);
  useEffect(function () {
    window.addEventListener('load', _helpers_functions__WEBPACK_IMPORTED_MODULE_14__.calculateTextWidth);

    window.onresize = function () {
      return (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_14__.calculateTextWidth)();
    };

    return function () {
      window.removeEventListener('load', _helpers_functions__WEBPACK_IMPORTED_MODULE_14__.calculateTextWidth);
    };
  }, [post]);

  if (post.data) {
    return /*#__PURE__*/React.createElement("main", {
      className: "insight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "insight-wrapper"
    }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'html-react-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(post.data.content.rendered), /*#__PURE__*/React.createElement(_components_InsightReview__WEBPACK_IMPORTED_MODULE_8__.InsightReview, {
      post: post
    }), /*#__PURE__*/React.createElement(_components_InsightDownload__WEBPACK_IMPORTED_MODULE_9__.InsightDownload, null), post.data.acf.post_references ? /*#__PURE__*/React.createElement(_components_References__WEBPACK_IMPORTED_MODULE_10__.References, {
      references: post.data.acf.post_references
    }) : '', /*#__PURE__*/React.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_12__.Share, {
      title: "Share this article",
      links: _helpers_variables__WEBPACK_IMPORTED_MODULE_11__.shareInsightLinks
    })), /*#__PURE__*/React.createElement(_components_InsightsRelative__WEBPACK_IMPORTED_MODULE_13__.InsightsRelative, {
      relatedPosts: post.data.acf.related_articles
    }));
  } else {
    return /*#__PURE__*/React.createElement("main", {
      className: "insight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "insight-wrapper"
    }, /*#__PURE__*/React.createElement("img", {
      className: "insight-loader",
      alt: "",
      src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_16__
    }), /*#__PURE__*/React.createElement("div", {
      className: "insight-loader-title"
    }, "Loading...")));
  }
};

/***/ }),

/***/ "./src/pages/Insights.jsx":
/*!********************************!*\
  !*** ./src/pages/Insights.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Insights": function() { return /* binding */ Insights; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_InsightsTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InsightsTabs */ "./src/components/InsightsTabs.jsx");
/* harmony import */ var _components_InsightsFeautured__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InsightsFeautured */ "./src/components/InsightsFeautured.jsx");
/* harmony import */ var _components_InsightsArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InsightsArticles */ "./src/components/InsightsArticles.jsx");
/* harmony import */ var _components_InsightsAssess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InsightsAssess */ "./src/components/InsightsAssess.jsx");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.jsx");
/* harmony import */ var _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/stop-bang.png */ "./src/images/stop-bang.png");
/* harmony import */ var _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/stop-bang@2x.png */ "./src/images/stop-bang@2x.png");
/* harmony import */ var _images_screening_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/screening.png */ "./src/images/screening.png");
/* harmony import */ var _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/screening@2x.png */ "./src/images/screening@2x.png");

//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;









var insightsAssessArticles = [{
  title: 'Answer the Stop-BANG Questionnaire',
  link: '/stopbang',
  image: {
    '1x': _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_6__,
    '2x': _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_7__
  }
}, {
  title: 'Screening dor Sleep Apnea: Epworth Sleepiness Scale',
  link: '/epworth',
  image: {
    '1x': _images_screening_png__WEBPACK_IMPORTED_MODULE_8__,
    '2x': _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_9__
  }
}];
var Insights = function Insights() {
  var tagsContainerRef = useRef(null);
  var tagAllRef = useRef(null);
  var searchInputRef = useRef(null);

  var _useState = useState(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentPosts = _useState2[0],
      setCurrentPosts = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      tagsArr = _useState4[0],
      setTagsArr = _useState4[1];

  var _useState5 = useState({
    text: 'all',
    id: 111
  }),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      activeTag = _useState6[0],
      setActiveTag = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      searchQuery = _useState8[0],
      setSearchQuery = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      displayedSearchQuery = _useState10[0],
      setDisplayedSearchQuery = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      isSearch = _useState12[0],
      setIsSearch = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      currentSlug = _useState14[0],
      setCurrentSlug = _useState14[1];

  var posts = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100', {});
  var tags = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});
  useEffect(function () {
    if (!currentPosts) {
      return;
    } else if (activeTag.id === 111) {
      if (!searchQuery) {
        setCurrentPosts(posts.data);
      }

      return;
    }

    var filteredPosts = posts.data.filter(function (post) {
      return post.categories.indexOf(activeTag.id) >= 0;
    });
    console.log('filter posts');
    setCurrentPosts(filteredPosts);
  }, [activeTag]);
  useEffect(function () {
    if (tags.data) {
      var currentPath = window.location.href;
      var allTags = tags.data.concat();
      allTags.reverse().push({
        id: 111,
        name: 'All'
      });
      allTags.reverse();
      setTagsArr(allTags);

      if (currentPath.includes('?category=')) {
        var reversedPath = currentPath.split('?category=').reverse();
        var slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];
        var tag = tags.data.find(function (tag) {
          return tag.slug === slug;
        });
        console.log({
          text: tag.name,
          id: tag.id
        });
        setActiveTag({
          text: tag.name,
          id: tag.id
        });
        setCurrentSlug(slug);
      }
    }
  }, [tags.data]);
  useEffect(function () {
    if (posts.data) {
      if (activeTag && activeTag.text !== 'all') {
        var filteredPosts = posts.data.filter(function (post) {
          return post.categories.indexOf(activeTag.id) >= 0;
        });
        console.log('filter posts');
        setCurrentPosts(filteredPosts);
      } else {
        setCurrentPosts(posts.data);
      }

      console.log(activeTag);
    }
  }, [posts.data]);

  var handleSearch = function handleSearch(e) {
    e.preventDefault();

    if (!currentPosts) {
      return;
    }

    if (searchQuery) {
      var searchedPosts = posts.data.filter(function (post) {
        var titleCheck = post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase());
        var excerptCheck = post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());
        return titleCheck || excerptCheck;
      });
      setCurrentPosts(searchedPosts);
      setDisplayedSearchQuery(searchQuery);
      setIsSearch(true);
    } else {
      setIsSearch(false);
      setCurrentPosts(posts.data);

      if (!isSearch) {
        var tabs = Array.from(tagsContainerRef.current.children);
        tabs.forEach(function (tab) {
          return tab.classList.remove('tabs-btn_active');
        });
        tagAllRef.current.classList.add('tabs-btn_active');
        setActiveTag({
          text: 'all',
          id: 111
        });
      }
    }
  };

  var handleBackButtonClick = function handleBackButtonClick(e) {
    e.preventDefault();
    setActiveTag({
      text: 'all',
      id: 111
    });
    setSearchQuery('');
    setIsSearch(false);
    setCurrentPosts(posts.data);

    if (!isSearch) {
      var tabs = Array.from(tagsContainerRef.current.children);
      tabs.forEach(function (tab) {
        return tab.classList.remove('tabs-btn_active');
      });
      tagAllRef.current.classList.add('tabs-btn_active');
      setActiveTag({
        text: 'all',
        id: 111
      });
    }

    searchInputRef.current.value = '';
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/React.createElement("main", {
    className: "insights"
  }, !isSearch ? /*#__PURE__*/React.createElement(_components_InsightsTabs__WEBPACK_IMPORTED_MODULE_1__.InsightsTabs, {
    tagAllRef: tagAllRef,
    tagsContainerRef: tagsContainerRef,
    tags: {
      state: tagsArr,
      update: setTagsArr
    },
    activeTag: {
      state: activeTag,
      update: setActiveTag
    },
    currentSlug: currentSlug
  }) : '', activeTag.text === 'all' && !isSearch ? /*#__PURE__*/React.createElement(_components_InsightsFeautured__WEBPACK_IMPORTED_MODULE_2__.InsightsFeautured, null) : '', /*#__PURE__*/React.createElement(_components_InsightsArticles__WEBPACK_IMPORTED_MODULE_3__.InsightsArticles, {
    searchQuery: searchQuery,
    displayedSearchQuery: displayedSearchQuery,
    isSearch: isSearch,
    setSearchQuery: setSearchQuery,
    handleSearch: handleSearch,
    posts: {
      state: currentPosts,
      update: setCurrentPosts
    },
    tags: {
      state: tags
    },
    activeTag: {
      state: activeTag,
      update: setActiveTag
    },
    handleBackButtonClick: handleBackButtonClick,
    searchInputRef: searchInputRef
  }), /*#__PURE__*/React.createElement(_components_InsightsAssess__WEBPACK_IMPORTED_MODULE_4__.InsightsAssess, {
    light: true,
    titleClass: "title_size-l",
    titleText: "Assess your sleep apnea risk",
    articles: insightsAssessArticles
  }));
};

/***/ }),

/***/ "./src/pages/Privacy.jsx":
/*!*******************************!*\
  !*** ./src/pages/Privacy.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Privacy": function() { return /* binding */ Privacy; }
/* harmony export */ });
/* harmony import */ var _components_PrivacyPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PrivacyPage */ "./src/components/PrivacyPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Privacy = function Privacy() {
  return /*#__PURE__*/React.createElement("main", {
    className: "privacy"
  }, /*#__PURE__*/React.createElement(_components_PrivacyPage__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage, null));
};

/***/ }),

/***/ "./src/pages/Product.jsx":
/*!*******************************!*\
  !*** ./src/pages/Product.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/usePost */ "./src/hooks/usePost.jsx");
/* harmony import */ var _components_ProductMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductMain */ "./src/components/ProductMain.jsx");
/* harmony import */ var _components_ProductNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductNote */ "./src/components/ProductNote.jsx");
/* harmony import */ var _components_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductInfo */ "./src/components/ProductInfo.jsx");
/* harmony import */ var _components_ProductReviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductReviews */ "./src/components/ProductReviews.jsx");
/* harmony import */ var _components_ProductRemedies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProductRemedies */ "./src/components/ProductRemedies.jsx");
/* harmony import */ var _components_ProductFullReview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProductFullReview */ "./src/components/ProductFullReview.jsx");
/* harmony import */ var _components_ProductBottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ProductBottom */ "./src/components/ProductBottom.jsx");
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/loader.gif */ "./src/images/loader.gif");

var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;









var Product = function Product() {
  var _useState = useState(window.location.href),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentPath = _useState2[0],
      setCurrentPath = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      currentSlug = _useState4[0],
      setCurrentSlug = _useState4[1];

  var product = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_1__["default"])('https://snorelab.ux-mind.pro/wp-json/wp/v2/products?per_page=100', currentSlug, {});
  useEffect(function () {
    var reversedPath = currentPath.split('/').reverse();
    var slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];
    console.log(slug);
    setCurrentSlug(slug);
  }, [currentPath]);
  return /*#__PURE__*/React.createElement("main", {
    className: "product-page"
  }, product.data ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_ProductMain__WEBPACK_IMPORTED_MODULE_2__.ProductMain, {
    product: product
  }), /*#__PURE__*/React.createElement(_components_ProductNote__WEBPACK_IMPORTED_MODULE_3__.ProductNote, {
    product: product
  }), /*#__PURE__*/React.createElement(_components_ProductInfo__WEBPACK_IMPORTED_MODULE_4__.ProductInfo, {
    product: product
  }), product.data.acf.product_reviews_items ? /*#__PURE__*/React.createElement(_components_ProductReviews__WEBPACK_IMPORTED_MODULE_5__.ProductReviews, {
    product: product
  }) : '', /*#__PURE__*/React.createElement(_components_ProductRemedies__WEBPACK_IMPORTED_MODULE_6__.ProductRemedies, {
    product: product
  }), /*#__PURE__*/React.createElement(_components_ProductFullReview__WEBPACK_IMPORTED_MODULE_7__.ProductFullReview, {
    product: product
  }), /*#__PURE__*/React.createElement(_components_ProductBottom__WEBPACK_IMPORTED_MODULE_8__.ProductBottom, {
    product: product
  })) : /*#__PURE__*/React.createElement("div", {
    className: "insight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insight-wrapper"
  }, /*#__PURE__*/React.createElement("img", {
    className: "insight-loader",
    alt: "",
    src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_9__
  }), /*#__PURE__*/React.createElement("div", {
    className: "insight-loader-title"
  }, "Loading..."))));
};

/***/ }),

/***/ "./src/pages/Reviews.jsx":
/*!*******************************!*\
  !*** ./src/pages/Reviews.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reviews": function() { return /* binding */ Reviews; }
/* harmony export */ });
/* harmony import */ var _components_ReviewsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ReviewsPage */ "./src/components/ReviewsPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Reviews = function Reviews() {
  return /*#__PURE__*/React.createElement("main", {
    className: "reviews"
  }, /*#__PURE__*/React.createElement(_components_ReviewsPage__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage, null));
};

/***/ }),

/***/ "./src/pages/Shop.jsx":
/*!****************************!*\
  !*** ./src/pages/Shop.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shop": function() { return /* binding */ Shop; }
/* harmony export */ });
/* harmony import */ var _components_ShopPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ShopPage */ "./src/components/ShopPage.jsx");
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Shop = function Shop() {
  return /*#__PURE__*/React.createElement("main", {
    className: "shop"
  }, /*#__PURE__*/React.createElement(_components_ShopPage__WEBPACK_IMPORTED_MODULE_0__.ShopPage, null));
};

/***/ }),

/***/ "./src/pages/StopBang.jsx":
/*!********************************!*\
  !*** ./src/pages/StopBang.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopBang": function() { return /* binding */ StopBang; }
/* harmony export */ });
/* harmony import */ var _components_StopBangQuestionnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StopBangQuestionnaire */ "./src/components/StopBangQuestionnaire.jsx");
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/variables */ "./src/helpers/variables.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Share */ "./src/components/Share.jsx");
/* harmony import */ var _components_InsightsAssess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InsightsAssess */ "./src/components/InsightsAssess.jsx");
/* harmony import */ var _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/stop-bang.png */ "./src/images/stop-bang.png");
/* harmony import */ var _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/stop-bang@2x.png */ "./src/images/stop-bang@2x.png");
/* harmony import */ var _images_screening_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/screening.png */ "./src/images/screening.png");
/* harmony import */ var _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/screening@2x.png */ "./src/images/screening@2x.png");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;








var questionnaireArticles = [{
  title: 'Sleep Apnea: Screening, Testing and Treatment',
  link: 'stopbang',
  image: {
    '1x': _images_screening_png__WEBPACK_IMPORTED_MODULE_6__,
    '2x': _images_screening_2x_png__WEBPACK_IMPORTED_MODULE_7__
  }
}, {
  title: 'What is Sleep Apnea?',
  link: 'stopbang',
  image: {
    '1x': _images_stop_bang_png__WEBPACK_IMPORTED_MODULE_4__,
    '2x': _images_stop_bang_2x_png__WEBPACK_IMPORTED_MODULE_5__
  }
}];
var StopBang = function StopBang() {
  return /*#__PURE__*/React.createElement("main", {
    className: "stop-bang"
  }, /*#__PURE__*/React.createElement(_components_StopBangQuestionnaire__WEBPACK_IMPORTED_MODULE_0__.StopBangQuestionnaire, null), /*#__PURE__*/React.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_2__.Share, {
    title: "Share",
    links: _helpers_variables__WEBPACK_IMPORTED_MODULE_1__.shareQuestionnaireLinks
  }), /*#__PURE__*/React.createElement(_components_InsightsAssess__WEBPACK_IMPORTED_MODULE_3__.InsightsAssess, {
    light: false,
    titleClass: "title_fade-s",
    titleText: window.innerWidth > 991 ? 'Learn more about obstructive sleep apnea' : 'Related articles',
    articles: questionnaireArticles
  }));
};

/***/ }),

/***/ "./src/pages/SuccessStories.jsx":
/*!**************************************!*\
  !*** ./src/pages/SuccessStories.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessStories": function() { return /* binding */ SuccessStories; }
/* harmony export */ });
/* harmony import */ var _components_SuccessStoriesMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SuccessStoriesMain */ "./src/components/SuccessStoriesMain.jsx");
/* harmony import */ var _components_SuccessStoriesBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SuccessStoriesBottom */ "./src/components/SuccessStoriesBottom.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;


var SuccessStories = function SuccessStories() {
  return /*#__PURE__*/React.createElement("main", {
    className: "success-stories"
  }, /*#__PURE__*/React.createElement(_components_SuccessStoriesMain__WEBPACK_IMPORTED_MODULE_0__.SuccessStoriesMain, null), /*#__PURE__*/React.createElement(_components_SuccessStoriesBottom__WEBPACK_IMPORTED_MODULE_1__.SuccessStoriesBottom, null));
};

/***/ }),

/***/ "./src/pages/Terms.jsx":
/*!*****************************!*\
  !*** ./src/pages/Terms.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Terms": function() { return /* binding */ Terms; }
/* harmony export */ });
/* harmony import */ var _components_TermsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TermsPage */ "./src/components/TermsPage.jsx");
//import React from 'react';
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    render = _wp$element.render;

var Terms = function Terms() {
  return /*#__PURE__*/React.createElement("main", {
    className: "terms"
  }, /*#__PURE__*/React.createElement(_components_TermsPage__WEBPACK_IMPORTED_MODULE_0__.TermsPage, null));
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": function() { return /* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Home; },
/* harmony export */   "HowWorks": function() { return /* reexport safe */ _HowWorks__WEBPACK_IMPORTED_MODULE_1__.HowWorks; },
/* harmony export */   "SuccessStories": function() { return /* reexport safe */ _SuccessStories__WEBPACK_IMPORTED_MODULE_2__.SuccessStories; },
/* harmony export */   "Reviews": function() { return /* reexport safe */ _Reviews__WEBPACK_IMPORTED_MODULE_3__.Reviews; },
/* harmony export */   "Insights": function() { return /* reexport safe */ _Insights__WEBPACK_IMPORTED_MODULE_4__.Insights; },
/* harmony export */   "Insight": function() { return /* reexport safe */ _Insight__WEBPACK_IMPORTED_MODULE_5__.Insight; },
/* harmony export */   "StopBang": function() { return /* reexport safe */ _StopBang__WEBPACK_IMPORTED_MODULE_6__.StopBang; },
/* harmony export */   "Epworth": function() { return /* reexport safe */ _Epworth__WEBPACK_IMPORTED_MODULE_7__.Epworth; },
/* harmony export */   "Faq": function() { return /* reexport safe */ _Faq__WEBPACK_IMPORTED_MODULE_8__.Faq; },
/* harmony export */   "Contact": function() { return /* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_9__.Contact; },
/* harmony export */   "About": function() { return /* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_10__.About; },
/* harmony export */   "Privacy": function() { return /* reexport safe */ _Privacy__WEBPACK_IMPORTED_MODULE_11__.Privacy; },
/* harmony export */   "Terms": function() { return /* reexport safe */ _Terms__WEBPACK_IMPORTED_MODULE_12__.Terms; },
/* harmony export */   "Careers": function() { return /* reexport safe */ _Careers__WEBPACK_IMPORTED_MODULE_13__.Careers; },
/* harmony export */   "Shop": function() { return /* reexport safe */ _Shop__WEBPACK_IMPORTED_MODULE_14__.Shop; },
/* harmony export */   "Product": function() { return /* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_15__.Product; }
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/pages/Home.jsx");
/* harmony import */ var _HowWorks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HowWorks */ "./src/pages/HowWorks.jsx");
/* harmony import */ var _SuccessStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessStories */ "./src/pages/SuccessStories.jsx");
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reviews */ "./src/pages/Reviews.jsx");
/* harmony import */ var _Insights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Insights */ "./src/pages/Insights.jsx");
/* harmony import */ var _Insight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Insight */ "./src/pages/Insight.jsx");
/* harmony import */ var _StopBang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StopBang */ "./src/pages/StopBang.jsx");
/* harmony import */ var _Epworth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Epworth */ "./src/pages/Epworth.jsx");
/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Faq */ "./src/pages/Faq.jsx");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contact */ "./src/pages/Contact.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./About */ "./src/pages/About.jsx");
/* harmony import */ var _Privacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Privacy */ "./src/pages/Privacy.jsx");
/* harmony import */ var _Terms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Terms */ "./src/pages/Terms.jsx");
/* harmony import */ var _Careers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Careers */ "./src/pages/Careers.jsx");
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Shop */ "./src/pages/Shop.jsx");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Product */ "./src/pages/Product.jsx");

















/***/ }),

/***/ "./src/images/lips.svg":
/*!*****************************!*\
  !*** ./src/images/lips.svg ***!
  \*****************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxyZWN0IHg9Ijg4LjU0NSIgeT0iMjUuMTY3IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9Ijg0Ljk4NCIgeT0iMzguMjc1IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjczLjA2OCIgeT0iMjUuMTY3IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjU3LjU2OSIgeT0iMjUuMTY3IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02MS4xNCAzOS40NjdjMC0uNjU4LjUzNC0xLjE5MiAxLjE5Mi0xLjE5Mmg0Ljc2NWMuNjU4IDAgMS4xOTIuNTM0IDEuMTkyIDEuMTkydjQuNzY1YzAgLjY1OC0uNTM0IDEuMTkxLTEuMTkyIDEuMTkxaC00Ljc2NWExLjE5MSAxLjE5MSAwIDAgMS0xLjE5MS0xLjE5MXYtNC43NjVaIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNjIuMzM4IiB5PSI2My4yOTUiIHdpZHRoPSI3LjE0OCIgaGVpZ2h0PSI3LjE0OCIgcng9IjEuMTkxIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNjIuMzM4IiB5PSI4OC4zMTQiIHdpZHRoPSI3LjE0OCIgaGVpZ2h0PSI3LjE0OCIgcng9IjEuMTkxIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNjEuMTQxIiB5PSIxMTAuOTQ0IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjU3LjU2OSIgeT0iMTIyLjg2MSIgd2lkdGg9IjcuMTQ4IiBoZWlnaHQ9IjcuMTQ4IiByeD0iMS4xOTEiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI4My43NyIgeT0iNjMuMjk1IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjgzLjc3IiB5PSI4OC4zMTQiIHdpZHRoPSI3LjE0OCIgaGVpZ2h0PSI3LjE0OCIgcng9IjEuMTkxIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iODQuOTg0IiB5PSIxMTAuOTQ0IiB3aWR0aD0iNy4xNDgiIGhlaWdodD0iNy4xNDgiIHJ4PSIxLjE5MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9Ijg4LjU0NSIgeT0iMTIyLjg2MSIgd2lkdGg9IjcuMTQ4IiBoZWlnaHQ9IjcuMTQ4IiByeD0iMS4xOTEiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI3My4wNjgiIHk9IjEyMi44NjEiIHdpZHRoPSI3LjE0OCIgaGVpZ2h0PSI3LjE0OCIgcng9IjEuMTkxIiBmaWxsPSIjZmZmIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIj48cGF0aCBkPSJNOTguODM1IDUyLjQyOWMtNi41MTUgMC0xMy41NTkgMS4wMTktMjEuMDgxIDMuNDc0LTcuNTItMi40NTQtMTQuNTY5LTMuNDc0LTIxLjA4MS0zLjQ3NGgtLjAwN2wuMDA3IDQuNTQ0YzYuMS4wMDIgMTIuMzg4IDEuMDQ1IDE4LjY5NCAzLjEwM2wyLjM4Ny43NzkgMi4zODctLjc4YzYuMzAzLTIuMDU4IDEyLjU5OC0zLjEwMiAxOC42OTQtMy4xMDIgNi4zMTcgMCAxMi42MDMgMS4xMTcgMTguNjg1IDMuMzIgNC45OTkgMS44MTQgOS44OTIgNC4zNjIgMTQuNTQyIDcuNTc4YTcwLjM0NSA3MC4zNDUgMCAwIDEgNy4yNDcgNS43NTdjLTEzLjM2LS45NTItMjUuNDI5LjQ3Ni0zNy4xNDYgMS44NjMtOC4zODQuOTkyLTE2LjMgMS45My0yNC4yMDggMS45My03LjY4MSAwLTE0LjM4My0uODgtMjEuNDc4LTEuODEtMTAuNjU0LTEuMzk4LTIyLjYzNS0yLjk3LTQwLjQyNS0xLjg1NiA3LjIzMy02LjYwOCAyMS40NzctMTYuNzgyIDQwLjYxNC0xNi43ODJ2LTQuNTQ0Yy0zMS45NiAwLTUxLjEzMiAyMy4wNjItNTEuMTMyIDIzLjA2MiAxNi40NjIgMTEuOTU3IDMxLjQxIDIzLjU1NyA1MC4wOSAyNy4zNDUgMy43NjUuNzU5IDE1LjQ3MiAxLjE4MiAyNS4zNTUgMS4xODIgNi40NyAwIDEyLjE1Ny0uMTggMTQuMzI2LS41NjIgMTkuNDYxLTMuNDM2IDM3LjM5Ny0xNS40MiA1NC42NjctMjcuOTY1IDAgMC0xOS4xNzUtMjMuMDYyLTUxLjEzNy0yMy4wNjJabS00Ljg5NyA0Ni41OTljLS44NzMuMTUzLTQuNjk5LjQ0Ni0xMi45Ni40NDYtMTEuNTYxIDAtMjEuMzU0LS41MzMtMjMuNzk0LTEuMDI5LTcuOTE2LTEuNjA0LTE1LjUwNS00LjUxLTIzLjg4LTkuMTQ1LTUuODc4LTMuMjQ5LTExLjYzNS03LjA4NC0xNy4xNzMtMTAuOTkyIDE3LjIxNy0xLjExNyAyOC40NC4zNTIgMzkuMzE0IDEuNzggNy4zNi45NjYgMTQuMzA5IDEuODc4IDIyLjUxIDEuODc4IDguMzc5IDAgMTYuNTItLjk2MiAyNS4xMzgtMS45ODQgMTEuNTM2LTEuMzY4IDIzLjQyOC0yLjc3MyAzNi4zMy0xLjc3NC02Ljk4MiA0Ljc4NC0xMy4yNDEgOC41NTUtMTkuMzI5IDExLjY1NS05LjE5NCA0LjY4NC0xNy43NSA3LjY4LTI2LjE1NiA5LjE2NVoiIGZpbGw9IiNmZmYiLz48L2c+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgxNTEuMnYxNTEuMkgweiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiIj48cGF0aCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjUzNCA1Mi4zNykiIGQ9Ik0wIDBoMTQ0LjQzOHY1Mi41MjNIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=";

/***/ }),

/***/ "./src/images/mouth.svg":
/*!******************************!*\
  !*** ./src/images/mouth.svg ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzIuOCAxNEMxMS43MzUgMTQgMi42ODUgOTcuNTE2IDUuNTggMTI0LjUwNWEuMzIuMzIgMCAwIDAgLjI2LjI4OWM1LjkwNiAxLjI3MSAyNS43ODggMy41OTcgMjcuNzYtLjA1MkM0MiAxMDkuMiAyOCAzOS4yIDc1LjYgMzkuMmMzNi40MDEgMCAzNi42NzEgNDUuMDE0IDQwLjQ0IDgyLjU3bC4yNzUgMi43NDFjLjAxNC4xMzkuMS4yNTYuMjM0LjI5NiAxLjY5NS41MDkgMTMuMzk0IDMuNzQ1IDI4Ljc5NSAxLjIzNC4xNDktLjAyNC4yNjQtLjExNS4yODgtLjI2NEMxNDguMzk5IDEwOC4zNzYgMTQ4LjcxMyAxNC4wMDEgNzIuODAxIDE0WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/images/review-star.svg":
/*!************************************!*\
  !*** ./src/images/review-star.svg ***!
  \************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTExLjc1LjkgMy4xMjIgNy40NTQgOC4wNTMuNjY1LTYuMTI0IDUuMjczIDEuODU2IDcuODY0LTYuOTA3LTQuMTk1LTYuOTA2IDQuMTk1IDEuODU1LTcuODY0TC41NzUgOS4wMTlsOC4wNTMtLjY2NUwxMS43NS45WiIgZmlsbD0iI0ZFRDMwMSIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/images/star-2.svg":
/*!*******************************!*\
  !*** ./src/images/star-2.svg ***!
  \*******************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0MSIgaGVpZ2h0PSIxODc5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTgxNS40NzggNTA0LjA4MyAxOTguOTUyIDI2Ni41MDQgMzE0Ljk0LTEwNi44NjItMTkxLjk4IDI3MS41NyAxOTguOTYgMjY2LjUwNS0zMTcuNjEtOTguNjctMTkxLjk3OCAyNzEuNTgtNC4zMS0zMzIuNTUtMzE3LjYwNC05OC42NjcgMzE0Ljk0LTEwNi44NjItNC4zMS0zMzIuNTQ4WiIgZmlsbD0idXJsKCNiKSIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI5NjIuMzc5IiB5MT0iODk1LjE5NSIgeDI9IjU1Ny4wMzUiIHkyPSI4NjIuNzc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzFGMTJEMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQUZERSIvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0iYSIgeD0iLjg0OCIgeT0iLjA4MyIgd2lkdGg9IjE4MzkuNSIgaGVpZ2h0PSIxODc4LjYyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNTIiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl85Nl8zOTMiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+";

/***/ }),

/***/ "./src/images/star-3.svg":
/*!*******************************!*\
  !*** ./src/images/star-3.svg ***!
  \*******************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU4NiIgaGVpZ2h0PSIxNTQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEwOTUuNDEgMjg3Ljk0NCA5ODIuNDggNjU3LjM0N2wzMTYuNDMgMjIxLjU1NC0zODYuMjI1IDYuNzQ5LTExMi45MyAzNjkuNC0xMjUuNzY3LTM2NS4yMjktMzg2LjIyIDYuNzQ4TDU5Ni4yNiA2NjQuMDk1IDQ3MC40OTMgMjk4Ljg2M2wzMTYuNDI1IDIyMS41NTUgMzA4LjQ5Mi0yMzIuNDc0WiIgZmlsbD0iIzAzNUE5NSIvPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIuNzY4IiB5PSIuOTQ0IiB3aWR0aD0iMTU4NS4xNCIgaGVpZ2h0PSIxNTQxLjExIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxNDMuNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzk2XzQwNCIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=";

/***/ }),

/***/ "./src/images/star-4.svg":
/*!*******************************!*\
  !*** ./src/images/star-4.svg ***!
  \*******************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1MyIgaGVpZ2h0PSIxNTkxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTY3MS40NzggMzYwLjA4MyAxOTguOTU0IDI2Ni41MDQgMzE0LjkzOC0xMDYuODYyLTE5MS45NzggMjcxLjU3TDExOTIuMzUgMTA1Ny44bC0zMTcuNjA4LTk4LjY2NS0xOTEuOTggMjcxLjU3NS00LjMxLTMzMi41NTMtMzE3LjYwNC05OC42NjQgMzE0Ljk0LTEwNi44NjItNC4zMS0zMzIuNTQ4WiIgZmlsbD0idXJsKCNiKSIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI4MTguMzc5IiB5MT0iNzUxLjE5NSIgeDI9IjQxMy4wMzUiIHkyPSI3MTguNzc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzFGMTJEMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQUZERSIvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0iYSIgeD0iLjg0OCIgeT0iLjA4MyIgd2lkdGg9IjE1NTEuNSIgaGVpZ2h0PSIxNTkwLjYyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxODAiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl85Nl85NTkiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+";

/***/ }),

/***/ "./src/images/star-5.svg":
/*!*******************************!*\
  !*** ./src/images/star-5.svg ***!
  \*******************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU2OSIgaGVpZ2h0PSIxNTc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTk4My44ODIgMjg3LTUwLjgxNCAzODIuOTIyIDM0OC40ODIgMTY2LjY1Ni0zNzkuODg2IDcwLjAwM0w4NTAuODUgMTI4OS41IDY2Ni44ODMgOTQ5Ljg0NSAyODcgMTAxOS44NWwyNjYuMTg1LTI3OS45MjUtMTgzLjk2Ny0zMzkuNjU4IDM0OC40NzkgMTY2LjY1Nkw5ODMuODgyIDI4N1oiIGZpbGw9IiMwMzVBOTUiLz48L2c+PGRlZnM+PGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE1NjguNTUiIGhlaWdodD0iMTU3Ni41IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxNDMuNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzk2XzM5OCIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=";

/***/ }),

/***/ "./src/images/ellipse-1.png":
/*!**********************************!*\
  !*** ./src/images/ellipse-1.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/91fe50d46d0e37f6b3f9.png";

/***/ }),

/***/ "./src/images/loader.gif":
/*!*******************************!*\
  !*** ./src/images/loader.gif ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/61afd4329d034283699d.gif";

/***/ }),

/***/ "./src/images/mouthpiece.png":
/*!***********************************!*\
  !*** ./src/images/mouthpiece.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/572ba8100e690456165a.png";

/***/ }),

/***/ "./src/images/product-main.png":
/*!*************************************!*\
  !*** ./src/images/product-main.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/dc50e3001539e152c8f7.png";

/***/ }),

/***/ "./src/images/product-star.png":
/*!*************************************!*\
  !*** ./src/images/product-star.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/6a84285a3b9ef909ba41.png";

/***/ }),

/***/ "./src/images/remedies.png":
/*!*********************************!*\
  !*** ./src/images/remedies.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/681b2d781a3c75f2e6b0.png";

/***/ }),

/***/ "./src/images/star-2.png":
/*!*******************************!*\
  !*** ./src/images/star-2.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/e83275d762bcf9edb8f7.png";

/***/ }),

/***/ "./src/images/star.png":
/*!*****************************!*\
  !*** ./src/images/star.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/e0c3df0bcd758b357aee.png";

/***/ }),

/***/ "./src/images/upload-file.gif":
/*!************************************!*\
  !*** ./src/images/upload-file.gif ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/static/74c868d0de226d1104e0.gif";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "be456166ea3a5452dcf8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOThhMjc5NTI1ODg2MmQ5YjVhMjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvQkEsSUFBTW9CLEtBQUssR0FBRztBQUNaakIsRUFBQUEsSUFBSSxFQUFKQSx3Q0FEWTtBQUVaQyxFQUFBQSxRQUFRLEVBQVJBLDRDQUZZO0FBR1pDLEVBQUFBLGNBQWMsRUFBZEEsa0RBSFk7QUFJWkUsRUFBQUEsUUFBUSxFQUFSQSw0Q0FKWTtBQUtaQyxFQUFBQSxPQUFPLEVBQVBBLDJDQUxZO0FBTVpDLEVBQUFBLFFBQVEsRUFBUkEsNENBTlk7QUFPWkMsRUFBQUEsT0FBTyxFQUFQQSwyQ0FQWTtBQVFaQyxFQUFBQSxHQUFHLEVBQUhBLHVDQVJZO0FBU1pMLEVBQUFBLE9BQU8sRUFBUEEsMkNBVFk7QUFVWk0sRUFBQUEsT0FBTyxFQUFQQSwyQ0FWWTtBQVdaQyxFQUFBQSxLQUFLLEVBQUxBLHlDQVhZO0FBWVpDLEVBQUFBLE9BQU8sRUFBUEEsMkNBWlk7QUFhWkMsRUFBQUEsS0FBSyxFQUFMQSx5Q0FiWTtBQWNaQyxFQUFBQSxPQUFPLEVBQVBBLDJDQWRZO0FBZVpFLEVBQUFBLElBQUksRUFBSkEsd0NBZlk7QUFnQlpDLEVBQUFBLE9BQU8sRUFBUEEsMkNBQU9BO0FBaEJLLENBQWQ7O0FBbUJBLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsRUFBRCxFQUFRO0FBQ2hDLE1BQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDRSxFQUFFLENBQUNFLEVBQUosQ0FBbEI7O0FBRUEsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVELE1BQU1FLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsRUFBRSxDQUFDTSxPQUFyQixDQUFkOztBQUVBLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsd0JBQ1Y7QUFBSyxlQUFTLEVB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bEI7QUFDeEM7QUFDZixTQUFTLGlFQUFpQixTQUFTLCtEQUFlLFNBQVMsMEVBQTBCLFNBQVMsaUVBQWlCO0FBQy9HOzs7Ozs7OztVQ05BLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQWJvdXRQYWdlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ2FyZWVyc0Zvcm0uanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9DYXJlZXJzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RQYWdlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRXB3b3J0aFF1ZXN0aW9ubmFpcmUuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9GYXFQYWdlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hvbWVEZXNjcmlwdGlvbi5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hvbWVJbnNpZ2h0cy5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hvbWVNYWluLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG9tZVJldmlld3MuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Ib3dXb3Jrc0ludHJvLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG93V29ya3NNYWluLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG93V29ya3NNYWtlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG93V29ya3NOb3Rlcy5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hvd1dvcmtzU2VlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG93V29ya3NTZWxlY3QuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Ib3dXb3Jrc1NsZWVwLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSG93V29ya3NTdGFydC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0luc2lnaHRBZHZpY2UuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9JbnNpZ2h0RG93bmxvYWQuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Qm90dG9tLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZ1bGxSZXZpZXcuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RNYWluLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFJlbWVkaWVzLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFJldmlld3MuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9TdWNjZXNzU3Rvcmllc0JvdHRvbS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL1N1Y2Nlc3NTdG9yaWVzTWFpbi5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9DYXJlZXJzLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL0NvbnRhY3QuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvRXB3b3J0aC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9GYXEuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9Ib3dXb3Jrcy5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9JbnNpZ2h0LmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL0luc2lnaHRzLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL1ByaXZhY3kuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvUHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9SZXZpZXdzLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL1Nob3AuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvU3RvcEJhbmcuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvU3VjY2Vzc1N0b3JpZXMuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvVGVybXMuanN4Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vaGVscGVycy9ldmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQge1xuICBIb21lLFxuICBIb3dXb3JrcyxcbiAgU3VjY2Vzc1N0b3JpZXMsXG4gIFJldmlld3MsXG4gIEluc2lnaHRzLFxuICBJbnNpZ2h0LFxuICBTdG9wQmFuZyxcbiAgRXB3b3J0aCxcbiAgRmFxLFxuICBDb250YWN0LFxuICBBYm91dCxcbiAgUHJpdmFjeSxcbiAgVGVybXMsXG4gIENhcmVlcnMsXG4gIEJvb2tzLFxuICBTaG9wLFxuICBQcm9kdWN0LFxufSBmcm9tICcuL3BhZ2VzJztcblxuY29uc3QgUEFHRVMgPSB7XG4gIEhvbWUsXG4gIEhvd1dvcmtzLFxuICBTdWNjZXNzU3RvcmllcyxcbiAgSW5zaWdodHMsXG4gIEluc2lnaHQsXG4gIFN0b3BCYW5nLFxuICBFcHdvcnRoLFxuICBGYXEsXG4gIFJldmlld3MsXG4gIENvbnRhY3QsXG4gIEFib3V0LFxuICBQcml2YWN5LFxuICBUZXJtcyxcbiAgQ2FyZWVycyxcbiAgU2hvcCxcbiAgUHJvZHVjdCxcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2VFbGVtZW50ID0gKGVsKSA9PiB7XG4gIGNvbnN0IFBhZ2UgPSBQQUdFU1tlbC5pZF07XG5cbiAgaWYgKCFQYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBlbC5kYXRhc2V0KTtcblxuICBjb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtd3JhcHBlclwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFBhZ2Ugey4uLnByb3BzfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIHsuLi5wcm9wc30gLz4sIGVsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhZ2VFbGVtZW50O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBBYm91dFBhZ2UgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXQtcGFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlX193cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgdGl0bGVfc2l6ZS1sIGFib3V0LXBhZ2VfX3RpdGxlXCI+QWJvdXQgU25vcmVsYWI8L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZV9fbm90ZVwiPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFNub3JlTGFiIGlzIHRoZSBsZWFkaW5nIHNub3JpbmcgYW5hbHlzaXMgYXBwIGZvciBpUGhvbmUgYW5kIEFuZHJvaWQsIHdpdGggbWlsbGlvbnNcblx0XHRcdFx0XHRcdFx0b2YmbmJzcDtkb3dubG9hZHMgYW5kIG91dHN0YW5kaW5nIHVzZXIgcmV2aWV3cy4gSXQmbmJzcDtpcyZuYnNwO29uZSZuYnNwO29mJm5ic3A7dGhlIGxlYWRpbmdcblx0XHRcdFx0XHRcdFx0YXBwcyBpbiZuYnNwO3RoZSZuYnNwO2lQaG9uZSBtZWRpY2FsIGNhdGVnb3J5IGluIHNldmVyYWwgY291bnRyaWVzLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFNub3JlTGFiIHVzZXMgc29waGlzdGljYXRlZCBhbGdvcml0aG1zIHRvJm5ic3A7ZGV0ZWN0LCByZWNvcmQgYW5kIG1lYXN1cmUgc25vcmluZywgYWxsb3dpbmdcblx0XHRcdFx0XHRcdFx0dXNlcnMgdG8mbmJzcDt1bmRlcnN0YW5kIHRoZSBzZXZlcml0eSBvZiZuYnNwO3RoZWlyIHNub3JpbmcgcHJvYmxlbSBhbmQgdG8mbmJzcDtmaW5kIHdheXNcblx0XHRcdFx0XHRcdFx0dG8mbmJzcDtpbXByb3ZlIGl0LiBTbm9yZUxhYiBwbGFucyB0byBncm93IG9uJm5ic3A7aXRzJm5ic3A7cG9zaXRpb24gYXMgdGhlIGxlYWRpbmdcblx0XHRcdFx0XHRcdFx0c21hcnRwaG9uZSBhcHAmbmJzcDtmb3Igc25vcmVycyB0aHJvdWdoIGRldmVsb3BpbmcgcGFydG5lcnNoaXBzIHdpdGggbGVhZGluZyBjb21wYW5pZXNcblx0XHRcdFx0XHRcdFx0aW4mbmJzcDt0aGUmbmJzcDttZWRpY2FsIGRldmljZSBpbmR1c3RyeS5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRTbm9yZUxhYiB3YXMgY3JlYXRlZCBieSBKdWxlcyBHb2xkYmVyZyBpbiZuYnNwOzIwMTIgYWZ0ZXIgaGlzIHdpZmUgY29tcGxhaW5lZCBhYm91dFxuXHRcdFx0XHRcdFx0XHRoaXMmbmJzcDtzbm9yaW5nLiBTbm9yZUxhYiBpcyBvd25lZCBhbmQgcHVibGlzaGVkIGJ5Jm5ic3A7UmV2aXZhIFNvZnR3b3JrcyBMdGQsXG5cdFx0XHRcdFx0XHRcdGFuJm5ic3A7aW5kZXBlbmRlbnQgYXBwIGRldmVsb3BlciBkZWRpY2F0ZWQgdG8mbmJzcDtkZXZlbG9waW5nIGhpZ2ggcXVhbGl0eSBzbWFydHBob25lIGFwcHNcblx0XHRcdFx0XHRcdFx0aW4gdGhlIG1lZGljYWwgY2F0ZWdvcnkuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cD5UaGUgY29tcGFueSBpcyBsb2NhdGVkIGluIExvbmRvbiwgVUsuPC9wPlxuXHRcdFx0XHRcdFx0PHA+U25vcmVMYWIgaXMgYSByZWdpc3RlcmVkIHRyYWRlLW1hcmsuPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbiA9ICh7IHRpdGxlLCBlbGVtZW50cyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUFjY29yZGlvbkNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpb24tYnRuX29wZW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZS1zIGFjY29yZGlvbi10aXRsZVwiPnt0aXRsZX08L2g0PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFjY29yZGlvbi1saXN0XCI+XG4gICAgICAgIHtlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjY29yZGlvbi1saXN0X19pdGVtXCIga2V5PXtlbGVtZW50LmZhcV9pdGVtX3RpdGxlfT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idG5cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZUFjY29yZGlvbkNsaWNrKGV2dCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZWxlbWVudC5mYXFfaXRlbV90aXRsZX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7ZWxlbWVudC5mYXFfaXRlbV9pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5mYXFfaXRlbV9pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17XG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mYXFfaXRlbV9pbWFnZV8yeFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtlbGVtZW50LmZhcV9pdGVtX2ltYWdlLnVybH0gMXgsICR7ZWxlbWVudC5mYXFfaXRlbV9pbWFnZV8yeC51cmx9IDJ4YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZWxlbWVudC5mYXFfaXRlbV9jb250ZW50IH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgZm9yd2FyZFJlZiwgdXNlUmVmLCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBwYXBlcnBsYW5lIGZyb20gJy4uL2ltYWdlcy9mb3JtLXN1Ym1pdC1tb2RhbC5zdmcnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL3VwbG9hZC1maWxlLmdpZic7XG5cbmV4cG9ydCBjb25zdCBDYXJlZXJzRm9ybSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBzdXJuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgc3ViamVjdDogJycsXG4gICAgbWVzc2FnZTogJycsXG4gIH0pO1xuICBjb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgc3VybmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHN1YmplY3Q6ICcnLFxuICAgIHJlc3VtZTogJycsXG4gICAgbWVzc2FnZTogJycsXG4gIH0pO1xuXG4gIGNvbnN0IFtyZXN1bWVGaWxlLCBzZXRSZXN1bWVGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzdW1lRmlsZU5hbWUsIHNldFJlc3VtZUZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZpbGVQcm9ncmVzcywgc2V0RmlsZVByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvZ3Jlc3NBY3RpdmUsIHNldFByb2dyZXNzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB1cGxvYWRJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FyZWVyc01vZGFsTWVzc2FnZSA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAvLyBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgdGFyZ2V0IGlucHV0IGVsZW1lbnQgbXVzdCBtYXRjaCBmb3JtVmFsdWVzIGtleVxuICAgIC8vIHRvIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICBjb25zdCBmb3JtVmFsdWVzS2V5ID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICBzZXRGb3JtVmFsdWVzKChwcmV2KSA9PiB7XG4gICAgICBjb25zdCBuZXdGb3JtVmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldik7XG5cbiAgICAgIG5ld0Zvcm1WYWx1ZXNbYCR7Zm9ybVZhbHVlc0tleX1gXSA9IHRhcmdldC52YWx1ZTtcblxuICAgICAgcmV0dXJuIG5ld0Zvcm1WYWx1ZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdXBsb2FkTGFiZWwgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgc2V0UmVzdW1lRmlsZSh0YXJnZXQuZmlsZXNbMF0pO1xuXG4gICAgY29uc29sZS5sb2codGFyZ2V0LmZpbGVzWzBdKTtcblxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCdcXFxcJykucG9wKCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHVwbG9hZExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmVlcnMtZm9ybV9fdXBsb2FkX2xvYWRlZCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnc2wtcmVzdW1lJywgcmVzdW1lRmlsZSk7XG4gICAgc2V0UmVzdW1lRmlsZU5hbWUoJycpO1xuICAgIHNldEZpbGVQcm9ncmVzcygwKTtcbiAgICBzZXRQcm9ncmVzc0FjdGl2ZSh0cnVlKTtcbiAgICBsZXQgcmVzID0gYXhpb3MucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwczovL3Nub3JlbGFiLnV4LW1pbmQucHJvL3dwLWNvbnRlbnQvdGhlbWVzL3Nub3JlbGFiL3VwbG9hZC1maWxlLnBocFwiLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHApID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwLmxvYWRlZCAvIChwLnRvdGFsICogMC4wMSkpO1xuICAgICAgICAgIHNldEZpbGVQcm9ncmVzcyhNYXRoLnJvdW5kKHAubG9hZGVkIC8gKHAudG90YWwgKiAwLjAxKSkpO1xuICAgICAgICB9XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRQcm9ncmVzc0FjdGl2ZShmYWxzZSk7XG4gICAgICAgIHNldFJlc3VtZUZpbGVOYW1lKGZpbGVOYW1lKTtcbiAgICAgICAgdXBsb2FkTGFiZWwuY2xhc3NMaXN0LmFkZCgnY2FyZWVycy1mb3JtX191cGxvYWRfbG9hZGVkJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH0pO1xuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvciByZW1vdmluZyByZXN1bWUgZmlsZVxuICBjb25zdCBoYW5kbGVGaWxlRGVsZXRlID0gKGUpID0+IHtcbiAgICBjb25zdCB1cGxvYWRJbnB1dCA9IHVwbG9hZElucHV0UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgdXBsb2FkTGFiZWwgPSB1cGxvYWRJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICB1cGxvYWRJbnB1dC52YWx1ZSA9IG51bGw7XG5cbiAgICB1cGxvYWRMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJlZXJzLWZvcm1fX3VwbG9hZF9sb2FkZWQnKTtcbiAgICBzZXRSZXN1bWVGaWxlKG51bGwpO1xuICAgIHNldFJlc3VtZUZpbGVOYW1lKCcnKTtcbiAgICBzZXRGaWxlUHJvZ3Jlc3MoMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJsb2NrZXIgPSByZWYuY3VycmVudDtcblxuICAgIGxldCBlcnJvclN1Ym1pdCA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWZvcm1WYWx1ZXNba2V5XSkge1xuICAgICAgICBlcnJvclN1Ym1pdCA9IHRydWU7XG4gICAgICAgIHNldEZvcm1FcnJvcnMoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdGb3JtRXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldik7XG4gICAgICAgICAgbmV3Rm9ybUVycm9yc1tgJHtrZXl9YF0gPSAnVGhpcyBmaWVsZCBjYW5gdCBiZSBlbXB0eS4gUGxlYXNlIGZpbGwgaW4gdGhlIGluZm9ybWF0aW9uLic7XG4gICAgICAgICAgcmV0dXJuIG5ld0Zvcm1FcnJvcnM7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Rm9ybUVycm9ycygocHJldikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0Zvcm1FcnJvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2KTtcbiAgICAgICAgICBuZXdGb3JtRXJyb3JzW2Ake2tleX1gXSA9ICcnO1xuICAgICAgICAgIHJldHVybiBuZXdGb3JtRXJyb3JzO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoISgvXFxTK0BcXFMrXFwuXFxTKy8pLnRlc3QoZm9ybVZhbHVlc1snZW1haWwnXSkpIHtcbiAgICAgIHNldEZvcm1FcnJvcnMoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXYpO1xuICAgICAgICBuZXdGb3JtRXJyb3JzWydlbWFpbCddID0gJ05vdCB2YWxpZCBlLW1haWwnO1xuICAgICAgICByZXR1cm4gbmV3Rm9ybUVycm9ycztcbiAgICAgIH0pO1xuICAgICAgZXJyb3JTdWJtaXQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZm9ybVZhbHVlc1snZW1haWwnXSAmJiBmb3JtVmFsdWVzWydlbWFpbCddLmluZGV4T2YoJ0AnKSA9PT0gLTEpIHtcbiAgICAgIHNldEZvcm1FcnJvcnMoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXYpO1xuICAgICAgICBuZXdGb3JtRXJyb3JzWydlbWFpbCddID0gJ0FuIGUtbWFpbCBhZGRyZXNzIG11c3QgY29udGFpbiBhIHNpbmdsZSBALic7XG4gICAgICAgIHJldHVybiBuZXdGb3JtRXJyb3JzO1xuICAgICAgfSk7XG4gICAgICBlcnJvclN1Ym1pdCA9IHRydWU7XG4gICAgfVxuICAgIGlmICghZXJyb3JTdWJtaXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8qY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAnbmFtZSc6IGZvcm1WYWx1ZXMubmFtZSxcbiAgICAgICAgICAnc3VybmFtZSc6IGZvcm1WYWx1ZXMuc3VybmFtZSxcbiAgICAgICAgICAnZW1haWwnOiBmb3JtVmFsdWVzLmVtYWlsLFxuICAgICAgICAgICdzdWJqZWN0JzogZm9ybVZhbHVlcy5zdWJqZWN0LFxuICAgICAgICAgICdyZXN1bWUnOiBmb3JtVmFsdWVzLnJlc3VtZSxcbiAgICAgICAgICAnbWVzc2FnZSc6IGZvcm1WYWx1ZXMubWVzc2FnZSxcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7Ki9cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzbC1uYW1lJywgZm9ybVZhbHVlcy5uYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzbC1zdXJuYW1lJywgZm9ybVZhbHVlcy5zdXJuYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzbC1lbWFpbCcsIGZvcm1WYWx1ZXMuZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NsLXN1YmplY3QnLCBmb3JtVmFsdWVzLnN1YmplY3QpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NsLXJlc3VtZScsIHJlc3VtZUZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NsLW1lc3NhZ2UnLCBmb3JtVmFsdWVzLm1lc3NhZ2UpO1xuXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtY29udGVudC90aGVtZXMvc25vcmVsYWIvc2VuZC1mb3JtLnBocFwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldEZvcm1WYWx1ZXMoe1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBzdXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFuZGxlRmlsZURlbGV0ZSgpO1xuICAgICAgICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tlcl9vcGVuJyk7XG4gICAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VyZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKGUpID0+IHtcbiAgICBjb25zdCBibG9ja2VyID0gcmVmLmN1cnJlbnQ7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja2VyX29wZW4nKTtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwic2VuZC1mb3JtLnBocFwiIGFjY2VwdC1jaGFyc2V0PVwidXRmLThcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2ZpZWxkXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgY2FyZWVycy1mb3JtX19maWVsZC10aXRsZVwiPlxuICAgICAgICAgIEZpcnN0IG5hbWUqXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dC1ib3JkZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGV2dCl9XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2Zvcm1FcnJvcnMubmFtZSA/XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZXJyb3JcIj5cbiAgICAgICAgICB7Zm9ybUVycm9ycy5uYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19maWVsZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIGNhcmVlcnMtZm9ybV9fZmllbGQtdGl0bGVcIj5MYXN0IG5hbWUqPC9wPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2lucHV0LWJvcmRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZXZ0KX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLnN1cm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7Zm9ybUVycm9ycy5zdXJuYW1lID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19lcnJvclwiPlxuICAgICAgICAge2Zvcm1FcnJvcnMuc3VybmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZmllbGRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSBjYXJlZXJzLWZvcm1fX2ZpZWxkLXRpdGxlXCI+RW1haWwqPC9wPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXQtYm9yZGVyXCJcbiAgICAgICAgICBkYXRhLWVycm9yPVwiVGhpcyBmaWVsZCBjYW5gdCBiZSBlbXB0eS4gUGxlYXNlIGZpbGwgaW4gdGhlIGluZm9ybWF0aW9uLlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZXZ0KX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2Zvcm1FcnJvcnMuZW1haWwgP1xuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2Vycm9yXCI+XG4gICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZmllbGRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSBjYXJlZXJzLWZvcm1fX2ZpZWxkLXRpdGxlXCI+U3ViamVjdCo8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXQtYm9yZGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiBoYW5kbGVJbnB1dENoYW5nZShldnQpfVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuc3ViamVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtmb3JtRXJyb3JzLnN1YmplY3QgP1xuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2Vycm9yXCI+XG4gICAgICAgICB7Zm9ybUVycm9ycy5zdWJqZWN0fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19maWVsZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIGNhcmVlcnMtZm9ybV9fZmllbGQtdGl0bGVcIj5cbiAgICAgICAgICBBdHRhY2ggcmVzdW1lKlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dC1ib3JkZXIgY2FyZWVycy1mb3JtX19pbnB1dC1lcnJvclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dC1ib3JkZXJcIlxuICAgICAgICAgIGRhdGEtZXJyb3I9XCJVcGxvYWQgZmFpbGVkLiBNYXggc2l6ZSBmb3IgZmlsZXMgaXMgMTAgTUIuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInVwbG9hZFJlc3VtZVwiXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPVwicmVzdW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiBoYW5kbGVGaWxlVXBsb2FkKGV2dCl9XG4gICAgICAgICAgICByZWY9e3VwbG9hZElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fdXBsb2FkXCIgaHRtbEZvcj1cInVwbG9hZFJlc3VtZVwiPlxuICAgICAgICAgICAge3Jlc3VtZUZpbGVOYW1lfVxuICAgICAgICAgICAge3Byb2dyZXNzQWN0aXZlID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJlZXJzLWZvcm1fX3VwbG9hZC1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17bG9hZGVyfSAvPiBVcGxvYWRpbmcge2ZpbGVQcm9ncmVzc30gJVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fdXBsb2FkLWJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX3VwbG9hZC1idG5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHJlc3VtZUZpbGUgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZUZpbGVEZWxldGUoZXZ0KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtmb3JtRXJyb3JzLnJlc3VtZSA/XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZXJyb3JcIj5cbiAgICAgICAgIHtmb3JtRXJyb3JzLnJlc3VtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZmllbGQgY2FyZWVycy1mb3JtX19maWVsZC1tZXNzYWdlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgY2FyZWVycy1mb3JtX19maWVsZC10aXRsZVwiPk1lc3NhZ2UqPC9wPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2lucHV0LWJvcmRlclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX190ZXh0YXJlYVwiXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZXZ0KX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLm1lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7Zm9ybUVycm9ycy5tZXNzYWdlID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19lcnJvclwiPlxuICAgICAgICAge2Zvcm1FcnJvcnMubWVzc2FnZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fc3VibWl0LXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiBoYW5kbGVGb3JtU3VibWl0KGV2dCl9XG4gICAgICAgID5cbiAgICAgICAgICBTZW5kIG1lc3NhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY2FyZWVycy1mb3JtX19tb2RhbC13cmFwcGVyICR7XG4gICAgICAgICAgaXNNb2RhbE9wZW4gPyAnY2FyZWVycy1mb3JtX19tb2RhbF9vcGVuJyA6ICcnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fbW9kYWxcIiByZWY9e2NhcmVlcnNNb2RhbE1lc3NhZ2V9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19tb2RhbC1jbG9zZS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX21vZGFsLWNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4gaGFuZGxlTW9kYWxDbG9zZShldnQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX21vZGFsLWltZ1wiIHNyYz17cGFwZXJwbGFuZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfc2l6ZS1zIGNhcmVlcnMtZm9ybV9fbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgIFRoYW5rIHlvdSFcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwPldlIGhhdmUgcmVjZWl2ZWQgeW91ciBtZXNzYWdlLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59KTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyLCBmb3J3YXJkUmVmLCB1c2VSZWYgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBDYXJlZXJzRm9ybSB9IGZyb20gJy4vQ2FyZWVyc0Zvcm0nO1xuXG5jb25zdCBjdXJyZW50Sm9ic0FyciA9IFsnaU9TIERldmVsb3BlcicsICdBbmRyb2lkIERldmVsb3BlciddO1xuXG5leHBvcnQgY29uc3QgQ2FyZWVyc1BhZ2UgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZWVycy1wYWdlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtcGFnZV9fd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIHRpdGxlX3NpemUtbCBjYXJlZXJzLXBhZ2VfX3RpdGxlXCI+Q2FyZWVyczwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLXBhZ2VfX3N1YnRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8cD5XZSBhcmUgc2Vla2luZyB0YWxlbnRlZCBwZW9wbGUgdG8gam9pbiBvdXIgdGVhbS48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLXBhZ2VfX2luZm9cIj5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRXZSBhcmUgc21hbGwgdGVhbSB3aG8gYXJlIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgYSBiZXN0IGluIGNsYXNzIHByb2R1Y3QgdG8gaGVscCB0aGVcblx0XHRcdFx0XHRcdFx0d29ybGTigJlzIHNub3JlcnMgKGFuZCB0aGVpciBwYXJ0bmVycyEpIGltcHJvdmUgdGhlaXIgc2xlZXAuIFdlIGFyZSBsb2NhdGVkIGluIExvbmRvbiwgVUsuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLXBhZ2VfX2pvYnMtdGl0bGVcIj5BdCB0aGlzIHRpbWUgd2UgYXJlIHNlZWtpbmc6PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImNhcmVlcnMtcGFnZV9fam9icy1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdHtjdXJyZW50Sm9ic0Fyci5tYXAoam9iID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiY2FyZWVycy1wYWdlX19qb2JzLWl0ZW1cIiBrZXk9e2pvYn0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7am9ifVxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Q2FyZWVyc0Zvcm0gcmVmPXtyZWZ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufSk7XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtcGFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXBhZ2VfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLWwgY29udGFjdC1wYWdlX190aXRsZVwiPkNvbnRhY3QgVXM8L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1wYWdlX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0SWYgeW91IGVuY291bnRlciBhbnkgaXNzdWVzIHdpdGggU25vcmVMYWIgb3ImbmJzcDt3b3VsZCBsaWtlIHRvIGNvbnRhY3Rcblx0XHRcdFx0XHRcdFx0dXMmbmJzcDtmb3ImbmJzcDtwcmVzcyBlbnF1aXJpZXMgb3ImbmJzcDtidXNpbmVzcyBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzLFxuXHRcdFx0XHRcdFx0XHR5b3UmbmJzcDtjYW4mbmJzcDtyZWFjaCB1cyB2aWEgdGhlIFNlbmQgZmVlZGJhY2sgbGluayBpbiZuYnNwO3RoZSBhcHAsIG9yIGRpcmVjdGx5IG9uJm5ic3A7XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJtYWlsdG86c3VwcG9ydEBzbm9yZWxhYi5jb21cIiBjbGFzc05hbWU9XCJsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0c3VwcG9ydEBzbm9yZWxhYi5jb21cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSAnLi4vaG9va3MvdXNlRmV0Y2gnO1xuLy9jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmUgfSBmcm9tICcuL1F1ZXN0aW9ubmFpcmUnO1xuLy8gaW1wb3J0IHsgZXB3b3J0aFF1ZXN0aW9ucyB9IGZyb20gJy4uL2hlbHBlcnMvdmFyaWFibGVzJztcblxuZXhwb3J0IGNvbnN0IEVwd29ydGhRdWVzdGlvbm5haXJlID0gKCkgPT4ge1xuICBjb25zdCBlcHdvcnRoID0gdXNlRmV0Y2goXG4gICAgJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9wYWdlcz9zbHVnPWVwd29ydGgnLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc3QgW3Jlc3VsdE51bWJlciwgc2V0UmVzdWx0TnVtYmVyXSA9IHVzZVN0YXRlKC0xKTtcblxuICBpZiAoIWVwd29ydGguZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJxdWVzdGlvbm5haXJlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25uYWlyZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLW0gcXVlc3Rpb25uYWlyZS10aXRsZVwiPlxuICAgICAgICAgICAgICBFcHdvcnRoIFNsZWVwaW5lc3MgU2NhbGVcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfc2l6ZS1sXCI+TG9hZGluZy4uLjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1ZXN0aW9ubmFpcmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25uYWlyZS13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgeyhyZXN1bHROdW1iZXIgPT09IC0xKSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtbSBxdWVzdGlvbm5haXJlLXRpdGxlXCI+XG4gICAgICAgICAgICAgIEVwd29ydGggU2xlZXBpbmVzcyBTY2FsZVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25uYWlyZS10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEZlZWxpbmcgZXhjZXNzaXZlbHkgc2xlZXB5IGR1cmluZyB0aGUgZGF5IGlzIGEga2V5IHN5bXB0b20gb2ZcbiAgICAgICAgICAgICAgICBzbGVlcCBhcG5lYS4gQSB1c2VmdWwgd2F5IHRvIG1lYXN1cmUgeW91ciBmYXRpZ3VlIGlzIGJ5IHVzaW5nIHRoZVxuICAgICAgICAgICAgICAgIEVwd29ydGggU2xlZXBpbmVzcyBTY2FsZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBDb25zaWRlciB0aGUgc2NlbmFyaW9zIGJlbG93IGFuZCB0aGluayBhYm91dCBob3cgbGlrZWx5IHlvdSBhcmUgdG9cbiAgICAgICAgICAgICAgICBmYWxsIGFzbGVlcC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBZb3UgY2FueycgJ31cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIHJlYWQgbW9yZSBhYm91dCBpZGVudGlmeWluZyBvYnN0cnVjdGl2ZSZuYnNwO3NsZWVwIGFwbmVhXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgaW4mbmJzcDtTbm9yZUxhYuKAmXMgSW5zaWdodHMgYXJlYS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBZb3UgY2FuIGFsc28gYXNzZXNzIHlvdXIgc2xlZXAgYXBuZWEgcmlzayB1c2luZyB0aGV7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgU1RPUC1CYW5nIFF1ZXN0aW9ubmFpcmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgPFF1ZXN0aW9ubmFpcmVcbiAgICAgICAgICAgIHF1ZXN0aW9uc1R5cGU9e2Vwd29ydGguZGF0YVswXS5zbHVnfVxuICAgICAgICAgICAgcXVlc3Rpb25zPXtlcHdvcnRoLmRhdGF9XG4gICAgICAgICAgICBidG5UaXRsZT1cIkNhbGN1bGF0ZSByZXN1bHRzXCJcbiAgICAgICAgICAgIHJlc3VsdE51bWJlcj17cmVzdWx0TnVtYmVyfVxuICAgICAgICAgICAgc2V0UmVzdWx0TnVtYmVyPXtzZXRSZXN1bHROdW1iZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9ubmFpcmUtY2hhbmdlXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hcnJvdyBxdWVzdGlvbm5haXJlLWNoYW5nZV9fcHJldlwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvc3RvcGJhbmcvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5QcmV2PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hcnJvdyBidG5fZ3JheS10ZXh0IHF1ZXN0aW9ubmFpcmUtY2hhbmdlX19uZXh0XCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2Pk5leHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgbG9hZGVyIGZyb20gJy4uL2ltYWdlcy9sb2FkZXIuZ2lmJztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG4vL2NvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9BY2NvcmRpb24nO1xuLy8gaW1wb3J0IGZhcUVsZW1lbnRzQXJyIGZyb20gJ0AvaGVscGVycy9mYXFDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IEZhcVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGZhcUVsZW1lbnRzID0gdXNlRmV0Y2goXG4gICAgJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9wYWdlcz9zbHVnPWZhcXMnLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc29sZS5sb2coZmFxRWxlbWVudHMpO1xuXG4gIGlmICghZmFxRWxlbWVudHMuZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmYXEtcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhcS1wYWdlX193cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIHRpdGxlX3NpemUtbCBmYXEtcGFnZV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgRkFRXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFxLXBhZ2VfX3N1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIEZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImluc2lnaHQtbG9hZGVyXCIgYWx0PVwiXCIgc3JjPXtsb2FkZXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHQtbG9hZGVyLXRpdGxlXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmYXEtcGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXEtcGFnZV9fd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIHRpdGxlX3NpemUtbCBmYXEtcGFnZV9fdGl0bGVcIj5GQVE8L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcS1wYWdlX19zdWJ0aXRsZVwiPkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxLXBhZ2VfX2Jsb2NrXCI+XG4gICAgICAgICAgICB7LyogUmVuZGVycyBmb3JtZWQgRkFRIHNlY3Rpb25zICovfVxuICAgICAgICAgICAge2ZhcUVsZW1lbnRzLmRhdGFbMF0uYWNmLmZhcV9zZWN0aW9ucy5tYXAoKGVsZW1lbnQpID0+IChcbiAgICAgICAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgICAgIGtleT17ZWxlbWVudC5mYXFfc2VjdGlvbl90aXRsZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbWVudC5mYXFfc2VjdGlvbl90aXRsZX1cbiAgICAgICAgICAgICAgICBlbGVtZW50cz17ZWxlbWVudC5mYXFfc2VjdGlvbl9pdGVtc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgeyBGb290ZXJOYXZpZ2F0aW9uIH0gZnJvbSAnLi9Gb290ZXJOYXZpZ2F0aW9uJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb2wtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvIGZvb3Rlci1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlRoZSBTbm9yaW5nIE1hbmFnZW1lbnQgQXBwIGZvciBpT1MgYW5kIEFuZHJvaWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWZsZXggZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rIGZvb3Rlcl9fc29jaWFsLWxpbmtcIiBhcmlhLWxhYmVsPVwidHdpdHRlciBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjMwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMSAzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMS43ODg3IDI4QzguNTUzNzQgMjggNS41MzgxNyAyNy4wNTkxIDMgMjUuNDM1NkM1LjE1NDk5IDI1LjU3NTEgOC45NTgwNyAyNS4yNDExIDExLjMyMzYgMjIuOTg0OEM3Ljc2NTA4IDIyLjgyMTUgNi4xNjAyNiAyMC4wOTIzIDUuOTUwOTQgMTguOTI2QzYuMjUzMjkgMTkuMDQyNiA3LjY5NTMgMTkuMTgyNiA4LjUwOTM0IDE4Ljg1NkM0LjQxNTkgMTcuODI5NiAzLjc4NzkzIDE0LjIzNzMgMy45Mjc0OCAxMy4xNDFDNC42OTUgMTMuNjc3NSA1Ljk5NzQ1IDEzLjg2NDEgNi41MDkxMyAxMy44MTc0QzIuNjk0NzkgMTEuMDg4MiA0LjA2NzAzIDYuOTgyNzYgNC43NDE1MSA2LjA5NjM1QzcuNDc4ODIgOS44ODg2NyAxMS41ODEyIDEyLjAxODYgMTYuNjU2NCAxMi4xMzdDMTYuNTYwNyAxMS43MTc0IDE2LjUxMDIgMTEuMjgwNCAxNi41MTAyIDEwLjgzMTZDMTYuNTEwMiA3LjYxMDkyIDE5LjExMzQgNSAyMi4zMjQ3IDVDMjQuMDAyNSA1IDI1LjUxNDQgNS43MTI3NSAyNi41NzU3IDYuODUyODRDMjcuNjk2OSA2LjU5MDExIDI5LjM4NDMgNS45NzUwNyAzMC4yMDkyIDUuNDQzMkMyOS43OTM0IDYuOTM2MTEgMjguNDk4OSA4LjE4MTQ5IDI3LjcxNTkgOC42NDMwOEMyNy43MjI0IDguNjU4NzggMjcuNzA5NSA4LjYyNzMxIDI3LjcxNTkgOC42NDMwOEMyOC40MDM3IDguNTM5MDQgMzAuMjY0OCA4LjE4MTM3IDMxIDcuNjgyNTZDMzAuNjM2NCA4LjUyMTI1IDI5LjI2NCA5LjkxNTczIDI4LjEzNzcgMTAuNjk2NEMyOC4zNDczIDE5LjkzODEgMjEuMjc2NSAyOCAxMS43ODg3IDI4WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMxREExRjJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rIGZvb3Rlcl9fc29jaWFsLWxpbmtcIiBhcmlhLWxhYmVsPVwiZmFjZWJvb2sgbGlua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3g9XCIxNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3k9XCIxNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cj1cIjEzLjEyNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcl85Nl8zNTgpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE5Ljg4NzkgMTkuMDE0TDIwLjQ3MDkgMTUuMzA5NUgxNi44MjM2VjEyLjkwNjZDMTYuODIzNiAxMS44OTI4IDE3LjMzMjIgMTAuOTA0MSAxOC45NjU4IDEwLjkwNDFIMjAuNjI1VjcuNzUwM0MyMC42MjUgNy43NTAzIDE5LjExOTkgNy41IDE3LjY4MTUgNy41QzE0LjY3NjQgNy41IDEyLjcxNDEgOS4yNzQ2MyAxMi43MTQxIDEyLjQ4NlYxNS4zMDk1SDkuMzc1VjE5LjAxNEgxMi43MTQxVjI3Ljk2OThDMTMuMzg0NCAyOC4wNzI1IDE0LjA3MDIgMjguMTI1IDE0Ljc2ODggMjguMTI1QzE1LjQ2NzUgMjguMTI1IDE2LjE1MzMgMjguMDcyNSAxNi44MjM2IDI3Ljk2OThWMTkuMDE0SDE5Ljg4NzlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQwX2xpbmVhcl85Nl8zNThcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDE9XCIxNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5MT1cIjEuODc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiMTVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTI9XCIyOC4wNDcxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agc3RvcENvbG9yPVwiIzE4QUNGRVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzAxNjNFMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9vdGVyTmF2aWdhdGlvbiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY29sLTNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19pbmZvLWFwcHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiMjXCIgY2xhc3NOYW1lPVwibGluayBob21lLW1haW5fX2luZm8tYXBwIGdvb2dsZS1wbGF5LWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMjhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyOCAzMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfaWlfNjU4XzE5NzUpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0wLjU2MTQ2NCAwLjQ5NDAyQzAuMjA4NTc5IDAuODc3MjEyIC01LjE4MTA1ZS0wNyAxLjQ3MTkxIC01LjE4MTA1ZS0wNyAyLjI0MjAzVjI5Ljc1NzJDLTUuMTgxMDVlLTA3IDMwLjUyODYgMC4yMDg1NzkgMzEuMTIyIDAuNTYxNDY0IDMxLjUwNTJMMC42NTEyIDMxLjU5NDhMMTUuNjc0OSAxNi4xODEzVjE1Ljk5OTZWMTUuODE4TDAuNjUxMiAwLjQwMzE5OEwwLjU2MTQ2NCAwLjQ5NDAyWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcl82NThfMTk3NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjAuNjgxOSAyMS4zMjA3TDE1LjY3NDggMTYuMTgxMlYxNS45OTk2VjE1LjgxOEwyMC42ODMxIDEwLjY3OTdMMjAuNzk1OCAxMC43NDU2TDI2LjcyOTQgMTQuMjA0M0MyOC40MjM1IDE1LjE5MjIgMjguNDIzNSAxNi44MDgzIDI2LjcyOTQgMTcuNzk3NEwyMC43OTU4IDIxLjI1NjFMMjAuNjgxOSAyMS4zMjA3WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQxX2xpbmVhcl82NThfMTk3NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjFfaV82NThfMTk3NSlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0yMC43OTU4IDIxLjI1NDhMMTUuNjczNiAxNS45OTk2TDAuNTYxMzcyIDMxLjUwNTJDMS4xMTkyIDMyLjExMjQgMi4wNDIwMyAzMi4xODcgMy4wODEyOCAzMS41ODI0TDIwLjc5NTggMjEuMjU0OFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQyX2xpbmVhcl82NThfMTk3NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIwLjc5NTggMTAuNzQ0NEwzLjA4MTI4IDAuNDE4MTIyQzIuMDQyMDMgLTAuMTg3NzcgMS4xMTkyIC0wLjExMTg3OCAwLjU2MTM3MiAwLjQ5NTI1OEwxNS42NzQ4IDE2LjAwMDlMMjAuNzk1OCAxMC43NDQ0WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQzX2xpbmVhcl82NThfMTk3NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRlZnM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmaWx0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImZpbHRlcjBfaWlfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHg9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlPVwibm9ybWFsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlR3JhcGhpY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0PVwic2hhcGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm1hdHJpeFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJoYXJkQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR5PVwiLTAuMTU5Mzc1XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb21wb3NpdGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cImhhcmRBbHBoYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVyYXRvcj1cImFyaXRobWV0aWNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0azI9XCItMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrMz1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJtYXRyaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMiAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlPVwibm9ybWFsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cInNoYXBlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cImVmZmVjdDFfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm1hdHJpeFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJoYXJkQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR5PVwiMC4xNTkzNzVcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUNvbXBvc2l0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW4yPVwiaGFyZEFscGhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wZXJhdG9yPVwiYXJpdGhtZXRpY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrMj1cIi0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGszPVwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb2xvck1hdHJpeFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm1hdHJpeFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjI1IDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQmxlbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU9XCJub3JtYWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW4yPVwiZWZmZWN0MV9pbm5lclNoYWRvd182NThfMTk3NVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJlZmZlY3QyX2lubmVyU2hhZG93XzY1OF8xOTc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2ZpbHRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZpbHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZmlsdGVyMV9pXzY1OF8xOTc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4PVwiMC41NjEzNzFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHk9XCIxNS45OTk2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjIwLjIzNDVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjE2LjAwMDRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlPVwibm9ybWFsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlR3JhcGhpY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0PVwic2hhcGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm1hdHJpeFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJoYXJkQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR5PVwiLTAuMTU5Mzc1XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb21wb3NpdGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cImhhcmRBbHBoYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVyYXRvcj1cImFyaXRobWV0aWNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0azI9XCItMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrMz1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJtYXRyaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlPVwibm9ybWFsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cInNoYXBlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cImVmZmVjdDFfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZmlsdGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhaW50MF9saW5lYXJfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiMTQuMzQzMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCIxLjk1MDlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiLTYuNTI5MDRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkyPVwiMjIuMjk1MVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIHN0b3BDb2xvcj1cIiMwMEEwRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMDA2NlwiIHN0b3BDb2xvcj1cIiMwMEExRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMjYwMVwiIHN0b3BDb2xvcj1cIiMwMEJFRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNTEyMlwiIHN0b3BDb2xvcj1cIiMwMEQyRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNzYwNFwiIHN0b3BDb2xvcj1cIiMwMERGRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDBFM0ZGXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpbmVhckdyYWRpZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYWludDFfbGluZWFyXzY1OF8xOTc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4MT1cIjI4LjkzNDZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkxPVwiMTUuOTk5NlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDI9XCItMC40MDY4MlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTI9XCIxNS45OTk2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agc3RvcENvbG9yPVwiI0ZGRTAwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC40MDg3XCIgc3RvcENvbG9yPVwiI0ZGQkQwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC43NzU0XCIgc3RvcENvbG9yPVwiI0ZGQTUwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGRjlDMDBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhaW50Ml9saW5lYXJfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiMTguMDE0MVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCIxOC44NTM1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4Mj1cIi0xMC4yOTEyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5Mj1cIjQ2LjQ0MjlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wQ29sb3I9XCIjRkYzQTQ0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0MzMTE2MlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGluZWFyR3JhZGllbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaW5lYXJHcmFkaWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQzX2xpbmVhcl82NThfMTk3NVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDE9XCItMy4yNDQ2OVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCItOC42NjQyOVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDI9XCI5LjM5NDRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkyPVwiMy42NTUxMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIHN0b3BDb2xvcj1cIiMzMkEwNzFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMDY4NVwiIHN0b3BDb2xvcj1cIiMyREE3NzFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNDc2MlwiIHN0b3BDb2xvcj1cIiMxNUNGNzRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuODAwOVwiIHN0b3BDb2xvcj1cIiMwNkU3NzVcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDBGMDc2XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEwN1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDEwNyAzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTcuNjU2MiA0LjIxMTY3QzcuNjU2MiA1LjI1NjQ5IDcuMzQzMTkgNi4wODgxMiA2LjcxNTkgNi43MDkwM0M2LjAwNDA1IDcuNDQ3MTQgNS4wNzUxMSA3LjgxNjIgMy45MzQxMiA3LjgxNjJDMi44NDExIDcuODE2MiAxLjkxMDkgNy40NDIxNSAxLjE0NzI5IDYuNjk0MDdDMC4zODI0MzIgNS45NDQ3MyAwIDUuMDE3MTEgMCAzLjkwOTk0QzAgMi44MDE1MiAwLjM4MjQzMiAxLjg3MzkgMS4xNDcyOSAxLjEyNTgxQzEuOTEwOSAwLjM3NjQ3OCAyLjg0MTEgMC4wMDI0MzYxOCAzLjkzNDEyIDAuMDAyNDM2MThDNC40NzY4NSAwLjAwMjQzNjE4IDQuOTk1NTkgMC4xMDcxNjggNS40ODc4MyAwLjMxNTM4NUM1Ljk4MTMzIDAuNTI0ODQ5IDYuMzc2MzggMC44MDI4ODggNi42NzE3MiAxLjE1MDc1TDYuMDA2NTcgMS44MDkwNkM1LjUwNTUgMS4yMTY4MyA0LjgxNTEgMC45MjEzMzUgMy45MzI4NiAwLjkyMTMzNUMzLjEzNTE4IDAuOTIxMzM1IDIuNDQ2MDQgMS4xOTgxMyAxLjg2NDE5IDEuNzUxNzFDMS4yODIzNCAyLjMwNTI5IDAuOTkyMDQ5IDMuMDI0NyAwLjk5MjA0OSAzLjkwODY5QzAuOTkyMDQ5IDQuNzkyNjggMS4yODIzNCA1LjUxMjA5IDEuODY0MTkgNi4wNjU2N0MyLjQ0NjA0IDYuNjE5MjYgMy4xMzUxOCA2Ljg5NjA1IDMuOTMyODYgNi44OTYwNUM0Ljc3ODUgNi44OTYwNSA1LjQ4NDA0IDYuNjE4MDEgNi4wNDgyMiA2LjA2MDY5QzYuNDE0MjUgNS42OTc4NiA2LjYyNjI5IDUuMTkyOTEgNi42ODMwOCA0LjU0NTgxSDMuOTMyODZWMy42NDY4Nkg3LjYwMTkzQzcuNjM5NzkgMy44NDI2MSA3LjY1NjIgNC4wMzA4OCA3LjY1NjIgNC4yMTE2N1pcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTMuNDc0OCAxLjA4NzIzSDEwLjAyNjZWMy40NTg2NkgxMy4xMzY2VjQuMzU3NjJIMTAuMDI2NlY2LjcyOTA1SDEzLjQ3NDhWNy42NDkxOUg5LjA1MzUyVjAuMTY4MzMySDEzLjQ3NDhWMS4wODcyM1pcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTcuNTc3OSA3LjY0OTE5SDE2LjYwNDhWMS4wODcyM0gxNC40ODk1VjAuMTY4MzMySDE5LjY5MzNWMS4wODcyM0gxNy41Nzc5VjcuNjQ5MTlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIzLjQ1ODIgNy42NDkxOVYwLjE2ODMzMkgyNC40MzE0VjcuNjQ5MTlIMjMuNDU4MlpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjguNzQ2OSA3LjY0OTE5SDI3Ljc3MzdWMS4wODcyM0gyNS42NTg0VjAuMTY4MzMySDMwLjg2MjJWMS4wODcyM0gyOC43NDY5VjcuNjQ5MTlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTQwLjcxMyA2LjY4MjlDMzkuOTY4MyA3LjQzODQ3IDM5LjA0MzIgNy44MTYyNSAzNy45MzYzIDcuODE2MjVDMzYuODI5NCA3LjgxNjI1IDM1LjkwNDIgNy40Mzg0NyAzNS4xNjA4IDYuNjgyOUMzNC40MTYxIDUuOTI3MzQgMzQuMDQ1MSA1LjAwMjIgMzQuMDQ1MSAzLjkwODc1QzM0LjA0NTEgMi44MTUzIDM0LjQxNjEgMS44OTAxNiAzNS4xNjA4IDEuMTM0NkMzNS45MDQyIDAuMzc5MDMgMzYuODI5NCAwIDM3LjkzNjMgMEMzOS4wMzY5IDAgMzkuOTYwOCAwLjM4MDI3NyA0MC43MDggMS4xMzk1OEM0MS40NTUyIDEuODk4ODkgNDEuODI4OCAyLjgyMTUzIDQxLjgyODggMy45MDg3NUM0MS44Mjg4IDUuMDAyMiA0MS40NTY0IDUuOTI3MzQgNDAuNzEzIDYuNjgyOVpNMzUuODc5IDYuMDU1NzZDMzYuNDM5NCA2LjYxNjgyIDM3LjEyNDcgNi44OTYxMSAzNy45MzYzIDYuODk2MTFDMzguNzQ3OCA2Ljg5NjExIDM5LjQzNDUgNi42MTU1OCAzOS45OTM2IDYuMDU1NzZDNDAuNTU0IDUuNDk0NjkgNDAuODM1NCA0Ljc3OTAyIDQwLjgzNTQgMy45MDg3NUM0MC44MzU0IDMuMDM4NDggNDAuNTU0IDIuMzIyODEgMzkuOTkzNiAxLjc2MTc0QzM5LjQzNDUgMS4yMDA2OCAzOC43NDc4IDAuOTIxMzkzIDM3LjkzNjMgMC45MjEzOTNDMzcuMTI0NyAwLjkyMTM5MyAzNi40Mzk0IDEuMjAxOTMgMzUuODc5IDEuNzYxNzRDMzUuMzE5OCAyLjMyMjgxIDM1LjAzODQgMy4wMzg0OCAzNS4wMzg0IDMuOTA4NzVDMzUuMDM4NCA0Ljc3OTAyIDM1LjMxOTggNS40OTQ2OSAzNS44NzkgNi4wNTU3NlpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNDMuMTk0NCA3LjY0OTE5VjAuMTY4MzMySDQ0LjM3ODNMNDguMDU4OCA1Ljk4NzJINDguMTAwNEw0OC4wNTg4IDQuNTQ1ODhWMC4xNjgzMzJINDkuMDMxOVY3LjY0OTE5SDQ4LjAxNThMNDQuMTY1IDEuNTQ3MzFINDQuMTIzNEw0NC4xNjUgMi45ODg2MlY3LjY0OTE5SDQzLjE5NDRaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTM0LjE5NjcgMTguNjMxOEMzMS4yMjgxIDE4LjYzMTggMjguODA4NiAyMC44NjI0IDI4LjgwODYgMjMuOTM0NUMyOC44MDg2IDI2Ljk4NzkgMzEuMjI4MSAyOS4yMzcyIDM0LjE5NjcgMjkuMjM3MkMzNy4xNjY1IDI5LjIzNzIgMzkuNTg2MSAyNi45ODc5IDM5LjU4NjEgMjMuOTM0NUMzOS41ODQ4IDIwLjg2MjQgMzcuMTY1MyAxOC42MzE4IDM0LjE5NjcgMTguNjMxOFpNMzQuMTk2NyAyNy4xNUMzMi41Njk4IDI3LjE1IDMxLjE2NzUgMjUuODI0NyAzMS4xNjc1IDIzLjkzNThDMzEuMTY3NSAyMi4wMjY5IDMyLjU3MSAyMC43MjE1IDM0LjE5NjcgMjAuNzIxNUMzNS44MjM2IDIwLjcyMTUgMzcuMjI1OCAyMi4wMjY5IDM3LjIyNTggMjMuOTM1OEMzNy4yMjU4IDI1LjgyMzQgMzUuODIzNiAyNy4xNSAzNC4xOTY3IDI3LjE1Wk0yMi40NDEgMTguNjMxOEMxOS40NzI0IDE4LjYzMTggMTcuMDUyOSAyMC44NjI0IDE3LjA1MjkgMjMuOTM0NUMxNy4wNTI5IDI2Ljk4NzkgMTkuNDcyNCAyOS4yMzcyIDIyLjQ0MSAyOS4yMzcyQzI1LjQxMDkgMjkuMjM3MiAyNy44MzA0IDI2Ljk4NzkgMjcuODMwNCAyMy45MzQ1QzI3LjgzMDQgMjAuODYyNCAyNS40MTA5IDE4LjYzMTggMjIuNDQxIDE4LjYzMThaTTIyLjQ0MSAyNy4xNUMyMC44MTQxIDI3LjE1IDE5LjQxMTkgMjUuODI0NyAxOS40MTE5IDIzLjkzNThDMTkuNDExOSAyMi4wMjY5IDIwLjgxNTQgMjAuNzIxNSAyMi40NDEgMjAuNzIxNUMyNC4wNjc5IDIwLjcyMTUgMjUuNDcwMiAyMi4wMjY5IDI1LjQ3MDIgMjMuOTM1OEMyNS40NzE0IDI1LjgyMzQgMjQuMDY3OSAyNy4xNSAyMi40NDEgMjcuMTVaTTguNDU4OTMgMjIuNTA5NEgxMy45MDg5QzEzLjc0NjEgMjMuNzc0OSAxMy4zMTk1IDI0LjY5ODggMTIuNjY4MiAyNS4zNDA5QzExLjg3NTYgMjYuMTIzOSAxMC42MzQ5IDI2Ljk4NzkgOC40NTg5MyAyNi45ODc5QzUuMTA0MTMgMjYuOTg3OSAyLjQ4MTM5IDI0LjMxNiAyLjQ4MTM5IDIxLjAwMkMyLjQ4MTM5IDE3LjY4OCA1LjEwNDEzIDE1LjAxNjEgOC40NTg5MyAxNS4wMTYxQzEwLjI2ODkgMTUuMDE2MSAxMS41OTAzIDE1LjcxOTMgMTIuNTY2IDE2LjYyMzJMMTQuMTcyNyAxNS4wMzZDMTIuODA5NiAxMy43NTA2IDExLjAwMDkgMTIuNzY2OCA4LjQ1ODkzIDEyLjc2NjhDMy44NjM0NCAxMi43NjY4IDAgMTYuNDYyNCAwIDIxLjAwMkMwIDI1LjU0MTYgMy44NjM0NCAyOS4yMzcyIDguNDU4OTMgMjkuMjM3MkMxMC45MzkxIDI5LjIzNzIgMTIuODEwOCAyOC40MzMgMTQuMjczNyAyNi45MjY4QzE1Ljc3ODEgMjUuNDQwNiAxNi4yNDY0IDIzLjM1MSAxNi4yNDY0IDIxLjY2NDFDMTYuMjQ2NCAyMS4xNDI5IDE2LjIwNiAyMC42NjA0IDE2LjEyNCAyMC4yNTg5SDguNDU4OTNWMjIuNTA5NFpNNjUuNjQ0NCAyMi4wMDY5QzY1LjE5NzYgMjAuODIyNSA2My44MzQ1IDE4LjYzMTggNjEuMDQ4OSAxOC42MzE4QzU4LjI4MzYgMTguNjMxOCA1NS45ODUyIDIwLjc4MTMgNTUuOTg1MiAyMy45MzQ1QzU1Ljk4NTIgMjYuOTA2OSA1OC4yNjM0IDI5LjIzNzIgNjEuMzEyNyAyOS4yMzcyQzYzLjc3MjYgMjkuMjM3MiA2NS4xOTYzIDI3Ljc1MSA2NS43ODcgMjYuODg3TDYzLjk1NjkgMjUuNjgxM0M2My4zNDczIDI2LjU2NTMgNjIuNTEzIDI3LjE0NzUgNjEuMzEyNyAyNy4xNDc1QzYwLjExMzcgMjcuMTQ3NSA1OS4yNTkyIDI2LjYwNTIgNTguNzEwMiAyNS41NDA0TDY1Ljg4OCAyMi42MDc5TDY1LjY0NDQgMjIuMDA2OVpNNTguMzIzOSAyMy43NzQ5QzU4LjI2MzQgMjEuNzI1MiA1OS45MzA3IDIwLjY4MTYgNjEuMTMxIDIwLjY4MTZDNjIuMDY2MiAyMC42ODE2IDYyLjg1ODggMjEuMTQ0MSA2My4xMjM5IDIxLjgwNjJMNTguMzIzOSAyMy43NzQ5Wk01Mi40ODkgMjguOTE2OEg1NC44NDY3VjEzLjMzMDRINTIuNDg5VjI4LjkxNjhaTTQ4LjU0MzUgMTkuODE3NUM0OC4wMTQ3IDE5LjE5NDEgNDYuOTk3NCAxOC42MzE4IDQ1LjcxNzYgMTguNjMxOEM0My4wMzMgMTguNjMxOCA0MC41NzMxIDIwLjk2MjEgNDAuNTczMSAyMy45NTU3QzQwLjU3MzEgMjYuOTI4MSA0My4wMzMgMjkuMjM4NCA0NS43MTc2IDI5LjIzODRDNDYuOTk4NyAyOS4yMzg0IDQ4LjAxNDcgMjguNjc2MSA0OC41NDM1IDI4LjAzNEg0OC42MjQzVjI4Ljc5NzFDNDguNjI0MyAzMC44MjU2IDQ3LjUyNjIgMzEuOTEwNCA0NS43NTggMzEuOTEwNEM0NC4zMTQxIDMxLjkxMDQgNDMuNDE5MiAzMC44ODY3IDQzLjA1MzIgMzAuMDIyN0w0MC45OTk3IDMwLjg2NjhDNDEuNTg5MSAzMi4yNzE5IDQzLjE1NDIgMzQgNDUuNzU4IDM0QzQ4LjUyMzMgMzQgNTAuODYyMSAzMi4zOTI5IDUwLjg2MjEgMjguNDc1NFYxOC45NTQ3SDQ4LjYyNTZWMTkuODE3NUg0OC41NDM1Wk00NS45MjA4IDI3LjE1QzQ0LjI5MzkgMjcuMTUgNDIuOTMyIDI1LjgwMzUgNDIuOTMyIDIzLjk1NTdDNDIuOTMyIDIyLjA4NjcgNDQuMjkzOSAyMC43MjE1IDQ1LjkyMDggMjAuNzIxNUM0Ny41MjYyIDIwLjcyMTUgNDguNzg3MSAyMi4wODY3IDQ4Ljc4NzEgMjMuOTU1N0M0OC43ODcxIDI1LjgwMzUgNDcuNTI2MiAyNy4xNSA0NS45MjA4IDI3LjE1Wk03Ni42OTMzIDEzLjMzMDRINzEuMDUwMlYyOC45MTY4SDczLjQwNDFWMjMuMDExOUg3Ni42OTJDNzkuMzAyMSAyMy4wMTE5IDgxLjg2OTMgMjEuMTQ1NCA4MS44NjkzIDE4LjE3MTdDODEuODY5MyAxNS4xOTgxIDc5LjMwMzQgMTMuMzMwNCA3Ni42OTMzIDEzLjMzMDRaTTc2Ljc1MzggMjAuODQyNEg3My40MDQxVjE1LjQ5OThINzYuNzUzOEM3OC41MTQ1IDE1LjQ5OTggNzkuNTE0MiAxNi45Mzk5IDc5LjUxNDIgMTguMTcxN0M3OS41MTQyIDE5LjM3ODcgNzguNTE0NSAyMC44NDI0IDc2Ljc1MzggMjAuODQyNFpNOTEuMzA5IDE4LjYwNDRDODkuNjAzOCAxOC42MDQ0IDg3LjgzODEgMTkuMzQ2MiA4Ny4xMDczIDIwLjk5MDhMODkuMTk3NCAyMS44NTIzQzg5LjY0NDIgMjAuOTkwOCA5MC40NzcyIDIwLjcwOSA5MS4zNDkzIDIwLjcwOUM5Mi41NjczIDIwLjcwOSA5My44MDU1IDIxLjQzMDkgOTMuODI1NyAyMi43MTM5VjIyLjg3NDdDOTMuMzk5MSAyMi42MzQxIDkyLjQ4NTMgMjIuMjczOCA5MS4zNjk1IDIyLjI3MzhDODkuMTE2NiAyMi4yNzM4IDg2LjgyMiAyMy40OTY5IDg2LjgyMiAyNS43ODIzQzg2LjgyMiAyNy44NjgyIDg4LjY2OTggMjkuMjExIDkwLjczOTcgMjkuMjExQzkyLjMyMjUgMjkuMjExIDkzLjE5NTkgMjguNTA5MSA5My43NDM3IDI3LjY4NjJIOTMuODI0NFYyOC44ODkzSDk2LjA5ODhWMjIuOTEzNEM5Ni4xMDAxIDIwLjE0NzkgOTQuMDA3NCAxOC42MDQ0IDkxLjMwOSAxOC42MDQ0Wk05MS4wMjM3IDI3LjE0NjNDOTAuMjUzOCAyNy4xNDYzIDg5LjE3NzIgMjYuNzY0OCA4OS4xNzcyIDI1LjgyMjJDODkuMTc3MiAyNC42MTkgOTAuNTE3NiAyNC4xNTc3IDkxLjY3NSAyNC4xNTc3QzkyLjcwODcgMjQuMTU3NyA5My4xOTcxIDI0LjM3ODQgOTMuODI1NyAyNC42Nzg5QzkzLjY0MjcgMjYuMTIzOSA5Mi4zODQzIDI3LjE0NjMgOTEuMDIzNyAyNy4xNDYzWk0xMDQuMzgxIDE4Ljk0NDhMMTAxLjY4MSAyNS43MDI1SDEwMS42MDFMOTguNzk4NiAxOC45NDQ4SDk2LjI2MTZMMTAwLjQ2MyAyOC4zODk0TDk4LjA2NzggMzMuNjQzNEgxMDAuNTI0TDEwNyAxOC45NDQ4SDEwNC4zODFaTTgzLjE2OTMgMjguOTE2OEg4NS41MjMzVjEzLjMzMDRIODMuMTY5M1YyOC45MTY4WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjI1wiIGNsYXNzTmFtZT1cImxpbmsgaG9tZS1tYWluX19pbmZvLWFwcCBhcHAtc3RvcmUtYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI2IDMyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjEuNzE1OSAxNy4wMTc1QzIxLjc0NzYgMTQuNTQ3MiAyMy4wNzI1IDEyLjIwOTggMjUuMTc0MiAxMC45MTZDMjMuODQ4MyA5LjAxOTg0IDIxLjYyNzUgNy44MTc2MyAxOS4zMTcgNy43NDUyNEMxNi44NTI2IDcuNDg2MjMgMTQuNDYzNSA5LjIyMTg2IDEzLjIwNzcgOS4yMjE4NkMxMS45Mjc2IDkuMjIxODYgOS45OTQxIDcuNzcwOTYgNy45MTIwNCA3LjgxMzg2QzUuMTk4MTYgNy45MDE2NSAyLjY2ODE1IDkuNDQ2NjggMS4zNDc3OSAxMS44MjI1Qy0xLjQ5MDQ2IDE2Ljc0MyAwLjYyNjYxOSAyMy45NzQ2IDMuMzQ1NDIgMjcuOTUyQzQuNzA1NyAyOS44OTk2IDYuMjk1NDcgMzIuMDc1MiA4LjM3NTY2IDMxLjk5OEMxMC40MTEyIDMxLjkxMzUgMTEuMTcxNSAzMC42OTgyIDEzLjYyODYgMzAuNjk4MkMxNi4wNjI5IDMwLjY5ODIgMTYuNzc2MiAzMS45OTggMTguODk4NiAzMS45NDlDMjEuMDgyOSAzMS45MTM1IDIyLjQ1OTEgMjkuOTkyNyAyMy43NzE2IDI4LjAyNjZDMjQuNzQ5IDI2LjYzODkgMjUuNTAxMSAyNS4xMDUxIDI2IDIzLjQ4MjFDMjMuNDMzMSAyMi4zOTUgMjEuNzE4OSAxOS44MDgzIDIxLjcxNTkgMTcuMDE3NVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTcuNzA3IDUuMTI5NTFDMTguODk4IDMuNjk3OSAxOS40ODQ3IDEuODU3ODEgMTkuMzQyNiAwQzE3LjUyMzEgMC4xOTEzNjEgMTUuODQyNCAxLjA2MjEzIDE0LjYzNTMgMi40Mzg4MkMxMy40NTUgMy43ODM5MSAxMi44NDA3IDUuNTkxNjMgMTIuOTU2OSA3LjM3ODQzQzE0Ljc3NyA3LjM5NzE5IDE2LjU2NjQgNi41NTAwMiAxNy43MDcgNS4xMjk1MVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEwNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDEwNiAzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTAgMC40MDIxMjVWOC41NzQ4OUgzLjA1MzAyQzUuNTcyNzggOC41NzQ4OSA3LjAzMTkgNy4wNzQgNy4wMzE5IDQuNDYzMDJDNy4wMzE5IDEuODkxNjkgNS41NjEwNiAwLjQwMjEyNSAzLjA1MzAyIDAuNDAyMTI1SDBaTTEuMzEyNjIgMS41NTc1M0gyLjkwNjUyQzQuNjU4NjQgMS41NTc1MyA1LjY5NTg0IDIuNjMzNjMgNS42OTU4NCA0LjQ4MDAxQzUuNjk1ODQgNi4zNTQ3IDQuNjc2MjIgNy40MTk0OCAyLjkwNjUyIDcuNDE5NDhIMS4zMTI2MlYxLjU1NzUzWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMS41MDA3IDguNjkzODJDMTMuMzY0MSA4LjY5MzgyIDE0LjUwNjggNy40ODc0NSAxNC41MDY4IDUuNDg4MTVDMTQuNTA2OCAzLjUwMDE4IDEzLjM1ODMgMi4yODgxNSAxMS41MDA3IDIuMjg4MTVDOS42MzcyMiAyLjI4ODE1IDguNDg4NjggMy41MDAxOCA4LjQ4ODY4IDUuNDg4MTVDOC40ODg2OCA3LjQ4NzQ1IDkuNjMxMzYgOC42OTM4MiAxMS41MDA3IDguNjkzODJaTTExLjUwMDcgNy42MTIwNUMxMC40MDQ5IDcuNjEyMDUgOS43ODk1OCA2LjgzNjEyIDkuNzg5NTggNS40ODgxNUM5Ljc4OTU4IDQuMTUxNTEgMTAuNDA0OSAzLjM2OTkyIDExLjUwMDcgMy4zNjk5MkMxMi41OTA2IDMuMzY5OTIgMTMuMjExOCA0LjE1MTUxIDEzLjIxMTggNS40ODgxNUMxMy4yMTE4IDYuODMwNDYgMTIuNTkwNiA3LjYxMjA1IDExLjUwMDcgNy42MTIwNVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjQuMjM3OCAyLjQwNzA4SDIyLjk3NzlMMjEuODQxMSA3LjExMzY0SDIxLjc0MTVMMjAuNDI4OCAyLjQwNzA4SDE5LjIyMTdMMTcuOTA5MSA3LjExMzY0SDE3LjgxNTNMMTYuNjcyNiAyLjQwNzA4SDE1LjM5NTJMMTcuMTUzMiA4LjU3NDg5SDE4LjQ0ODJMMTkuNzYwOCA0LjAzMjU4SDE5Ljg2MDRMMjEuMTc4OSA4LjU3NDg5SDIyLjQ4NTdMMjQuMjM3OCAyLjQwNzA4WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0yNS42ODg3IDguNTc0ODlIMjYuOTQ4NlY0Ljk2NzA5QzI2Ljk0ODYgNC4wMDQyNiAyNy41NDA0IDMuNDAzOSAyOC40NzIyIDMuNDAzOUMyOS40MDM5IDMuNDAzOSAyOS44NDkzIDMuODk2NjUgMjkuODQ5MyA0Ljg4NzhWOC41NzQ4OUgzMS4xMDkxVjQuNTgxOTZDMzEuMTA5MSAzLjExNTA1IDMwLjMyMzkgMi4yODgxNSAyOC44OTk5IDIuMjg4MTVDMjcuOTM4OSAyLjI4ODE1IDI3LjMwNiAyLjcwMTYgMjYuOTk1NSAzLjM4NjkxSDI2LjkwMTdWMi40MDcwOEgyNS42ODg3VjguNTc0ODlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTMzLjA5MzMgOC41NzQ4OUgzNC4zNTMyVjBIMzMuMDkzM1Y4LjU3NDg5WlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTM5LjA5MTUgOC42OTM4MkM0MC45NTUgOC42OTM4MiA0Mi4wOTc3IDcuNDg3NDUgNDIuMDk3NyA1LjQ4ODE1QzQyLjA5NzcgMy41MDAxOCA0MC45NDkxIDIuMjg4MTUgMzkuMDkxNSAyLjI4ODE1QzM3LjIyODEgMi4yODgxNSAzNi4wNzk1IDMuNTAwMTggMzYuMDc5NSA1LjQ4ODE1QzM2LjA3OTUgNy40ODc0NSAzNy4yMjIyIDguNjkzODIgMzkuMDkxNSA4LjY5MzgyWk0zOS4wOTE1IDcuNjEyMDVDMzcuOTk1NyA3LjYxMjA1IDM3LjM4MDQgNi44MzYxMiAzNy4zODA0IDUuNDg4MTVDMzcuMzgwNCA0LjE1MTUxIDM3Ljk5NTcgMy4zNjk5MiAzOS4wOTE1IDMuMzY5OTJDNDAuMTgxNSAzLjM2OTkyIDQwLjgwMjYgNC4xNTE1MSA0MC44MDI2IDUuNDg4MTVDNDAuODAyNiA2LjgzMDQ2IDQwLjE4MTUgNy42MTIwNSAzOS4wOTE1IDcuNjEyMDVaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTQ1Ljg1MTUgNy42NTE3QzQ1LjE2NTkgNy42NTE3IDQ0LjY2NzggNy4zMjg4NyA0NC42Njc4IDYuNzczODJDNDQuNjY3OCA2LjIzMDEgNDUuMDY2MyA1Ljk0MTI1IDQ1Ljk0NTMgNS44ODQ2MUw0Ny41MDQgNS43ODgzM1Y2LjMwMzczQzQ3LjUwNCA3LjA2ODMzIDQ2LjgwMDggNy42NTE3IDQ1Ljg1MTUgNy42NTE3Wk00NS41MjkyIDguNjc2ODNDNDYuMzY3MiA4LjY3NjgzIDQ3LjA2NDUgOC4zMjU2OCA0Ny40NDU0IDcuNzA4MzNINDcuNTQ1VjguNTc0ODlINDguNzU4VjQuMzYxMDdDNDguNzU4IDMuMDU4NDEgNDcuODU1NiAyLjI4ODE1IDQ2LjI1NTggMi4yODgxNUM0NC44MDg0IDIuMjg4MTUgNDMuNzc3MSAyLjk2Nzc5IDQzLjY0ODIgNC4wMjY5MUg0NC44NjcxQzQ1LjAwNzcgMy41OTA4IDQ1LjQ5NDEgMy4zNDE2IDQ2LjE5NzMgMy4zNDE2QzQ3LjA1ODcgMy4zNDE2IDQ3LjUwNCAzLjcwOTc0IDQ3LjUwNCA0LjM2MTA3VjQuODkzNDZMNDUuNzc1MyA0Ljk4OTc1QzQ0LjI1NzYgNS4wODAzNiA0My40MDIxIDUuNzIwMzcgNDMuNDAyMSA2LjgzMDQ2QzQzLjQwMjEgNy45NTc1NCA0NC4yOTg2IDguNjc2ODMgNDUuNTI5MiA4LjY3NjgzWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk01My4wMzM0IDguNjc2ODNDNTMuOTEyNCA4LjY3NjgzIDU0LjY1NjYgOC4yNzQ3MSA1NS4wMzc1IDcuNjAwNzJINTUuMTM3MVY4LjU3NDg5SDU2LjM0NDNWMEg1NS4wODQ0VjMuMzg2OTFINTQuOTkwNkM1NC42NDQ5IDIuNzA3MjYgNTMuOTA2NiAyLjMwNTE0IDUzLjAzMzQgMi4zMDUxNEM1MS40MjIgMi4zMDUxNCA1MC4zODQ3IDMuNTM5ODMgNTAuMzg0NyA1LjQ4ODE1QzUwLjM4NDcgNy40NDIxNCA1MS40MTAyIDguNjc2ODMgNTMuMDMzNCA4LjY3NjgzWk01My4zOTA5IDMuMzk4MjRDNTQuNDQ1NyAzLjM5ODI0IDU1LjEwNzggNC4yMDgxNSA1NS4xMDc4IDUuNDkzODJDNTUuMTA3OCA2Ljc4NTE1IDU0LjQ1MTUgNy41ODM3MyA1My4zOTA5IDcuNTgzNzNDNTIuMzI0NCA3LjU4MzczIDUxLjY4NTYgNi43OTY0NyA1MS42ODU2IDUuNDg4MTVDNTEuNjg1NiA0LjE5MTE2IDUyLjMzMDIgMy4zOTgyNCA1My4zOTA5IDMuMzk4MjRaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTY0LjUxNDIgOC42OTM4MkM2Ni4zNzc2IDguNjkzODIgNjcuNTIwMyA3LjQ4NzQ1IDY3LjUyMDMgNS40ODgxNUM2Ny41MjAzIDMuNTAwMTggNjYuMzcxOCAyLjI4ODE1IDY0LjUxNDIgMi4yODgxNUM2Mi42NTA3IDIuMjg4MTUgNjEuNTAyMiAzLjUwMDE4IDYxLjUwMjIgNS40ODgxNUM2MS41MDIyIDcuNDg3NDUgNjIuNjQ0OSA4LjY5MzgyIDY0LjUxNDIgOC42OTM4MlpNNjQuNTE0MiA3LjYxMjA1QzYzLjQxODQgNy42MTIwNSA2Mi44MDMxIDYuODM2MTIgNjIuODAzMSA1LjQ4ODE1QzYyLjgwMzEgNC4xNTE1MSA2My40MTg0IDMuMzY5OTIgNjQuNTE0MiAzLjM2OTkyQzY1LjYwNDEgMy4zNjk5MiA2Ni4yMjUzIDQuMTUxNTEgNjYuMjI1MyA1LjQ4ODE1QzY2LjIyNTMgNi44MzA0NiA2NS42MDQxIDcuNjEyMDUgNjQuNTE0MiA3LjYxMjA1WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk02OS4xODgxIDguNTc0ODlINzAuNDQ3OVY0Ljk2NzA5QzcwLjQ0NzkgNC4wMDQyNiA3MS4wMzk4IDMuNDAzOSA3MS45NzE1IDMuNDAzOUM3Mi45MDMzIDMuNDAzOSA3My4zNDg2IDMuODk2NjUgNzMuMzQ4NiA0Ljg4NzhWOC41NzQ4OUg3NC42MDg1VjQuNTgxOTZDNzQuNjA4NSAzLjExNTA1IDczLjgyMzIgMi4yODgxNSA3Mi4zOTkzIDIuMjg4MTVDNzEuNDM4MyAyLjI4ODE1IDcwLjgwNTQgMi43MDE2IDcwLjQ5NDggMy4zODY5MUg3MC40MDExVjIuNDA3MDhINjkuMTg4MVY4LjU3NDg5WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk04MC40MTEgMC44NzIyMTRWMi40MzU0SDc5LjM5NzJWMy40NjA1NEg4MC40MTFWNi45NDM3M0M4MC40MTEgOC4xMzMxMSA4MC45Njc3IDguNjA4ODcgODIuMzY4MiA4LjYwODg3QzgyLjYxNDMgOC42MDg4NyA4Mi44NDg3IDguNTgwNTUgODMuMDUzOCA4LjU0NjU3VjcuNTMyNzZDODIuODc4IDcuNTQ5NzUgODIuNzY2NyA3LjU2MTA4IDgyLjU3MzMgNy41NjEwOEM4MS45NDYzIDcuNTYxMDggODEuNjcwOSA3LjI3Nzg5IDgxLjY3MDkgNi42MzIyM1YzLjQ2MDU0SDgzLjA1MzhWMi40MzU0SDgxLjY3MDlWMC44NzIyMTRIODAuNDExWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk04NC43NDUgOC41NzQ4OUg4Ni4wMDQ5VjQuOTcyNzVDODYuMDA0OSA0LjAzODI0IDg2LjU3OTEgMy40MDk1NiA4Ny42MTA1IDMuNDA5NTZDODguNTAxMiAzLjQwOTU2IDg4Ljk3NTggMy45MDc5NyA4OC45NzU4IDQuODkzNDZWOC41NzQ4OUg5MC4yMzU3VjQuNTkzMjhDOTAuMjM1NyAzLjEyNjM4IDg5LjM5NzcgMi4yOTM4MSA4OC4wMzgyIDIuMjkzODFDODcuMDc3MiAyLjI5MzgxIDg2LjQwMzMgMi43MDcyNiA4Ni4wOTI4IDMuMzk4MjRIODUuOTkzMVYwSDg0Ljc0NVY4LjU3NDg5WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk05NC43ODA3IDMuMzI0NjFDOTUuNzEyNCAzLjMyNDYxIDk2LjMyMTggMy45NTMyOCA5Ni4zNTExIDQuOTIxNzhIOTMuMTI4MkM5My4xOTg1IDMuOTU4OTUgOTMuODQ4OSAzLjMyNDYxIDk0Ljc4MDcgMy4zMjQ2MVpNOTYuMzQ1MyA2LjkwOTc1Qzk2LjExMDkgNy4zOTExNyA5NS41ODkzIDcuNjU3MzYgOTQuODI3NSA3LjY1NzM2QzkzLjgxOTYgNy42NTczNiA5My4xNjkyIDYuOTcyMDUgOTMuMTI4MiA1Ljg5MDI4VjUuODIyMzFIOTcuNjM0NFY1LjM5NzUzQzk3LjYzNDQgMy40NjA1NCA5Ni41NjIxIDIuMjg4MTUgOTQuNzg2NSAyLjI4ODE1QzkyLjk4NzUgMi4yODgxNSA5MS44NDQ4IDMuNTM5ODMgOTEuODQ0OCA1LjUxMDgxQzkxLjg0NDggNy40ODE3OSA5Mi45NjQxIDguNjkzODIgOTQuNzkyNCA4LjY5MzgyQzk2LjI1MTUgOC42OTM4MiA5Ny4yNzExIDguMDE0MTggOTcuNTU4MyA2LjkwOTc1SDk2LjM0NTNaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTY2LjQ2MjkgMTQuNDk0MVYxNy42MjA1SDY0LjQzNTRWMTkuNjcwOEg2Ni40NjI5VjI2LjYzNzJDNjYuNDYyOSAyOS4wMTU5IDY3LjU3NjMgMjkuOTY3NCA3MC4zNzczIDI5Ljk2NzRDNzAuODY5NiAyOS45Njc0IDcxLjMzODQgMjkuOTEwOCA3MS43NDg2IDI5Ljg0MjhWMjcuODE1MkM3MS4zOTcgMjcuODQ5MiA3MS4xNzQzIDI3Ljg3MTggNzAuNzg3NSAyNy44NzE4QzY5LjUzMzUgMjcuODcxOCA2OC45ODI3IDI3LjMwNTUgNjguOTgyNyAyNi4wMTQxVjE5LjY3MDhINzEuNzQ4NlYxNy42MjA1SDY4Ljk4MjdWMTQuNDk0MUg2Ni40NjI5WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk03OC44ODQxIDMwLjEzNzNDODIuNjExIDMwLjEzNzMgODQuODk2MyAyNy43MjQ2IDg0Ljg5NjMgMjMuNzI2Qzg0Ljg5NjMgMTkuNzUwMSA4Mi41OTkyIDE3LjMyNiA3OC44ODQxIDE3LjMyNkM3NS4xNTcyIDE3LjMyNiA3Mi44NjAxIDE5Ljc1MDEgNzIuODYwMSAyMy43MjZDNzIuODYwMSAyNy43MjQ2IDc1LjE0NTQgMzAuMTM3MyA3OC44ODQxIDMwLjEzNzNaTTc4Ljg4NDEgMjcuOTczOEM3Ni42OTI1IDI3Ljk3MzggNzUuNDYxOSAyNi40MjE5IDc1LjQ2MTkgMjMuNzI2Qzc1LjQ2MTkgMjEuMDUyNyA3Ni42OTI1IDE5LjQ4OTUgNzguODg0MSAxOS40ODk1QzgxLjA2MzkgMTkuNDg5NSA4Mi4zMDYzIDIxLjA1MjcgODIuMzA2MyAyMy43MjZDODIuMzA2MyAyNi40MTA2IDgxLjA2MzkgMjcuOTczOCA3OC44ODQxIDI3Ljk3MzhaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTg2Ljg1MTcgMjkuODk5NUg4OS4zNzE0VjIyLjYxNTlDODkuMzcxNCAyMC44ODI4IDkwLjcxOTIgMTkuNzE2MSA5Mi42Mjk1IDE5LjcxNjFDOTMuMDc0OSAxOS43MTYxIDkzLjgyNSAxOS43OTU0IDk0LjAzNTkgMTkuODYzM1YxNy40NjE5QzkzLjc2NjQgMTcuMzkzOSA5My4yODU5IDE3LjM2IDkyLjkxMDggMTcuMzZDOTEuMjQ2NiAxNy4zNiA4OS44Mjg1IDE4LjI0MzUgODkuNDY1MiAxOS40NTU1SDg5LjI3NzdWMTcuNTYzOUg4Ni44NTE3VjI5Ljg5OTVaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTEwMC4yOTIgMTkuMzk4OUMxMDIuMTU2IDE5LjM5ODkgMTAzLjM3NSAyMC42NTYzIDEwMy40MzMgMjIuNTkzMkg5Ni45ODc0Qzk3LjEyODEgMjAuNjY3NiA5OC40MjkgMTkuMzk4OSAxMDAuMjkyIDE5LjM5ODlaTTEwMy40MjIgMjYuNTY5MkMxMDIuOTUzIDI3LjUzMiAxMDEuOTEgMjguMDY0NCAxMDAuMzg2IDI4LjA2NDRDOTguMzcwNCAyOC4wNjQ0IDk3LjA2OTUgMjYuNjkzOCA5Ni45ODc0IDI0LjUzMDJWMjQuMzk0M0gxMDZWMjMuNTQ0OEMxMDYgMTkuNjcwOCAxMDMuODU1IDE3LjMyNiAxMDAuMzA0IDE3LjMyNkM5Ni43MDYyIDE3LjMyNiA5NC40MjA4IDE5LjgyOTMgOTQuNDIwOCAyMy43NzEzQzk0LjQyMDggMjcuNzEzMyA5Ni42NTkzIDMwLjEzNzMgMTAwLjMxNiAzMC4xMzczQzEwMy4yMzQgMzAuMTM3MyAxMDUuMjczIDI4Ljc3OCAxMDUuODQ4IDI2LjU2OTJIMTAzLjQyMlpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNDkuOTM4NyAyNS4zNDQxQzUwLjEzMyAyOC4zNzMyIDUyLjc0NDcgMzAuMzEwNCA1Ni42MzE4IDMwLjMxMDRDNjAuNzg2MiAzMC4zMTA0IDYzLjM4NTcgMjguMjc5MyA2My4zODU3IDI1LjAzODlDNjMuMzg1NyAyMi40OTEyIDYxLjkwMzcgMjEuMDgyMyA1OC4zMDgxIDIwLjI3MjJMNTYuMzc2NyAxOS44MTQzQzU0LjA5MyAxOS4yOTc3IDUzLjE2OTggMTguNjA1IDUzLjE2OTggMTcuMzk1N0M1My4xNjk4IDE1Ljg2OTUgNTQuNjAzMiAxNC44NzE1IDU2Ljc1MzMgMTQuODcxNUM1OC43OTQgMTQuODcxNSA2MC4yMDMxIDE1Ljg0NiA2MC40NTgyIDE3LjQwNzVINjMuMTA2M0M2Mi45NDg0IDE0LjU1NDUgNjAuMzQ4OSAxMi41NDY5IDU2Ljc4OTcgMTIuNTQ2OUM1Mi45NjMzIDEyLjU0NjkgNTAuNDEyNCAxNC41NTQ1IDUwLjQxMjQgMTcuNTcxOUM1MC40MTI0IDIwLjA2MDkgNTEuODU3OSAyMS41NDAyIDU1LjAyODQgMjIuMjU2M0w1Ny4yODc4IDIyLjc4NDdDNTkuNjA3OSAyMy4zMTMgNjAuNjI4MyAyNC4wODc5IDYwLjYyODMgMjUuMzc5M0M2MC42MjgzIDI2Ljg4MjEgNTkuMDI0OCAyNy45NzQgNTYuODM4MyAyNy45NzRDNTQuNDkzOSAyNy45NzQgNTIuODY2MiAyNi45NTI2IDUyLjYzNTQgMjUuMzQ0MUg0OS45Mzg3WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0yMy44MzY1IDE3LjM2QzIyLjEwMiAxNy4zNiAyMC42MDE4IDE4LjE5ODIgMTkuODI4MyAxOS42MDI4SDE5LjY0MDhWMTcuNTYzOUgxNy4yMTQ4VjM0SDE5LjczNDVWMjguMDMwNEgxOS45MzM4QzIwLjYwMTggMjkuMzMzMSAyMi4wNDM0IDMwLjEwMzQgMjMuODU5OSAzMC4xMDM0QzI3LjA4MjkgMzAuMTAzNCAyOS4xMzM5IDI3LjY0NTMgMjkuMTMzOSAyMy43MjZDMjkuMTMzOSAxOS44MDY3IDI3LjA4MjkgMTcuMzYgMjMuODM2NSAxNy4zNlpNMjMuMTIxNiAyNy45MTcyQzIxLjAxMiAyNy45MTcyIDE5LjY4NzcgMjYuMzA4NyAxOS42ODc3IDIzLjczNzNDMTkuNjg3NyAyMS4xNTQ3IDIxLjAxMiAxOS41NDYyIDIzLjEzMzMgMTkuNTQ2MkMyNS4yNjYzIDE5LjU0NjIgMjYuNTQzOCAyMS4xMjA3IDI2LjU0MzggMjMuNzI2QzI2LjU0MzggMjYuMzQyNiAyNS4yNjYzIDI3LjkxNzIgMjMuMTIxNiAyNy45MTcyWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0zNy45NTA5IDE3LjM2QzM2LjIxNjQgMTcuMzYgMzQuNzE2MiAxOC4xOTgyIDMzLjk0MjcgMTkuNjAyOEgzMy43NTUyVjE3LjU2MzlIMzEuMzI5MlYzNEgzMy44NDlWMjguMDMwNEgzNC4wNDgyQzM0LjcxNjIgMjkuMzMzMSAzNi4xNTc4IDMwLjEwMzQgMzcuOTc0NCAzMC4xMDM0QzQxLjE5NzMgMzAuMTAzNCA0My4yNDgzIDI3LjY0NTMgNDMuMjQ4MyAyMy43MjZDNDMuMjQ4MyAxOS44MDY3IDQxLjE5NzMgMTcuMzYgMzcuOTUwOSAxNy4zNlpNMzcuMjM2IDI3LjkxNzJDMzUuMTI2NCAyNy45MTcyIDMzLjgwMjEgMjYuMzA4NyAzMy44MDIxIDIzLjczNzNDMzMuODAyMSAyMS4xNTQ3IDM1LjEyNjQgMTkuNTQ2MiAzNy4yNDc3IDE5LjU0NjJDMzkuMzgwNyAxOS41NDYyIDQwLjY1ODIgMjEuMTIwNyA0MC42NTgyIDIzLjcyNkM0MC42NTgyIDI2LjM0MjYgMzkuMzgwNyAyNy45MTcyIDM3LjIzNiAyNy45MTcyWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMi42OTM5IDI5Ljg5OTVIMTUuNTg0OUw5LjI1NjIyIDEyLjk1NzhINi4zMjg3MkwwIDI5Ljg5OTVIMi43OTM4N0w0LjQwOTQ2IDI1LjQwMjhIMTEuMDkwNUwxMi42OTM5IDI5Ljg5OTVaTTcuNjUyNzggMTYuMDMzOEg3Ljg1OTI4TDEwLjM5ODEgMjMuMTk1Nkg1LjEwMTg1TDcuNjUyNzggMTYuMDMzOFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbGctbm9uZSBmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmsgZm9vdGVyX19zb2NpYWwtbGlua1wiIGFyaWEtbGFiZWw9XCJ0d2l0dGVyIGxpbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMxIDMwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTExLjc4ODcgMjhDOC41NTM3NCAyOCA1LjUzODE3IDI3LjA1OTEgMyAyNS40MzU2QzUuMTU0OTkgMjUuNTc1MSA4Ljk1ODA3IDI1LjI0MTEgMTEuMzIzNiAyMi45ODQ4QzcuNzY1MDggMjIuODIxNSA2LjE2MDI2IDIwLjA5MjMgNS45NTA5NCAxOC45MjZDNi4yNTMyOSAxOS4wNDI2IDcuNjk1MyAxOS4xODI2IDguNTA5MzQgMTguODU2QzQuNDE1OSAxNy44Mjk2IDMuNzg3OTMgMTQuMjM3MyAzLjkyNzQ4IDEzLjE0MUM0LjY5NSAxMy42Nzc1IDUuOTk3NDUgMTMuODY0MSA2LjUwOTEzIDEzLjgxNzRDMi42OTQ3OSAxMS4wODgyIDQuMDY3MDMgNi45ODI3NiA0Ljc0MTUxIDYuMDk2MzVDNy40Nzg4MiA5Ljg4ODY3IDExLjU4MTIgMTIuMDE4NiAxNi42NTY0IDEyLjEzN0MxNi41NjA3IDExLjcxNzQgMTYuNTEwMiAxMS4yODA0IDE2LjUxMDIgMTAuODMxNkMxNi41MTAyIDcuNjEwOTIgMTkuMTEzNCA1IDIyLjMyNDcgNUMyNC4wMDI1IDUgMjUuNTE0NCA1LjcxMjc1IDI2LjU3NTcgNi44NTI4NEMyNy42OTY5IDYuNTkwMTEgMjkuMzg0MyA1Ljk3NTA3IDMwLjIwOTIgNS40NDMyQzI5Ljc5MzQgNi45MzYxMSAyOC40OTg5IDguMTgxNDkgMjcuNzE1OSA4LjY0MzA4QzI3LjcyMjQgOC42NTg3OCAyNy43MDk1IDguNjI3MzEgMjcuNzE1OSA4LjY0MzA4QzI4LjQwMzcgOC41MzkwNCAzMC4yNjQ4IDguMTgxMzcgMzEgNy42ODI1NkMzMC42MzY0IDguNTIxMjUgMjkuMjY0IDkuOTE1NzMgMjguMTM3NyAxMC42OTY0QzI4LjM0NzMgMTkuOTM4MSAyMS4yNzY1IDI4IDExLjc4ODcgMjhaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzFEQTFGMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmsgZm9vdGVyX19zb2NpYWwtbGlua1wiIGFyaWEtbGFiZWw9XCJmYWNlYm9vayBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjMwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMCAzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxjaXJjbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjeD1cIjE1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjeT1cIjE1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyPVwiMTMuMTI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDBfbGluZWFyXzk0NF8xNTAwMSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTkuODg3OSAxOS4wMTRMMjAuNDcwOSAxNS4zMDk1SDE2LjgyMzZWMTIuOTA2NkMxNi44MjM2IDExLjg5MjggMTcuMzMyMiAxMC45MDQxIDE4Ljk2NTggMTAuOTA0MUgyMC42MjVWNy43NTAzQzIwLjYyNSA3Ljc1MDMgMTkuMTE5OSA3LjUgMTcuNjgxNSA3LjVDMTQuNjc2NCA3LjUgMTIuNzE0MSA5LjI3NDYzIDEyLjcxNDEgMTIuNDg2VjE1LjMwOTVIOS4zNzVWMTkuMDE0SDEyLjcxNDFWMjcuOTY5OEMxMy4zODQ0IDI4LjA3MjUgMTQuMDcwMiAyOC4xMjUgMTQuNzY4OCAyOC4xMjVDMTUuNDY3NSAyOC4xMjUgMTYuMTUzMyAyOC4wNzI1IDE2LjgyMzYgMjcuOTY5OFYxOS4wMTRIMTkuODg3OVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaW5lYXJHcmFkaWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYWludDBfbGluZWFyXzk0NF8xNTAwMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4MT1cIjE1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkxPVwiMS44NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDI9XCIxNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5Mj1cIjI4LjA0NzFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wQ29sb3I9XCIjMThBQ0ZFXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDE2M0UwXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tXCI+XG5cdFx0XHRcdFx0XHQ8cD7CqSAyMDIyIFNub3JlTGFiLiBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBmb290ZXJMaW5rcyB9IGZyb20gJy4uL2hlbHBlcnMvdmFyaWFibGVzJztcblxuZXhwb3J0IGNvbnN0IEZvb3Rlck5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIGZvb3Rlci1uYXZpZ2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uX19jb2xcIj5cbiAgICAgICAgPHA+U3VwcG9ydDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uX19jb2wtbGlzdFwiPlxuICAgICAgICAgIHtmb290ZXJMaW5rcy5zdXBwb3J0Lm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uX19jb2wtaXRlbVwiIGtleT17bGluay50ZXh0fT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2xpbmsubGlua30+XG4gICAgICAgICAgICAgICAge2xpbmsudGV4dH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbl9fY29sXCI+XG4gICAgICAgIDxwPkNvbXBhbnk8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbl9fY29sLWxpc3RcIj5cbiAgICAgICAgICB7Zm9vdGVyTGlua3MuY29tcGFueS5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbl9fY29sLWl0ZW1cIiBrZXk9e2xpbmsudGV4dH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtsaW5rLmxpbmt9PlxuICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgY3JlYXRlUmVmIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tICcuL01vYmlsZU1lbnUnO1xuaW1wb3J0IHsgbmF2aWdhdGlvbkxpbmtzIH0gZnJvbSAnLi4vaGVscGVycy92YXJpYWJsZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IG1lbnVFbGVtZW50UmVmID0gY3JlYXRlUmVmKCk7XG5cblx0Y29uc3QgaGFuZGxlTWVudUNsaWNrID0gZSA9PiB7XG5cdFx0Y29uc3QgbWVudUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNtLW1lbnVfX2J1dHRvbicpO1xuXHRcdGNvbnN0IG1lbnVFbCA9IG1lbnVFbGVtZW50UmVmLmN1cnJlbnQ7XG5cblx0XHRpZiAoIW1lbnVFbCB8fCAhbWVudUJ0bikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1sb2NrZWQnKTtcblx0XHRtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ20tbWVudV9fYnV0dG9uX2Nsb3NlJyk7XG5cdFx0bWVudUVsLmNsYXNzTGlzdC50b2dnbGUoJ20tbWVudV9hY3RpdmUnKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLWxnLTNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1sZy05XCI+XG5cdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBoZWFkZXJfX25hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctZmxleCBoZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e25hdmlnYXRpb25MaW5rcy5tYXAoKHsgdGV4dCwgbGluayB9KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2aWdhdGlvbi1pdGVtXCIga2V5PXt0ZXh0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cImxpbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJtLW1lbnVfX2J1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkLWxnLW5vbmUgbS1tZW51X19idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZXZ0ID0+IGhhbmRsZU1lbnVDbGljayhldnQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIm1lbnUgYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8TW9iaWxlTWVudSByZWY9e21lbnVFbGVtZW50UmVmfSAvPlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgcGhvbmVfMyBmcm9tICcuLi9pbWFnZXMvcGhvbmUzLnBuZyc7XG5pbXBvcnQgcGhvbmVfM18yeCBmcm9tICcuLi9pbWFnZXMvcGhvbmUzQDJ4LnBuZyc7XG5pbXBvcnQgc3RhcjMgZnJvbSAnLi4vaW1hZ2VzL3N0YXItMy5zdmcnO1xuaW1wb3J0IHN0YXI0IGZyb20gJy4uL2ltYWdlcy9zdGFyLTQuc3ZnJztcbmltcG9ydCBzdGFyNSBmcm9tICcuLi9pbWFnZXMvc3Rhci01LnN2Zyc7XG4vLyBpbXBvcnQgeyBkZXNjcmlwdGlvbkNhcmRzIH0gZnJvbSAnQC9oIGVscGVycy92YXJpYWJsZXMnO1xuXG5leHBvcnQgY29uc3QgSG9tZURlc2NyaXB0aW9uID0gKHsgY2FyZHMgfSkgPT4ge1xuICBpZiAoIWNhcmRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX19pbmZvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLW1cIj5cbiAgICAgICAgICAgICAgVGhlIFNub3JpbmcgTWFuYWdlbWVudCBBcHAgZm9yIGlPUyBhbmQgQW5kcm9pZFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbm9yZUxhYiBoYXMgaGVscGVkIG1pbGxpb25zIG9mIHBlb3BsZSB0byB1bmRlcnN0YW5kIHRoZWlyIHNub3JpbmdcbiAgICAgICAgICAgICAgcHJvYmxlbSBhbmQgdG8gZGlzY292ZXIgc29sdXRpb25zIHRvIGltcHJvdmUgdGhlaXIgc2xlZXAuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fX3Bob25lXCI+XG4gICAgICAgICAgICAgICAgey8qPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5NDZcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiOTYzXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOTQ2IDk2M1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQzOS40NjYgMC43OTg1ODRMNTU4LjgzMyAzNjguMTcyTDk0NS4xMTIgMzY4LjE3Mkw2MzIuNjA2IDU5NS4yMjFMNzUxLjk3MyA5NjIuNTk0TDQzOS40NjYgNzM1LjU0NUwxMjYuOTYgOTYyLjU5NEwyNDYuMzI3IDU5NS4yMjFMLTY2LjE3OTYgMzY4LjE3MkwzMjAuMDk5IDM2OC4xNzJMNDM5LjQ2NiAwLjc5ODU4NFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzAzNUE5NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzIyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgyOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDcyMiA4MjlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yODYuNTYxIDAuODA5MzI2TDM4OS4zMzMgMzE3LjEwOEw3MjEuOTA5IDMxNy4xMDhMNDUyLjg0OSA1MTIuNTkxTDU1NS42MjEgODI4Ljg5TDI4Ni41NjEgNjMzLjQwNkwxNy41MDEzIDgyOC44OUwxMjAuMjczIDUxMi41OTFMLTE0OC43ODcgMzE3LjEwOEwxODMuNzg5IDMxNy4xMDhMMjg2LjU2MSAwLjgwOTMyNlpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyXzk2Xzk1OSlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfOTZfOTU5XCJcbiAgICAgICAgICAgICAgICAgICAgICB4MT1cIjMwMC4wMDJcIlxuICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNDE4LjM4M1wiXG4gICAgICAgICAgICAgICAgICAgICAgeDI9XCItNzMuNDMyXCJcbiAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjI1Ny40NDNcIlxuICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMUYxMkQzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzNGQUZERVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPC9zdmc+Ki99XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiZy1saWdodC01XCIgYWx0PVwiXCIgc3JjPXtzdGFyM30gLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLWxpZ2h0LTZcIiBhbHQ9XCJcIiBzcmM9e3N0YXI0fSAvPlxuICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bob25lXzN9XG4gICAgICAgICAgICAgICAgICBzcmNTZXQ9e2Ake3Bob25lXzN9IDF4LCAke3Bob25lXzNfMnh9IDJ4YH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9fbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9faXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5kZXNjcmlwdGlvbl9jYXJkX2ljb24uaWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fX2l0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fX2l0ZW0taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhcmQuZGVzY3JpcHRpb25fY2FyZF9pY29uLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVzY3JpcHRpb24gaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fX2l0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2NhcmQgZGVzY3JpcHRpb25fX2l0ZW0tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuZGVzY3JpcHRpb25fY2FyZF90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2FyZC5kZXNjcmlwdGlvbl9jYXJkX3RleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmctbGlnaHQtN1wiIGFsdD1cIlwiIHNyYz17c3RhcjV9IC8+XG4gICAgICAgIHsvKjxzdmdcbiAgICAgICAgICB3aWR0aD1cIjQ2MlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwM1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA0NjIgMTAwM1wiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNjk2Ljg4MiAwTDY0Ni4wNjggMzgyLjkyMkw5OTQuNTQ3IDU0OS41NzhMNjE0LjY2NCA2MTkuNTgxTDU2My44NSAxMDAyLjVMMzc5Ljg4MyA2NjIuODQ1TDAgNzMyLjg0OEwyNjYuMTg1IDQ1Mi45MjVMODIuMjE4MiAxMTMuMjY3TDQzMC42OTcgMjc5LjkyM0w2OTYuODgyIDBaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjMDM1QTk1XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz4qL31cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IGhvbWVJbnNpZ2h0cyB9IGZyb20gJy4uL2hlbHBlcnMvdmFyaWFibGVzJztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG5pbXBvcnQgZWxsaXBzZSBmcm9tICcuLi9pbWFnZXMvZWxsaXBzZS0xLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBIb21lSW5zaWdodHMgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VJbnNpZ2h0cyA9IHVzZUZldGNoKFxuICAgICdodHRwczovL3Nub3JlbGFiLnV4LW1pbmQucHJvL3dwLWpzb24vd3AvdjIvcGFnZXMvMTgnLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IHBvc3RzID0gdXNlRmV0Y2goXG4gICAgJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9wb3N0cz9wZXJfcGFnZT0xMDAnLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IHRhZ3MgPSB1c2VGZXRjaCgnaHR0cHM6Ly9zbm9yZWxhYi51eC1taW5kLnByby93cC1qc29uL3dwL3YyL2NhdGVnb3JpZXM/cGVyX3BhZ2U9MTAwJywge30pO1xuXG4gIGlmICghcGFnZUluc2lnaHRzLmRhdGEgfHwgIXBvc3RzLmRhdGEgfHwgIXRhZ3MuZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbnNpZ2h0c19fd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLW0gaG9tZS1pbnNpZ2h0c19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgU25vcmluZyBpbnNpZ2h0c1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbnNpZ2h0c19fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIHRpdGxlX3NpemUtc1wiPkxvYWRpbmcuLi48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbiAgY29uc3QgaWRzID0gcGFnZUluc2lnaHRzLmRhdGEuYWNmLmhvbWVfcGFnZV9pbnNpZ2h0cy5tYXAoKGluc2lnaHQpID0+IHtcbiAgICByZXR1cm4gaW5zaWdodC5ob21lX3BhZ2VfaW5zaWdodC5JRDtcbiAgfSk7XG5cbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IGlkcy5tYXAoKGlkKSA9PiB7XG4gICAgcmV0dXJuIHBvc3RzLmRhdGEuZmluZChwb3N0ID0+IHBvc3QuaWQgPT09IGlkKTtcbiAgfSk7XG5cbiAgLypjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHMuZGF0YS5maWx0ZXIoKHBvc3QpID0+IHtcbiAgICByZXR1cm4gaWRzLmluY2x1ZGVzKHBvc3QuaWQpO1xuICB9KSovXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5zaWdodHNfX3dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLW0gaG9tZS1pbnNpZ2h0c19fdGl0bGVcIj5cbiAgICAgICAgICAgIFNub3JpbmcgaW5zaWdodHNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbnNpZ2h0c19fY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5zaWdodHNfX2l0ZW1cIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzX19pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzX19pdGVtLWZsYWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcy5tYXAoKHRhZywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdEYXRhID0gdGFncy5kYXRhLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSB0YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFnRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWdEYXRhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2luc2lnaHRzLz9jYXRlZ29yeT0nK3RhZ0RhdGEuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogdGFnRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpID09PSBhcnIubGVuZ3RoIC0gMSA/ICcnIDogJyAsICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgaG9tZS1pbnNpZ2h0c19faXRlbS10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cG9zdC5saW5rfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIHtpID09PSAwICYmIHBvc3QuZXhjZXJwdC5yZW5kZXJlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZS1pbnNpZ2h0c19fZXhjZXJwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7PGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzX19pbWdcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtwb3N0LmZpbWdfdXJsfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgey8qPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmltZ191cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzX19pdGVtLWZhZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluc2lnaHRzX19yZWFkLW1vcmVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgYnRuIGJ0bi1hcnJvd1wiIGhyZWY9XCIvaW5zaWdodHNcIj5cbiAgICAgICAgICAgICAgPGRpdj5SZWFkIG1vcmU8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmctbGlnaHQtMyBjaGFuZ2VkXCIgYWx0PVwiXCIgc3JjPXtlbGxpcHNlfSAvPlxuICAgICAgICB7Lyo8c3ZnXG4gICAgICAgICAgZGF0YS1zdmc9XCJkZWNvcmF0aXZlXCJcbiAgICAgICAgICB3aWR0aD1cIjM3OVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzcxXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM3OSAzNzFcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTg5LjVcIiBjeT1cIjE4NS41XCIgcng9XCIxODkuNVwiIHJ5PVwiMTg1LjVcIiBmaWxsPVwiIzE3QTJGRlwiIC8+XG4gICAgICAgIDwvc3ZnPiovfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IHNxdWFyZUxvZ28gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3NsLWxvZ28taWNvbi5wbmcnO1xuaW1wb3J0IHNxdWFyZUxvZ29fMnggZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3NsLWxvZ28taWNvbkAyeC5wbmcnO1xuaW1wb3J0IHBob25lXzEgZnJvbSAnLi4vaW1hZ2VzL3Bob25lMS5wbmcnO1xuaW1wb3J0IHBob25lXzFfMnggZnJvbSAnLi4vaW1hZ2VzL3Bob25lMUAyeC5wbmcnO1xuaW1wb3J0IHBob25lXzIgZnJvbSAnLi4vaW1hZ2VzL3Bob25lMi5wbmcnO1xuaW1wb3J0IHBob25lXzJfMnggZnJvbSAnLi4vaW1hZ2VzL3Bob25lMkAyeC5wbmcnO1xuaW1wb3J0IHN0YXIyIGZyb20gJy4uL2ltYWdlcy9zdGFyLTIuc3ZnJztcblxuZXhwb3J0IGNvbnN0IEhvbWVNYWluID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvbWUtbWFpblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLW1haW5fX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTVcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLW1haW5fX2luZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaG9tZS1tYWluX19pbmZvLWljb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtzcXVhcmVMb2dvfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtzcXVhcmVMb2dvfSAxeCwgJHtzcXVhcmVMb2dvXzJ4fSAyeGB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgdGl0bGVfc2l6ZS1sIGhvbWUtbWFpbl9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNub3JlTGFiOiBSZWNvcmQmbmJzcDtZb3VyIFNub3Jpbmdcblx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0U25vcmVMYWIgaXMgdGhlIE5vLjEgaU9TIGFuZCBBbmRyb2lkIGFwcCBmb3ImbmJzcDtyZWNvcmRpbmcgYW5kwqB0cmFja2luZyBzbm9yaW5nXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmTCoGRpc2NvdmVyaW5nIHNvbHV0aW9ucy5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLW1haW5fX2luZm8tYXBwc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uc25vcmVsYWIuYXBwXCIgY2xhc3NOYW1lPVwibGluayBob21lLW1haW5fX2luZm8tYXBwIGdvb2dsZS1wbGF5LWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjggMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxnIGZpbHRlcj1cInVybCgjZmlsdGVyMF9paV82NThfMTk3NSlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMC41NjE0NjQgMC40OTQwMkMwLjIwODU3OSAwLjg3NzIxMiAtNS4xODEwNWUtMDcgMS40NzE5MSAtNS4xODEwNWUtMDcgMi4yNDIwM1YyOS43NTcyQy01LjE4MTA1ZS0wNyAzMC41Mjg2IDAuMjA4NTc5IDMxLjEyMiAwLjU2MTQ2NCAzMS41MDUyTDAuNjUxMiAzMS41OTQ4TDE1LjY3NDkgMTYuMTgxM1YxNS45OTk2VjE1LjgxOEwwLjY1MTIgMC40MDMxOThMMC41NjE0NjQgMC40OTQwMlpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDBfbGluZWFyXzY1OF8xOTc1KVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0yMC42ODE5IDIxLjMyMDdMMTUuNjc0OCAxNi4xODEyVjE1Ljk5OTZWMTUuODE4TDIwLjY4MzEgMTAuNjc5N0wyMC43OTU4IDEwLjc0NTZMMjYuNzI5NCAxNC4yMDQzQzI4LjQyMzUgMTUuMTkyMiAyOC40MjM1IDE2LjgwODMgMjYuNzI5NCAxNy43OTc0TDIwLjc5NTggMjEuMjU2MUwyMC42ODE5IDIxLjMyMDdaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQxX2xpbmVhcl82NThfMTk3NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxnIGZpbHRlcj1cInVybCgjZmlsdGVyMV9pXzY1OF8xOTc1KVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjAuNzk1OCAyMS4yNTQ4TDE1LjY3MzYgMTUuOTk5NkwwLjU2MTM3MiAzMS41MDUyQzEuMTE5MiAzMi4xMTI0IDIuMDQyMDMgMzIuMTg3IDMuMDgxMjggMzEuNTgyNEwyMC43OTU4IDIxLjI1NDhaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDJfbGluZWFyXzY1OF8xOTc1KVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIwLjc5NTggMTAuNzQ0NEwzLjA4MTI4IDAuNDE4MTIyQzIuMDQyMDMgLTAuMTg3NzcgMS4xMTkyIC0wLjExMTg3OCAwLjU2MTM3MiAwLjQ5NTI1OEwxNS42NzQ4IDE2LjAwMDlMMjAuNzk1OCAxMC43NDQ0WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ1cmwoI3BhaW50M19saW5lYXJfNjU4XzE5NzUpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZpbHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImZpbHRlcjBfaWlfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHk9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjMyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT1cIm5vcm1hbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW49XCJTb3VyY2VHcmFwaGljXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cInNoYXBlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbj1cIlNvdXJjZUFscGhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibWF0cml4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0PVwiaGFyZEFscGhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR5PVwiLTAuMTU5Mzc1XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29tcG9zaXRlIGluMj1cImhhcmRBbHBoYVwiIG9wZXJhdG9yPVwiYXJpdGhtZXRpY1wiIGsyPVwiLTFcIiBrMz1cIjFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb2xvck1hdHJpeFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJtYXRyaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTIgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT1cIm5vcm1hbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW4yPVwic2hhcGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cImVmZmVjdDFfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb2xvck1hdHJpeFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluPVwiU291cmNlQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJtYXRyaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJoYXJkQWxwaGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVPZmZzZXQgZHk9XCIwLjE1OTM3NVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUNvbXBvc2l0ZSBpbjI9XCJoYXJkQWxwaGFcIiBvcGVyYXRvcj1cImFyaXRobWV0aWNcIiBrMj1cIi0xXCIgazM9XCIxXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibWF0cml4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjI1IDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVCbGVuZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU9XCJub3JtYWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cImVmZmVjdDFfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cImVmZmVjdDJfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9maWx0ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmlsdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZmlsdGVyMV9pXzY1OF8xOTc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eD1cIjAuNTYxMzcxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eT1cIjE1Ljk5OTZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjIwLjIzNDVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxNi4wMDA0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT1cIm5vcm1hbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW49XCJTb3VyY2VHcmFwaGljXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cInNoYXBlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbj1cIlNvdXJjZUFscGhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibWF0cml4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0PVwiaGFyZEFscGhhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR5PVwiLTAuMTU5Mzc1XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQ29tcG9zaXRlIGluMj1cImhhcmRBbHBoYVwiIG9wZXJhdG9yPVwiYXJpdGhtZXRpY1wiIGsyPVwiLTFcIiBrMz1cIjFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmVDb2xvck1hdHJpeFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJtYXRyaXhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDggMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmZUJsZW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT1cIm5vcm1hbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW4yPVwic2hhcGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdD1cImVmZmVjdDFfaW5uZXJTaGFkb3dfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9maWx0ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYWludDBfbGluZWFyXzY1OF8xOTc1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDE9XCIxNC4zNDMxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCIxLjk1MDlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4Mj1cIi02LjUyOTA0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTI9XCIyMi4yOTUxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agc3RvcENvbG9yPVwiIzAwQTBGRlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMDA2NlwiIHN0b3BDb2xvcj1cIiMwMEExRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjI2MDFcIiBzdG9wQ29sb3I9XCIjMDBCRUZGXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC41MTIyXCIgc3RvcENvbG9yPVwiIzAwRDJGRlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNzYwNFwiIHN0b3BDb2xvcj1cIiMwMERGRkZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzAwRTNGRlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpbmVhckdyYWRpZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQxX2xpbmVhcl82NThfMTk3NVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiMjguOTM0NlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkxPVwiMTUuOTk5NlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiLTAuNDA2ODJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5Mj1cIjE1Ljk5OTZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wQ29sb3I9XCIjRkZFMDAwXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC40MDg3XCIgc3RvcENvbG9yPVwiI0ZGQkQwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNzc1NFwiIHN0b3BDb2xvcj1cIiNGRkE1MDBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0ZGOUMwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpbmVhckdyYWRpZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQyX2xpbmVhcl82NThfMTk3NVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiMTguMDE0MVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkxPVwiMTguODUzNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiLTEwLjI5MTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5Mj1cIjQ2LjQ0MjlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wQ29sb3I9XCIjRkYzQTQ0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNDMzExNjJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaW5lYXJHcmFkaWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInBhaW50M19saW5lYXJfNjU4XzE5NzVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4MT1cIi0zLjI0NDY5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCItOC42NjQyOVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiOS4zOTQ0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTI9XCIzLjY1NTExXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agc3RvcENvbG9yPVwiIzMyQTA3MVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMDY4NVwiIHN0b3BDb2xvcj1cIiMyREE3NzFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjQ3NjJcIiBzdG9wQ29sb3I9XCIjMTVDRjc0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC44MDA5XCIgc3RvcENvbG9yPVwiIzA2RTc3NVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDBGMDc2XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGluZWFyR3JhZGllbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTA3XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxMDcgMzRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTcuNjU2MiA0LjIxMTY3QzcuNjU2MiA1LjI1NjQ5IDcuMzQzMTkgNi4wODgxMiA2LjcxNTkgNi43MDkwM0M2LjAwNDA1IDcuNDQ3MTQgNS4wNzUxMSA3LjgxNjIgMy45MzQxMiA3LjgxNjJDMi44NDExIDcuODE2MiAxLjkxMDkgNy40NDIxNSAxLjE0NzI5IDYuNjk0MDdDMC4zODI0MzIgNS45NDQ3MyAwIDUuMDE3MTEgMCAzLjkwOTk0QzAgMi44MDE1MiAwLjM4MjQzMiAxLjg3MzkgMS4xNDcyOSAxLjEyNTgxQzEuOTEwOSAwLjM3NjQ3OCAyLjg0MTEgMC4wMDI0MzYxOCAzLjkzNDEyIDAuMDAyNDM2MThDNC40NzY4NSAwLjAwMjQzNjE4IDQuOTk1NTkgMC4xMDcxNjggNS40ODc4MyAwLjMxNTM4NUM1Ljk4MTMzIDAuNTI0ODQ5IDYuMzc2MzggMC44MDI4ODggNi42NzE3MiAxLjE1MDc1TDYuMDA2NTcgMS44MDkwNkM1LjUwNTUgMS4yMTY4MyA0LjgxNTEgMC45MjEzMzUgMy45MzI4NiAwLjkyMTMzNUMzLjEzNTE4IDAuOTIxMzM1IDIuNDQ2MDQgMS4xOTgxMyAxLjg2NDE5IDEuNzUxNzFDMS4yODIzNCAyLjMwNTI5IDAuOTkyMDQ5IDMuMDI0NyAwLjk5MjA0OSAzLjkwODY5QzAuOTkyMDQ5IDQuNzkyNjggMS4yODIzNCA1LjUxMjA5IDEuODY0MTkgNi4wNjU2N0MyLjQ0NjA0IDYuNjE5MjYgMy4xMzUxOCA2Ljg5NjA1IDMuOTMyODYgNi44OTYwNUM0Ljc3ODUgNi44OTYwNSA1LjQ4NDA0IDYuNjE4MDEgNi4wNDgyMiA2LjA2MDY5QzYuNDE0MjUgNS42OTc4NiA2LjYyNjI5IDUuMTkyOTEgNi42ODMwOCA0LjU0NTgxSDMuOTMyODZWMy42NDY4Nkg3LjYwMTkzQzcuNjM5NzkgMy44NDI2MSA3LjY1NjIgNC4wMzA4OCA3LjY1NjIgNC4yMTE2N1pcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTEzLjQ3NDggMS4wODcyM0gxMC4wMjY2VjMuNDU4NjZIMTMuMTM2NlY0LjM1NzYySDEwLjAyNjZWNi43MjkwNUgxMy40NzQ4VjcuNjQ5MTlIOS4wNTM1MlYwLjE2ODMzMkgxMy40NzQ4VjEuMDg3MjNaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xNy41Nzc5IDcuNjQ5MTlIMTYuNjA0OFYxLjA4NzIzSDE0LjQ4OTVWMC4xNjgzMzJIMTkuNjkzM1YxLjA4NzIzSDE3LjU3NzlWNy42NDkxOVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjMuNDU4MiA3LjY0OTE5VjAuMTY4MzMySDI0LjQzMTRWNy42NDkxOUgyMy40NTgyWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMjguNzQ2OSA3LjY0OTE5SDI3Ljc3MzdWMS4wODcyM0gyNS42NTg0VjAuMTY4MzMySDMwLjg2MjJWMS4wODcyM0gyOC43NDY5VjcuNjQ5MTlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk00MC43MTMgNi42ODI5QzM5Ljk2ODMgNy40Mzg0NyAzOS4wNDMyIDcuODE2MjUgMzcuOTM2MyA3LjgxNjI1QzM2LjgyOTQgNy44MTYyNSAzNS45MDQyIDcuNDM4NDcgMzUuMTYwOCA2LjY4MjlDMzQuNDE2MSA1LjkyNzM0IDM0LjA0NTEgNS4wMDIyIDM0LjA0NTEgMy45MDg3NUMzNC4wNDUxIDIuODE1MyAzNC40MTYxIDEuODkwMTYgMzUuMTYwOCAxLjEzNDZDMzUuOTA0MiAwLjM3OTAzIDM2LjgyOTQgMCAzNy45MzYzIDBDMzkuMDM2OSAwIDM5Ljk2MDggMC4zODAyNzcgNDAuNzA4IDEuMTM5NThDNDEuNDU1MiAxLjg5ODg5IDQxLjgyODggMi44MjE1MyA0MS44Mjg4IDMuOTA4NzVDNDEuODI4OCA1LjAwMjIgNDEuNDU2NCA1LjkyNzM0IDQwLjcxMyA2LjY4MjlaTTM1Ljg3OSA2LjA1NTc2QzM2LjQzOTQgNi42MTY4MiAzNy4xMjQ3IDYuODk2MTEgMzcuOTM2MyA2Ljg5NjExQzM4Ljc0NzggNi44OTYxMSAzOS40MzQ1IDYuNjE1NTggMzkuOTkzNiA2LjA1NTc2QzQwLjU1NCA1LjQ5NDY5IDQwLjgzNTQgNC43NzkwMiA0MC44MzU0IDMuOTA4NzVDNDAuODM1NCAzLjAzODQ4IDQwLjU1NCAyLjMyMjgxIDM5Ljk5MzYgMS43NjE3NEMzOS40MzQ1IDEuMjAwNjggMzguNzQ3OCAwLjkyMTM5MyAzNy45MzYzIDAuOTIxMzkzQzM3LjEyNDcgMC45MjEzOTMgMzYuNDM5NCAxLjIwMTkzIDM1Ljg3OSAxLjc2MTc0QzM1LjMxOTggMi4zMjI4MSAzNS4wMzg0IDMuMDM4NDggMzUuMDM4NCAzLjkwODc1QzM1LjAzODQgNC43NzkwMiAzNS4zMTk4IDUuNDk0NjkgMzUuODc5IDYuMDU1NzZaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk00My4xOTQ0IDcuNjQ5MTlWMC4xNjgzMzJINDQuMzc4M0w0OC4wNTg4IDUuOTg3Mkg0OC4xMDA0TDQ4LjA1ODggNC41NDU4OFYwLjE2ODMzMkg0OS4wMzE5VjcuNjQ5MTlINDguMDE1OEw0NC4xNjUgMS41NDczMUg0NC4xMjM0TDQ0LjE2NSAyLjk4ODYyVjcuNjQ5MTlINDMuMTk0NFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTM0LjE5NjcgMTguNjMxOEMzMS4yMjgxIDE4LjYzMTggMjguODA4NiAyMC44NjI0IDI4LjgwODYgMjMuOTM0NUMyOC44MDg2IDI2Ljk4NzkgMzEuMjI4MSAyOS4yMzcyIDM0LjE5NjcgMjkuMjM3MkMzNy4xNjY1IDI5LjIzNzIgMzkuNTg2MSAyNi45ODc5IDM5LjU4NjEgMjMuOTM0NUMzOS41ODQ4IDIwLjg2MjQgMzcuMTY1MyAxOC42MzE4IDM0LjE5NjcgMTguNjMxOFpNMzQuMTk2NyAyNy4xNUMzMi41Njk4IDI3LjE1IDMxLjE2NzUgMjUuODI0NyAzMS4xNjc1IDIzLjkzNThDMzEuMTY3NSAyMi4wMjY5IDMyLjU3MSAyMC43MjE1IDM0LjE5NjcgMjAuNzIxNUMzNS44MjM2IDIwLjcyMTUgMzcuMjI1OCAyMi4wMjY5IDM3LjIyNTggMjMuOTM1OEMzNy4yMjU4IDI1LjgyMzQgMzUuODIzNiAyNy4xNSAzNC4xOTY3IDI3LjE1Wk0yMi40NDEgMTguNjMxOEMxOS40NzI0IDE4LjYzMTggMTcuMDUyOSAyMC44NjI0IDE3LjA1MjkgMjMuOTM0NUMxNy4wNTI5IDI2Ljk4NzkgMTkuNDcyNCAyOS4yMzcyIDIyLjQ0MSAyOS4yMzcyQzI1LjQxMDkgMjkuMjM3MiAyNy44MzA0IDI2Ljk4NzkgMjcuODMwNCAyMy45MzQ1QzI3LjgzMDQgMjAuODYyNCAyNS40MTA5IDE4LjYzMTggMjIuNDQxIDE4LjYzMThaTTIyLjQ0MSAyNy4xNUMyMC44MTQxIDI3LjE1IDE5LjQxMTkgMjUuODI0NyAxOS40MTE5IDIzLjkzNThDMTkuNDExOSAyMi4wMjY5IDIwLjgxNTQgMjAuNzIxNSAyMi40NDEgMjAuNzIxNUMyNC4wNjc5IDIwLjcyMTUgMjUuNDcwMiAyMi4wMjY5IDI1LjQ3MDIgMjMuOTM1OEMyNS40NzE0IDI1LjgyMzQgMjQuMDY3OSAyNy4xNSAyMi40NDEgMjcuMTVaTTguNDU4OTMgMjIuNTA5NEgxMy45MDg5QzEzLjc0NjEgMjMuNzc0OSAxMy4zMTk1IDI0LjY5ODggMTIuNjY4MiAyNS4zNDA5QzExLjg3NTYgMjYuMTIzOSAxMC42MzQ5IDI2Ljk4NzkgOC40NTg5MyAyNi45ODc5QzUuMTA0MTMgMjYuOTg3OSAyLjQ4MTM5IDI0LjMxNiAyLjQ4MTM5IDIxLjAwMkMyLjQ4MTM5IDE3LjY4OCA1LjEwNDEzIDE1LjAxNjEgOC40NTg5MyAxNS4wMTYxQzEwLjI2ODkgMTUuMDE2MSAxMS41OTAzIDE1LjcxOTMgMTIuNTY2IDE2LjYyMzJMMTQuMTcyNyAxNS4wMzZDMTIuODA5NiAxMy43NTA2IDExLjAwMDkgMTIuNzY2OCA4LjQ1ODkzIDEyLjc2NjhDMy44NjM0NCAxMi43NjY4IDAgMTYuNDYyNCAwIDIxLjAwMkMwIDI1LjU0MTYgMy44NjM0NCAyOS4yMzcyIDguNDU4OTMgMjkuMjM3MkMxMC45MzkxIDI5LjIzNzIgMTIuODEwOCAyOC40MzMgMTQuMjczNyAyNi45MjY4QzE1Ljc3ODEgMjUuNDQwNiAxNi4yNDY0IDIzLjM1MSAxNi4yNDY0IDIxLjY2NDFDMTYuMjQ2NCAyMS4xNDI5IDE2LjIwNiAyMC42NjA0IDE2LjEyNCAyMC4yNTg5SDguNDU4OTNWMjIuNTA5NFpNNjUuNjQ0NCAyMi4wMDY5QzY1LjE5NzYgMjAuODIyNSA2My44MzQ1IDE4LjYzMTggNjEuMDQ4OSAxOC42MzE4QzU4LjI4MzYgMTguNjMxOCA1NS45ODUyIDIwLjc4MTMgNTUuOTg1MiAyMy45MzQ1QzU1Ljk4NTIgMjYuOTA2OSA1OC4yNjM0IDI5LjIzNzIgNjEuMzEyNyAyOS4yMzcyQzYzLjc3MjYgMjkuMjM3MiA2NS4xOTYzIDI3Ljc1MSA2NS43ODcgMjYuODg3TDYzLjk1NjkgMjUuNjgxM0M2My4zNDczIDI2LjU2NTMgNjIuNTEzIDI3LjE0NzUgNjEuMzEyNyAyNy4xNDc1QzYwLjExMzcgMjcuMTQ3NSA1OS4yNTkyIDI2LjYwNTIgNTguNzEwMiAyNS41NDA0TDY1Ljg4OCAyMi42MDc5TDY1LjY0NDQgMjIuMDA2OVpNNTguMzIzOSAyMy43NzQ5QzU4LjI2MzQgMjEuNzI1MiA1OS45MzA3IDIwLjY4MTYgNjEuMTMxIDIwLjY4MTZDNjIuMDY2MiAyMC42ODE2IDYyLjg1ODggMjEuMTQ0MSA2My4xMjM5IDIxLjgwNjJMNTguMzIzOSAyMy43NzQ5Wk01Mi40ODkgMjguOTE2OEg1NC44NDY3VjEzLjMzMDRINTIuNDg5VjI4LjkxNjhaTTQ4LjU0MzUgMTkuODE3NUM0OC4wMTQ3IDE5LjE5NDEgNDYuOTk3NCAxOC42MzE4IDQ1LjcxNzYgMTguNjMxOEM0My4wMzMgMTguNjMxOCA0MC41NzMxIDIwLjk2MjEgNDAuNTczMSAyMy45NTU3QzQwLjU3MzEgMjYuOTI4MSA0My4wMzMgMjkuMjM4NCA0NS43MTc2IDI5LjIzODRDNDYuOTk4NyAyOS4yMzg0IDQ4LjAxNDcgMjguNjc2MSA0OC41NDM1IDI4LjAzNEg0OC42MjQzVjI4Ljc5NzFDNDguNjI0MyAzMC44MjU2IDQ3LjUyNjIgMzEuOTEwNCA0NS43NTggMzEuOTEwNEM0NC4zMTQxIDMxLjkxMDQgNDMuNDE5MiAzMC44ODY3IDQzLjA1MzIgMzAuMDIyN0w0MC45OTk3IDMwLjg2NjhDNDEuNTg5MSAzMi4yNzE5IDQzLjE1NDIgMzQgNDUuNzU4IDM0QzQ4LjUyMzMgMzQgNTAuODYyMSAzMi4zOTI5IDUwLjg2MjEgMjguNDc1NFYxOC45NTQ3SDQ4LjYyNTZWMTkuODE3NUg0OC41NDM1Wk00NS45MjA4IDI3LjE1QzQ0LjI5MzkgMjcuMTUgNDIuOTMyIDI1LjgwMzUgNDIuOTMyIDIzLjk1NTdDNDIuOTMyIDIyLjA4NjcgNDQuMjkzOSAyMC43MjE1IDQ1LjkyMDggMjAuNzIxNUM0Ny41MjYyIDIwLjcyMTUgNDguNzg3MSAyMi4wODY3IDQ4Ljc4NzEgMjMuOTU1N0M0OC43ODcxIDI1LjgwMzUgNDcuNTI2MiAyNy4xNSA0NS45MjA4IDI3LjE1Wk03Ni42OTMzIDEzLjMzMDRINzEuMDUwMlYyOC45MTY4SDczLjQwNDFWMjMuMDExOUg3Ni42OTJDNzkuMzAyMSAyMy4wMTE5IDgxLjg2OTMgMjEuMTQ1NCA4MS44NjkzIDE4LjE3MTdDODEuODY5MyAxNS4xOTgxIDc5LjMwMzQgMTMuMzMwNCA3Ni42OTMzIDEzLjMzMDRaTTc2Ljc1MzggMjAuODQyNEg3My40MDQxVjE1LjQ5OThINzYuNzUzOEM3OC41MTQ1IDE1LjQ5OTggNzkuNTE0MiAxNi45Mzk5IDc5LjUxNDIgMTguMTcxN0M3OS41MTQyIDE5LjM3ODcgNzguNTE0NSAyMC44NDI0IDc2Ljc1MzggMjAuODQyNFpNOTEuMzA5IDE4LjYwNDRDODkuNjAzOCAxOC42MDQ0IDg3LjgzODEgMTkuMzQ2MiA4Ny4xMDczIDIwLjk5MDhMODkuMTk3NCAyMS44NTIzQzg5LjY0NDIgMjAuOTkwOCA5MC40NzcyIDIwLjcwOSA5MS4zNDkzIDIwLjcwOUM5Mi41NjczIDIwLjcwOSA5My44MDU1IDIxLjQzMDkgOTMuODI1NyAyMi43MTM5VjIyLjg3NDdDOTMuMzk5MSAyMi42MzQxIDkyLjQ4NTMgMjIuMjczOCA5MS4zNjk1IDIyLjI3MzhDODkuMTE2NiAyMi4yNzM4IDg2LjgyMiAyMy40OTY5IDg2LjgyMiAyNS43ODIzQzg2LjgyMiAyNy44NjgyIDg4LjY2OTggMjkuMjExIDkwLjczOTcgMjkuMjExQzkyLjMyMjUgMjkuMjExIDkzLjE5NTkgMjguNTA5MSA5My43NDM3IDI3LjY4NjJIOTMuODI0NFYyOC44ODkzSDk2LjA5ODhWMjIuOTEzNEM5Ni4xMDAxIDIwLjE0NzkgOTQuMDA3NCAxOC42MDQ0IDkxLjMwOSAxOC42MDQ0Wk05MS4wMjM3IDI3LjE0NjNDOTAuMjUzOCAyNy4xNDYzIDg5LjE3NzIgMjYuNzY0OCA4OS4xNzcyIDI1LjgyMjJDODkuMTc3MiAyNC42MTkgOTAuNTE3NiAyNC4xNTc3IDkxLjY3NSAyNC4xNTc3QzkyLjcwODcgMjQuMTU3NyA5My4xOTcxIDI0LjM3ODQgOTMuODI1NyAyNC42Nzg5QzkzLjY0MjcgMjYuMTIzOSA5Mi4zODQzIDI3LjE0NjMgOTEuMDIzNyAyNy4xNDYzWk0xMDQuMzgxIDE4Ljk0NDhMMTAxLjY4MSAyNS43MDI1SDEwMS42MDFMOTguNzk4NiAxOC45NDQ4SDk2LjI2MTZMMTAwLjQ2MyAyOC4zODk0TDk4LjA2NzggMzMuNjQzNEgxMDAuNTI0TDEwNyAxOC45NDQ4SDEwNC4zODFaTTgzLjE2OTMgMjguOTE2OEg4NS41MjMzVjEzLjMzMDRIODMuMTY5M1YyOC45MTY4WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvaWQ1Mjk0NDM2MDRcIiBjbGFzc05hbWU9XCJsaW5rIGhvbWUtbWFpbl9faW5mby1hcHAgYXBwLXN0b3JlLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjYgMzJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIxLjcxNTkgMTcuMDE3NUMyMS43NDc2IDE0LjU0NzIgMjMuMDcyNSAxMi4yMDk4IDI1LjE3NDIgMTAuOTE2QzIzLjg0ODMgOS4wMTk4NCAyMS42Mjc1IDcuODE3NjMgMTkuMzE3IDcuNzQ1MjRDMTYuODUyNiA3LjQ4NjIzIDE0LjQ2MzUgOS4yMjE4NiAxMy4yMDc3IDkuMjIxODZDMTEuOTI3NiA5LjIyMTg2IDkuOTk0MSA3Ljc3MDk2IDcuOTEyMDQgNy44MTM4NkM1LjE5ODE2IDcuOTAxNjUgMi42NjgxNSA5LjQ0NjY4IDEuMzQ3NzkgMTEuODIyNUMtMS40OTA0NiAxNi43NDMgMC42MjY2MTkgMjMuOTc0NiAzLjM0NTQyIDI3Ljk1MkM0LjcwNTcgMjkuODk5NiA2LjI5NTQ3IDMyLjA3NTIgOC4zNzU2NiAzMS45OThDMTAuNDExMiAzMS45MTM1IDExLjE3MTUgMzAuNjk4MiAxMy42Mjg2IDMwLjY5ODJDMTYuMDYyOSAzMC42OTgyIDE2Ljc3NjIgMzEuOTk4IDE4Ljg5ODYgMzEuOTQ5QzIxLjA4MjkgMzEuOTEzNSAyMi40NTkxIDI5Ljk5MjcgMjMuNzcxNiAyOC4wMjY2QzI0Ljc0OSAyNi42Mzg5IDI1LjUwMTEgMjUuMTA1MSAyNiAyMy40ODIxQzIzLjQzMzEgMjIuMzk1IDIxLjcxODkgMTkuODA4MyAyMS43MTU5IDE3LjAxNzVaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xNy43MDcgNS4xMjk1MUMxOC44OTggMy42OTc5IDE5LjQ4NDcgMS44NTc4MSAxOS4zNDI2IDBDMTcuNTIzMSAwLjE5MTM2MSAxNS44NDI0IDEuMDYyMTMgMTQuNjM1MyAyLjQzODgyQzEzLjQ1NSAzLjc4MzkxIDEyLjg0MDcgNS41OTE2MyAxMi45NTY5IDcuMzc4NDNDMTQuNzc3IDcuMzk3MTkgMTYuNTY2NCA2LjU1MDAyIDE3LjcwNyA1LjEyOTUxWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxMDZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjM0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDEwNiAzNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMCAwLjQwMjEyNVY4LjU3NDg5SDMuMDUzMDJDNS41NzI3OCA4LjU3NDg5IDcuMDMxOSA3LjA3NCA3LjAzMTkgNC40NjMwMkM3LjAzMTkgMS44OTE2OSA1LjU2MTA2IDAuNDAyMTI1IDMuMDUzMDIgMC40MDIxMjVIMFpNMS4zMTI2MiAxLjU1NzUzSDIuOTA2NTJDNC42NTg2NCAxLjU1NzUzIDUuNjk1ODQgMi42MzM2MyA1LjY5NTg0IDQuNDgwMDFDNS42OTU4NCA2LjM1NDcgNC42NzYyMiA3LjQxOTQ4IDIuOTA2NTIgNy40MTk0OEgxLjMxMjYyVjEuNTU3NTNaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMS41MDA3IDguNjkzODJDMTMuMzY0MSA4LjY5MzgyIDE0LjUwNjggNy40ODc0NSAxNC41MDY4IDUuNDg4MTVDMTQuNTA2OCAzLjUwMDE4IDEzLjM1ODMgMi4yODgxNSAxMS41MDA3IDIuMjg4MTVDOS42MzcyMiAyLjI4ODE1IDguNDg4NjggMy41MDAxOCA4LjQ4ODY4IDUuNDg4MTVDOC40ODg2OCA3LjQ4NzQ1IDkuNjMxMzYgOC42OTM4MiAxMS41MDA3IDguNjkzODJaTTExLjUwMDcgNy42MTIwNUMxMC40MDQ5IDcuNjEyMDUgOS43ODk1OCA2LjgzNjEyIDkuNzg5NTggNS40ODgxNUM5Ljc4OTU4IDQuMTUxNTEgMTAuNDA0OSAzLjM2OTkyIDExLjUwMDcgMy4zNjk5MkMxMi41OTA2IDMuMzY5OTIgMTMuMjExOCA0LjE1MTUxIDEzLjIxMTggNS40ODgxNUMxMy4yMTE4IDYuODMwNDYgMTIuNTkwNiA3LjYxMjA1IDExLjUwMDcgNy42MTIwNVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTI0LjIzNzggMi40MDcwOEgyMi45Nzc5TDIxLjg0MTEgNy4xMTM2NEgyMS43NDE1TDIwLjQyODggMi40MDcwOEgxOS4yMjE3TDE3LjkwOTEgNy4xMTM2NEgxNy44MTUzTDE2LjY3MjYgMi40MDcwOEgxNS4zOTUyTDE3LjE1MzIgOC41NzQ4OUgxOC40NDgyTDE5Ljc2MDggNC4wMzI1OEgxOS44NjA0TDIxLjE3ODkgOC41NzQ4OUgyMi40ODU3TDI0LjIzNzggMi40MDcwOFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTI1LjY4ODcgOC41NzQ4OUgyNi45NDg2VjQuOTY3MDlDMjYuOTQ4NiA0LjAwNDI2IDI3LjU0MDQgMy40MDM5IDI4LjQ3MjIgMy40MDM5QzI5LjQwMzkgMy40MDM5IDI5Ljg0OTMgMy44OTY2NSAyOS44NDkzIDQuODg3OFY4LjU3NDg5SDMxLjEwOTFWNC41ODE5NkMzMS4xMDkxIDMuMTE1MDUgMzAuMzIzOSAyLjI4ODE1IDI4Ljg5OTkgMi4yODgxNUMyNy45Mzg5IDIuMjg4MTUgMjcuMzA2IDIuNzAxNiAyNi45OTU1IDMuMzg2OTFIMjYuOTAxN1YyLjQwNzA4SDI1LjY4ODdWOC41NzQ4OVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMzMuMDkzMyA4LjU3NDg5SDM0LjM1MzJWMEgzMy4wOTMzVjguNTc0ODlaXCIgZmlsbD1cIndoaXRlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0zOS4wOTE1IDguNjkzODJDNDAuOTU1IDguNjkzODIgNDIuMDk3NyA3LjQ4NzQ1IDQyLjA5NzcgNS40ODgxNUM0Mi4wOTc3IDMuNTAwMTggNDAuOTQ5MSAyLjI4ODE1IDM5LjA5MTUgMi4yODgxNUMzNy4yMjgxIDIuMjg4MTUgMzYuMDc5NSAzLjUwMDE4IDM2LjA3OTUgNS40ODgxNUMzNi4wNzk1IDcuNDg3NDUgMzcuMjIyMiA4LjY5MzgyIDM5LjA5MTUgOC42OTM4MlpNMzkuMDkxNSA3LjYxMjA1QzM3Ljk5NTcgNy42MTIwNSAzNy4zODA0IDYuODM2MTIgMzcuMzgwNCA1LjQ4ODE1QzM3LjM4MDQgNC4xNTE1MSAzNy45OTU3IDMuMzY5OTIgMzkuMDkxNSAzLjM2OTkyQzQwLjE4MTUgMy4zNjk5MiA0MC44MDI2IDQuMTUxNTEgNDAuODAyNiA1LjQ4ODE1QzQwLjgwMjYgNi44MzA0NiA0MC4xODE1IDcuNjEyMDUgMzkuMDkxNSA3LjYxMjA1WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNDUuODUxNSA3LjY1MTdDNDUuMTY1OSA3LjY1MTcgNDQuNjY3OCA3LjMyODg3IDQ0LjY2NzggNi43NzM4MkM0NC42Njc4IDYuMjMwMSA0NS4wNjYzIDUuOTQxMjUgNDUuOTQ1MyA1Ljg4NDYxTDQ3LjUwNCA1Ljc4ODMzVjYuMzAzNzNDNDcuNTA0IDcuMDY4MzMgNDYuODAwOCA3LjY1MTcgNDUuODUxNSA3LjY1MTdaTTQ1LjUyOTIgOC42NzY4M0M0Ni4zNjcyIDguNjc2ODMgNDcuMDY0NSA4LjMyNTY4IDQ3LjQ0NTQgNy43MDgzM0g0Ny41NDVWOC41NzQ4OUg0OC43NThWNC4zNjEwN0M0OC43NTggMy4wNTg0MSA0Ny44NTU2IDIuMjg4MTUgNDYuMjU1OCAyLjI4ODE1QzQ0LjgwODQgMi4yODgxNSA0My43NzcxIDIuOTY3NzkgNDMuNjQ4MiA0LjAyNjkxSDQ0Ljg2NzFDNDUuMDA3NyAzLjU5MDggNDUuNDk0MSAzLjM0MTYgNDYuMTk3MyAzLjM0MTZDNDcuMDU4NyAzLjM0MTYgNDcuNTA0IDMuNzA5NzQgNDcuNTA0IDQuMzYxMDdWNC44OTM0Nkw0NS43NzUzIDQuOTg5NzVDNDQuMjU3NiA1LjA4MDM2IDQzLjQwMjEgNS43MjAzNyA0My40MDIxIDYuODMwNDZDNDMuNDAyMSA3Ljk1NzU0IDQ0LjI5ODYgOC42NzY4MyA0NS41MjkyIDguNjc2ODNaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk01My4wMzM0IDguNjc2ODNDNTMuOTEyNCA4LjY3NjgzIDU0LjY1NjYgOC4yNzQ3MSA1NS4wMzc1IDcuNjAwNzJINTUuMTM3MVY4LjU3NDg5SDU2LjM0NDNWMEg1NS4wODQ0VjMuMzg2OTFINTQuOTkwNkM1NC42NDQ5IDIuNzA3MjYgNTMuOTA2NiAyLjMwNTE0IDUzLjAzMzQgMi4zMDUxNEM1MS40MjIgMi4zMDUxNCA1MC4zODQ3IDMuNTM5ODMgNTAuMzg0NyA1LjQ4ODE1QzUwLjM4NDcgNy40NDIxNCA1MS40MTAyIDguNjc2ODMgNTMuMDMzNCA4LjY3NjgzWk01My4zOTA5IDMuMzk4MjRDNTQuNDQ1NyAzLjM5ODI0IDU1LjEwNzggNC4yMDgxNSA1NS4xMDc4IDUuNDkzODJDNTUuMTA3OCA2Ljc4NTE1IDU0LjQ1MTUgNy41ODM3MyA1My4zOTA5IDcuNTgzNzNDNTIuMzI0NCA3LjU4MzczIDUxLjY4NTYgNi43OTY0NyA1MS42ODU2IDUuNDg4MTVDNTEuNjg1NiA0LjE5MTE2IDUyLjMzMDIgMy4zOTgyNCA1My4zOTA5IDMuMzk4MjRaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk02NC41MTQyIDguNjkzODJDNjYuMzc3NiA4LjY5MzgyIDY3LjUyMDMgNy40ODc0NSA2Ny41MjAzIDUuNDg4MTVDNjcuNTIwMyAzLjUwMDE4IDY2LjM3MTggMi4yODgxNSA2NC41MTQyIDIuMjg4MTVDNjIuNjUwNyAyLjI4ODE1IDYxLjUwMjIgMy41MDAxOCA2MS41MDIyIDUuNDg4MTVDNjEuNTAyMiA3LjQ4NzQ1IDYyLjY0NDkgOC42OTM4MiA2NC41MTQyIDguNjkzODJaTTY0LjUxNDIgNy42MTIwNUM2My40MTg0IDcuNjEyMDUgNjIuODAzMSA2LjgzNjEyIDYyLjgwMzEgNS40ODgxNUM2Mi44MDMxIDQuMTUxNTEgNjMuNDE4NCAzLjM2OTkyIDY0LjUxNDIgMy4zNjk5MkM2NS42MDQxIDMuMzY5OTIgNjYuMjI1MyA0LjE1MTUxIDY2LjIyNTMgNS40ODgxNUM2Ni4yMjUzIDYuODMwNDYgNjUuNjA0MSA3LjYxMjA1IDY0LjUxNDIgNy42MTIwNVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTY5LjE4ODEgOC41NzQ4OUg3MC40NDc5VjQuOTY3MDlDNzAuNDQ3OSA0LjAwNDI2IDcxLjAzOTggMy40MDM5IDcxLjk3MTUgMy40MDM5QzcyLjkwMzMgMy40MDM5IDczLjM0ODYgMy44OTY2NSA3My4zNDg2IDQuODg3OFY4LjU3NDg5SDc0LjYwODVWNC41ODE5NkM3NC42MDg1IDMuMTE1MDUgNzMuODIzMiAyLjI4ODE1IDcyLjM5OTMgMi4yODgxNUM3MS40MzgzIDIuMjg4MTUgNzAuODA1NCAyLjcwMTYgNzAuNDk0OCAzLjM4NjkxSDcwLjQwMTFWMi40MDcwOEg2OS4xODgxVjguNTc0ODlaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk04MC40MTEgMC44NzIyMTRWMi40MzU0SDc5LjM5NzJWMy40NjA1NEg4MC40MTFWNi45NDM3M0M4MC40MTEgOC4xMzMxMSA4MC45Njc3IDguNjA4ODcgODIuMzY4MiA4LjYwODg3QzgyLjYxNDMgOC42MDg4NyA4Mi44NDg3IDguNTgwNTUgODMuMDUzOCA4LjU0NjU3VjcuNTMyNzZDODIuODc4IDcuNTQ5NzUgODIuNzY2NyA3LjU2MTA4IDgyLjU3MzMgNy41NjEwOEM4MS45NDYzIDcuNTYxMDggODEuNjcwOSA3LjI3Nzg5IDgxLjY3MDkgNi42MzIyM1YzLjQ2MDU0SDgzLjA1MzhWMi40MzU0SDgxLjY3MDlWMC44NzIyMTRIODAuNDExWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNODQuNzQ1IDguNTc0ODlIODYuMDA0OVY0Ljk3Mjc1Qzg2LjAwNDkgNC4wMzgyNCA4Ni41NzkxIDMuNDA5NTYgODcuNjEwNSAzLjQwOTU2Qzg4LjUwMTIgMy40MDk1NiA4OC45NzU4IDMuOTA3OTcgODguOTc1OCA0Ljg5MzQ2VjguNTc0ODlIOTAuMjM1N1Y0LjU5MzI4QzkwLjIzNTcgMy4xMjYzOCA4OS4zOTc3IDIuMjkzODEgODguMDM4MiAyLjI5MzgxQzg3LjA3NzIgMi4yOTM4MSA4Ni40MDMzIDIuNzA3MjYgODYuMDkyOCAzLjM5ODI0SDg1Ljk5MzFWMEg4NC43NDVWOC41NzQ4OVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTk0Ljc4MDcgMy4zMjQ2MUM5NS43MTI0IDMuMzI0NjEgOTYuMzIxOCAzLjk1MzI4IDk2LjM1MTEgNC45MjE3OEg5My4xMjgyQzkzLjE5ODUgMy45NTg5NSA5My44NDg5IDMuMzI0NjEgOTQuNzgwNyAzLjMyNDYxWk05Ni4zNDUzIDYuOTA5NzVDOTYuMTEwOSA3LjM5MTE3IDk1LjU4OTMgNy42NTczNiA5NC44Mjc1IDcuNjU3MzZDOTMuODE5NiA3LjY1NzM2IDkzLjE2OTIgNi45NzIwNSA5My4xMjgyIDUuODkwMjhWNS44MjIzMUg5Ny42MzQ0VjUuMzk3NTNDOTcuNjM0NCAzLjQ2MDU0IDk2LjU2MjEgMi4yODgxNSA5NC43ODY1IDIuMjg4MTVDOTIuOTg3NSAyLjI4ODE1IDkxLjg0NDggMy41Mzk4MyA5MS44NDQ4IDUuNTEwODFDOTEuODQ0OCA3LjQ4MTc5IDkyLjk2NDEgOC42OTM4MiA5NC43OTI0IDguNjkzODJDOTYuMjUxNSA4LjY5MzgyIDk3LjI3MTEgOC4wMTQxOCA5Ny41NTgzIDYuOTA5NzVIOTYuMzQ1M1pcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTY2LjQ2MjkgMTQuNDk0MVYxNy42MjA1SDY0LjQzNTRWMTkuNjcwOEg2Ni40NjI5VjI2LjYzNzJDNjYuNDYyOSAyOS4wMTU5IDY3LjU3NjMgMjkuOTY3NCA3MC4zNzczIDI5Ljk2NzRDNzAuODY5NiAyOS45Njc0IDcxLjMzODQgMjkuOTEwOCA3MS43NDg2IDI5Ljg0MjhWMjcuODE1MkM3MS4zOTcgMjcuODQ5MiA3MS4xNzQzIDI3Ljg3MTggNzAuNzg3NSAyNy44NzE4QzY5LjUzMzUgMjcuODcxOCA2OC45ODI3IDI3LjMwNTUgNjguOTgyNyAyNi4wMTQxVjE5LjY3MDhINzEuNzQ4NlYxNy42MjA1SDY4Ljk4MjdWMTQuNDk0MUg2Ni40NjI5WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNzguODg0MSAzMC4xMzczQzgyLjYxMSAzMC4xMzczIDg0Ljg5NjMgMjcuNzI0NiA4NC44OTYzIDIzLjcyNkM4NC44OTYzIDE5Ljc1MDEgODIuNTk5MiAxNy4zMjYgNzguODg0MSAxNy4zMjZDNzUuMTU3MiAxNy4zMjYgNzIuODYwMSAxOS43NTAxIDcyLjg2MDEgMjMuNzI2QzcyLjg2MDEgMjcuNzI0NiA3NS4xNDU0IDMwLjEzNzMgNzguODg0MSAzMC4xMzczWk03OC44ODQxIDI3Ljk3MzhDNzYuNjkyNSAyNy45NzM4IDc1LjQ2MTkgMjYuNDIxOSA3NS40NjE5IDIzLjcyNkM3NS40NjE5IDIxLjA1MjcgNzYuNjkyNSAxOS40ODk1IDc4Ljg4NDEgMTkuNDg5NUM4MS4wNjM5IDE5LjQ4OTUgODIuMzA2MyAyMS4wNTI3IDgyLjMwNjMgMjMuNzI2QzgyLjMwNjMgMjYuNDEwNiA4MS4wNjM5IDI3Ljk3MzggNzguODg0MSAyNy45NzM4WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNODYuODUxNyAyOS44OTk1SDg5LjM3MTRWMjIuNjE1OUM4OS4zNzE0IDIwLjg4MjggOTAuNzE5MiAxOS43MTYxIDkyLjYyOTUgMTkuNzE2MUM5My4wNzQ5IDE5LjcxNjEgOTMuODI1IDE5Ljc5NTQgOTQuMDM1OSAxOS44NjMzVjE3LjQ2MTlDOTMuNzY2NCAxNy4zOTM5IDkzLjI4NTkgMTcuMzYgOTIuOTEwOCAxNy4zNkM5MS4yNDY2IDE3LjM2IDg5LjgyODUgMTguMjQzNSA4OS40NjUyIDE5LjQ1NTVIODkuMjc3N1YxNy41NjM5SDg2Ljg1MTdWMjkuODk5NVpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTEwMC4yOTIgMTkuMzk4OUMxMDIuMTU2IDE5LjM5ODkgMTAzLjM3NSAyMC42NTYzIDEwMy40MzMgMjIuNTkzMkg5Ni45ODc0Qzk3LjEyODEgMjAuNjY3NiA5OC40MjkgMTkuMzk4OSAxMDAuMjkyIDE5LjM5ODlaTTEwMy40MjIgMjYuNTY5MkMxMDIuOTUzIDI3LjUzMiAxMDEuOTEgMjguMDY0NCAxMDAuMzg2IDI4LjA2NDRDOTguMzcwNCAyOC4wNjQ0IDk3LjA2OTUgMjYuNjkzOCA5Ni45ODc0IDI0LjUzMDJWMjQuMzk0M0gxMDZWMjMuNTQ0OEMxMDYgMTkuNjcwOCAxMDMuODU1IDE3LjMyNiAxMDAuMzA0IDE3LjMyNkM5Ni43MDYyIDE3LjMyNiA5NC40MjA4IDE5LjgyOTMgOTQuNDIwOCAyMy43NzEzQzk0LjQyMDggMjcuNzEzMyA5Ni42NTkzIDMwLjEzNzMgMTAwLjMxNiAzMC4xMzczQzEwMy4yMzQgMzAuMTM3MyAxMDUuMjczIDI4Ljc3OCAxMDUuODQ4IDI2LjU2OTJIMTAzLjQyMlpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTQ5LjkzODcgMjUuMzQ0MUM1MC4xMzMgMjguMzczMiA1Mi43NDQ3IDMwLjMxMDQgNTYuNjMxOCAzMC4zMTA0QzYwLjc4NjIgMzAuMzEwNCA2My4zODU3IDI4LjI3OTMgNjMuMzg1NyAyNS4wMzg5QzYzLjM4NTcgMjIuNDkxMiA2MS45MDM3IDIxLjA4MjMgNTguMzA4MSAyMC4yNzIyTDU2LjM3NjcgMTkuODE0M0M1NC4wOTMgMTkuMjk3NyA1My4xNjk4IDE4LjYwNSA1My4xNjk4IDE3LjM5NTdDNTMuMTY5OCAxNS44Njk1IDU0LjYwMzIgMTQuODcxNSA1Ni43NTMzIDE0Ljg3MTVDNTguNzk0IDE0Ljg3MTUgNjAuMjAzMSAxNS44NDYgNjAuNDU4MiAxNy40MDc1SDYzLjEwNjNDNjIuOTQ4NCAxNC41NTQ1IDYwLjM0ODkgMTIuNTQ2OSA1Ni43ODk3IDEyLjU0NjlDNTIuOTYzMyAxMi41NDY5IDUwLjQxMjQgMTQuNTU0NSA1MC40MTI0IDE3LjU3MTlDNTAuNDEyNCAyMC4wNjA5IDUxLjg1NzkgMjEuNTQwMiA1NS4wMjg0IDIyLjI1NjNMNTcuMjg3OCAyMi43ODQ3QzU5LjYwNzkgMjMuMzEzIDYwLjYyODMgMjQuMDg3OSA2MC42MjgzIDI1LjM3OTNDNjAuNjI4MyAyNi44ODIxIDU5LjAyNDggMjcuOTc0IDU2LjgzODMgMjcuOTc0QzU0LjQ5MzkgMjcuOTc0IDUyLjg2NjIgMjYuOTUyNiA1Mi42MzU0IDI1LjM0NDFINDkuOTM4N1pcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIzLjgzNjUgMTcuMzZDMjIuMTAyIDE3LjM2IDIwLjYwMTggMTguMTk4MiAxOS44MjgzIDE5LjYwMjhIMTkuNjQwOFYxNy41NjM5SDE3LjIxNDhWMzRIMTkuNzM0NVYyOC4wMzA0SDE5LjkzMzhDMjAuNjAxOCAyOS4zMzMxIDIyLjA0MzQgMzAuMTAzNCAyMy44NTk5IDMwLjEwMzRDMjcuMDgyOSAzMC4xMDM0IDI5LjEzMzkgMjcuNjQ1MyAyOS4xMzM5IDIzLjcyNkMyOS4xMzM5IDE5LjgwNjcgMjcuMDgyOSAxNy4zNiAyMy44MzY1IDE3LjM2Wk0yMy4xMjE2IDI3LjkxNzJDMjEuMDEyIDI3LjkxNzIgMTkuNjg3NyAyNi4zMDg3IDE5LjY4NzcgMjMuNzM3M0MxOS42ODc3IDIxLjE1NDcgMjEuMDEyIDE5LjU0NjIgMjMuMTMzMyAxOS41NDYyQzI1LjI2NjMgMTkuNTQ2MiAyNi41NDM4IDIxLjEyMDcgMjYuNTQzOCAyMy43MjZDMjYuNTQzOCAyNi4zNDI2IDI1LjI2NjMgMjcuOTE3MiAyMy4xMjE2IDI3LjkxNzJaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0zNy45NTA5IDE3LjM2QzM2LjIxNjQgMTcuMzYgMzQuNzE2MiAxOC4xOTgyIDMzLjk0MjcgMTkuNjAyOEgzMy43NTUyVjE3LjU2MzlIMzEuMzI5MlYzNEgzMy44NDlWMjguMDMwNEgzNC4wNDgyQzM0LjcxNjIgMjkuMzMzMSAzNi4xNTc4IDMwLjEwMzQgMzcuOTc0NCAzMC4xMDM0QzQxLjE5NzMgMzAuMTAzNCA0My4yNDgzIDI3LjY0NTMgNDMuMjQ4MyAyMy43MjZDNDMuMjQ4MyAxOS44MDY3IDQxLjE5NzMgMTcuMzYgMzcuOTUwOSAxNy4zNlpNMzcuMjM2IDI3LjkxNzJDMzUuMTI2NCAyNy45MTcyIDMzLjgwMjEgMjYuMzA4NyAzMy44MDIxIDIzLjczNzNDMzMuODAyMSAyMS4xNTQ3IDM1LjEyNjQgMTkuNTQ2MiAzNy4yNDc3IDE5LjU0NjJDMzkuMzgwNyAxOS41NDYyIDQwLjY1ODIgMjEuMTIwNyA0MC42NTgyIDIzLjcyNkM0MC42NTgyIDI2LjM0MjYgMzkuMzgwNyAyNy45MTcyIDM3LjIzNiAyNy45MTcyWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTIuNjkzOSAyOS44OTk1SDE1LjU4NDlMOS4yNTYyMiAxMi45NTc4SDYuMzI4NzJMMCAyOS44OTk1SDIuNzkzODdMNC40MDk0NiAyNS40MDI4SDExLjA5MDVMMTIuNjkzOSAyOS44OTk1Wk03LjY1Mjc4IDE2LjAzMzhINy44NTkyOEwxMC4zOTgxIDIzLjE5NTZINS4xMDE4NUw3LjY1Mjc4IDE2LjAzMzhaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctN1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbWFpbl9fcGhvbmVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Ugc3JjPXtwaG9uZV8xfSBzcmNTZXQ9e2Ake3Bob25lXzF9IDF4LCAke3Bob25lXzFfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZSBzcmM9e3Bob25lXzJ9IHNyY1NldD17YCR7cGhvbmVfMn0gMXgsICR7cGhvbmVfMl8yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHQgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmctbGlnaHQtNFwiIGFsdD1cIlwiIHNyYz17c3RhcjJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0ey8qPHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxMzcxXCJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjEzMDlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxMzcxIDEzMDlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfOTZfOTYxKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNODgzLjU2MSAzMi44MDk0TDk4Ni4zMzMgMzQ5LjEwOEwxMzE4LjkxIDM0OS4xMDhMMTA0OS44NSA1NDQuNTkxTDExNTIuNjIgODYwLjg5TDg4My41NjEgNjY1LjQwNkw2MTQuNTAxIDg2MC44OUw3MTcuMjczIDU0NC41OTFMNDQ4LjIxMyAzNDkuMTA4TDc4MC43ODkgMzQ5LjEwOEw4ODMuNTYxIDMyLjgwOTRaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDBfbGluZWFyXzk2Xzk2MSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRlZnM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxmaWx0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImZpbHRlcjBfZl85Nl85NjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHg9XCIwLjIxMzM0OFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eT1cIi00MTUuMTkxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE3NjYuN1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTcyNC4wOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZlQmxlbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU9XCJub3JtYWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW49XCJTb3VyY2VHcmFwaGljXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9XCJzaGFwZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9maWx0ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaW5lYXJHcmFkaWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQwX2xpbmVhcl85Nl85NjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiODk3LjAwMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCI0NTAuMzgzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4Mj1cIjUyMy41NjhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkyPVwiMjg5LjQ0M1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIHN0b3BDb2xvcj1cIiMxRjEyRDNcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjM0ZBRkRFXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz4qL31cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgbWVtbyB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG4vL2NvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGNhbGN1bGF0ZVNsaWRlc1BlclZpZXcgfSBmcm9tICcuLi9oZWxwZXJzL2Z1bmN0aW9ucyc7XG5cblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uXSk7XG5cbmV4cG9ydCBjb25zdCBIb21lUmV2aWV3cyA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICBjb25zdCBbc2xpZGVzUGVyVmlldywgc2V0U2xpZGVzUGVyVmlld10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByZXZpZXdzID0gdXNlRmV0Y2goXG4gICAgJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9yZXZpZXdzP3Jldmlld3NfY2F0ZWdvcmllcz0xMScsXG4gICAge31cbiAgKTtcblxuICBjb25zb2xlLmxvZyhyZXZpZXdzKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc0NvdW50ID0gY2FsY3VsYXRlU2xpZGVzUGVyVmlldygpO1xuICAgIHNldFNsaWRlc1BlclZpZXcoc2xpZGVzQ291bnQpO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc0NvdW50ID0gY2FsY3VsYXRlU2xpZGVzUGVyVmlldygpO1xuICAgIHNldFNsaWRlc1BlclZpZXcoc2xpZGVzQ291bnQpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFyZXZpZXdzLmRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaG9tZS1yZXZpZXdzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yZXZpZXdzX193cmFwcGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgdGl0bGVfc2l6ZS1tIGhvbWUtcmV2aWV3c19fdGl0bGVcIj5cbiAgICAgICAgICAgIEFwcCBVc2VyIFJldmlld3NcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLWxcIj5Mb2FkaW5nLi4uPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaG9tZS1yZXZpZXdzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmV2aWV3c19fd3JhcHBlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLW0gaG9tZS1yZXZpZXdzX190aXRsZVwiPlxuICAgICAgICAgIEFwcCBVc2VyIFJldmlld3NcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTJ9XG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17c2xpZGVzUGVyVmlld31cbiAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBlbDogJy5ob21lLXJldmlld3NfX3BhZ2luYXRpb24nLFxuICAgICAgICAgIH19XG4gICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICBpbml0aWFsU2xpZGU9ezN9XG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICB7cmV2aWV3cy5kYXRhLm1hcCgocmV2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFyc0NvdW50ID0gK3Jldmlldy5hY2YucmV2aWV3X3N0YXJzO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnNBcnIgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFyc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgc3RhcnNBcnIucHVzaChpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17cmV2aWV3LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmV2aWV3c19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJldmlld3NfX2l0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3Mtc3RhcnMgaG9tZS1yZXZpZXdzX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGFyc0Fyci5tYXAoKHN0YXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXItd3JhcHBlclwiIGtleT17c3Rhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMyAyM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEuMjUgMC44OTk5MDJMMTQuMzcxNyA4LjM1MzIxTDIyLjQyNDkgOS4wMTg5NUwxNi4zMDExIDE0LjI5MTFMMTguMTU2NSAyMi4xNTU5TDExLjI1IDE3Ljk2MDlMNC4zNDM1MiAyMi4xNTU5TDYuMTk4OTQgMTQuMjkxMUwwLjA3NTA4NTYgOS4wMTg5NUw4LjEyODI3IDguMzUzMjFMMTEuMjUgMC44OTk5MDJaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkVEMzAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyZXZpZXcuYWNmLnJldmlld190ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJldmlld3NfX2l0ZW0tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Jldmlldy5hY2YucmV2aWV3X2ljb25feDEudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PXtgJHtyZXZpZXcuYWNmLnJldmlld19pY29uX3gxLnVybH0gMXgsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldy5hY2YucmV2aWV3X2ljb25feDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJldmlldy5hY2YucmV2aWV3X2ljb25feDEudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAyeGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGl0bGVcIj57cmV2aWV3LnRpdGxlLnJlbmRlcmVkfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yZXZpZXdzX19wYWdpbmF0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yZXZpZXdzX19wYWdpbmF0aW9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59KTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyLCBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEhvd1dvcmtzQm90dG9tID0gKCkgPT4ge1xuICBjb25zdCBbaXNQb3N0SGVscGZ1bCwgc2V0SXNQb3N0SGVscGZ1bF0gPSB1c2VTdGF0ZSgnbm90IHZvdGVkJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gJ2hvdyBTbm9yZWxhYiB3b3Jrcyc7XG4gICAgY29uc3QgbGFzdFZvdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTtcblxuICAgIGNvbnNvbGUubG9nKGxhc3RWb3RlKTtcblxuICAgIGlmIChsYXN0Vm90ZSAhPT0gbnVsbCkge1xuICAgICAgc2V0SXNQb3N0SGVscGZ1bCgndm90ZWQnKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVZZXNDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc1Bvc3RIZWxwZnVsKHRydWUpO1xuXG4gICAgY29uc3Qgc3RvcmFnZUtleSA9ICdob3cgU25vcmVsYWIgd29ya3MnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5vQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNQb3N0SGVscGZ1bChmYWxzZSk7XG5cbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gJ2hvdyBTbm9yZWxhYiB3b3Jrcyc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbENsaWNrID0gKCkgPT4ge1xuICAgIHNldElzUG9zdEhlbHBmdWwoJ25vdCB2b3RlZCcpO1xuXG4gICAgY29uc3Qgc3RvcmFnZUtleSA9ICdob3cgU25vcmVsYWIgd29ya3MnO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvdy13b3Jrc19faW50cm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3NfX2ludHJvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUtcyBob3ctd29ya3NfX2ludHJvLXRpdGxlXCI+XG4gICAgICAgICAgICAgIFRoaXMgaXMgYSBzaG9ydCBpbnRyb2R1Y3Rpb24gdG8gU25vcmVMYWJcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrc19faW50cm8tdGV4dFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMTY5XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMThcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTE2OSAyMThcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTgxOS4xMjIgMEw3NTkuMzk1IDgzLjI2ODZMMTE2OSAxMTkuNTA5TDcyMi40ODIgMTM0LjczMUw2NjIuNzU1IDIxOEw0NDYuNTE4IDE0NC4xMzlMMCAxNTkuMzYyTDMxMi44NzcgOTguNDkxMUw5Ni42NDAxIDI0LjYzMDVMNTA2LjI0NSA2MC44NzA4TDgxOS4xMjIgMFpcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxQTI1RUZcIlxuICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbG90cyBvZiBvdGhlciBmZWF0dXJlcyBhbmQgdG9vbHMgaW4mbmJzcDt0aGUgYXBwLiBZb3VcbiAgICAgICAgICAgICAgICBjYW4gZmluZCBvdXQgbW9yZSBhYm91dCB0aGVzZSBhbmQgaG93IHRvIGludGVycHJldCB5b3VyIHJlc3VsdHNcbiAgICAgICAgICAgICAgICBpbiBvdXJ7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiL2ZhcXNcIj5cbiAgICAgICAgICAgICAgICAgIEZBUXNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgWW91IGNhbiBhbHNvIGdldCBpbiB0b3VjaCB3aXRoIHVzJm5ic3A7b257JyAnfVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwibWFpbHRvOnN1cHBvcnRAc25vcmVsYWIuY29tXCI+XG4gICAgICAgICAgICAgICAgICBzdXBwb3J0QHNub3JlbGFiLmNvbVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaG93LXdvcmtzX19yZXZpZXdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3NfX3Jldmlldy13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zaWdodC1yZXZpZXdfX2NvbnRlbnRcIlxuICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgaXNQb3N0SGVscGZ1bCA9PT0gJ25vdCB2b3RlZCdcbiAgICAgICAgICAgICAgICAgID8geyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICAgICAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlLXMgaW5zaWdodC1yZXZpZXdfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgTGV0IHVzIGtub3cgaWYgeW91IGxpa2VkIHRoZSBwb3N0LiBUaGF04oCZcyB0aGUgb25seSB3YXkgd2UgY2FuXG4gICAgICAgICAgICAgICAgaW1wcm92ZS5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0LXJldmlld19fbm90ZVwiPlxuICAgICAgICAgICAgICAgIDxwPldhcyB0aGlzIHBvc3QgaGVscGZ1bD88L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHQtcmV2aWV3X19idG5zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluayBidG4gYnRuLWFycm93IGluc2lnaHQtcmV2aWV3X19idG5cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlWWVzQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5ZZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGJ0biBidG4tYXJyb3cgYnRuX2dyYXktdGV4dCBpbnNpZ2h0LXJldmlld19fYnRuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5vQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5ObzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNpZ2h0LXJldmlld19fZmVlZGJhY2tcIlxuICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgaXNQb3N0SGVscGZ1bCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH1cbiAgICAgICAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zaWdodC1yZXZpZXdfX2ZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgIGlzUG9zdEhlbHBmdWwgPT09ICd2b3RlZCdcbiAgICAgICAgICAgICAgICAgID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9XG4gICAgICAgICAgICAgICAgICA6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5Zb3UgaGF2ZSBhbHJlYWR5IHZvdGVkIGZvciB0aGlzIHBvc3Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zaWdodC1yZXZpZXdfX2Zvcm1cIlxuICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgaXNQb3N0SGVscGZ1bCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgID8geyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICAgICAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluc2lnaHQtcmV2aWV3X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgU29ycnkgdG8gaGVhciB0aGF0IHRoaXMgYXJ0aWNsZSB3YXMgbm90IGhlbHBmdWwuIFdlIHByaWRlXG4gICAgICAgICAgICAgICAgb3Vyc2VsdmVzIG9uIGJlaW5nIHRoZSBiZXN0IG9ubGluZSByZXNvdXJjZSBmb3Igc25vcmluZyBhbmRcbiAgICAgICAgICAgICAgICBzbGVlcCBhcG5lYSBpbmZvcm1hdGlvbiBzbyBwbGVhc2UgbGVhdmUgYSBjb21tZW50IHRvIGhlbHAgdXNcbiAgICAgICAgICAgICAgICBpbXByb3ZlIG91ciB3ZWJzaXRlJ3MgY29udGVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJmZWVkYmFjay1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlIGNhcmVlcnMtZm9ybV9fZmllbGQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZSpcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXQtYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX190ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgY2FyZWVycy1mb3JtX19maWVsZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBOYW1lKlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dC1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19zdWJtaXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNhcmVlcnMtZm9ybV9fY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsQ2xpY2t9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q2FuY2VsPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIFNlbmQgZmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gJy4uL2ltYWdlcy9EYXNoYm9hcmQucG5nJztcbmltcG9ydCBkYXNoYm9hcmRfMnggZnJvbSAnLi4vaW1hZ2VzL0Rhc2hib2FyZEAyeC5wbmcnO1xuaW1wb3J0IGF1ZGlvIGZyb20gJy4uL2ltYWdlcy9BdWRpby5wbmcnO1xuaW1wb3J0IGF1ZGlvXzJ4IGZyb20gJy4uL2ltYWdlcy9BdWRpb0AyeC5wbmcnO1xuXG5leHBvcnQgY29uc3QgSG93V29ya3NNYWluID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvdy13b3Jrcy1tYWluXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1tYWluX193cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3MtbWFpbl9faW5mb1wiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgdGl0bGVfc2l6ZS1sIGhvdy13b3Jrcy1tYWluX190aXRsZVwiPkhvdyBTbm9yZUxhYiBXb3JrczwvaDE+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0U25vcmVMYWIgaXMgYW4gYXBwIHRoYXQgcmVjb3JkcyB5b3VyIHNub3JpbmcsIGdpdmluZyB5b3XCoG9iamVjdGl2ZSBkYXRhIHRvIGhlbHAgZmluZCB0aGVcblx0XHRcdFx0XHRcdFx0c29sdXRpb25zIHRoYXQgd29yayBmb3IgeW91LlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0VGhpcyBpcyBvdXIgY29uY2lzZSBndWlkZSB0byBnZXR0aW5nIHN0YXJ0ZWQgd2l0aCBTbm9yZUxhYuKAplxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZSBleGFtcGxlLWRhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVfX3RleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfc2l6ZS1zIGV4YW1wbGUtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdEFudGktc25vcmluZyByZW1lZGllcyBhbmQmbmJzcDt0ZWNobmlxdWVzXG5cdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdEJ5IG1lYXN1cmluZyBuaWdodGx5IGNoYW5nZXMgaW4geW91ciBzbm9yaW5nIGludGVuc2l0eSB3aXRoIFNub3JlTGFiLCB5b3UgY2FuIHRyeVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlmZmVyZW50IGFudGktc25vcmluZyByZW1lZGllcyBhbmQmbmJzcDt0ZWNobmlxdWVzIGFuZCBob3BlZnVsbHkgZGlzY292ZXIgb25lIHdoaWNoXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFsbHkgd29ya3MuXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtYmx1clwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjU5MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjQ1OFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgNTkwIDQ1OFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk00MjQuNjI2IDBMMzkzLjY2NCAxNzQuOTRMNjA2IDI1MS4wNzhMMzc0LjUyOSAyODMuMDZMMzQzLjU2NyA0NThMMjMxLjQ3MSAzMDIuODI1TDAgMzM0LjgwNkwxNjIuMTkzIDIwNi45MjJMNTAuMDk3NCA1MS43NDY3TDI2Mi40MzMgMTI3Ljg4NUw0MjQuNjI2IDBaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzA1OThGQVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZSBzcmM9e2Rhc2hib2FyZH0gc3JjU2V0PXtgJHtkYXNoYm9hcmR9IDF4LCAke2Rhc2hib2FyZF8yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlIGV4YW1wbGUtYXVkaW9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+V2hhdCB5b3Ugc291bmQgbGlrZTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRDcnVjaWFsbHksIFNub3JlTGFiIGFsc28gYWxsb3dzIHlvdSB0byBoZWFyIHdoYXQgeW91IHNvdW5kIGxpa2Ugc28mbmJzcDt5b3UgZG9u4oCZdFxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdCBoYXZlIHRvIHRha2UgeW91ciBwYXJ0bmVy4oCZcyB3b3JkIGZvciBpdCEgV2UgZmluZCB0aGlzIGNhbiBiZSBhIGRyYW1hdGljXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXZlbGF0aW9uIHdoaWNoIHNwdXJzIHlvdSB0byB0YWtlIGFjdGlvbi5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW1nIGhvdy13b3Jrcy1tYWluX19leGFtcGxlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1ibHVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiNTkwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiNDU4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCA1OTAgNDU4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTQyNC42MjYgMEwzOTMuNjY0IDE3NC45NEw2MDYgMjUxLjA3OEwzNzQuNTI5IDI4My4wNkwzNDMuNTY3IDQ1OEwyMzEuNDcxIDMwMi44MjVMMCAzMzQuODA2TDE2Mi4xOTMgMjA2LjkyMkw1MC4wOTc0IDUxLjc0NjdMMjYyLjQzMyAxMjcuODg1TDQyNC42MjYgMFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjNDg4RjgzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxMYXp5TG9hZEltYWdlIHNyYz17YXVkaW99IHNyY1NldD17YCR7YXVkaW99IDF4LCAke2F1ZGlvXzJ4fSAyeGB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4uL2ltYWdlcy9EZWxheS5wbmcnO1xuaW1wb3J0IGRlbGF5XzJ4IGZyb20gJy4uL2ltYWdlcy9EZWxheUAyeC5wbmcnO1xuaW1wb3J0IHNvdW5kc2NhcGUgZnJvbSAnLi4vaW1hZ2VzL1NvdW5kc2NhcGUucG5nJztcbmltcG9ydCBzb3VuZHNjYXBlXzJ4IGZyb20gJy4uL2ltYWdlcy9Tb3VuZHNjYXBlQDJ4LnBuZyc7XG5pbXBvcnQgYWxhcm0gZnJvbSAnLi4vaW1hZ2VzL0FsYXJtLnBuZyc7XG5pbXBvcnQgYWxhcm1fMnggZnJvbSAnLi4vaW1hZ2VzL0FsYXJtQDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBIb3dXb3Jrc01ha2UgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaG93LXdvcmtzLW1ha2VcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG93LXdvcmtzLW1ha2VfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1tYWtlX19pbmZvXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZS1tIGhvdy13b3Jrcy1tYWtlX190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRNYWtlIHVzZSBvZiBvdXIgc291bmRzY2FwZXMgYW5kJm5ic3A7YWxhcm0gY2xvY2tcblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0U25vcmVMYWIgaXMgYW4gYXBwIHRoYXQgcmVjb3JkcyB5b3VyIHNub3JpbmcsIGdpdmluZyB5b3XCoG9iamVjdGl2ZSBkYXRhIHRvIGhlbHAgZmluZCB0aGVcblx0XHRcdFx0XHRcdFx0c29sdXRpb25zIHRoYXQgd29yayBmb3IgeW91LiA8YnIgLz5UaGlzIGlzIG91ciBjb25jaXNlIGd1aWRlIHRvIGdldHRpbmcgc3RhcnRlZCB3aXRoXG5cdFx0XHRcdFx0XHRcdFNub3JlTGFi4oCmXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlIGV4YW1wbGUtZGVsYXlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+U2V0IGEgZGVsYXk8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0QmVmb3JlIHN0YXJ0aW5nIHlvdXIgc2Vzc2lvbiwgY29uc2lkZXIgc2V0dGluZyBhJm5ic3A7ZGVsYXkuIFRoaXMgbWVhbnMgdGhhdFxuXHRcdFx0XHRcdFx0XHRcdFx0U25vcmVMYWIgd29u4oCZdCByZWNvcmQgdGhlJm5ic3A7bm9pc2VzIHlvdSBtYWtlIGJlZm9yZSB5b3UmbmJzcDtmaW5hbGx5IGdldCB0byBzbGVlcC5cblx0XHRcdFx0XHRcdFx0XHRcdFRoaXMgaXMgZG9uZSBieSBwcmVzc2luZyB0aGUgVGltZSB0byBTbGVlcCBidXR0b24gb24gdGhlIFN0YXJ0IHNjcmVlbi5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW1nIGhvdy13b3Jrcy1tYWluX19leGFtcGxlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxMYXp5TG9hZEltYWdlIHNyYz17ZGVsYXl9IHNyY1NldD17YCR7ZGVsYXl9IDF4LCAke2RlbGF5XzJ4fSAyeGB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1zb3VuZHNjYXBlXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPkNob29zZSBhJm5ic3A7c291bmRzY2FwZTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRIZXJlLCB5b3UgY2FuIGFsc28gY2hvb3NlIGEmbmJzcDtyZWxheGluZyBzb3VuZHNjYXBlIHRvIGhlbHAgeW91Jm5ic3A7ZHJpZnQgb2ZmLlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhpcyB3aWxsIGN1dCBvZmYgb25jZSBTbm9yZUxhYiBzdGFydHMgcmVjb3JkaW5nLlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17c291bmRzY2FwZX1cblx0XHRcdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7c291bmRzY2FwZX0gMXgsICR7c291bmRzY2FwZV8yeH0gMnhgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlIGV4YW1wbGUtYWxhcm1cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+U2V0IFNub3JlTGFi4oCZcyBhbGFybSBjbG9jazwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRCeSBzZXR0aW5nIFNub3JlTGFi4oCZcyBhbGFybSBjbG9jaywgeW91ciBzZXNzaW9uIHdpbGwgYXV0b21hdGljYWxseSBzdG9wIGF0IHRoaXNcblx0XHRcdFx0XHRcdFx0XHRcdGNob3NlbiB0aW1lLiBPdXIgc2VsZWN0aW9uIG9mIHNvdW5kcyBzbG93bHkgZmFkZSBpbiB0byBnZW50bHkgd2FrZSB5b3UgdXAuXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZSBzcmM9e2FsYXJtfSBzcmNTZXQ9e2Ake2FsYXJtfSAxeCwgJHthbGFybV8yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCBtb2NrdXAgZnJvbSAnLi4vaW1hZ2VzL01vY2t1cC5wbmcnO1xuaW1wb3J0IG1vY2t1cF8yeCBmcm9tICcuLi9pbWFnZXMvTW9ja3VwQDJ4LnBuZyc7XG5pbXBvcnQgYmVkX3RpbWUgZnJvbSAnLi4vaW1hZ2VzL1RpbWUtdG8tYmVkLnBuZyc7XG5pbXBvcnQgYmVkX3RpbWVfMnggZnJvbSAnLi4vaW1hZ2VzL1RpbWUtdG8tYmVkQDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBIb3dXb3Jrc05vdGVzID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvdy13b3Jrcy1ub3Rlc1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3Mtbm90ZXNfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1ub3Rlc19faW5mb1wiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUtbSBob3ctd29ya3Mtbm90ZXNfX3RpdGxlXCI+QWRkIG5vdGVzIGFuZCBsb29rIGF0IHlvdXIgdHJlbmRzPC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1ub3RlXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPk1ha2UgYSBub3RlPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdElmIHRoZXJl4oCZcyBhbnl0aGluZyB0aGF0IHlvdSB0aGluayBtaWdodCBiZSByZWxhdGVkIHRvJm5ic3A7eW91ciBzbm9yaW5nIOKAlCBtYWtlIGFcblx0XHRcdFx0XHRcdFx0XHRcdG5vdGUgb2YgaXQuIFBlcmhhcHMgeW91Jm5ic3A7d29rZSB1cCB3aXRoIGEmbmJzcDtkcnkmbmJzcDttb3V0aCxcblx0XHRcdFx0XHRcdFx0XHRcdG9yJm5ic3A7aGFkJm5ic3A7dG8mbmJzcDt1c2UmbmJzcDt0aGUmbmJzcDtiYXRocm9vbSBzZXZlcmFsIHRpbWVzPyBTbm9yaW5nIGlzXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGljYXRlZCBzbyBnZXR0aW5nIHRvIHRoZSByb290IG9mIGl0IG5lZWRzIGFzJm5ic3A7bXVjaCBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZS5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW1nIGhvdy13b3Jrcy1tYWluX19leGFtcGxlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1ibHVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiNTkwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiNDU4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCA1OTAgNDU4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTQyNC42MjYgMEwzOTMuNjY0IDE3NC45NEw2MDYgMjUxLjA3OEwzNzQuNTI5IDI4My4wNkwzNDMuNTY3IDQ1OEwyMzEuNDcxIDMwMi44MjVMMCAzMzQuODA2TDE2Mi4xOTMgMjA2LjkyMkw1MC4wOTc0IDUxLjc0NjdMMjYyLjQzMyAxMjcuODg1TDQyNC42MjYgMFpcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMDU5OEZBXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxMYXp5TG9hZEltYWdlIHNyYz17bW9ja3VwfSBzcmNTZXQ9e2Ake21vY2t1cH0gMXgsICR7bW9ja3VwXzJ4fSAyeGB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS10cmVuZHNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+VGhlIHRyZW5kczwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRZb3UgY2FuIGFsc28gZWRpdCBmYWN0b3JzIHN1Y2ggYXMgeW91ciB3ZWlnaHQgKGEgaHVnZWx5IGltcG9ydGFudCBpbmZsdWVuY2Ugb25cblx0XHRcdFx0XHRcdFx0XHRcdHNub3JpbmcpIGFuZCBhbnkgb2YgdGhlIHJlbWVkaWVzIGFuZCBmYWN0b3JzLiBUaGUmbmJzcDtUcmVuZHMgdmlldyBzdW1tYXJpc2VzIGFsbCBvZlxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcyBpbmZvcm1hdGlvbi4gSGVyZSwgeW91Jm5ic3A7Y2FuIHNlZSB3aGF0IGltcGFjdCB5b3VyIHNlbGVjdGVkIHJlbWVkaWVzIGFuZFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFjdG9ycyBhcmUmbmJzcDtoYXZpbmcg4oCUIGEgdmFsdWFibGUgdG9vbCB3aGVuIHRyeWluZyB0byBmaW5kIHRoZSBiZXN0IHNub3Jpbmdcblx0XHRcdFx0XHRcdFx0XHRcdHNvbHV0aW9ucyBmb3IgeW91LlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWJsdXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1OTBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI0NThcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDU5MCA0NThcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNDI0LjYyNiAwTDM5My42NjQgMTc0Ljk0TDYwNiAyNTEuMDc4TDM3NC41MjkgMjgzLjA2TDM0My41NjcgNDU4TDIzMS40NzEgMzAyLjgyNUwwIDMzNC44MDZMMTYyLjE5MyAyMDYuOTIyTDUwLjA5NzQgNTEuNzQ2N0wyNjIuNDMzIDEyNy44ODVMNDI0LjYyNiAwWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiM0ODhGODNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Ugc3JjPXtiZWRfdGltZX0gc3JjU2V0PXtgJHtiZWRfdGltZX0gMXgsICR7YmVkX3RpbWVfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgc2NvcmUgZnJvbSAnLi4vaW1hZ2VzL1Njb3JlLnBuZyc7XG5pbXBvcnQgc2NvcmVfMnggZnJvbSAnLi4vaW1hZ2VzL1Njb3JlQDJ4LnBuZyc7XG5pbXBvcnQgbV9zY29yZSBmcm9tICcuLi9pbWFnZXMvbS1TY29yZS5wbmcnO1xuaW1wb3J0IG1fc2NvcmVfMnggZnJvbSAnLi4vaW1hZ2VzL20tU2NvcmVAMngucG5nJztcbmltcG9ydCBhdWRpbyBmcm9tICcuLi9pbWFnZXMvQXVkaW8tMS5wbmcnO1xuaW1wb3J0IGF1ZGlvXzJ4IGZyb20gJy4uL2ltYWdlcy9BdWRpby0xQDJ4LnBuZyc7XG5pbXBvcnQgbV9hdWRpbyBmcm9tICcuLi9pbWFnZXMvbS1BdWRpby0xLnBuZyc7XG5pbXBvcnQgbV9hdWRpb18yeCBmcm9tICcuLi9pbWFnZXMvbS1BdWRpby0xQDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBIb3dXb3Jrc1NlZSA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJob3ctd29ya3Mtc2VlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1zZWVfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1zZWVfX2luZm9cIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9mYWRlLW0gaG93LXdvcmtzLXNlZV9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0U2VlIHlvdXIgcmVzdWx0cyBhbmQgbGlzdGVuIHRvIHlvdXIgc291bmRzXG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PHA+Tm93IHRvIGFzc2VzcyB0aGUgZGFtYWdlITwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1zY29yZVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVfX3RleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfc2l6ZS1zIGV4YW1wbGUtdGl0bGVcIj5Tbm9yZSBzY29yZTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRTbm9yZUxhYiBnaXZlcyB5b3UgYSBTbm9yZSBTY29yZTogb3VyIHVuaXF1ZSBtZWFzdXJlbWVudCBvZiZuYnNwO3Nub3JpbmcgaW50ZW5zaXR5LlxuXHRcdFx0XHRcdFx0XHRcdFx0V2UgYWxzbyBnaXZlIHlvdSZuYnNwO2EgYnJlYWtkb3duIG9mIGhvdyBsb25nIHlvdSZuYnNwO3dlcmUgc25vcmluZyBhbmQmbmJzcDthdCB3aGF0XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXZlbHMg4oCUIHF1aWV0LCBsaWdodCwgbG91ZCBhbmQgZXBpYyFcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW1nIGhvdy13b3Jrcy1tYWluX19leGFtcGxlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxMYXp5TG9hZEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Njb3JlfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtzY29yZX0gMXgsICR7c2NvcmVfMnh9IDJ4YH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1sZy1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bV9zY29yZX1cblx0XHRcdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7bV9zY29yZX0gMXgsICR7bV9zY29yZV8yeH0gMnhgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlIGV4YW1wbGUtbGlzdGVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0TGlzdGVuIHRvIHRoZSBzb3VuZHMgeW91Jm5ic3A7bWFrZSBmb3IgeW91cnNlbGZcblx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0QnV0IGRvbuKAmXQgdGFrZSBvdXIgd29yZCBmb3IgaXQg4oCUIGJ5IHRhcHBpbmcgb24gdGhlIGNoYXJ0LCB5b3UmbmJzcDtjYW4mbmJzcDtsaXN0ZW5cblx0XHRcdFx0XHRcdFx0XHRcdHRvIHRoZSBzb3VuZHMgeW91Jm5ic3A7bWFrZSBmb3IgeW91cnNlbGYuIFVzZSZuYnNwO3RoZSZuYnNwO2NvbnRyb2wgcGFuZWwgdG8gc2Nyb2xsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdWdoIHlvdXIgcmVjb3JkaW5ncywgb3IgZHJhZyB0aGUmbmJzcDtibHVlIGRvdCB0byB0aGUgcG9pbnQgb24gdGhlIGNoYXJ0IHlvdVxuXHRcdFx0XHRcdFx0XHRcdFx0d2FudCB0byBsaXN0ZW4gdG8uJm5ic3A7U25vcmVMYWLigJlzIGRlZmF1bHQgaXMgdG8gc2F2ZSAyMCZuYnNwO2F1ZGlvIHNhbXBsZXMgcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRuaWdodCwgYnV0Jm5ic3A7eW91IGNhbiBvcHQgdG8gbGlzdGVuIHRvIGF1ZGlvIGZvciB0aGUgZW50aXJlIG5pZ2h0IHdpdGhcblx0XHRcdFx0XHRcdFx0XHRcdEZ1bGwmbmJzcDtOaWdodCBSZWNvcmRpbmcuXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthdWRpb31cblx0XHRcdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7YXVkaW99IDF4LCAke2F1ZGlvXzJ4fSAyeGB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e21fYXVkaW99XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake21fYXVkaW99IDF4LCAke21fYXVkaW9fMnh9IDJ4YH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgZmFjdG9ycyBmcm9tICcuLi9pbWFnZXMvRmFjdG9ycy5wbmcnO1xuaW1wb3J0IGZhY3RvcnNfMnggZnJvbSAnLi4vaW1hZ2VzL0ZhY3RvcnNAMngucG5nJztcbmltcG9ydCBjcmVhdGVSZW1lZGllcyBmcm9tICcuLi9pbWFnZXMvQ3JlYXRlLVJlbWVkaWVzLnBuZyc7XG5pbXBvcnQgY3JlYXRlUmVtZWRpZXNfMnggZnJvbSAnLi4vaW1hZ2VzL0NyZWF0ZS1SZW1lZGllc0AyeC5wbmcnO1xuXG5leHBvcnQgY29uc3QgSG93V29ya3NTZWxlY3QgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaG93LXdvcmtzLXNlbGVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3Mtc2VsZWN0X193cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3Mtc2VsZWN0X19pbmZvXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZS1tIGhvdy13b3Jrcy1zZWxlY3RfX3RpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFNlbGVjdCByZWxldmFudCByZW1lZGllcyBhbmQmbmJzcDtmYWN0b3JzXG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdERvIHlvdSBoYXZlIGEgYmxvY2tlZCBub3NlPyBEaWQmbmJzcDt5b3XCoHNob3dlciBiZWZvcmUgYmVkPyBBcmUmbmJzcDt5b3UmbmJzcDt0cnlpbmcgYW55XG5cdFx0XHRcdFx0XHRcdHNwZWNpZmljIHJlbWVkaWVzIHRvwqBoZWxwIHlvdXIgc25vcmluZz9cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1mYWN0b3JzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPkZhY3RvcnMgYW5kJm5ic3A7cmVtZWRpZXM8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0SXTigJlzIGEgZ3JlYXQgaWRlYSB0byBrZWVwIHRyYWNrIG9mJm5ic3A7YWxsJm5ic3A7b2YgdGhlc2UgZmFjdG9ycyBhbmQgcmVtZWRpZXMgaW5cblx0XHRcdFx0XHRcdFx0XHRcdFNub3JlTGFiLiBUaGlzIGNhbiBoZWxwIHlvdSZuYnNwO2lkZW50aWZ5IHRoZSB0aGluZ3MgdGhhdCB0cmlnZ2VyIHlvdXIgc25vcmluZyBhbmRcblx0XHRcdFx0XHRcdFx0XHRcdHdoYXQgbWVhc3VyZXMgaGVscCB5b3UgdG8gc25vcmUgbGVzcy5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW1nIGhvdy13b3Jrcy1tYWluX19leGFtcGxlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxMYXp5TG9hZEltYWdlIHNyYz17ZmFjdG9yc30gc3JjU2V0PXtgJHtmYWN0b3JzfSAxeCwgJHtmYWN0b3JzXzJ4fSAyeGB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1jcmVhdGVcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRDcmVhdGUgeW91ciBvd24gcmVtZWRpZXMgYW5kJm5ic3A7ZmFjdG9yc1xuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRJZiB5b3UgZG9u4oCZdCBzZWUgdGhlIGFwcHJvcHJpYXRlIHJlbWVkeSBvciBmYWN0b3IsIHJlbWVtYmVyLCB5b3XCoGNhbsKgY3JlYXRlIHlvdXJcblx0XHRcdFx0XHRcdFx0XHRcdG93biEgU2ltcGx5IHRhcCB0aGUgQ3JlYXRlIE5ldyBidXR0b24gdG/CoG1ha2UgY3VzdG9tIHJlbWVkaWVzIGFuZCBmYWN0b3JzLlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17Y3JlYXRlUmVtZWRpZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake2NyZWF0ZVJlbWVkaWVzfSAxeCwgJHtjcmVhdGVSZW1lZGllc18yeH0gMnhgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCByZWNvcmQgZnJvbSAnLi4vaW1hZ2VzL1JlY29yZC5wbmcnO1xuaW1wb3J0IHJlY29yZF8yeCBmcm9tICcuLi9pbWFnZXMvUmVjb3JkQDJ4LnBuZyc7XG5pbXBvcnQgcGF1c2UgZnJvbSAnLi4vaW1hZ2VzL1BhdXNlLnBuZyc7XG5pbXBvcnQgcGF1c2VfMnggZnJvbSAnLi4vaW1hZ2VzL1BhdXNlQDJ4LnBuZyc7XG5pbXBvcnQgc2xpZGVfYnRuIGZyb20gJy4uL2ltYWdlcy9TbGlkZS1idG4ucG5nJztcbmltcG9ydCBzbGlkZV9idG5fMnggZnJvbSAnLi4vaW1hZ2VzL1NsaWRlLWJ0bkAyeC5wbmcnO1xuaW1wb3J0IG1fc2xpZGVfYnRuIGZyb20gJy4uL2ltYWdlcy9tLVNsaWRlLWJ0bi5wbmcnO1xuaW1wb3J0IG1fc2xpZGVfYnRuXzJ4IGZyb20gJy4uL2ltYWdlcy9tLVNsaWRlLWJ0bkAyeC5wbmcnO1xuaW1wb3J0IHJhdGluZyBmcm9tICcuLi9pbWFnZXMvUmF0aW5nLTEucG5nJztcbmltcG9ydCByYXRpbmdfMnggZnJvbSAnLi4vaW1hZ2VzL1JhdGluZy0xQDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBIb3dXb3Jrc1NsZWVwID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvdy13b3Jrcy1zbGVlcFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3ctd29ya3Mtc2xlZXBfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrcy1zbGVlcF9faW5mb1wiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUtbSBob3ctd29ya3Mtc2xlZXBfX3RpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdEdvIHRvIHNsZWVwIGFuZCBsZXQgU25vcmVMYWIgZG8mbmJzcDtpdHMmbmJzcDt0aGluZ1xuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUgZXhhbXBsZS1yZWNvcmRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci0xIG9yZGVyLXhsLTAgZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U25vcmVMYWIgd2lsbCBsaXN0ZW4gdG8mbmJzcDt5b3UmbmJzcDtzbm9yZVxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRXZcKgdXNlwqBzb3BoaXN0aWNhdGVkIHNub3JlIGRldGVjdGlvbiBhbGdvcml0aG1zIHRvIGNhbGN1bGF0ZSB5b3VyIHNjb3JlcyBhbmQgZ2l2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0eW91Jm5ic3A7YSBwaWN0dXJlIG9mIHdoYXQgeW91Jm5ic3A7c291bmQgbGlrZS5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLTAgb3JkZXIteGwtMSBleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZSBzcmM9e3JlY29yZH0gc3JjU2V0PXtgJHtyZWNvcmR9IDF4LCAke3JlY29yZF8yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci0xIG9yZGVyLWxnLTAgZXhhbXBsZSBleGFtcGxlLXBhdXNlXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgZXhhbXBsZS10aXRsZVwiPlBhdXNlPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFJlbWVtYmVyLCB5b3UgY2FuIHBhdXNlIHRoZSZuYnNwO21vbml0b3JpbmcgaWbCoHlvdVxuXHRcdFx0XHRcdFx0XHRcdFx0Z2V0Jm5ic3A7dXAmbmJzcDtpbiZuYnNwO3RoZcKgbWlkZGxlIG9mwqB0aGXCoG5pZ2h0LlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Ugc3JjPXtwYXVzZX0gc3JjU2V0PXtgJHtwYXVzZX0gMXgsICR7cGF1c2VfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZSBleGFtcGxlLXN0b3BcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtzbGlkZV9idG59XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake3NsaWRlX2J0bn0gMXgsICR7c2xpZGVfYnRuXzJ4fSAyeGB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bV9zbGlkZV9idG59XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake21fc2xpZGVfYnRufSAxeCwgJHttX3NsaWRlX2J0bl8yeH0gMnhgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+U3RvcCB0aGUgc2Vzc2lvbjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRJbiB0aGUgbW9ybmluZywgd2hlbiB5b3UgYXJlIHJlYWR5IHRvIGVuZCB5b3VyIHNlc3Npb24sIHVzZSB0aGUgU2xpZGUgYnV0dG9uIHRvIHN0b3Bcblx0XHRcdFx0XHRcdFx0XHRcdHRoZSBzZXNzaW9uLlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3JkZXItMSBvcmRlci1sZy0wIGV4YW1wbGUgZXhhbXBsZS1yYXRpbmdcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+UmVzdCByYXRpbmc8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0WW91IGNhbiB0aGVuIHJlZ2lzdGVyIHlvdXIgUmVzdCBSYXRpbmcg4oCUIGEgZ3JlYXQgd2F5IG9mIHRyYWNraW5nIGhvdyB5b3VyIHNub3Jpbmdcblx0XHRcdFx0XHRcdFx0XHRcdGFmZmVjdHMgeW91ciBzbGVlcCBxdWFsaXR5LlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Ugc3JjPXtyYXRpbmd9IHNyY1NldD17YCR7cmF0aW5nfSAxeCwgJHtyYXRpbmdfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRkYXRhLXN2Zz1cImRlY29yYXRpdmVcIlxuXHRcdFx0XHRcdHdpZHRoPVwiNTAzXCJcblx0XHRcdFx0XHRoZWlnaHQ9XCI4NzhcIlxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgNTAzIDg3OFwiXG5cdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdGQ9XCJNNDYyIDBMNTcwLjg4OSAzMzUuMTI3SDkyMy4yNjJMNjM4LjE4NyA1NDIuMjQ2TDc0Ny4wNzYgODc3LjM3M0w0NjIgNjcwLjI1NEwxNzYuOTI0IDg3Ny4zNzNMMjg1LjgxMyA1NDIuMjQ2TDAuNzM3NTc5IDMzNS4xMjdIMzUzLjExMUw0NjIgMFpcIlxuXHRcdFx0XHRcdFx0ZmlsbD1cIiMxN0EyRkZcIlxuXHRcdFx0XHRcdFx0ZmlsbE9wYWNpdHk9XCIwLjRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IHN0YXJ0IGZyb20gJy4uL2ltYWdlcy9TdGFydC5wbmcnO1xuaW1wb3J0IHN0YXJ0XzJ4IGZyb20gJy4uL2ltYWdlcy9TdGFydEAyeC5wbmcnO1xuaW1wb3J0IHBsYWNlbWVudCBmcm9tICcuLi9pbWFnZXMvUGxhY2VtZW50LnBuZyc7XG5pbXBvcnQgcGxhY2VtZW50XzJ4IGZyb20gJy4uL2ltYWdlcy9QbGFjZW1lbnRAMngucG5nJztcbmltcG9ydCBtX3N0YXJ0IGZyb20gJy4uL2ltYWdlcy9tLVN0YXJ0LnBuZyc7XG5pbXBvcnQgbV9zdGFydF8yeCBmcm9tICcuLi9pbWFnZXMvbS1TdGFydEAyeC5wbmcnO1xuXG5leHBvcnQgY29uc3QgSG93V29ya3NTdGFydCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJob3ctd29ya3Mtc3RhcnRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG93LXdvcmtzLXN0YXJ0X193cmFwcGVyXCI+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRkYXRhLXN2Zz1cImRlY29yYXRpdmVcIlxuXHRcdFx0XHRcdHdpZHRoPVwiNTc2XCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIxMzE0XCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDU3NiAxMzE0XCJcblx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0ZD1cIk01OTQuMzcyIDAuNzQ5OTdMODE3LjEyMSA0NTguODI3TDEzMjEuNjEgMzg4LjUzNEw5NTQuNzg3IDc0MS45MzVMMTE3Ny41NCAxMjAwLjAxTDcyOC4wNzcgOTYwLjM0OEwzNjEuMjUzIDEzMTMuNzVMNDUwLjI5NiA4MTIuMjI4TDAuODM3NjEzIDU3Mi41NjRMNTA1LjMyOCA1MDIuMjcxTDU5NC4zNzIgMC43NDk5N1pcIlxuXHRcdFx0XHRcdFx0ZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcl81MzdfMTEzMClcIlxuXHRcdFx0XHRcdFx0ZmlsbE9wYWNpdHk9XCIwLjdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRlZnM+XG5cdFx0XHRcdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYWludDBfbGluZWFyXzUzN18xMTMwXCJcblx0XHRcdFx0XHRcdFx0eDE9XCI3MDMuMDE4XCJcblx0XHRcdFx0XHRcdFx0eTE9XCI2MzEuMzM1XCJcblx0XHRcdFx0XHRcdFx0eDI9XCIxMDIuNTM0XCJcblx0XHRcdFx0XHRcdFx0eTI9XCI0NjYuMTNcIlxuXHRcdFx0XHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wQ29sb3I9XCIjMUYxMkQzXCIgLz5cblx0XHRcdFx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzRkFGREVcIiAvPlxuXHRcdFx0XHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG93LXdvcmtzLXN0YXJ0X19pbmZvXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZS1tIGhvdy13b3Jrcy1zdGFydF9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0UHJlc3MgU3RhcnQgYW5kIHBsYWNlIHRoZSZuYnNwO3Bob25lwqBkb3duXG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZSBleGFtcGxlLXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbGctMSBleGFtcGxlLWltZyBob3ctd29ya3MtbWFpbl9fZXhhbXBsZS1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtYmx1clwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjczN1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjYzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgNzM3IDYzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk01MTYuNDE4IDBMNDc4Ljc2MyAyNDAuNjM5TDczNyAzNDUuMzdMNDU1LjQ5MSAzODkuMzYxTDQxNy44MzYgNjMwTDI4MS41MDkgNDE2LjU1TDAgNDYwLjU0MUwxOTcuMjU0IDI4NC42M0w2MC45MjcxIDcxLjE4TDMxOS4xNjQgMTc1LjkxMUw1MTYuNDE4IDBaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzA1OThGQVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3N0YXJ0fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtzdGFydH0gMXgsICR7c3RhcnRfMnh9IDJ4YH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8TGF6eUxvYWRJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1sZy1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bV9zdGFydH1cblx0XHRcdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7bV9zdGFydH0gMXgsICR7bV9zdGFydF8yeH0gMnhgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci1sZy0wIGV4YW1wbGVfX3RleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfc2l6ZS1zIGV4YW1wbGUtdGl0bGVcIj5TdGFydDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRPbmNlIHlvdeKAmXJlIHJlYWR5LCBwcmVzcyB0aGUgU3RhcnQgYnV0dG9uIGFuZCBwdXQgeW91ciBwaG9uZSBmYWNlLWRvd24gbmVhciB0byB5b3VyXG5cdFx0XHRcdFx0XHRcdFx0XHRiZWQuIFdlJm5ic3A7cmVjb21tZW5kIGhhdmluZyB5b3VyIHBob25lIGFib3V0IGFuIGFybeKAmXMgbGVuZ3RoIGF3YXkgZnJvbSB5b3VyIGZhY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHdpdGggdGhlJm5ic3A7ZGV2aWNl4oCZcyBtaWNyb3Bob25lcyBmYWNpbmcgdG93YXJkcyB5b3UuXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlIGV4YW1wbGUtcGxhY2VtZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbGctMSBleGFtcGxlX190ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtcyBleGFtcGxlLXRpdGxlXCI+UGxhY2VtZW50PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdEhhdmluZyB0aGUgcGhvbmUgZmFjZS1kb3duIGlzbuKAmXQgdml0YWwg4oCUIHRoaXMgc2ltcGx5IGFsbG93cyB5b3UmbmJzcDt0byBrZWVwIHRoZVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGV2aWNlIHVubG9ja2VkIHdoaWxzdCBtYWtpbmcgdXNlJm5ic3A7b2YmbmJzcDt0aGUmbmJzcDtwaG9uZeKAmXMgcHJveGltaXR5IHNlbnNvciB0b1xuXHRcdFx0XHRcdFx0XHRcdFx0dHVybiBvZmYgdGhlIHNjcmVlbi4gVGhpcyBtZWFucyB0aGF0IGlmIHlvdSB3YW50IHRvIGNoZWNrIHlvdXIgcGhvbmUgZHVyaW5nXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGUmbmJzcDtuaWdodCwgdGhlcmUgYXJlbuKAmXQgYW55IGFubm95aW5nIHVubG9ja2luZyBwcm9jZWR1cmVzXG5cdFx0XHRcdFx0XHRcdFx0XHR0byZuYnNwO2dvJm5ic3A7dGhyb3VnaC5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWxnLTAgZXhhbXBsZS1pbWcgaG93LXdvcmtzLW1haW5fX2V4YW1wbGUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWJsdXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCI3MzdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI1NTZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDczNyA1NTZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNTE2LjQxOCAwTDQ3OC43NjMgMjQwLjYzOUw3MzcgMzQ1LjM3TDQ1NS40OTEgMzg5LjM2MUw0MTcuODM2IDYzMEwyODEuNTA5IDQxNi41NUwwIDQ2MC41NDFMMTk3LjI1NCAyODQuNjNMNjAuOTI3MSA3MS4xOEwzMTkuMTY0IDE3NS45MTFMNTE2LjQxOCAwWlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiM0M0NCODNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PExhenlMb2FkSW1hZ2Ugc3JjPXtwbGFjZW1lbnR9IHNyY1NldD17YCR7cGxhY2VtZW50fSAxeCwgJHtwbGFjZW1lbnRfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgSW5zaWdodFNlY3Rpb24gfSBmcm9tICcuL0luc2lnaHRTZWN0aW9uJztcbmltcG9ydCBpbnNpZ2h0XzMgZnJvbSAnLi4vaW1hZ2VzL2luc2lnaHQtaW1nLTMucG5nJztcbmltcG9ydCBpbnNpZ2h0XzNfMnggZnJvbSAnLi4vaW1hZ2VzL2luc2lnaHQtaW1nLTNAMngucG5nJztcbmltcG9ydCBpbnNpZ2h0XzQgZnJvbSAnLi4vaW1hZ2VzL2luc2lnaHQtaW1nLTQucG5nJztcbmltcG9ydCBpbnNpZ2h0XzRfMnggZnJvbSAnLi4vaW1hZ2VzL2luc2lnaHQtaW1nLTRAMngucG5nJztcbmltcG9ydCBtX2luc2lnaHRfMyBmcm9tICcuLi9pbWFnZXMvbV9pbnNpZ2h0LWltZy0zLnBuZyc7XG5pbXBvcnQgbV9pbnNpZ2h0XzNfMnggZnJvbSAnLi4vaW1hZ2VzL21faW5zaWdodC1pbWctM0AyeC5wbmcnO1xuaW1wb3J0IG1faW5zaWdodF80IGZyb20gJy4uL2ltYWdlcy9tX2luc2lnaHQtaW1nLTQucG5nJztcbmltcG9ydCBtX2luc2lnaHRfNF8yeCBmcm9tICcuLi9pbWFnZXMvbV9pbnNpZ2h0LWltZy00QDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBJbnNpZ2h0QWR2aWNlID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNpZ2h0U2VjdGlvbiBjbGFzc05hbWU9XCJpbnNpZ2h0LWFkdmljZVwiIHRpdGxlPXsnMS4gU2xlZXAgb24geW91ciBzaWRlJ30gbWFyZ2luQm90dG9tPXs1NX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHQtbm90ZSBpbnNpZ2h0LW5vdGVfbGVmdC1zdGlja1wiPlxuXHRcdFx0XHQ8cD5PbmUgb2YgdGhlIHNpbXBsZXN0IHdheXMgdG8gY29tYmF0IHlvdXIgc25vcmluZyBpcyB0byBtYWtlIHN1cmUgeW91IHNsZWVwIG9uIHlvdXIgc2lkZS48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC10ZXh0XCI+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFNsZWVwaW5nIG9uIHlvdXIgYmFjayBtYWtlcyB5b3UgZmFyIG1vcmUgbGlrZWx5IHRvIHNub3JlIG9yJm5ic3A7ZXhwZXJpZW5jZSBzbGVlcCBhcG5lYTsgaGVyZSwgeW91clxuXHRcdFx0XHRcdGphdyByZWNlZGVzLCB5b3VyIHRvbmd1ZSBmYWxscyBiYWNrLCBhbmQgd2VpZ2h0IG9uIHlvdXIgbmVjayBjb21wcmVzc2VzIHlvdXIgdXBwZXIgYWlyd2F5LlxuXHRcdFx0XHRcdEFsbCZuYnNwO29mJm5ic3A7dGhlc2UgZGlzdHVyYiBhaXJmbG93IGFuZCBjYXVzZSB2aWJyYXRpb24gWzFdLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImluc2lnaHQtdGV4dF9fbGlzdC10aXRsZVwiPlxuXHRcdFx0XHRcdFRoZXJlIGFyZSBzZXZlcmFsIHdheXMgdG8gZ2V0IHlvdXJzZWxmIHNsZWVwaW5nIG9uIHlvdXIgc2lkZTpcblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5zaWdodC10ZXh0X19saXN0XCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImluc2lnaHQtdGV4dF9fbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRVc2UgcGlsbG93cyBlZmZlY3RpdmVseS4gWW91IGNhbiBidXkgc3BlY2lhbGlzdCBwaWxsb3dzIHRoYXQgcHJvbW90ZSBzaWRlIHNsZWVwaW5nIG9yIHlvdSBjYW5cblx0XHRcdFx0XHRcdHVzZSBub3JtYWwgcGlsbG93cyB0byBwcm9wIHlvdXJzZWxmIHVwJm5ic3A7dG8mbmJzcDtwcmV2ZW50IHlvdSByb2xsaW5nIG9udG8geW91ciBiYWNrLlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImluc2lnaHQtdGV4dF9fbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRNYWtlIGJhY2sgc2xlZXBpbmcgZGlmZmljdWx0LiBUaGUgd2VsbC1rbm93biBtZXRob2QgYW1vbmdzdCBtYW55IGJhY2stc2xlZXBpbmcgc25vcmVycyBpcyB0b3snICd9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtcIj5cblx0XHRcdFx0XHRcdFx0dGFwZSZuYnNwO2EmbmJzcDt0ZW5uaXMmbmJzcDtiYWxsXG5cdFx0XHRcdFx0XHQ8L2E+eycgJ31cblx0XHRcdFx0XHRcdHRvIHRoZSBiYWNrIG9mJm5ic3A7eW91ciBwYWphbWFzIHNvIHRoYXQgc2xlZXBpbmcgb24geW91ciBiYWNrIGlzIHVuY29tZm9ydGFibGUgYW5kIHByYWN0aWNhbGx5XG5cdFx0XHRcdFx0XHRpbXBvc3NpYmxlLlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImluc2lnaHQtdGV4dF9fbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRQb3NpdGlvbmFsIHRyYWluZXJzLiBUaGVyZSBhcmUgZGV2aWNlcyB0aGF0IGRldGVjdCB3aGVuIHlvdSZuYnNwO2FyZSZuYnNwO3NsZWVwaW5nIG9uIHlvdXIgYmFja1xuXHRcdFx0XHRcdFx0YW5kIGdpdmUgYSBzbWFsbCB2aWJyYXRpb24gd2hpY2ggdGVsbHMgeW91ciBzdWJjb25zY2lvdXMgbWluZCB0aGF0IGl0IGlzIHRpbWUgdG8gdHVybiBvdmVyLlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC1pbWcgaW5zaWdodC1pbWdfd2l0aG91dC1ib3JkZXIgaW5zaWdodC1pbWdfd2l0aC1ub3RlIG0tbm90ZS1oaWRkZW5cIj5cblx0XHRcdFx0PGltZyBkYXRhLWltZz1cImRlc2t0b3BcIiBzcmM9e2luc2lnaHRfM30gc3JjU2V0PXtgJHtpbnNpZ2h0XzN9IDF4LCAke2luc2lnaHRfM18yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHQ8aW1nIGRhdGEtaW1nPVwibW9iaWxlXCIgc3JjPXttX2luc2lnaHRfM30gc3JjU2V0PXtgJHttX2luc2lnaHRfM30gMXgsICR7bV9pbnNpZ2h0XzNfMnh9IDJ4YH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0PHA+QWRkaXRpb25hbCBub3RlcyBtYWRlIG9uIGEgc2Vzc2lvbiB3aWxsIGFwcGVhciBpbiB0aGUgU2xlZXAgTm90ZXM8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC1pbWcgaW5zaWdodC1pbWdfd2l0aG91dC1ib3JkZXIgaW5zaWdodC1pbWdfd2l0aC1ub3RlIGluc2lnaHQtaW1nX3RleHQtbGVmdFwiPlxuXHRcdFx0XHQ8aW1nIGRhdGEtaW1nPVwiZGVza3RvcFwiIHNyYz17aW5zaWdodF80fSBzcmNTZXQ9e2Ake2luc2lnaHRfNH0gMXgsICR7aW5zaWdodF80XzJ4fSAyeGB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdDxpbWcgZGF0YS1pbWc9XCJtb2JpbGVcIiBzcmM9e21faW5zaWdodF80fSBzcmNTZXQ9e2Ake21faW5zaWdodF80fSAxeCwgJHttX2luc2lnaHRfNF8yeH0gMnhgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRJbmNvbnNpc3RlbnQgc25vcmluZyBwYXR0ZXJucyB3aXRoIG9idmlvdXMgcGF1c2VzIGNvdWxkIGluZGljYXRlIHJpc2t5IGJyZWF0aGluZyBwZXJpb2RzLiBUaGlzIHdhc1xuXHRcdFx0XHRcdGdpdmVuIHRvJm5ic3A7dXMmbmJzcDtieSZuYnNwO2EmbmJzcDtTbm9yZUxhYiB1c2VyIHdobyB3ZW50IG9uIHRvIGdldCBhIHNsZWVwIGFwbmVhIGRpYWdub3Npcy5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHQtbm90ZSBpbnNpZ2h0LW5vdGVfYWR2aWNlXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgaW5zaWdodC1ub3RlX190aXRsZVwiPlxuXHRcdFx0XHRcdFJlYWQgU25vcmVMYWLigJlzIGZ1bGwgYXJ0aWNsZSBvbiBzcGVjaWFsaXN0IGFudGktc25vcmluZyBwaWxsb3dzXG5cdFx0XHRcdDwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC10ZXh0XCI+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRXZSBvZnRlbiBnZXQgYXNrZWQgaWYgU25vcmVMYWIgY2FuIHVzZSByZWNvcmRlZCBzbm9yaW5nIHRvJm5ic3A7ZmluZCBzbGVlcCBhcG5lYS4gSXQmbmJzcDtpc1xuXHRcdFx0XHRcdFx0aW1wb3J0YW50IHRvIG5vdGUgdGhhdCBTbm9yZUxhYiBpcyZuYnNwO25vdCBhbiBhdXRvbWF0aWMgc2xlZXAgYXBuZWEgZGV0ZWN0b3IuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0U2xlZXAgYXBuZWEgZG9lcyBvZnRlbiBoYXZlIHNvbWUgdmVyeSBkaXN0aW5jdGl2ZSBzb3VuZHMuIFdoaWxzdCBTbm9yZUxhYiBjb3VsZCBkZXRlY3QgdGhpc1xuXHRcdFx0XHRcdFx0dHlwaWNhbCBzb3VuZCBwcm9maWxlLCBhcG5lYSBldmVudHMgYXJlJm5ic3A7bm90Jm5ic3A7YWN0dWFsbHkgZGVmaW5lZCBieSBzb3VuZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRBbiBhcG5lYSBpcyBhIHBlcmlvZCBkdXJpbmcgc2xlZXAgd2hlcmUgYnJlYXRoaW5nIHN0b3BzIGFuZCZuYnNwO2lzJm5ic3A7dGhlcmVmb3JlIGlkZW50aWZpZWQgYnlcblx0XHRcdFx0XHRcdG1lYXN1cmluZyBib3RoIGJyZWF0aGluZyBlZmZvcnQgYW5kJm5ic3A7YWlyZmxvdyAob3IgbGFjayB0aGVyZW9mKS4gQSZuYnNwO2Ryb3AgaW4gYmxvb2Qgb3h5Z2VuXG5cdFx0XHRcdFx0XHRzYXR1cmF0aW9uIGFsc28gaGVscHMgdG8gY29uZmlybS4gTWVhc3VyaW5nIHRoaXMgcmVxdWlyZXMgc3BlY2lhbGlzdCBlcXVpcG1lbnQgYmV5b25kIHRoZSByZWFjaFxuXHRcdFx0XHRcdFx0b2YgYSBjb25zdW1lciBhcHAuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0SW4gU25vcmVMYWIsIHlvdSBjYW4gc2VhcmNoIHlvdXIgc2Vzc2lvbiBmb3Igcmlza3kgc291bmRzIHVzaW5nIEZ1bGwgTmlnaHQgUmVjb3JkaW5nIG1vZGUgdG9cblx0XHRcdFx0XHRcdGVuc3VyZSB0aGF0IGV2ZXJ5IHNvdW5kIGFuZCBldmVudCBpcyZuYnNwO2NhcHR1cmVkLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFNvbWUgdXNlcnMgaGF2ZSB1c2VkIHRoaXMgZmVhdHVyZSB0byBkaXNjb3ZlciBzb3VuZHMgaW4mbmJzcDt0aGVpciByZWNvcmRpbmdzIHRoYXQgc3VnZ2VzdGVkXG5cdFx0XHRcdFx0XHRhcG5lYSBldmVudHMuIFRoZXkgaGF2ZSB0aGVuIGZvdW5kIHRoZW0gdXNlZnVsIGluJm5ic3A7c3Vic2VxdWVudCBtZWRpY2FsIGNvbnN1bHRhdGlvbnMuIEZvclxuXHRcdFx0XHRcdFx0bWFueSBwZW9wbGUsIFNub3JlTGFiIGhhcyBoZWxwZWQgZmxhZyBzbGVlcCBhcG5lYSB0aGV5IHdlcmVu4oCZdCBhd2FyZSB0aGF0IHRoZXkgaGFkLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0luc2lnaHRTZWN0aW9uPlxuXHQpO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IGdvb2dsZVBsYXkgZnJvbSAnLi4vaW1hZ2VzL2dvb2dsZS1wbGF5LnN2Zyc7XG5pbXBvcnQgYXBwU3RvcmUgZnJvbSAnLi4vaW1hZ2VzL2FwcC1zdG9yZS5zdmcnO1xuXG5leHBvcnQgY29uc3QgSW5zaWdodERvd25sb2FkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImluc2lnaHQtZG93bmxvYWQtc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0LWRvd25sb2FkX193cmFwcGVyXCI+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRkYXRhLXN2Zz1cImRlY29yYXRpdmVcIlxuXHRcdFx0XHRcdHdpZHRoPVwiMTEyMlwiXG5cdFx0XHRcdFx0aGVpZ2h0PVwiNDI1XCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDExMjIgNDI1XCJcblx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0ZD1cIk03ODYuMTg5IDBMNzI4Ljg2MyAxNjIuMzM2TDExMjIgMjMyLjk4OEw2OTMuNDM0IDI2Mi42NjRMNjM2LjEwOSA0MjVMNDI4LjU2NiAyODEuMDA2TDAgMzEwLjY4M0wzMDAuMjk3IDE5Mi4wMTJMOTIuNzU0NyA0OC4wMTgzTDQ4NS44OTEgMTE4LjY3TDc4Ni4xODkgMFpcIlxuXHRcdFx0XHRcdFx0ZmlsbD1cIiMxQTI1RUZcIlxuXHRcdFx0XHRcdFx0ZmlsbE9wYWNpdHk9XCIwLjZcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC1kb3dubG9hZF9faW5mby1hcHBzXCI+XG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5zbm9yZWxhYi5hcHBcIiBjbGFzc05hbWU9XCJsaW5rIGluc2lnaHQtZG93bmxvYWRfX2luZm8tYXBwIGdvb2dsZS1wbGF5LWJ0blwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Z29vZ2xlUGxheX0gYWx0PVwiZ29vZ2xlIHBsYXlcIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvaWQ1Mjk0NDM2MDRcIiBjbGFzc05hbWU9XCJsaW5rIGluc2lnaHQtZG93bmxvYWRfX2luZm8tYXBwIGFwcC1zdG9yZS1idG5cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2FwcFN0b3JlfSBhbHQ9XCJhcHAgc3RvcmVcIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBzdGFyIGZyb20gJy4uL2ltYWdlcy9wcm9kdWN0LXN0YXIucG5nJztcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RCb3R0b20gPSAoe3Byb2R1Y3R9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdC1ib3R0b21cIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3R0b21fX2JnXCIgYWx0PVwiXCIgc3JjPXtzdGFyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvdHRvbV9fYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3R0b21fX3RpdGxlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0LmRhdGEuYWNmLmJvdHRvbV90aXRsZSxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYm90dG9tX19saW5rXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGhyZWY9e3Byb2R1Y3QuZGF0YS5hY2YuYm90dG9tX2J1dHRvbl9saW5rfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3QuZGF0YS5hY2YuYm90dG9tX2J1dHRvbl90ZXh0LFxuICAgICAgICAgIH19PjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3R0b21fX2xpbmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvdHRvbV9fc3Vic2NyaXB0XCI+XG4gICAgICAgICAgU25vcmVsYWIgb25seSBlbmRvcmVzIHByb2R1Y3RzIHRoYXQgd2UgaGF2ZSB0ZXN0ZWQgYW5kIHZlcmlmaWVkIGdpdmUgZ3JlYXQgcmVzdWx0IGZvciBvdXIgdXNlcnMuIFdlIGVhcm4gYSBzbWFsbCBjb21pc3Npb24gb24gcHVyY2hhc2VzIG1hZGUgdGhyb3VnaCBvdXIgYXBwIGFuZCB3ZWJzaXRlIHdpY2ggc3VwcG9ydHMgdGhlIGFwcCdzIGRldmVsb3BtZW50IGF0IG5vIGV4dHJhIGNvc3QgdG8geW91LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHVzZVBvc3QgZnJvbSAnLi4vaG9va3MvdXNlUG9zdCc7XG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSAnLi4vaG9va3MvdXNlRmV0Y2gnO1xuaW1wb3J0IG1vdXRocGllY2UgZnJvbSAnLi4vaW1hZ2VzL21vdXRocGllY2UucG5nJztcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RGdWxsUmV2aWV3ID0gKHtwcm9kdWN0fSkgPT4ge1xuXG4gIGNvbnN0IHBvc3QgPSB1c2VQb3N0KFxuICAgICdodHRwczovL3Nub3JlbGFiLnV4LW1pbmQucHJvL3dwLWpzb24vd3AvdjIvcG9zdHM/cGVyX3BhZ2U9MTAwJyxcbiAgICBwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfZnVsbF9yZXZpZXdfcG9zdC5wb3N0X25hbWUsXG4gICAge31cbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncG9zdCcpO1xuICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuICB9LCBbcG9zdF0pO1xuICBjb25zdCB0YWdzID0gdXNlRmV0Y2goJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9jYXRlZ29yaWVzP3Blcl9wYWdlPTEwMCcsIHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3QtZnVsbC1yZXZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1mdWxsLXJldmlld19fc3Vic2NyaXB0XCI+XG4gICAgICAgICAge3Byb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9mdWxsX3Jldmlld190aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwb3N0LmRhdGEgP1xuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e3Bvc3QuZGF0YS5saW5rfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtZnVsbC1yZXZpZXctd3JhcHBlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZnVsbC1yZXZpZXdfX2xlZnQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1mdWxsLXJldmlld19fdGFnc1wiPlxuICAgICAgICAgICAgICB7dGFncy5kYXRhID8gcG9zdC5kYXRhLmNhdGVnb3JpZXMubWFwKCh0YWcsIGksIGFycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ0RhdGEgPSB0YWdzLmRhdGEuZmluZChcbiAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSB0YWdcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0YWdEYXRhKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWdEYXRhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2luc2lnaHRzLz9jYXRlZ29yeT0nK3RhZ0RhdGEuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiB0YWdEYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICAgICAge2kgPT09IGFyci5sZW5ndGggLSAxID8gJycgOiAnICwgJ31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZnVsbC1yZXZpZXdfX3RpdGxlXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogcG9zdC5kYXRhLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZ1bGwtcmV2aWV3X19jZW50ZXItYmxvY2tcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IHBvc3QuZGF0YS5leGNlcnB0LnJlbmRlcmVkLFxuICAgICAgICAgIH19PjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWZ1bGwtcmV2aWV3X19yaWdodC1ibG9ja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtwb3N0LmRhdGEuZmltZ191cmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyYFxuICAgICAgICAgIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2E+IDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIiwiY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0SW5mbyA9ICh7cHJvZHVjdH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5mb19fdGl0bGVcIj5cbiAgICAgICAgICAgIFByb2R1Y3QgaW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5mb19fdGV4dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogcHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X2luZm9fdGV4dCxcbiAgICAgICAgICAgIH19PjwvcD5cbiAgICAgICAgICAgIHtwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfaW5mb19pdGVtcyAmJiBwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfaW5mb19pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3RfaW5mb19pdGVtX3RpdGxlID8gPGgyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpdGVtLnByb2R1Y3RfaW5mb19pdGVtX3RpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICB9fT48L2gyPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0X2luZm9faXRlbV90ZXh0ID8gPHBcbiAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGl0ZW0ucHJvZHVjdF9pbmZvX2l0ZW1fdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9wPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIiwiY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIsIHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IG1haW5faW1nIGZyb20gJy4uL2ltYWdlcy9wcm9kdWN0LW1haW4ucG5nJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdE1haW4gPSAoe3Byb2R1Y3R9KSA9PiB7XG4gIGNvbnN0IFttYWluSW1nLCBzZXRNYWluSW1nXSA9IHVzZVN0YXRlKHByb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9nYWxsZXJ5WzBdLnByb2R1Y3RfZ2FsbGVyeV9pbWFnZS51cmwpO1xuICBjb25zdCBbYWN0aXZlSW1nLCBzZXRBY3RpdmVJbWddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG51bWJlciA9IE51bWJlcihlLnRhcmdldC5pZC5zcGxpdCgnLScpLnJldmVyc2UoKVswXSk7XG4gICAgc2V0QWN0aXZlSW1nKG51bWJlcik7XG4gICAgc2V0TWFpbkltZyhwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfZ2FsbGVyeVtudW1iZXJdLnByb2R1Y3RfZ2FsbGVyeV9pbWFnZS51cmwpO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbWctYWN0aXZlJyk7XG4gIH07XG4gIGNvbnNvbGUubG9nKCdwcm9kdWN0IG1haW4nKTtcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0LW1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2RjdXQtbWFpbl9fZ2FsbGVyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kY3V0LW1haW5fX21haW4taW1hZ2Utd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZGN1dC1tYWluX19tYWluLWltYWdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7bWFpbkltZ30pIGNlbnRlciBjZW50ZXIgLyBjb3ZlcmBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZGN1dC1tYWluX19pbWFnZXNcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9nYWxsZXJ5ICYmIHByb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9nYWxsZXJ5Lm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kY3V0LW1haW5fX2ltYWdlICR7YWN0aXZlSW1nID09PSBpZHggPyAnYWN0aXZlLWltZycgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1hZ2UucHJvZHVjdF9nYWxsZXJ5X2ltYWdlLnVybH0pYCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBpZD17YHByb2R1Y3QtaW1nLSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZGN1dC1tYWluX19pbWFnZXMgaW1hZ2VzLW1vYmlsZVwiPlxuICAgICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1fVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezQuNX1cbiAgICAgICAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cbiAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfZ2FsbGVyeSAmJiBwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfZ2FsbGVyeS5tYXAoKGltYWdlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8U3dpcGVyU2xpZGUga2V5PXtpZHh9PjxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZGN1dC1tYWluX19pbWFnZSAke2FjdGl2ZUltZyA9PT0gaWR4ID8gJ2FjdGl2ZS1pbWcnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtpbWFnZS5wcm9kdWN0X2dhbGxlcnlfaW1hZ2UudXJsfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2Bwcm9kdWN0LWltZy0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgPjwvZGl2PjwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW1haW5fX2luZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluX19pY29uc1wiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3ByZXZpZXdfaWNvbnMgJiYgcHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3ByZXZpZXdfaWNvbnMubWFwKChpY29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluX19pY29uXCIgc3JjPXtpY29uLnByb2R1Y3RfcHJldmlld19pY29uLnVybH0gYWx0PVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluX19uYW1lXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3QuZGF0YS50aXRsZS5yZW5kZXJlZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW1haW5fX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF90b3BfdGV4dCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluX19pbmZvLWJvdHRvbVwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3ByaWNlID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW1haW5fX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAgJHtwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfcHJpY2V9XG4gICAgICAgICAgICAgIDwvZGl2PiA6ICcnfVxuICAgICAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X2Rpc2NvdW50X3RleHQgP1xuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluX19wcmljZS1kaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X2Rpc2NvdW50X3RleHQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PiA6ICcnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtbWFpbl9fbGlua1wiXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X2J1eV9idXR0b25fbGlua31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9idXlfYnV0dG9uX3RleHQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBtb3V0aCBmcm9tICcuLi9pbWFnZXMvbW91dGguc3ZnJztcbmltcG9ydCBsaXBzIGZyb20gJy4uL2ltYWdlcy9saXBzLnN2Zyc7XG5pbXBvcnQgcmVtZWRpZXMgZnJvbSAnLi4vaW1hZ2VzL3JlbWVkaWVzLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0UmVtZWRpZXMgPSAoe3Byb2R1Y3R9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdC1yZW1lZGllc1wiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LXJlbWVkaWVzX19iZ1wiIHNyYz17cmVtZWRpZXN9IGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcmVtZWRpZXMtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1yZW1lZGllc19fdGl0bGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3QuZGF0YS5hY2YucHJvZHVjdF9yZW1lZGllc190aXRsZSxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3JlbWVkaWVzX2ljb25zID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcmVtZWRpZXNfX2ljb25zXCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3JlbWVkaWVzX2ljb25zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJlbWVkaWVzX19jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LXJlbWVkaWVzX19saXBzXCIgc3JjPXtpdGVtLnByb2R1Y3RfcmVtZWRpZXNfaWNvbi51cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PiA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBzdGFyIGZyb20gJy4uL2ltYWdlcy9yZXZpZXctc3Rhci5zdmcnO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdFJldmlld3MgPSAoe3Byb2R1Y3R9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdC1yZXZpZXdzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcmV2aWV3cy13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJldmlld3NfX3RpdGxlXCI+XG4gICAgICAgICAgICBSZXZpZXdzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJldmlld3NfX2l0ZW1zXCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3Jldmlld3NfaXRlbXMgJiYgcHJvZHVjdC5kYXRhLmFjZi5wcm9kdWN0X3Jldmlld3NfaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJldmlld19fdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1yZXZpZXdfX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogaXRlbS5wcm9kdWN0X3Jldmlld190aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1yZXZpZXdfX3N0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoTnVtYmVyKGl0ZW0ucHJvZHVjdF9yZXZpZXdfc3RhcnMpKV0ubWFwKCh4LCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFyfSBrZXk9e2BzdGFyLSR7aX1gfSBhbHQ9XCJcIiBjbGFzcz1cInByb2R1Y3QtcmV2aWV3X19zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXJldmlld19fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogaXRlbS5wcm9kdWN0X3Jldmlld190ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcmV2aWV3X19hdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5IHtpdGVtLnByb2R1Y3RfcmV2aWV3X2F1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIsIEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgY29uc3QgU3VjY2Vzc1N0b3JpZXNCb3R0b20gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1Bvc3RIZWxwZnVsLCBzZXRJc1Bvc3RIZWxwZnVsXSA9IHVzZVN0YXRlKCdub3Qgdm90ZWQnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSAnc3VjY2VzcyBzdG9yaWVzJztcbiAgICBjb25zdCBsYXN0Vm90ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpO1xuXG4gICAgY29uc29sZS5sb2cobGFzdFZvdGUpO1xuXG4gICAgaWYgKGxhc3RWb3RlICE9PSBudWxsKSB7XG4gICAgICBzZXRJc1Bvc3RIZWxwZnVsKCd2b3RlZCcpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVllc0NsaWNrID0gKCkgPT4ge1xuICAgIHNldElzUG9zdEhlbHBmdWwodHJ1ZSk7XG5cbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gJ3N1Y2Nlc3Mgc3Rvcmllcyc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTm9DbGljayA9ICgpID0+IHtcbiAgICBzZXRJc1Bvc3RIZWxwZnVsKGZhbHNlKTtcblxuICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSAnc3VjY2VzcyBzdG9yaWVzJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNQb3N0SGVscGZ1bCgnbm90IHZvdGVkJyk7XG5cbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gJ3N1Y2Nlc3Mgc3Rvcmllcyc7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaG93LXdvcmtzX19pbnRyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrc19faW50cm8td3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrc19faW50cm8tdGV4dFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMTY5XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMThcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTE2OSAyMThcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTgxOS4xMjIgMEw3NTkuMzk1IDgzLjI2ODZMMTE2OSAxMTkuNTA5TDcyMi40ODIgMTM0LjczMUw2NjIuNzU1IDIxOEw0NDYuNTE4IDE0NC4xMzlMMCAxNTkuMzYyTDMxMi44NzcgOTguNDkxMUw5Ni42NDAxIDI0LjYzMDVMNTA2LjI0NSA2MC44NzA4TDgxOS4xMjIgMFpcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxQTI1RUZcIlxuICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEbyB5b3UgaGF2ZSBhbiBleHBlcmllbmNlIG9mIFNub3JlTGFiIHlvdeKAmWQgbGlrZSB0byBzaGFyZT9cbiAgICAgICAgICAgICAgICBXZeKAmWQgbG92ZSB0byBoZWFyIGZyb20geW91LiBQbGVhc2UgY29udGFjdCB1cyBvbnsnICd9XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCJtYWlsdG86c3VwcG9ydEBzbm9yZWxhYi5jb21cIj5cbiAgICAgICAgICAgICAgICAgIHN1cHBvcnRAc25vcmVsYWIuY29tXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIG9yIHNlbmQgdXMgYSBtZXNzYWdlIG9ueycgJ31cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj5cbiAgICAgICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIG9yeycgJ31cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCI+XG4gICAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJob3ctd29ya3NfX3Jldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy13b3Jrc19fcmV2aWV3LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNpZ2h0LXJldmlld19fY29udGVudFwiXG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBpc1Bvc3RIZWxwZnVsID09PSAnbm90IHZvdGVkJ1xuICAgICAgICAgICAgICAgICAgPyB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgICAgICAgICAgICAgICAgOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUtcyBpbnNpZ2h0LXJldmlld19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBMZXQgdXMga25vdyBpZiB5b3UgbGlrZWQgdGhlIHBvc3QuIFRoYXTigJlzIHRoZSBvbmx5IHdheSB3ZSBjYW5cbiAgICAgICAgICAgICAgICBpbXByb3ZlLlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHQtcmV2aWV3X19ub3RlXCI+XG4gICAgICAgICAgICAgICAgPHA+V2FzIHRoaXMgcG9zdCBoZWxwZnVsPzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC1yZXZpZXdfX2J0bnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGJ0biBidG4tYXJyb3cgaW5zaWdodC1yZXZpZXdfX2J0blwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVZZXNDbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlllczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgYnRuIGJ0bi1hcnJvdyBidG5fZ3JheS10ZXh0IGluc2lnaHQtcmV2aWV3X19idG5cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTm9DbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pk5vPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluc2lnaHQtcmV2aWV3X19mZWVkYmFja1wiXG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBpc1Bvc3RIZWxwZnVsID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfVxuICAgICAgICAgICAgICAgICAgOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+VGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNpZ2h0LXJldmlld19fZmVlZGJhY2tcIlxuICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgaXNQb3N0SGVscGZ1bCA9PT0gJ3ZvdGVkJ1xuICAgICAgICAgICAgICAgICAgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH1cbiAgICAgICAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPllvdSBoYXZlIGFscmVhZHkgdm90ZWQgZm9yIHRoaXMgcG9zdDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNpZ2h0LXJldmlld19fZm9ybVwiXG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBpc1Bvc3RIZWxwZnVsID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgPyB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgICAgICAgICAgICAgICAgOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zaWdodC1yZXZpZXdfX3RleHRcIj5cbiAgICAgICAgICAgICAgICBTb3JyeSB0byBoZWFyIHRoYXQgdGhpcyBhcnRpY2xlIHdhcyBub3QgaGVscGZ1bC4gV2UgcHJpZGVcbiAgICAgICAgICAgICAgICBvdXJzZWx2ZXMgb24gYmVpbmcgdGhlIGJlc3Qgb25saW5lIHJlc291cmNlIGZvciBzbm9yaW5nIGFuZFxuICAgICAgICAgICAgICAgIHNsZWVwIGFwbmVhIGluZm9ybWF0aW9uIHNvIHBsZWFzZSBsZWF2ZSBhIGNvbW1lbnQgdG8gaGVscCB1c1xuICAgICAgICAgICAgICAgIGltcHJvdmUgb3VyIHdlYnNpdGUncyBjb250ZW50LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cImZlZWRiYWNrLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX2ZhZGUgY2FyZWVycy1mb3JtX19maWVsZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlKlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19pbnB1dC1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX3RleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSBjYXJlZXJzLWZvcm1fX2ZpZWxkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUqXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX2lucHV0LWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmVlcnMtZm9ybV9faW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLWZvcm1fX3N1Ym1pdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY2FyZWVycy1mb3JtX19jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWxDbGlja31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DYW5jZWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY2FyZWVycy1mb3JtX19zdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VuZCBmZWVkYmFja1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSAnLi4vaW1hZ2VzL0Rhc2hib2FyZC5wbmcnO1xuaW1wb3J0IGRhc2hib2FyZF8yeCBmcm9tICcuLi9pbWFnZXMvRGFzaGJvYXJkQDJ4LnBuZyc7XG5pbXBvcnQgYXVkaW8gZnJvbSAnLi4vaW1hZ2VzL0F1ZGlvLnBuZyc7XG5pbXBvcnQgYXVkaW9fMnggZnJvbSAnLi4vaW1hZ2VzL0F1ZGlvQDJ4LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzU3Rvcmllc01haW4gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19pbmZvXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGVfZmFkZSB0aXRsZV9zaXplLWwgc3VjY2Vzcy1zdG9yaWVzLW1haW5fX3RpdGxlXCI+U25vcmVMYWIgU3VjY2VzcyBTdG9yaWVzPC9oMT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3RleHRcIj5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRTbm9yZUxhYiB3YXMgY3JlYXRlZCBvdXQgb2YgZGVzaXJlIHRvIGhlbHAgcGVvcGxlIGFuZCB3ZSBsb3ZlIGhlYXJpbmcgc3RvcmllcyBhYm91dCB0aGUgYXBwIGFjaGlldmluZyBqdXN0IHRoYXQuIFRoaXMgcGFnZSBpcyBhIGNvbGxlY3Rpb24gb2YgZ2VudWluZSB1c2VyIHN0b3JpZXMgdGFrZW4gZnJvbSBpVHVuZXMgdXNlciByZXZpZXdzLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFlvdeKAmWxsIG5vdGljZSB0aGF0IGV2ZXJ5b25lIGhhcyBhIGRpZmZlcmVudCBzbm9yaW5nIHRyaWdnZXIgYW5kIGhlbmNlIGEgZGlmZmVyZW50IHNub3Jpbmcgc29sdXRpb24uIFNub3JlTGFiIGFpbXMgdG8gaGVscCB5b3UgZmluZCB0aG9zZSB0cmlnZ2VycyB0byBnZXQgdGhlIHNvbHV0aW9uIHRoYXQgd29ya3MgZm9yIHlvdeKAplxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3Rvcmllc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0Rm9yIHNvbWUgc25vcmVycywgd2VpZ2h0IGxvc3MgY2FuIGJlIGEgcG93ZXJmdWwgdG9vbDpcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdEkgaGFkIGEgdmVyeSBoaWdoIHNub3JlIHNjb3JlIGFuZCB0aG91Z2h0IEkgdHJpZWQgZXZlcnl0aGluZy4gSSB3YXMgZGlhZ25vc2VkIHdpdGggYXN0aG1hIGFmdGVyIGFsbGVyZ3kgdGVzdHMgY2FtZSBiYWNrIG5vcm1hbC4gSSBzdGFydGVkIGFzdGhtYSB0cmVhdG1lbnQgYW5kIG15IHNjb3JlIGlzIG5vdyAwLiBJIHdhdGNoZWQgdGhlIFNub3JlTGFiIGdyYXBoIGRyb3Agb3ZlciB0aGUgbGFzdCA0IG1vbnRocy4gSSBhbSBhbWF6ZWQuIE15IHNub3Jpbmcgd2FzIGNhdXNlZCBieSBhc3RobWEuIEnigJltIG5vdyBhYmxlIHRvIHNsZWVwIGxvbmdlciBhbmQgZmVlbCByZXN0ZWQuIEkgYWxzbyA8YSBocmVmPVwiI1wiPmxvc3QgMjUgcG91bmRzPC9hPi4gQW1hemluZyBob3cgYXdlc29tZSBJIGZlZWwgYWZ0ZXIgSSBzbGVlcCB0aHJ1IG91dCB0aGUgbmlnaHQgd2l0aG91dCBnZXR0aW5nIOKAnGVsYm93ZWTigJ0gYnkgbXkgc3BvdXNlIGFuZCBiZWluZyBhYmxlIHRvIGJyZWF0aC5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdE9mdGVuLCBhbGxlcmdpZXMgYW5kIGhheSBmZXZlciBjYW4gd29yc2VuIHNub3Jpbmc6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHTigJxVc2luZyB0aGlzIHByb2R1Y3QgSSBpZGVudGlmaWVkIDxhIGhyZWY9XCIjXCI+aGF5IGZldmVyIGFzIHRoZSBzb3VyY2Ugb2bCoG15wqBzbm9yaW5nPC9hPi4gQWRkaW5nIGEgVGVtcHVyIHBpbGxvdyBhbmQgYSBoYXkgZmV2ZXIgcmVtZWR5IGhhcyBoYWQgYSBkcmFtYXRpYyBlZmZlY3QgYWZ0ZXIgb25lIHdlZWssIG1vcmUgZW5lcmd5LCBhYmlsaXR5IHRvwqBjb25jZW50cmF0ZSBhZnRlciBnZXR0aW5nIGEgZ29vZCBuaWdodHMgc2xlZXAuIFdlbnQgZnJvbSBhwqBzY29yZSBvZiBwbHVzIGZpZnR5IHRvIGxlc3MgdGhhbiAxMCBpbiBvbmUgd2Vlay4gQnJpbGxpYW50IeKAnVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0U29tZXRpbWVzLCBqdXN0IHNpbXBsZSB3ZWF0aGVyIGNoYW5nZXMgb3IgdGhlIGNsaW1hdGUgeW91IGxpdmUgaW4gY2FuIG1ha2UgeW91IHNub3JlOlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx04oCcTG92ZSB0aGlzIGFwcCDigJQgSSBsaXZlIGluIGEgdmVyeSBkcnkgY2xpbWF0ZSDigJQgYWZ0ZXIgc2V2ZXJhbCBzY29yZXMgYmV0d2VlbiAzNSBhbmQgNTAg4oCUIEkgYm91Z2h0IGEgPGEgaHJlZj1cIiNcIj5odW1pZGlmaWVyPC9hPiBhbmQgbm93IG15IHNjb3JlIHdhcyA3IeKAnVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0Rm9yIG1hbnkgb2Ygb3VyIHVzZXJzLCBhbnRpLXNub3JpbmcgbW91dGhwaWVjZXMgY2FuIG1hc3NpdmVseSByZWR1Y2Ugc25vcmluZzpcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx04oCcSWYgeW91IHNub3JlLCB0aGluayB5b3Ugc25vcmUgb3IgYXJlIHBvc2l0aXZlIHRoYXQgeW91IGRvbuKAmXQgc25vcmU6IGdldCB0aGlzIGFwcCEgRm9yIG1lLCBpdCBhcHAgcHJvdmVkIHRvIG1lIHRoYXQgSSBkaWQgc25vcmUuIFRoZSBwcm9ibGVtIHdhcyBob3cgdG8gZml4IGl0LiBJIHN0YXJ0ZWQgd2l0aCA8YSBocmVmPVwiI1wiPm5hc2FsIHN0cmlwczwvYT4gYW5kIG5hc2FsIHNwcmF5cy4gVGhlIGFwcCBwcm92ZWQgdGhhdCB0aGVzZSByZW1lZGllcyBoYWQgbm8gZWZmZWN0LCBzb8KgScKgZGVjaWRlZCB0byBidXkgYSBzbm9yZSBndWFyZCAoPGEgaHJlZj1cIiNcIj5Tbm9yZVJ4PC9hPikgYW5kIHZpb2xh4oCmIG5vwqBzbm9yaW5nISBIb3cgZG8gSSBrbm93PyBUaGlzIGFwcCByZWNvcmRzIHlvdSBhbGwgbmlnaHQgbG9uZywgZ3JhcGhzIHNub3JpbmcgZXBpc29kZXMgYW5kIHRoZSBpbnRlbnNpdHkgYW5kIGdpdmVzIHlvdSBhIFNub3JlIFNjb3JlLiBCZWZvcmUgdGhlIGRldmljZSwgbXkgU25vcmUgU2NvcmVzIHdlcmUgYmV0d2VlbiAxNSBhbmQgNDUuIFNpbmNlIHRoZSBkZXZpY2UsIG15IHNjb3JlcyBhcmUgMSB0byAzISBJ4oCZbSBhbHNvIHN0YXJ0aW5nIHRvIGZlZWwgcmVmcmVzaGVkIGluIHRoZSBtb3JuaW5nLuKAnVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnEFmdGVyIGEgZmV3IG5pZ2h0cywgSSBib3VnaHQgdGhlIHVwZ3JhZGUgdG8gdGhpcyBhcHAuIEl04oCZcyBib3RoIHRoZSBtb3N0IGV4cGVuc2l2ZSBhcHAgSeKAmXZlIGV2ZXIgYm91Z2h0LCBhbmQgc29tZSBvZiB0aGUgYmVzdCBtb25leSBJ4oCZdmUgZXZlciBzcGVudC4gSSBoYXZlIGJlZW4gZXhwZXJpbWVudGluZyB3aXRoIGRpZmZlcmVudCB0eXBlcyBvZsKgYW50aS1zbm9yZSBkZXZpY2VzIHRvIHNlZSB3aGF0IHdvcmtzIGJlc3QgYW5kIGlzIG1vc3QgY29tZm9ydGFibGUgZm9yIG1lLCBhbmQgdGhpcyBhcHAgaGVscGVkIG1lIHF1aWNrbHkgYW5kIG9iamVjdGl2ZWx5IHJhdGUgaG93IGVmZmVjdGl2ZSB0aGV5IGFyZSBhdCBwcmV2ZW50aW5nIG1lIGZyb20gc25vcmluZy4gVGhlIGludGVyZmFjZSBpcyBlYXN5LCBhbmQgaXQgc3VwcG9ydHMgZXZlcnkgZmVhdHVyZSBJwqB3YW50ZWQuIEFmdGVyIHNwZW5kaW5nIGxpdGVyYWxseSB0aG91c2FuZHMgb2YgZG9sbGFycyBvbiBzbGVlcCBtZWRpY2luZSBkb2N0b3JzLCBJ4oCZbSBub3cgc2xlZXBpbmcgYmV0dGVyIGFmdGVyIHVzaW5nIHRoaXMgYXBwIHRvwqBoZWxwIG1lIGNob29zZSBiZXR3ZWVuIGEgZmV3LCBjb21wYXJhdGl2ZWx5IGluZXhwZW5zaXZlLCBvdmVyLXRoZS1jb3VudGVyIHJlbWVkaWVzLiBUaGlzIGVuZGVkIHVwIGZhciBtb3JlIGVmZmVjdGl2ZSB0aGFuIEnCoGhhZCBpbWFnaW5lZCAoc3BlY2lmaWNhbGx5IGZvciBtZSwgPGEgaHJlZj1cIiNcIj50aGUgdG9uZ3VlLXJldGVudGlvbiBjbGFzcyBvZsKgZGV2aWNlPC9hPiksIGFuZCB0aGlzIGFwcCBoZWxwZWQgbWUgZG8gaXQgaW4gYSBjb3VwbGUgb2Ygd2Vla3MgKGFuZCBJwqBrbmV3IHdoYXQgd2FzIGFuZCB3YXMgbm90IHdvcmtpbmcgYWZ0ZXIgZWFjaCBuaWdodCEp4oCdXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0V2UgaGVhciBmcm9tIHBsZW50eSBvZiB1c2VycyB3aG8gYXR0cmlidXRlIHRoZWlyIHNub3JpbmcgdG8gc2xlZXBpbmcgcG9zaXRpb24uIFNwZWNpYWxpc3QgcGlsbG93cyBjYW4gYmUgaW52YWx1YWJsZSBpbiB0aGVzZSBpbnN0YW5jZXM6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnFRoaXMgYXBwIGlzIGJyaWxsaWFudC4gSXQgcHJvdmVkIG15IHRoZW9yeSB0aGF0IEkgc25vcmUgd2hlbiBJIHNsZWVwIG9uIG15IGJhY2sgYW5kIDxhIGhyZWY9XCIjXCI+SSBkb27igJl0IHNub3JlIHdoZW4gSSBzbGVlcCBvbiBteSBzaWRlPC9hPi4gV2hhdCBhwqBncmVhdCBpZGVhIHRoaXMgYXBwIGlzISEhIEkgaGF2ZSBjaHJvbmljIGhlYWx0aCBwcm9ibGVtcyBhbmQsIHdpdGhvdXQgYSBnb29kIG5pZ2h04oCZcyBzbGVlcCwgSSBqdXN0IGNhbuKAmXQgZnVuY3Rpb24uIFNvIGl04oCZcyB2ZXJ5IGltcG9ydGFudCB0byBrbm93IGhvdyB0byBnZXQgdGhlIGJlc3QsIGFuZCBtb3N0IHJlc3RmdWwgc2xlZXAuIEnCoGNhbiBhbHNvIHNoYXJlIHRoYXQgYXJ0aHJpdGlzIGFuZCBhIHBvb3IgbWF0dHJlc3MgaGFkIG1hZGUgc2xlZXBpbmcgb24gbXkgc2lkZSBhbGwgYnV0IGltcG9zc2libGUgZm9yIG1hbnkgeWVhcnMgYW5kLCBkdXJpbmcgdGhhdCB0aW1lLCBJIGJlY2FtZSBhIHdhbGtpbmcgem9tYmllIGZyb20gc25vcmluZyBhbmQgPGEgaHJlZj1cIiNcIj5zbGVlcCBhcG5lYTwvYT4uIEkgTkVWRVIgZmVsdCByZXN0ZWQgYW5kIGNvdWxkIGZhbGwgYXNsZWVwIEFOWVdIRVJFIG9uwqBhwqBkaW1lIChhbmQgZ2l2ZSB5b3UgOS1jZW50cyBjaGFuZ2UpLiBGb3IgZXhhbXBsZTogd2hlbiBJwqBzdG9wcGVkIHRoZSBjYXIgYXQgdHJhZmZpYyBsaWdodHMgYW5kIHN0b3Agc2lnbnMgKGl04oCZcyB0aGUgR29k4oCZcy1Ib25lc3QgVHJ1dGgpLiBUaGVuLCBJIGdvdCBhIGZvYW0gbWF0dHJlc3MgZnJvbSBJS0VBIGFuZCB2b2lsw6EhIEnCoHNsZWVwIGNvbWZvcnRhYmx5IG9uIG15IHNpZGUgYWdhaW4hIEFuZCB3aGF0IGEgZHJhbWF0aWMgZGlmZmVyZW5jZSBpdCBoYXMgbWFkZSBpbiBteSBsaWZlISBJIHdha2UgdXAgZmVlbGluZyBSRUZSRVNIRUQhIEHCoHNlbnNhdGlvbiBJIGhhZCBmb3Jnb3R0ZW4gZW50aXJlbHkuIEkgd2lzaCB0aGUgc2FtZSBzd2VldCByZWNvdmVyeSBmb3IgYWxsIG9mIHlvdSB3aG8gd2FrZSB1cCBldmVyeSBtb3JuaW5nIGZlZWxpbmcgbGlrZSB3aGF0IHlvdSByZWFsbHkgbmVlZCBpcyDigKYgYW5vdGhlciA4IGhvdXJzIG9mIHNsZWVwISBTbm9yZSBsZXNzIGFuZCBzbGVlcCBtb3JlIOKAkyB5b3XigJlyZSBnb25uYSBMT1ZFIGl0IeKAnVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnFdoZW4gSSBmaXJzdCBzdGFydGVkIHVzaW5nIHRoZSBBcHAgbXkgU25vcmUgSW5kZXggd2FzIGFueXdoZXJlIGJldHdlZW4gNTAgYW5kIDk2LiBJIHN0YXJ0ZWQgdG8gdHJ5IHNvbWUgb2YgdGhlIGRpZmZlcmVudCBSZW1lZGllcy4gQm91Z2h0IGEgd2VkZ2UgcGlsbG93IGFuZCBpbiBvbmUgbmlnaHQgbXkgU25vcmUgSW5kZXggd2VudCBkb3duIHRvIG5lYXIgemVybyBhbmQgaGFzIHN0YXllZCBuZWFyIHplcm8gZXZlciBzaW5jZSB1c2luZyB0aGUgcGlsbG93IOKAkyBhbmQgaXMgYWN0dWFsbHkgemVybyBtb3N0IG5pZ2h0cy4gSGFkIHNlZW4gdGhyZWUgZG9jdG9ycywgdHdvIHNwZWNpYWxpc3RzLCBvbmUgZGVudGlzdCBhbmQgaGFkIGEgc2xlZXAgc3R1ZHkgY29uZHVjdGVkIOKAkyB0aGV5IGFsbCBwb2ludGVkIG1lIHRvIGRlbnRhbCBhcHBsaWFuY2VzIHdoaWNoIEkgaGFkIHRyb3VibGVzIHdlYXJpbmcgZHVlIHRvIGEgZ2FnIHJlZmxleC4gTm9uZSBoYWQgc3VnZ2VzdGVkIGHCoDxhIGhyZWY9XCIjXCI+d2VkZ2UgcGlsbG93PC9hPi4gVGhhbmsgeW91IFNub3JlIExhYiHigJ1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRTb21ldGltZXMsIGEgcHJvYmxlbSBhcyBzaW1wbGUgYXMgYSBibG9ja2VkIG5vc2UgY2FuIGNhdXNlIHNub3Jpbmc6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnEkgaGF2ZSB1c2VkIHRoaXMgYXBwIGZvciBzaXggd2Vla3Mgbm93LiBJIGhhdmUgYWRqdXN0ZWQgbXkgPGEgaHJlZj1cIiNcIj5zaW51cyBhaWRzPC9hPiBhbmQgbXkgc25vcmluZyBoYXMgcmVkdWNlZCBmcm9tIDIxMCB0byA2MCEgSSBjYW4gYmUgYSA8YSBocmVmPVwiI1wiPnRyYXZlbDwvYT4gY29tcGFuaW9uIG9uY2UgYWdhaW4h4oCdXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx04oCcSSBzdGFydGVkIHVzaW5nIFNub3JlIExhYiBvbiB0aGUgMjNyZCBvZiBKYW51YXJ5IChhIHdlZWsgYWdvKSwgZmlyc3Qgb24gaXRzIG93biBhbmQgbm93IEkgdXNlIDxhIGhyZWY9XCIjXCI+bmFzYWwgc3RyaXBzPC9hPiBhdCBuaWdodC4gTXkgd2lmZSBoYXMgbm90IGhhZCB0byBnZXQgb3V0IG9mIGJlZCBhbmQgZ28gdG8gYW5vdGhlciBiZWRyb29tIGF0IGFsbC4gSSB3YXMgc3VwcG9zZWQgdG8gc2VlIGEgZG9jdG9yIHRvZGF5IGF0IGEgc2xlZXAgY2xpbmljIHdoZXJlIEkgd2VudCBiYWNrIGluIE5vdmVtYmVyLCBidXQgSSBjYW5jZWxsZWQgdGhlIGFwcG9pbnRtZW50IGFzIEkga25vdyB3aGF0IGhlwqB3YXMgZ29pbmcgdG8gc2F5IOKAnHlvdSBzdWZmZXIgZnJvbSBzbGVlcCBhcG5lYeKAnSBhbmQgaGVyZeKAmXMgdGhlIHNvbHV0aW9uISEgVGhlIENQQVAgbWFzay4gRW5vdWdoIGFscmVhZHksIGlmIEkgd2FudGVkIHRvIHdlYXIgYcKgbWFzayBJ4oCZZCBnbyBudXRzLiBUaGFuayB5b3UgU25vcmVMYWIsIGtlZXAgZG9pbmcgeW91ciB0aGluZyHigJ1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRTbm9yZUxhYiBjYW4gYWxzbyBiZSB2ZXJ5IHVzZWZ1bCBpbiBtZWRpY2FsIGNvbnN1bHRhdGlvbnM6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnEdyZWF0IGFwcCB0byBtb25pdG9yIHRoZSBzZXZlcml0eSBvZiB5b3VyIG93biBzbm9yaW5nIGFuZCB0YWtlIHRvwqBkb2N0b3IgdG8gcGxheSB0aGUgYXVkaW8uIFNhdmVkIG1lIGZyb20gYW5vdGhlciA8YSBocmVmPVwiI1wiPnNsZWVwIHN0dWR5PC9hPiBpbsKgdGhlIGxhYi7igJ1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHTigJxUaGlzIGlzIGEgZmFudGFzdGljIGFwcC4gSXQgcmVhbGx5IGdpdmVzIHlvdSBhIGdyZWF0IGNvbmNlcHQgb2YgeW91ciBzbm9yaW5nIHBhdHRlcm4gYW5kIGhvdyBsb25nIHlvdSBzbGVlcCBmb3IuIEluIHRoZSBlbmQgSSBsZWFybmVkIEnCoGhhdmUgc2V2ZXJlIGNhc2Ugb2YgPGEgaHJlZj1cIiNcIj5zbGVlcCBhcG5lYTwvYT4u4oCdXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx04oCcSeKAmXZlIG5ldmVyIHJlYWxseSB1bmRlcnN0b29kIHdoeSBteSB3aWZlIHdlYXJzIGVhcnBsdWdzIHRvIGJlZC4gVGhpcyBhcHAgaGFzIGFsbG93ZWQgbWUgdG8gcmVjb3JkIGFuZCB0cmFjayBteSBuaWdodGx5IHJhY2tldCBhbmQgY29udmluY2UgbWUgdGhhdCBhIDxhIGhyZWY9XCIjXCI+c2xlZXAgYXBuZWEgdGVzdDwvYT4gc2hvdWxkIGJlIG5leHQuIExpZmUgY2hhbmdpbmcgYXBwLuKAnVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdOKAnE5vdyB0aGF0IEkgY2FuIGhlYXIgd2hhdCBJIHNvdW5kIGxpa2UsIEkgaGF2ZSBiZWVuIGFibGUgdG8gYWN0IHVwb24gbXkgc25vcmluZyBhbmQgaGF2ZSByZWR1Y2VkIGl0IHNpZ25pZmljYW50bHkuIFRydWx5IGdyZWF0IGFwcCHigJ1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2Vzcy1zdG9yaWVzLW1haW5fX3N0b3J5XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRUaGUgYXBwIGlzIHdpZGVseSBhY2NsYWltZWQgYnkgZGVudGlzdHMgYW5kIG1lZGljYWwgcHJvZmVzc2lvbmFsczpcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnktdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdOKAnEFzIGEgcXVhbGlmaWVkIEFCRFNNIGRlbnRpc3Qgd2hvIGV4Y2x1c2l2ZWx5IHRyZWF0cyBvYnN0cnVjdGl2ZSBzbGVlcCBhcG5lYSBwYXRpZW50cyB1c2luZyBvcmFsIGFwcGxpYW5jZXMsIHdlIHNvbWV0aW1lcyBzdHJ1Z2dsZSB0byBoYXZlIGZhc3QsIGVhc3ksIG9iamVjdGl2ZSBtZXRyaWNzIGZvciBvdXIgcGF0aWVudHMgdG8gc2VlIGFuZCBhcHByZWNpYXRlLiBTbm9yZUxhYiBnaXZlcyB1cyB0aGF0IGFuZCB0aGVuIHNvbWUhIFdlIGhhdmUgYWxsIG9mIG91ciBwYXRpZW50cyBkb3dubG9hZCBTbm9yZUxhYiBhdCB0aGVpciBjb25zdWx0IGFwcG9pbnRtZW50IGFuZCB1c2UgdGhlIGRhdGEgdG8gaGVscCB0aGVtIGNvbmZpcm0gdGhlaXIgY29uZGl0aW9uLiBBZnRlciB0cmVhdG1lbnQgdGhleSBjYW4gc2VlIHRoZSByZXN1bHRzIGltbWVkaWF0ZWx5IHRoZSBuZXh0IG1vcm5pbmcuIFRoZXkgZXhwZXJpZW5jZSB2YXN0IGltcHJvdmVtZW50cyBpbiBzbm9yaW5nIHNjb3Jlcy4gVGhleSB3aWxsIHN0aWxsIGhhdmUgdG8gdW5kZXJnbyBhIGZvbGxvdyB1cCBzbGVlcCB0ZXN0IHRvIGNvbmZpcm0gdGhlIHRyZWF0bWVudCBpcyBzdWNjZXNzZnVsLCBidXQgdGhpcyBxdWljayBhbmQgZWFzeSBhcHAgaGVscHMgdGhlbSBzZWUgdGhlIGNoYW5nZXMgcmlnaHQgYXdheS7igJ1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNzLXN0b3JpZXMtbWFpbl9fc3RvcnlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0V2UgYWltIHRvIGdpdmUgeW91IHVuZGVyc3RhbmRpbmcgb2YgeW91ciBzbm9yaW5nIHByb2JsZW0gc28geW91IGNhbiBtYWtlIHRoZSBtb3N0IGFwcHJvcHJpYXRlIGNoYW5nZXM6XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc3Mtc3Rvcmllcy1tYWluX19zdG9yeS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx04oCcVGhpcyBhcHAgaXMgYSByZXZlbGF0aW9uLiBGb3IgdGhlIGZpcnN0IHRpbWUgSSBmZWVsIGluIGNvbnRyb2wgb2bCoG15wqBzbm9yaW5nIHByb2JsZW0uIEkgY2FuIG1vbml0b3Igc2NpZW50aWZpY2FsbHkgd2hhdCBleGFjZXJiYXRlcyBhbmQgd2hhdCBhbGxldmlhdGVzIHRoZSBwcm9ibGVtLiBJIGZlZWwgY2VydGFpbiBub3cgScKgY2FuIGN1cmUgdGhlIHByb2JsZW0gYW5kIGdldCBteSB3aWZlIGJhY2sgdG8gb3VyIGJlZCEgVGhhbmsgeW91IFNub3JlTGFiLuKAnVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdOKAnEhlbHBlZCBhbiBFcGljIHNub3JlciEgU2ltcGxlIHRvIHVzZSBhbmQgaGFzIGN1c3RvbWlzYWJsZSBmZWF0dXJlcyB0byBwZXJzb25hbGlzZSB5b3VyIHdhciBhZ2FpbnN0IHRoZSBzbm9yZS4gSGVscHMgdG8gc2hvdyB5b3VyIHBhdHRlcm5zIGFuZCByZWNvcmRzIHRoZW0uIFF1aXRlIGZyaWdodGVuaW5nIGJ1dCB1c2VmdWwuIEhlbHBlZCBtZSBpZGVudGlmeSByZW1lZGllcyBhbmQgbGlmZXN0eWxlIHBhdHRlcm5zIHRoYXQgaW1wYWN0ZWQgb24gbXkg4oCYc25vcmXigJkgLiBOb3cgb2JzZXNzZWQgYnkgdGhlIG5pZ2h0bHkgZ3JhcGhzLuKAnVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdOKAnFRoaXMgaXMgdGhlIGJlc3Qgc2xlZXAgcmVjb3JkZXIgSSBoYXZlIHRyaWVkLiBXaGlsZSBpdCBkb2VzbuKAmXQgZG/CoGFueXRoaW5nIGRpcmVjdGx5IHRvIGN1dCBkb3duIG9uIHlvdXIgc25vcmluZywgaXQgaXMgaGVscGZ1bCB0b8Kga25vdyBob3cgbG91ZCB5b3VyIHNub3JpbmcgaXMuIEl0IGFsbG93cyB5b3UgdG8gdGVzdCBvdXQgdmFyaW91cyB3YXlzIHRvIGN1dCBkb3duIG9uIHNub3JpbmcuIEnigJltIGRvd24gNDAgcGx1cyBwZXJjZW50IGluIGp1c3QgdHdvIHdlZWtzIeKAnVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0UGFnZSc7XG5cbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJhYm91dFwiPlxuXHRcdFx0PEFib3V0UGFnZSAvPlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgdXNlUmVmIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgQ2FyZWVyc1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmVlcnNQYWdlJztcblxuZXhwb3J0IGNvbnN0IENhcmVlcnMgPSAoKSA9PiB7XG5cdGNvbnN0IGJsb2NrZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwiY2FyZWVyc1wiPlxuXHRcdFx0PENhcmVlcnNQYWdlIHJlZj17YmxvY2tlclJlZn0gLz5cblx0XHRcdDxkaXYgaWQ9XCJjYXJlZXJzLWZvcm0tbW9kYWxcIiBjbGFzc05hbWU9XCJibG9ja2VyXCIgcmVmPXtibG9ja2VyUmVmfT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IENvbnRhY3RQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0UGFnZSc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cblx0XHRcdDxDb250YWN0UGFnZSAvPlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IEVwd29ydGhRdWVzdGlvbm5haXJlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9FcHdvcnRoUXVlc3Rpb25uYWlyZSc7XG5pbXBvcnQgeyBzaGFyZVF1ZXN0aW9ubmFpcmVMaW5rcyB9IGZyb20gJy4uL2hlbHBlcnMvdmFyaWFibGVzJztcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZSc7XG5pbXBvcnQgeyBJbnNpZ2h0c0Fzc2VzcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zaWdodHNBc3Nlc3MnO1xuXG5pbXBvcnQgc3RvcF9iYW5nIGZyb20gJy4uL2ltYWdlcy9zdG9wLWJhbmcucG5nJztcbmltcG9ydCBzdG9wX2JhbmdfMnggZnJvbSAnLi4vaW1hZ2VzL3N0b3AtYmFuZ0AyeC5wbmcnO1xuaW1wb3J0IHNjcmVlbmluZyBmcm9tICcuLi9pbWFnZXMvc2NyZWVuaW5nLnBuZyc7XG5pbXBvcnQgc2NyZWVuaW5nXzJ4IGZyb20gJy4uL2ltYWdlcy9zY3JlZW5pbmdAMngucG5nJztcblxuY29uc3QgcXVlc3Rpb25uYWlyZUFydGljbGVzID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdTbGVlcCBBcG5lYTogU2NyZWVuaW5nLCBUZXN0aW5nIGFuZCBUcmVhdG1lbnQnLFxuXHRcdGxpbms6ICdzdG9wYmFuZycsXG5cdFx0aW1hZ2U6IHsgJzF4Jzogc2NyZWVuaW5nLCAnMngnOiBzY3JlZW5pbmdfMnggfVxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdXaGF0IGlzIFNsZWVwIEFwbmVhPycsXG5cdFx0bGluazogJ3N0b3BiYW5nJyxcblx0XHRpbWFnZTogeyAnMXgnOiBzdG9wX2JhbmcsICcyeCc6IHN0b3BfYmFuZ18yeCB9XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBFcHdvcnRoID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cImVwd29ydGhcIj5cblx0XHRcdDxFcHdvcnRoUXVlc3Rpb25uYWlyZSAvPlxuXHRcdFx0PFNoYXJlIHRpdGxlPVwiU2hhcmVcIiBsaW5rcz17c2hhcmVRdWVzdGlvbm5haXJlTGlua3N9IC8+XG5cdFx0XHQ8SW5zaWdodHNBc3Nlc3Ncblx0XHRcdFx0bGlnaHQ9e2ZhbHNlfVxuXHRcdFx0XHR0aXRsZUNsYXNzPVwidGl0bGVfZmFkZS1zXCJcblx0XHRcdFx0dGl0bGVUZXh0PXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSA/ICdMZWFybiBtb3JlIGFib3V0IG9ic3RydWN0aXZlIHNsZWVwIGFwbmVhJyA6ICdSZWxhdGVkIGFydGljbGVzJ31cblx0XHRcdFx0YXJ0aWNsZXM9e3F1ZXN0aW9ubmFpcmVBcnRpY2xlc31cblx0XHRcdC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgRmFxUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmFxUGFnZSc7XG5cbmV4cG9ydCBjb25zdCBGYXEgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwiZmFxXCI+XG5cdFx0XHQ8RmFxUGFnZSAvPlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG4vL2NvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgSG9tZU1haW4gfSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVNYWluJztcbmltcG9ydCB7IEhvbWVEZXNjcmlwdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURlc2NyaXB0aW9uJztcbmltcG9ydCB7IEhvbWVSZXZpZXdzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lUmV2aWV3cyc7XG5pbXBvcnQgeyBQYXJ0bmVyQXBwIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0bmVyQXBwJztcbmltcG9ydCB7IEhvbWVJbnNpZ2h0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZUluc2lnaHRzJztcbmltcG9ydCBzdGFyIGZyb20gJy4uL2ltYWdlcy9zdGFyLnBuZyc7XG5pbXBvcnQgc3RhcjIgZnJvbSAnLi4vaW1hZ2VzL3N0YXItMi5wbmcnO1xuXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgbGV0IGRlc2NyaXB0aW9uQ2FyZHMgPSBbXTtcbiAgbGV0IGFwcENhcmRzID0gW107XG5cbiAgY29uc3QgaG9tZURhdGEgPSB1c2VGZXRjaChcbiAgICAnaHR0cHM6Ly9zbm9yZWxhYi51eC1taW5kLnByby93cC1qc29uL3dwL3YyL3BhZ2VzP3NsdWc9aG9tZS1wYWdlJyxcbiAgICB7fVxuICApO1xuXG4gIGlmIChob21lRGF0YS5kYXRhKSB7XG4gICAgZGVzY3JpcHRpb25DYXJkcyA9IGhvbWVEYXRhLmRhdGFbMF0uYWNmLmRlc2NyaXB0aW9uX2NhcmRzO1xuICAgIGFwcENhcmRzID0gaG9tZURhdGEuZGF0YVswXS5hY2YucGFydG5lcl9kZXNjcmlwdGlvbl9jYXJkcztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgPEhvbWVNYWluIC8+XG4gICAgICA8SG9tZURlc2NyaXB0aW9uIGNhcmRzPXtkZXNjcmlwdGlvbkNhcmRzfSAvPlxuICAgICAgPEhvbWVSZXZpZXdzIC8+XG4gICAgICA8UGFydG5lckFwcCBjYXJkcz17YXBwQ2FyZHN9IC8+XG4gICAgICA8SG9tZUluc2lnaHRzIC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLWxpZ2h0LTFcIiBhbHQ9XCJcIiBzcmM9e3N0YXJ9IC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLWxpZ2h0LTJcIiBhbHQ9XCJcIiBzcmM9e3N0YXIyfSAvPlxuICAgICAgey8qPHN2Z1xuICAgICAgICBkYXRhLXN2Zz1cImhvbWUtZGVjb3JhdGl2ZVwiXG4gICAgICAgIHdpZHRoPVwiODcyXCJcbiAgICAgICAgaGVpZ2h0PVwiODI5XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA4NzIgODI5XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTQzNS43NTIgMEw1MzguNTIzIDMxNi4yOTlMODcxLjA5OSAzMTYuMjk5TDYwMi4wNCA1MTEuNzgyTDcwNC44MTEgODI4LjA4TDQzNS43NTIgNjMyLjU5N0wxNjYuNjkyIDgyOC4wOEwyNjkuNDY0IDUxMS43ODJMMC40MDM5NjEgMzE2LjI5OUwzMzIuOTggMzE2LjI5OUw0MzUuNzUyIDBaXCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyXzk2XzM5MylcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhcl85Nl8zOTNcIlxuICAgICAgICAgICAgeDE9XCI0NDkuMTkyXCJcbiAgICAgICAgICAgIHkxPVwiNDE3LjU3NFwiXG4gICAgICAgICAgICB4Mj1cIjc1Ljc1ODZcIlxuICAgICAgICAgICAgeTI9XCIyNTYuNjMzXCJcbiAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzFGMTJEM1wiIC8+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzNGQUZERVwiIC8+XG4gICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+Ki99XG4gICAgICB7Lyo8c3ZnXG4gICAgICAgIGRhdGEtc3ZnPVwiaG9tZS1kZWNvcmF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCI4NzJcIlxuICAgICAgICBoZWlnaHQ9XCI4MjlcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDg3MiA4MjlcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNDM1Ljc1MiAwTDUzOC41MjMgMzE2LjI5OUw4NzEuMDk5IDMxNi4yOTlMNjAyLjA0IDUxMS43ODJMNzA0LjgxMSA4MjguMDhMNDM1Ljc1MiA2MzIuNTk3TDE2Ni42OTIgODI4LjA4TDI2OS40NjQgNTExLjc4MkwwLjQwMzk2MSAzMTYuMjk5TDMzMi45OCAzMTYuMjk5TDQzNS43NTIgMFpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXJfOTZfMzkzKVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXzk2XzM5M1wiXG4gICAgICAgICAgICB4MT1cIjQ0OS4xOTJcIlxuICAgICAgICAgICAgeTE9XCI0MTcuNTc0XCJcbiAgICAgICAgICAgIHgyPVwiNzUuNzU4NlwiXG4gICAgICAgICAgICB5Mj1cIjI1Ni42MzNcIlxuICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMUYxMkQzXCIgLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjM0ZBRkRFXCIgLz5cbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz4qL31cbiAgICA8L21haW4+XG4gICk7XG59O1xuIiwiLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgeyBIb3dXb3Jrc01haW4gfSBmcm9tICcuLi9jb21wb25lbnRzL0hvd1dvcmtzTWFpbic7XG5pbXBvcnQgeyBIb3dXb3Jrc1NlbGVjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSG93V29ya3NTZWxlY3QnO1xuaW1wb3J0IHsgSG93V29ya3NNYWtlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3dXb3Jrc01ha2UnO1xuaW1wb3J0IHsgSG93V29ya3NTdGFydCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSG93V29ya3NTdGFydCc7XG5pbXBvcnQgeyBIb3dXb3Jrc1NsZWVwIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3dXb3Jrc1NsZWVwJztcbmltcG9ydCB7IEhvd1dvcmtzU2VlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3dXb3Jrc1NlZSc7XG5pbXBvcnQgeyBIb3dXb3Jrc05vdGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3dXb3Jrc05vdGVzJztcbmltcG9ydCB7IEhvd1dvcmtzQm90dG9tIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3dXb3Jrc0ludHJvJztcblxuZXhwb3J0IGNvbnN0IEhvd1dvcmtzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImhvdy13b3Jrc1wiPlxuICAgICAgPEhvd1dvcmtzTWFpbiAvPlxuICAgICAgPEhvd1dvcmtzU2VsZWN0IC8+XG4gICAgICA8SG93V29ya3NNYWtlIC8+XG4gICAgICA8SG93V29ya3NTdGFydCAvPlxuICAgICAgPEhvd1dvcmtzU2xlZXAgLz5cbiAgICAgIDxIb3dXb3Jrc1NlZSAvPlxuICAgICAgPEhvd1dvcmtzTm90ZXMgLz5cbiAgICAgIDxIb3dXb3Jrc0JvdHRvbSAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB1c2VQb3N0IGZyb20gJy4uL2hvb2tzL3VzZVBvc3QnO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gJy4uL2hvb2tzL3VzZUZldGNoJztcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50Jztcbi8vY29uc3QgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IEluc2lnaHRTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnNpZ2h0U2VjdGlvbic7XG5pbXBvcnQgeyBJbnNpZ2h0TWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zaWdodE1haW4nO1xuaW1wb3J0IHsgSW5zaWdodEFkdmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zaWdodEFkdmljZSc7XG5pbXBvcnQgeyBJbnNpZ2h0U3R1ZGllcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zaWdodFN0dWRpZXMnO1xuaW1wb3J0IHsgSW5zaWdodFJldmlldyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zaWdodFJldmlldyc7XG5pbXBvcnQgeyBJbnNpZ2h0RG93bmxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL0luc2lnaHREb3dubG9hZCc7XG5pbXBvcnQgeyBSZWZlcmVuY2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZWZlcmVuY2VzJztcbmltcG9ydCB7IHNoYXJlSW5zaWdodExpbmtzIH0gZnJvbSAnLi4vaGVscGVycy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlJztcbmltcG9ydCB7IEluc2lnaHRzUmVsYXRpdmUgfSBmcm9tICcuLi9jb21wb25lbnRzL0luc2lnaHRzUmVsYXRpdmUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlVGV4dFdpZHRoIH0gZnJvbSAnLi4vaGVscGVycy9mdW5jdGlvbnMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL2xvYWRlci5naWYnO1xuXG5leHBvcnQgY29uc3QgSW5zaWdodCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRQYXRoLCBzZXRDdXJyZW50UGF0aF0gPSB1c2VTdGF0ZSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGNvbnN0IFtjdXJyZW50U2x1Zywgc2V0Q3VycmVudFNsdWddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50VGFncywgc2V0Q3VycmVudFRhZ3NdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcG9zdCA9IHVzZVBvc3QoXG4gICAgJ2h0dHBzOi8vc25vcmVsYWIudXgtbWluZC5wcm8vd3AtanNvbi93cC92Mi9wb3N0cz9wZXJfcGFnZT0xMDAnLFxuICAgIGN1cnJlbnRTbHVnLFxuICAgIHt9XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXZlcnNlZFBhdGggPSBjdXJyZW50UGF0aC5zcGxpdCgnLycpLnJldmVyc2UoKTtcblxuICAgIGNvbnN0IHNsdWcgPSByZXZlcnNlZFBhdGhbMF0gPT09ICcnID8gcmV2ZXJzZWRQYXRoWzFdIDogcmV2ZXJzZWRQYXRoWzBdO1xuXG4gICAgY29uc29sZS5sb2coc2x1Zyk7XG5cbiAgICBzZXRDdXJyZW50U2x1ZyhzbHVnKTtcbiAgfSwgW2N1cnJlbnRQYXRoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGN1bGF0ZVRleHRXaWR0aCk7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gY2FsY3VsYXRlVGV4dFdpZHRoKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxjdWxhdGVUZXh0V2lkdGgpO1xuICAgIH07XG4gIH0sIFtwb3N0XSk7XG5cbiAgaWYgKHBvc3QuZGF0YSkge1xuXHRcdHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJpbnNpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC13cmFwcGVyXCI+XG4gICAgICAgICAge3BhcnNlKHBvc3QuZGF0YS5jb250ZW50LnJlbmRlcmVkKX1cbiAgICAgICAgICB7LyogPEluc2lnaHRBZHZpY2UgLz4gKi99XG4gICAgICAgICAgey8qIDxJbnNpZ2h0U3R1ZGllcyAvPiAqL31cbiAgICBcdFx0XHQ8SW5zaWdodFJldmlldyBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgIDxJbnNpZ2h0RG93bmxvYWQgLz5cbiAgICAgICAgICB7cG9zdC5kYXRhLmFjZi5wb3N0X3JlZmVyZW5jZXMgPyA8UmVmZXJlbmNlcyByZWZlcmVuY2VzPXtwb3N0LmRhdGEuYWNmLnBvc3RfcmVmZXJlbmNlc30gLz4gOiAnJ31cbiAgICBcdFx0XHQ8U2hhcmUgdGl0bGU9XCJTaGFyZSB0aGlzIGFydGljbGVcIiBsaW5rcz17c2hhcmVJbnNpZ2h0TGlua3N9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5zaWdodHNSZWxhdGl2ZSByZWxhdGVkUG9zdHM9e3Bvc3QuZGF0YS5hY2YucmVsYXRlZF9hcnRpY2xlc30gLz5cbiAgICAgIDwvbWFpbj5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJpbnNpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC13cmFwcGVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnNpZ2h0LWxvYWRlclwiIGFsdD1cIlwiIHNyYz17bG9hZGVyfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zaWdodC1sb2FkZXItdGl0bGVcIj5Mb2FkaW5nLi4uPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgSW5zaWdodHNUYWJzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnNpZ2h0c1RhYnMnO1xuaW1wb3J0IHsgSW5zaWdodHNGZWF1dHVyZWQgfSBmcm9tICcuLi9jb21wb25lbnRzL0luc2lnaHRzRmVhdXR1cmVkJztcbmltcG9ydCB7IEluc2lnaHRzQXJ0aWNsZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL0luc2lnaHRzQXJ0aWNsZXMnO1xuaW1wb3J0IHsgSW5zaWdodHNBc3Nlc3MgfSBmcm9tICcuLi9jb21wb25lbnRzL0luc2lnaHRzQXNzZXNzJztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG5cbmltcG9ydCBzdG9wX2JhbmcgZnJvbSAnLi4vaW1hZ2VzL3N0b3AtYmFuZy5wbmcnO1xuaW1wb3J0IHN0b3BfYmFuZ18yeCBmcm9tICcuLi9pbWFnZXMvc3RvcC1iYW5nQDJ4LnBuZyc7XG5pbXBvcnQgc2NyZWVuaW5nIGZyb20gJy4uL2ltYWdlcy9zY3JlZW5pbmcucG5nJztcbmltcG9ydCBzY3JlZW5pbmdfMnggZnJvbSAnLi4vaW1hZ2VzL3NjcmVlbmluZ0AyeC5wbmcnO1xuXG5jb25zdCBpbnNpZ2h0c0Fzc2Vzc0FydGljbGVzID0gW1xuICB7XG4gICAgdGl0bGU6ICdBbnN3ZXIgdGhlIFN0b3AtQkFORyBRdWVzdGlvbm5haXJlJyxcbiAgICBsaW5rOiAnL3N0b3BiYW5nJyxcbiAgICBpbWFnZTogeyAnMXgnOiBzdG9wX2JhbmcsICcyeCc6IHN0b3BfYmFuZ18yeCB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTY3JlZW5pbmcgZG9yIFNsZWVwIEFwbmVhOiBFcHdvcnRoIFNsZWVwaW5lc3MgU2NhbGUnLFxuICAgIGxpbms6ICcvZXB3b3J0aCcsXG4gICAgaW1hZ2U6IHsgJzF4Jzogc2NyZWVuaW5nLCAnMngnOiBzY3JlZW5pbmdfMnggfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBJbnNpZ2h0cyA9ICgpID0+IHtcbiAgY29uc3QgdGFnc0NvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdGFnQWxsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZWFyY2hJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRQb3N0cywgc2V0Q3VycmVudFBvc3RzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGFnc0Fyciwgc2V0VGFnc0Fycl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjdGl2ZVRhZywgc2V0QWN0aXZlVGFnXSA9IHVzZVN0YXRlKHsgdGV4dDogJ2FsbCcsIGlkOiAxMTEgfSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGlzcGxheWVkU2VhcmNoUXVlcnksIHNldERpc3BsYXllZFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50U2x1Zywgc2V0Q3VycmVudFNsdWddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgcG9zdHMgPSB1c2VGZXRjaChcbiAgICAnaHR0cHM6Ly9zbm9yZWxhYi51eC1taW5kLnByby93cC1qc29uL3dwL3YyL3Bvc3RzP3Blcl9wYWdlPTEwMCcsXG4gICAge31cbiAgKTtcbiAgY29uc3QgdGFncyA9IHVzZUZldGNoKCdodHRwczovL3Nub3JlbGFiLnV4LW1pbmQucHJvL3dwLWpzb24vd3AvdjIvY2F0ZWdvcmllcz9wZXJfcGFnZT0xMDAnLCB7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRQb3N0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlVGFnLmlkID09PSAxMTEpIHtcbiAgICAgIGlmICghc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgc2V0Q3VycmVudFBvc3RzKHBvc3RzLmRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkUG9zdHMgPSBwb3N0cy5kYXRhLmZpbHRlcigocG9zdCkgPT4ge1xuICAgICAgcmV0dXJuIHBvc3QuY2F0ZWdvcmllcy5pbmRleE9mKGFjdGl2ZVRhZy5pZCkgPj0gMDtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXIgcG9zdHMnKVxuXG4gICAgc2V0Q3VycmVudFBvc3RzKGZpbHRlcmVkUG9zdHMpO1xuICB9LCBbYWN0aXZlVGFnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGFncy5kYXRhKSB7XG4gICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgICBjb25zdCBhbGxUYWdzID0gdGFncy5kYXRhLmNvbmNhdCgpO1xuXG4gICAgICBhbGxUYWdzLnJldmVyc2UoKS5wdXNoKHsgaWQ6IDExMSwgbmFtZTogJ0FsbCcgfSk7XG4gICAgICBhbGxUYWdzLnJldmVyc2UoKTtcblxuICAgICAgc2V0VGFnc0FycihhbGxUYWdzKTtcblxuICAgICAgaWYgKGN1cnJlbnRQYXRoLmluY2x1ZGVzKCc/Y2F0ZWdvcnk9JykpIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRQYXRoID0gY3VycmVudFBhdGguc3BsaXQoJz9jYXRlZ29yeT0nKS5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IHNsdWcgPSByZXZlcnNlZFBhdGhbMF0gPT09ICcnID8gcmV2ZXJzZWRQYXRoWzFdIDogcmV2ZXJzZWRQYXRoWzBdO1xuICAgICAgICBjb25zdCB0YWcgPSB0YWdzLmRhdGEuZmluZCh0YWcgPT4gdGFnLnNsdWcgPT09IHNsdWcpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHRleHQ6IHRhZy5uYW1lLCBpZDogdGFnLmlkIH0pO1xuICAgICAgICBzZXRBY3RpdmVUYWcoeyB0ZXh0OiB0YWcubmFtZSwgaWQ6IHRhZy5pZCB9KTtcbiAgICAgICAgc2V0Q3VycmVudFNsdWcoc2x1Zyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbdGFncy5kYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocG9zdHMuZGF0YSkge1xuICAgICAgaWYgKGFjdGl2ZVRhZyAmJiBhY3RpdmVUYWcudGV4dCAhPT0gJ2FsbCcpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IHBvc3RzLmRhdGEuZmlsdGVyKChwb3N0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvc3QuY2F0ZWdvcmllcy5pbmRleE9mKGFjdGl2ZVRhZy5pZCkgPj0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlciBwb3N0cycpXG5cbiAgICAgICAgc2V0Q3VycmVudFBvc3RzKGZpbHRlcmVkUG9zdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q3VycmVudFBvc3RzKHBvc3RzLmRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFnKVxuICAgIH1cbiAgfSwgW3Bvc3RzLmRhdGFdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWN1cnJlbnRQb3N0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVkUG9zdHMgPSBwb3N0cy5kYXRhLmZpbHRlcigocG9zdCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUNoZWNrID0gcG9zdC50aXRsZS5yZW5kZXJlZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBjb25zdCBleGNlcnB0Q2hlY2sgPSBwb3N0LmV4Y2VycHQucmVuZGVyZWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgcmV0dXJuICh0aXRsZUNoZWNrIHx8IGV4Y2VycHRDaGVjayk7XG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRQb3N0cyhzZWFyY2hlZFBvc3RzKTtcbiAgICAgIHNldERpc3BsYXllZFNlYXJjaFF1ZXJ5KHNlYXJjaFF1ZXJ5KTtcbiAgICAgIHNldElzU2VhcmNoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc1NlYXJjaChmYWxzZSk7XG4gICAgICBzZXRDdXJyZW50UG9zdHMocG9zdHMuZGF0YSk7XG4gICAgICBpZiAoIWlzU2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBBcnJheS5mcm9tKHRhZ3NDb250YWluZXJSZWYuY3VycmVudC5jaGlsZHJlbik7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndGFicy1idG5fYWN0aXZlJykpO1xuICAgICAgICB0YWdBbGxSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0YWJzLWJ0bl9hY3RpdmUnKTtcbiAgICAgICAgc2V0QWN0aXZlVGFnKHsgdGV4dDogJ2FsbCcsIGlkOiAxMTEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmFja0J1dHRvbkNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0QWN0aXZlVGFnKHsgdGV4dDogJ2FsbCcsIGlkOiAxMTEgfSk7XG4gICAgc2V0U2VhcmNoUXVlcnkoJycpO1xuICAgIHNldElzU2VhcmNoKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50UG9zdHMocG9zdHMuZGF0YSk7XG4gICAgaWYgKCFpc1NlYXJjaCkge1xuICAgICAgY29uc3QgdGFicyA9IEFycmF5LmZyb20odGFnc0NvbnRhaW5lclJlZi5jdXJyZW50LmNoaWxkcmVuKTtcbiAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndGFicy1idG5fYWN0aXZlJykpO1xuICAgICAgdGFnQWxsUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGFicy1idG5fYWN0aXZlJyk7XG4gICAgICBzZXRBY3RpdmVUYWcoeyB0ZXh0OiAnYWxsJywgaWQ6IDExMSB9KTtcbiAgICB9XG4gICAgc2VhcmNoSW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaW5zaWdodHNcIj5cbiAgICAgIHshaXNTZWFyY2ggP1xuICAgICAgPEluc2lnaHRzVGFic1xuICAgICAgICB0YWdBbGxSZWY9e3RhZ0FsbFJlZn1cbiAgICAgICAgdGFnc0NvbnRhaW5lclJlZj17dGFnc0NvbnRhaW5lclJlZn1cbiAgICAgICAgdGFncz17eyBzdGF0ZTogdGFnc0FyciwgdXBkYXRlOiBzZXRUYWdzQXJyIH19XG4gICAgICAgIGFjdGl2ZVRhZz17eyBzdGF0ZTogYWN0aXZlVGFnLCB1cGRhdGU6IHNldEFjdGl2ZVRhZyB9fVxuICAgICAgICBjdXJyZW50U2x1Zz17Y3VycmVudFNsdWd9XG4gICAgICAvPiA6ICcnfVxuICAgICAgeyhhY3RpdmVUYWcudGV4dCA9PT0gJ2FsbCcgJiYgIWlzU2VhcmNoKSA/IDxJbnNpZ2h0c0ZlYXV0dXJlZCAvPiA6ICcnfVxuICAgICAgPEluc2lnaHRzQXJ0aWNsZXNcbiAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICBkaXNwbGF5ZWRTZWFyY2hRdWVyeT17ZGlzcGxheWVkU2VhcmNoUXVlcnl9XG4gICAgICAgIGlzU2VhcmNoPXtpc1NlYXJjaH1cbiAgICAgICAgc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fVxuICAgICAgICBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgcG9zdHM9e3sgc3RhdGU6IGN1cnJlbnRQb3N0cywgdXBkYXRlOiBzZXRDdXJyZW50UG9zdHMgfX1cbiAgICAgICAgdGFncz17eyBzdGF0ZTogdGFncyB9fVxuICAgICAgICBhY3RpdmVUYWc9e3sgc3RhdGU6IGFjdGl2ZVRhZywgdXBkYXRlOiBzZXRBY3RpdmVUYWcgfX1cbiAgICAgICAgaGFuZGxlQmFja0J1dHRvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9XG4gICAgICAgIHNlYXJjaElucHV0UmVmPXtzZWFyY2hJbnB1dFJlZn1cbiAgICAgIC8+XG4gICAgICA8SW5zaWdodHNBc3Nlc3NcbiAgICAgICAgbGlnaHQ9e3RydWV9XG4gICAgICAgIHRpdGxlQ2xhc3M9XCJ0aXRsZV9zaXplLWxcIlxuICAgICAgICB0aXRsZVRleHQ9XCJBc3Nlc3MgeW91ciBzbGVlcCBhcG5lYSByaXNrXCJcbiAgICAgICAgYXJ0aWNsZXM9e2luc2lnaHRzQXNzZXNzQXJ0aWNsZXN9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgUHJpdmFjeVBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1ByaXZhY3lQYWdlJztcblxuZXhwb3J0IGNvbnN0IFByaXZhY3kgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwicHJpdmFjeVwiPlxuXHRcdFx0PFByaXZhY3lQYWdlIC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcbiIsImNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHVzZVBvc3QgZnJvbSAnLi4vaG9va3MvdXNlUG9zdCc7XG5pbXBvcnQgeyBQcm9kdWN0TWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdE1haW4nO1xuaW1wb3J0IHsgUHJvZHVjdE5vdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3ROb3RlJztcbmltcG9ydCB7IFByb2R1Y3RJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0SW5mbyc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFJldmlld3MnO1xuaW1wb3J0IHsgUHJvZHVjdFJlbWVkaWVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0UmVtZWRpZXMnO1xuaW1wb3J0IHsgUHJvZHVjdEZ1bGxSZXZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RGdWxsUmV2aWV3JztcbmltcG9ydCB7IFByb2R1Y3RCb3R0b20gfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RCb3R0b20nO1xuaW1wb3J0IGxvYWRlciBmcm9tICcuLi9pbWFnZXMvbG9hZGVyLmdpZic7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFBhdGgsIHNldEN1cnJlbnRQYXRoXSA9IHVzZVN0YXRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgY29uc3QgW2N1cnJlbnRTbHVnLCBzZXRDdXJyZW50U2x1Z10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBwcm9kdWN0ID0gdXNlUG9zdChcbiAgICAnaHR0cHM6Ly9zbm9yZWxhYi51eC1taW5kLnByby93cC1qc29uL3dwL3YyL3Byb2R1Y3RzP3Blcl9wYWdlPTEwMCcsXG4gICAgY3VycmVudFNsdWcsXG4gICAge31cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJldmVyc2VkUGF0aCA9IGN1cnJlbnRQYXRoLnNwbGl0KCcvJykucmV2ZXJzZSgpO1xuXG4gICAgY29uc3Qgc2x1ZyA9IHJldmVyc2VkUGF0aFswXSA9PT0gJycgPyByZXZlcnNlZFBhdGhbMV0gOiByZXZlcnNlZFBhdGhbMF07XG5cbiAgICBjb25zb2xlLmxvZyhzbHVnKTtcblxuICAgIHNldEN1cnJlbnRTbHVnKHNsdWcpO1xuICB9LCBbY3VycmVudFBhdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2R1Y3QtcGFnZVwiPlxuICAgICAge3Byb2R1Y3QuZGF0YSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxQcm9kdWN0TWFpbiBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICA8UHJvZHVjdE5vdGUgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgPFByb2R1Y3RJbmZvIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgIHtwcm9kdWN0LmRhdGEuYWNmLnByb2R1Y3RfcmV2aWV3c19pdGVtcyA/XG4gICAgICAgIDxQcm9kdWN0UmV2aWV3cyBwcm9kdWN0PXtwcm9kdWN0fSAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgPFByb2R1Y3RSZW1lZGllcyBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICA8UHJvZHVjdEZ1bGxSZXZpZXcgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgPFByb2R1Y3RCb3R0b20gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImluc2lnaHQtbG9hZGVyXCIgYWx0PVwiXCIgc3JjPXtsb2FkZXJ9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0LWxvYWRlci10aXRsZVwiPkxvYWRpbmcuLi48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IFJldmlld3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZXZpZXdzUGFnZSc7XG5cbmV4cG9ydCBjb25zdCBSZXZpZXdzID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cInJldmlld3NcIj5cblx0XHRcdDxSZXZpZXdzUGFnZSAvPlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IFNob3BQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wUGFnZSc7XG5cbmV4cG9ydCBjb25zdCBTaG9wID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInNob3BcIj5cbiAgICAgIDxTaG9wUGFnZSAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iLCIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCB7IFN0b3BCYW5nUXVlc3Rpb25uYWlyZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcEJhbmdRdWVzdGlvbm5haXJlJztcbmltcG9ydCB7IHNoYXJlUXVlc3Rpb25uYWlyZUxpbmtzIH0gZnJvbSAnLi4vaGVscGVycy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlJztcbmltcG9ydCB7IEluc2lnaHRzQXNzZXNzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnNpZ2h0c0Fzc2Vzcyc7XG5cbmltcG9ydCBzdG9wX2JhbmcgZnJvbSAnLi4vaW1hZ2VzL3N0b3AtYmFuZy5wbmcnO1xuaW1wb3J0IHN0b3BfYmFuZ18yeCBmcm9tICcuLi9pbWFnZXMvc3RvcC1iYW5nQDJ4LnBuZyc7XG5pbXBvcnQgc2NyZWVuaW5nIGZyb20gJy4uL2ltYWdlcy9zY3JlZW5pbmcucG5nJztcbmltcG9ydCBzY3JlZW5pbmdfMnggZnJvbSAnLi4vaW1hZ2VzL3NjcmVlbmluZ0AyeC5wbmcnO1xuXG5jb25zdCBxdWVzdGlvbm5haXJlQXJ0aWNsZXMgPSBbXG5cdHtcblx0XHR0aXRsZTogJ1NsZWVwIEFwbmVhOiBTY3JlZW5pbmcsIFRlc3RpbmcgYW5kIFRyZWF0bWVudCcsXG5cdFx0bGluazogJ3N0b3BiYW5nJyxcblx0XHRpbWFnZTogeyAnMXgnOiBzY3JlZW5pbmcsICcyeCc6IHNjcmVlbmluZ18yeCB9XG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1doYXQgaXMgU2xlZXAgQXBuZWE/Jyxcblx0XHRsaW5rOiAnc3RvcGJhbmcnLFxuXHRcdGltYWdlOiB7ICcxeCc6IHN0b3BfYmFuZywgJzJ4Jzogc3RvcF9iYW5nXzJ4IH1cblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IFN0b3BCYW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cInN0b3AtYmFuZ1wiPlxuXHRcdFx0PFN0b3BCYW5nUXVlc3Rpb25uYWlyZSAvPlxuXHRcdFx0PFNoYXJlIHRpdGxlPVwiU2hhcmVcIiBsaW5rcz17c2hhcmVRdWVzdGlvbm5haXJlTGlua3N9IC8+XG5cdFx0XHQ8SW5zaWdodHNBc3Nlc3Ncblx0XHRcdFx0bGlnaHQ9e2ZhbHNlfVxuXHRcdFx0XHR0aXRsZUNsYXNzPVwidGl0bGVfZmFkZS1zXCJcblx0XHRcdFx0dGl0bGVUZXh0PXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSA/ICdMZWFybiBtb3JlIGFib3V0IG9ic3RydWN0aXZlIHNsZWVwIGFwbmVhJyA6ICdSZWxhdGVkIGFydGljbGVzJ31cblx0XHRcdFx0YXJ0aWNsZXM9e3F1ZXN0aW9ubmFpcmVBcnRpY2xlc31cblx0XHRcdC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgU3VjY2Vzc1N0b3JpZXNNYWluIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWNjZXNzU3Rvcmllc01haW4nO1xuaW1wb3J0IHsgU3VjY2Vzc1N0b3JpZXNCb3R0b20gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1Y2Nlc3NTdG9yaWVzQm90dG9tJztcblxuZXhwb3J0IGNvbnN0IFN1Y2Nlc3NTdG9yaWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInN1Y2Nlc3Mtc3Rvcmllc1wiPlxuICAgICAgPFN1Y2Nlc3NTdG9yaWVzTWFpbiAvPlxuICAgICAgPFN1Y2Nlc3NTdG9yaWVzQm90dG9tIC8+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IHsgVGVybXNQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9UZXJtc1BhZ2UnO1xuXG5leHBvcnQgY29uc3QgVGVybXMgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwidGVybXNcIj5cblx0XHRcdDxUZXJtc1BhZ2UgLz5cblx0XHQ8L21haW4+XG5cdCk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Ib21lJztcbmV4cG9ydCAqIGZyb20gJy4vSG93V29ya3MnO1xuZXhwb3J0ICogZnJvbSAnLi9TdWNjZXNzU3Rvcmllcyc7XG5leHBvcnQgKiBmcm9tICcuL1Jldmlld3MnO1xuZXhwb3J0ICogZnJvbSAnLi9JbnNpZ2h0cyc7XG5leHBvcnQgKiBmcm9tICcuL0luc2lnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9TdG9wQmFuZyc7XG5leHBvcnQgKiBmcm9tICcuL0Vwd29ydGgnO1xuZXhwb3J0ICogZnJvbSAnLi9GYXEnO1xuZXhwb3J0ICogZnJvbSAnLi9Db250YWN0JztcbmV4cG9ydCAqIGZyb20gJy4vQWJvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9Qcml2YWN5JztcbmV4cG9ydCAqIGZyb20gJy4vVGVybXMnO1xuZXhwb3J0ICogZnJvbSAnLi9DYXJlZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vU2hvcCc7XG5leHBvcnQgKiBmcm9tICcuL1Byb2R1Y3QnO1xuIiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYmU0NTYxNjZlYTNhNTQ1MmRjZjhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkZvb3RlciIsIkhvbWUiLCJIb3dXb3JrcyIsIlN1Y2Nlc3NTdG9yaWVzIiwiUmV2aWV3cyIsIkluc2lnaHRzIiwiSW5zaWdodCIsIlN0b3BCYW5nIiwiRXB3b3J0aCIsIkZhcSIsIkNvbnRhY3QiLCJBYm91dCIsIlByaXZhY3kiLCJUZXJtcyIsIkNhcmVlcnMiLCJCb29rcyIsIlNob3AiLCJQcm9kdWN0IiwiUEFHRVMiLCJyZW5kZXJQYWdlRWxlbWVudCIsImVsIiwiUGFnZSIsImlkIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhc2V0IiwiQXBwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJ3cCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQWJvdXRQYWdlIiwiQWNjb3JkaW9uIiwidGl0bGUiLCJlbGVtZW50cyIsImhhbmRsZUFjY29yZGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm1hcCIsImZhcV9pdGVtX3RpdGxlIiwiZXZ0IiwiZmFxX2l0ZW1faW1hZ2UiLCJ1cmwiLCJmYXFfaXRlbV9pbWFnZV8yeCIsIl9faHRtbCIsImZhcV9pdGVtX2NvbnRlbnQiLCJmb3J3YXJkUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwYXBlcnBsYW5lIiwiYXhpb3MiLCJsb2FkZXIiLCJDYXJlZXJzRm9ybSIsInJlZiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInJlc3VtZSIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwicmVzdW1lRmlsZSIsInNldFJlc3VtZUZpbGUiLCJyZXN1bWVGaWxlTmFtZSIsInNldFJlc3VtZUZpbGVOYW1lIiwiZmlsZVByb2dyZXNzIiwic2V0RmlsZVByb2dyZXNzIiwicHJvZ3Jlc3NBY3RpdmUiLCJzZXRQcm9ncmVzc0FjdGl2ZSIsInVwbG9hZElucHV0UmVmIiwiY2FyZWVyc01vZGFsTWVzc2FnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZm9ybVZhbHVlc0tleSIsInByZXYiLCJuZXdGb3JtVmFsdWVzIiwidmFsdWUiLCJoYW5kbGVGaWxlVXBsb2FkIiwidXBsb2FkTGFiZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlTmFtZSIsInNwbGl0IiwicG9wIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInJlbW92ZSIsImFwcGVuZCIsInJlcyIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwib25VcGxvYWRQcm9ncmVzcyIsInAiLCJsb2FkZWQiLCJ0b3RhbCIsIk1hdGgiLCJyb3VuZCIsInRoZW4iLCJzZXRUaW1lb3V0IiwiYWRkIiwic3RhdHVzIiwiaGFuZGxlRmlsZURlbGV0ZSIsInVwbG9hZElucHV0IiwiY3VycmVudCIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrZXIiLCJlcnJvclN1Ym1pdCIsImtleXMiLCJrZXkiLCJuZXdGb3JtRXJyb3JzIiwidGVzdCIsImluZGV4T2YiLCJmZXRjaCIsImJvZHkiLCJhbGVydCIsImhhbmRsZU1vZGFsQ2xvc2UiLCJkaXNwbGF5IiwiY3VycmVudEpvYnNBcnIiLCJDYXJlZXJzUGFnZSIsImpvYiIsIkNvbnRhY3RQYWdlIiwidXNlRmV0Y2giLCJRdWVzdGlvbm5haXJlIiwiRXB3b3J0aFF1ZXN0aW9ubmFpcmUiLCJlcHdvcnRoIiwicmVzdWx0TnVtYmVyIiwic2V0UmVzdWx0TnVtYmVyIiwic2x1ZyIsIkZhcVBhZ2UiLCJmYXFFbGVtZW50cyIsImFjZiIsImZhcV9zZWN0aW9ucyIsImZhcV9zZWN0aW9uX3RpdGxlIiwiZmFxX3NlY3Rpb25faXRlbXMiLCJsb2dvIiwiRm9vdGVyTmF2aWdhdGlvbiIsImZvb3RlckxpbmtzIiwic3VwcG9ydCIsImxpbmsiLCJ0ZXh0IiwiY29tcGFueSIsImNyZWF0ZVJlZiIsIk1vYmlsZU1lbnUiLCJuYXZpZ2F0aW9uTGlua3MiLCJtZW51RWxlbWVudFJlZiIsImhhbmRsZU1lbnVDbGljayIsIm1lbnVCdG4iLCJjbG9zZXN0IiwibWVudUVsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJMYXp5TG9hZEltYWdlIiwicGhvbmVfMyIsInBob25lXzNfMngiLCJzdGFyMyIsInN0YXI0Iiwic3RhcjUiLCJIb21lRGVzY3JpcHRpb24iLCJjYXJkcyIsImNhcmQiLCJkZXNjcmlwdGlvbl9jYXJkX2ljb24iLCJkZXNjcmlwdGlvbl9jYXJkX3RpdGxlIiwiZGVzY3JpcHRpb25fY2FyZF90ZXh0IiwiaG9tZUluc2lnaHRzIiwiZWxsaXBzZSIsIkhvbWVJbnNpZ2h0cyIsInBhZ2VJbnNpZ2h0cyIsInBvc3RzIiwidGFncyIsImlkcyIsImhvbWVfcGFnZV9pbnNpZ2h0cyIsImluc2lnaHQiLCJob21lX3BhZ2VfaW5zaWdodCIsIklEIiwiZmlsdGVyZWRQb3N0cyIsImZpbmQiLCJwb3N0IiwiaSIsImNhdGVnb3JpZXMiLCJ0YWciLCJhcnIiLCJ0YWdEYXRhIiwiaXRlbSIsImxlbmd0aCIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImJhY2tncm91bmQiLCJmaW1nX3VybCIsImJhY2tncm91bmRTaXplIiwic3F1YXJlTG9nbyIsInNxdWFyZUxvZ29fMngiLCJwaG9uZV8xIiwicGhvbmVfMV8yeCIsInBob25lXzIiLCJwaG9uZV8yXzJ4Iiwic3RhcjIiLCJIb21lTWFpbiIsInVzZUVmZmVjdCIsIm1lbW8iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlN3aXBlckNvcmUiLCJQYWdpbmF0aW9uIiwiY2FsY3VsYXRlU2xpZGVzUGVyVmlldyIsInVzZSIsIkhvbWVSZXZpZXdzIiwic2xpZGVzUGVyVmlldyIsInNldFNsaWRlc1BlclZpZXciLCJyZXZpZXdzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlc0NvdW50Iiwic3dpcGVyIiwiY2xpY2thYmxlIiwicmV2aWV3Iiwic3RhcnNDb3VudCIsInJldmlld19zdGFycyIsInN0YXJzQXJyIiwicHVzaCIsInN0YXIiLCJyZXZpZXdfdGV4dCIsInJldmlld19pY29uX3gxIiwiRnJhZ21lbnQiLCJIb3dXb3Jrc0JvdHRvbSIsImlzUG9zdEhlbHBmdWwiLCJzZXRJc1Bvc3RIZWxwZnVsIiwic3RvcmFnZUtleSIsImxhc3RWb3RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZVllc0NsaWNrIiwic2V0SXRlbSIsImhhbmRsZU5vQ2xpY2siLCJoYW5kbGVDYW5jZWxDbGljayIsInJlbW92ZUl0ZW0iLCJkYXNoYm9hcmQiLCJkYXNoYm9hcmRfMngiLCJhdWRpbyIsImF1ZGlvXzJ4IiwiSG93V29ya3NNYWluIiwiZGVsYXkiLCJkZWxheV8yeCIsInNvdW5kc2NhcGUiLCJzb3VuZHNjYXBlXzJ4IiwiYWxhcm0iLCJhbGFybV8yeCIsIkhvd1dvcmtzTWFrZSIsIm1vY2t1cCIsIm1vY2t1cF8yeCIsImJlZF90aW1lIiwiYmVkX3RpbWVfMngiLCJIb3dXb3Jrc05vdGVzIiwic2NvcmUiLCJzY29yZV8yeCIsIm1fc2NvcmUiLCJtX3Njb3JlXzJ4IiwibV9hdWRpbyIsIm1fYXVkaW9fMngiLCJIb3dXb3Jrc1NlZSIsImZhY3RvcnMiLCJmYWN0b3JzXzJ4IiwiY3JlYXRlUmVtZWRpZXMiLCJjcmVhdGVSZW1lZGllc18yeCIsIkhvd1dvcmtzU2VsZWN0IiwicmVjb3JkIiwicmVjb3JkXzJ4IiwicGF1c2UiLCJwYXVzZV8yeCIsInNsaWRlX2J0biIsInNsaWRlX2J0bl8yeCIsIm1fc2xpZGVfYnRuIiwibV9zbGlkZV9idG5fMngiLCJyYXRpbmciLCJyYXRpbmdfMngiLCJIb3dXb3Jrc1NsZWVwIiwic3RhcnQiLCJzdGFydF8yeCIsInBsYWNlbWVudCIsInBsYWNlbWVudF8yeCIsIm1fc3RhcnQiLCJtX3N0YXJ0XzJ4IiwiSG93V29ya3NTdGFydCIsIkluc2lnaHRTZWN0aW9uIiwiaW5zaWdodF8zIiwiaW5zaWdodF8zXzJ4IiwiaW5zaWdodF80IiwiaW5zaWdodF80XzJ4IiwibV9pbnNpZ2h0XzMiLCJtX2luc2lnaHRfM18yeCIsIm1faW5zaWdodF80IiwibV9pbnNpZ2h0XzRfMngiLCJJbnNpZ2h0QWR2aWNlIiwiZ29vZ2xlUGxheSIsImFwcFN0b3JlIiwiSW5zaWdodERvd25sb2FkIiwiUHJvZHVjdEJvdHRvbSIsInByb2R1Y3QiLCJib3R0b21fdGl0bGUiLCJib3R0b21fYnV0dG9uX2xpbmsiLCJib3R0b21fYnV0dG9uX3RleHQiLCJ1c2VQb3N0IiwibW91dGhwaWVjZSIsIlByb2R1Y3RGdWxsUmV2aWV3IiwicHJvZHVjdF9mdWxsX3Jldmlld19wb3N0IiwicG9zdF9uYW1lIiwicHJvZHVjdF9mdWxsX3Jldmlld190aXRsZSIsIlByb2R1Y3RJbmZvIiwicHJvZHVjdF9pbmZvX3RleHQiLCJwcm9kdWN0X2luZm9faXRlbXMiLCJwcm9kdWN0X2luZm9faXRlbV90aXRsZSIsInByb2R1Y3RfaW5mb19pdGVtX3RleHQiLCJtYWluX2ltZyIsIlByb2R1Y3RNYWluIiwicHJvZHVjdF9nYWxsZXJ5IiwicHJvZHVjdF9nYWxsZXJ5X2ltYWdlIiwibWFpbkltZyIsInNldE1haW5JbWciLCJhY3RpdmVJbWciLCJzZXRBY3RpdmVJbWciLCJoYW5kbGVJbWFnZUNsaWNrIiwibnVtYmVyIiwiTnVtYmVyIiwicmV2ZXJzZSIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZSIsImlkeCIsImJhY2tncm91bmRQb3NpdGlvbiIsInByb2R1Y3RfcHJldmlld19pY29ucyIsImljb24iLCJwcm9kdWN0X3ByZXZpZXdfaWNvbiIsInByb2R1Y3RfdG9wX3RleHQiLCJwcm9kdWN0X3ByaWNlIiwicHJvZHVjdF9kaXNjb3VudF90ZXh0IiwicHJvZHVjdF9idXlfYnV0dG9uX2xpbmsiLCJwcm9kdWN0X2J1eV9idXR0b25fdGV4dCIsIm1vdXRoIiwibGlwcyIsInJlbWVkaWVzIiwiUHJvZHVjdFJlbWVkaWVzIiwicHJvZHVjdF9yZW1lZGllc190aXRsZSIsInByb2R1Y3RfcmVtZWRpZXNfaWNvbnMiLCJwcm9kdWN0X3JlbWVkaWVzX2ljb24iLCJQcm9kdWN0UmV2aWV3cyIsInByb2R1Y3RfcmV2aWV3c19pdGVtcyIsInByb2R1Y3RfcmV2aWV3X3RpdGxlIiwiQXJyYXkiLCJwcm9kdWN0X3Jldmlld19zdGFycyIsIngiLCJwcm9kdWN0X3Jldmlld190ZXh0IiwicHJvZHVjdF9yZXZpZXdfYXV0aG9yIiwiU3VjY2Vzc1N0b3JpZXNCb3R0b20iLCJTdWNjZXNzU3Rvcmllc01haW4iLCJibG9ja2VyUmVmIiwic2hhcmVRdWVzdGlvbm5haXJlTGlua3MiLCJTaGFyZSIsIkluc2lnaHRzQXNzZXNzIiwic3RvcF9iYW5nIiwic3RvcF9iYW5nXzJ4Iiwic2NyZWVuaW5nIiwic2NyZWVuaW5nXzJ4IiwicXVlc3Rpb25uYWlyZUFydGljbGVzIiwiaW5uZXJXaWR0aCIsIlBhcnRuZXJBcHAiLCJkZXNjcmlwdGlvbkNhcmRzIiwiYXBwQ2FyZHMiLCJob21lRGF0YSIsImRlc2NyaXB0aW9uX2NhcmRzIiwicGFydG5lcl9kZXNjcmlwdGlvbl9jYXJkcyIsIkluc2lnaHRNYWluIiwiSW5zaWdodFN0dWRpZXMiLCJJbnNpZ2h0UmV2aWV3IiwiUmVmZXJlbmNlcyIsInNoYXJlSW5zaWdodExpbmtzIiwiSW5zaWdodHNSZWxhdGl2ZSIsImNhbGN1bGF0ZVRleHRXaWR0aCIsInBhcnNlIiwibG9jYXRpb24iLCJocmVmIiwiY3VycmVudFBhdGgiLCJzZXRDdXJyZW50UGF0aCIsImN1cnJlbnRTbHVnIiwic2V0Q3VycmVudFNsdWciLCJjdXJyZW50VGFncyIsInNldEN1cnJlbnRUYWdzIiwic2V0TG9hZGVkIiwicmV2ZXJzZWRQYXRoIiwib25yZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGVudCIsInBvc3RfcmVmZXJlbmNlcyIsInJlbGF0ZWRfYXJ0aWNsZXMiLCJJbnNpZ2h0c1RhYnMiLCJJbnNpZ2h0c0ZlYXV0dXJlZCIsIkluc2lnaHRzQXJ0aWNsZXMiLCJpbnNpZ2h0c0Fzc2Vzc0FydGljbGVzIiwidGFnc0NvbnRhaW5lclJlZiIsInRhZ0FsbFJlZiIsInNlYXJjaElucHV0UmVmIiwiY3VycmVudFBvc3RzIiwic2V0Q3VycmVudFBvc3RzIiwidGFnc0FyciIsInNldFRhZ3NBcnIiLCJhY3RpdmVUYWciLCJzZXRBY3RpdmVUYWciLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZGlzcGxheWVkU2VhcmNoUXVlcnkiLCJzZXREaXNwbGF5ZWRTZWFyY2hRdWVyeSIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJmaWx0ZXIiLCJhbGxUYWdzIiwiY29uY2F0IiwiaW5jbHVkZXMiLCJoYW5kbGVTZWFyY2giLCJzZWFyY2hlZFBvc3RzIiwidGl0bGVDaGVjayIsInRvTG93ZXJDYXNlIiwiZXhjZXJwdENoZWNrIiwidGFicyIsImZyb20iLCJjaGlsZHJlbiIsImZvckVhY2giLCJ0YWIiLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJzY3JvbGxUbyIsInN0YXRlIiwidXBkYXRlIiwiUHJpdmFjeVBhZ2UiLCJQcm9kdWN0Tm90ZSIsIlJldmlld3NQYWdlIiwiU2hvcFBhZ2UiLCJTdG9wQmFuZ1F1ZXN0aW9ubmFpcmUiLCJUZXJtc1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9