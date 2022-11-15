<template>
    <header class="header text-ucl-white h-screen md:h-full flex flex-wrap-reverse flex-row-reverse">
        <div>
            <img :src="devBoostLogo" class="img">
            <div class="flex flex-col">
                <div class="flex gap-x-0.5">
                    <div class="text-3xl">title</div>
                    <div class="text-3xl">year</div>
                </div>
                <div>description</div>
            </div>
        </div>
    </header>
</template>

<script>
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";

export default {
    data() {
        return {
            devBoostLogo
        }
    }
}

</script>

<style lang="scss">
.img {
    width: 5%;
}
</style>