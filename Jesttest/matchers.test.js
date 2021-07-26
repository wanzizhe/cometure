test('测试3与3相匹配', () => {
    //toBe 匹配器 matchers
    expect(3).toBe(3)
})


test('测试对象内容相等', () => {
    //toEqual 匹配器
    const a = { one: 1 };
    expect(a).toEqual({ one: 1 })
})


