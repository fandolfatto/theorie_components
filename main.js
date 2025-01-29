//Example coming from https://www.w3schools.com
//we want to know (or not) if a food is healthy
const App = Vue.createApp({
    data() {
        return {
            healthy:true,
            likes:0
        }
    },
    methods :{
        likeProduct() {
            this.likes += 1
        }
    }
})