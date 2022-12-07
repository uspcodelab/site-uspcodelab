<template>
    <div class="flex flex-col p-10">
        <ol class="border-l-2 border-ucl-orange-light">
            <li v-for="hackathon in hackathons" :key="hackathon.title">
                <hackathon-card :title="hackathon.title" :year="hackathon.year" :description="hackathon.description"
                    :locals="hackathon.locals" :dates="hackathon.dates" />
            </li>
        </ol>
    </div>
</template>
<script>

import HackathonCard from "@/components/hackathon/HackathonCard.vue";

export default {
    components: {
        HackathonCard
    },
    props: {
        hackathons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.event {
    border-color: ucl-orange-dark;
}
</style>
