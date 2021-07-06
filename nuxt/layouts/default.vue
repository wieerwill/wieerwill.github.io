<template>
  <div>
    <div
      class="background-80s animated-clouds stars"
      style="--background-height: 100vh"
    >
      <div class="sun"></div>
      <div
        class="grid"
        style="
          --grid-color: rgba(115, 59, 139, 0.7);
          --grid-size: 50px;
          --grid-blur: 1px;
        "
      ></div>
      <!--big left mountain-->
      <div
        class="mountain"
        style="
          --mountain-tilt: -32deg;
          --mountain-color1: #a684cb;
          --mountain-color2: #150030;
          --mountain-base: 10vw;
          --mountain-height: 20vw;
          --mountain-offset: -50vw;
        "
      ></div>
      <div
        class="mountain"
        style="
      --mountain-tilt:0deg
      --mountain-color1:#a684cb;
      --mountain-color2:#2a025d;
      --mountain-base:15vw;
      --mountain-height:20vw;
      --mountain-offset:-40vw;"
      ></div>
      <div
        class="mountain"
        style="
          --mountain-tilt: 32.5deg;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 10vw;
          --mountain-height: 20vw;
          --mountain-offset: -25vw;
        "
      ></div>
      <!--big right mountain 2-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 12vw;
          --mountain-height: 10vw;
          --mountain-tilt: -56deg;
          --mountain-offset: 15vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #2a025d;
          --mountain-base: 10vw;
          --mountain-height: 10vw;
          --mountain-tilt: -20deg;
          --mountain-offset: 27vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #150030;
          --mountain-base: 10vw;
          --mountain-height: 10vw;
          --mountain-tilt: 32.5deg;
          --mountain-offset: 37vw;
        "
      ></div>
      <!--small right mountain 1-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-offset: 10vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-tilt: 59deg;
          --mountain-offset: 20vw;
        "
      ></div>
      <!--small right mountain 2-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-base: 8vw;
          --mountain-height: 4vw;
          --mountain-offset: 20vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 3vw;
          --mountain-height: 4vw;
          --mountain-tilt: 45deg;
          --mountain-offset: 28vw;
        "
      ></div>
      <!--small left mountain 1-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-offset: -40vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-tilt: 33deg;
          --mountain-offset: -35vw;
        "
      ></div>
      <!--small left mountain 2-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-offset: -20vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-tilt: 59deg;
          --mountain-offset: -10vw;
        "
      ></div>
      <!--big right mountain 1-->
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-tilt: -62deg;
          --mountain-offset: -5vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-color1: #a684cb;
          --mountain-color2: #150030;
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-tilt: 59deg;
          --mountain-offset: 10vw;
        "
      ></div>

      <div class="road-off"></div>
    </div>
    <div class="overlay"></div>

    <div class="ui-control">
      <button @click="toggleSound">
        <span v-if="isSoundEnabled" class="material-icons"> volume_up </span>
        <span v-else class="material-icons"> volume_off</span>
      </button>
      <button @click="playSound">
        <span v-if="!isSoundPlaying" class="material-icons"> play_arrow</span>
        <span v-else class="material-icons"> pause </span>
      </button>
    </div>

    <Nuxt />

    <svg width="0" height="0">
      <filter id="synth-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".01"
          numOctaves="10"
          id="fractalNoise"
        />
        <feDisplacementMap
          id="displacementMap"
          in="SourceGraphic"
          scale="120"
        />
      </filter>
      <animate
        xlink:href="#displacementMap"
        id="animclouds1"
        begin="0; animclouds2.end"
        attributeName="scale"
        from="50"
        to="180"
        dur="3s"
        fill="freeze"
      />
      <animate
        xlink:href="#displacementMap"
        id="animclouds2"
        begin="animclouds1.end"
        attributeName="scale"
        from="180"
        to="50"
        dur="3s"
        fill="freeze"
      />
      <animate
        xlink:href="#fractalNoise"
        id="animclouds3"
        begin="0;animclouds4.end"
        attributeName="baseFrequency"
        from="0.03"
        to="0.01"
        dur="30s"
        fill="freeze"
      />
      <animate
        xlink:href="#fractalNoise"
        id="animclouds4"
        begin="animclouds3.end"
        attributeName="baseFrequency"
        from="0.01"
        to="0.03"
        dur="30s"
        fill="freeze"
      />
    </svg>
  </div>
</template>

<script>
//import zap from "@/assets/sounds/Three Chain Links - Die Historic.mp3";

export default {
  data() {
    return {
      audio: null,
      isSoundPlaying: false,
    };
  },
  mounted() {
    this.$store.commit("initializeSound");
    this.audio = new Audio("/sounds/Three Chain Links - Die Historic.mp3");
  },
  methods: {
    toggleSound() {
      this.$store.commit("toggleSound");
      if (!this.isSoundEnabled) {
        this.isSoundPlaying = false;
        this.audio.pause();
      }
    },
    playSound() {
      if (this.isSoundEnabled && !this.isSoundPlaying) {
        this.isSoundPlaying = true;
        this.audio.loop = true;
        this.audio.play();
      } else if (this.isSoundEnabled && this.isSoundPlaying) {
        this.isSoundPlaying = false;
        this.audio.pause();
      }
    },
  },
  computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    },
  },
};
</script>