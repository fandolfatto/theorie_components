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

    }
})