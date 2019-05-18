define([
    'prototype/var/EmojioneArea',
    'function/trigger'
],
function(EmojioneArea, trigger) {
    EmojioneArea.prototype.hidePicker = function () {
        var self = this;
        if (self._sh_timer) {
            window.clearTimeout(self._sh_timer);
        }
        self.button.removeClass("active");
        self._sh_timer =  window.setTimeout(function() {
            self.picker.addClass("hidden");
        }, 500);
        trigger(self, "picker.hide", [self.picker]);
        return self;
    }
    EmojioneArea.prototype.hideSysTagPicker = function () {
        var self = this;
        if (self._stsh_timer) {
            window.clearTimeout(self._stsh_timer);
        }
        self.sysTagButton.removeClass("active");
        self._stsh_timer =  window.setTimeout(function() {
            self.sysTagPicker.addClass("hidden");
        }, 500);
        trigger(self, "sysTagPicker.hide", [self.sysTagPicker]);
        return self;
    }
});