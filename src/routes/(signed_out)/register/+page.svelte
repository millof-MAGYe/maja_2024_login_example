<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types.js";

  export let form: ActionData;
  export let data;
</script>

<form method="post" action="?/register" use:enhance>
  <label for="name">Username</label>
  <input type="text" name="username" />
  <label for="name">Password</label>
  <input type="password" name="password" />
  <label for="name">Re-type password</label>
  <input type="password" name="confirm_password" />
  <button>Register</button>
  {#if form?.error}
    <span style="color: red;">{form.error}</span>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
  }
  input {
    margin-bottom: 10px;
  }
</style>
