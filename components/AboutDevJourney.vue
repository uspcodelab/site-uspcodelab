<template>
  <b-row>
    <b-col sm class="dev-journey-info" v-for="obj in dev_section" :key="obj.KEY">
      <div class="dev-journey-card-icon">
        <img src="~/assets/resume.svg">
      </div>
      <div>
        Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data: () => {
    return {
      dev_section: [
        {
          KEY: 1,
          icon: "play-button-sing.svg",
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 2,
          icon: "study.svg",
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 3,
          icon: "startup.svg",
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 4,
          icon: "resume.svg",
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        }
      ]
    };
  },
  computed: {
    path(obj) {
      alert(obj);
      return "~/assets/" + "resume" + ".svg";
    }
  }
};
</script>

<style lang="scss">
.dev-journey-info {
  background: $main-color;
  color: $secondary-color;

  height: 90vh;

  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  align-items: center;
}

.dev-journey-title {
  color: $secondary-color;
  align-self: center;
}

.dev-journey-card {
  margin: 0 1em;
  color: $secondary-color;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 20%;
}

.dev-journey-card-icon {
  fill: $secondary-color;
  img {
    width: 10em;
  }
}
</style>
