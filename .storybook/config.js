import { configure } from '@storybook/react';

global.backgroundDecorator = (story) => (
  <div style={{width: '100%', height: '100vh', background: '#1EAAF1'}}>
    {story()}
  </div>
)

global.paddingDecorator = (story) => (
  <div style={{padding: '40px'}}>
    {story()}
  </div>
)

function loadStories() {
  const stories = require.context("..", true, /story\.jsx?$/);
  stories.keys().map(stories)
}

configure(loadStories, module);
