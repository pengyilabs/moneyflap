import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-layout-BdMgwAjR.mjs';
import axios from 'axios';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
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

const _imports_0 = "" + buildAssetsURL("img-media-press.DTPWIoca.png");
const _imports_1 = "" + buildAssetsURL("img-boilerplate.7lA-KQVi.png");
const _imports_2 = "" + buildAssetsURL("img-founding-story.B9xJu4JR.png");
const _imports_3 = "" + buildAssetsURL("img-download.D9vULZGG.png");
const _imports_4 = "data:image/png;base64,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";
const _sfc_main = {
  methods: {
    downloadScreenshots() {
      axios.get("../downloads/Screenshots.zip", { responseType: "blob" }).then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
        });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.target = "_blank";
        a.download = "Screenshots.zip";
        a.click();
      });
    },
    downloadColors() {
      axios.get("../downloads/Colors.zip", { responseType: "blob" }).then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
        });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.target = "_blank";
        a.download = "Colors.zip";
        a.click();
      });
    },
    downloadLogos() {
      axios.get("../downloads/Logos.zip", { responseType: "blob" }).then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
        });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.target = "_blank";
        a.download = "Logos.zip";
        a.click();
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "weblayout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="header d-flex align-items-top justify-content-center" data-v-b0529de2${_scopeId}><div class="container mt-5" data-v-b0529de2${_scopeId}><section class="main row" data-v-b0529de2${_scopeId}><div class="col-12 col-md-6 my-3" data-v-b0529de2${_scopeId}><h2 class="text-white fw-bolder display-2 mt-1" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Media &amp; press kit </h2><p class="text-white mb-4 pb-4" data-v-b0529de2${_scopeId}> Thanks for your interest in our company!\xA0Here&#39;s our logo and a collection of product screenshots </p><div class="d-flex flex-column mt-5 flex-wrap pt-4" data-v-b0529de2${_scopeId}><h3 class="text-white fw-bolder display-4 mt-4 pt-4" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Tagline </h3><p class="text-white" data-v-b0529de2${_scopeId}>On-chain Everything App</p></div></div><div class="col-12 col-md-6 my-3" data-v-b0529de2${_scopeId}><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-b0529de2${_scopeId}></div></section></div></div><div class="py-1" data-v-b0529de2${_scopeId}><div class="container mt-5" data-v-b0529de2${_scopeId}><section class="load_granted row" data-v-b0529de2${_scopeId}><div class="col-12 col-md-6 d-flex flex-column" data-v-b0529de2${_scopeId}><h4 class="fw-bolder display-6" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Boilerplate </h4><span class="" data-v-b0529de2${_scopeId}><strong data-v-b0529de2${_scopeId}>MoneyFlap</strong> is dedicated to rebuilding the global financial landscape through cutting-edge stablecoin rails and blockchain technology. Our company is built with a mission to drive massive financial inclusion in markets that have consistently been underserved, are under the grasp of archaic and bureaucratic payment systems, or have had a history of complicated, inaccessible, and expensive financial services. Built on top of public blockchain protocols, MoneyFlap is a global on-chain WeChat-like super app leveraging stablecoins rails to connect Europe, Sub-Saharan Africa, Latin America, Southeast Asia, MENA, and North America under one roof, providing people with lightning-fast, near-zero cost, and secure payments worldwide. Powered by a network of domestic real-time payment rails and a ledger capable of handling millions of transactions per second (TPS), our platform offers global instant money movements for a fee of 0 to 100 basis points (bps) at mid-market rates \u2014 and more competitive than the current solutions. With MoneyFlap, a Brazilian can access NIBSS in Nigeria; an Indian can transact through SEPA Instant in Europe; a South African can send money to Mexico through SPEI; and so on. </span></div><div class="col-12 col-md-6 text-end" data-v-b0529de2${_scopeId}><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-b0529de2${_scopeId}></div></section></div></div><div class="footer d-flex align-items-top justify-content-center py-1 pb-4" data-v-b0529de2${_scopeId}><div class="container my-5 col" data-v-b0529de2${_scopeId}><section class="mt-5 row" data-v-b0529de2${_scopeId}><div class="col-12 col-md-6 d-flex flex-column" data-v-b0529de2${_scopeId}><h4 class="text-white fw-bolder display-6 mt-5 mb-3" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Founding Story </h4><p class="text-white my-4" data-v-b0529de2${_scopeId}> Before deciding to start MoneyFlap, Mamadou worked remotely in the United States while residing in South Africa with a student visa \u2014 where he had a local bank account. Shortly, it came to his attention that South African banks usually freeze the accounts of those foreign residents who can no longer show a valid temporary residency permit. Then, he was urged to prepare accordingly by cashing out all his funds out of South Africa. He returned to his home country, Senegal, a week before expiration. Hence, he shall have opened a new Senegalese account to continue getting paid from the United States. He quickly noticed the following issues: </p><div data-v-b0529de2${_scopeId}><ul class="list-unstyled text-white" data-v-b0529de2${_scopeId}><li data-v-b0529de2${_scopeId}> There is no way to open a bank account via any web or mobile banking app. </li><li data-v-b0529de2${_scopeId}> It is impossible to get paid by US employers through mobile money service providers. </li><li data-v-b0529de2${_scopeId}> It is impossible to make/receive bank-to-bank remittances through mobile money service providers. </li><li data-v-b0529de2${_scopeId}> Must have visited bank branches, done the paperwork, and waited in long queues to open an account. </li><li data-v-b0529de2${_scopeId}> The bank required a $20 minimum deposit and $20 for the debit card to activate his account. </li><li data-v-b0529de2${_scopeId}> Banks keep charging exorbitant fees on domestic bank transfers and even do so for alerts. </li><li data-v-b0529de2${_scopeId}> People still rely on complex methods and friends or family from abroad to bank on their behalf. </li><li data-v-b0529de2${_scopeId}> The oligopoly of legacy systems through bureaucracy leads the region to have a low card penetration rate. </li></ul></div><span class="text-white" data-v-b0529de2${_scopeId}> We quickly realized that our issues were prevalent in all emerging markets, especially French-speaking sub-Saharan Africa, Southeast Asia, and South America. </span></div><div class="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" data-v-b0529de2${_scopeId}><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-b0529de2${_scopeId}></div></section></div></div><div class="d-flex align-items-top justify-content-center py-1" data-v-b0529de2${_scopeId}><div class="container mt-5" data-v-b0529de2${_scopeId}><section class="row" data-v-b0529de2${_scopeId}><div class="col-12 col-md-6 mb-5" data-v-b0529de2${_scopeId}><h4 class="fw-bolder display-6 mt-5 mb-3" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Download Our logo </h4><p class="" data-v-b0529de2${_scopeId}> For implementing our logo in different applications, please download individually our high-resolution assets in PNG format or in .zip file for full access to all our logos. </p><button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" data-v-b0529de2${_scopeId}> Download full set </button><h4 class="fw-bolder display-6 mt-5 mb-3" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Download Our Screenshots </h4><p class="" data-v-b0529de2${_scopeId}> High-resolution assets of our interface on desktop and mobile, as well as a selection of GIFs showing functionality across the app. </p><button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" data-v-b0529de2${_scopeId}> Download full set </button><h4 class="fw-bolder display-6 mt-5 mb-3" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-b0529de2${_scopeId}> Download Our Color Palette </h4><p class="" data-v-b0529de2${_scopeId}> Our color palette is a core component of our identity, allowing us to visualize our ideas and concepts in an approachable and playful way. </p><button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" data-v-b0529de2${_scopeId}> Download full set </button></div><div class="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" data-v-b0529de2${_scopeId}><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-b0529de2${_scopeId}></div></section></div></div><div class="footer d-flex align-items-top justify-content-center py-1 pb-4" data-v-b0529de2${_scopeId}><div class="container my-5 col" data-v-b0529de2${_scopeId}><section class="mt-5 d-flex flex-column justify-content-center align-items-center" data-v-b0529de2${_scopeId}><img${ssrRenderAttr("src", _imports_4)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-b0529de2${_scopeId}><h4 class="fw-bolder display-6 m-3" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold", "color": "#5096ff" })}" data-v-b0529de2${_scopeId}> Any questions ? </h4><p class="text-white text-center mb-5" data-v-b0529de2${_scopeId}> We&#39;re also happy to help with any questions you have. <br data-v-b0529de2${_scopeId}>You&#39;ll reach a real human who can arrange interviews and provide original materials. </p><a class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient mt-5" href="mailto:press@moneyflap.com" target="_blank" data-v-b0529de2${_scopeId}> Contact Press </a></section></div></div>`);
      } else {
        return [
          createVNode("div", { class: "header d-flex align-items-top justify-content-center" }, [
            createVNode("div", { class: "container mt-5" }, [
              createVNode("section", { class: "main row" }, [
                createVNode("div", { class: "col-12 col-md-6 my-3" }, [
                  createVNode("h2", {
                    class: "text-white fw-bolder display-2 mt-1",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Media & press kit "),
                  createVNode("p", { class: "text-white mb-4 pb-4" }, " Thanks for your interest in our company!\xA0Here's our logo and a collection of product screenshots "),
                  createVNode("div", { class: "d-flex flex-column mt-5 flex-wrap pt-4" }, [
                    createVNode("h3", {
                      class: "text-white fw-bolder display-4 mt-4 pt-4",
                      style: { "font-family": "Sofia Pro Bold" }
                    }, " Tagline "),
                    createVNode("p", { class: "text-white" }, "On-chain Everything App")
                  ])
                ]),
                createVNode("div", { class: "col-12 col-md-6 my-3" }, [
                  createVNode("img", {
                    src: _imports_0,
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "py-1" }, [
            createVNode("div", { class: "container mt-5" }, [
              createVNode("section", { class: "load_granted row" }, [
                createVNode("div", { class: "col-12 col-md-6 d-flex flex-column" }, [
                  createVNode("h4", {
                    class: "fw-bolder display-6",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Boilerplate "),
                  createVNode("span", { class: "" }, [
                    createVNode("strong", null, "MoneyFlap"),
                    createTextVNode(" is dedicated to rebuilding the global financial landscape through cutting-edge stablecoin rails and blockchain technology. Our company is built with a mission to drive massive financial inclusion in markets that have consistently been underserved, are under the grasp of archaic and bureaucratic payment systems, or have had a history of complicated, inaccessible, and expensive financial services. Built on top of public blockchain protocols, MoneyFlap is a global on-chain WeChat-like super app leveraging stablecoins rails to connect Europe, Sub-Saharan Africa, Latin America, Southeast Asia, MENA, and North America under one roof, providing people with lightning-fast, near-zero cost, and secure payments worldwide. Powered by a network of domestic real-time payment rails and a ledger capable of handling millions of transactions per second (TPS), our platform offers global instant money movements for a fee of 0 to 100 basis points (bps) at mid-market rates \u2014 and more competitive than the current solutions. With MoneyFlap, a Brazilian can access NIBSS in Nigeria; an Indian can transact through SEPA Instant in Europe; a South African can send money to Mexico through SPEI; and so on. ")
                  ])
                ]),
                createVNode("div", { class: "col-12 col-md-6 text-end" }, [
                  createVNode("img", {
                    src: _imports_1,
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "footer d-flex align-items-top justify-content-center py-1 pb-4" }, [
            createVNode("div", { class: "container my-5 col" }, [
              createVNode("section", { class: "mt-5 row" }, [
                createVNode("div", { class: "col-12 col-md-6 d-flex flex-column" }, [
                  createVNode("h4", {
                    class: "text-white fw-bolder display-6 mt-5 mb-3",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Founding Story "),
                  createVNode("p", { class: "text-white my-4" }, " Before deciding to start MoneyFlap, Mamadou worked remotely in the United States while residing in South Africa with a student visa \u2014 where he had a local bank account. Shortly, it came to his attention that South African banks usually freeze the accounts of those foreign residents who can no longer show a valid temporary residency permit. Then, he was urged to prepare accordingly by cashing out all his funds out of South Africa. He returned to his home country, Senegal, a week before expiration. Hence, he shall have opened a new Senegalese account to continue getting paid from the United States. He quickly noticed the following issues: "),
                  createVNode("div", null, [
                    createVNode("ul", { class: "list-unstyled text-white" }, [
                      createVNode("li", null, " There is no way to open a bank account via any web or mobile banking app. "),
                      createVNode("li", null, " It is impossible to get paid by US employers through mobile money service providers. "),
                      createVNode("li", null, " It is impossible to make/receive bank-to-bank remittances through mobile money service providers. "),
                      createVNode("li", null, " Must have visited bank branches, done the paperwork, and waited in long queues to open an account. "),
                      createVNode("li", null, " The bank required a $20 minimum deposit and $20 for the debit card to activate his account. "),
                      createVNode("li", null, " Banks keep charging exorbitant fees on domestic bank transfers and even do so for alerts. "),
                      createVNode("li", null, " People still rely on complex methods and friends or family from abroad to bank on their behalf. "),
                      createVNode("li", null, " The oligopoly of legacy systems through bureaucracy leads the region to have a low card penetration rate. ")
                    ])
                  ]),
                  createVNode("span", { class: "text-white" }, " We quickly realized that our issues were prevalent in all emerging markets, especially French-speaking sub-Saharan Africa, Southeast Asia, and South America. ")
                ]),
                createVNode("div", { class: "col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" }, [
                  createVNode("img", {
                    src: _imports_2,
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "d-flex align-items-top justify-content-center py-1" }, [
            createVNode("div", { class: "container mt-5" }, [
              createVNode("section", { class: "row" }, [
                createVNode("div", { class: "col-12 col-md-6 mb-5" }, [
                  createVNode("h4", {
                    class: "fw-bolder display-6 mt-5 mb-3",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Download Our logo "),
                  createVNode("p", { class: "" }, " For implementing our logo in different applications, please download individually our high-resolution assets in PNG format or in .zip file for full access to all our logos. "),
                  createVNode("button", {
                    class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient",
                    onClick: $options.downloadLogos
                  }, " Download full set ", 8, ["onClick"]),
                  createVNode("h4", {
                    class: "fw-bolder display-6 mt-5 mb-3",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Download Our Screenshots "),
                  createVNode("p", { class: "" }, " High-resolution assets of our interface on desktop and mobile, as well as a selection of GIFs showing functionality across the app. "),
                  createVNode("button", {
                    class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient",
                    onClick: $options.downloadScreenshots
                  }, " Download full set ", 8, ["onClick"]),
                  createVNode("h4", {
                    class: "fw-bolder display-6 mt-5 mb-3",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " Download Our Color Palette "),
                  createVNode("p", { class: "" }, " Our color palette is a core component of our identity, allowing us to visualize our ideas and concepts in an approachable and playful way. "),
                  createVNode("button", {
                    class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient",
                    onClick: $options.downloadColors
                  }, " Download full set ", 8, ["onClick"])
                ]),
                createVNode("div", { class: "col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" }, [
                  createVNode("img", {
                    src: _imports_3,
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "footer d-flex align-items-top justify-content-center py-1 pb-4" }, [
            createVNode("div", { class: "container my-5 col" }, [
              createVNode("section", { class: "mt-5 d-flex flex-column justify-content-center align-items-center" }, [
                createVNode("img", {
                  src: _imports_4,
                  style: { "max-width": "100%" }
                }),
                createVNode("h4", {
                  class: "fw-bolder display-6 m-3",
                  style: { "font-family": "Sofia Pro Bold", "color": "#5096ff" }
                }, " Any questions ? "),
                createVNode("p", { class: "text-white text-center mb-5" }, [
                  createTextVNode(" We're also happy to help with any questions you have. "),
                  createVNode("br"),
                  createTextVNode("You'll reach a real human who can arrange interviews and provide original materials. ")
                ]),
                createVNode("a", {
                  class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient mt-5",
                  href: "mailto:press@moneyflap.com",
                  target: "_blank"
                }, " Contact Press ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/press_kit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const press_kit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b0529de2"]]);

export { press_kit as default };
//# sourceMappingURL=press_kit-C-RnypTb.mjs.map
