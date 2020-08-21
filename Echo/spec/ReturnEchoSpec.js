describe('ReturnEcho', () => {
  it(`Returns 'H' with the date and time`, () => {
    let currentDate = new Date().toISOString().substring(0,10)
    let currentTime = new Date().toISOString().substring(11,19)
    expect(ReturnEcho('H')).toEqual(`${currentDate} | ${currentTime} | You said: 'H'!`)
  });

  it(`Returns 'hello, world' with the date and time`, () => {
    let currentDate = new Date().toISOString().substring(0,10)
    let currentTime = new Date().toISOString().substring(11,19)
    expect(ReturnEcho('hello, world')).toEqual(`${currentDate} | ${currentTime} | You said: 'hello, world'!`)
  });

  it(`Returns goodbye when message is exit`, () => {
    let currentDate = new Date().toISOString().substring(0,10)
    let currentTime = new Date().toISOString().substring(11,19)
    expect(ReturnEcho('exit')).toEqual(`goodbye`)
  });
});