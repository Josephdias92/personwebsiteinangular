import { PersonalwebsitePage } from './app.po';

describe('personalwebsite App', function() {
  let page: PersonalwebsitePage;

  beforeEach(() => {
    page = new PersonalwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
