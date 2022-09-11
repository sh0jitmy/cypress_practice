describe('カウンターアプリのテスト', function () {
  //beforeEach:各テストの前に必ず実行される処理
  beforeEach(() => {
    cy.visit('/');
  });
  it('+ボタンを押すとカウンターの値に1プラスされる', () => {
    cy.get('.increment').click().get('.counter').should('have.text', '1')
    cy.screenshot('counter-on');  
  });

  it('-ボタンを押すとカウンターの値が1マイナスされる', () => {
    cy.get('.decrement').click().get('.counter').should('have.text', '-1')
    cy.screenshot('counter-off');  
  });

  it('+ボタンを押した後、リセットボタンを押すとカウントが0に戻る', () => {
    cy.get('.increment').click().get('.reset').click().get('.counter').should('have.text', '0')
    cy.screenshot('counter-reset');  
  });
  it('データのインターセプト', () => {
    cy.readFile('test/test.txt').then((textdata) => {
    cy.intercept('GET','http://localhost:3300/data',
    {
      statusCode:200,
      body: textdata
    }).as('get_req')
    cy.wait('@get_req')
    });
    cy.screenshot('rest-intercept');  
  });
});
