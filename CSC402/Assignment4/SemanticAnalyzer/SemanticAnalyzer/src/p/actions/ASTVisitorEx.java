/**
 * CSC 402-01 Assignment #4
 * 
 * On my honor, Michael E. Leach, this assignment is my own work.  
 * I, Michael E. Leach, will follow the instructor's rules and processes 
 * related to academic integrity as directed in the course syllabus.
 *
 */

package p.actions;

import org.eclipse.jdt.core.dom.ASTVisitor;
import org.eclipse.jdt.core.dom.TypeDeclaration;

public class ASTVisitorEx extends ASTVisitor {
	public String s;

	public boolean visit(TypeDeclaration node) {
		
		//System.out.println("TD: The parent of " + node.getName().getIdentifier() + 
			//" is " + node.resolveBinding().getSuperclass().getName());
		s = node.getName().getIdentifier() + node.resolveBinding().getSuperclass().getName();
		//System.out.println(s);
		
		return true; 
	}

}
