define([
    'jquery',
    'prototype/var/EmojioneArea',
    'var/getDefaultOptions',
    'function/htmlFromText',
    'var/blankImg',
    'var/emojioneSupportMode',
    'function/loadEmojione',
    'prototype/on',
    'prototype/off',
    'prototype/trigger',
    'prototype/setFocus',
    'prototype/setText',
    'prototype/getText',
    'prototype/showPicker',
    'prototype/hidePicker',
	'prototype/enable',
	'prototype/disable'
],
function($, EmojioneArea, getDefaultOptions, htmlFromText, blankImg, emojioneSupportMode, loadEmojione) {
    $.fn.emojioneArea = function(options) {
        return this.each(function() {
            if (!!this.emojioneArea) return this.emojioneArea;
            $.data(this, 'emojioneArea', this.emojioneArea = new EmojioneArea($(this), options));
            return this.emojioneArea;
        });
    };

    $.fn.emojioneArea.defaults = getDefaultOptions();

    $.fn.emojioneAreaText = function(options) {
        var self = this, pseudoSelf = {
            shortnames: (options && typeof options.shortnames !== 'undefined' ? options.shortnames : true),
            emojiTemplate: '<img alt="{alt}" class="emojione' + (options && options.sprite && emojioneSupportMode < 3 ? '-{uni}" src="' + blankImg : 'emoji" src="{img}') + '"/>'
        };

        loadEmojione(options);
        emojioneReady(function() {
            self.each(function() {
                if (typeof this.emojioneAreaText === 'undefined') {
                    this.emojioneAreaText = {
                        $this: $(this),
                        getText: function() {
                            return textFromHtml(this.$this.html(), pseudoSelf);
                        },
                        setText: function(text) {
                            return this.$this.html(htmlFromText(text, pseudoSelf));
                        }
                    };
                    this.emojioneAreaText.$this.addClass('emojionearea-text');
                    this.emojioneAreaText.setText(this.emojioneAreaText.$this.is('TEXTAREA') || this.emojioneAreaText.$this.is('INPUT') ? this.emojioneAreaText.$this.val() : this.emojioneAreaText.$this.text());
                }
                return this.emojioneAreaText.$this;
            });
        });

        return this;
    };
});