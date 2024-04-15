const { browser } = require('@wdio/globals');
const login_screenLocators = require('../screenobjects/android/login_screen-locators');
describe('Sample', async () => {
    // it('Sample test of login', async() => {
    //     await browser.pause(7000); // Add a wait here before interacting with elements
    // await login_screenLocators.nextbutton.click();
    // await login_screenLocators.nextbutton.click();
    // await login_screenLocators.nextbutton.click();
    // await login_screenLocators.explorebutton.click();
    // await login_screenLocators.bottom_nav_menu.click();
    // await login_screenLocators.guestmenu_loginbtn.click();
    // await login_screenLocators.emailswitcher.click();
    // await login_screenLocators.login_input.setValue('anser@yopmail.com')
    // await login_screenLocators.login_nextbtn.click();
    // await login_screenLocators.password_input.setValue('click123');
    // await login_screenLocators.unhide_eyebtn.click();
    // await login_screenLocators.password_nextbtn.click();
    // })


    it('', async() => {
        const driver = await // Initialize your Appium driver (replace with your driver initialization code)

        await browser.pause(5000); // Add a wait here before interacting with elements
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~app_tour_footer_btn_next').click();
        await $('~Menu').click();
        await $('~menu_btn_login').click();
        await $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup').click();

        function generateRandomEmail() {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let username = "";
        
            for (let i = 0; i < 8; i++) {
              username += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        
            return username + "@yopmail.com";
          }
        
          // Generate a random name
          function generateRandomName() {
            const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Emily", "Olivia", "Noah", "William", "James"];
            const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
        
            const firstNameIndex = Math.floor(Math.random() * firstNames.length);
            const lastNameIndex = Math.floor(Math.random() * lastNames.length);
        
            return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
          }
        
          // Find email field and enter generated email
          await $('~login_input_email').setValue(generateRandomEmail());
        
          // Click on Next button
          await $('~login_btn_next').click();
        
          // Wait for manually entering OTP
          await browser.pause(8000);

          // Find name field (replace with your actual selector) and enter generated name
          await $('~signup_details_input_name').setValue(generateRandomName());
          await $('~signup_details_btn_next').click();

          // Selecting the gender
          await $('~signup_details_bottom_sheet_gender').click()
          await $('(//android.view.ViewGroup[@content-desc="bottom-sheet-option-[object Object]"])[1]').click();
          await $('~signup_details_btn_next').click();

          // Wait for manually selecting DOB
          await browser.pause(8000);

          //Choose your password
          await $('~signup_details_input_password').setValue('click123');
        //   await $('(//android.widget.TextView[@text=""])[1]').click();
          await $('~signup_details_input_confirm_password').setValue('click123');

        //   await $('(//android.widget.TextView[@text=""])[2]').click();
          await $('~signup_details_btn_next').click();

          //Welcome Screen next button
          await $('~welcome_btn_next').click();
        
    })
})