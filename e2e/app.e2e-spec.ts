import { Jan2Page } from './app.po';

describe('jan2 App', () => {
  let page: Jan2Page;

  beforeEach(() => {
    page = new Jan2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
