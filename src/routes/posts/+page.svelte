<script>
  import Post from '$lib/components/Post.svelte';

  export let data;
</script>

<form method="post" action="?/create" class="grid grid-cols-1 gap-2 w-2/5 mx-auto my-8"> 
  <input name="title" placeholder="Tytuł" type="text" class="border border-violet-700 py-1 px-3">
  <textarea placeholder="Treść" class="border border-violet-700 py-1 px-3"></textarea>
  <button class="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800">Dodaj</button>
</form>

<div class="grid grid-cols-2 gap-4">
  {#each data.posts as item}
    {#if item.active}
      <Post {...item} />
    {/if}
  {/each}
</div>