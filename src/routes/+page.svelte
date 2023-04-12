<script>
  import Post from "$lib/components/Post.svelte";

  let posts = [];

  const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    console.log(url);

    const response = await fetch(url);
    const data = await response.json();

    posts = data.map((item) => {
      return {
        title: item.title, 
        abstract: item.body,
        active: true,
        keywords: ''
      };
    })

    // const query=  "qui est esse";
    // posts = posts.filter((item, i) => item.title == query);
    // posts = [posts.find((item, i) => item.title == query)];
  }

</script>

<h1 class="text-4xl text-center text-sky-700">Mój BLOG</h1>

<form method="post" action="?/create" class="grid grid-cols-1 gap-2 w-2/5 mx-auto my-8"> 
  <input name="title" placeholder="Tytuł" type="text" class="border border-violet-700 py-1 px-3">
  <textarea placeholder="Treść" class="border border-violet-700 py-1 px-3"></textarea>
  <button class="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800">Dodaj</button>
</form>


<div class="p-4 mx-auto text-center">
  <button
    class="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800"
    on:click={getPosts}>Pobierz</button>
</div>
<div class="grid grid-cols-2 gap-4">
  {#each posts as item}
    {#if item.active}
    
      <Post {...item}>
        <div class="italic text-orange-600">{item.keywords}</div>
      </Post>

    {/if}
  {/each}
</div>
