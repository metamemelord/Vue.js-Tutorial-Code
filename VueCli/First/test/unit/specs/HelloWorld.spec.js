import Vue from 'vue'
import Quote from '@/components/Quote'

describe('Quote.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Quote)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
  })
})
