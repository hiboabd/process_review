describe('BandPassFilter', () => {
  it('returns 40 when track is [40] and within both limits', () => {
    expect(bandPassFilter([40], 40, 1000)).toEqual([40])
  });

  it('returns 50 when track is [10] lower than lower limit', () => {
    expect(bandPassFilter([10], 50, 1000)).toEqual([50])
  });

  it('returns 1000 when track is [1001] higher than upper limit', () => {
    expect(bandPassFilter([1001], 50, 1000)).toEqual([1000])
  });
});
