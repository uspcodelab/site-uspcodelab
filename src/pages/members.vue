<template>
  <main class="page">
  <member-list />
  </main>
</template>

<script>
import memberList from "@/components/members/memberList.vue";

export default {
  metaInfo: {
    title: "UCL::members",
  },
  components: {
    memberList
  }
};
</script>
