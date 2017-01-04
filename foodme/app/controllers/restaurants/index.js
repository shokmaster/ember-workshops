import Ember from 'ember';

const CUISINE_OPTIONS = [
    { name: 'african', title: 'African' },
    { name: 'american', title: 'American' },
    { name: 'barbecue', title: 'Barbecue' },
    { name: 'cafe', title: 'Cafe' },
    { name: 'chinese', title: 'Chinese' },
    { name: 'czech/slovak', title: 'Czech / Slovak' },
    { name: 'german', title: 'German' },
    { name: 'indian', title: 'Indian' },
    { name: 'japanese', title: 'Japanese' },
    { name: 'mexican', title: 'Mexican' },
    { name: 'pizza', title: 'Pizza' },
    { name: 'thai', title: 'Thai' },
    { name: 'vegetarian', title: 'Vegetarian' }
];

export default Ember.Controller.extend({

    CUISINE_OPTIONS,

    selectedCuisins: [],

    filterRating: null,

    filteredRestaurants: Ember.computed('model', 'filterRating', function() {console.log('filtrando restaurantes');
        let filteredRestaurants = this.get('model');
        const cuisinesFilters = this.get('selectedCuisins');
        const filterRating = this.get('filterRating');

        if (!Ember.isEmpty(cuisinesFilters)) {
            filteredRestaurants = filteredRestaurants.filter((item) => {
                return cuisinesFilters.mapBy('name').includes(item.cuisine);
            });
        }

        if (filterRating) {
            filteredRestaurants = filteredRestaurants.filterBy('rating', filterRating);
        }

        return filteredRestaurants;
    }),

    actions: {

    	clear() {
    		this.set('selectedCuisins', []);
    		this.set('filterRating', null);
    		this.set('filteredRestaurants', this.get('model'));
    	},

        filter() {
            let filteredRestaurants = this.get('model');
            const cuisinesFilters = this.get('selectedCuisins');
            const filterRating = this.get('filterRating');

            if (!Ember.isEmpty(cuisinesFilters)) {
                filteredRestaurants = filteredRestaurants.filter((item) => {
                    return cuisinesFilters.mapBy('name').includes(item.cuisine);
                });
            }

            if (filterRating) {
                filteredRestaurants = filteredRestaurants.filterBy('rating', filterRating);
            }

            this.set('filteredRestaurants', filteredRestaurants);
        },

        updateRating(stars) {console.log(stars.rating);
            this.set('filterRating', stars.rating);
        }

    }


});
