jQuery(document).ready(function() {
    if (jQuery.browser.msie){
        alert('This presentation does not work in Internet Explorer.\n\nPlease switch to Chrome or Firefox');
    }
    jQuery("dl").hide();

    jQuery("form").submit(function() {
        jQuery("#results").empty();

        try {
            (new Function(jQuery("#code").val()))();
        } catch(e) {
            error(e.message);
        }

        //clear out everything in window
        for (var item in window) {
            if (!stasis[item]) {
                window[item] = undefined;
                delete window[item];
            }
        }
        return false;
    });

    jQuery("#code").keydown(function(e) {
        if (this.setSelectionRange) {
            var start = this.selectionStart, val = this.value;

            if (e.keyCode == 13) {
                var match = val.substring(0, start).match(/(^|\n)([ \t]*)([^\n]*)$/);
                if (match) {
                    var spaces = match[2], length = spaces.length + 1;
                    this.value = val.substring(0, start) + "\n" + spaces + val.substr(this.selectionEnd);
                    this.setSelectionRange(start + length, start + length);
                    this.focus();
                    return false;
                }
            } else if (e.keyCode == 8) {
                if (val.substring(start - 2, start) == "  ") {
                    this.value = val.substring(0, start - 2) + val.substr(this.selectionEnd);
                    this.setSelectionRange(start - 2, start - 2);
                    this.focus();
                    return false;
                }
            } else if (e.keyCode == 9) {
                this.value = val.substring(0, start) + "  " + val.substr(this.selectionEnd);
                this.setSelectionRange(start + 2, start + 2);
                this.focus();
                return false;
            }
        }
    });

    jQuery("#pre").dblclick(function() {
        jQuery("#pre").hide();
        jQuery("#code").focus();
    });

    jQuery("#prev").click(function() {
        pos--;
        loadSample();
    });

    jQuery("#next").click(function() {
        pos++;
        loadSample();
    });

    var stasis = {};
    for (var item in window) {
        stasis[item] = true;
    }

    var pos;

    if (location.hash) {
        pos = parseInt(location.hash.substr(1)) - 1;
        loadSample();
    } else {
        showTOC();
    }

    function showTOC() {
        jQuery("#pre").empty();
        jQuery("h3").removeClass("large");
        jQuery("#pre, #code").height(425).show();

        jQuery("dd:empty").prev("dt").each(function(i) {
            var dt = jQuery("dt").index(this);
            jQuery("<a href='#" + (dt + 1) + "'>" + (i + 1) + ") " + this.innerHTML + "\n</a>").click(
                    function() {
                        pos = dt;
                        loadSample();
                        return false;
                    }).appendTo("#pre");
        });

        jQuery("div.buttons").hide();
    }

    function loadSample() {
        jQuery("div.buttons").show();

        var code = jQuery("#code");

        var source = (jQuery("dd").eq(pos).find("pre").html() || "")
                .replace(/(^|\n) /g, "$1").replace(/ ($|\n)/g, "$1");

        if (!source) {
            jQuery("h3").addClass("large");
            jQuery("#pre, #code, #run, #cite").hide();
        } else {
            jQuery("h3").removeClass("large");
            jQuery("#pre, #code, #cite").show();

            if (source.match(/assert\(|log\(|error\(/))
                jQuery("#run").show();
            else
                jQuery("#run").hide();
        }

        jQuery("h3").html((source ? "#" + (pos + 1) + ": " : "") + jQuery("dt").eq(pos).html());
        code.val(source.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
        jQuery("#pre").html(source).chili();
        jQuery("#results").empty();

        code.add("#pre").height(275)[0];

        if (code[0].scrollHeight > 275)
            code.add("#pre").height(code[0].scrollHeight + 5);

        var last = jQuery("dt").length - 1;

        if (pos == 0)
            jQuery("#prev").css("visibility", "hidden");
        if (pos > 0)
            jQuery("#prev").css("visibility", "visible");

        if (pos == last)
            jQuery("#next").css("visibility", "hidden");
        if (pos < last)
            jQuery("#next").css("visibility", "visible");

        window.location.hash = pos + 1;
    }

    setInterval(function() {
        if (location.hash != ("#" + (pos + 1))) {
            var num = parseInt(location.hash.substr(1)) - 1;
            if (isNaN(num)) {
                if (jQuery("div.buttons").is(":visible")) {
                    showTOC();
                }
            } else {
                pos = num;
                loadSample();
            }
        }
    }, 100);
});