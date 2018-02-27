class PivotBinarySearch {
    
    //Pivoted Binary Search takes an array and element
    private static int pivotedBinarySearch(int[] arr, int element) {
        int lastElm = arr.length - 1;
        
        //Find what position the pivot is at
        int pivot = findPivot(arr, 0, lastElm);
        System.out.println("Pivot:" + pivot);

        if(pivot == -1) {
            System.out.println("Not a pivot");
            return binarySearch(arr, 0, lastElm, element);
        }

        if(arr[pivot] == element)
            return pivot;
        if(arr[0] <= element) {
            System.out.println("Here");
            return binarySearch(arr, 0, pivot -1, element);
        } 
        return binarySearch(arr, pivot + 1, lastElm, element);
    }

    private static int binarySearch(int[] arr, int low, int high, int element) {
        if(low > high) {
            return -1;
        }   

        int half = (low + high)/2;
        
        if(arr[half] == element) {
            return half;
        } else if(arr[half] > element){
            return binarySearch(arr, low, half-1, element);
        } else {
            return binarySearch(arr, half+1, high, element);
        }
    }

    private static int findPivot(int[] arr, int low, int high) {
        if(high < low)
            return -1;

        int half = (low + high)/2;
        if(half < high && arr[half] > arr[half + 1])
            return half;
        if(half > low && arr[half] < arr[half - 1])
            return (half -1);
        if(arr[low] >= arr[half])
            return findPivot(arr, low, half-1);
        return findPivot(arr, half + 1, high);   
    }

    public static void main(String[] args) {
        int[] arr = {16, 1, 4, 7, 10, 11};
        System.out.println(pivotedBinarySearch(arr, 7));
    }

}
