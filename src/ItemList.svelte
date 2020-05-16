<script>
    import metalls from './data.js'
    let selected_metall;
    let sel
    console.log(selected_metall)

</script>
<select bind:value={selected_metall} on:change={selected_mark= metalls.find(function (item){item.id===selected_metall})}>
    {#each metalls as metall}
        <option value={metall.id}>
            {metall.name}
        </option>
    {/each}
</select>