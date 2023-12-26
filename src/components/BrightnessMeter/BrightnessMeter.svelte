<script lang="ts">
  import Month from './Icons/Month.svelte';
  import Sun from './Icons/Sun.svelte';
  import Bar from './Components/Bar.svelte';

  export let min = 0,
    max = 1,
    optimum = 0.65,
    value = 0;
</script>

<div class="@container flex gap-7">
  <Month isDimmed={value >= optimum} />
  <Bar {min} {max} bind:value />
  <Sun isDimmed={value < optimum} />
</div>
