<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1><strong>Animations</strong></h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <select v-model="alertAnimation">
          <option value="slide">Slide</option>
          <option value="bounce">Bounce</option>
          <option value="handshake">Handshake</option>
          <option value="fade">Fade</option>
        </select>
        <br><br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">A simple alert</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">A simple alert</div>
        </transition>
        <transition 
          enter-class=""
          enter-active-class="animated tada"
          leave-class=""
          leave-active-class="animated jello"
          appear
        >
          <div class="alert alert-info" v-if="show">A simple alert</div>
        </transition>
        <transition name="slide" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">A simple alert</div>
          <div class="alert alert-warning" v-else key="warning">A simple warning</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load=!load">Load/Remove Element</button><br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width: 100px; height: 100px; background:lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      load: true,
      alertAnimation: 'fade'
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('haha');
    },
    enter(el, done) {
      console.log('hello');
      done();
    },
    afterEnter(el) {
      console.log('123');
    },
    enterCancelled(el) {
      console.log('456');
    },
    beforeLeave(el) {
      console.log('ahah');
    },
    leave(el, done) {
      console.log('olleh');
      done();
    },
    afterLeave(el) {
      console.log('321');
    },
    leaveCancelled(el) {
      console.log('654');
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
}

.slide-enter {
  /* translate: transform(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.2s;
}
.slide-leave {

}
.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
