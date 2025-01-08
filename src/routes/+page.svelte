<script lang="ts">
  import { enhance } from "$app/forms";

  export let data;
</script>

<h1>WELCOME {data.user.username} TO THE HOME PAGE</h1>

<form use:enhance action="/login?/outlog" method="post">
  <button>LOGOUT</button>
</form>

