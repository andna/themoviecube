// index.test.js
import React from 'react';

describe('Test index.js', () => {

    it("Should render app without crashing", () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
        const index = require('./index.tsx');
        expect(
            JSON.stringify(
                Object.assign({}, index, { _reactInternalInstance: 'censored' }),
            ),
        ).toMatchSnapshot();
    });
});
