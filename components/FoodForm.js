App.component('form_food_item', {
    data() {
        return {
            name: 'Carottes',
            vegetarian: true,
            typesList: [
                'Fruits',
                'Légumes',
                'Plats'
            ],
            type : ''
        }
    },
    template:
        `<form @submit.prevent="onSubmit">
            <input type="text" v-model="name" />
            <input type="checkbox" v-model="vegetarian" /> Végétarien?
            <!--<input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no"> Benefits selected: {{ benefitsSelected }}-->
            <select v-model="type">
                <!-- Create a message to select one -->
                <option disabled value="">Please select one</option>
                <!-- Use v-for to create the list of options -->
                <option v-for="(type, index) in typesList" :value="type">
                    {{ type }}
                </option>
            </select>
            <input class="button" type="submit" value="Submit"></input>
        </form>`,
    computed : {

    },
    methods :{
        onSubmit() {
            console.log("dans onSubmit");
            let fooditem = {
                name: this.name,
                type: this.type,
                vegetarian: this.vegetarian
            }
            this.$emit('add-food-item', fooditem)
            this.name='';
            this.type='';
            this.vegetarian = false;
            console.log("fin onSubmit");
        }
    }
})