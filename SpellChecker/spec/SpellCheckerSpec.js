describe('SpellChecker', () => {

  it('returns A for the letter A', () => {
    expect(spellChecker('A')).toEqual('A')
  });

  it('returns ~Ak~ for the letter Ak', () => {
    expect(spellChecker('Ak')).toEqual('~Ak~')
  });

  it('returns ThEse for the word ThEse', () => {
    expect(spellChecker('ThEse')).toEqual('ThEse')
  });

  it('returns A These for the text A These', () => {
    expect(spellChecker('A These')).toEqual('A These')
  });

  it('returns A These ~spnelt~ for the text A These spnelt', () => {
    expect(spellChecker('A These spnelt')).toEqual('A These ~spnelt~')
  });
});
