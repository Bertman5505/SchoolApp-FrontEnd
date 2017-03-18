import { SchoolAppFrontEndPage } from './app.po';

describe('school-app-front-end App', function() {
  let page: SchoolAppFrontEndPage;

  beforeEach(() => {
    page = new SchoolAppFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
