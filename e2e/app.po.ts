export class PlayMeExtensionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('play-me-extension-app h1')).getText();
  }
}
