App.component('food-item', {
    props : {
        foods : {
            required : true,
            type : Array
        }
    },
    template:
        `<div id="wrapper">
            <div>
                <ul>
                    <li v-for="(fooditem, index) in foods" :key="index">
                        <h2>{{fooditem.name}}</h2>
                        <p>{{fooditem.type}}</p>
                        <p v-if="fooditem.vegetarian">Végétarien</p>
                    </li>
                </ul>
            </div>
        </div>`,
    methods :{
        like() {
            this.$emit('like-product')
        }
    }
})