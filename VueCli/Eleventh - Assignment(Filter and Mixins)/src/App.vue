<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input type="text" v-model="text"><br>
                <span>{{text | reverseText | lengthApprender}}</span>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins using computed props</h1>
                <input type="text" v-model="text">
                <span>{{reverseTextComputed}}</span><br>
                <span>{{lengthApprenderComputed}}</span>
            </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins using Mixins</h1>
                <input type="text" v-model="textIn">
                <span>{{reverseTextFromMixin}}</span><br>
                <span>{{lengthApprenderFromMixin}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {textMixin} from './textMixin';
    export default {
      data: function() {
        return {
          text: ""
        };
      },
      filters: {
        reverseText(value) {
          return value.split("").reverse().join("");
        }
      },
      computed: {
        lengthApprenderComputed() {
          return this.text + ` (${this.text.length})`;
        },
        reverseTextComputed() {
          return this.text.split("").reverse().join("");
        }
      },
      mixins: [textMixin]
    }
</script>

<style>
</style>
