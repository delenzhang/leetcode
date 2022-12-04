public class Solution26 {
    public static int removeDuplicates(int[] nums) {
        int i = 1, j = 1;
        while(j < nums.length) {
            if (nums[j-1] == nums[j]) {
                j++;
            } else {
                if (i != j) {
                    nums[i] = nums[j];
                }
                j++;
                i++;
            }
        }
        return i;
    }
    public static void main(String[] args) {
//        int[] a = {1,1,2};
//        System.out.println(Solution26.removeDuplicates(a));
        int[] b = {0,0,1,1,1,2,2,3,3,4};
        System.out.println(Solution26.removeDuplicates(b));
        for(int i : b) {
            System.out.println(i);
        }

//        System.out.println(Solution26.removeDuplicates(30, 30 ,500));
    }
}
