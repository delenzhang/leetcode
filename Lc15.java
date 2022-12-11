import java.util.*;

public class Lc15 {

    public List<List<Integer>> threeSum(int[] nums) {
//        List<Integer> positiveList = new ArrayList<>();
//        List<Integer> negativeList = new ArrayList<>();
//        List<Integer> list = new ArrayList<>();

//        boolean hasZero = false;
//        for (int i : nums) {
//            if (i == 0) {
//                hasZero = true;
//            }
//            if (i < 0 && !negativeList.contains(i)) {
//                negativeList.add(i);
//            }
//            if (i > 0 && !positiveList.contains(i)) {
//                positiveList.add(i);
//            }
//        }
//        for (int i : nums) {
//            if (!list.contains(i)) {
//                list.add(i);
//            }
//        }

//        System.out.println(list);
        List<List<Integer>> res = new ArrayList<>();
        for( int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                for(int k = j + 1; k < nums.length; k++) {
                    int a = nums[i];
                    int b = nums[j];
                    int c = 0 - (a + b);
                    if (nums[k] == c ) {
                        boolean isContain = false;
                        for (List<Integer> item: res) {
                            if (item.contains(a) && item.contains(b) && item.contains(c) && a!=0 && b !=0 &&c !=0) {
                                isContain = true;
                            }
                        }
                        if (!isContain) {
                            List<Integer> resItem = new ArrayList<>();
                            resItem.add(a);
                            resItem.add(b);
                            resItem.add(c);
                            res.add(resItem);
                        }
                    }
                }
            }
        }
        return res;

//        if (hasZero) {
//            for (Integer i: negativeList) {
//                if (positiveList.contains(Math.abs(i))) {
//                    List<Integer> resItem = new ArrayList<>();
//                    resItem.add(0);
//                    resItem.add(i);
//                    resItem.add(Math.abs(i));
//                    res.add(resItem);
//                }
//            }
//        }
    }


    public static void main(String[] args) {
        int[] a = { -1,0,1,2,-1,-4 };
        Lc15 lc15 = new Lc15();
        System.out.println(lc15.threeSum(a));
    }
}
