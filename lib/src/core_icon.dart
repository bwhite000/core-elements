part of CoreElements.lib.coreElements;

class CoreIcon extends HtmlElement {
  String _icon = '';

  CoreIcon.created() : super.created();

  @override
  void attached() {
    super.attached();

    if (this.attributes.containsKey('icon')) {
      this._determineIcon();
    }

    if (this._icon.isNotEmpty) {
      this._addIcon();
    }
  }

  // Setters
  void set icon(final String iconName) {
    this._icon = iconName;
  }

  // Util
  void _determineIcon() {
    this._icon = this.attributes['icon'];
  }

  void _addIcon() {
    DocumentFragment iconFrag;

    // If the icon name contains a ".", then it is using a category (e.g. notification.sync)
    if (this._icon.contains('.')) {
      iconFrag = this._getIconByCategory();
    } else {
      iconFrag = ((querySelector(r'link[rel="import"][href$="/core_elements/core_icon.html"]') as LinkElement).import
          .querySelector('#template_${this._icon}-icon') as TemplateElement).content.clone(true);
    }

    this
        ..innerHtml = ''
        ..append(iconFrag);
  }

  DocumentFragment _getIconByCategory() {
    final List<String> iconPieces = this._icon.split('.');
    final String categoryStr = iconPieces[0];
    final String iconNameStr = iconPieces[1];

    return ((querySelector('link[rel="import"][href\$="/core_elements/core-icons/$categoryStr-icons.html"]') as LinkElement).import
        .querySelector('#template_$iconNameStr-icon') as TemplateElement).content.clone(true);
  }
}