const { convertNumberToName, getTime } = require('../bin/index');

test('Convert Number to Name', async () => {
    expect(convertNumberToName(1)).toStrictEqual("one")
    expect(convertNumberToName(5)).toStrictEqual("five")
    expect(convertNumberToName(15)).toStrictEqual("fifteen")
    expect(convertNumberToName(12)).toStrictEqual("twelve")
    expect(convertNumberToName(0)).toStrictEqual("")
})

test('Return the time in words', async () => {
    expect(getTime("00:00")).toStrictEqual("It's twelve am")
    expect(getTime("01:30")).toStrictEqual("It's one thirty am")
    expect(getTime("12:05")).toStrictEqual("It's twelve oh five pm")
    expect(getTime("14:01")).toStrictEqual("It's two oh one pm")
    expect(getTime("20:29")).toStrictEqual("It's eight twenty nine pm")
    expect(getTime("21:00")).toStrictEqual("It's nine pm")
    
})