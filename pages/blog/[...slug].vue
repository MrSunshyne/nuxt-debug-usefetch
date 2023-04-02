<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug[0] as string;
const { data: posts } = await useFetch("/api/posts");

type Post = {
  title: string;
  slug: string;
};

type Posts = Post[];

const post = computed(() => {
  return posts.value.find((post: Post) => post.slug === slug);
});



</script>

<template>
  <article class="" v-if="post">
   <h1>
      {{ post.title }}
   </h1>

   slug: {{ slug }}

   <NuxtLink to="/blog">back</NuxtLink>

  </article>
</template>
