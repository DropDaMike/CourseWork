/**
 * CSC 402-01 Assignment #3
 * 
 * On my honor, Michael E. Leach, this assignment is my own work.
 * I, Michael E. Leach, will follow the instructor's rules and processes
 * related to academic integrity as directed in the course syllabus.
 *
 */

abstract class Stm {
	abstract void accept(Visitor v);
}

class CompoundStm extends Stm {
	Stm stm1, stm2;

	CompoundStm(Stm s1, Stm s2) {
		stm1 = s1;
		stm2 = s2;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}

class AssignStm extends Stm {
	String id;
	Exp exp;

	AssignStm(String i, Exp e) {
		id = i;
		exp = e;
	}

	void accept(Visitor v) {
		v.visit(this);
	}
}

class PrintStm extends Stm {
	ExpList exps;

	PrintStm(ExpList e) {
		exps = e;
	}	

	void accept(Visitor v) {
		v.visit(this);
	}
}

abstract class Exp {
	abstract void accept(Visitor v);
}

class IdExp extends Exp {
	String id;

	IdExp(String i) {
		id = i;
	}	

	void accept(Visitor v) {
		v.visit(this);
	}
}

class NumExp extends Exp {
	int num;

	NumExp(int n) {
		num = n;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}

class OpExp extends Exp {
	Exp left, right;
	int oper;
	final static int Plus = 1, Minus = 2, Times = 3, Div = 4;

	OpExp(Exp l, int o, Exp r) {
		left = l;
		oper = o;
		right = r;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}

class EseqExp extends Exp {
	Stm stm;
	Exp exp;

	EseqExp(Stm s, Exp e) {
		stm = s;
		exp = e;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}

abstract class ExpList {
	abstract void accept(Visitor v);
}

class PairExpList extends ExpList {
	Exp head;
	ExpList tail;

	public PairExpList(Exp h, ExpList t) {
		head = h;
		tail = t;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}

class LastExpList extends ExpList {
	Exp head;

	public LastExpList(Exp h) {
		head = h;
	}
	
	void accept(Visitor v) {
		v.visit(this);
	}
}
