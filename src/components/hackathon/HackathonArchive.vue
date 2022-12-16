<template>
    <div class="flex flex-col p-8 gap-10">
        <hackathon-card :hackathon="mostRecent" :isHeadline="true" />
        <div class="">
            <ol>
                <li v-for="hackathon in mostPrevious" :key="hackathon.title">
                    <hackathon-card :hackathon="hackathon" :isHeadline="false" />
                </li>
            </ol>
        </div>
    </div>
</template>
<script>

import HackathonCard from "@/components/hackathon/HackathonCard.vue";

export default {
    components: {
        HackathonCard,
    },
    props: {
        hackathons: {
            type: Array,
            required: true
        }
    },
    computed: {
        mostRecent() {
            return this.hackathons[0]
        },
        mostPrevious() {
            return this.hackathons.slice(1)
        }
    }
}
</script>

<style lang="scss">
.event {
    border-color: ucl-orange-dark;
}
</style>
