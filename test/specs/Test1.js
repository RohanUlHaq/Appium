const { browser } = require('@wdio/globals');
describe('Sample', () => {
    it('Sample test of login', async() => {
        await browser.pause(7000); // Add a wait here before interacting with elements
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~Menu').click();
        await $('~menu_btn_login').click();
        await $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup').click();
        await $('~login_input_email').setValue('anser@yopmail.com')
        await $('~login_btn_next').click();
        await $('~password_input').setValue('click123');
        await $('//android.widget.TextView[@text=""]').click();
        await $('~Next').click();
    })
})