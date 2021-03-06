package p.actions;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jdt.core.ICompilationUnit;
import org.eclipse.jdt.core.IJavaProject;
import org.eclipse.jdt.core.IPackageFragment;
import org.eclipse.jdt.core.IPackageFragmentRoot;
import org.eclipse.jdt.core.JavaCore;
import org.eclipse.jdt.core.JavaModelException;
import org.eclipse.jdt.core.dom.AST;
import org.eclipse.jdt.core.dom.ASTNode;
import org.eclipse.jdt.core.dom.ASTParser;
import org.eclipse.jdt.core.dom.ASTRequestor;
import org.eclipse.jdt.core.dom.ASTVisitor;
import org.eclipse.jdt.core.dom.CompilationUnit;
import org.eclipse.jdt.core.dom.IBinding;
import org.eclipse.jdt.core.dom.StructuralPropertyDescriptor;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.IWorkbenchWindowActionDelegate;

/**
 * Our sample action implements workbench action delegate. The action proxy will
 * be created by the workbench and shown in the UI. When the user tries to use
 * the action, this delegate will be created and execution will be delegated to
 * it.
 * 
 * @see IWorkbenchWindowActionDelegate
 */
public class RunAction implements IWorkbenchWindowActionDelegate {
	private IWorkbenchWindow window;

	/**
	 * The constructor.
	 */
	public RunAction() {
	}

	/**
	 * The action has been activated. The argument of the method represents the
	 * 'real' action sitting in the workbench UI.
	 * 
	 * @see IWorkbenchWindowActionDelegate#run
	 */
	@Override
	public void run(IAction action) {
		List<ICompilationUnit> iCUs = new ArrayList<ICompilationUnit>();
		List<String> list = new ArrayList<String>();
		List<String> al = new ArrayList<>();

		IWorkspace iWorkspace = ResourcesPlugin.getWorkspace();
		IWorkspaceRoot iWorkspaceRoot = iWorkspace.getRoot();
		IProject[] iProjectList = iWorkspaceRoot.getProjects();
		IProject iProject = iProjectList[0];	
		IJavaProject iJavaProject = JavaCore.create(iProject);

		try {
			IPackageFragment[] iPackageFragmentList = iJavaProject.getPackageFragments();
			for (IPackageFragment iPackageFragment : iPackageFragmentList) {
				if (iPackageFragment.getKind() != IPackageFragmentRoot.K_SOURCE) {
					continue;
				}

				ICompilationUnit[] iCompilationUnitList = iPackageFragment.getCompilationUnits();
				for (ICompilationUnit iCompilationUnit : iCompilationUnitList) {
					iCUs.add(iCompilationUnit);
				}
			}
		} catch (JavaModelException e) {
			e.printStackTrace();
		}

		ICompilationUnit[] compUnits = iCUs.toArray(new ICompilationUnit[0]);
		final Map<ICompilationUnit, ASTNode> parsedCompilationUnits = new HashMap<ICompilationUnit, ASTNode>();
		ASTParser parser = ASTParser.newParser(AST.JLS3);
		parser.setResolveBindings(true);
		parser.setEnvironment(null, null, null, true);
		parser.setProject(iJavaProject);
		parser.createASTs(compUnits, new String[0], new ASTRequestor() {
			@Override
			public final void acceptAST(final ICompilationUnit unit, final CompilationUnit node) {
				parsedCompilationUnits.put(unit, node);
			}

			@Override
			public final void acceptBinding(final String key, final IBinding binding) {
				// Do nothing
			}
		}, null);

		Iterator<ICompilationUnit> keySetIterator = parsedCompilationUnits.keySet().iterator();
		while (keySetIterator.hasNext()) {
			ICompilationUnit iCU = keySetIterator.next();
			CompilationUnit cu = (CompilationUnit) parsedCompilationUnits.get(iCU);

			/**
			 * CSC 402-01 Assignment #4
			 * 
			 * On my honor, Michael E. Leach, this assignment is my own work.  
			 * I, Michael E. Leach, will follow the instructor's rules and processes 
			 * related to academic integrity as directed in the course syllabus.
			 *
			 */
			
			//---------------------------------------------------------------------
			//
			//  Students -- you are allowed to write your own code from this point
			
			ASTVisitorEx a = new ASTVisitorEx();
			cu.accept(a);
			list.add(a.s);
			//System.out.println(list.size());
			
		}
		for(int i = 0; i < list.size(); i++) {
			//System.out.println(list.get(i));
			if(list.get(i).length() > 2) {
				//use al to get root and all its children
				String r = list.get(i);
				char root = list.get(i).charAt(0);
				list.set(i, "##");
				getListChildren(root, list, al);
				al.add(r);
				/*for(int j = 0; j < al.size(); j++) {
					System.out.println(al.get(j));
				}
				*/
				
				//Now that we have the root and its children in a list we
				//can Go through the list and print out the root and its children
				// in descending order
				int level = 2;
				int numOfChildren = 0;
				System.out.println(root);
				printChildren(al, root, level, numOfChildren);
				for(int j = 1; j <= al.size()/2; j++) {
					System.out.print("# ");
				}
				al.clear();
				System.out.println();
			}
		}
	}
	
