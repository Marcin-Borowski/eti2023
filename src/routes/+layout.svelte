<script>
  import "../app.postcss";
</script>

<header class="bg-stone-400 px-8 py-2 flex justify-end">
  <nav>
    <ul class="flex space-x-4">
      <li><a href="/posts/">Posty</a></li>
      <li><a href="#cos">Polityka prywatności</a></li>
      <li><a href="#cos">Regulamin</a></li>
      <li><a href="#cos">Kontakt</a></li>
    </ul>
  </nav>
</header>

<div class="border-2 border-red-600 p-4">
<slot /></div>

<footer class="bg-orange-200">
  Footer
</footer>
