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
      previousNumber: "",
      currentNumber: "",
      result: 0,
      isOperatingSignClicked: false,
      isEqualClicked: false,
      isStatusOperation: 0,
      deleteCasePreviousNumber: true,
      deleteCaseCurrentNumber: false,
      noOPValidedAgain: false,
    };

    this.updateAndDisplayNumber = this.updateAndDisplayNumber.bind(this);

    this.handleOperation = this.handleOperation.bind(this);

    this.expectReset = this.expectReset.bind(this);

    this.giveUsResult = this.giveUsResult.bind(this);

    this.handleDeletion = this.handleDeletion.bind(this);

    this.handleReset = this.handleReset.bind(this);
  }

  expectReset() {
    if (this.state.noOPValidedAgain) {
      return;
    }
  }

  handleReset() {
    this.setState({
      previousNumber: "",
      currentNumber: "",
      result: 0,
      isOperatingSignClicked: false,
      isEqualClicked: false,
      isStatusOperation: [false, false, false, false],
      noOPValidedAgain: false,
      deleteCasePreviousNumber: true,
      deleteCaseCurrentNumber: false,
    });
  }

  updateAndDisplayNumber(e) {
    this.expectReset();

    if (e.target.className === "single_btn btn_number") {
      if (!this.state.isOperatingSignClicked) {
        this.setState({
          previousNumber: this.state.previousNumber.concat(e.target.value),
          result: parseFloat(this.state.previousNumber.concat(e.target.value)),
        });
      } else if (this.state.isOperatingSignClicked) {
        this.setState({
          currentNumber: this.state.currentNumber.concat(e.target.value),
          result: parseFloat(this.state.currentNumber.concat(e.target.value)),
        });
      }
    }
  }

  handleOperation(e) {
    this.expectReset();

    let j = e.target.value;
    console.log(e.target.value);
    console.log(this.state.previousNumber);

    if (this.state.currentNumber === "") {
      if (j === "+") {
        this.setState({
          isStatusOperation: [true, false, false, false],
          previousNumber: this.state.previousNumber,
          isOperatingSignClicked: true,
          deleteCaseCurrentNumber: true,
        });
      } else if (j === "-") {
        this.setState({
          isStatusOperation: [false, true, false, false],
          previousNumber: this.state.previousNumber,
          isOperatingSignClicked: true,
          deleteCaseCurrentNumber: true,
        });
      } else if (j === "x") {
        this.setState({
          isStatusOperation: [false, false, true, false],
          previousNumber: this.state.previousNumber,
          isOperatingSignClicked: true,
          deleteCaseCurrentNumber: true,
        });
      } else if (j === "/") {
        this.setState({
          isStatusOperation: [false, false, false, true],
          previousNumber: this.state.previousNumber,
          isOperatingSignClicked: true,
          deleteCaseCurrentNumber: true,
        });
      }
    } else if (this.state.currentNumber !== "") {
      if (j === "+") {
        this.setState({
          isStatusOperation: [true, false, false, false],
          previousNumber: this.state.result.toString(),
          currentNumber: "",
        });
      } else if (j === "-") {
        this.setState({
          isStatusOperation: [false, true, false, false],
          previousNumber: this.state.result.toString(),
          currentNumber: "",
        });
      } else if (j === "x") {
        this.setState({
          isStatusOperation: [false, false, true, false],
          previousNumber: this.state.result.toString(),
          currentNumber: "",
        });
      } else if (j === "/") {
        this.setState({
          isStatusOperation: [false, false, false, true],
          previousNumber: this.state.result.toString(),
          currentNumber: "",
        });
      }
    }
  }

  handleDeletion() {
    if (
      this.state.deleteCasePreviousNumber === true &&
      this.state.deleteCaseCurrentNumber === false
    ) {
      if (this.state.previousNumber === "") {
        return;
      }
      this.setState({
        previousNumber: this.state.previousNumber.slice(0, -1),
        result: parseFloat(this.state.previousNumber.slice(0, -1)),
      });
      console.log(parseFloat(this.state.previousNumber.slice(0, -1)));
    } else if (
      this.state.deleteCasePreviousNumber === true &&
      this.state.deleteCaseCurrentNumber === true
    ) {
      if (this.state.noOPValidedAgain === true) {
        return;
      }
      this.setState({
        currentNumber: this.state.currentNumber.slice(0, -1),
        result: parseFloat(this.state.currentNumber.slice(0, -1)),
      });
    }
  }

  giveUsResult() {
    this.expectReset();

    if (
      this.state.isOperatingSignClicked === true &&
      this.state.noOPValidedAgain === false
    ) {
      let j;

      for (let i = 0; i < 4; i++) {
        if (this.state.isStatusOperation[i] === true) {
          j = i;
        }
      }
      switch (j) {
        case 0:
          this.setState({
            result:
              parseFloat(this.state.previousNumber) +
              parseFloat(this.state.currentNumber),
            noOPValidedAgain: true,
          });
          break;
        case 1:
          this.setState({
            result:
              parseFloat(this.state.previousNumber) -
              parseFloat(this.state.currentNumber),
            noOPValidedAgain: true,
          });
          break;
        case 2:
          this.setState({
            result:
              parseFloat(this.state.previousNumber) *
              parseFloat(this.state.currentNumber),
            noOPValidedAgain: true,
          });
          break;
        case 3:
          this.setState({
            result:
              parseFloat(this.state.previousNumber) /
              parseFloat(this.state.currentNumber),
            noOPValidedAgain: true,
          });
          break;
        default:
          console.log("Something get wrong! Can't compute the result.");
      }
    }
  }

  render() {
    return (
      <div className="calc_main_content">
        <div className="result_container">
          <p className="result">{this.state.result}</p>
        </div>

        <div className="button_container" onClick={this.updateAndDisplayNumber}>
          <div className="button_grid" onClick={this.handleOperation}>
            <input
              type="button"
              value="7"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="8"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="9"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="DEL"
              className="single_btn btn_del"
              onClick={this.handleDeletion}
            />
            <input
              type="button"
              value="4"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="5"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="6"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="+"
              className="single_btn btn_operating"
              data-operation
            />
            <input
              type="button"
              value="1"
              className="single_btn btn_number"
              data-number
            />
            <input type="button" value="2" className="single_btn btn_number" />
            <input
              type="button"
              value="3"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="-"
              className="single_btn btn_operating"
              data-operation
            />
            <input type="button" value="." className="single_btn" />
            <input
              type="button"
              value="0"
              className="single_btn btn_number"
              data-number
            />
            <input
              type="button"
              value="/"
              className="single_btn btn_operating"
              data-operation
            />
            <input
              type="button"
              value="x"
              className="single_btn btn_operating"
              data-operation
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
              onClick={this.giveUsResult}
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
