<template>
<Banner />
<ServiceBanner />
<Workflow />
<GridGallery />
<Comment />
<Team />
<Article />
<Social/>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ServiceBanner from '@/components/Service.vue';
import Workflow from '@/components/Workflow.vue';
import GridGallery from '@/components/GridGallery.vue';
import Comment from '@/components/Comment.vue';
import Team from '@/components/Team.vue';
import Article from '@/components/Article.vue';
import Social from '@/components/Social.vue';

export default {
    name: "Home",
    components: {
        Banner,
        ServiceBanner,
        Workflow,
        GridGallery,
        Comment,
        Team,
        Article,
        Social
    }
}
</script>

<style scoped lang="scss">

</style>
