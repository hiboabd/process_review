describe('Change Converter', () => {

  beforeEach(() => {
    const changeConverter = new ChangeConverter()
  });

  it(`returns ['1p'] for 0.01`, () => {
    expect(changeConverter.convert(0.01)).toEqual(`['1p']`)
  })

});
