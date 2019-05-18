define([
    'prototype/var/EmojioneArea',
    'function/trigger'
],
function(EmojioneArea, trigger) {
    EmojioneArea.prototype.showPicker = function () {
        var self = this;
        if (self._sh_timer) {
            window.clearTimeout(self._sh_timer);
        }
        self.picker.removeClass("hidden");
        self._sh_timer =  window.setTimeout(function() {
            self.button.addClass("active");
        }, 50);
        trigger(self, "picker.show", [self.picker]);
        return self;
    }
    EmojioneArea.prototype.showSysTagPicker = function () {
        var self = this;
        if (self._stsh_timer) {
            window.clearTimeout(self._stsh_timer);
        }
        self.sysTagPicker.removeClass("hidden");
        self._stsh_timer =  window.setTimeout(function() {
            self.sysTagButton.addClass("active");
        }, 50);
        trigger(self, "sysTagPicker.show", [self.sysTagPicker]);
        return self;
    }
});