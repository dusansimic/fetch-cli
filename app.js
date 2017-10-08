#!/usr/bin/env node

const got = require('got');
const program = require('commander');

let urlString = null;

program
	.version('0.0.1')
	.arguments('<url>')
	.action(url => {
		urlString = url;
	})
	.parse(process.argv);

if (!!urlString) {
	got(urlString).then(res => {
		console.log(res.body);
	}).catch(err => {
		console.error(err.url + ' ' + err.statusCode + ' ' + err.statusMessage);
	});
} else {
	console.warn('Url was not specified!');
}
