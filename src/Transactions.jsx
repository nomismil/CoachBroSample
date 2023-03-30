import React from "react";
import Navbar from "./Navbar.jsx";

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      trainingDetails: [],
      show: false,
      totalCost: 0
    };

    console.log("constructor called");

  }

  async getTransactionsHere() {
    this.props.getTransactions().then((res) => {
      console.log(res);
    });
  }

  componentDidMount() {
    console.log("component m!");
    // this.state.transactions = this.props.getTransactions()
    var allTrainings = []

    this.props.getTrainingById(1).then(res => {
      allTrainings.push(res)
      this.props.getTrainingById(2).then(res2 => {
        allTrainings.push(res2)
        this.setState({ trainingDetails: allTrainings })
        this.setState({ show: true })
      })
    })

    var costs = 0;

    this.props
      .getTrainingReceived(window.localStorage.getItem("memberID"))
      .then((res) => {
        this.setState({ transactions: res });
        for(let i = 0; i < res.length; i++) {
          if(+res[i].trainingId === 1) {
            // console.log(res[i].cost);
            costs = costs + 9.9;
          }
          else {
            costs = costs + 4.5;
          }
        }
        this.setState({totalCost: costs})
      });
      
    // this.state.transactions.forEach(transaction => {
    //   console.log(transaction);
    //   transaction.trainingId === 1 ? this.setState({ cost: this.state.cost + allTrainings[0].cost }) : this.setState({ cost: this.state.cost + allTrainings[1].cost })
    // })

  }

  render() {
    // console.log(this.state.show);
    console.log(this.state.trainingDetails);
    // console.log(this.state.transactions);
    console.log(this.state.totalCost);


    // const {  transactions } = this.state;

    return (
      <>
        <div>
          <Navbar />
        </div>
        <div
          className="container myTransactions"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>Your Transactions</h3>

          <table>
            <thead>
              <tr>
                <td>Training Type</td>
                <td>Username</td>
                <td>Date</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody>
              {this.state.show ?
                this.state.transactions.map((transaction, index) => (
                  <tr>
                    <td>{transaction.trainingId === 1 ? this.state.trainingDetails[0].type : this.state.trainingDetails[1].type}</td>
                    <td>{transaction.trainingId === 1 ? this.state.trainingDetails[0].trainer : this.state.trainingDetails[1].trainer}</td>
                    <td>{transaction.trainingId === 1 ? this.state.trainingDetails[0].date : this.state.trainingDetails[1].date}</td>
                    <td>{transaction.trainingId === 1 ? this.state.trainingDetails[0].cost : this.state.trainingDetails[1].cost}</td>
                  </tr>
                )) :
                <></>}
            </tbody>
          </table>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>Total number of trainings attended: </h3>
            <h3>{this.state.transactions.length}</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>Total Cost: </h3>
            <h3>{this.state.totalCost}</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>Average Cost: </h3>
            <h3>{this.state.totalCost / this.state.transactions.length}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Transactions;
