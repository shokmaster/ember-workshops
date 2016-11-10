import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'nav',

	classNames: ['navbar', 'navbar-default'],

	isMenuOpened: false,

	actions: {
		toggleMenu(){
			this.toggleProperty('isMenuOpened');
 		}
	},

	focusOut() {
		this.set('isMenuOpened', false);
	}

});
