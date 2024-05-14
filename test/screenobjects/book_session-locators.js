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
    get book_sessionbtn(){
        return $('~Book Session');
    }
    get timeslot_opt(){
        return $('//android.view.ViewGroup[@content-desc=", 6:45pm"]/android.view.ViewGroup');
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
}

module.exports = new BookSessionLocators