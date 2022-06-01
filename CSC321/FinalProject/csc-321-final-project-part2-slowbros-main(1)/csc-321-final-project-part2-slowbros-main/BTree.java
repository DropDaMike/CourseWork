import java.util.LinkedList;
import java.util.List;

public class BTree <T extends Comparable<T>> {
    // B+ tree order
    private int bTreeOrder;

    private Node root;
    private Node head;//head of the leaf node

    public BTree(){
        this.bTreeOrder = 4;
    }

    public BTree(int bTreeOrder){
        this.bTreeOrder = bTreeOrder;
    }

    public Node getRoot() {
        //System.out.println(root.eles.get(0));
        List<Element<T>> elementNodeList = root.eles;
        System.out.println(elementNodeList.get(0).data);
        //System.out.println("The size of the enl is " + elementNodeList.size());
        return root;
    }

    public Node getHead() {
        return head;
    }

    public void printLeaf(){
        head = root;
        List<Element<T>> elementNodeList = head.eles;
        while (elementNodeList.get(0).left != null){
            head = elementNodeList.get(0).left;
            elementNodeList = head.eles;
        }
        while(head != null){
            System.out.print(head + "->");
            head = head.next;
        }

    }

    /**
     * Single Element Node
     * @param <T>
     */
    private class Element<T>{
        private T data;
        //left sub tree pointer
        private Node left;
        //right sub tree pointer
        private Node right;
        public Element(T data){
            this.data=data;
        }
        @Override
        public String toString() {
            return "Element data:" + data + ", left pointer =" + left + ", right pointer=" + right + "";
        }

    }
    /**
     * tree node
     * @author Administrator
     *
     */
    private class Node<T>{
        // leaf node's linked list
        private Node pre;
        //parent node
        private Node parnet;
        // a list of element nodes inside a tree node
        private List<Element<T>> eles;
        // leaf node's linked list
        private Node next;
        public Node(){
            eles=new LinkedList<>();
        }
        public Node(Element ele){
            this();
            eles.add(ele);
        }
        public Node(List<Element<T>> eles){
            this.eles=new LinkedList<>();
            this.eles.addAll(eles);
        }
        @Override
        public String toString() {
            if(eles==null){
                return null;
            }
            StringBuilder sb=new StringBuilder();
            for(Element e:eles){
                sb.append(e.data).append(",");
            }
            return sb.toString();
        }
    }



    public boolean add(T t){
        // write your code here
        //if root is null then create new tree with t value
        if(root == null){
            root = new Node(new Element<T>(t));
            head = root;
            return true;
        }

        BTree<T>.Element<T> ele = new Element<>(t);
        //Now we need to handle the general case.
        Node<T> currentNode = root;
        List<Element<T>> elementNodeList = currentNode.eles;
        //find a way to see if we can add more elements to the root node
        //in a sorted manner
        int i = findPosition(ele, currentNode);
        //System.out.println("i is " + i);
        //System.out.println("enl size: " + elementNodeList.size());
        //We now have a position for the value
        while(i < elementNodeList.size()){
            BTree<T>.Element<T> temp = elementNodeList.get(i);
            elementNodeList.remove(i);
            elementNodeList.add(i, ele);
            ele = temp;
            i++;
        }
        elementNodeList.add(ele);

        //now we need to check if the node is at its size limit
        if(elementNodeList.size() == bTreeOrder){
            splitNode(currentNode);
        }



        /*int data = (Integer) elementNodeList.get(0).data;
        int tint = (Integer) ele.data;
        System.out.println("data: " + data);
        System.out.println("tint: " + tint);

        BTree<T>.Element<T> test = new Element<>(elementNodeList.get(0).data);
        elementNodeList.remove(0);
        elementNodeList.add(ele);
        elementNodeList.add(test);

        int size = elementNodeList.size();
        int i = 0;

        while(i < size){
            if(elementNodeList.get(i).left != null || elementNodeList.get(i).right != null) {
                System.out.println("not null");
            }
            i++;
        }

         */


        return false;
    }

    public int findPosition(Element<T> ele, Node node){
        List<Element<T>> elementNodeList = node.eles;
        int t = (Integer) ele.data;
        int size = elementNodeList.size();
        int i = 0;
        int listdata;
        while(i < size){
            listdata = (Integer) elementNodeList.get(i).data;
            if(listdata > t){
                return i;
            }
            i++;
        }
        //

        return i;

    }

    private void splitNode(BTree<T>.Node<T> node){
        int mid = bTreeOrder/2;
        List<Element<T>> elementNodeList = node.eles;
        boolean isLeafNode=node.next!=null||node.pre!=null||head==node;
        List<BTree<T>.Element<T>> leftElements = elementNodeList.subList(0, mid);
        List<BTree<T>.Element<T>> rightElements = elementNodeList.subList(isLeafNode ? mid: mid+1, elementNodeList.size());

        BTree<T>.Node<T> leftNode=new Node<T>(leftElements);
        BTree<T>.Node<T> rightNode=new Node<T>(rightElements);
        BTree<T>.Element<T> spiltEle = elementNodeList.get(mid);
        BTree<T>.Node<T> parnet = node.parnet;

       // System.out.println("left node: " + leftNode.eles.get(1));
        parnet = new Node(new Element<T>(rightNode.eles.get(0).data));
        //parnet.eles.add(rightNode.eles.get(0));
        parnet.eles.get(0).left = leftNode;
        parnet.eles.get(0).right = rightNode;
        leftNode.next = rightNode;
        //System.out.println("Inside parent node: " + parnet.eles.get(0));

        node.eles.clear();
        node.eles.add(0, parnet.eles.get(0));

        //System.out.println("re: " + leftElements.get(1));

        /*
        while(node != null){
            boolean isLeafNode=node.next!=null||node.pre!=null||head==node;

            // split into two parts
            List<Element<T>> elementNodeList = node.eles;
            List<BTree<T>.Element<T>> leftElements = elementNodeList.subList(0, mid);
            List<BTree<T>.Element<T>> rightElements = elementNodeList.subList(isLeafNode ? mid: mid+1, elementNodeList.size());

            BTree<T>.Node<T> leftNode=new Node<T>(leftElements);
            BTree<T>.Node<T> rightNode=new Node<T>(rightElements);
            BTree<T>.Element<T> spiltEle = elementNodeList.get(mid);
            BTree<T>.Node<T> parnet = node.parnet;
        }
         */

    }


    public boolean find(T t){
        head = root;
        BTree<T>.Element<T> ele = new Element<>(t);
        List<Element<T>> elementNodeList = head.eles;
        while (elementNodeList.get(0).left != null){
            head = elementNodeList.get(0).left;
            elementNodeList = head.eles;
        }
        while(head != null){
            elementNodeList = head.eles;
            int size = head.eles.size();
            int i = 0;
            while(i < size){
                if(elementNodeList.get(0).data == t){
                    return true;
                }
                i++;
            }
            head = head.next;
        }

        return false;
    }
}
