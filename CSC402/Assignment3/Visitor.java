/**
 * CSC 402-01 Assignment #3
 * 
 * On my honor, Michael E. Leach, this assignment is my own work.
 * I, Michael E. Leach, will follow the instructor's rules and processes
 * related to academic integrity as directed in the course syllabus.
 *
 */

public class Visitor {
	//---------------------------------------------------------------------
	// Fill in your code here
    private static Visitor instance = null;

    private Visitor(){}

    public static Visitor getInstance() {
        if(instance == null){
            instance = new Visitor();
        }
        return instance;
    }

    void visit(CompoundStm a) {

        a.stm1.accept(this);
        System.out.print(" ; ");
        a.stm2.accept(this);
    }

    void visit(AssignStm b) {
        System.out.print(b.id);
        System.out.print(" := ");
        b.exp.accept(this);
    }

    void visit(PrintStm c) {
        System.out.print("print( ");
        c.exps.accept(this);
        System.out.print(" )");
    }

    void visit(IdExp d) {
        System.out.print(d.id);
    }

    void visit(NumExp e) {
        System.out.print(e.num);
    }

    void visit(OpExp f) {
        f.left.accept(this);
        System.out.print(" ");
        switch(f.oper) {
            case OpExp.Plus:
                System.out.print("+");
                break;
            case OpExp.Minus:
                System.out.print("-");
                break;
            case OpExp.Times:
                System.out.print("*");
                break;
            case OpExp.Div:
                System.out.print("/");
                break;
        }
        System.out.print(" ");
        f.right.accept(this);
    }

    void visit(EseqExp g) {
        System.out.print("( ");
        g.stm.accept(this);
        System.out.print(" , ");
        g.exp.accept(this);
        System.out.print(" )");
    }

    void visit(PairExpList h) {
        h.head.accept(this);
        System.out.print(" , ");
        h.tail.accept(this);
    }

    void visit(LastExpList i) {
        i.head.accept(this);
    }

    //
	//---------------------------------------------------------------------	
}
