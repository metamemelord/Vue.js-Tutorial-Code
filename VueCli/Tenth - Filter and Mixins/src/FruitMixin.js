export const fruitMixin = {
    data: function() {
      return {
        fruits: ["Apple", "Banana", "Orange", "Melon"],
        filterText: ""
      };
    },
    computed: {
      filteredFruits: function() {
        return this.fruits.filter(el => el.match(this.filterText));
      }
    },
    created() {
        console.log("Sed");
    }
  };