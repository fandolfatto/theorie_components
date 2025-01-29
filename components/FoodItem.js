App.component('food-item', {
    template:
        `<div>
            <h2>{{ name }}</h2>
            <p>{{ desc }}</p>
        </div>`,
    data() {
        return {
            name: 'Apple',
            desc: 'Great fruits'
        }
    },
    computed : {

    },
    methods :{

    }
})