(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{617:function(t,r,e){"use strict";e.r(r);var o=e(4),n=(e(27),e(9),{layout:"auth",scrollToTop:!0,middleware:"userAlreadyAuth",data:function(){var t=this;return{forgotPasswordFormRules:{mobile:[{required:!0,message:"Please enter mobile number",trigger:"blur"}],new_password:[{required:!0,message:"Password is required"},{validator:function(r,e,o){""===e?o(new Error("Please input the password")):(""!==t.forgotPasswordForm.confirm_password&&t.$refs.forgotPasswordForm.validateField("confirm_password"),o())},trigger:"blur"}],confirm_password:[{required:!0,message:"Confirm Password is required"},{validator:function(r,e,o){""===e?o(new Error("Please input the password again")):e!==t.forgotPasswordForm.new_password?o(new Error("Confirm Password don't match!")):o()},trigger:"blur"}],otp:[{required:!0,message:"otp is required",trigger:"blur"}]},isHidden:!1,forgotPasswordForm:{}}},methods:{sendOtp:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$formCheck("forgotPasswordForm");case 2:if(!r.sent){r.next=8;break}return r.next=6,t.$postApi("/api/v1/forgot-password-send-otp",t.forgotPasswordForm);case 6:(e=r.sent).code&&200==e.code?(t.isHidden=!0,t.$showNoti("success",e.msg)):t.$showNoti("error",e.msg);case 8:case"end":return r.stop()}}),r)})))()},changePassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$formCheck("forgotPasswordForm");case 2:if(!r.sent){r.next=8;break}return r.next=6,t.$postApi("/api/v1/setnew-password",t.forgotPasswordForm);case 6:(e=r.sent).code&&200==e.code?(t.$showNoti("success",e.msg),t.$router.push("login")):t.$showNoti("error",e.msg);case 8:case"end":return r.stop()}}),r)})))()}},mounted:function(){}}),l=e(10),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 login-page-left"},[e("div",{staticClass:"h-100 d-flex align-items-center justify-content-center"},[t._m(0),t._v(" "),e("div",{staticClass:"login-popup"},[e("div",{staticClass:"box"},[e("div",{staticClass:"form d-flex justify-content-center align-items-center"},[e("div",{staticClass:"close",attrs:{id:"popup-close"}},[t._v("×")]),t._v(" "),e("div",{},[e("h1",[t._v("Welcome")]),t._v(" "),e("img",{attrs:{src:"/"+t.$store.state.web_code+"/img/logo/logo.png",alt:"image",width:"170px"}}),t._v(" "),e("h6",{staticClass:"form_hd"},[t._v("2.0")]),t._v(" "),e("p",{staticClass:"form_pg"},[t._v("INDIA'S NO-1 Fintech Platform. !!")])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4 login-page-right"},[e("div",{staticClass:"\n            h-100\n            d-flex\n            align-items-center\n            justify-content-center\n            flex-column\n          "},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"lazyload",attrs:{src:"/"+t.$store.state.web_code+"/img/logo/logo.png",alt:"Logo"}})])],1),t._v(" "),e("h2",[t._v("Forgot Password")]),t._v(" "),e("el-form",{ref:"forgotPasswordForm",staticClass:"demo-dynamic login_form mt-4 w-75",attrs:{model:t.forgotPasswordForm,"label-width":"120px","label-position":"top",rules:t.forgotPasswordFormRules}},[t.isHidden?t._e():e("div",{staticClass:"mb-3"},[e("el-form-item",{attrs:{prop:"mobile",label:"Enter mobile Number"}},[e("el-input",{staticClass:"custom_feild",attrs:{placeholder:"Enter Registred mobile Number",maxlength:"10","show-word-limit":""},model:{value:t.forgotPasswordForm.mobile,callback:function(r){t.$set(t.forgotPasswordForm,"mobile",r)},expression:"forgotPasswordForm.mobile"}},[e("i",{staticClass:"ml_4 fa-phone fas font-size-13 mt-2",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1),t._v(" "),t.isHidden?e("div",{staticClass:"mb-3"},[e("el-form-item",{attrs:{prop:"new_password",label:"New password"}},[e("el-input",{staticClass:"custom_feild",attrs:{placeholder:"Enter new password","show-password":"",type:"p"},model:{value:t.forgotPasswordForm.new_password,callback:function(r){t.$set(t.forgotPasswordForm,"new_password",r)},expression:"forgotPasswordForm.new_password"}},[e("i",{staticClass:"ml_4 fa-edit fas font-size-13 mt-2",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1):t._e(),t._v(" "),t.isHidden?e("div",{staticClass:"mb-3"},[e("el-form-item",{attrs:{prop:"confirm_password",label:"Confirm Password"}},[e("el-input",{staticClass:"custom_feild",attrs:{placeholder:"Enter confirm password","show-password":"",type:"p"},model:{value:t.forgotPasswordForm.confirm_password,callback:function(r){t.$set(t.forgotPasswordForm,"confirm_password",r)},expression:"forgotPasswordForm.confirm_password"}},[e("i",{staticClass:"ml_4 fa-edit fas font-size-13 mt-2",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1):t._e(),t._v(" "),t.isHidden?e("div",{staticClass:"mb-3"},[e("el-form-item",{attrs:{label:"OTP",prop:"otp"}},[e("el-input",{staticClass:"custom_feild",attrs:{placeholder:"Please enter otp",clearable:"",maxlength:"4","show-word-limit":""},model:{value:t.forgotPasswordForm.otp,callback:function(r){t.$set(t.forgotPasswordForm,"otp",r)},expression:"forgotPasswordForm.otp"}},[e("i",{staticClass:"fas fa-phone font-size-13 mt-2",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1):t._e(),t._v(" "),e("el-form-item",{staticClass:"text-right mt-3"},[t.isHidden?t._e():e("el-button",{staticClass:"btn btn-primary w-100",attrs:{type:"primary"},on:{click:function(r){return t.sendOtp()}}},[t._v("Send OTP")])],1),t._v(" "),e("el-form-item",{staticClass:"text-right mt-3"},[t.isHidden?e("el-button",{staticClass:"btn btn-primary w-100",attrs:{type:"primary"},on:{click:function(r){return t.changePassword()}}},[t._v("Change Password")]):t._e()],1)],1)],1)])])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"loginText"},[e("h2",[t._v("Welcome To "),e("br"),e("span",[t._v("Money Care24")])]),t._v(" "),e("p",[t._v("2.0")]),t._v(" "),e("p",[t._v("INDIA'S NO-1 Fintech Platform. !!")])])}],!1,null,null,null);r.default=component.exports}}]);