<script>
  export let title = ""
  export let abstract = ""
</script>

<div class="p-4 text-2xl">
  <h2 class="font-medium text-3xl my-2">{title}</h2>
  <div class="bg-stone-50">
    {@html abstract}
  </div>
  <slot>
    
  </slot>
</div>