	private void printChildren(List<String> l, char r, int lvl, int nOC) {
		if(checkList(l) == true) {
			char c1 = search(r, l).charAt(0);
			char c2 = search(r, l).charAt(0);
			
			if(c1 != '#' && c2 != '#' && !search(r, l).equals("#")) {
				System.out.print(c1 + "" + c2 + " ");
				printChildren(l, r, lvl, nOC);
			}else if(c1 != '#'  && c2 != '#' && search(r, l).equals("#")) {
				System.out.println(c1 + "" + c2);
				printChildren(l, c1, lvl, nOC);
				printChildren(l, c2, lvl, nOC);
			}else if(c1 != '#'  && c2 == '#' && search(r, l).equals("#")) {
				System.out.println(c1);
				printChildren(l, c1, lvl, nOC);
			}else if(c1 != '#'  && c2 == '#' && !search(r, l).equals("#")) {
				System.out.print(c1 + " ");	
				printChildren(l, r, lvl, nOC);
			}
		}
	}
	
	private void getListChildren(char r, List<String> oldList, List<String> newList) {
		String c1 = search(r, oldList);
		String c2 = search(r, oldList);
		
		if(!c1.equals("#") && !c2.equals("#")) {
			newList.add(c1);
			newList.add(c2);
			getListChildren(c1.charAt(0), oldList, newList);
			getListChildren(c2.charAt(0), oldList, newList);
		}else if(!c1.equals("#") && c2.equals("#")) {
			newList.add(c1);
			getListChildren(c1.charAt(0), oldList, newList);
		}
	
		if(!search(r, oldList).equals("#")) {
			c1 = search(r, oldList);
			c2 = search(r, oldList);
			getListChildren(c1.charAt(0), oldList, newList);
			getListChildren(c2.charAt(0), oldList, newList);
		}else {
			return;
		}
		
	}
	
	private String search(char c, List<String> l) {
		String s = "#";
		for(int i = 0; i < l.size(); i++) {
			if(l.get(i).charAt(1) == c) {
				s = l.get(i);
				l.set(i, "##");
				return s;
			}
		}
		return s;
	}
	
	private boolean checkList(List<String> l) {
		for(int i = 0; i < l.size(); i++) {
			if(l.get(i).charAt(1) != '#') {
				return true;
			}
		}
		return false;
	}
	
	
	
	
	//  Students -- you are NOT allowed to write anything below
	//
	//---------------------------------------------------------------------

	/**
	 * Selection in the workbench has been changed. We can change the state of the
	 * 'real' action here if we want, but this can only happen after the delegate
	 * has been created. 
	 * 
	 * @see IWorkbenchWindowActionDelegate#selectionChanged
	 */
	@Override
	public void selectionChanged(IAction action, ISelection selection) {
	}

	/**
	 * We can use this method to dispose of any system resources we previously
	 * allocated.
	 * 
	 * @see IWorkbenchWindowActionDelegate#dispose
	 */
	@Override
	public void dispose() {
	}

	/**
	 * We will cache window object in order to be able to provide parent shell for
	 * the message dialog.
	 * 
	 * @see IWorkbenchWindowActionDelegate#init
	 */
	@Override
	public void init(IWorkbenchWindow window) {
		this.window = window;
	}
}