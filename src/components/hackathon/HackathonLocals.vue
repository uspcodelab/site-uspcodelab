<template>
    <div class="locals-container">
        <span>Local(is)</span>
        <div class="locals">
            <span v-for="local in locals">
                [ {{ local }} ]
            </span>
        </div>
    </div>

</template>
<script>
export default {
    props: {
        locals: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="postcss" scoped>
.locals-container {
    @apply flex flex-row flex-wrap gap-2 mb-4 font-medium text-ucl-orange-dark text-sm;
}

.locals {
    @apply flex flex-col ml-2;
}
</style>