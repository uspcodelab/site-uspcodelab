<template lang="">
    <div class="dates-container">
        <span>dia(s)</span>
        <div class="dates">
            <span v-for="(date, index) in dates" :key="index">
                [ {{formatDate(date)}} ]
            </span>
        </div>
    </div>

</template>
<script>
export default {
    props: {
        dates: {
            type: Array,
            default: []
        }
    },
    methods: {
        formatDate(date) {
            return date
                .toLocaleDateString('pt-br', { timeZone: 'UTC' })
                .replaceAll('/', ' • ');
        }
    }
}
</script>
<style lang="postcss" scoped>
.dates-container {
    @apply flex flex-row flex-wrap;
    @apply gap-2 mb-4;
    @apply font-medium text-ucl-orange-dark text-sm;
}

.dates {
    @apply flex flex-col ml-2;
}
</style>