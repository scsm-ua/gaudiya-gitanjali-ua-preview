const path = require('path');
const { render } = require('songbook-md-json-parser');

render({
    prepareJson: (json) => {
        json.meta = json.meta || {};
        json.meta.translation = 'no';
        json.verses?.forEach(v => {
            delete v.translation;
        });
    }
});
