<template>
    <div :class="[isHeadline ? 'headline' : '', 'card-container']">
        <div v-if="isHeadline" class="card-img-right">
            <img :src="hackathon.imgUrl" alt="USPCodeLab">
        </div>
        <div class="card-content">
            <div class="card-title-container">
                <h4 class="card-title">{{ hackathon.title }}</h4>
                <div v-if="!isHeadline" class="card-img-title">
                    <img :src="hackathon.imgUrl" alt="USPCodeLab">
                </div>
            </div>
            <div class="card-details">

                <span class="text-ucl-orange-dark text-sm">
                    Edição [ {{ hackathon.year }} ]
                </span>
                <p class="card-text">{{ hackathon.description }}</p>
                <hackathon-locals :locals="hackathon.locals" />
                <hackathon-dates :dates="hackathon.dates" />
                <div class="card-button">
                    <Button>
                        <a :href="hackathon.to" target="_blank"> Saiba mais </a>
                    </Button>
                </div>
            </div>
        </div>
        <div v-if="!isHeadline" class="card-img-left">
            <img :src="hackathon.imgUrl" alt="USPCodeLab">
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";
import HackathonDates from "./HackathonDates.vue";
import HackathonLocals from "./HackathonLocals.vue";

export default {
    components: {
        Button,
        HackathonDates,
        HackathonLocals
    },
    props: {
        hackathon: {
            type: Object,
            required: true
        },
        isHeadline: {
            type: Boolean,
            default: false
        }
    }
}

</script>

<style lang="postcss" scoped>
.card-container {
    @apply flex flex-row flex-wrap justify-around items-center h-full;
    @apply flex-row;
    gap: 1rem;
}

.headline {
    @apply flex-row;
    @apply border-ucl-orange-light rounded-xl mb-8 shadow-xl;
    @apply border-r-4 border-l-4 p-5 ml-1;
}

.card-content {
    @apply ml-1 mb-1 p-1;
    flex-basis: 30rem;
}

.card-details {
    @apply flex flex-col self-center;
    @apply ml-1 mb-1 pb-1;
}

.card-text {
    @apply text-gray-700 mt-2 mb-4;
}

.card-title {
    @apply text-gray-800 font-semibold text-3xl m-1;
}


.card-img-right,
.card-img-left {
    @apply mr-10 ml-10;
    flex-basis: 20rem;
    align-self: center;
    justify-self: center;
}

.card-title-container {
    @apply flex flex-row items-center justify-between;
}

.card-img-title {
    @apply hidden self-center justify-self-center;
    flex-basis: 4rem;
}

@media (max-width: 992px) {
    .card-img-title {
        @apply flex;
    }

    .card-img-left {
        @apply hidden;
    }

    .card-title {
        @apply text-2xl;
    }
}
</style>