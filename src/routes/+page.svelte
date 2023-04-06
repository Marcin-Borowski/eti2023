<script>
  import Post from "$lib/components/Post.svelte";

  let posts = [
    {
      title: "Curabitur est gravida et libero vitae dictum.",
      abstract: "Salutantibus vitae elit libero, a pharetra augue. Pellentesque habitant morbi tristique senectus et netus. Tityre, tu patulae recubans sub tegmine fagi dolor.",
      active: true,
    },
    {
      title: "Excepteur sint obcaecat cupiditat non proident culpa.",
      abstract: "Nihilne te <strong>nocturnum</strong> praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Nihil hic munitissimus habendi senatus locus, nihil horum? Nec dubitamus multa iter quae et nos invenerat.",
      active: true,
      keywords: "test, cos, eti"
    },
  ];

  let titleInput;
  let title = ""
  let abstractInput;
  let abstract = ""
  

    const onClick = () => {
     posts = [...posts, {
        title,
        abstract,
        active: true,
        keywords: ""
      }]

      titleInput.value = ""
      abstractInput.value = ""
    }

</script>

<h1 class="text-4xl text-center text-sky-700">Mój BLOG</h1>

<form class="grid grid-cols-1 gap-2 w-2/5 mx-auto my-8"> 
  <input bind:this={titleInput} bind:value={title} placeholder="Tytuł" type="text" class="border border-violet-700 py-1 px-3">
  <textarea bind:this={abstractInput} bind:value={abstract} placeholder="Treść" class="border border-violet-700 py-1 px-3"></textarea>
  <button on:click={onClick} class="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800">Dodaj</button>
</form>


<div class="grid grid-cols-2 gap-4">
  {#each posts as item}
    {#if item.active}
    
      <Post {...item}>
        <div class="italic text-orange-600">{item.keywords}</div>
      </Post>

    {/if}
  {/each}
</div>
