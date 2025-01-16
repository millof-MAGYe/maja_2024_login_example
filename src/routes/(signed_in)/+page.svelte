<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Välkommen {data.user.name}</h1>

<hr />

<form action="?/click" method="post">
  <button>
    counter: {data.user.count}
  </button>
</form>

<hr />

<form action="/login?/logout" method="post">
  <button>LOGOUT</button>
</form>
