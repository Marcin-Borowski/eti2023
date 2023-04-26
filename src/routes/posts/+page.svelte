<!-- @format -->
<script>
  import Post from "$lib/components/Post.svelte";
  import List from "../../lib/components/List.svelte";

  export let data;
  let posts = data.posts;

  const onUsun = async (event) => {
    const slug = event.detail;

    const result = await fetch("/api/posts/", {
      method: "DELETE",
      body: JSON.stringify({ slug }),
      headers: {
        "content-type": "application/json",
      },
    });

    posts = await result.json()
  };

  
</script>

<form method="post" action="?/create" class="grid grid-cols-1 gap-2 w-2/5 mx-auto my-8">
  <input name="title" placeholder="Tytuł" type="text" class="border border-violet-700 py-1 px-3" />
  <textarea name="abstract" placeholder="Prolog" class="border border-violet-700 py-1 px-3" />
  <textarea name="content" placeholder="Treść" class="border border-violet-700 py-1 px-3" />
  <button class="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800">Dodaj</button>
</form>

<div class="grid grid-cols-2 gap-4">
  <List items={posts} on:usun={onUsun} />
</div>
