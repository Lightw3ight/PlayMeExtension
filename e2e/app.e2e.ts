import { PlayMeExtensionPage } from './app.po';

describe('play-me-extension App', function() {
  let page: PlayMeExtensionPage;

  beforeEach(() => {
    page = new PlayMeExtensionPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('play-me-extension works!');
  });
});
