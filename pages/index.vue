<script setup lang="ts">
let theVibrant = resolveComponent('TheVibrant');
let theDull = resolveComponent('TheDull');
const { data: posts } = await useFetch("/api/posts");
</script>


<template>
    <div>
        <OgImageStatic component="OgImageBlog" :description="'HOME OG'" :customImage="'/images/post-image.png'" />
        <h1 class="text-4xl font-bold">Home using v2.0.0-beta.15</h1>
        <div class="py-5" v-if="posts">
            <div v-for="post in posts" class="text-sm lg:text-xl flex gap-2 my-3">
                <nuxt-link :to="'/blog/' + post.slug" class="hover:text-green-500">
                    {{ post.title }}
                </nuxt-link>
            </div>
        </div>
        <div v-else>no posts</div>

        <component :is="theVibrant" :title="'helloooooo'" />
        <component :is="theDull" />

    </div>
    <!-- <TheVibrant /> -->
</template>
 