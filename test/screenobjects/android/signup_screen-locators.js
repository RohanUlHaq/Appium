class SignupScreenLocators {
    get nextbutton(){
        return $('~app_tour_footer_btn_next');
    }
    get explorebutton(){
        return $('~app_tour_footer_btn_next');
    }
    get bottom_nav_menu(){
        return $('~Menu');
    }
    get guestmenu_loginbtn(){
        return $('~menu_btn_login');
    }
    get emailswitcher(){
        return $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    get login_inputemail(){
        return $('~login_input_email');
    }
    get login_nextbtn(){
        return $('~login_btn_next');
    }
    get input_name(){
        return $('~signup_details_input_name');
    }
    get inputname_nextbtn(){
        return $('~signup_details_btn_next');
    }
    get gender_bottomsheet(){
        return $('~signup_details_bottom_sheet_gender');
    }
    get male_optionselect(){
        return $('(//android.view.ViewGroup[@content-desc="bottom-sheet-option-[object Object]"])[1]');
    }
    get gender_nextbtn(){
        return $('~signup_details_btn_next');
    }
    get password(){
        return $('~signup_details_input_password');
    }
    get confirm_password(){
        return $('~signup_details_input_confirm_password');
    }
    get password_nextbtn(){
        return $('~signup_details_btn_next');
    }
    get welcome_nextbtn(){
        return $('~welcome_btn_start');
    }
}

module.exports = new SignupScreenLocators