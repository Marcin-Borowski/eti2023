<script>
  import Post from '$lib/components/Post.svelte';

  export let data;
</script>

<div class="grid grid-cols-2 gap-4">
  {#each data.posts as item}
    {#if item.active}
      <Post {...item} />
    {/if}
  {/each}
</div>