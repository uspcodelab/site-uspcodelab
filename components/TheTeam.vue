<template>
  <b-row id="team" tag="section" class="team text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="text-primary pb-3">Equipe</h1>
    </b-col>

    <b-col sm="4" class="team__profile py-3 py-md-0">
      <img src="../assets/team/placeholder.png"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Team member</strong>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum totam ad perspiciatis! Accusantium odio optio, 
        architecto quisquam eum perferendis impedit modi suscipit cum id.
        Nulla sapiente a ab fugit vitae?
      </small>
    </b-col>

    <b-col sm="4" class="team__profile py-3 py-md-0">
      <img src="../assets/team/placeholder.png"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Team member</strong>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum totam ad perspiciatis! Accusantium odio optio, 
        architecto quisquam eum perferendis impedit modi suscipit cum id.
        Nulla sapiente a ab fugit vitae?
      </small>
    </b-col>

    <b-col sm="4" class="team__profile py-3 py-md-0">
      <img src="../assets/team/placeholder.png"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Team member</strong>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum totam ad perspiciatis! Accusantium odio optio, 
        architecto quisquam eum perferendis impedit modi suscipit cum id.
        Nulla sapiente a ab fugit vitae?
      </small>
    </b-col>

    <b-col sm="4" offset-sm="2" class="team__profile py-3 py-md-0">
      <img src="../assets/team/placeholder.png"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Team member</strong>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum totam ad perspiciatis! Accusantium odio optio, 
        architecto quisquam eum perferendis impedit modi suscipit cum id.
        Nulla sapiente a ab fugit vitae?
      </small>
    </b-col>

    <b-col sm="4" class="team__profile py-5 py-md-0">
      <img src="../assets/team/placeholder.png"
           class="circle w-50 py-3"
           style="border-radius: 50%;">
      <strong>Team member</strong>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum totam ad perspiciatis! Accusantium odio optio, 
        architecto quisquam eum perferendis impedit modi suscipit cum id.
        Nulla sapiente a ab fugit vitae?
      </small>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.team {
  min-height: calc(100vh);
  background-color: theme-color("light");

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
