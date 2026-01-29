/* global Vue */

const App = {
  data() {
    return {
      // TODO: declare reactive variables
      counter: [0 ,0 ,0 ], // this stuff is visible to HTML // html is updated automatically, instead of having to write code for it 
    };
  },

  methods: {
    // TODO: helper functions
    butt1clicked(evt) {
      this.counter[0] += 1; //look for counter variable within "this" app
      this.counter[2] += 1;
    },
    butt2clicked(evt) {
      this.counter[1] += 2;
      this.counter[2] +=2;
    }
 
  },

  computed: {
    // TODO: helper functions, but reactive
    //       these are accessed like variables and trigger updates
  },
};

Vue.createApp(App).mount("#app"); // pick element from HTML -> in our case, div with buttons and counters
// vue will find code, 
