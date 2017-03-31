'use strict';

var sensitiveWordsNpm = require('sensitive-words-npm').default;

test('Replace blacklisted words with asterisks', function () {
	return expect(sensitiveWordsNpm('The name of the NX will be the Nintendo Switch', ['switch'])).toBe('The name of the NX will be the Nintendo ***');
});

test('Replace blacklisted words with asterisks', function () {
	return expect(sensitiveWordsNpm('The name of the NX will be the Nintendo Switch. The *** will be awesome!', ['switch'])).toBe('The name of the NX will be the Nintendo ***. The *** will be awesome!');
});