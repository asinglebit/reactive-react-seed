describe('Application initialization', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('Should have correct title', () => {
        expect(browser.getTitle()).to.eventually.equal('Reactive React Seed');
    });
})
