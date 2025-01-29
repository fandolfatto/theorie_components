//Example coming from https://www.w3schools.com
const App = Vue.createApp({
    data() {
        return {
            healthy:true,
            likes : 0
        }
    },
    methods :{
        likeItem() {
            this.likes += 1;
        }
    }
})