import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-layout-BdMgwAjR.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("img-pricing-header.Wt6WP2VF.png");
const _imports_1 = "" + buildAssetsURL("img-pricing-general.B39UZqgk.png");
const _imports_2 = "" + buildAssetsURL("img-pricing-adding-money.DU3Gx3ct.png");
const _imports_3 = "" + buildAssetsURL("img-pricing-sending-money.BdXNIig3.png");
const _imports_4 = "" + buildAssetsURL("img-pricing-receiving-money.C1uurJmK.png");
const _imports_5 = "" + buildAssetsURL("img-pricing-paying-bills.CvIGu9Ro.png");
const _imports_6 = "" + buildAssetsURL("img-pricing-yield-accounts.Cp9fQ-UE.png");
const _imports_7 = "" + buildAssetsURL("img-pricing-cards.BVVKg5s4.png");
const _sfc_main = {
  data() {
    return {
      smartCardIndex: 0,
      smartCardLength: 6,
      accountIndex: 0,
      accountElements: 6
    };
  },
  methods: {
    next() {
      if (this.smartCardIndex < this.smartCardLength - 1) {
        this.smartCardIndex += 1;
      } else {
        this.smartCardIndex = 0;
      }
    },
    back() {
      if (this.smartCardIndex > 0) {
        this.smartCardIndex -= 1;
      } else {
        this.smartCardIndex = this.smartCardLength - 1;
      }
    },
    accountNext() {
      this.accountIndex++;
      if (this.accountIndex >= this.accountElements) {
        this.accountIndex = 0;
      }
      let doc = (void 0).getElementById(`cc-${this.accountIndex}`);
      console.log("Next", doc);
      doc.scrollIntoView();
    },
    accountBack() {
      this.accountIndex--;
      if (this.accountIndex < 0) {
        this.accountIndex = this.accountElements - 1;
      }
      let doc = (void 0).getElementById(`cc-${this.accountIndex}`);
      console.log("Next", doc);
      doc.scrollIntoView();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "weblayout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="header d-flex align-items-start justify-content-center py-5" data-v-0204cd1c${_scopeId}><div class="container" data-v-0204cd1c${_scopeId}><div class="row" data-v-0204cd1c${_scopeId}><div class="col-12 col-md-6" data-v-0204cd1c${_scopeId}><div class="" data-v-0204cd1c${_scopeId}><h1 class="text-white fw-bolder display-4 mt-4" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-0204cd1c${_scopeId}><span class="text-success" data-v-0204cd1c${_scopeId}>Fair</span>, Competitive, <br data-v-0204cd1c${_scopeId}> and <span class="text-success" data-v-0204cd1c${_scopeId}>Transparent</span><br data-v-0204cd1c${_scopeId}> Transaction Fees </h1><p class="text-white my-4 lh-lg fw-medium" data-v-0204cd1c${_scopeId}> We believe in offering clear and upfront pricing.\xA0Here&#39;s a breakdown of our fees to help you understand the costs associated with using our services: </p></div><div class="" data-v-0204cd1c${_scopeId}><div class="d-flex flex-row flex-wrap mt-5" data-v-0204cd1c${_scopeId}><div class="me-3 mt-3" data-v-0204cd1c${_scopeId}><button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" data-v-0204cd1c${_scopeId}> Get Started </button></div><div class="me-3 mt-3" data-v-0204cd1c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_RouterLink, {
          class: "btn btn-outline-light btn-lg rounded-5 px-4",
          "aria-current": "page",
          to: "/pricing"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Explore Fees `);
            } else {
              return [
                createTextVNode(" Explore Fees ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div><div class="col-12 col-md-6 mt-5 mt-md-0" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="MoneyFlap" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-0204cd1c${_scopeId}></div></div></div></section><section class="py-5" data-v-0204cd1c${_scopeId}><div class="container" data-v-0204cd1c${_scopeId}><div class="row align-items-center" data-v-0204cd1c${_scopeId}><div class="col-12 col-md-6 mx-auto" data-v-0204cd1c${_scopeId}><div class="rainbow-border rounded-5" data-v-0204cd1c${_scopeId}><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 rounded-tl-5 p-4 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><h2 class="text-success" data-v-0204cd1c${_scopeId}>SPENDING ACCOUNTS</h2></div><div class="col-3 bg-green rounded-tr-5 p-4 margin-bottom border-left" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 data-v-0204cd1c${_scopeId}>General</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Opening Fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked m-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Monthly Fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column m-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked m-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Suscription Fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column m-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked text-muted mb-2" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Minimum Deposit </span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column text-muted mb-2" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> None </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 data-v-0204cd1c${_scopeId}>Adding Money</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Cash deposit &amp; withdrawal <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Transaction fee may apply at MoneyGram locations </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Crypto deposit </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Open banking </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Bank transfer <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fee only applies after 2 free transfers every month </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> From 0.2% </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 mb-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Mobile wallet <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fee varies by mobile wallet </small></span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> From 1% </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 data-v-0204cd1c${_scopeId}>Sending Money</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> International transfer to contacts </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> International transfer to bank accounts <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fee varies by currency </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> From 0.25% </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> International transfer to mobile wallets <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fee varies by mobile wallet </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}>From 0.25% (capped at 1.2 USD)</span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> International transfer to crypto wallets <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Network fee may apply </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> 0.15% </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Foreign exchange spreads/markups </span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> None </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 data-v-0204cd1c${_scopeId}>Reveiving Money</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Getting banking details in fiat currencies <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> USD, EUR, and GBP </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Receiving payments in fiat currencies <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fixed fee per payment </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> 2.6USD </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Getting on-chain details in stablecoins </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Receiving payments in stablecoins </span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 data-v-0204cd1c${_scopeId}>Paying Bills</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> International bill payments <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> Fee varies by country </small></span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> From 0 USD </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_6)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 class="text-success" data-v-0204cd1c${_scopeId}>YIELD ACCOUNTS</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Opening fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Management fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> 0.15% </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white margin-bottom" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked text-muted mt-0" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Minimum deposit </span></li></ul></div></div><div class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column text-muted mt-0" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> None </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 p-4 bg-white" data-v-0204cd1c${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt="" class="left-icon" data-v-0204cd1c${_scopeId}><div class="div-icon-separator d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><div data-v-0204cd1c${_scopeId}><h3 class="text-success" data-v-0204cd1c${_scopeId}>CARDS</h3><button class="btn btn-dark btn-lg rounded-5 px-4" data-v-0204cd1c${_scopeId}> Get Started </button></div></div></div><div class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-4 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Virtual card issuance </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-4 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Eco plastic card issuance <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> One-time fee per card </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> 3 USD </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Metal card issuance <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> One-time fee per card </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> 35 USD </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Mirror card issuance <br data-v-0204cd1c${_scopeId}><small style="${ssrRenderStyle({ "margin-left": "45px" })}" data-v-0204cd1c${_scopeId}> One-time fee per card </small></span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "64px" })}" data-v-0204cd1c${_scopeId}> 65 USD </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Transaction fee </span></li></ul></div></div><div class="col-3 bg-green border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column mt-0 text-muted" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div><div class="row m-0 p-0 w-100" data-v-0204cd1c${_scopeId}><div class="col-9 bg-white rounded-bl-5" data-v-0204cd1c${_scopeId}><div class="div-margin-left d-flex flex-column justify-content-between" data-v-0204cd1c${_scopeId}><ul class="list-unstyled list-checked mt-0 text-muted" data-v-0204cd1c${_scopeId}><li data-v-0204cd1c${_scopeId}><span data-v-0204cd1c${_scopeId}> Foreign transaction fee </span></li></ul></div></div><div class="col-3 bg-green rounded-br-5 border-left d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column justify-content-end" data-v-0204cd1c${_scopeId}><div class="d-flex flex-column text-muted mt-0" data-v-0204cd1c${_scopeId}><span style="${ssrRenderStyle({ "height": "40px" })}" data-v-0204cd1c${_scopeId}> Free </span></div></div></div></div></div></div></div></div></section>`);
      } else {
        return [
          createVNode("section", { class: "header d-flex align-items-start justify-content-center py-5" }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12 col-md-6" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("h1", {
                      class: "text-white fw-bolder display-4 mt-4",
                      style: { "font-family": "Sofia Pro Bold" }
                    }, [
                      createVNode("span", { class: "text-success" }, "Fair"),
                      createTextVNode(", Competitive, "),
                      createVNode("br"),
                      createTextVNode(" and "),
                      createVNode("span", { class: "text-success" }, "Transparent"),
                      createVNode("br"),
                      createTextVNode(" Transaction Fees ")
                    ]),
                    createVNode("p", { class: "text-white my-4 lh-lg fw-medium" }, " We believe in offering clear and upfront pricing.\xA0Here's a breakdown of our fees to help you understand the costs associated with using our services: ")
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "d-flex flex-row flex-wrap mt-5" }, [
                      createVNode("div", { class: "me-3 mt-3" }, [
                        createVNode("button", { class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" }, " Get Started ")
                      ]),
                      createVNode("div", { class: "me-3 mt-3" }, [
                        createVNode(_component_RouterLink, {
                          class: "btn btn-outline-light btn-lg rounded-5 px-4",
                          "aria-current": "page",
                          to: "/pricing"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Explore Fees ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-12 col-md-6 mt-5 mt-md-0" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "MoneyFlap",
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("section", { class: "py-5" }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "row align-items-center" }, [
                createVNode("div", { class: "col-12 col-md-6 mx-auto" }, [
                  createVNode("div", { class: "rainbow-border rounded-5" }, [
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 rounded-tl-5 p-4 bg-white margin-bottom" }, [
                        createVNode("h2", { class: "text-success" }, "SPENDING ACCOUNTS")
                      ]),
                      createVNode("div", { class: "col-3 bg-green rounded-tr-5 p-4 margin-bottom border-left" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", null, "General"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" })
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Opening Fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked m-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Monthly Fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column m-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked m-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Suscription Fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column m-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked text-muted mb-2" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Minimum Deposit ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column text-muted mb-2" }, [
                            createVNode("span", { style: { "height": "40px" } }, " None ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", null, "Adding Money"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Cash deposit & withdrawal "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Transaction fee may apply at MoneyGram locations ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Crypto deposit ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Open banking ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Bank transfer "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fee only applies after 2 free transfers every month ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " From 0.2% ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 mb-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Mobile wallet "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fee varies by mobile wallet ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " From 1% ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", null, "Sending Money"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " International transfer to contacts ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" International transfer to bank accounts "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fee varies by currency ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " From 0.25% ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" International transfer to mobile wallets "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fee varies by mobile wallet ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, "From 0.25% (capped at 1.2 USD)")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" International transfer to crypto wallets "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Network fee may apply ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " 0.15% ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Foreign exchange spreads/markups ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " None ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", null, "Reveiving Money"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Getting banking details in fiat currencies "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " USD, EUR, and GBP ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Receiving payments in fiat currencies "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fixed fee per payment ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " 2.6USD ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Getting on-chain details in stablecoins ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Receiving payments in stablecoins ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", null, "Paying Bills"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" International bill payments "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " Fee varies by country ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " From 0 USD ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_6,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-success" }, "YIELD ACCOUNTS"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Opening fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Management fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " 0.15% ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white margin-bottom" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked text-muted mt-0" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Minimum deposit ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column text-muted mt-0" }, [
                            createVNode("span", { style: { "height": "40px" } }, " None ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 p-4 bg-white" }, [
                        createVNode("img", {
                          src: _imports_7,
                          alt: "",
                          class: "left-icon"
                        }),
                        createVNode("div", { class: "div-icon-separator d-flex flex-column justify-content-between" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-success" }, "CARDS"),
                            createVNode("button", { class: "btn btn-dark btn-lg rounded-5 px-4" }, " Get Started ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green p-4 border-left d-flex flex-column justify-content-end" })
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-4 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Virtual card issuance ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-4 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Eco plastic card issuance "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " One-time fee per card ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " 3 USD ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Metal card issuance "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " One-time fee per card ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " 35 USD ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createTextVNode(" Mirror card issuance "),
                                createVNode("br"),
                                createVNode("small", { style: { "margin-left": "45px" } }, " One-time fee per card ")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "64px" } }, " 65 USD ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Transaction fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column mt-0 text-muted" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row m-0 p-0 w-100" }, [
                      createVNode("div", { class: "col-9 bg-white rounded-bl-5" }, [
                        createVNode("div", { class: "div-margin-left d-flex flex-column justify-content-between" }, [
                          createVNode("ul", { class: "list-unstyled list-checked mt-0 text-muted" }, [
                            createVNode("li", null, [
                              createVNode("span", null, " Foreign transaction fee ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 bg-green rounded-br-5 border-left d-flex flex-column justify-content-end" }, [
                        createVNode("div", { class: "d-flex flex-column justify-content-end" }, [
                          createVNode("div", { class: "d-flex flex-column text-muted mt-0" }, [
                            createVNode("span", { style: { "height": "40px" } }, " Free ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0204cd1c"]]);

export { pricing as default };
//# sourceMappingURL=pricing-CEFLkc-A.mjs.map
