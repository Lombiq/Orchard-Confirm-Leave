(function ($) {
    $.extend({
        confirmLeave: function (localizationDictionary) {
            return {
                editorIsDirty: false,

                makeConfirm: function (fieldId) {
                    var input = $("#" + fieldId);
                    var form = input.length > 0 ? $(input[0].form) : $();

                    var that = this;

                    form.find("input, textarea, select").focus(function (e) {
                        that.editorIsDirty = true;
                    });

                    form.click(function (e) {
                        that.editorIsDirty = true;
                    });

                    // Only detects change when focus is lost, which is not necessarily the case when refreshing
//                    form.change(function () {
//                        that.editorIsDirty = true;
//                    });

                    form.submit(function (e) {
                        that.editorIsDirty = false;
                    });

                    window.onbeforeunload = function () {
                        if (that.editorIsDirty)
                            return localizationDictionary["confirm"];
                    };

                    return this;
                }
            }
        }
    });
})(jQuery);