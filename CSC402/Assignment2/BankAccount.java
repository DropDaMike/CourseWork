public interface BankAccount {
	public void doTransaction(Double amount, TransactionType transactionType);
}

enum TransactionType {  /* use stereotype "enumeration" for enum in the UML diagram */
	CREADIT, DEBIT;
}

abstract class AbstractBankAccount implements BankAccount {
	private String id;

	private Double balance;

	public String getID() { 
		return null; 
	}

	public Double getBalance() { 
		return null; 
	}

	public void doTransaction(Double amount, TransactionType transactionType) {
		/* ... */
	}
}

class CheckingAccount extends AbstractBankAccount { 
	/* ... */
}

class SavingsAccount extends AbstractBankAccount {
	public void accrueInterest() { 
		/* ... */ 
	}
}

class Customer {
	private java.util.LinkedList<BankAccount> accounts 
										= new java.util.LinkedList<BankAccount>();
	
	public void addAccount(BankAccount account) { 
		accounts.add(account); 
	}
	
	public void removeAccount(BankAccount account) { 
		accounts.remove(account); 
	}
}