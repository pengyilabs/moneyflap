import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-layout-BdMgwAjR.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("us-flag.BVRYe331.png");
const _imports_1 = "" + buildAssetsURL("senegal-flag.DSuW1Zc8.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "weblayout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="header d-flex align-items-top justify-content-center py-1 bg-dark" data-v-9c230543${_scopeId}><div class="container my-5 col" data-v-9c230543${_scopeId}><h2 class="fw-bolder display-2 mt-1" data-v-9c230543${_scopeId}>Licenses and Registrations</h2><h3 data-v-9c230543${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="33px" data-v-9c230543${_scopeId}> United States </h3><p data-v-9c230543${_scopeId}><strong data-v-9c230543${_scopeId}>MoneyFlap Digital Labs, Inc.</strong> is incorporated in Delaware and is registered as a <a target="_blank" href="https://www.fincen.gov/msb-state-selector" data-v-9c230543${_scopeId}> Money Services Business</a> (MSB) with the Financial Crimes Enforcement Network (FinCEN), a regulatory bureau of the United States Department of the Treasury. Our MSB Registration Number is 31000266452431. </p><h3 data-v-9c230543${_scopeId}><img${ssrRenderAttr("src", _imports_1)} height="33px" data-v-9c230543${_scopeId}> Senegal and West African Economic and Monetary Union (WAEMU) </h3><p data-v-9c230543${_scopeId}><strong data-v-9c230543${_scopeId}>MoneyFlap Senegal SAS</strong> operates as a technology services provider. It is neither licensed by the Central Bank of the West African States (BCEAO) nor by the \u201CAutorit\xE9 des March\xE9s Financiers de l\u2019UEMOA (AMF-UEMOA)\u201D, also known as the \u201CConseil Regional de l\u2019Epargne Publique et des Marches Financiers (CREPMF)\u201D. However, it is self-considered as an \u201CEntreprise et Profession Non Financi\xE8re D\xE9sign\xE9e (EPNFD)\u201D and is a reporting entity to the Financial Intelligence Unit (CENTIF), under the control of the Ministry of Economy and Finances, for anti-money laundering purposes. </p><p data-v-9c230543${_scopeId}><strong data-v-9c230543${_scopeId}>Disclaimer:</strong> blockchain technology and virtual currency registrations are not yet required. </p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "header d-flex align-items-top justify-content-center py-1 bg-dark" }, [
            createVNode("div", { class: "container my-5 col" }, [
              createVNode("h2", { class: "fw-bolder display-2 mt-1" }, "Licenses and Registrations"),
              createVNode("h3", null, [
                createVNode("img", {
                  src: _imports_0,
                  height: "33px"
                }),
                createTextVNode(" United States ")
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "MoneyFlap Digital Labs, Inc."),
                createTextVNode(" is incorporated in Delaware and is registered as a "),
                createVNode("a", {
                  target: "_blank",
                  href: "https://www.fincen.gov/msb-state-selector"
                }, " Money Services Business"),
                createTextVNode(" (MSB) with the Financial Crimes Enforcement Network (FinCEN), a regulatory bureau of the United States Department of the Treasury. Our MSB Registration Number is 31000266452431. ")
              ]),
              createVNode("h3", null, [
                createVNode("img", {
                  src: _imports_1,
                  height: "33px"
                }),
                createTextVNode(" Senegal and West African Economic and Monetary Union (WAEMU) ")
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "MoneyFlap Senegal SAS"),
                createTextVNode(" operates as a technology services provider. It is neither licensed by the Central Bank of the West African States (BCEAO) nor by the \u201CAutorit\xE9 des March\xE9s Financiers de l\u2019UEMOA (AMF-UEMOA)\u201D, also known as the \u201CConseil Regional de l\u2019Epargne Publique et des Marches Financiers (CREPMF)\u201D. However, it is self-considered as an \u201CEntreprise et Profession Non Financi\xE8re D\xE9sign\xE9e (EPNFD)\u201D and is a reporting entity to the Financial Intelligence Unit (CENTIF), under the control of the Ministry of Economy and Finances, for anti-money laundering purposes. ")
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Disclaimer:"),
                createTextVNode(" blockchain technology and virtual currency registrations are not yet required. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/licenses_and_registrations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const licenses_and_registrations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9c230543"]]);

export { licenses_and_registrations as default };
//# sourceMappingURL=licenses_and_registrations-B6Re0u3s.mjs.map
