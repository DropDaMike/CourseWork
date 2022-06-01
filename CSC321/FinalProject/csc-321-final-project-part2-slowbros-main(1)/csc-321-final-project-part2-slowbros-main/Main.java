public class Main {

    public static void main(String[] args) {
	     // write your code here
        BTree<Integer> bt = new BTree<>(4);
        bt.add(67);
        bt.add(77);
        bt.add(87);
        bt.add(97);
        bt.getRoot(); // 87
        bt.printLeaf(); // 67,77,->87,97,->

    }
}


