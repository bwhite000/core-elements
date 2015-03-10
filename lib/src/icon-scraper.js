/**
 * Use this tool to scrape, format, and export the SVGs from Google's Polymer core icons website to fit
 * this project's style.
 *
 * See: https://www.polymer-project.org/components/core-icons/demo.html [currently 404'ing - 2015-03-10]
 */

var coreIconElms = document.querySelectorAll('div.set:nth-of-type(1) core-icon'),
    outputStrArr = [];

[].forEach.call(coreIconElms, function (coreIconElm) {
  var svgElm = coreIconElm.querySelector('svg').cloneNode(true);

  svgElm.removeAttribute('height');
  svgElm.removeAttribute('width');
  svgElm.removeAttribute('style');

  outputStrArr.push('<template id="template_' + coreIconElm.getAttribute('aria-label') + '-icon">' +
                    svgElm.outerHTML.replace('fit=""', 'fit') +
                    '</template>');
});

console.log(outputStrArr.join('\n\n'));
