(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{613:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(27),n(9)),l={components:{},layout:"default",scrollToTop:!0,data:function(){return{recharge_type:"prepaid",options:[],dynamicValidateForm:{}}},methods:{openWhatsApp:function(){var t=this.$store.state.settingData.social_detail.phone;if(t){var e="https://wa.me/".concat(t);window.open(e,"_blank")}},submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$formCheck("dynamicValidateForm");case 2:if(!e.sent){e.next=9;break}return n=o.a.clone(t.dynamicValidateForm),e.next=7,t.$postApi("/api/v1/inquiry/store",n);case 7:200==(r=e.sent).code?(t.$showNoti("success",r.msg),t.dynamicValidateForm={name:"",email:"",mobile_no:"",message:""}):t.$showNoti("error",r.msg);case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].resetFields();case 1:case"end":return n.stop()}}),n)})))()}},mounted:function(){triggerPageLoad()}},c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("div",{staticClass:"contact_info"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 offset-lg-1"},[n("div",{staticClass:"\n                contact_info_container\n                d-flex\n                flex-lg-row flex-column\n                justify-content-between\n                align-items-between\n              "},[n("div",{staticClass:"\n                  contact_info_item\n                  d-flex\n                  flex-row\n                  align-items-center\n                  justify-content-start\n                "},[t._m(0),t._v(" "),n("div",{staticClass:"contact_info_content"},[n("div",{staticClass:"contact_info_title"},[t._v("Phone")]),t._v(" "),n("div",{staticClass:"contact_info_text"},[t.$store.state.settingData&&t.$store.state.settingData.social_detail&&t.$store.state.settingData.social_detail.phone?n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openWhatsApp.apply(null,arguments)}}},[t._v("+91 "+t._s(t.$store.state.settingData.social_detail.phone))]):n("a",{attrs:{href:"https://wa.me/+918305316974"}},[t._v("+91 83053 16974")])])])]),t._v(" "),n("div",{staticClass:"\n                  contact_info_item\n                  d-flex\n                  flex-row\n                  align-items-center\n                  justify-content-start\n                "},[t._m(1),t._v(" "),n("div",{staticClass:"contact_info_content"},[n("div",{staticClass:"contact_info_title"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"contact_info_text"},[t.$store.state.settingData&&t.$store.state.settingData.social_detail&&t.$store.state.settingData.social_detail.email?n("a",{attrs:{href:"#"}},[t._v(t._s(t.$store.state.settingData.social_detail.email))]):n("a",{attrs:{href:"#"}},[t._v("info@moneycare24.com")])])])]),t._v(" "),t._m(2)])])])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"contact_form"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 offset-lg-1"},[n("div",{staticClass:"contact_form_container"},[n("div",{staticClass:"contact_form_title"},[t._v("Get in Touch")]),t._v(" "),n("el-form",{ref:"dynamicValidateForm",attrs:{model:t.dynamicValidateForm,"label-width":"120px","label-position":"left","aria-required":"true"}},[n("div",{staticClass:"row bkrow"},[n("div",{staticClass:"col-lg-12"},[n("div",[n("el-form-item",{attrs:{prop:"name",label:"Your name:",rules:[{required:!0,message:"Please enter name",trigger:"blur"}]}},[n("el-input",{attrs:{placeholder:"Your name",clearable:"","aria-required":"true"},model:{value:t.dynamicValidateForm.name,callback:function(e){t.$set(t.dynamicValidateForm,"name",e)},expression:"dynamicValidateForm.name"}})],1)],1),t._v(" "),n("div",[n("el-form-item",{attrs:{prop:"email",label:"Your email:",rules:[{required:!0,message:"Please enter your email",trigger:"blur"},{type:"email",message:"Please enter valid email",trigger:["blur","change"]}]}},[n("el-input",{attrs:{placeholder:"Your email",clearable:"","aria-required":"true"},model:{value:t.dynamicValidateForm.email,callback:function(e){t.$set(t.dynamicValidateForm,"email",e)},expression:"dynamicValidateForm.email"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"mobile_no",label:"Your phone number:",rules:[{required:!0,message:"Please enter Mobile number",trigger:"blur"}]}},[n("el-input",{attrs:{type:"mobile_no",maxlength:10,pattern:"[0-9]*",placeholder:"Enter Mobile No",clearable:""},model:{value:t.dynamicValidateForm.mobile_no,callback:function(e){t.$set(t.dynamicValidateForm,"mobile_no",e)},expression:"dynamicValidateForm.mobile_no"}})],1),t._v(" "),n("div",[n("el-form-item",{attrs:{prop:"message",label:"Message:",rules:[{required:!0,message:"Please enter message",trigger:"blur"}]}},[n("el-input",{attrs:{type:"textarea",placeholder:"Message",clearable:"","aria-required":"true"},model:{value:t.dynamicValidateForm.message,callback:function(e){t.$set(t.dynamicValidateForm,"message",e)},expression:"dynamicValidateForm.message"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-area mt-30"},[n("el-button",{staticClass:"btn icon-r hover",attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("Send Message")])],1)],1)])])],1)])])]),t._v(" "),n("div",{staticClass:"panel"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact_info_image"},[e("img",{attrs:{src:"/MONEY_CARE24/img/iphone.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact_info_image"},[e("img",{attrs:{src:"/MONEY_CARE24/img/filled-message.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n                  contact_info_item\n                  d-flex\n                  flex-row\n                  align-items-center\n                  justify-content-start\n                "},[n("div",{staticClass:"contact_info_image"},[n("img",{attrs:{src:"/MONEY_CARE24/img/map-marker.png",alt:""}})]),t._v(" "),n("div",{staticClass:"contact_info_content"},[n("div",{staticClass:"contact_info_title"},[t._v("Address")]),t._v(" "),n("div",{staticClass:"contact_info_text"},[t._v("\n                    SHOP -1123, LOWER GROUND FLOOR, EAZE ZONE MALL, OFF LINK ROAD, CTS - 1214/1, OF VILLAGE MALAD SOUTH AT GOREGAON (WEST), Goregaon (Mumbai), Mumbai, Goregaon West, Maharashtra, India, 400104\n                  ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont_map"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.476259350182!2d72.83879927495695!3d19.174389848876807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7002c78815b%3A0xc5a196bc48ae4665!2sEaze%20zone%20mall!5e0!3m2!1sen!2sin!4v1720770146236!5m2!1sen!2sin",width:"100%",height:"450",allowfullscreen:"",loading:"lazy"}})])}],!1,null,null,null);e.default=component.exports}}]);