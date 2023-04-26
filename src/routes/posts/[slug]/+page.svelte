<script>
  

  export let data;
  const { post } = data;


</script>
<a href="/posts/" class="bg-indigo-500 rounded-full text-white px-3 py-1">Wstecz</a>

<h1 class="my-8 text-center text-indigo-600 text-4xl uppercase font-medium">{post.title}</h1>

{#if post?.abstract}
  <div class="container mx-auto my-4 text-xl text-center text-stone-900 font-semibold">
    {post?.abstract}
  </div>
{/if}

{#if post?.content}
  <div class="container mx-auto text-base text-justify text-stone-700 font-normal">
    {@html post?.content}
  </div>
{/if}


