<template>
  <section id="dev-journey" class="dev-journey-section">
    <b-row>
      <b-col>
        <h3 class="section-title" style="color: #FF690A">dev.journey()</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" lg="3" class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/play-button-sing.svg">
        </div>
        <h4>dev.start()</h4>
        <p>
          Ci&shy;clo&shy; de&shy; o&shy;fi&shy;ci&shy;na&shy;s pa&shy;ra&shy; a&shy;pre&shy;se&shy;nta&shy;r pro&shy;grama&shy;ção&shy; we&shy;b pa&shy;ra&shy; o&shy; públi&shy;co&shy; ge&shy;ra&shy;l da&shy; u&shy;ni&shy;ve&shy;rsi&shy;da&shy;de&shy;, com tópi&shy;co&shy;s como&shy; <em>HTML</em>, <em>CSS</em> e&shy; <em>Ja&shy;va&shy;Scri&shy;pt</em>.
        </p>
      </b-col>

      <b-col sm="12" lg="3" class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/study.svg">
        </div>
        <div>
          <h4>dev.learn()</h4>
          <p>
            Um do&shy;s no&shy;sso&shy;s gru&shy;po&shy;s de&shy; e&shy;stu&shy;do&shy; com re&shy;u&shy;ni&shy;õe&shy;s sema&shy;na&shy;i&shy;s, a&shy;o&shy; lo&shy;ngo&shy; de&shy; um seme&shy;stre&shy;, pa&shy;ra&shy; a&shy;pli&shy;ca&shy;r o&shy;s co&shy;nhe&shy;cime&shy;nto&shy;s em pro&shy;je&shy;to&shy;s pro&shy;po&shy;sto&shy;s pe&shy;la&shy; o&shy;rga&shy;ni&shy;za&shy;ção&shy;.
          </p>  
        </div>
      </b-col>

      <b-col sm="12" lg="3" class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/startup.svg">
        </div>
        <h4>dev.boost()</h4>
        <p>
          Uma continua&shy;ção da fase an&shy;te&shy;rior, ago&shy;ra com pro&shy;je&shy;tos em ti&shy;mes, vol&shy;ta&shy;da pa&shy;ra apren&shy;dizado de téc&shy;ni&shy;cas de mo&shy;de&shy;lagem, im&shy;ple&shy;men&shy;ta&shy;ção e ma&shy;nu&shy;ten&shy;ção de sis&shy;te&shy;mas.
        </p>
      </b-col>

      <b-col sm="12" lg="3" class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/resume.svg">
        </div>
        <h4>dev.hire()</h4>
        <p>
          Nos&shy;so pro&shy;gra&shy;ma de cap&shy;ta&shy;ção de cur&shy;rí&shy;cu&shy;los de a&shy;lu&shy;nos, em par&shy;ti&shy;cu&shy;lar os par&shy;ti&shy;ci&shy;pan&shy;tes do pro&shy;gra&shy;ma, pa&shy;ra fa&shy;ci&shy;li&shy;tar o con&shy;ta&shy;to pro&shy;fis&shy;sio&shy;nal com em&shy;pre&shy;sas par&shy;ceiras.
        </p> 
      </b-col>

    </b-row>
  </section>
  
</template>

<script>
</script>

<style lang="scss">
.dev-journey-section {
  background: $secondary-color;
  color: #2c2c2c;

  width: 100%;
  font-size: 1.1em;
  height: 100%;
  padding: 20vh 2vh;
}

.dev-journey-info {
  height: 90vh;
  padding: 0 3vw;
  text-align: center;

  h3 {
    font-size: 2em;
  }
}

.dev-journey-info-icon {
  padding: 5vh 0vh;
  fill: $secondary-color;
  img {
    width: 10em;
  }
}

.dev-journey-info h4 {
  padding: 5vh 0vh;
  font-size: 2em;
}

.dev-journey-info p {
  text-indent: 20px;
  text-align: justify;
}
</style>
