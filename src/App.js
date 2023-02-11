import React from "react";
import "./App.css";

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
        <div
          className="result_container"
          data-result-container={this.props.dataResultContainer}
        >
          <p className="result">{this.state.result}</p>
        </div>

        <div
          className="button_container"
          onClick={this.updateAndDisplayNumber}
          data-btn-container={this.props.dataButtonContainer}
        >
          <div className="button_grid" onClick={this.handleOperation}>
            <input
              type="button"
              value="7"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="8"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="9"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="DEL"
              className="single_btn btn_del"
              onClick={this.handleDeletion}
              data-delete={this.props.dataDelete}
            />
            <input
              type="button"
              value="4"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="5"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="6"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="+"
              className="single_btn btn_operating"
              data-operation={this.props.dataOperation}
            />
            <input
              type="button"
              value="1"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input type="button" value="2" className="single_btn btn_number" />
            <input
              type="button"
              value="3"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="-"
              className="single_btn btn_operating"
              data-operation={this.props.dataOperation}
            />
            <input
              type="button"
              value="."
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="0"
              className="single_btn btn_number"
              data-number={this.props.dataNumber}
            />
            <input
              type="button"
              value="/"
              className="single_btn btn_operating"
              data-operation={this.props.dataOperation}
            />
            <input
              type="button"
              value="x"
              className="single_btn btn_operating"
              data-operation={this.props.dataOperation}
            />
            <input
              type="button"
              value="RESET"
              className="dual_btn btn_reset"
              onClick={this.handleReset}
              data-reset={this.props.dataReset}
            />
            <input
              type="button"
              value="="
              className="dual_btn btn_result"
              onClick={this.giveUsResult}
              data-result={this.props.dataNumber}
            />
          </div>
        </div>
      </div>
    );
  }
}

function CalculatorLabel(props) {
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
          <div id="toggle" className="toggle" data-toggle={props.dataToggle}>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOurTheme: [true, false, false],
      tmpTheme: "toggle",
      dataToggle: "0",
      dataReset: "0",
      dataResult: "0",
      dataDelete: "0",
      dataOperation: "0",
      dataNumber: "0",
      dataResultContainer: "0",
      dataButtonContainer: "0",
    };
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(e) {
    e.preventDefault();
    console.log(e.target);

    if ((e.target.className = "right_home")) {
      for (let i = 0; i < 3; i++) {
        if (this.state.isOurTheme[i]) {
          let j = i;
          switch (j) {
            case 0:
              this.setState({
                isOurTheme: [false, true, false],
                dataToggle: "1",
                dataReset: "1",
                dataResult: "1",
                dataDelete: "1",
                dataOperation: "1",
                dataNumber: "1",
                dataResultContainer: "1",
                dataButtonContainer: "1",
              });
              break;
            case 1:
              this.setState({
                isOurTheme: [false, false, true],
                dataToggle: "2",
                dataReset: "2",
                dataResult: "2",
                dataDelete: "2",
                dataOperation: "2",
                dataNumber: "2",
                dataResultContainer: "2",
                dataButtonContainer: "2",
              });
              break;
            case 2:
              this.setState({
                isOurTheme: [true, false, false],
                dataToggle: "0",
                dataReset: "0",
                dataResult: "0",
                dataDelete: "0",
                dataOperation: "0",
                dataNumber: "0",
                dataResultContainer: "0",
                dataButtonContainer: "0",
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
          <CalculatorLabel
            onClick={this.handleTheme}
            dataToggle={this.state.dataToggle}
          />
          <CalculatorPanel
            onClick={this.handleTheme}
            dataResult={this.state.dataResult}
            dataDelete={this.state.dataDelete}
            dataReset={this.state.dataReset}
            dataOperation={this.state.dataOperation}
            dataNumber={this.state.dataNumber}
            dataResultContainer={this.state.dataResultContainer}
            dataButtonContainer={this.state.dataButtonContainer}
          />
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://www.frontendmentor.io/profile/BeinRain06">
            BeinRain06
          </a>
          .
        </div>
      </div>
    );
  }
}

export default Calculator;
