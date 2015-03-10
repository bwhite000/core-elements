(function () {
  var CoreIconProto = Object.create(HTMLElement.prototype);

  CoreIconProto._shadowRoot = null;
  CoreIconProto._icon = null;
  CoreIconProto._determineIcon = function () {
    this.icon = this.getAttribute('icon');
  };
  CoreIconProto._addIcon = function () {
    var iconFrag;

    if (this._icon.indexOf('.') > -1) {
      iconFrag = this._getIconByCategory();
    } else {
      iconFrag = document.querySelector('link[rel="import"][href$="/core_elements/core_icon.html"]')
          .import.querySelector('#template_' + this._icon + '-icon').content.cloneNode(true);
    }

    this._shadowRoot.getElementById('content').innerHTML = '';
    this._shadowRoot.getElementById('content').appendChild(iconFrag);
  };

  CoreIconProto._getIconByCategory = function () {
    var iconPieces = this._icon.split('.'),
        categoryStr = iconPieces[0],
        iconNameStr = iconPieces[1];

    console.log(iconNameStr);
    return document.querySelector('link[rel="import"][href$="/core_elements/core_icons/' + categoryStr + '-icons.html"]')
        .import.querySelector('#template_' + iconNameStr + '-icon').content.cloneNode(true);
  };

  Object.defineProperty(CoreIconProto, 'icon', {
    get: function () {
      return this._icon;
    },
    set: function (iconVal) {
      this._icon = iconVal;
    }
  });

  CoreIconProto.attachedCallback = function () {
    var frag = document.querySelector('link[rel="import"][href$="/core_elements/core_icon.html"]')
        .import.querySelector('#template_core-icon').content.cloneNode(true);

    this._shadowRoot = this.createShadowRoot();
    this._shadowRoot.appendChild(frag);

    if (this.hasAttribute('icon')) {
      this._determineIcon();
    }

    if (this._icon != undefined || this._icon != '') {
      this._addIcon();
    }
  };

  document.registerElement('core-icon', {prototype: CoreIconProto});
})();
