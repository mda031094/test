function same(x, y)  {
    if (x !== x && y !== y)  // lgtm[js/comparison-of-identical-expressions]
        return true;
    return x === y;
}
