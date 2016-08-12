import { NgtestPage } from './app.po';

describe('ngtest App', function() {
  let page: NgtestPage;

  beforeEach(() => {
    page = new NgtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
