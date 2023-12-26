const __resolved__virtual_storySource_srcComponentsBrightnessmeterBrightnessmeterStorySvelte = `<script lang="ts">
  import BrightnessMeter from './BrightnessMeter.svelte';
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  let optimum = 0.65,
    min = 0,
    max = 1,
    value = optimum;
<\/script>

<Hst.Story>
  <Hst.Variant>
    <BrightnessMeter {optimum} {max} {min} {value} />

    <svelte:fragment slot="controls">
      <Hst.Number bind:value={min} title="Min" />
      <Hst.Number bind:value={max} title="Max" />
      <Hst.Number bind:value={optimum} title="Optimum" />
      <Hst.Number step={0.05} bind:value title="Value" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcComponentsBrightnessmeterBrightnessmeterStorySvelte as default
};
