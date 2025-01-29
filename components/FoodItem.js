App.component('food-item', {
    props : {
        name : {
            required : true,
            type : String
        },
        desc : {
            required : true,
            type : String
        },
        healthy :{
            required : false,
            type : Boolean
        }
    },
    template:
        `<div>
            <h2>{{ name }}</h2>
            <p>{{ desc }}</p>
            <p> {{ showHealthy }}</p>
            <button class="button" v-on:click="like">Ajouter</button>
        </div>`,
    computed : {
        showHealthy() {
            if (this.healthy) {
                if (this.desc.includes("fruit")) {
                    return "bon à la santé";
                }
            }
        }
    },
    methods :{
        like() {
            this.$emit('like-food-item')
        }
    }
})