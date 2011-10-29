(function ($) {
    $.extend({
        confirmLeave: {
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

                // Detect changes on input elements
                form.change(function () {
                    that.editorIsDirty = true;
                });

                form.submit(function (e) {
                    that.editorIsDirty = false;
                });

                window.onbeforeunload = function () {
                    // Maybe if (that.editorWasFocused) better?
                    if (that.editorIsDirty)
                        return "Do";
                };
            }
        }
    });
})(jQuery);