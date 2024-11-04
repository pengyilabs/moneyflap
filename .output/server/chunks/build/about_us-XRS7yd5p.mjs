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

const _imports_0 = "" + buildAssetsURL("bg-about-us-main.CpQ88sgm.svg");
const _imports_1 = "" + buildAssetsURL("img-loan-granted.BVQrTMAK.png");
const _imports_2 = "" + buildAssetsURL("img-mamadou-Diallo.DaT-6CYz.png");
const _imports_3 = "data:image/webp;base64,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";
const _imports_4 = "" + buildAssetsURL("img-roberto-moya.CDunbq9N.png");
const _imports_5 = "" + buildAssetsURL("img-hamza-yaghmmour.CT5ZH92w.png");
const _imports_6 = "" + buildAssetsURL("logo-ffe.DJaHRPIK.png");
const _imports_7 = "" + buildAssetsURL("logo-sdf.D73_R-Q9.png");
const _imports_8 = "" + buildAssetsURL("logo-starknet.v9goLvWj.png");
const _imports_9 = "" + buildAssetsURL("logo-moneygram.8pwtaGSB.png");
const _imports_10 = "" + buildAssetsURL("logo-unrest.CWulPerr.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "weblayout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="header d-flex align-items-top justify-content-center" data-v-28d5061d${_scopeId}><div class="container mt-5" data-v-28d5061d${_scopeId}><section class="main row" data-v-28d5061d${_scopeId}><div class="col-12 col-md-6" data-v-28d5061d${_scopeId}><h2 class="text-white fw-bolder display-2 mt-1" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-28d5061d${_scopeId}> About us </h2><p class="text-white" data-v-28d5061d${_scopeId}> We are underserved people building a simple, transparent, and modern all-in-one global platform for underserved people. </p><div class="d-flex flex-row mt-5 flex-wrap" data-v-28d5061d${_scopeId}><div class="me-3 mt-3" data-v-28d5061d${_scopeId}><button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" data-v-28d5061d${_scopeId}> Get Started </button></div><div class="me-3 mt-3" data-v-28d5061d${_scopeId}>`);
        _push2(ssrRenderComponent(_component_RouterLink, {
          class: "btn btn-outline-light btn-lg shadow rounded-5 px-5",
          "aria-current": "page",
          to: "/careers"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Careers `);
            } else {
              return [
                createTextVNode(" Careers ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="col-12 col-md-6" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div></section></div></div><div class="py-1" data-v-28d5061d${_scopeId}><div class="container mt-5" data-v-28d5061d${_scopeId}><section class="load_granted row" data-v-28d5061d${_scopeId}><div class="col-12 col-md-6 d-flex align-items-center justify-content-center" data-v-28d5061d${_scopeId}><span class="" data-v-28d5061d${_scopeId}> How can you leave your legacy when you\u2019re trapped in legacy systems, or denied access to the system altogether. Banks shouldn\u2019t feel a relic from a different era. Elitist, Slow, Expensive. Banks should reflect the times we live in. Inclusive, Fast, Free. We deserve a blockchain-based bank for us. That\u2019s up to speed with modern life. This shouldn\u2019t be a fantasy, when it\u2019s a reality for the rest of the world. Our money should be ours. To do what we want with. To put where we need to. To build our futures. From underserved to what you deserve. A new shape of banking for emerging regions. </span></div><div class="col-12 col-md-6" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div></section></div></div><div class="footer d-flex align-items-top justify-content-center py-1 pb-4" data-v-28d5061d${_scopeId}><div class="container mt-5 col" data-v-28d5061d${_scopeId}><section class="d-flex flex-column align-items-center" data-v-28d5061d${_scopeId}><h3 class="text-white fw-bolder display-3 my-4" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-28d5061d${_scopeId}> Leadership <span class="text-success" data-v-28d5061d${_scopeId}>Team</span></h3><p class="text-white my-4" data-v-28d5061d${_scopeId}> We founded MoneyFlap to be the bridge between the traditional and decentralized finance. </p><div class="d-flex flex-row flex-wrap" data-v-28d5061d${_scopeId}><div class="fixed-width d-flex flex-column m-3" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="image-width" style="${ssrRenderStyle({ "max-height": "400px" })}" data-v-28d5061d${_scopeId}><div class="card rounded-4 bg-purple p-4 border-white fixed-width small-card" data-v-28d5061d${_scopeId}><div class="d-flex flex-row justify-content-between" data-v-28d5061d${_scopeId}><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><h4 class="text-white" data-v-28d5061d${_scopeId}>Mamadou Diallo</h4><p class="text-gray" data-v-28d5061d${_scopeId}>Co-Founder &amp; CEO</p></div><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><a target="_blank" href="https://www.linkedin.com/in/mamadoudd" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="linkedin logo" style="${ssrRenderStyle({ "height": "28px" })}" data-v-28d5061d${_scopeId}></a></div></div></div></div><div class="fixed-width d-flex flex-column m-3" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="image-width" style="${ssrRenderStyle({ "max-height": "400px" })}" data-v-28d5061d${_scopeId}><div class="card rounded-4 bg-purple p-4 border-white fixed-width small-card" data-v-28d5061d${_scopeId}><div class="d-flex flex-row justify-content-between" data-v-28d5061d${_scopeId}><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><h4 class="text-white" data-v-28d5061d${_scopeId}>Roberto Moya</h4><p class="text-gray" data-v-28d5061d${_scopeId}>Co-Founder &amp; CPO</p></div><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><a target="_blank" href="https://www.linkedin.com/in/robmoya" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="linkedin logo" style="${ssrRenderStyle({ "height": "28px" })}" data-v-28d5061d${_scopeId}></a></div></div></div></div><div class="fixed-width d-flex flex-column m-3" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="image-width" style="${ssrRenderStyle({ "max-height": "400px" })}" data-v-28d5061d${_scopeId}><div class="card rounded-4 bg-purple p-4 border-white fixed-width small-card" data-v-28d5061d${_scopeId}><div class="d-flex flex-row justify-content-between" data-v-28d5061d${_scopeId}><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><h4 class="text-white" data-v-28d5061d${_scopeId}>Hamza Yaghmmour</h4><p class="text-gray" data-v-28d5061d${_scopeId}>Co-Founder &amp; CTO</p></div><div class="d-flex flex-column" data-v-28d5061d${_scopeId}><a target="_blank" href="https://www.linkedin.com/in/hyaghmmour" data-v-28d5061d${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="linkedin logo" style="${ssrRenderStyle({ "height": "28px" })}" data-v-28d5061d${_scopeId}></a></div></div></div></div></div></section></div></div><div class="d-flex align-items-top justify-content-center py-1" data-v-28d5061d${_scopeId}><div class="container mt-5" data-v-28d5061d${_scopeId}><section class="load_granted d-flex flex-column align-items-center" data-v-28d5061d${_scopeId}><h3 class="fw-bolder display-3 my-4" style="${ssrRenderStyle({ "font-family": "Sofia Pro Bold" })}" data-v-28d5061d${_scopeId}> Trusted by: </h3><div class="row my-4 py-4 justify-content-center" data-v-28d5061d${_scopeId}><div class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" data-v-28d5061d${_scopeId}><img class="mx-3 my-4"${ssrRenderAttr("src", _imports_6)} alt="Fintech Fincrime Exchange" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div><div class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" data-v-28d5061d${_scopeId}><img class="mx-3 my-4"${ssrRenderAttr("src", _imports_7)} alt="Stellar Development Foundation" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div><div class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" data-v-28d5061d${_scopeId}><img class="mx-3 my-4"${ssrRenderAttr("src", _imports_8)} alt="Starknet" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div><div class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" data-v-28d5061d${_scopeId}><img class="mx-3 my-4"${ssrRenderAttr("src", _imports_9)} alt="MoneyGram" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-28d5061d${_scopeId}></div><div class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" data-v-28d5061d${_scopeId}><img class="mx-3 my-4"${ssrRenderAttr("src", _imports_10)} alt="unrest" style="${ssrRenderStyle({ "max-width": "110px" })}" data-v-28d5061d${_scopeId}></div></div></section></div></div>`);
      } else {
        return [
          createVNode("div", { class: "header d-flex align-items-top justify-content-center" }, [
            createVNode("div", { class: "container mt-5" }, [
              createVNode("section", { class: "main row" }, [
                createVNode("div", { class: "col-12 col-md-6" }, [
                  createVNode("h2", {
                    class: "text-white fw-bolder display-2 mt-1",
                    style: { "font-family": "Sofia Pro Bold" }
                  }, " About us "),
                  createVNode("p", { class: "text-white" }, " We are underserved people building a simple, transparent, and modern all-in-one global platform for underserved people. "),
                  createVNode("div", { class: "d-flex flex-row mt-5 flex-wrap" }, [
                    createVNode("div", { class: "me-3 mt-3" }, [
                      createVNode("button", { class: "btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient" }, " Get Started ")
                    ]),
                    createVNode("div", { class: "me-3 mt-3" }, [
                      createVNode(_component_RouterLink, {
                        class: "btn btn-outline-light btn-lg shadow rounded-5 px-5",
                        "aria-current": "page",
                        to: "/careers"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Careers ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-12 col-md-6" }, [
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
                createVNode("div", { class: "col-12 col-md-6 d-flex align-items-center justify-content-center" }, [
                  createVNode("span", { class: "" }, " How can you leave your legacy when you\u2019re trapped in legacy systems, or denied access to the system altogether. Banks shouldn\u2019t feel a relic from a different era. Elitist, Slow, Expensive. Banks should reflect the times we live in. Inclusive, Fast, Free. We deserve a blockchain-based bank for us. That\u2019s up to speed with modern life. This shouldn\u2019t be a fantasy, when it\u2019s a reality for the rest of the world. Our money should be ours. To do what we want with. To put where we need to. To build our futures. From underserved to what you deserve. A new shape of banking for emerging regions. ")
                ]),
                createVNode("div", { class: "col-12 col-md-6" }, [
                  createVNode("img", {
                    src: _imports_1,
                    style: { "max-width": "100%" }
                  })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "footer d-flex align-items-top justify-content-center py-1 pb-4" }, [
            createVNode("div", { class: "container mt-5 col" }, [
              createVNode("section", { class: "d-flex flex-column align-items-center" }, [
                createVNode("h3", {
                  class: "text-white fw-bolder display-3 my-4",
                  style: { "font-family": "Sofia Pro Bold" }
                }, [
                  createTextVNode(" Leadership "),
                  createVNode("span", { class: "text-success" }, "Team")
                ]),
                createVNode("p", { class: "text-white my-4" }, " We founded MoneyFlap to be the bridge between the traditional and decentralized finance. "),
                createVNode("div", { class: "d-flex flex-row flex-wrap" }, [
                  createVNode("div", { class: "fixed-width d-flex flex-column m-3" }, [
                    createVNode("img", {
                      src: _imports_2,
                      class: "image-width",
                      style: { "max-height": "400px" }
                    }),
                    createVNode("div", { class: "card rounded-4 bg-purple p-4 border-white fixed-width small-card" }, [
                      createVNode("div", { class: "d-flex flex-row justify-content-between" }, [
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("h4", { class: "text-white" }, "Mamadou Diallo"),
                          createVNode("p", { class: "text-gray" }, "Co-Founder & CEO")
                        ]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("a", {
                            target: "_blank",
                            href: "https://www.linkedin.com/in/mamadoudd"
                          }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "linkedin logo",
                              style: { "height": "28px" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "fixed-width d-flex flex-column m-3" }, [
                    createVNode("img", {
                      src: _imports_4,
                      class: "image-width",
                      style: { "max-height": "400px" }
                    }),
                    createVNode("div", { class: "card rounded-4 bg-purple p-4 border-white fixed-width small-card" }, [
                      createVNode("div", { class: "d-flex flex-row justify-content-between" }, [
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("h4", { class: "text-white" }, "Roberto Moya"),
                          createVNode("p", { class: "text-gray" }, "Co-Founder & CPO")
                        ]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("a", {
                            target: "_blank",
                            href: "https://www.linkedin.com/in/robmoya"
                          }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "linkedin logo",
                              style: { "height": "28px" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "fixed-width d-flex flex-column m-3" }, [
                    createVNode("img", {
                      src: _imports_5,
                      class: "image-width",
                      style: { "max-height": "400px" }
                    }),
                    createVNode("div", { class: "card rounded-4 bg-purple p-4 border-white fixed-width small-card" }, [
                      createVNode("div", { class: "d-flex flex-row justify-content-between" }, [
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("h4", { class: "text-white" }, "Hamza Yaghmmour"),
                          createVNode("p", { class: "text-gray" }, "Co-Founder & CTO")
                        ]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("a", {
                            target: "_blank",
                            href: "https://www.linkedin.com/in/hyaghmmour"
                          }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "linkedin logo",
                              style: { "height": "28px" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "d-flex align-items-top justify-content-center py-1" }, [
            createVNode("div", { class: "container mt-5" }, [
              createVNode("section", { class: "load_granted d-flex flex-column align-items-center" }, [
                createVNode("h3", {
                  class: "fw-bolder display-3 my-4",
                  style: { "font-family": "Sofia Pro Bold" }
                }, " Trusted by: "),
                createVNode("div", { class: "row my-4 py-4 justify-content-center" }, [
                  createVNode("div", { class: "col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" }, [
                    createVNode("img", {
                      class: "mx-3 my-4",
                      src: _imports_6,
                      alt: "Fintech Fincrime Exchange",
                      style: { "max-width": "100%" }
                    })
                  ]),
                  createVNode("div", { class: "col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" }, [
                    createVNode("img", {
                      class: "mx-3 my-4",
                      src: _imports_7,
                      alt: "Stellar Development Foundation",
                      style: { "max-width": "100%" }
                    })
                  ]),
                  createVNode("div", { class: "col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" }, [
                    createVNode("img", {
                      class: "mx-3 my-4",
                      src: _imports_8,
                      alt: "Starknet",
                      style: { "max-width": "100%" }
                    })
                  ]),
                  createVNode("div", { class: "col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" }, [
                    createVNode("img", {
                      class: "mx-3 my-4",
                      src: _imports_9,
                      alt: "MoneyGram",
                      style: { "max-width": "100%" }
                    })
                  ]),
                  createVNode("div", { class: "col-12 col-md-2 d-flex flex-column justify-content-center align-items-center" }, [
                    createVNode("img", {
                      class: "mx-3 my-4",
                      src: _imports_10,
                      alt: "unrest",
                      style: { "max-width": "110px" }
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about_us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about_us = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-28d5061d"]]);

export { about_us as default };
//# sourceMappingURL=about_us-XRS7yd5p.mjs.map
