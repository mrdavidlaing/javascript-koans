describe('Expects', function() {

  it('우리는 true를 원합니다.', function() {

    // 여기서 시작입니다! false를 true로 바꿔보세요!
    expect(true).toBeTruthy();
  });

  it('두개의 값이 같아야 합니다. #1', function() {
    // FILL_ME_IN을 수정하세요.
    var expectedValue = 2;
    var actualValue = 1 + 1;

    // toBeTruthy()를 이용한 테스트
    expect(actualValue === expectedValue).toBeTruthy();
  });

  it('두개의 값이 같아야 합니다. #2', function() {
    // FILL_ME_IN을 수정하세요.
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual()을 사용한 테스트
    expect(actualValue).toEqual(expectedValue);
  });

  // type을 정확하게 사용해줘야 합니다.
  it('두개의 값이 같아야 합니다. #3', function() {
    // FILL_ME_IN을 수정하세요.
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

    // toBe()는 ===를 이용한 테스트입니다.
    expect(actualValue).toBe(expectedValue);
  });

  it('값을 올바르게 바꿔주어야 합니다.', function() {
    // FILL_ME_IN을 수정하세요.
    expect(1 + 1).toEqual(2);
  });
});
