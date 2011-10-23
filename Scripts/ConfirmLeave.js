(function ($) {
    $.extend({
        confirmLeave: {
            editorHasChanged: false,

            makeConfirm: function (fieldId) {
                var input = $("#" + fieldId);
                var form = input.length > 0 ? $(input[0].form) : $();

                // Detect changes on input elements
                form.change(function () {
                    alert("kjjjJ+");
                });

                // Detect also on textareas
                form.find("textarea").change(function () {
                    alert("ddddddddddddd4");
                });
            }
        }
    });
})(jQuery);