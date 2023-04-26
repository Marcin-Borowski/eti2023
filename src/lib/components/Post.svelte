<!-- @format -->
<script>
  import { createEventDispatcher } from "svelte";

  export let title = "";
  export let abstract = "";
  export let slug = "";

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch("usun", slug);
  };
</script>

<div class="flex flex-col">
  <a href={`/posts/${slug}/`} class="p-4 text-2xl border border-stone-800 bg-stone-200 hover:bg-stone-300 shadow-md">
    <h2 class="font-medium text-3xl my-2">{title}</h2>
    <div class="bg-stone-50">
      {@html abstract}
    </div>
  </a>

  <button on:click={onClick} class="bg-red-500 px-8 py-2">USUŃ</button>
</div>
