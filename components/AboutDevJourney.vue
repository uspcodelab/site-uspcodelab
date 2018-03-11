<template>
  <section id="dev_journey" class="info-section">
    <div class="info-title">
      <h3>dev.journey()</h3>
    </div>

    <div v-for="obj in dev_section" :key="obj.KEY" class="info">
      <div class="info-text">
        {{ obj.text }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      dev_section: [
        {
          KEY: 1,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 2,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 3,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 4,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.info-section {
  background: $secondary-color;
  color: $main-color;

  min-height: 40vh;

  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  align-items: center;
}

.info {
  margin: 0 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
}

.info-title {
  flex: 1 1 100%;
  text-align: center;
  font-size: 4em;
}

.info-text {
  color: #000000;
}
</style>
