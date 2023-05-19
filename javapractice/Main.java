

public class Main {

    public static void main(String[] args) {

        returnText(9, -4, 0);
    }

    public static void returnText(int firstNumber, int secondNumber, int thirdNumber){

        int[] numbers = {firstNumber, secondNumber, thirdNumber};
        
        for(int number : numbers) {
            if(number > 0){
                System.out.println(number + " is Positive");
            }else if(number < 0){
                System.out.println(number + " is Negative");
            }else{
                System.out.println(number + " is Zero");
            }
        }
    }
}
