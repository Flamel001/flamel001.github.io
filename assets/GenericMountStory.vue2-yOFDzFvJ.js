import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as validate_slots, W as element, X as svg_element, Y as attr_dev, Z as add_location, _ as insert_dev, $ as append_dev, a0 as noop, a1 as detach_dev, a2 as set_style, a3 as ensure_array_like_dev, a4 as transition_in, a5 as group_outros, a6 as check_outros, a7 as transition_out, a8 as destroy_each, a9 as create_component, aa as mount_component, ab as destroy_component, ac as binding_callbacks, ad as bind, ae as space, af as add_flush_callback, ag as Comp1, ah as Logo_square, ai as Logo_dark, aj as createRouter, ak as createWebHistory, al as createWebHashHistory, am as useDark, an as useToggle, k as watch, ao as markRaw, E as reactive, d as defineComponent, r as ref, ap as watchEffect, o as openBlock, q as createBlock, aq as mergeProps, ar as resolveDynamicComponent, h as createCommentVNode } from "./vendor-dpJQ1PgK.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const file$4 = "src/components/BrightnessMeter/Icons/Month.svelte";
function create_fragment$5(ctx) {
  let div;
  let svg;
  let path;
  let path_fill_opacity_value;
  const block = {
    c: function create() {
      div = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "clip-rule", "evenodd");
      attr_dev(path, "d", "M17.3087 11.1735C17.6859 10.9964 18.0882 11.3677 17.983 11.7711C17.6242 13.1447 16.919 14.4519 15.8334 15.5375C12.6094 18.7611 7.45186 18.8285 4.31137 15.6883C1.17088 12.5482 1.23945 7.38999 4.46337 4.16641C5.54905 3.08084 6.8553 2.37579 8.23012 2.01698C8.63354 1.91186 9.00382 2.31409 8.82782 2.69118C7.68271 5.13543 8.0587 8.06304 9.99808 10.0022C11.9363 11.9425 14.8642 12.3185 17.3087 11.1735Z");
      attr_dev(path, "fill", "white");
      attr_dev(path, "fill-opacity", path_fill_opacity_value = /*isDimmed*/
      ctx[0] ? 0.6 : 1);
      add_location(path, file$4, 12, 4, 193);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$4, 5, 2, 70);
      attr_dev(div, "class", "p-6");
      add_location(div, file$4, 4, 0, 50);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, svg);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*isDimmed*/
      1 && path_fill_opacity_value !== (path_fill_opacity_value = /*isDimmed*/
      ctx2[0] ? 0.6 : 1)) {
        attr_dev(path, "fill-opacity", path_fill_opacity_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Month", slots, []);
  let { isDimmed } = $$props;
  $$self.$$.on_mount.push(function() {
    if (isDimmed === void 0 && !("isDimmed" in $$props || $$self.$$.bound[$$self.$$.props["isDimmed"]])) {
      console.warn("<Month> was created without expected prop 'isDimmed'");
    }
  });
  const writable_props = ["isDimmed"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Month> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("isDimmed" in $$props2)
      $$invalidate(0, isDimmed = $$props2.isDimmed);
  };
  $$self.$capture_state = () => ({ isDimmed });
  $$self.$inject_state = ($$props2) => {
    if ("isDimmed" in $$props2)
      $$invalidate(0, isDimmed = $$props2.isDimmed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [isDimmed];
}
class Month extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { isDimmed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Month",
      options,
      id: create_fragment$5.name
    });
  }
  get isDimmed() {
    throw new Error("<Month>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isDimmed(value) {
    throw new Error("<Month>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/components/BrightnessMeter/Icons/Sun.svelte";
function create_fragment$4(ctx) {
  let div;
  let svg;
  let path;
  let path_fill_opacity_value;
  const block = {
    c: function create() {
      div = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "clip-rule", "evenodd");
      attr_dev(path, "d", "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V3ZM6.30711 4.89289C5.91658 4.50237 5.28342 4.50237 4.89289 4.89289C4.50237 5.28342 4.50237 5.91658 4.89289 6.30711L5.59289 7.00711C5.98342 7.39763 6.61658 7.39763 7.00711 7.00711C7.39763 6.61658 7.39763 5.98342 7.00711 5.59289L6.30711 4.89289ZM19.1071 6.30711C19.4976 5.91658 19.4976 5.28342 19.1071 4.89289C18.7166 4.50237 18.0834 4.50237 17.6929 4.89289L16.9929 5.59289C16.6024 5.98342 16.6024 6.61658 16.9929 7.00711C17.3834 7.39763 18.0166 7.39763 18.4071 7.00711L19.1071 6.30711ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20ZM7.00711 18.4071C7.39763 18.0166 7.39763 17.3834 7.00711 16.9929C6.61658 16.6024 5.98342 16.6024 5.59289 16.9929L4.89289 17.6929C4.50237 18.0834 4.50237 18.7166 4.89289 19.1071C5.28342 19.4976 5.91658 19.4976 6.30711 19.1071L7.00711 18.4071ZM18.4071 16.9929C18.0166 16.6024 17.3834 16.6024 16.9929 16.9929C16.6024 17.3834 16.6024 18.0166 16.9929 18.4071L17.6929 19.1071C18.0834 19.4976 18.7166 19.4976 19.1071 19.1071C19.4976 18.7166 19.4976 18.0834 19.1071 17.6929L18.4071 16.9929ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z");
      attr_dev(path, "fill", "white");
      attr_dev(path, "fill-opacity", path_fill_opacity_value = /*isDimmed*/
      ctx[0] ? 0.6 : 1);
      add_location(path, file$3, 12, 4, 193);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width", "24");
      attr_dev(svg, "height", "24");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "fill", "none");
      add_location(svg, file$3, 5, 2, 70);
      attr_dev(div, "class", "p-6");
      add_location(div, file$3, 4, 0, 50);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, svg);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*isDimmed*/
      1 && path_fill_opacity_value !== (path_fill_opacity_value = /*isDimmed*/
      ctx2[0] ? 0.6 : 1)) {
        attr_dev(path, "fill-opacity", path_fill_opacity_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Sun", slots, []);
  let { isDimmed } = $$props;
  $$self.$$.on_mount.push(function() {
    if (isDimmed === void 0 && !("isDimmed" in $$props || $$self.$$.bound[$$self.$$.props["isDimmed"]])) {
      console.warn("<Sun> was created without expected prop 'isDimmed'");
    }
  });
  const writable_props = ["isDimmed"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Sun> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("isDimmed" in $$props2)
      $$invalidate(0, isDimmed = $$props2.isDimmed);
  };
  $$self.$capture_state = () => ({ isDimmed });
  $$self.$inject_state = ($$props2) => {
    if ("isDimmed" in $$props2)
      $$invalidate(0, isDimmed = $$props2.isDimmed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [isDimmed];
}
class Sun extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { isDimmed: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Sun",
      options,
      id: create_fragment$4.name
    });
  }
  get isDimmed() {
    throw new Error("<Sun>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isDimmed(value) {
    throw new Error("<Sun>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/components/BrightnessMeter/Components/Line.svelte";
function create_fragment$3(ctx) {
  let div;
  let div_class_value;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", div_class_value = `bg-white rounded-[3px] duration-300 transition-[height,width,opacity]
  ${/*size*/
      ctx[0] === "sm" ? "h-[20px] w-[6px] @xs:h-[24px] @xs:w-[8px]" : (
        /*size*/
        ctx[0] === "md" ? "h-[24px] w-[6px] @xs:h-[28px] @xs:w-[8px]" : "h-[36px] w-[6px] @xs:h-[42px] @xs:w-[10px]"
      )}`);
      set_style(
        div,
        "opacity",
        /*opacity*/
        ctx[1]
      );
      add_location(div, file$2, 4, 0, 55);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*size*/
      1 && div_class_value !== (div_class_value = `bg-white rounded-[3px] duration-300 transition-[height,width,opacity]
  ${/*size*/
      ctx2[0] === "sm" ? "h-[20px] w-[6px] @xs:h-[24px] @xs:w-[8px]" : (
        /*size*/
        ctx2[0] === "md" ? "h-[24px] w-[6px] @xs:h-[28px] @xs:w-[8px]" : "h-[36px] w-[6px] @xs:h-[42px] @xs:w-[10px]"
      )}`)) {
        attr_dev(div, "class", div_class_value);
      }
      if (dirty & /*opacity*/
      2) {
        set_style(
          div,
          "opacity",
          /*opacity*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Line", slots, []);
  let { size, opacity } = $$props;
  $$self.$$.on_mount.push(function() {
    if (size === void 0 && !("size" in $$props || $$self.$$.bound[$$self.$$.props["size"]])) {
      console.warn("<Line> was created without expected prop 'size'");
    }
    if (opacity === void 0 && !("opacity" in $$props || $$self.$$.bound[$$self.$$.props["opacity"]])) {
      console.warn("<Line> was created without expected prop 'opacity'");
    }
  });
  const writable_props = ["size", "opacity"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Line> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("opacity" in $$props2)
      $$invalidate(1, opacity = $$props2.opacity);
  };
  $$self.$capture_state = () => ({ size, opacity });
  $$self.$inject_state = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("opacity" in $$props2)
      $$invalidate(1, opacity = $$props2.opacity);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [size, opacity];
}
class Line extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { size: 0, opacity: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Line",
      options,
      id: create_fragment$3.name
    });
  }
  get size() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get opacity() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set opacity(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/components/BrightnessMeter/Components/Bar.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i].opacity;
  child_ctx[13] = list[i].size;
  return child_ctx;
}
function create_each_block(ctx) {
  let line;
  let current;
  line = new Line({
    props: {
      opacity: (
        /*opacity*/
        ctx[12]
      ),
      size: (
        /*size*/
        ctx[13]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(line.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(line, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const line_changes = {};
      if (dirty & /*lines*/
      1)
        line_changes.opacity = /*opacity*/
        ctx2[12];
      if (dirty & /*lines*/
      1)
        line_changes.size = /*size*/
        ctx2[13];
      line.$set(line_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(line.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(line.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(line, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(45:2) {#each lines as { opacity, size }}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div;
  let current;
  let each_value = ensure_array_like_dev(
    /*lines*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div, "class", "flex gap-2.5 items-center");
      add_location(div, file$1, 58, 0, 1125);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*lines*/
      1) {
        each_value = ensure_array_like_dev(
          /*lines*/
          ctx2[0]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const linesAmount = 7;
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Bar", slots, []);
  let { min, max, value } = $$props;
  const lineLength = 1 / linesAmount;
  let lines = new Array(linesAmount).fill(0);
  const getDiff = (a, b) => +Math.abs(a - b).toFixed(3);
  const getLineValue = (i) => ((i + 1) * lineLength - lineLength / 2) * (max - min) + min;
  const isMainLine = (i) => getDiff(value, getLineValue(i)) <= +(lineLength / 2 * (max - min)).toFixed(3);
  const isMainLineNeighbour = (i) => isMainLine(i + 1) || isMainLine(i - 1);
  const getLineOpacity = (i) => {
    if (value > getLineValue(i) || isMainLine(i)) {
      return 1;
    } else if (isMainLineNeighbour(i)) {
      return 0.6;
    }
    return 0.4;
  };
  const getLineSize = (i) => {
    let size = "sm";
    if (isMainLine(i)) {
      size = "lg";
    } else if (isMainLineNeighbour(i)) {
      size = "md";
    }
    return size;
  };
  const updateLines = () => $$invalidate(0, lines = lines.map((_, i) => ({
    opacity: getLineOpacity(i),
    size: getLineSize(i)
  })));
  $$self.$$.on_mount.push(function() {
    if (min === void 0 && !("min" in $$props || $$self.$$.bound[$$self.$$.props["min"]])) {
      console.warn("<Bar> was created without expected prop 'min'");
    }
    if (max === void 0 && !("max" in $$props || $$self.$$.bound[$$self.$$.props["max"]])) {
      console.warn("<Bar> was created without expected prop 'max'");
    }
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Bar> was created without expected prop 'value'");
    }
  });
  const writable_props = ["min", "max", "value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Bar> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(1, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  $$self.$capture_state = () => ({
    Line,
    min,
    max,
    value,
    linesAmount,
    lineLength,
    lines,
    getDiff,
    getLineValue,
    isMainLine,
    isMainLineNeighbour,
    getLineOpacity,
    getLineSize,
    updateLines
  });
  $$self.$inject_state = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(1, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("lines" in $$props2)
      $$invalidate(0, lines = $$props2.lines);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*max, min*/
    10) {
      if (max < min)
        $$invalidate(1, max = min + 1);
    }
    if ($$self.$$.dirty & /*value, max*/
    6) {
      if (value > max)
        $$invalidate(2, value = max);
    }
    if ($$self.$$.dirty & /*value, min*/
    12) {
      if (value < min)
        $$invalidate(2, value = min);
    }
    if ($$self.$$.dirty & /*value, min, max*/
    14) {
      updateLines();
    }
  };
  return [lines, max, value, min];
}
class Bar extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { min: 3, max: 1, value: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Bar",
      options,
      id: create_fragment$2.name
    });
  }
  get min() {
    throw new Error("<Bar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Bar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Bar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Bar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Bar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Bar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/components/BrightnessMeter/BrightnessMeter.svelte";
function create_fragment$1(ctx) {
  let div;
  let month;
  let t0;
  let bar;
  let updating_value;
  let t1;
  let sun;
  let current;
  month = new Month({
    props: {
      isDimmed: (
        /*value*/
        ctx[0] >= /*optimum*/
        ctx[3]
      )
    },
    $$inline: true
  });
  function bar_value_binding(value) {
    ctx[4](value);
  }
  let bar_props = { min: (
    /*min*/
    ctx[1]
  ), max: (
    /*max*/
    ctx[2]
  ) };
  if (
    /*value*/
    ctx[0] !== void 0
  ) {
    bar_props.value = /*value*/
    ctx[0];
  }
  bar = new Bar({ props: bar_props, $$inline: true });
  binding_callbacks.push(() => bind(bar, "value", bar_value_binding));
  sun = new Sun({
    props: {
      isDimmed: (
        /*value*/
        ctx[0] < /*optimum*/
        ctx[3]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(month.$$.fragment);
      t0 = space();
      create_component(bar.$$.fragment);
      t1 = space();
      create_component(sun.$$.fragment);
      attr_dev(div, "class", "@container flex gap-7");
      add_location(div, file, 11, 0, 208);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(month, div, null);
      append_dev(div, t0);
      mount_component(bar, div, null);
      append_dev(div, t1);
      mount_component(sun, div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const month_changes = {};
      if (dirty & /*value, optimum*/
      9)
        month_changes.isDimmed = /*value*/
        ctx2[0] >= /*optimum*/
        ctx2[3];
      month.$set(month_changes);
      const bar_changes = {};
      if (dirty & /*min*/
      2)
        bar_changes.min = /*min*/
        ctx2[1];
      if (dirty & /*max*/
      4)
        bar_changes.max = /*max*/
        ctx2[2];
      if (!updating_value && dirty & /*value*/
      1) {
        updating_value = true;
        bar_changes.value = /*value*/
        ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      bar.$set(bar_changes);
      const sun_changes = {};
      if (dirty & /*value, optimum*/
      9)
        sun_changes.isDimmed = /*value*/
        ctx2[0] < /*optimum*/
        ctx2[3];
      sun.$set(sun_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(month.$$.fragment, local);
      transition_in(bar.$$.fragment, local);
      transition_in(sun.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(month.$$.fragment, local);
      transition_out(bar.$$.fragment, local);
      transition_out(sun.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(month);
      destroy_component(bar);
      destroy_component(sun);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessMeter", slots, []);
  let { min = 0, max = 1, optimum = 0.65, value = 0 } = $$props;
  const writable_props = ["min", "max", "optimum", "value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter> was created with unknown prop '${key}'`);
  });
  function bar_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(3, optimum = $$props2.optimum);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$capture_state = () => ({
    Month,
    Sun,
    Bar,
    min,
    max,
    optimum,
    value
  });
  $$self.$inject_state = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(3, optimum = $$props2.optimum);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, min, max, optimum, bar_value_binding];
}
class BrightnessMeter extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { min: 1, max: 2, optimum: 3, value: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter",
      options,
      id: create_fragment$1.name
    });
  }
  get min() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get optimum() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set optimum(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_1(ctx) {
  let brightnessmeter;
  let current;
  brightnessmeter = new BrightnessMeter({
    props: {
      optimum: (
        /*optimum*/
        ctx[1]
      ),
      max: (
        /*max*/
        ctx[3]
      ),
      min: (
        /*min*/
        ctx[2]
      ),
      value: (
        /*value*/
        ctx[4]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(brightnessmeter.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(brightnessmeter, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const brightnessmeter_changes = {};
      if (dirty & /*optimum*/
      2)
        brightnessmeter_changes.optimum = /*optimum*/
        ctx2[1];
      if (dirty & /*max*/
      8)
        brightnessmeter_changes.max = /*max*/
        ctx2[3];
      if (dirty & /*min*/
      4)
        brightnessmeter_changes.min = /*min*/
        ctx2[2];
      if (dirty & /*value*/
      16)
        brightnessmeter_changes.value = /*value*/
        ctx2[4];
      brightnessmeter.$set(brightnessmeter_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(brightnessmeter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(brightnessmeter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(brightnessmeter, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(7:2) <Hst.Variant>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_number0;
  let updating_value;
  let t0;
  let hst_number1;
  let updating_value_1;
  let t1;
  let hst_number2;
  let updating_value_2;
  let t2;
  let hst_number3;
  let updating_value_3;
  let current;
  function hst_number0_value_binding(value) {
    ctx[5](value);
  }
  let hst_number0_props = { title: "Min" };
  if (
    /*min*/
    ctx[2] !== void 0
  ) {
    hst_number0_props.value = /*min*/
    ctx[2];
  }
  hst_number0 = new /*Hst*/
  ctx[0].Number({ props: hst_number0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number0, "value", hst_number0_value_binding));
  function hst_number1_value_binding(value) {
    ctx[6](value);
  }
  let hst_number1_props = { title: "Max" };
  if (
    /*max*/
    ctx[3] !== void 0
  ) {
    hst_number1_props.value = /*max*/
    ctx[3];
  }
  hst_number1 = new /*Hst*/
  ctx[0].Number({ props: hst_number1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number1, "value", hst_number1_value_binding));
  function hst_number2_value_binding(value) {
    ctx[7](value);
  }
  let hst_number2_props = { title: "Optimum" };
  if (
    /*optimum*/
    ctx[1] !== void 0
  ) {
    hst_number2_props.value = /*optimum*/
    ctx[1];
  }
  hst_number2 = new /*Hst*/
  ctx[0].Number({ props: hst_number2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number2, "value", hst_number2_value_binding));
  function hst_number3_value_binding(value) {
    ctx[8](value);
  }
  let hst_number3_props = { step: 0.05, title: "Value" };
  if (
    /*value*/
    ctx[4] !== void 0
  ) {
    hst_number3_props.value = /*value*/
    ctx[4];
  }
  hst_number3 = new /*Hst*/
  ctx[0].Number({ props: hst_number3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number3, "value", hst_number3_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number0.$$.fragment);
      t0 = space();
      create_component(hst_number1.$$.fragment);
      t1 = space();
      create_component(hst_number2.$$.fragment);
      t2 = space();
      create_component(hst_number3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_number1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_number2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_number3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number0_changes = {};
      if (!updating_value && dirty & /*min*/
      4) {
        updating_value = true;
        hst_number0_changes.value = /*min*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_number0.$set(hst_number0_changes);
      const hst_number1_changes = {};
      if (!updating_value_1 && dirty & /*max*/
      8) {
        updating_value_1 = true;
        hst_number1_changes.value = /*max*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_number1.$set(hst_number1_changes);
      const hst_number2_changes = {};
      if (!updating_value_2 && dirty & /*optimum*/
      2) {
        updating_value_2 = true;
        hst_number2_changes.value = /*optimum*/
        ctx2[1];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_number2.$set(hst_number2_changes);
      const hst_number3_changes = {};
      if (!updating_value_3 && dirty & /*value*/
      16) {
        updating_value_3 = true;
        hst_number3_changes.value = /*value*/
        ctx2[4];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_number3.$set(hst_number3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number0.$$.fragment, local);
      transition_in(hst_number1.$$.fragment, local);
      transition_in(hst_number2.$$.fragment, local);
      transition_in(hst_number3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number0.$$.fragment, local);
      transition_out(hst_number1.$$.fragment, local);
      transition_out(hst_number2.$$.fragment, local);
      transition_out(hst_number3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_number0, detaching);
      destroy_component(hst_number1, detaching);
      destroy_component(hst_number2, detaching);
      destroy_component(hst_number3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(10:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, value, optimum, max, min*/
      542) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(6:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, value, optimum, max, min*/
      542) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessMeter_story", slots, []);
  let { Hst } = $$props;
  let optimum = 0.65, min = 0, max = 1, value = optimum;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<BrightnessMeter_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter_story> was created with unknown prop '${key}'`);
  });
  function hst_number0_value_binding(value2) {
    min = value2;
    $$invalidate(2, min);
  }
  function hst_number1_value_binding(value2) {
    max = value2;
    $$invalidate(3, max);
  }
  function hst_number2_value_binding(value2) {
    optimum = value2;
    $$invalidate(1, optimum);
  }
  function hst_number3_value_binding(value$1) {
    value = value$1;
    $$invalidate(4, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    BrightnessMeter,
    Hst,
    optimum,
    min,
    max,
    value
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("optimum" in $$props2)
      $$invalidate(1, optimum = $$props2.optimum);
    if ("min" in $$props2)
      $$invalidate(2, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(4, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    optimum,
    min,
    max,
    value,
    hst_number0_value_binding,
    hst_number1_value_binding,
    hst_number2_value_binding,
    hst_number3_value_binding
  ];
}
class BrightnessMeter_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<BrightnessMeter_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BrightnessMeter_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-components-brightnessmeter-brightnessmeter-story-svelte", "path": ["BrightnessMeter"], "filePath": "src/components/BrightnessMeter/BrightnessMeter.story.svelte", "story": { "id": "src-components-brightnessmeter-brightnessmeter-story-svelte", "title": "BrightnessMeter", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-brightnessmeter-brightnessmeter-story-svelte-0", "title": "untitled", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 0, component: BrightnessMeter_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-brightnessmeter-brightnessmeter-story-svelte-DrvOcAni.js"), true ? __vite__mapDeps([]) : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/Users/flamel/work/haut_ai_test/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-l48RF6us.js"), true ? __vite__mapDeps([]) : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 1 }] }, { "title": "BrightnessMeter", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/flamel/work/haut_ai_test/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte4", "moduleName": "@histoire/plugin-svelte", "setupFn": ["setupSvelte3", "setupSvelte4"] }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/Users/flamel/work/haut_ai_test/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte4"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"], "setupFile": "./histoire-setup.ts" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-qLpWMgQa.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-wGMJWfjL.js"), true ? __vite__mapDeps([3,2,1,4,5,6]) : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-dpJQ1PgK.js").then((n) => n.aY), true ? __vite__mapDeps([]) : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-dpJQ1PgK.js").then((n) => n.aZ), true ? __vite__mapDeps([]) : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView.vue-qLpWMgQa.js","assets/story-iOckIqjJ.js","assets/vendor-dpJQ1PgK.js","assets/StoryView.vue-wGMJWfjL.js","assets/MobileOverlay.vue2-8E8w8Q5r.js","assets/BaseEmpty.vue-iLJ2N2dR.js","assets/state-dj-J30QC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}