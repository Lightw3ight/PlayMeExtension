import { NgfinaltestPage } from './app.po';

describe('ngfinaltest App', function() {
  let page: NgfinaltestPage;

  beforeEach(() => {
    page = new NgfinaltestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
