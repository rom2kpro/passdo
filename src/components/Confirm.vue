<template>
    <h1>{{confirm}}</h1>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            confirm: ''
        }
    },
    async mounted() {
        var url_string = location.href
        var url = new URL(url_string);
        var url_confirm = url.search.slice(13);
        console.log(url_confirm)
        const response = await axios.get(`http://154.16.112.81/${url_confirm}`);
        this.confirm = response.data;
    },
}
</script>

