new Vue({
    el: '#vue-app',
    data: {
      health : 100,
      punching : false,
      ended : false
    },
    methods: {
      punch : function(pow) {
        this.health -= pow;

        if (this.health <= 0) {
          this.health = 0;
          this.ended = true;
        }
      },

      restart: function() {
        this.health = 100;
        this.ended = false;
      }
    },
    computed: {
      classObject : function() {
        return {
          burst : this.ended,
          punching : this.punching
        }
      }
    }
});
