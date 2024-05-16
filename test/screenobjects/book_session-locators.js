class BookSessionLocators{
    get consultant_navbar(){
        return $('//android.view.View[@content-desc="Consultants"]/android.view.ViewGroup');
    }
    get searchconsultant(){
        return $('~consultant_list_input_search');
    }
    get consultant_card(){
        return $('//android.view.ViewGroup[@content-desc="Recommended, Ahmed Consultant, Psychiatrist, 52 Reviews, # Next available at 12:00 PM, 391.00 SAR"]/android.view.ViewGroup');
    }
    get consultant_card_newuser(){
        return $('//android.view.ViewGroup[@content-desc="Recommended, Ahmed Consultant, Psychiatrist, 52 Reviews, # Next available at 12:00 PM, 391.00 SAR, 351.90 SAR"]/android.view.ViewGroup');
    }
    get consultant_AR(){
        return $('//android.view.ViewGroup[@content-desc="Recommended, Adil Rasheed, Psychiatrist, 9 Reviews, # Next available at 12:00 PM, 138.00 SAR, 124.20 SAR"]');
    }
    get book_sessionbtn(){
        return $('~Book Session');
    }
    get timeslot_opt(){
        return $('//android.view.ViewGroup[@content-desc=", 5:30pm"]/android.view.ViewGroup');
    }
    get paynow_btn(){
        return $('~Pay Now');
    }
    get partnerwallet_checkbox(){
        return $('~Partner Wallet, 480.52 SAR');
    }
    get buynow_btn(){
        return $('~Buy Now');
    }
    get cards_bottomsheet(){
        return $('~Cards, Complete payment with Credit or Debit Card');
    }
    get payment_completebtn(){
        return $('~payment_complete_btn_done');
    }
    get card_number(){
        return $('~pay_by_card_input_card_number');
    }
    get cardholder_name(){
        return $('~pay_by_card_input_card_holder_name');
    }
    get expiry_date(){
        return $('~pay_by_card_input_expiry');
    }
    get cvc(){
        return $('~pay_by_card_input_cvc');
    }
    get hide_keyboard(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView');
    }
    get card_paynow(){
        return $('~pay_by_card_btn_pay_now');
    }
    get card_defaultDDhyper(){
        return $('(//android.view.View[@text="Card Default"])[2]');
    }
    get successful_radiobtn(){
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Successful"]');
    }
    get submit_btn_hyper(){
        return $('//android.widget.Button[@text=" Submit "]');
    }
    get chatbtn(){
        return $('(//android.widget.Button[@content-desc="menu_btn_view_profile"])[2]');
    }
    get messagebox(){
        return $('~chat_message_input');
    }
    get sendmsgicon(){
        return $('//android.view.ViewGroup[@resource-id="GC_WRAPPER"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
    }
    get backicon_chat(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }
    get menu_navbar(){
        return $('//android.view.View[@content-desc="Menu"]');
    }
    get logoutbtn(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollTextIntoView("Log Out")');
    }
}

module.exports = new BookSessionLocators