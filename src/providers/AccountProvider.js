import React from "react";

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    username: "Fooman",
    dateJoined: "12/26/86",
    membershipLevel: "Gold",
    updateAccountZ: (x) => this.updateAccount(x),
  };
  updateAccount = (account) => {
    this.setState({ ...account });
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
