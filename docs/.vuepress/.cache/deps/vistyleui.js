import {
  computed,
  createBaseVNode,
  createElementBlock,
  mergeProps,
  openBlock,
  renderSlot,
  unref
} from "./chunk-DKDEFF44.js";

// node_modules/.pnpm/vistyleui@0.0.1-beta-2/node_modules/vistyleui/dist/vistyleui-lib.es.js
var v = {
  "--bg-color": "#ffffff",
  "--text-color": "#5a6270",
  "--shadow-light-color": "#ffffff",
  "--shadow-dark-color": "#e0e0e0"
};
var w = {
  "--bg-color": "#2a2e35",
  "--text-color": "#e0e5ec",
  "--shadow-light-color": "#41464b",
  "--shadow-dark-color": "#1f2228"
};
var S = {
  "--bg-color": "#d6e1ff",
  "--text-color": "#2d4587",
  "--shadow-light-color": "#f8ffff",
  "--shadow-dark-color": "#b4c1e0"
};
var z = {
  "--bg-color": "#d6f5e5",
  "--text-color": "#246e4c",
  "--shadow-light-color": "#f9ffff",
  "--shadow-dark-color": "#b3e0c9"
};
var R = {
  "--bg-color": "#ffe5e5",
  "--text-color": "#a02a2a",
  "--shadow-light-color": "#ffffff",
  "--shadow-dark-color": "#e0c0c0"
};
var k = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of r)
    t[s] = l;
  return t;
};
var B = { class: "neu-btn-container" };
var I = ["disabled", "colorCustom"];
var x = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 自定义颜色
    bgColor: {
      type: String,
      default: "#ffffff",
      required: true
    },
    textColor: {
      type: String,
      default: "#5a6270",
      required: () => (void 0).theme === "custom"
    },
    shadowLight: {
      type: String,
      default: "#ffffff",
      required: () => (void 0).theme === "custom"
    },
    shadowDark: {
      type: String,
      default: "#e0e0e0",
      required: () => (void 0).theme === "custom"
    },
    // 主题
    theme: {
      type: String,
      default: "light",
      validator: (e) => ["light", "dark", "blue", "green", "red", "custom"].includes(
        e
      )
    }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, s = r, l = computed(() => t.size === "medium" ? "btn-medium" : t.size === "large" ? "btn-large" : "btn-small"), a = computed(() => {
      switch (t.theme) {
        case "light":
          return v;
        case "dark":
          return w;
        case "blue":
          return S;
        case "green":
          return z;
        case "red":
          return R;
        case "custom":
          return {
            "--bg-color": t.bgColor,
            "--text-color": t.textColor,
            "--shadow-light-color": t.shadowLight,
            "--shadow-dark-color": t.shadowDark
          };
      }
    }), c = (o) => {
      s("click", o);
    };
    return (o, n) => (openBlock(), createElementBlock("div", B, [
      createBaseVNode("button", mergeProps({
        class: ["neu-btn", l.value],
        style: a.value,
        disabled: e.disabled,
        onClick: c,
        colorCustom: e.theme === "custom"
      }, o.$attrs), [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 16, I)
    ]));
  }
};
var V = k(x, [["__scopeId", "data-v-88b75849"]]);
function q(e) {
  e = e.replace(/^#/, ""), e.length === 3 && (e = e.split("").map((l) => l + l).join(""));
  const r = parseInt(e.substring(0, 2), 16), t = parseInt(e.substring(2, 4), 16), s = parseInt(e.substring(4, 6), 16);
  return {
    r,
    g: t,
    b: s
  };
}
function C(e) {
  const r = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, t = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, s = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d+)\)$/;
  return r.test(e) ? "hex" : t.test(e) ? "rgb" : s.test(e) ? "rgba" : "";
}
function L(e) {
  const r = e.match(/\d+/g), t = parseInt(r[0]), s = parseInt(r[1]), l = parseInt(r[2]);
  return {
    r: t,
    g: s,
    b: l
  };
}
function y(e) {
  return {
    sizeClass: computed(() => e === "small" ? "btn-small" : e === "large" ? "btn-large" : "btn-medium")
  };
}
var D = { class: "glass-btn-container" };
var G = ["disabled"];
var A = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "",
      validator: (e) => ["green", "blue", "red", "custom"].includes(e)
    },
    color: {
      type: String,
      default: ""
    },
    bgRgba: {
      type: String,
      default: "rgba(255, 255, 255, 0.15)"
    },
    borderRgba: {
      type: String,
      default: "rgba(255, 255, 255, 0.2)"
    }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, s = r, { sizeClass: l } = y(t.size), a = computed(() => t.theme === "custom" ? "btn-custom-color" : t.theme === "green" ? "btn-green" : t.theme === "blue" ? "btn-blue" : t.theme === "red" ? "btn-red" : ""), c = computed(() => {
      if (t.theme === "custom")
        if (C(t.color) === "hex") {
          const { r: n, g: i, b: u } = q(t.color);
          return {
            "--bg-color": `rgba(${n},${i},${u}, 0.1)`,
            "--bg-color-border": `rgba(${n},${i},${u}, 0.2)`
          };
        } else if (C(t.color) === "rgb") {
          const { r: n, g: i, b: u } = L(t.color);
          return {
            "--bg-color": `rgba(${n}, ${i}, ${u}, 0.1)`,
            "--bg-color-border": `rgba(${n}, ${i}, ${u}, 0.2)`
          };
        } else return !t.color && t.bgRgba && t.borderRgba ? {
          "--bg-color": t.bgRgba,
          "--bg-color-border": t.borderRgba
        } : {
          "--bg-color": "rgba(255, 100, 100, 0.1)",
          "--bg-color-border": "rgba(255, 100, 100, 0.2)"
        };
      else
        return "";
    }), o = (n) => {
      s("click", n);
    };
    return (n, i) => (openBlock(), createElementBlock("div", D, [
      createBaseVNode("button", mergeProps({
        class: ["glass-btn", [unref(l), a.value]],
        disabled: e.disabled,
        style: c.value,
        onClick: o
      }, n.$attrs), [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ], 16, G)
    ]));
  }
};
var E = k(A, [["__scopeId", "data-v-db5d2f66"]]);
var j = {
  "--bg-color": "#4ecdc4",
  "--border-light": "#8ffff8",
  "--border-dark": "#3a9e97"
};
var F = {
  "--bg-color": "#6bff6b",
  "--border-light": "#aaffaa",
  "--border-dark": "#52cc52"
};
var N = {
  "--bg-color": "#ff6b6b",
  "--border-light": "#ffaaaa",
  "--border-dark": "#cc5252"
};
var O = { class: "retro-btn-container" };
var P = ["disabled"];
var T = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "",
      validator: (e) => ["green", "blue", "red", "custom"].includes(e)
    },
    bgColor: {
      type: String,
      default: ""
    },
    borderLight: {
      type: String,
      default: ""
    },
    borderDark: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, s = r, l = (o) => {
      s("click", o);
    }, { sizeClass: a } = y(t.size), c = computed(() => {
      if (t.theme === "green")
        return F;
      if (t.theme === "blue")
        return j;
      if (t.theme === "red")
        return N;
      if (t.theme === "custom")
        return {
          "--bg-color": t.bgColor,
          "--border-light": t.borderLight,
          "--border-dark": t.borderDark
        };
    });
    return (o, n) => (openBlock(), createElementBlock("div", O, [
      createBaseVNode("button", mergeProps({
        class: ["retro-btn", [unref(a)]],
        style: c.value,
        disabled: e.disabled,
        onClick: l
      }, o.$attrs), [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 16, P)
    ]));
  }
};
var M = k(T, [["__scopeId", "data-v-bf385a96"]]);
var Z = { class: "marquee-btn-container" };
var H = ["disabled"];
var J = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    linearGradient: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, s = r, l = (o) => {
      s("click", o);
    }, { sizeClass: a } = y(t.size), c = computed(() => {
      if (t.linearGradient)
        return {
          "--linear-gradient": t.linearGradient
        };
    });
    return (o, n) => (openBlock(), createElementBlock("div", Z, [
      createBaseVNode("button", mergeProps({
        class: ["marquee-btn", [unref(a)]],
        disabled: e.disabled,
        style: c.value,
        onClick: l
      }, o.$attrs), [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 16, H)
    ]));
  }
};
var K = k(J, [["__scopeId", "data-v-f40a30ce"]]);
var b = {
  ViNButton: V,
  ViGButton: E,
  ViRButton: M,
  ViMButton: K
};
var f = (e) => {
  f.installed || (f.installed = true, Object.keys(b).forEach((r) => {
    e.component(r, b[r]), e.component(Q(r), b[r]);
  }));
};
typeof window < "u" && window.Vue && window.Vue.use({ install: f });
var W = {
  install: f,
  ...b
};
function Q(e) {
  return e.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`).replace(/^-/, "");
}
export {
  E as ViGButton,
  K as ViMButton,
  V as ViNButton,
  M as ViRButton,
  W as default
};
//# sourceMappingURL=vistyleui.js.map
