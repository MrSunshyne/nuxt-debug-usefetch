<template>
    <div>
        <div>
            menu

            <NuxtLink to="/">home</NuxtLink>
            <NuxtLink to="/blog">blog</NuxtLink>
        </div>
        <div>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>
    </div>
</template>