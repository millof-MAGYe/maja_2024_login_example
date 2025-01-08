<script>
    import { enhance } from "$app/forms";

    export let data;
</script>
<form action="?/add" method="post" enctype="multipart/form-data"
use:enhance>
<input type="file" name="image" accept="image/*" />
<button type="submit">submit</button>
</form>

{#each data.images as image}
<img src="data:image/jpeg;base64,{image.encoding}">
{/each}