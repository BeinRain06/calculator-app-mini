import React from "react";
import "./App.css";

class CalculatorLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tmpTheme: "",
    };
  }

  activateANewTheme = () => {
    if (this.props.themeCalc[0]) {
      this.setState({
        tmpTheme: "toggle addTheme-2",
      });
    } else if (this.props.themeCalc[1]) {
      this.setState({
        tmpTheme: "toggle addTheme-3",
      });
    } else if (this.props.themeCalc[2]) {
      this.setState({
        tmpTheme: "toggle",
      });
    }
  };

  render() {
    return (
      <div className="home_title">
        <div className="left_home">
          <h3 className="logo">Calc</h3>
        </div>
        <div className="right_home">
          <span className="theme">THEME</span>
          <div className="toggle_box">
            <div className="numeric_symbol_theme">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div
              id="toggle"
              className={this.state.tmpTheme}
              onClick={this.activateANewTheme}
            >
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CalculatorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      result: 0,
      isSignClicked: 0,
      isSignEqualClicked: false,
      isOurSign: [false, false, false, false],
    };

    this.handleKeyDisplayNumber = this.handleKeyDisplayNumber.bind(this);

    this.handleResult = this.handleResult.bind(this);

    this.handleAddition = this.handleAddition.bind(this);

    this.handleSoustraction = this.handleSoustraction.bind(this);

    this.handleMultiplication = this.handleMultiplication.bind(this);

    this.handleDivision = this.handleDivision.bind(this);

    this.handleResult = this.handleResult.bind(this);

    this.handleReset = this.handleReset.bind(this);

    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleResult() {
    this.currentStateSet();
    if (this.state.isSignClicked === 2) {
      for (let i = 0; i < 4; i++) {
        if (this.state.isOurSign[i]) {
          let j = i;
          if (j === 0) {
            this.setState({
              result:
                parseFloat(this.state.firstNumber) +
                parseFloat(this.state.secondNumber),
            });
          } else if (j === 1) {
            this.setState({
              result:
                parseFloat(this.state.firstNumber) -
                parseFloat(this.state.secondNumber),
            });
          } else if (j === 2) {
            this.setState({
              result:
                parseFloat(this.state.firstNumber) *
                parseFloat(this.state.secondNumber),
            });
          } else if (j === 3) {
            this.setState({
              result:
                parseFloat(this.state.firstNumber) /
                parseFloat(this.state.secondNumber),
            });
          }
        }
      }
    }
    console.log(this.state.result);
  }

  handleKeyDisplayNumber(e) {
    e.preventDefault();
    if (this.state.isSignClicked === 0) {
      if ((e.target.className = "single_btn")) {
        this.setState({
          firstNumber: this.state.firstNumber.concat(e.target.value),
          result: parseFloat(this.state.firstNumber + e.target.value),
        });
      }
    } else if (this.state.isSignClicked === 1) {
      if ((e.target.className = "single_btn")) {
        this.setState({
          secondNumber: this.state.secondNumber.concat(e.target.value),
          result: parseFloat(this.state.secondNumber + e.target.value),
        });
        console.log(this.state.result);
      }
    }
  }

  handleDeletion() {
    if (!this.state.isSignClicked && !this.state.isSignEqualClicked) {
      this.setState({
        firstNumber: this.state.firstNumber.slice(0, -1),
        result: parseFloat(this.state.result.slice(0)),
      });
    } else if (this.state.isSignClicked && !this.state.isSignEqualClicked) {
      this.setState({
        secondNumber: this.state.secondNumber.slice(0, -1),
        result: parseFloat(this.state.secondNumber),
      });
    }
  }

  handleReset() {
    this.setState({
      firstNumber: "",
      secondNumber: "",
      result: 0,
      isSignClicked: 0,
      isSignEqualClicked: false,
      isOurSign: [false, false, false, false],
    });
  }

  previousStateSet = () => {
    this.setState({
      firstNumber: this.state.firstNumber.slice(0, -1),
      isSignClicked: 1,
    });
  };

  currentStateSet = () => {
    this.setState({
      secondNumber: this.state.result.toString(),
      isSignClicked: 2,
    });
  };

  handleAddition(e) {
    this.previousStateSet();
    this.setState({
      isOurSign: [true, false, false, false],
    });
    console.log(this.state.firstNumber);
  }

  handleSoustraction(e) {
    this.previousStateSet();
    this.setState({
      isOurSign: [false, true, false, false],
    });
  }

  handleMultiplication(e) {
    this.previousStateSet();
    this.setState({
      isOurSign: [false, false, true, false],
    });
  }

  handleDivision(e) {
    this.previousStateSet();
    this.setState({
      isOurSign: [false, false, false, true],
    });
  }

  render() {
    return (
      <div className="calc_main_content">
        <div className="result_container">
          <p className="result">{this.state.result}</p>
        </div>

        <div className="button_container" onClick={this.handleKeyDisplayNumber}>
          <div className="button_grid">
            <input type="button" value="7" className="single_btn" />
            <input type="button" value="8" className="single_btn" />
            <input type="button" value="9" className="single_btn" />
            <input
              type="button"
              value="DEL"
              className="single_btn btn_del"
              onClick={this.handleDeletion}
            />
            <input type="button" value="4" className="single_btn" />
            <input type="button" value="5" className="single_btn" />
            <input type="button" value="6" className="single_btn" />
            <input
              type="button"
              value="+"
              className="single_btn symbol"
              onClick={this.handleAddition}
            />
            <input type="button" value="1" className="single_btn" />
            <input type="button" value="2" className="single_btn" />
            <input type="button" value="3" className="single_btn" />
            <input
              type="button"
              value="-"
              className="single_btn symbol"
              onClick={this.handleSoustraction}
            />
            <input type="button" value="." className="single_btn" />
            <input type="button" value="0" className="single_btn" />
            <input
              type="button"
              value="/"
              className="single_btn symbol"
              onClick={this.handleDivision}
            />
            <input
              type="button"
              value="x"
              className="single_btn symbol"
              onClick={this.handleMultiplication}
            />
            <input
              type="button"
              value="RESET"
              className="dual_btn btn_reset"
              onClick={this.handleReset}
            />
            <input
              type="button"
              value="="
              className="dual_btn btn_result"
              onClick={this.handleResult}
            />
          </div>
        </div>
      </div>
    );
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOurTheme: [true, false, false],
    };
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(e) {
    e.preventDefault();

    if ((e.target.id = "toggle")) {
      for (let i = 0; i < 3; i++) {
        if (this.state.isOurTheme[i]) {
          let j = i;
          switch (j) {
            case 0:
              this.setState({
                isOurTheme: [false, true, false],
              });
              break;
            case 1:
              this.setState({
                isOurTheme: [false, false, true],
              });
              break;
            case 2:
              this.setState({
                isOurTheme: [true, false, false],
              });
              break;
            default:
              console.log("Error: No issue in handleTheme");
          }
        }
      }
    }
  }
  render() {
    return (
      <div className="calc_container">
        <div className="calc_content">
          <CalculatorLabel themeCalc={this.handleTheme} />
          <CalculatorPanel themeButton={this.handleTheme} />
        </div>
      </div>
    );
  }
}

export default Calculator;
