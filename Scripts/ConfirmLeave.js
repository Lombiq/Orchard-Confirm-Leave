﻿(function ($) {
    $.extend({
        confirmLeave: {
            editorHasChanged: false,

            makeConfirm: function (fieldId) {
                var input = $("#" + fieldId);
                var form = input.length > 0 ? $(input[0].form) : $();

                var that = this;

                // Detect changes on input elements
                form.change(function () {
                    that.editorHasChanged = true;
                });

                // Detect also on textareas
                form.find("textarea").change(function () {
                    alert("ddddddddddddd4");
                });

                window.onbeforeunload = function () {
                    if (that.editorHasChanged)
                        return "Do";
                };
            }
        }
    });
})(jQuery);