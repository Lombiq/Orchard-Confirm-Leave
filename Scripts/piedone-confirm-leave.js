(function ($) {
    $.extend({
        confirmLeave: function (localizationDictionary) {
            return {
                anyCommonFormElementIsDirty: false,
                formSubmitted: false,

                makeConfirm: function (fieldId) {
                    var input = $("#" + fieldId);
                    var form = input.length > 0 ? $(input[0].form) : $();

                    var that = this;

                    form.find("input, textarea, select").focus(function (e) {
                        that.anyCommonFormElementIsDirty = true;
                    });

                    form.click(function (e) {
                        that.anyCommonFormElementIsDirty = true;
                    });

                    // Only detects change when focus is lost, which is not necessarily the case when refreshing
                    //                    form.change(function () {
                    //                        that.anyCommonFormElementIsDirty = true;
                    //                    });

                    form.submit(function (e) {
                        that.formSubmitted = true;
                    });

                    window.onbeforeunload = function () {
                        if (!that.formSubmitted && (that.anyCommonFormElementIsDirty || that.tinyMCEEditorIsDirty() || that.layoutEditorIsDirty()))
                            return localizationDictionary["confirm"];
                    };

                    return this;
                },

                tinyMCEEditorIsDirty() {
                    if (typeof (tinyMCE) === "undefined")
                        return false;

                    for (var i = 0; i < tinyMCE.editors.length; i++) {
                        if (tinyMCE.editors[i].isDirty())
                            return true;
                    }

                    return false;
                },

                layoutEditorIsDirty() {
                    if (typeof (window.layoutEditor) === "undefined")
                        return false;

                    return window.layoutEditor.isDirty();
                }
            }
        }
    });
})(jQuery);