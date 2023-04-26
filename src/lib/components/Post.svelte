<!-- @format -->
<script>
  import { createEventDispatcher } from "svelte";

  export let title = "";
  export let abstract = "";
  export let slug = "";

  const url = `/posts/${slug}/`;

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch("usun", slug);
  };
</script>

<div class="flex flex-col">
  <a href={url} class:border-red-800={slug.length > 15} class="p-4 text-2xl border border-stone-800 bg-stone-200 hover:bg-stone-300 shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 fill-red-500 bg-yellow-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>

    <h2 class="font-medium text-3xl my-2">{title}</h2>
    <div class="bg-stone-50">
      {@html abstract}
    </div>
  </a>

  <button on:click={onClick} class="bg-red-500 px-8 py-2">USUŃ</button>
</div>
