<script>
  import { onMount } from "svelte";
  import Post from "./Post.svelte";

  export let items = []

  onMount(() => {
    alert('cos')
  })
</script>

  {#each items as item}
    {#if item.active}

    
      <Post {...item} on:usun />
    {/if}
  {/each}