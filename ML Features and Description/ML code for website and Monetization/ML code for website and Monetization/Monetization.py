class BitcoinWallet:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True

    def get_balance(self):
        return self.balance

class RewardsSystem:
    def __init__(self, wallet=None):
        if wallet is None:
            wallet = BitcoinWallet()
        self.wallet = wallet

    def earn_rewards(self, user_id, rewards):
        if rewards <= 0:
            raise ValueError("Rewards amount must be positive.")
        self.wallet.deposit(rewards)
        print(f"User {user_id} earned {rewards} Bitcoin rewards.")

    def redeem_rewards(self, user_id, amount):
        if amount <= 0:
            raise ValueError("Redemption amount must be positive.")
        if self.wallet.withdraw(amount):
            print(f"User {user_id} redeemed {amount} Bitcoin rewards.")
        else:
            print(f"User {user_id} does not have enough rewards to redeem {amount} Bitcoin.")

    def get_total_rewards(self):
        return self.wallet.get_balance()

# Example Usage
if __name__ == "__main__":
    rewards_system = RewardsSystem()

    # Simulate users earning and redeeming rewards
    rewards_system.earn_rewards("user123", 5)
    rewards_system.earn_rewards("user456", 10)

    rewards_system.redeem_rewards("user123", 3)
    rewards_system.redeem_rewards("user456", 15)

    # Get total rewards remaining
    total_rewards = rewards_system.get_total_rewards()
    print(f"Total Bitcoin rewards remaining: {total_rewards}")