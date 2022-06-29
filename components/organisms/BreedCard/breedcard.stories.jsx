/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import BreedCard from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'organisms/BreedCard',
	component: BreedCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BreedCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    breed: {
        name: 'Abyssinian',
        image: {
            url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
        }
    },
    url: '/react-query/abys'
};