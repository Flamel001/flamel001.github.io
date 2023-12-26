<script lang="ts">
  export let size: 'sm' | 'md' | 'lg', opacity: number;
</script>

<div
  class={`bg-white rounded-[3px] duration-300 transition-[height,width,opacity]
  ${
    size === 'sm'
      ? 'h-[20px] w-[6px] @xs:h-[24px] @xs:w-[8px]'
      : size === 'md'
        ? 'h-[24px] w-[6px] @xs:h-[28px] @xs:w-[8px]'
        : 'h-[36px] w-[6px] @xs:h-[42px] @xs:w-[10px]'
  }`}
  style:opacity
></div>
