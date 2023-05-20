import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

       // returnText(9, -4, 0);
     
       System.out.println("The result is " + Calculator());

    }

    /* public static void returnText(int firstNumber, int secondNumber, int thirdNumber){

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
    } */

    // Calculator
   public static double Calculator(){
    System.out.println("Can you please enter two numbers?");
    Scanner userInput = new Scanner(System.in); // make user input
    
    double userFirstNumber = userInput.nextInt();
    double userSecondNumber = userInput.nextInt();

    userInput.nextLine(); // consume the last line so that the nextline after doest get an empty line

    String userOperation;
    
    while(true){ // while picking an operation if it is valid break and then close the scanner otherwise
        // have the user enter a valid operation.

    System.out.println("Next please pick an operation");
    System.out.println("addition, subtraction, multiplication, or division");

    userOperation = userInput.nextLine();

    if(userOperation.equals("addition") || userOperation.equals("subtraction") ||
        userOperation.equals("multiplication") || userOperation.equals("division")
    ){
        
        break;

        
        }

        System.out.print("Invalid Operation Please try again.");
    }

    userInput.close(); 

    if(userOperation.equals("addition")){
        
        return addition(userFirstNumber, userSecondNumber);

    }else if(userOperation.equals("subtraction")){
      
        return subtraction(userFirstNumber, userSecondNumber);

    }else if(userOperation.equals("multiplication")){
       
        return multiplication(userFirstNumber, userSecondNumber);

    }else if(userOperation.equals("division")){
       
        return division(userFirstNumber, userSecondNumber);
    }

    
    return -1;
    
   }

    public static double addition(double firstNumber, double secondNumber){
        double total = firstNumber + secondNumber;
        return total;
    }

    public static double subtraction(double firstNumber, double secondNumber){
        double total = firstNumber - secondNumber;
        return total;
    }

    public static double multiplication(double firstNumber, double secondNumber){
        double total = firstNumber * secondNumber;
        return total;
    }

    public static double division(double firstNumber, double secondNumber){
        double total = 0;
        if(secondNumber == 0){
            System.out.println("inf");
            
        }else if(secondNumber != 0){
        total = firstNumber / secondNumber;
        return total;
        }
        return total;
    }


    
}
