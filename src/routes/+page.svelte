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



