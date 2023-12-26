<script lang="ts">
  import Line from './Line.svelte';

  export let min: number, max: number, value: number;

  $: if (max < min) {
    max = min + 1;
    value = min;
  }
  $: if (value > max) value = max;
  $: if (value < min) value = min;

  // you can change linesAmount and it will work just fine :) But for big number probably it won't fit the container
  const linesAmount = 7;

  const lineLength = 1 / linesAmount;
  let lines = new Array(linesAmount).fill(0);

  // toFixed() because otherwise there were floating point accuracy problems
  const getDiff = (a: number, b: number) => +Math.abs(a - b).toFixed(3);

  // substracting lineLength / 2 to get value "in the middle of the line", that simplifies future computations
  const getLineValue = (i: number) =>
    ((i + 1) * lineLength - lineLength / 2) * (max - min) + min;

  const isMainLine = (i: number) =>
    getDiff(value, getLineValue(i)) <=
    +((lineLength / 2) * (max - min)).toFixed(3);

  const isMainLineNeighbour = (i: number) =>
    isMainLine(i + 1) || isMainLine(i - 1);

  const getLineOpacity = (i: number) => {
    if (value > getLineValue(i) || isMainLine(i)) {
      return 1;
    } else if (isMainLineNeighbour(i)) {
      return 0.6;
    }
    return 0.4;
  };
  const getLineSize = (i: number) => {
    let size: 'sm' | 'md' | 'lg' = 'sm';
    if (isMainLine(i)) {
      size = 'lg';
    } else if (isMainLineNeighbour(i)) {
      size = 'md';
    }
    return size;
  };

  const updateLines = () =>
    (lines = lines.map((_, i) => ({
      opacity: getLineOpacity(i),
      size: getLineSize(i),
    })));

  $: value, min, max, updateLines();
</script>

<div class="flex gap-2.5 items-center">
  {#each lines as { opacity, size }}
    <Line {opacity} {size} />
  {/each}
</div>
