string firstName = "Bob";
string greeting = "Hello";
string message = $"{greeting} {firstName}!";
Console.WriteLine(message);


int version = 11;
string updateText = "Update to Windows";
string message = $"{updateText} {version}!";
Console.WriteLine(message);


string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");


string projectName = "ACME";
string englishIntro = "View English output:";
string englishMessage = $@"    c:\Exercise\{projectName}\data.txt";
string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";
string russianPath = $@"    c:\Exercise\{projectName}\ru-RU\data.txt";

Console.WriteLine(englishIntro);
Console.WriteLine(englishMessage);
Console.WriteLine(" ");
Console.WriteLine(russianMessage);
Console.WriteLine(russianPath);


string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) +  " widgets."); 


int sum = 7 + 5;
int difference = 7 - 5;
int product = 7 * 5;
int quotient = 7 / 5;

Console.WriteLine("Sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
Console.WriteLine("Quotient: " + quotient);


decimal decimalQuotient = 7.0m / 5;
Console.WriteLine($"Decimal quotient: {decimalQuotient}");


int first = 7;
int second = 5;
decimal quotient = (decimal)first / (decimal)second;
Console.WriteLine(quotient);


Console.WriteLine($"Modulus of 200 / 5 : {200 % 5}");
Console.WriteLine($"Modulus of 7 / 5 : {7 % 5}");


// Parentheses (whatever is inside the parenthesis is performed first)
// Exponents
// Multiplication and Division (from left to right)
// Addition and Subtraction (from left to right)


int value1 = 3 + 4 * 5;
int value2 = (3 + 4) * 5;

Console.WriteLine(value1);  // Outputs 23
Console.WriteLine(value2);  // Outputs 35




int value = 1;

value = value + 1;
Console.WriteLine("First increment: " + value);

value += 1;
Console.WriteLine("Second increment: " + value);

value++;
Console.WriteLine("Third increment: " + value);

value = value - 1;
Console.WriteLine("First decrement: " + value);

value -= 1;
Console.WriteLine("Second decrement: " + value);

value--;
Console.WriteLine("Third decrement: " + value);



int value = 1;
value++;
Console.WriteLine("First: " + value);
Console.WriteLine($"Second: {value++}");
Console.WriteLine("Third: " + value);
Console.WriteLine("Fourth: " + (++value));


int result = 3 + 1 * 5 / 2;   // result = 3 + 2 = 5


Console.WriteLine("Windows " + 1 + 1);  


Console.WriteLine(5/10); // Outputs 0.5