EGGHEAD.IO

Publish javascript package on npm

# Example

'''shell
$ npm install sensitive-words-npm --save
'''

'''javascript
const sensitiveWordsNpm = require('sensitive-words-npm').default;
// ES2015 modules
import {sensitiveWordsNpm} from 'sensitive-words-npm'

const filtered = 
	sensitiveWordsNpm(
		'The new Apple Macbook Pro will have a touchbar', 
		['pro', 'touchbar']
	)

	console.log(filtered);
	// The new Apple Macbook *** will have a *** 
'''