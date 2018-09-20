var calcAverageTip = require('./task1');

describe('test calcAverageTip', () => {
  it('average (2 + 3 + 5 + 6) equally 4', () => {
    expect(calcAverageTip({tips: [2, 3, 5, 6]})).toBe(4);
  });
});

describe('test method tipCalculatorJohn and tipCalculatorMark', () => {
  it('tip mark to be [8, 20, 100]', () => {
    var mark = {
      bills: [40, 200, 400],
      tipCalculatorMark: function () {
        var percentage;
        var self = this;
        self.tips = [];
        self.paidAmounts = [];
        for (var i = 0; i < self.bills.length; i++) {
          var bill = self.bills[i];
          if (bill < 100) {
            percentage = 0.2;
          } else if (bill >= 100 && bill < 300) {
            percentage = 0.10;
          } else {
            percentage = 0.25;
          }
          self.tips[i] = bill * percentage;
          self.paidAmounts[i] = bill + self.tips[i];
        }
      }
    };
    mark.tipCalculatorMark();
    expect(mark.tips).toEqual([8, 20, 100]);
  });

  it('tip john to be [8, 15, 30]', () => {
    var john = {
      bills: [40, 100, 300],
      tipCalculatorJohn: function () {
        var percentage;
        var self = this;
        self.tips = [];
        self.paidAmounts = [];
        for (var i = 0; i < self.bills.length; i++) {
          var bill = self.bills[i];
          if (bill < 50) {
            percentage = 0.2;
          } else if (bill >= 50 && bill < 200) {
            percentage = 0.15;
          } else {
            percentage = 0.1;
          }
          self.tips[i] = bill * percentage;
          self.paidAmounts[i] = bill + self.tips[i];
        }
      }
    };
    john.tipCalculatorJohn();
    expect(john.tips).toEqual([8, 15, 30]);
  });
});

