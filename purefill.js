(function(context) {
  // set true parseInt function in temporary variable
  var oldParseInt = parseInt;

  /**
   * edit parseInt function, set radix to 10 if not precised
   * (js parseInt base have unexpected behavior with auto-detect radix)
   * 
   * @param {any} str
   * @param {any} radix
   * @returns
   */
  context.parseInt = function parseInt(str, radix) {
    return oldParseInt(str, radix || 10);
  };
})(window);
