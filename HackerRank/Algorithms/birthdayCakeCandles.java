/*
 * Colleen is having a birthday! She will have a cake with one candle for each year of her age. When she blows out the candles, she’ll only be able to blow out the tallest ones.
 * 
 * Find and print the number of candles she can successfully blow out.
 * 
 * Input Format
 * integer 
 * Colleen's age 
 * space-separated integers
 * candle heights 
 * Output Format
 * 
 * Print the number of candles Colleen blows out.
 *
 * Sample Input 0
 *
 * 4
 * 3 2 1 3
 * Sample Output 0
 * 
 * 2
 * Explanation 0
 *
 *The maximum candle height is 3 and there are two candles of that height.
 */

import java.util.*;

public class birthdayCakeCandles {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = Integer.parseInt(input.nextLine());
        String birthdayCandleHeights = input.nextLine();
        String[] candleHeights = birthdayCandleHeights.split(" ");
        int[] intCandleHeights = new int[candleHeights.length];
        int highestInt = 0;
        for(int i = 0; i < candleHeights.length; i++) {
            int candleHeight = Integer.parseInt(candleHeights[i]);
            if(candleHeight > highestInt) {
                highestInt = candleHeight;
            }
            intCandleHeights[i] = candleHeight;
        }

        int blownOut = 0;
        for(int i = 0; i < intCandleHeights.length; i++) {
            if(age > 0) {
                if(intCandleHeights[i] == highestInt) {
                    blownOut++;
                    age--;
                }
            } else {
                break;
            }
        }
        System.out.println(blownOut);
    }
}
