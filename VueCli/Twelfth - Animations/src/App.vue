<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>
          <strong>Animations</strong>
        </h1>
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
        <br>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">A simple alert</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">A simple alert</div>
        </transition>
        <transition
          enter-class
          enter-active-class="animated tada"
          leave-class
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
        <button class="btn btn-primary" @click="load=!load">Load/Remove Element</button>
        <br>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background:lightgreen" v-if="load"></div>
        </transition>
        <br>
        <button
          class="btn btn-info"
          @click="selectedComponent = (selectedComponent == 'app-danger-alert') ? 'app-success-alert' : 'app-danger-alert'"
        >Change alert</button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, idx) in numbers"
              :key="number"
              @click="removeItem(idx)"
              style="cursor: pointer;"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import successAlert from "./SuccessAlert.vue";
import dangerAlert from "./DangerAlert.vue";

export default {
  data() {
    return {
      show: true,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      selectedComponent: "app-danger-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  components: {
    appSuccessAlert: successAlert,
    appDangerAlert: dangerAlert
  },
  methods: {
    beforeEnter(el) {
      console.log("haha");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("hello");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("123");
    },
    enterCancelled(el) {
      console.log("456");
    },
    beforeLeave(el) {
      console.log("ahah");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("olleh");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("321");
    },
    leaveCancelled(el) {
      console.log("654");
    },
    addItem() {
      this.numbers.splice(
        Math.floor(Math.random() * this.numbers.length),
        0,
        this.numbers.length + 1
      );
    },
    removeItem(idx) {
      this.numbers.splice(idx, 1);
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
  position: absolute;
}

.slide-move {
  transition: transform 0.5s;
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
