<script setup lang="ts">
const { data: posts } = await useFetch("/api/posts");

</script>


<template>
    <h1 class="text-4xl font-bold">Home</h1>
    <div class="py-5" v-if="posts">
        <div v-for="post in posts" class="text-sm lg:text-xl flex gap-2 my-3">
            <nuxt-link :to="'/blog/' + post.slug" class="hover:text-green-500">
                {{ post.title }}
            </nuxt-link>
        </div>
    </div>
    <div v-else>no posts</div>
</template>
