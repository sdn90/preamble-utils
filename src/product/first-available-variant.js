function firstAvailableVariant(variants) {
  for (var i = 0; i < variants.length; i++) {
    if (variants[i].available) {
      return variants[i];
    }
  }

  return undefined;
}

module.exports = firstAvailableVariant;
