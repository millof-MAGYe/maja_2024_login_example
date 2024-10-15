<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;
</script>

<h1>LOGIN PAGE</h1>

<form use:enhance action="?/login" method="post">
  <div>
    <input type="text" name="username" id="" />
    <input type="password" name="password" id="" />
    <button>LOGIN</button>
  </div>
  {#if form?.login_fail}
    <span>{form.login_fail}</span>
  {/if}
</form>

<style>
  span {
    color: red;
  }
</style>
