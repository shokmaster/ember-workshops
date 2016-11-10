import Ember from 'ember';

const languages = [{
	name: 'ES',
	code: 'es'
}, {
	name: 'ENG',
	code: 'en'
}];

export default Ember.Component.extend({

	tagName: 'nav',

	classNames: ['navbar', 'navbar-default'],

	isMenuOpened: false,

	i18n: Ember.inject.service(),

	languages,

	selectedLanguage: languages[0],

	onSelectedLanguageChange: Ember.observer('selectedLanguage', function() {
		this.set('i18n.locale', this.get('selectedLanguage.code'));
	}),

	actions: {
		toggleMenu(){
			this.toggleProperty('isMenuOpened');
 		}
	}
});
