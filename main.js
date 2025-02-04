//Example coming from https://www.w3schools.com
//we want to know (or not) if a food is healthy
const App = Vue.createApp({
    data() {
        return {
            healthy:true,
            likes:0,
            foods:[]
        }
    },
    /*props :{
        foods :{
            type:Array,
            required:false
        }
    },*/
    methods :{
        likeProduct() {
            this.likes += 1
        },
        addItemFood(fooditem) {
            console.log("dans addItemFood");
            console.log(fooditem.name);
            this.foods.push(fooditem);
            console.log(this.foods.length);
        }
    }
})