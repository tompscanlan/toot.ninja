import { writable } from 'svelte/store';

let _user = writable({ loggedIn: false });

function login() {
	_user.set({ loggedIn: true, name: 'Dr. Svelte' });
}

export const user = {
	subscribe: _user.subscribe,
	login
};
