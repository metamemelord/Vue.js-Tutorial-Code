export const textMixin =  {
    data: function() {
      return {
        textIn: ""
      };
    },
    computed: {
      lengthApprenderFromMixin() {
        return this.textIn + ` (${this.textIn.length})`;
      },
      reverseTextFromMixin() {
        return this.textIn.split("").reverse().join("");
      }
    }
  }