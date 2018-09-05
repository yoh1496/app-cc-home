var chg_lang = {};

// Load profile screen
chg_lang.loadChangeLanguage = function () {
    personium.loadContent(cm.homeAppUrl + "__/html/change_language.html").done(function (data) {
        let out_html = $($.parseHTML(data));
        let id = personium.createSubContent(out_html, true);
        chg_lang.init();
        $('body > div.mySpinner').hide();
        $('body > div.myHiddenDiv').show();
    }).fail(function (error) {
        console.log(error);
    });
}

chg_lang.init = function() {
    $('#language-list li.' + i18next.language).addClass('check-mark-left');
}

chg_lang.updateLanguage = function (lng) {
    i18next.changeLanguage(lng);
    updateContent();
    personium.backSubContent();
}