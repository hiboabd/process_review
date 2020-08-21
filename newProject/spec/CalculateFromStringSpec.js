describe('CalculateFromString', () => {
  it('Returns ["1", 1] when "1" is inputted', () => {
    expect(calculateFromString("1")).toEqual(["1", 1])
  })

  it('returns ["1 + 2", 3] when "1 + 2" is inputted', () => {
    expect(calculateFromString("1 + 2")).toEqual(["1 + 2", 3])
  })
})