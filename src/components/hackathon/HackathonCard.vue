<template>
    <div>
        <div class="flex flex-start items-center">
            <div class="bg-ucl-orange-dark w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2">
            </div>
            <h4 class="text-gray-800 font-semibold text-xl -mt-2">{{ title }}</h4>
        </div>
        <div class="ml-6 mb-6 pb-6">
            <!-- <a href="#!"
                class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">
                {{ year }}</a> -->
            <p class="text-gray-700 mt-2 mb-4">{{ description }}</p>
            <p class="text-gray-700 mt-2 mb-4" v-for="local in locals">
                {{ local }}
            </p>
            <div class="flex flex-row gap-2 mb-4">
                <span v-for=" date in dates"
                    class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">
                    {{ date.day }}/{{ date.month }}/{{ date.year }}
                </span>
            </div>
            <button type="button" class="inline-block px-4 py-1.5
            bg-ucl-orange-light text-white font-medium text-xs
                leading-tight uppercase rounded shadow-md
                hover:bg-ucl-orange hover:shadow-lg focus:bg-ucl-orange
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-ucl-orange-dark active:shadow-lg transition duration-150 ease-in-out">
                saber mais
            </button>
        </div>
    </div>
</template>

<script>
// import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        locals: {
            type: Array,
            required: true
        },
        dates: {
            type: Array,
            required: true
        }
    }
}

</script>

<style lang="scss">
.img {
    width: 5%;
}
</style>