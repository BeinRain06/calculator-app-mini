import React from "react";
import "./App.css";

function CalculatorLabel() {
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
          <div className="toggle">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

class CalculatorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      result: 0,
      isSignClicked: false,
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
  }

  handleKeyDisplayNumber(e) {
    e.preventDefault();
    if (!this.state.isSignClicked) {
      if ((e.target.className = "single_btn")) {
        this.setState({
          firstNumber: this.state.firstNumber.concat(e.target.value),
          result: parseFloat(this.state.firstNumber).toFixed(3),
        });
      } else if ((e.target.className = "single_btn btn_del")) {
        this.setState({
          firstNumber: this.state.firstNumber.splice(
            this.state.firstNumber.length - 1,
            1
          ),
          result: parseFloat(this.state.firstNumber).toFixed(3),
        });
      }
    } else {
      if ((e.target.className = "single_btn")) {
        this.setState({
          secondNumber: this.state.secondNumber.concat(e.target.value),
          result: parseFloat(this.state.secondNumber).toFixed(3),
        });
      } else if ((e.target.className = "single_btn btn_del")) {
        this.setState({
          secondNumber: this.state.secondNumber.splice(
            this.state.secondNumber.length - 1,
            1
          ),
          result: parseFloat(this.state.secondNumber).toFixed(3),
        });
      } else if ((e.target.className = "dual_btn btn_reset")) {
        this.setState({
          firstNumber: "",
          secondNumber: "",
          result: 0,
          isSignClicked: false,
        });
      }
    }
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      firstNumber: "",
      secondNumber: "",
      result: 0,
      isSignClicked: false,
      isOurSign: [false, false, false, false],
    });
  }

  handleResult(e) {
    e.preventDefault();
    for (let i = 0; i < 4; i++) {
      if (this.state.isOurSign[i]) {
        let j = i;
        switch (j) {
          case 0:
            this.setState({
              result: parseFloat(
                this.state.firstNumber + this.state.secondNumber
              ).toFixed(3),
            });
            break;
          case 1:
            this.setState({
              result: parseFloat(
                this.state.firstNumber - this.state.secondNumber
              ).toFixed(3),
            });
            break;
          case 2:
            this.setState({
              result: parseFloat(
                this.state.firstNumber * this.state.secondNumber
              ).toFixed(3),
            });
            break;
          case 3:
            this.setState({
              result: parseFloat(
                this.state.firstNumber / this.state.secondNumber
              ).toFixed(3),
            });
            break;
          default:
            console.log("something appears wrong");
        }
      }
    }
    return this.state.result;
  }

  actualState = () => {
    this.setState({
      firstNumber: this.state.firstNumber,
      result: parseFloat(this.state.firstNumber).toFixed(3),
      isSignClicked: true,
    });
  };

  handleAddition(e) {
    this.actualState();
    this.setState({
      isOurSign: [true, false, false, false],
    });
  }

  handleSoustraction(e) {
    this.actualState();
    this.setState({
      isOurSign: [false, true, false, false],
    });
  }

  handleMultiplication(e) {
    this.actualState();
    this.setState({
      isOurSign: [false, false, true, false],
    });
  }

  handleDivision(e) {
    this.actualState();
    this.setState({
      isOurSign: [false, false, false, true],
    });
  }

  handleKeySign(e) {
    e.preventDefault();
    if (e.target.value === "+") {
      this.actualState();
    } else if (e.target.value === "-") {
      this.actualState();
    } else if (e.target.value === "x") {
      this.actualState();
    } else if (e.target.value === "/") {
      this.actualState();
    }
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
            <input type="button" value="DEL" className="single_btn btn_del" />
            <input type="button" value="4" className="single_btn" />
            <input type="button" value="5" className="single_btn" />
            <input type="button" value="6" className="single_btn" />
            <input
              type="button"
              value="+"
              className="single_btn"
              onClick={this.handleAddition}
            />
            <input type="button" value="1" className="single_btn" />
            <input type="button" value="2" className="single_btn" />
            <input type="button" value="3" className="single_btn" />
            <input
              type="button"
              value="-"
              className="single_btn"
              onClick={this.handleSoustraction}
            />
            <input type="button" value="." className="single_btn" />
            <input type="button" value="0" className="single_btn" />
            <input
              type="button"
              value="/"
              className="single_btn"
              onClick={this.handleDivision}
            />
            <input
              type="button"
              value="x"
              className="single_btn"
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

function Calculator() {
  return (
    <div className="calc_container">
      <div className="calc_content">
        <CalculatorLabel />
        <CalculatorPanel />
      </div>
    </div>
  );
}

export default Calculator;
