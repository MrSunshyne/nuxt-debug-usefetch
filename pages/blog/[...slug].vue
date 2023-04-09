<script setup lang="ts">
import { Post } from '~/types';

const route = useRoute();
const slug = route.params.slug[0] as string;
const { data: posts } = await useFetch("/api/posts");

const post = computed(() => {
  if (!posts.value) return null;
  return posts.value.find((post: Post) => post.slug === slug);
});

</script>

<template>
  <article class="" v-if="post">
    <h1>
      {{ post.title }}
    </h1>

    <OgImageStatic
      component="OgImageBlog"
      :description="'description here'"
      :customImage="'/images/post-image.png'"
    />

    slug: {{ slug }}

    <NuxtLink to="/blog">back</NuxtLink>

  </article>
</template>
