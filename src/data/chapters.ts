export interface Chapter {
  language: string;
  title: string;
  content: string;
  id: number;
  initialCode: string;
  editable?: boolean;
  output?: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    language: 'Python',
    title: 'Variables',
    content: `
        <p>In Python, we have several data types that are used to store different kinds of information:</p>
        <ul class=inText>
            <li>Integer: Represents whole numbers without a decimal component.</li>
            <li>String: A sequence of characters enclosed within quotes.</li>
            <li>Float: Represents numbers that contain a decimal point.</li>
            <li>Boolean: Represents one of two values, True or False.</li>
            <li>List: An ordered collection of items enclosed within square brackets.</li>
            <li>Dictionary: A collection of key-value pairs enclosed within curly braces.</li>
            <li>Tuple: An ordered collection of items enclosed within parentheses.</li>
        </ul>
        
        <pre class="overflow-auto shadow-md"><code>my_number = 1000      # Integer
my_text = "Hello!"    # String
my_float = 7.5        # Float
my_bool_1 = True      # Boolean
my_bool_2 = False     # Boolean
my_list = []          # List
my_dictionary = {}    # Dictionary
my_tuple = (1, 2, 3)  # Tuple</code></pre>
        
        <p>These data types are essential for storing and manipulating different kinds of information in Python.</p>
        <p>The name you see before the '=' is what's called a "variable". You can name it whatever you want! Above you can see how I named my variables eg; my_number, my_text, my_float, my_bool_1.</p>
        <p>It's good practice to name your variable relevant to its purpose. For example if I was creating a variable that would represent the cash price of an item, I might name it something like:</p>
        
        <pre class="overflow-auto shadow-md"><code>item_cost = 1                       # The cost of an item, which will be 1 dollar
supply_remaining = 2_500_000_000    # The number of items in inventory that are remaining, Note that we use '_' instead of commas as a separator
name_CTO = "John Woods"
value_of_a_quarter = 0.25</code></pre>
        
        <p>You might notice that I use the underscore symbol "_" instead of spaces in my variable. Something to keep in mind is you cannot start a variable with an integer, use any special characters aside from "_", and you cannot use spaces.
        Here are some examples of incorrect variables that will not work in your code, and will cause an error, <strong>DO NOT USE</strong>:</p>
        
        <pre class="overflow-auto shadow-md"><code>3variable = 5     # Starts with a number
my-variable = 6   # Contains a hyphen
my variable = 7   # Contains a space</code></pre>
        
        <h2>General Arithmetic for Integers, Floats, and Strings</h2>
        
        <p>General arithmetic operations are a great place to start! Let's try creating a number variable, and printing it to the console.</p>
        <p>If this is your first time programming, or even if you have programmed before, you'll quickly find out or are already familiar that printing is one of the most commonly used functions for debugging. It's how you "see" what the value is of your variable at a specific point in your code.</p>
        
        <pre class="overflow-auto shadow-md"><code>my_number = 1
my_number_plus_one = my_number + 1
print(my_number_plus_one)</code></pre>
        
        <p>The steps that occur here:</p>
        <ol class=inText>
        <li>Created my "my_number" variable and assigned it to the integer 1</li>
        <li>Created another variable called "my_number_plus_one" and assigned it to what "my_number" is when 1 is added to it</li>
        <li>Used the "print()" function to see the value in my terminal</li>
        </ol>
        
        <p>There are several arithmetic operators (Like "+" or "-") available in Python, and they are as follows:</p>
        <pre class="overflow-auto shadow-md"><code>a = 10
b = 3
addition = a + b          # Addition: 13
subtraction = a - b       # Subtraction: 7
multiplication = a * b    # Multiplication: 30
division = a / b          # Division: 3.3333333333333335
floor_division = a // b   # Floor Division: 3
modulus = a % b           # Modulus: 1
exponentiation = a ** b   # Exponentiation: 1000</code></pre>
        
        <p>Similar to integers and floats, you can also use arithmetic operators on strings, these are mostly limited to:</p>
        <ul class=inText>
        <li>Addition and multiplication: +, *</li>
        </ul>
        <p>The act of combining strings together or multiplying a single string is often referred to as <strong>concatenation</strong>.</p>
        
        <pre class="overflow-auto shadow-md"><code>result = "Hello, " + "World!"
print(result) # result is "Hello, World!"
string = "Hello"
result = string * 3
print(result) # result is "HelloHelloHello"</code></pre>
        
        <p>We won't dive into Lists, Dictionaries, or Tuples just yet, but I would like to mention, and this is something you'll see in practice later— that lists and dictionaries are mutable, whereas tuples are immutable.
        When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
        
        <p>Example:</p>
        <pre class="overflow-auto shadow-md"><code>my_tuple = (1, 2)
print(my_tuple[0])
my_tuple[0] = 2
print(my_tuple)
# ERROR
#    my_tuple[0] = 2
#    ~~~~~~~~^^^
# TypeError: 'tuple' object does not support item assignment</code></pre>
        
        <p>A more advanced concept to start early with, but another thing we will review later:</p>
        <h2>Examples of mutable and immutable parameters on an asset on Algorand</h2>
        <strong>Immutable Parameters:</strong></br>
        <p>These parameters can only be specified when an asset is created.</p>
        <ul class=inText>
        <li>Creator: The address of the account that created the asset.</li>
        <li>AssetName: The name of the asset.</li>
        <li>UnitName: The unit name of the asset.</li>
        <li>Total: The total number of units of the asset.</li>
        <li>Decimals: The number of digits to use after the decimal point when displaying the asset.</li>
        <li>DefaultFrozen: Whether the asset is frozen by default.</li>
        <li>URL: A URL where more information about the asset can be retrieved.</li>
        <li>MetaDataHash: A commitment to some unspecified asset metadata.</li>
        </ul>
        <strong>Mutable Parameters:</strong></br>
        <p>These parameters can be changed after the asset is created.</p>
        <ul class=inText>
        <li>Manager: The address of the account that can change the asset's mutable parameters.</li>
        <li>Reserve: The address of the account that holds the asset reserve. (Cannot be changed if initially not declared)</li>
        <li>Freeze: The address of the account that can freeze or unfreeze user asset holdings. (Cannot be changed if initially not declared)</li>
        <li>Clawback: The address of the account that can revoke user asset holdings and send them to other addresses. (Cannot be changed if initially not declared)</li>
        </ul>
        <em>*Note: Exception for various ARC types like ARC19 and ARC69 that use the reserve address and/or note field to point to metadata*</em>
      
          <hr><form class="quiz-form">
          <h1>Quiz</h1>
              <h3>Question 1</h3>
              <p>What data type is used to store whole numbers in Python?</p>
              <input type="radio" id="q1a" name="q1" value="a">
              <label for="q1a" class="incorrect">a) String</label><br>
              <input type="radio" id="q1b" name="q1" value="b">
              <label for="q1b" class="incorrect">b) Float</label><br>
              <input type="radio" id="q1c" name="q1" value="c">
              <label for="q1c" class="correct">c) Integer</label><br>
              <input type="radio" id="q1d" name="q1" value="d">
              <label for="q1d" class="incorrect">d) Boolean</label><br>
      
              <h3>Question 2</h3>
              <p>Which of the following is an example of a correct variable name in Python?</p>
              <input type="radio" id="q2a" name="q2" value="a">
              <label for="q2a" class="incorrect">a) 3variable</label><br>
              <input type="radio" id="q2b" name="q2" value="b">
              <label for="q2b" class="incorrect">b) my-variable</label><br>
              <input type="radio" id="q2c" name="q2" value="c">
              <label for="q2c" class="incorrect">c) my variable</label><br>
              <input type="radio" id="q2d" name="q2" value="d">
              <label for="q2d" class="correct">d) my_variable</label><br>
      
              <h3>Question 3</h3>
              <p>What will be the result of the following code snippet?</p>
              <pre class="overflow-auto shadow-md"><code>string = "Hello" 
result = string * 3
print(result)</code></pre>
              <input type="radio" id="q3a" name="q3" value="a">
              <label for="q3a" class="correct">a) HelloHelloHello</label><br>
              <input type="radio" id="q3b" name="q3" value="b">
              <label for="q3b" class="incorrect">b) Hello, Hello, Hello</label><br>
              <input type="radio" id="q3c" name="q3" value="c">
              <label for="q3c" class="incorrect">c) Hello*3</label><br>
              <input type="radio" id="q3d" name="q3" value="d">
              <label for="q3d" class="incorrect">d) Error</label><br>
      
              <h3>Question 4</h3>
              <p>Which Python data type is immutable?</p>
              <input type="radio" id="q4a" name="q4" value="a">
              <label for="q4a" class="incorrect">a) Tuple</label><br>
              <input type="radio" id="q4b" name="q4" value="b">
              <label for="q4b" class="incorrect">b) String</label><br>
              <input type="radio" id="q4c" name="q4" value="c">
              <label for="q4c" class="correct">c) List</label><br>
              <input type="radio" id="q4d" name="q4" value="d">
              <label for="q4d" class="incorrect">d) Integer</label><br>
      
              
          </form>
        `,
    initialCode: `a = 10\nb = 3.5\nprint(a+b)`,
  },
  {
    id: 3,
    language: 'Python',
    title: 'Lists',
    content: `
    <p>Before we go over dictionaries, which are the most common datatype when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how lists work.</p>
    
    <p>Below is an example of a list:</p>
    <pre class="overflow-auto shadow-md"><code>my_list = [7, "Hello", False, 63.5]</code></pre>
    
    <p>A list can hold all types of data, and you can have all kinds of data in one list. You use lists when you need exactly that, a list. Lists are also mutable, as opposed to tuples—which means we can rearrange, extend, and replace items in a list, meaning they're super flexible!</p>
    
    <p>A list is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in a list on Algorand could be one that has asset ID's.</p>
    <pre class="overflow-auto shadow-md"><code>asset_ids = [1265975021, 1138500612, 400593267]</code></pre>
    
    <p>Or perhaps a list of addresses:</p>
    <pre class="overflow-auto shadow-md"><code>addresses = [
'WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU',
'7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY',
'HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA']</code></pre>
    
    <p>Although lists don't have to be organized in anyway and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in a list, you could use the set() function.</p>
    <pre class="overflow-auto shadow-md"><code>my_list = [1, 1, 2, 3, 4, 4]
my_list_without_duplicates = set(my_list)
print(my_list_without_duplicates)
# Output:# [1, 2, 3, 4]</code></pre>
    
    <p>Let's look back at the first example of a list:</p>
    <pre class="overflow-auto shadow-md"><code>my_list = [7, "Hello", False, 63.5]</code></pre>
    
    <p>In the list above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (True or False value) in the third spot; a float (AKA decimal value), in the fourth spot.
    I refer to the places these items are in the list as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming lists are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the list. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in a list.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for False, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the list, we must first assign it to a variable:</p>
    <pre class="overflow-auto shadow-md"><code>my_list = [7, "Hello", False, 63.5]</code></pre>
    
    <p>Now, we can use index notation to pick out items of our choice by using their position, let's start with just printing the list to the terminal:</p>
    <pre class="overflow-auto shadow-md"><code>print(my_list)
# Output: [7, "Hello", False, 63.5]</code></pre>
    
    <p>... and now lets print the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <pre class="overflow-auto shadow-md"><code>first_index_my_list = my_list[1]
print(first_index_my_list)
# Output: "Hello"</code></pre>
    
    <p>Try printing the third index into the using index notation into the code editor down below, I've already defined the list for you below, click run when you're ready to run the code! The output should be 63.5</p>
    
    <pre class="overflow-auto shadow-md"><code>my_list = [7, "Hello", False, 63.5]"</code></pre>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
          <h3>Question 1</h3>
          <p>What is the correct way to define a list in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_list = {1, 2, 3}</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) my_list = (1, 2, 3)</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) my_list = [1, 2, 3]</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_list = 1, 2, 3</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following statements about lists is true?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Lists are immutable.</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Lists can contain different types of data.</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Lists are enclosed in parentheses ( ).</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Lists are zero-indexed.</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre class="overflow-auto shadow-md"><code>my_list = [7, "Hello", False, 63.5]
print(my_list[2])</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) False</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct way to remove duplicate entries in a list?</p>
          <pre class="overflow-auto shadow-md"><code>my_list = [1, 1, 2, 3, 4, 4]
my_list_without_duplicates = set(my_list)
print(my_list_without_duplicates)</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using the set() function</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using the list() function</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using the dict() function</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using the tuple() function</label><br>
  
          
      </form>
    `,
    initialCode: `my_list = [7, "Hello", False, 63.5]\nprint(my_list)`,
  },
  {
    id: 4,
    language: 'Python',
    title: 'Dictionaries',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, dictionaries! A dictionary is like a list, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, dictionaries also differ in that they store values with keys, and can accept several data types. A dictionary can be highly versatile, and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have dictionaries with dictionaries within them, and even lists as well! It's important to mention that keys and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of a dictionary:</p>
    <pre class="overflow-auto shadow-md"><code>this_is_my_dictionary = {"name": "John", "age": 22}</code></pre>
    
    <p>In lists, we used a process called indexing, and the index notation format to access values, eg; my_list[3]. With dictionaries, we use a similar process called key access, and the key notation format to access values.</p>
    
    <p>The main difference is that we use keys, instead of solely integers that refer to position, to select values from a dictionary— and not to confuse you, but a key in a dictionary can also be an integer =).</p>
    
    <p>For example, in this_is_my_dictionary above, you'll see the value "John" belongs to the key, "name". As well as the value 22, belongs to the key, "age". This is what key notation would look like for accessing a value for a specific key in a dictionary:</p>
    <pre class="overflow-auto shadow-md"><code>name_value = this_is_my_dictionary['name']
print(name_value)
# Output: "John"</code></pre>
    
    <p>Try printing the "age" value in the code editor below:</p>
    <pre class="overflow-auto shadow-md"><code>age_value = this_is_my_dictionary['age']
print(age_value)
# Output: 22</code></pre>
    
    <p>Now we'll look over a more intricate dictionary, that's a bit larger and complex.</p>
    <pre class="overflow-auto shadow-md"><code>this_is_my_dictionary = {"name": "John", "age": 22, "likes": ["Exercise", "Cooking", "Coding"]}</code></pre>
    
    <p>We see something in this dictionary that we haven't seen before, a list as the value to a key. Let's try accessing the 1st index of John's likes using a mix of key notation and index notation!</p>
    <pre class="overflow-auto shadow-md"><code>likes = this_is_my_dictionary['likes']
print(likes)
# Output:# ["Exercise", "Cooking", "Coding"]</code></pre>
    
    
    <pre class="overflow-auto shadow-md"><code>likes_first_index = likes[1]
print(likes_first_index)
# Output:# "Cooking"</code></pre>
  
      <hr><form class="quiz-form">
      <h1>Quiz</h1>
          <h3>Question 1</h3>
          <p>What is the correct way to define a dictionary in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_dict = [1: "one", 2: "two"]</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) my_dict = (1: "one", 2: "two")</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) my_dict = {1: "one", 2: "two"}</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_dict = 1: "one", 2: "two"</label><br>
  
          <h3>Question 2</h3>
          <p>How do you access the value associated with a key in a dictionary?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) Using key notation</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) Using index notation</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Using both key and index notation</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Using value notation</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre class="overflow-auto shadow-md"><code>this_is_my_dictionary = {"name": "John", "age": 22}
print(this_is_my_dictionary['age'])</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) "name"</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
          <pre class="overflow-auto shadow-md"><code>this_is_my_dictionary = {"name": "John", "age": 22, "likes": ["Exercise", "Cooking", "Coding"]}
print(this_is_my_dictionary['likes'][1])</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) ["Exercise", "Cooking", "Coding"]</label><br>
  
          
      </form>
    `,
    initialCode: `this_is_my_dictionary = {"name": "John", "age": 22}\nprint(this_is_my_dictionary)`,
  },
  {
    id: 2,
    language: 'Python',
    title: 'Functions',
    content: `
    <p>In Python, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>def</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a colon (:) and is indented.</p>
    <p>Let's start with a simple function that prints a greeting message:</p>
    
    <pre class="overflow-auto shadow-md"><code>def greet():
    print("Hello, world!")
</code></pre>
    
    <p>When we call the <code>greet()</code> function, it prints "Hello, world!" to the console.</p>
    <p>Functions can also accept parameters, which allow us to pass values into the function for processing. Here's an example:</p>
    
    <pre class="overflow-auto shadow-md"><code>def greet(name):
    print(f"Hello, {name}!")
greet("Alice")  # Output: "Hello, Alice!"
greet("Bob")    # Output: "Hello, Bob!"</code></pre>
    
    <p>In this example, the <code>greet</code> function accepts one parameter <code>name</code>. When we call the function and pass in a value like "Alice" or "Bob", the function prints a personalized greeting message.</p>
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    
    <pre class="overflow-auto shadow-md"><code>def add(a, b):
    return a + b
result = add(3, 5)
print(result)  # Output: 8</code></pre>
    
    <p>The <code>add</code> function takes two parameters <code>a</code> and <code>b</code>, adds them together, and returns the result. We can then store the returned value in a variable and print it.</p>
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    
    <pre class="overflow-auto shadow-md"><code>def greet(name="world"):
    print(f"Hello, {name}!")
greet()         # Output: Hello, world!
greet("Alice")  # Output: Hello, Alice!</code></pre>
    
    <p>In this example, the <code>greet</code> function has a default parameter value of "world". If no argument is passed when the function is called, it uses the default value.</p>
    <p>We can also define functions that accept a variable number of arguments using the <code>*args</code> and <code>**kwargs</code> syntax. Here's an example:</p>
    
    <pre class="overflow-auto shadow-md"><code>def add(*args):
    return sum(args)
print(add(1, 2, 3))        # Output: 6
print(add(4, 5, 6, 7))    # Output: 22</code></pre>
    
    <p>The <code>add</code> function uses <code>*args</code> to accept a variable number of arguments. Inside the function, <code>args</code> is a tuple containing all the arguments passed. We use the <code>sum</code> function to add all the values together and return the result.</p>
    <p>The <code>**kwargs</code> syntax allows us to accept a variable number of keyword arguments. Here's an example:</p>
    
    <pre class="overflow-auto shadow-md"><code>def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_info(name="Alice", age=30, city="New York")</code></pre>
    
    <p>In this example, the <code>print_info</code> function uses <code>**kwargs</code> to accept a varying number of keyword arguments. Inside the function, <code>kwargs</code> is a dictionary containing all the keyword arguments passed. We loop through the dictionary and print each key-value pair.</p>
    <p>Functions are a fundamental part of Python programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What keyword is used to define a function in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) func</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) function</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) def</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) define</label><br>
  
          <h3>Question 2</h3>
          <p>What will be the output of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>def greet(name):
    print(f"Hello, {name}!")  
greet("Alice")</code></pre>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Hello, world!</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Hello, Alice!</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Hello!</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Alice, Hello!</label><br>
  
          <h3>Question 3</h3>
          <p>What does the following function return?</p>
           <pre class="overflow-auto shadow-md"><code>def add(a, b):
    return a + b  
result = add(3, 5)
print(result)</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 35</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 15</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) 8</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 5</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>def greet(name="world"):
    print(f"Hello, {name}!")  
greet()</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Hello, world!</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Hello, Alice!</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Hello!</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) world, Hello!</label><br>
  
          
      </form>
    `,
    initialCode: `def greet():\n    print("Hello, world!")\ngreet()`,
  },

  {
    id: 5,
    language: 'Python',
    title: 'Imports',
    content: `
    <p>This code begins with module imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, python interpreters read from top to bottom.</p>
    
    <p>The module imports are the algod.py file from the v2 client folder, in the algosdk library: library/folder/file.py/class</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient</code></pre>
    
    <p>The period " . " between "algosdk" and "v2client" indicates where we are going from the algosdk library, which is the v2client folder. From the v2client folder, we then enter the algod python file, and extract the AlgodClient class to use in our code. This is how you import the file, function, or "class" (we will go over classes later) that you want to use within your code. If we did not import AlgodClient specifically, we could still access it in our code from the Algod file. We would just need to type out the algod_client variable like so:</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client import algod
algod_client = algod.AlgodClient(node_token, node_port)</code></pre>
    
    <p>We could also stop at v2client, and follow a similar workflow</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk import v2client
algod_client = v2client.algod.AlgodClient(node_token, node_port)</code></pre>
    
    <p>We can see now why sometimes its more efficient to import a specific file, method, or function instead of the entire library— it is certainly easier to read, and write, and is generally much more concise. For the random module, the library comes with python naturally when installed, so you will notice that with a fresh installation of python, you will not have access to the algosdk library, but you will have access to the random library. To gain access to the algosdk library, you would simply need to install it using the pip installer.</p>
    <pre class="overflow-auto shadow-md"><code>pip install py-algorand-sdk</code></pre>
    
    <p>If you don't have pip, it must be installed manually, which is gone over in the Installation guide on this webpage.</p>
    <pre class="overflow-auto shadow-md"><code>import random</code></pre>
    
    <p>To decide on whether or not you want to import a specific file, function, or method, you would need to use your intuition! For example, I use the general import random at the top of my file, yet I only use randint from that module. So it may be better to use</p>
    <pre class="overflow-auto shadow-md"><code>from random import randint</code></pre>
    
    <p>For the sake of understanding, lets just say perhaps the person writing the code unsure of whether or not the code will need other functions from the random library. Perhaps I plan to also use randrange from the random library with randint, so for now I'll import the entire random library.</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to import the AlgodClient class from the algosdk library?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) import AlgodClient from algosdk.v2client.algod</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) import algosdk.v2client.algod.AlgodClient</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) from algosdk.v2client.algod import AlgodClient</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) from algosdk.v2client import AlgodClient</label><br>
  
          <h3>Question 2</h3>
          <p>Which statement about module imports is true?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Imports can be placed anywhere in the code</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Imports must appear before usage of anything within them</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Python reads imports from bottom to top</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) You can only import entire libraries, not specific functions</label><br>
  
          <h3>Question 3</h3>
          <p>How would you import only the randint function from the random module?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) from random import randint</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) import random.randint</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) import randint from random</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) import random</label><br>
  
          <h3>Question 4</h3>
          <p>Which command would you use to install the algosdk library using pip?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) pip install algosdk</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) pip install py-algorand-sdk</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) pip install algorand</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) pip install py-algosdk</label><br>
  
          
      </form>
    
    `,
    initialCode: `# Import the entire random module\nimport random\n\n# Generate a random integer between 1 and 10\nrandom_number = random.randint(1, 10)\nprint(f"Random number (full random import): {random_number}")
  `,
  },
  {
    id: 17,
    language: 'Python',
    title: 'Payment Transactions',
    content: `
    <p>In this chapter we are creating and managing Algorand accounts in Python, including generating addresses, converting mnemonics, and executing secure payment transactions.</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import PaymentTxn, wait_for_confirmation
from algosdk import account
from algosdk import mnemonic
from algosdk.util import algos_to_microalgos    
</code></pre>
    
    <p><strong>Two Ways to Import an Account</strong></p>
    
    <p><strong>Method 1</strong>
    Create a New Account</p>
    <pre class="overflow-auto shadow-md"><code>private_key, address = account.generate_account()
print("Private Key: ", private_key)
print("Address: ", address)
#Output
#Private Key: 6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg== 
#Address: I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU</code></pre>
    
    <p>If needed to import to a wallet, you can obtain the mnemonic from the private key</p>
    <pre class="overflow-auto shadow-md"><code>mnemonic_phrase = mnemonic.from_private_key(private_key)
print(mnemonic_phrase)
#Output: brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual <== Mnemonic
</code></pre>
    
    <p><strong>Method 2</strong> Use mnemonic to obtain/redeem private key</p>
    <pre class="overflow-auto shadow-md"><code>mnemonic_phrase = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual'
private_key = mnemonic.to_private_key(mnemonic_phrase)
print(private_key)
#Output: 6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg== <== Private Key</code></pre>
    
    <p>When developing in Python, there are two methods to obtain a private key and address to use for signing transactions you create. The private key is in base64 format and required for transaction signing.</p>
    
    <p><strong>Method 1: Create a brand new account and obtain the private key and address directly</strong></p>
    <p>In the algosdk's account module, there is a function called generate_account(), which you can import at the beginning of your code, and is defined here:</p>

    <pre><code>(function) def generate_account() -> tuple[str, Any]</code></pre>


    <p>Returns:
    (str, str): private key, account address</p>
    
    <p>This returns the private key and account address as strings. Since this returns a tuple of two items, you would assign two variables to the output of the function, and then subsequently print them.</p>
    <p>In testnet, you can now fund the account by inputting the address at <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>.
    All accounts require a minimum balance of 0.1 Algo to send transactions, and then 0.001 Algorand per transaction fee.</p>
    
    <p>Should you need the mnemonic to import into a wallet application later, you can do so with the from_private_key() function in the mnemonic library as well; input your private key into the function and assign the output variable to something like "mnemonic_phrase". Function is defined below:</p>
    <pre><code>(function) def from_private_key(private_key: Any) -> str
#Returns the mnemonic for the private key.</code></pre>
    <p>Args:
    private_key (str): private key in base64</p>
    <p>Returns:
    str: mnemonic</p>
    
    <p><strong>Method 2: Convert an Existing Mnemonic to a Private Key</strong></p>
    <p>Should you already have a mnemonic and require the private key in base64 format, you can create a variable called "mnemonic_phrase" and use the result of the to_private_key() function in the mnemonic library, which is defined below:</p>
    <pre><code>(function) def to_private_key(mnemonic: Any) -> str
#Returns the private key for the mnemonic.</code></pre>
    <p>Args:
    mnemonic (str): mnemonic of the private key</p>
    <p>Returns:
    str: private key in base64</p>
    <p>The mnemonic must be a string, meaning it is enclosed in apostrophes or double quotes ('' or ""), and there must be a space between words.</p>
    
    <p>Now lets use the account we generated and funded using <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>, create our AlgodClient class to initiate a connection to the Algorand blockchain, generate a new account to interact with, and subsequently sign, and send some different kinds of payment transactions.</p>
    
    <p>We will be trying a typical payment transaction with a note field, followed by a rekey transaction (rekey to a new account and back to ourselves from the new account), and an account closing transaction. All three are under the scope of a payment transaction.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.account import generate_account
from algosdk.util import algos_to_microalgos
from algosdk.transaction import PaymentTxn, wait_for_confirmation

algod_token = ''
algod_server = 'https://testnet-api.algonode.cloud'
algod_client = AlgodClient(algod_token, algod_server)

address = 'I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU'
private_key = '6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg=='

amount = algos_to_microalgos(1.001)
params = algod_client.suggested_params()

new_account_private_key, new_account_address = generate_account()

basic_payment_transaction = PaymentTxn(
    sender = address,
    receiver = new_account_address,
    sp = params,
    amt = amount,
    note = "Here's your one Algo!"
)

signed_basic_payment_transaction = basic_payment_transaction.sign(private_key)
transaction_id = algod_client.send_transaction(signed_basic_payment_transaction)
wait_for_confirmation(algod_client, transaction_id)
print(transaction_id)</code></pre>
    
    <p>Steps:</p>
    <ol class=inText>
      <li>Import our necessary modules</li>
      <li>Define our AlgodClient to initiate a connection to the chain</li>
      <li>Define our account's address and private key that we will be sending transactions from</li>
      <li>Define an amount of Algorand to send</li>
      <li>Obtain the params needed for all transactions</li>
      <li>Generate a new account for testing, so we have an address to send testnet Algorand to</li>
      <li>Define our payment transaction and its parameters</li>
      <li>Sign the transaction with our private key</li>
      <li>Assign the result of sending our signed transaction with the send_transaction() function from the AlgodClient class</li>
      <li>Use the wait_for_confirmation() function to ensure the transaction is successful</li>
      <li>Print the transaction ID for reference on an explorer like <a href="https://allo.info/" target="_blank">allo.info</a>, <a href="https://testnet.explorer.perawallet.app/" target="_blank">Pera Wallet Explorer</a>, <a href="https://www.blockpack.app/#/explorer/home" target="_blank">BlockPack Explorer</a>, or <a href="https://app.dappflow.org/explorer/home" target="_blank">DappFlow Explorer</a>.</li>
    </ol>
    
    <p>We introduce a few new functions here:</p>
    <ul class=inText>
      <li>the algos_to_microalgos() function from the algosdk.util module</li>
      <li>the PaymentTxn class and wait_for_confirmation() function from the algosdk.transaction module</li>
      <li>The send_transaction() function, which is a method from the AlgodClient class</li>
    </ul>
    
    <p>In the algorand SDK's, when we want to reference an amount of algo, that amount needs to be in a format called "Microalgo"; Microalgo is essentially an amount of algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 Microalgo, and the transaction fee of 0.001 Algo is 1,000 Microalgo.</p>
    
    <p>Instead of manually calculating the microalgo amount each time, what we can do is use the algos_to_microalgos() function, and pass in the amount of algo as an argument, defined below:</p>
    <pre><code>(function) def algos_to_microalgos(algos: Any) -> Any
#Converts algos to microalgos.</code></pre>
    <p>Args:
    algos (int or decimal): how many algos</p>
    <p>Returns:
    int: how many microalgos</p>
    
    <p>The PaymentTransaction class comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class=inText>
      <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
      <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    <p><strong>PaymentTransaction format:</strong></p>
    <pre><code>class PaymentTxn (
    sender: str,
    sp: SuggestedParams,
    receiver: Any,
    amt: Any,
    close_remainder_to: Any | None = None,
    note: Any | None = None,
    lease: Any | None = None,
    rekey_to: Any | None = None
)
#Represents a payment transaction.</code></pre>
    <p>Args:
    sender (str): address of the sender
    sp (SuggestedParams): suggested params from algod
    receiver (str): address of the receiver
    amt (int): amount in microAlgos to be sent
    close_remainder_to (str, optional): if nonempty, account will be closed and remaining algos will be sent to this address
    note (bytes, optional): arbitrary optional bytes
    lease (byte[32], optional): specifies a lease, and no other transaction with the same sender and lease can be confirmed in this transaction's valid rounds
    rekey_to (str, optional): additionally rekey the sender to this address</p>
    
    <p>After we define our Payment Transaction class parameters, we can then use the sign() method that is included within it. This sign function accepts our private key, and outputs a signed transaction object, which is needed to input to the send_transaction() function:</p>
    <pre><code>(method) def sign(private_key: Any) -> SignedTransaction
#Sign the transaction with a private key.</code></pre>
    <p>Args:
    private_key (str): the private key of the signing account</p>
    <p>Returns:
    SignedTransaction: signed transaction with the signature</p>
    
    <p>The wait_for_confirmation() function requires the AlgodClient class variable we created, as well as the transaction ID to wait for:</p>
    <pre><code>(function) def wait_for_confirmation (
    algod_client: AlgodClient,
    txid: str
)</code></pre>
    
    <p>Lastly, the send_transaction() function, which accepts signed transaction objects:</p>
    <pre><code>(method) def send_transaction (
        txn: GenericSignedTransaction
) -> Outputs transaction ID</code></pre>
    
    <p>Below are examples of rekey transactions and close amount to transactions, which are sent in succession (BUT NOT A GROUP TRANSACTION, WHICH WE WILL LEARN ABOUT LATER)</p>
    
<pre class="overflow-auto shadow-md"><code># Rekey Transaction
rekey_to_new_account_payment = PaymentTxn(
    sender = address,
    receiver = new_account_address,
    sp = params,
    amt = 0,
    rekey_to = new_account_address,
    note = "Take care of my account for me! I'll be back in a week"
)
signed_rekey_to_new_account_payment = rekey_to_new_account_payment.sign(private_key)
transaction_id = algod_client.send_transaction(signed_rekey_to_new_account_payment)
wait_for_confirmation(algod_client, transaction_id)
print(transaction_id)
# New account rekeys back to the original account, note that the sender is the original account but the new account uses their own private key, not the original accounts private key
rekey_back_to_old_account_from_new_account = PaymentTxn(
    sender = address,
    receiver = address,
    sp = params,
    rekey_to = address,
    amt = 0,
    note = "Sorry! I'm too busy trading this week. Maybe ask PorkChop.algo?"
)
signed_rekey_back_to_old_account_from_new_account = rekey_back_to_old_account_from_new_account.sign(new_account_private_key)
transaction_id = algod_client.send_transaction(signed_rekey_back_to_old_account_from_new_account)
wait_for_confirmation(algod_client, transaction_id)
print(transaction_id)
# Close remainder to transaction
close_account_to_new_account = PaymentTxn(
    sender = address,
    receiver = new_account_address,
    sp = params,
    amt = 0,
    close_remainder_to = new_account_address,
    note = 'Take care of my precious Algo!'
)
signed_close_account_to_new_account = close_account_to_new_account.sign(private_key)
transaction_id = algod_client.send_transaction(signed_close_account_to_new_account)
wait_for_confirmation(algod_client, transaction_id)
print(transaction_id)</code></pre>
    
    <p>Although the Payment Transaction has many possible inputs, the bare minimum is using the sender, sp, receiver, and amt field. Anything else is at your discretion!</p>
    
    <p><strong>DISCLAIMER:</strong> that when rekeying and closing out accounts, this process is irreversible! If you don't know the person, or feel unsure about doing so, you should never use these transactions outside of testing purposes without ultimate confidence. No platforms currently utilize rekey transactions for users, but do use them internally when generating smart contracts for contract to contract calls, which will come later in our learning process.</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
<p>What function is used to create a new Algorand account in the algosdk library?</p>
<input type="radio" id="q1a" name="q1" value="a">
<label for="q1a" class="incorrect">a) algosdk.create_account()</label><br>

<input type="radio" id="q1b" name="q1" value="b">
<label for="q1b" class="incorrect">b) algosdk.generate_account()</label><br>

<input type="radio" id="q1c" name="q1" value="c">
<label for="q1c" class="incorrect">c) algosdk.new_account()</label><br>

<input type="radio" id="q1d" name="q1" value="d">
<label for="q1d" class="correct">d) algosdk.account.generate_account()</label><br>


<h3>Question 2</h3>
<p>How can you obtain the mnemonic phrase from a private key in the algosdk library?</p>
<input type="radio" id="q2a" name="q2" value="a">
<label for="q2a" class="incorrect">a) algosdk.private_key_to_mnemonic()</label><br>

<input type="radio" id="q2b" name="q2" value="b">
<label for="q2b" class="incorrect">b) algosdk.secret_key_to_mnemonic()</label><br>

<input type="radio" id="q2c" name="q2" value="c">
<label for="q2c" class="incorrect">c) algosdk.mnemonic_from_private_key()</label><br>

<input type="radio" id="q2d" name="q2" value="d">
<label for="q2d" class="correct">d) algosdk.mnemonic.from_private_key()</label><br>


<h3>Question 3</h3>
<p>What is the correct way to initialize an AlgodClient instance to connect to the Algorand testnet?</p>
 <pre class="overflow-auto shadow-md"><code>algod_token = ''
algod_server = 'https://testnet-api.algonode.cloud'
algod_client = algod.AlgodClient(algod_token, algod_server)
</code></pre>
<input type="radio" id="q3a" name="q3" value="a">
<label for="q3a" class="correct">a) algod.AlgodClient(algod_token, algod_server)</label><br>

<input type="radio" id="q3b" name="q3" value="b">
<label for="q3b" class="incorrect">b) algod.AlgodNode()</label><br>
<input type="radio" id="q3c" name="q3" value="c">
<label for="q3c" class="incorrect">c) algod.Algodv2()</label><br>
<input type="radio" id="q3d" name="q3" value="d">
<label for="q3d" class="incorrect">d) algod.Client()</label><br>

<h3>Question 4</h3>
<p>What function is used to convert an amount of Algo to MicroAlgo?</p>
<input type="radio" id="q4a" name="q4" value="a">
<label for="q4a" class="incorrect">a) algosdk.convert_algo_to_micro()</label><br>
<input type="radio" id="q4b" name="q4" value="b">
<label for="q4b" class="correct">b) algosdk.algos_to_microalgos()</label><br>
<input type="radio" id="q4c" name="q4" value="c">
<label for="q4c" class="incorrect">c) algosdk.algo_to_micro()</label><br>
<input type="radio" id="q4d" name="q4" value="d">
<label for="q4d" class="incorrect">d) algosdk.to_microalgos()</label><br>

<h3>Question 5</h3>
<p>Which function is used to send a signed transaction in the Algorand SDK?</p>
<input type="radio" id="q5a" name="q5" value="a">
<label for="q5a" class="incorrect">a) algod_client.send_transaction()</label><br>
<input type="radio" id="q5b" name="q5" value="b">
<label for="q5b" class="correct">b) algod_client.send_raw_transaction()</label><br>
<input type="radio" id="q5c" name="q5" value="c">
<label for="q5c" class="incorrect">c) algod_client.submit_transaction()</label><br>
<input type="radio" id="q5d" name="q5" value="d">
<label for="q5d" class="incorrect">d) algod_client.send_signed_transaction()</label><br>

  
          
      </form>
    
    `,
    initialCode: `from algosdk import account, mnemonic
  
# Generate a new account
private_key, address = account.generate_account()
  
# Display the private key and address
print("Private Key:", private_key)
print("Address:", address)
  
# Generate mnemonic phrase from private key
mnemonic_phrase = mnemonic.from_private_key(private_key)
print("Mnemonic Phrase:", mnemonic_phrase)
  
    `,
    //     editable: false,
    //     output: `Private Key: b'G9YgqD6iD1TnIsxEJ6fvqzlyU+vGixzslr6b6LZriAsGZKFfSgEzYlvHgT3OQpYdODsXaT1ePz7uKXZv5eLjlA=='
    // Address: E3X4YZ5ABCDE12345FGHIJKLMNO67890PQRSTU1234567890ABCDEF1234567890AB
    // Mnemonic Phrase: pumpkin present galaxy zebra window tough swarm urban mansion favorite august battle speed replace cradle office cross absent inmate long lumber nephew task final aspect
    // `,
  },

  {
    id: 42,
    language: 'Python',
    title: 'Key Registration',
    content: `
    <p>Generating Key Registration Transactions requires setting up a node, which is guided in the "Running Your Own Node" section in the "Installation and Setup" Python Chapter.</p>
    
    <p>Once a node is running and caught up, from the node directory, you can type the following command, where 'NameYourWallet' can be whatever you'd like:</p>
    
    <pre class="overflow-auto shadow-md"><code>goal wallet new NameYourWallet</code></pre>
    
    <img src="/images/New Wallet 1.png" alt="New Wallet Creation">
    
    <p>Type in a secure password for your new wallet. Note that you will not see the text as it is being entered.</p>
    
    <p>You will be asked to type the password again, and then it will provide the option to view your backup phrase. It is recommended to type "Yes" and save this in a secure manner for future reference.</p>
    
    <p>Now we will generate a participation key (part key) that will be valid for the recommended 3,000,000 rounds, which is approximately 3 months.</p>
    
    <p>We need to get the current round, which can be done using the following command:</p>
    
    <pre class="overflow-auto shadow-md"><code>goal node status -d data</code></pre>
    
    <img src="/images/CheckCurrentRound.png" alt="Check Current Round">
    
    <p>The "Last Committed Block" value will be our first round.</p>
    
    <pre class="overflow-auto shadow-md"><code>goal account addpartkey -a &lt;address-of-participating-account&gt; --roundFirstValid=&lt;partkey-first-round&gt; --roundLastValid=&lt;partkey-last-round&gt;</code></pre>
    
    <p>For example, if your address is <strong>3CB66YMOQOMPZBRIEUJ5R2CQ6S3Q6L6Z4B6O7ISJKQ5YPUUPCGQQIBQA6A</strong> and the current round is <strong>45136193</strong>, the command will be:</p>
    
    <pre class="overflow-auto shadow-md"><code>goal account addpartkey -a 3CB66YMOQOMPZBRIEUJ5R2CQ6S3Q6L6Z4B6O7ISJKQ5YPUUPCGQQIBQA6A --roundFirstValid=45136193 --roundLastValid=48136193</code></pre>
    
    <p>The part key generation will begin and may take a few minutes. Once complete, it will provide a transaction ID:</p>
    
    <img src="/images/PartKeyPending.png" alt="Part Key Pending">
    
    <p>To view part key information needed for the transaction, execute:</p>
    
    <pre class="overflow-auto shadow-md"><code>goal account partkeyinfo -d data</code></pre>
    
    <img src="/images/GeneratedPartKey.png" alt="Generated Part Key">
    
    <p>We can now begin registering the account online with the information generated. This includes the selection key, voting key, state proof key, and another parameter defined in the official Algorand documentation known as "Key Dilution":</p>
    
    <p><strong>Key Dilution:</strong></p>
    <p>"To optimize storage, the Key Dilution parameter defaults to the square root of the participation period length but this can be overridden with the flag --keyDilution. The Key Dilution determines how many ephemeral keys will be stored on an Algorand node, as they are generated in batches. For example, if your participation period is set to 3,000,000 rounds, a batch of 1,732 ephemeral keys will be generated upfront, with additional batches getting generated after each set is used."</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import KeyregTxn, KeyregOnlineTxn, KeyregOfflineTxn, KeyregNonparticipatingTxn
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('mainnet_algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first private key from .env
private_key_1 = os.getenv('private_key_1')

# Get address from private key
address_1 = address_from_private_key(private_key_1)

# Get parameters for transaction
params = algod_client.suggested_params()

# Input your vote key and selection key from the part key generation
selection_key = "5yqxpwCkMTkbaBDIvv+eH1zD2Z0U8JS9B956CrOZT7U="
vote_key = "EwZuJ4a/UZ0ti6bfyD1lvor1gOMs0CEJYaGvAOLk3gg=" 
state_proof_key = "ZNs6g2+Mv5PI+Ceb8t+ArivW+C1Bj6yJ59qaFmTd0r+061a4zyKKuY4+/b4aQctWLF7YVuqlXElSQcyjzANhwg=="

# Set the first valid round from suggested params
first_valid_round = params.first

# The recommended 3,000,000 rounds for the key to be valid
rounds_valid = 3_000_000 

# Set the last valid round to 3,000,000 blocks after the first valid round
last_valid_round = first_valid_round + rounds_valid

# Define the key dilution parameter
key_dilution = int(rounds_valid**0.5)  # dilution default is sqrt(num rounds)

# Create transaction
set_node_online = KeyregTxn(
    sender=address_1,
    selkey=selection_key,
    votekey=vote_key,
    sprfkey=state_proof_key,
    votefst=first_valid_round,
    votelst=last_valid_round,
    votekd=key_dilution,
    sp=params,
)

# Sign the transaction
signed_tx = set_node_online.sign(private_key_1)

# Send the transaction
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)
</code></pre>
    
    <p>After sending the above transaction, you can verify the part key information by using the terminal command:</p>
    
    <pre class="overflow-auto shadow-md"><code>goal account partkeyinfo -d data</code></pre>
    
    <p>Alternatively, you can check your part key status by querying your account information with the following Python script:</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import KeyregTxn, KeyregOnlineTxn, KeyregOfflineTxn, KeyregNonparticipatingTxn
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('mainnet_algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first private key from .env
private_key_1 = os.getenv('private_key_1')

# Get address from private key
address_1 = address_from_private_key(private_key_1)

# Retrieve account participation information
account_information = algod_client.account_info(address_1)['participation']
print(account_information)

# Example Output:
# {'selection-participation-key': '5yqxpwCkMTkbaBDIvv+eH1zD2Z0U8JS9B956CrOZT7U=', 'state-proof-key': 'ZNs6g2+Mv5PI+Ceb8t+ArivW+C1Bj6yJ59qaFmTd0r+061a4zyKKuY4+/b4aQctWLF7YVuqlXElSQcyjzANhwg==', 'vote-first-valid': 45137536, 'vote-key-dilution': 1732, 'vote-last-valid': 48137536, 'vote-participation-key': 'EwZuJ4a/UZ0ti6bfyD1lvor1gOMs0CEJYaGvAOLk3gg='}
</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 43,
    language: 'Python',
    title: 'Freeze and Clawback',
    content: `
    <p>In this chapter, we will explore how to manage assets on the Algorand blockchain using Python. This includes generating accounts, creating assets, opting in accounts to receive assets, transferring assets between accounts, freezing assets, and performing clawback transactions.</p>
    
    <h2>1. Generating Accounts</h2>
    <p>First, we'll generate three Algorand accounts and store their private keys and addresses securely using a .env file.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account
from dotenv import load_dotenv, set_key

# Load our .env file where we store discrete information
load_dotenv()

# Generate three accounts
private_key_1, address_1 = generate_account()
private_key_2, address_2 = generate_account()
private_key_3, address_3 = generate_account()

# Print the private key and address generated
print(private_key_1, address_1)
print(private_key_2, address_2)
print(private_key_3, address_3)

# Save our private keys and addresses to our .env
set_key('.env', key_to_set='private_key_1', value_to_set=private_key_1)
set_key('.env', key_to_set='private_key_2', value_to_set=private_key_2)
set_key('.env', key_to_set='private_key_3', value_to_set=private_key_3)

set_key('.env', key_to_set='address_1', value_to_set=address_1)
set_key('.env', key_to_set='address_2', value_to_set=address_2)
set_key('.env', key_to_set='address_3', value_to_set=address_3)

# Fund these three addresses with testnet Algorand @ https://bank.testnet.algorand.network/
</code></pre>
    
    <p>Ensure that all three generated accounts are funded with testnet Algorand using the [Algorand Testnet Bank](https://bank.testnet.algorand.network/).</p>
    
    <h2>2. Creating an Asset</h2>
    <p>Next, we'll create a new asset on the Algorand blockchain. This example demonstrates how to create an asset without freeze functionality.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetCreateTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first private key from .env
private_key_1 = os.getenv('private_key_1')

# Get address from private key
address_1 = address_from_private_key(private_key_1)

# Get parameters for transaction
params = algod_client.suggested_params()

# Define the asset creation transaction parameters
asset_creation_transaction = AssetCreateTxn(
    sender=address_1,
    sp=params,
    total=1000,
    decimals=0,
    default_frozen=False,
    manager=address_1,
    reserve=address_1,
    freeze=address_1,
    asset_name='Test Token',
    unit_name='TEST',   
)

# Sign the transaction
signed_asset_creation_transaction = asset_creation_transaction.sign(private_key_1)

# Submit the transaction, which returns a transaction ID
transaction_id = algod_client.send_transaction(signed_asset_creation_transaction)

# Wait for the transaction to be confirmed 
wait_for_confirmation(algod_client, transaction_id)

# Get the confirmed transaction information
transaction_info = algod_client.pending_transaction_info(transaction_id)

# Get the asset ID from the transaction information returned
new_asset_id = transaction_info['asset-index']

# Print the asset ID
print(new_asset_id)

# Create/Set a key in our .env called asset_id, with its value set to the asset ID as a string
set_key('.env', key_to_set='asset_id', value_to_set=str(new_asset_id))
</code></pre>
    
    <p><b>Note:</b> You may use the same code as we did previously to opt in the second and third accounts into the asset and transfer an amount to them.</p>
    
    <h2>3. Opting In Accounts to the Asset</h2>
    <p>Before accounts can receive the newly created asset, they must opt in. Opting in is essentially an asset transfer to self with the amount field set to 0.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetTransferTxn, wait_for_confirmation, assign_group_id
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get the private keys of our other two accounts from .env
private_key_2 = os.getenv('private_key_2')
private_key_3 = os.getenv('private_key_3')

# Get the public keys of our other two accounts
address_2 = address_from_private_key(private_key_2)
address_3 = address_from_private_key(private_key_3)

# Get the new asset ID from our .env, make sure to convert to an integer
asset_id = int(os.getenv('asset_id'))

# Get suggested transaction parameters
params = algod_client.suggested_params()

# Create an opt-in transaction for Account 2
optin_account_2 = AssetTransferTxn(
    sender=address_2,
    sp=params,
    receiver=address_2,
    index=asset_id,
    amt=0,
)

# Create an opt-in transaction for Account 3
optin_account_3 = AssetTransferTxn(
    sender=address_3,
    sp=params,
    receiver=address_3,
    index=asset_id,
    amt=0,
)

# Sign the asset opt-in transactions with the respective accounts
signed_optin_tx_account_2 = optin_account_2.sign(private_key_2)
signed_optin_tx_account_3 = optin_account_3.sign(private_key_3)

# Create a list of our unsigned transactions
txs = [optin_account_2, optin_account_3]

# Assign a group ID to the unsigned transaction group
assign_group_id(txs)

# Create a new list and sign the transactions by the correct accounts from our txs list
signed_txs = [txs[0].sign(private_key_2), txs[1].sign(private_key_3)]

# Send the group transactions by using "send_transactions" [plural]
# This returns the transaction ID of the first transaction in the group
submit_txs = algod_client.send_transactions(signed_txs)

print(submit_txs)
</code></pre>
    
    <h2>4. Transferring Assets to Accounts</h2>
    <p>Now that the accounts have opted in, we can transfer assets from the creator account (Account 1) to Account 2 and Account 3.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetTransferTxn, wait_for_confirmation, assign_group_id
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first private key from .env
private_key_1 = os.getenv('private_key_1')

# Get address from private key
address_1 = address_from_private_key(private_key_1)

# Get the addresses of our other two accounts from .env
address_2 = os.getenv('address_2')
address_3 = os.getenv('address_3')

# Get the new asset ID from our .env, make sure to convert to an integer
asset_id = int(os.getenv('asset_id'))

# Get suggested transaction parameters
params = algod_client.suggested_params()

# Create two asset transfer transactions to provide each of the other two accounts some of our asset 
provide_asset_to_account_2 = AssetTransferTxn(
    sender=address_1,
    receiver=address_2,
    amt=10,
    index=asset_id,
    sp=params
)

provide_asset_to_account_3 = AssetTransferTxn(
    sender=address_1,
    receiver=address_3,
    amt=10,
    index=asset_id,
    sp=params
)

# Create a list from these two transactions and assign them a group ID
txs = [provide_asset_to_account_2, provide_asset_to_account_3]
assign_group_id(txs)

# Iteratively sign each transaction since account 1 is the sender of both
signed_txs = [tx.sign(private_key_1) for tx in txs]

# Submit the transactions and print the first transaction ID in the group
submit_txs = algod_client.send_transactions(signed_txs)
print(submit_txs)
</code></pre>
    
    <h2>5. Transferring Assets Between Accounts</h2>
    <p>We can also transfer assets directly between Account 2 and Account 3.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetTransferTxn, wait_for_confirmation, assign_group_id
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get the private key and address of our second account from .env
private_key_2 = os.getenv('private_key_2')
address_2 = address_from_private_key(private_key_2)

# Get the public key of our third account
address_3 = os.getenv('address_3')

# Get the new asset ID from our .env, make sure to convert to an integer
asset_id = int(os.getenv('asset_id'))

# Get suggested transaction parameters
params = algod_client.suggested_params()

# Create a transfer transaction from Account 2 to Account 3
transfer_account_2_to_account_3 = AssetTransferTxn(
    sender=address_2,
    receiver=address_3,
    amt=1,
    index=asset_id,
    sp=params,
)

# Sign the transaction
signed_transfer_transaction = transfer_account_2_to_account_3.sign(private_key_2)

# Submit the transaction and print the asset ID
tx_id = algod_client.send_transaction(signed_transfer_transaction)
print(tx_id)
</code></pre>
    
    <h2>6. Freezing Assets</h2>
    <p>Asset managers can freeze and unfreeze assets for specific accounts. This example demonstrates how to freeze an account's ability to transfer assets.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetFreezeTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first account's private key from .env
private_key_1 = os.getenv('private_key_1')

# Get first account's address from private key
address_1 = address_from_private_key(private_key_1)

# Get address of our second account from .env
address_2 = os.getenv('address_2')

# Get the new asset ID from our .env, make sure to convert to an integer
asset_id = int(os.getenv('asset_id'))

# Get parameters for transaction
params = algod_client.suggested_params()

# Create the freeze transaction to prevent address 2 from sending until further notice by setting new_freeze_state to True
freeze_address_2 = AssetFreezeTxn(
    sender=address_1,
    target=address_2,
    new_freeze_state=True,
    index=asset_id,
    sp=params,
)

# Sign the transaction with account 1
signed_freeze_address_2 = freeze_address_2.sign(private_key_1)

# Submit the transaction
tx_id = algod_client.send_transaction(signed_freeze_address_2)
print(tx_id)
</code></pre>
    
    <p><b>Error Handling Example:</b> If you attempt to send an asset from Account 2 to Account 3 after freezing, it will fail with an error similar to this:</p>
    
    <pre class="overflow-auto shadow-md"><code>algosdk.error.AlgodHTTPError: TransactionPool.Remember: transaction 5RUU5XXTX7NHNWTWUDZ3RVN6SE5ZMGWNQZVRMS7Z2YM6LYVZ3YCQ: asset 730599733 frozen in RAVEP7VNGT37QSYY3VXNX7EYA2DVUSX67H4X3RXBFJMPIOAOZ7BVEMJJ2UPS 
</code></pre>
    
    <p>If you want to allow the address to send assets again, resend the same transaction but set new_freeze_state to False.</p>
    
    <p><b>Note:</b> To have all accounts' assets frozen by default, set default_frozen to True during asset creation. This depends on your specific use case.</p>
    
    <h2>7. Creating an Asset with Clawback Functionality</h2>
    <p>Clawback functionality allows the asset manager to revoke assets from any account. Here's how to create an asset with the clawback feature enabled.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetCreateTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get our first private key from .env
private_key_1 = os.getenv('private_key_1')

# Get address from private key
address_1 = address_from_private_key(private_key_1)

# Get parameters for transaction
params = algod_client.suggested_params()

# Define the asset creation transaction parameters with clawback
asset_creation_transaction = AssetCreateTxn(
    sender=address_1,
    sp=params,
    total=1000,
    decimals=0,
    manager=address_1,
    reserve=address_1,
    clawback=address_1,
    asset_name='Test Token',
    unit_name='TEST',   
    default_frozen=False,
)

# Sign the transaction
signed_asset_creation_transaction = asset_creation_transaction.sign(private_key_1)

# Submit the transaction, which returns a transaction ID
transaction_id = algod_client.send_transaction(signed_asset_creation_transaction)

# Wait for the transaction to be confirmed 
wait_for_confirmation(algod_client, transaction_id)

# Get the confirmed transaction information
transaction_info = algod_client.pending_transaction_info(transaction_id)

# Get the asset ID from the transaction information returned
new_asset_id = transaction_info['asset-index']

# Print the asset ID
print(new_asset_id)

# Create/Set a key in our .env called asset_id, with its value set to the asset ID as a string
set_key('.env', key_to_set='asset_id', value_to_set=str(new_asset_id))

# You may use the same code as we did previously to opt in the second and third accounts into the asset and transfer an amount to them
</code></pre>
    
    <h2>8. Performing Clawback Transactions</h2>
    <p>With clawback functionality enabled, the asset manager can revoke assets from any account. Below is an example of performing a clawback transaction from Account 2 to Account 3.</p>
    
    <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetTransferTxn, wait_for_confirmation, assign_group_id
from algosdk.v2client.algod import AlgodClient
from dotenv import load_dotenv, set_key
from algosdk.account import address_from_private_key
import os

# Load the .env file
load_dotenv()

# Instantiate Algorand Client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

# Get the private key and address of our first account from .env
private_key_1 = os.getenv('private_key_1')
address_1 = address_from_private_key(private_key_1)

# Get the public key of our third account
address_2 = os.getenv('address_2')

# Get the new asset ID from our .env, make sure to convert to an integer
asset_id = int(os.getenv('asset_id'))

# Get suggested transaction parameters
params = algod_client.suggested_params()

# Create a clawback transaction as Account 1 to send the asset from Account 2 to Account 1 
clawback_asset_from_account_2 = AssetTransferTxn(
    sender=address_1,
    receiver=address_1,
    revocation_target=address_2,
    amt=1,
    index=asset_id,
    sp=params,
)

# Sign the transaction
signed_transfer_transaction = clawback_asset_from_account_2.sign(private_key_1)

# Submit the transaction and print the asset ID
tx_id = algod_client.send_transaction(signed_transfer_transaction)
print(tx_id)

# Additional Clawback Example: Revoking from Account 2 to Account 3
address_3 = os.getenv('address_3')
clawback_asset_from_account_2 = AssetTransferTxn(
    sender=address_1,
    receiver=address_3,
    revocation_target=address_2,
    amt=1,
    index=asset_id,
    sp=params,
)

# Sign the transaction
signed_transfer_transaction = clawback_asset_from_account_2.sign(private_key_1)

# Submit the transaction and print the asset ID
tx_id = algod_client.send_transaction(signed_transfer_transaction)
print(tx_id) 
</code></pre>
    
    <p><strong>Explanation of Clawback Fields:</strong></p>
    <ul class="inText">
        <li><strong>sender:</strong> The account authorizing the clawback (typically the asset manager).</li>
        <li><strong>receiver:</strong> The account receiving the clawbacked assets.</li>
        <li><strong>revocation_target:</strong> The account from which assets are being clawed back.</li>
        <li><strong>amt:</strong> The amount of assets to claw back.</li>
        <li><strong>index:</strong> The asset ID.</li>
    </ul>
    
    <p><b>Important Notes:</b></p>
    <ul class="inText">
        <li>The sender of the clawback transaction must be the asset manager.</li>
        <li>The receiver is where the clawed assets will be sent.</li>
        <li>The revocation target is the account from which the assets are being removed.</li>
    </ul>
    
    <p><b>Context of Clawback Transaction:</b></p>
    <p>In the context of a clawback transaction, the sender field is not the account from which the asset is being sent but rather the authorizing party (the asset manager). The receiver is the destination for the clawbacked asset amount, and the revocation_target is the target account from which the asset amount is removed.</p>
    
    <p><b>Example Error:</b></p>
    <pre class="overflow-auto shadow-md"><code>algosdk.error.AlgodHTTPError: TransactionPool.Remember: transaction 5RUU5XXTX7NHNWTWUDZ3RVN6SE5ZMGWNQZVRMS7Z2YM6LYVZ3YCQ: asset 730599733 frozen in RAVEP7VNGT37QSYY3VXNX7EYA2DVUSX67H4X3RXBFJMPIOAOZ7BVEMJJ2UPS 
</code></pre>
    
    <p>This error occurs if you attempt to transfer assets from a frozen account.</p>
    
    <hr>
    <form class="quiz-form">
        <h1>Quiz</h1>
      
        <h3>Question 1</h3>
        <p>What function is used to generate a new Algorand account in the algosdk library?</p>
        <input type="radio" id="q1a" name="q1" value="a">
        <label for="q1a" class="incorrect">a) algosdk.create_account()</label><br>
        
        <input type="radio" id="q1b" name="q1" value="b">
        <label for="q1b" class="incorrect">b) algosdk.generate_account()</label><br>
        
        <input type="radio" id="q1c" name="q1" value="c">
        <label for="q1c" class="incorrect">c) algosdk.new_account()</label><br>
        
        <input type="radio" id="q1d" name="q1" value="d">
        <label for="q1d" class="correct">d) algosdk.account.generate_account()</label><br>
        
        
        <h3>Question 2</h3>
        <p>How can you obtain the asset ID after creating a new asset?</p>
        <input type="radio" id="q2a" name="q2" value="a">
        <label for="q2a" class="incorrect">a) transaction_info['asset-id']</label><br>
        
        <input type="radio" id="q2b" name="q2" value="b">
        <label for="q2b" class="incorrect">b) transaction_info['asset_id']</label><br>
        
        <input type="radio" id="q2c" name="q2" value="c">
        <label for="q2c" class="incorrect">c) transaction_info['id']</label><br>
        
        <input type="radio" id="q2d" name="q2" value="d">
        <label for="q2d" class="correct">d) transaction_info['asset-index']</label><br>
        
        
        <h3>Question 3</h3>
        <p>What transaction type is used to freeze an account's assets?</p>
        <input type="radio" id="q3a" name="q3" value="a">
        <label for="q3a" class="incorrect">a) AssetFreezeTxn</label><br>
        
        <input type="radio" id="q3b" name="q3" value="b">
        <label for="q3b" class="incorrect">b) AssetClawbackTxn</label><br>
        
        <input type="radio" id="q3c" name="q3" value="c">
        <label for="q3c" class="incorrect">c) AssetTransferTxn</label><br>
        
        <input type="radio" id="q3d" name="q3" value="d">
        <label for="q3d" class="correct">d) AssetFreezeTransaction</label><br>
        
        <h3>Question 4</h3>
        <p>Which field in the AssetCreateTxn specifies the ability to revoke assets?</p>
        <input type="radio" id="q4a" name="q4" value="a">
        <label for="q4a" class="incorrect">a) manager</label><br>
        
        <input type="radio" id="q4b" name="q4" value="b">
        <label for="q4b" class="incorrect">b) reserve</label><br>
        
        <input type="radio" id="q4c" name="q4" value="c">
        <label for="q4c" class="incorrect">c) freeze</label><br>
        
        <input type="radio" id="q4d" name="q4" value="d">
        <label for="q4d" class="correct">d) clawback</label><br>
        
        <h3>Question 5</h3>
        <p>What function is used to assign a group ID to a list of transactions?</p>
        <input type="radio" id="q5a" name="q5" value="a">
        <label for="q5a" class="incorrect">a) assign_group()</label><br>
        <input type="radio" id="q5b" name="q5" value="b">
        <label for="q5b" class="correct">b) assign_group_id()</label><br>
        <input type="radio" id="q5c" name="q5" value="c">
        <label for="q5c" class="incorrect">c) set_group_id()</label><br>
        <input type="radio" id="q5d" name="q5" value="d">
        <label for="q5d" class="incorrect">d) group_transactions()</label><br>
    </form>
    
    `,
    initialCode: ``,
  },
  {
    id: 16,
    language: 'Python',
    title: 'Getting Started with Algorand',
    content: `
    <p>To set-up your own node, visit this github repository I have created for a previous tutorial series:</p>
    <p><a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations" target="_blank">GitHub Repository</a></p>
    <p>Scroll down to the section called "Algorand Node Installation"— and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section)</p>
    <p>If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.</p>
    <p>Now that we have access to an Algorand testnet node, as well as a basic understanding of how to work with different kinds of variables, functions and imports. It's time to get started!</p>
    <p>This will reaffirm your ability to use functions, methods, and imports— as well as key notation: eg; accessing the name of a customer in a variable named my_dictionary</p>
    
    <pre class="overflow-auto shadow-md"><code>my_dictionary = {'customer-name': 'Jerry'}
customer_name = my_dictionary['customer-name']
print(customer_name)</code>
</pre>
    
    <p>If you are using your own algorand testnet node on Windows, you will need to access your algod_token and algod_port from your node's data directory:</p>
    
    <p><strong>Obtaining your Algorand Node Token and Port</strong></p>
    <pre class="overflow-auto shadow-md"><code>#Enter the data directory from the root folder
cd node/data

#Use the following commands to obtain your node token and port
cat algod.token

#Log the token into the terminal, it should look something like:
b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd
cat algod.net

#Logs the port into the terminal, it should look something like:
127.0.0.1:8080</code></pre>
    
    <p>When programming, you will format this information for variables like so:</p>
    
    <pre class="overflow-auto shadow-md"><code>algod_token = 'b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd'
algod_port = 'http://127.0.0.1:8080'</code></pre>
    
    <p>If you are not using your own algorand testnet node, you can use these:</p>
    <p>(Free service does not require token, and the algod_token variable will be an empty string '', whereas the algod_server will be the algonode testnet cloud link)</p>
    <pre class="overflow-auto shadow-md"><code>algod_token = ''
algod_server = 'https://testnet-api.algonode.cloud'</code></pre>
    
    <p>Let's started by simply getting the status of the Algorand testnet network!</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
algod_token = ''  # Leave '' for public nodely service, or enter your node token 
algod_server = 'https://testnet-api.algonode.cloud' # Use this cloud link, or enter your own host & port
# Initialize AlgodClient
algod_client = AlgodClient(algod_token, algod_server)
status = algod_client.status()
print(status)</code></pre>
    
    <p>First we import the AlgodClient from algod.py in the v2client folder of the algosdk library.</p>
    <p>Then, we define our token and server for the node we'll be using.</p>
    <p>We initialize an AlgodClient instance, which requires a token and server argument, and assign it to our "algod_client" variable.</p>
    <p>We access a function available from the AlgodClient, called status, through our algod_client variable.</p>
    <p>The result of the status function is assigned to a variable called 'status'.</p>
    <p>Finally, we print our 'status' variable.</p>
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    <ul class=inText>
        <li>catchpoint</li>
        <li>catchpoint-acquired-blocks</li>
        <li>catchpoint-processed-accounts</li>
        <li>catchpoint-processed-kvs</li>
        <li>catchpoint-total-accounts</li>
        <li>catchpoint-total-blocks</li>
        <li>catchpoint-total-kvs</li>
        <li>catchpoint-verified-accounts</li>
        <li>catchpoint-verified-kvs</li>
        <li>catchup-time</li>
        <li>last-catchpoint</li>
        <li>last-round</li>
        <li>last-version</li>
        <li>next-version</li>
        <li>next-version-round</li>
        <li>next-version-supported</li>
        <li>stopped-at-unsupported-round</li>
        <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are last-round, so you know which block you are on, and perhaps time-since-last-round, if you should need to know that information. Other keys are primarily
    used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for dictionaries, try this:
    <ul class=inText>
        <li>Create a variable, and name it last_round</li>
        <li>Assign the value of the key 'last-round' in the status dictionary to this variable you created</li>
        <li>Print your variable!</li>
    </ul>
    </p>
    
    
    <pre class="overflow-auto shadow-md"><code>status = {'catchpoint': '', 'catchpoint-acquired-blocks': 0, 'catchpoint-processed-accounts': 0, 'catchpoint-processed-kvs': 0,
'catchpoint-total-accounts': 0, 'catchpoint-total-blocks': 0, 'catchpoint-total-kvs': 0, 'catchpoint-verified-accounts': 0, 
'catchpoint-verified-kvs': 0, 'catchup-time': 0, 'last-catchpoint': '', 'last-round': 41422522,
'last-version': 'https://github.com/algorandfoundation/specs/tree/925a46433742afb0b51bb939354bd907fa88bf95', 
'next-version': 'https://github.com/algorandfoundation/specs/tree/925a46433742afb0b51bb939354bd907fa88bf95',
'next-version-round': 41422523, 'next-version-supported': True, 'stopped-at-unsupported-round': False, 
'time-since-last-round': 1687057197}</code></pre>

    <p>Enter this code below to get the 'last-round' value printed to the console:</p>
    <pre class="overflow-auto shadow-md"><code>last_round = status['last-round']
print(last_round)</code></pre>
  
  
      <hr><form class="quiz-form">
     <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to access the value associated with the key 'customer-name' in a dictionary?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_dictionary.customer-name</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) my_dictionary['customer-name']</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) my_dictionary('customer-name')</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_dictionary[customer-name]</label><br>
  
          <h3>Question 2</h3>
          <p>What is the command to view the Algorand node token in the terminal?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) cat algod.net</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) cat algod.token</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) cat node.token</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) cat algod.port</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the value of 'last_round' if the key 'last-round' in the status dictionary is 1000?</p>
           <pre class="overflow-auto shadow-md"><code>status = {'last-round': 1000}
last_round = status['last-round']
print(last_round)
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) '1000'</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 1000</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 999</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) None</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct way to initialize an AlgodClient instance using a public Algorand testnet node?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) algod_client = AlgodClient('', 'http://localhost:4001')</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) algod_client = AlgodClient('', 'https://testnet-api.algonode.cloud')</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) algod_client = AlgodClient('my_token', 'https://mainnet-api.algonode.cloud')</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) algod_client = AlgodClient('my_token', 'http://127.0.0.1:8080')</label><br>
  
          
      </form>
    `,
    initialCode: `# Using public Algorand testnet with empty token
from algosdk.v2client.algod import AlgodClient
  
algod_token = ''
algod_server = 'https://testnet-api.algonode.cloud'
  
# Initialize AlgodClient
algod_client = AlgodClient(algod_token, algod_server)
  
# Fetch and print status from the public testnet
try:
    status = algod_client.status()
    print(f"Connected to public Algorand testnet! Last round: {status['last-round']}")
except Exception as e:
    print(f"Failed to connect to public testnet: {e}")
  `,
    // editable: false,
    // output: 'Connected to public Algorand testnet! Last round: 1234567',
  },
  {
    id: 20,
    language: 'Python',
    title: 'Installation and Setup',
    content: `<h2>Getting Started with Discord Bot Development on the Algorand Blockchain</h2>
        <p>This tutorial will walk you through the installation and setup needed to start building a Discord bot for the Algorand blockchain. The steps outlined below cover essential tools, libraries, and additional resources to ensure a smooth start.</p>
        
        <h2>Resources</h2>
        <ul class="inText">
          <li>YouTube Tutorial: <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
        <iframe
            class="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/z9lZ_ypTZzA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div></li>
          <li>Download Python at <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a> 
          <ul><li>(Ensure 'Add Python to PATH' is selected during installation)</li></li></ul>
          <li>Install Visual Studio Code at <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a></li>
          <li>Python IntelliSense Extension for VS Code: Install within VS Code for enhanced Python support</li>
        </ul>
    
        <h2>Installing Essential Libraries</h2>
        <p>Install the following libraries in your terminal:</p>
        <pre class="overflow-auto shadow-md"><code>pip install aiohttp</code>
<code>pip install algokit</code>
<code>pip install py-algorand-sdk</code>
<code>pip install algorand-python</code>
<code>pip install python-dotenv</code></pre>
        <p><strong>Note:</strong> If you encounter errors during Algokit installation regarding missing C++ tools, please follow the instructions in the video and install the <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank">Microsoft Visual C++ Build Tools</a>.</p>
    
        <h2>Test Contract Example</h2>
        <p>Create a new Python file called <code>testcontract.py</code> and add the following code to define a simple contract:</p>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract
from algopy.arc4 import abimethod
    
class TestContract(ARC4Contract):
    def __init__(self) -> None:
        pass

    @abimethod
    def test(self) -> None:
        pass</code></pre>
    <p>Compile the contract with the following terminal command:</p>
    <pre class="overflow-auto shadow-md"><code>algokit compile py testcontract.py</code></pre>
    <p>If the approval and clear TEAL files are generated successfully, your setup is complete, and you can proceed with the tutorial series.</p>

    <h2>Running Your Own Node</h2>
    <p>If you wish to run your own Algorand node rather than using Algonode, refer to the tutorial playlist. Note: Based on community feedback, we've shifted from a Discord bot-focused series to a PUYA-focused series. Only two videos were released for the Discord bot series before this shift. Start with <a href="https://www.youtube.com/watch?v=JjmH-KA7UcQ&list=PL5aELASDGbIAw8QqqdGoc9y2zqwsr_J4L&index=1" target="_blank">the first video in the new series</a>, which includes node installation for Windows.</p>
    
    <h2>Visual Studio Code - Code Editing</h2>
    <p>Download Visual Studio Code to edit your code efficiently, and install the Python IntelliSense extension to help with code completion and suggestions.</p>
    <p>This tutorial guides you through developing Discord bots for the Algorand blockchain. It’s designed to complement the YouTube tutorial series.</p>
    <h2>YouTube Tutorial</h2>
    <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
    <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/JjmH-KA7UcQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

    
    <h2>Installing Dependencies</h2>
    <h3>Using Regular Terminal (not Ubuntu)</h3>
    <ul class="inText">
        <li><strong>PIP Installation:</strong></li>
    </ul>
    <pre class="overflow-auto shadow-md">
<code>curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</code>
<code>python get-pip.py</code></pre>
    <ul class="inText">
        <li><strong>AIOHTTP (required before installing Discord.py):</strong></li>
        </ul>
        <pre class="overflow-auto shadow-md">
<code>pip install aiohttp>=3.9.0b0</code></pre>
        <ul class="inText">
            <li><strong>Discord.py:</strong></li>
        </ul>
        <pre class="overflow-auto shadow-md">
<code>pip install discord.py</code></pre>
        <ul class="inText">
            <li><strong>Python AlgoSDK:</strong></li>
        </ul>
        <pre class="overflow-auto shadow-md">
<code>pip3 install py-algorand-sdk</code></pre>
        
        <h3>Using Ubuntu Terminal</h3>
        <h4>Algorand Node Installation</h4>
        <pre class="overflow-auto shadow-md"><code>sudo apt-get update
sudo apt-get install -y gnupg2 curl software-properties-common
curl -o - https://releases.algorand.com/key.pub | sudo tee /etc/apt/trusted.gpg.d/algorand.asc
sudo add-apt-repository "deb [arch=amd64] https://releases.algorand.com/deb/ stable main"
sudo apt-get update
sudo apt-get install -y algorand-devtools</code></pre>
        
        <h4>Preparing & Running Algorand Node</h4>
        <pre class="overflow-auto shadow-md"><code>mkdir ~/node 
cd ~/node 
curl https://raw.githubusercontent.com/algorand/go-algorand/rel/stable/cmd/updater/update.sh -O 
chmod 744 update.sh 
./update.sh -i -c stable -p ~/node -d ~/node/data -n 
goal node start -d data 
goal node catchup <a href="https://algorand-catchpoints.s3.us-east-2.amazonaws.com/channel/mainnet/latest.catchpoint" target="_blank">Get Catchpoint from Mainnet</a> -d data</code></pre>
        
        <h4>Algorand Node Commands</h4>
        <ul class="inText">
            <li><strong>Start Node:</strong> <code>goal node start -d data</code></li>
            <li><strong>Restart Node:</strong> <code>goal node restart -d data</code></li>
            <li><strong>Stop Node:</strong> <code>goal node stop -d data</code></li>
            <li><strong>Catchup Node:</strong> <code>goal node catchup [Catchpoint Link] -d data</code></li>
        </ul>
        
        <h4>Obtain Algorand Node Token & Port</h4>
        <pre class="overflow-auto shadow-md"><code>cd node/data
cat algod.token (Displays token)
cat algod.net</code> (Displays port)</pre>
        
        <h4>Basic Terminal Commands</h4>
        <ul class="inText">
            <li><strong>Clear Terminal:</strong> <code>clear</code></li>
            <li><strong>Create Folder:</strong> <code>mkdir FolderName</code></li>
            <li><strong>List Directories:</strong> <code>ls</code></li>
            <li><strong>Change Directory:</strong> <code>cd FolderName</code></li>
            <li><strong>Move Up One Directory:</strong> <code>cd ..</code></li>
            <li><strong>Delete Directory:</strong> <code>rm -r FolderName</code></li>
            <li><strong>View File Contents:</strong> <code>cat FileName</code></li>
        </ul>
        
        <h2>Useful Links</h2>
        <ul class="inText">
            <li><a href="https://www.python.org/downloads/" target="_blank">Install Python (Select 'Add Python to PATH')</a></li>
            <li><a href="https://code.visualstudio.com/Download" target="_blank">Install Visual Studio Code</a></li>
            <li><a href="https://www.microsoft.com/store/productId/9MTTCL66CPXJ?ocid=pdpshare" target="_blank">Microsoft Store Ubuntu LTS</a></li>
            <li><a href="https://developer.algorand.org/docs/run-a-node/setup/install/" target="_blank">Algorand Node Documentation</a></li>
            <li><a href="https://algorand-catchpoints.s3.us-east-2.amazonaws.com/channel/mainnet/latest.catchpoint" target="_blank">Algorand Node Mainnet Catchpoint</a></li>
            <li><a href="https://discord.com/developers" target="_blank">Discord Developer Portal</a></li>
        </ul>
        
        <hr><form class="quiz-form">
            <h1>Quiz</h1>
            <h3>Question 1</h3>
            <p>Which package should be installed before installing discord.py?</p>
            <input type="radio" id="q1a" name="q1" value="a">
            <label for="q1a" class="incorrect">a) py-algorand-sdk</label><br>
            <input type="radio" id="q1b" name="q1" value="b">
            <label for="q1b" class="correct">b) aiohttp>=3.9.0b0</label><br>
            <input type="radio" id="q1c" name="q1" value="c">
            <label for="q1c" class="incorrect">c) Visual Studio Code</label><br>
            <input type="radio" id="q1d" name="q1" value="d">
            <label for="q1d" class="incorrect">d) Node</label><br>
            
            <h3>Question 2</h3>
            <p>What command starts the Algorand node?</p>
            <input type="radio" id="q2a" name="q2" value="a">
            <label for="q2a" class="incorrect">a) mkdir node</label><br>
            <input type="radio" id="q2b" name="q2" value="b">
            <label for="q2b" class="correct">b) goal node start -d data</label><br>
            <input type="radio" id="q2c" name="q2" value="c">
            <label for="q2c" class="incorrect">c) chmod 744 update.sh</label><br>
            <input type="radio" id="q2d" name="q2" value="d">
            <label for="q2d" class="incorrect">d) apt-get update</label><br>
        </form>
        `,
    initialCode: ``,
  },

  {
    id: 40,
    language: 'Python',
    title: 'Speed Run Variables',
    content: `<h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/AXohx-PI1CU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <p>Python offers various data types to store information:</p>
        <ul class=inText>
            <li><strong>Integer</strong>: Whole numbers without decimals (e.g., <code>10</code>).</li>
            <li><strong>String</strong>: Text enclosed in quotes (e.g., <code>"Hello"</code>).</li>
            <li><strong>Float</strong>: Numbers with decimals (e.g., <code>3.14</code>).</li>
            <li><strong>Boolean</strong>: Logical values <code>True</code> or <code>False</code>.</li>
            <li><strong>List</strong>: Ordered collection in square brackets (e.g., <code>[1, 2, 3]</code>).</li>
            <li><strong>Dictionary</strong>: Key-value pairs in curly braces (e.g., <code>{"key": "value"}</code>).</li>
            <li><strong>Tuple</strong>: Immutable ordered collection in parentheses (e.g., <code>(1, 2, 3)</code>).</li>
        </ul>
        
        <pre class="overflow-auto shadow-md"><code>my_number = 1000        # Integer
my_text = "Hello!"      # String
my_float = 7.5          # Float
my_bool = True          # Boolean
my_list = [1, 2, 3]     # List
my_dict = {"a": 1}      # Dictionary
my_tuple = (1, 2, 3)    # Tuple</code></pre>
        
        <p>Variables are names assigned to data. Use descriptive names and follow naming rules:</p>
        <ul class=inText>
            <li>Cannot start with a number.</li>
            <li>No spaces; use underscores (<code>_</code>).</li>
            <li>No special characters except underscores.</li>
        </ul>
        
        <p>Examples of valid variable names:</p>
        <pre class="overflow-auto shadow-md"><code>item_cost = 1.0
supply_remaining = 2_500_000_000
cto_name = "John Woods"
quarter_value = 0.25</code></pre>
        
        <p>Invalid variable names:</p>
        <pre class="overflow-auto shadow-md"><code>3variable = 5      # Invalid
my-variable = 6    # Invalid
my variable = 7    # Invalid</code></pre>
        
        <h2>Arithmetic Operations</h2>
        
        <p>Basic arithmetic with integers and floats:</p>
        <pre class="overflow-auto shadow-md"><code>a = 10
b = 3
print(a + b)          # 13
print(a - b)          # 7
print(a * b)          # 30
print(a / b)          # 3.333...
print(a // b)         # 3
print(a % b)          # 1
print(a ** b)         # 1000</code></pre>
        
        <p>String operations:</p>
        <pre class="overflow-auto shadow-md"><code>greeting = "Hello, " + "World!"
print(greeting)        # "Hello, World!"
repeat = "Hi" * 3
print(repeat)          # "HiHiHi"</code></pre>
        
        <p>Data mutability:</p>
        <ul class=inText>
            <li><strong>Mutable</strong>: Lists, Dictionaries.</li>
            <li><strong>Immutable</strong>: Tuples, Strings.</li>
        </ul>
        
        <p>Attempting to modify an immutable type results in an error:</p>
        <pre class="overflow-auto shadow-md"><code>my_tuple = (1, 2)
my_tuple[0] = 3       # Error: 'tuple' object does not support item assignment</code></pre>
        
        <hr><form class="quiz-form">
        <h1>Quiz</h1>
            <h3>Question 1</h3>
            <p>Which data type is used for whole numbers in Python?</p>
            <input type="radio" id="q1a" name="q1" value="a">
            <label for="q1a" class="incorrect">a) String</label><br>
            <input type="radio" id="q1b" name="q1" value="b">
            <label for="q1b" class="incorrect">b) Float</label><br>
            <input type="radio" id="q1c" name="q1" value="c">
            <label for="q1c" class="correct">c) Integer</label><br>
            <input type="radio" id="q1d" name="q1" value="d">
            <label for="q1d" class="incorrect">d) Boolean</label><br>
    
            <h3>Question 2</h3>
            <p>Which variable name is valid in Python?</p>
            <input type="radio" id="q2a" name="q2" value="a">
            <label for="q2a" class="incorrect">a) 3variable</label><br>
            <input type="radio" id="q2b" name="q2" value="b">
            <label for="q2b" class="incorrect">b) my-variable</label><br>
            <input type="radio" id="q2c" name="q2" value="c">
            <label for="q2c" class="incorrect">c) my variable</label><br>
            <input type="radio" id="q2d" name="q2" value="d">
            <label for="q2d" class="correct">d) my_variable</label><br>
    
            <h3>Question 3</h3>
            <p>What is the output of the following code?</p>
            <pre class="overflow-auto shadow-md"><code>string = "Hello"
result = string * 3
print(result)</code></pre>
            <input type="radio" id="q3a" name="q3" value="a">
            <label for="q3a" class="correct">a) HelloHelloHello</label><br>
            <input type="radio" id="q3b" name="q3" value="b">
            <label for="q3b" class="incorrect">b) Hello, Hello, Hello</label><br>
            <input type="radio" id="q3c" name="q3" value="c">
            <label for="q3c" class="incorrect">c) Error</label><br>
            <input type="radio" id="q3d" name="q3" value="d">
            <label for="q3d" class="incorrect">d) Hello*3</label><br>
    
            <h3>Question 4</h3>
            <p>Which data type is immutable in Python?</p>
            <input type="radio" id="q4a" name="q4" value="a">
            <label for="q4a" class="incorrect">a) List</label><br>
            <input type="radio" id="q4b" name="q4" value="b">
            <label for="q4b" class="incorrect">b) Dictionary</label><br>
            <input type="radio" id="q4c" name="q4" value="c">
            <label for="q4c" class="correct">c) Tuple</label><br>
            <input type="radio" id="q4d" name="q4" value="d">
            <label for="q4d" class="incorrect">d) Set</label><br>
            
        </form>
        `,
    initialCode: `a = 10\nb = 3.5\nprint(a + b)`,
  },

  {
    id: 41,
    language: 'Python',
    title: 'Speed Run Functions and Classes',
    content: `<h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/6DDU8wdZzOE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div><p>Functions in Python are reusable blocks of code that perform specific tasks, enhancing modularity and readability.</p>
    
    <p>Functions and classes are fundamental building blocks in Python for creating reusable and modular code.</p>

    <h2>Functions</h2>
    <p>Functions are reusable blocks of code that perform specific tasks.</p>
    <p><strong>Defining a Function:</strong> Use the <code>def</code> keyword.</p>

    <pre class="overflow-auto shadow-md"><code>def greet():
    print("Hello, world!")
greet()  # Output: "Hello, world!"</code></pre>

    <p><strong>Functions with Parameters:</strong> Pass data into functions using parameters.</p>

    <pre class="overflow-auto shadow-md"><code>def greet(name):
    print(f"Hello, {name}!")
greet("Alice")  # Output: "Hello, Alice!"</code></pre>

    <p><strong>Returning Values:</strong> Use <code>return</code> to output a value from a function.</p>

    <pre class="overflow-auto shadow-md"><code>def add(a, b):
    return a + b
result = add(3, 5)
print(result)  # Output: 8</code></pre>

    <p><strong>Default Parameters:</strong> Assign default values to parameters.</p>

    <pre class="overflow-auto shadow-md"><code>def greet(name="world"):
    print(f"Hello, {name}!")
greet()         # Output: "Hello, world!"
greet("Bob")    # Output: "Hello, Bob!"</code></pre>

    <p><strong>Variable Number of Arguments:</strong> Use <code>*args</code> and <code>**kwargs</code> for flexible arguments.</p>

    <pre class="overflow-auto shadow-md"><code>def add(*args):
    return sum(args)
print(add(1, 2, 3))  # Output: 6

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_info(name="Alice", age=30)</code></pre>

    <h2>Classes</h2>
    <p>Classes are blueprints for creating objects (instances), encapsulating data and functions together.</p>
    <p><strong>Defining a Class:</strong> Use the <code>class</code> keyword.</p>

    <pre class="overflow-auto shadow-md"><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}.")

person1 = Person("Alice", 30)
person1.greet()  # Output: "Hello, my name is Alice."</code></pre>

    <p><strong>Class Components:</strong></p>
    <ul class=inText>
        <li><strong>Constructor (<code>__init__</code>):</strong> Initializes new objects.</li>
        <li><strong>Instance Variables:</strong> Data unique to each instance (<code>self.name</code>, <code>self.age</code>).</li>
        <li><strong>Methods:</strong> Functions defined within a class (<code>greet</code>).</li>
    </ul>

    <p><strong>Inheritance:</strong> Classes can inherit from other classes.</p>

    <pre class="overflow-auto shadow-md"><code>class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

    def display_id(self):
        print(f"My employee ID is {self.employee_id}.")

employee1 = Employee("Bob", 25, "E123")
employee1.greet()         # Output: "Hello, my name is Bob."
employee1.display_id()    # Output: "My employee ID is E123."</code></pre>

    <p><strong>Encapsulation:</strong> Use underscores to indicate private variables (convention).</p>

    <pre class="overflow-auto shadow-md"><code>class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Protected attribute

    def deposit(self, amount):
        self._balance += amount

    def get_balance(self):
        return self._balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500</code></pre>

    <hr><form class="quiz-form">
<h1>Quiz</h1>

    <h3>Question 1</h3>
    <p>What will be the output of the following code snippet?</p>
    <pre class="overflow-auto shadow-md"><code>def func(a, b=2, c=3):
    return a + b * c

result = func(1, c=4)
print(result)</code></pre>
    <input type="radio" id="q1a" name="q1" value="a">
    <label for="q1a" class="incorrect">a) 13</label><br>
    <input type="radio" id="q1b" name="q1" value="b">
    <label for="q1b" class="correct">b) 9</label><br>
    <input type="radio" id="q1c" name="q1" value="c">
    <label for="q1c" class="incorrect">c) 14</label><br>
    <input type="radio" id="q1d" name="q1" value="d">
    <label for="q1d" class="incorrect">d) Error</label><br>

    <h3>Question 2</h3>
    <p>Given the following class definition, what will be the output?</p>
    <pre class="overflow-auto shadow-md"><code>class Counter:
    count = 0

    def __init__(self):
        Counter.count += 1

c1 = Counter()
c2 = Counter()
print(Counter.count)</code></pre>
    <input type="radio" id="q2a" name="q2" value="a">
    <label for="q2a" class="correct">a) 2</label><br>
    <input type="radio" id="q2b" name="q2" value="b">
    <label for="q2b" class="incorrect">b) 1</label><br>
    <input type="radio" id="q2c" name="q2" value="c">
    <label for="q2c" class="incorrect">c) 0</label><br>
    <input type="radio" id="q2d" name="q2" value="d">
    <label for="q2d" class="incorrect">d) Error</label><br>

    <h3>Question 3</h3>
    <p>Which of the following statements is true about methods in Python classes?</p>
    <input type="radio" id="q3a" name="q3" value="a">
    <label for="q3a" class="correct">a) Methods can modify the state of an object.</label><br>
    <input type="radio" id="q3b" name="q3" value="b">
    <label for="q3b" class="incorrect">b) Methods cannot access instance variables.</label><br>
    <input type="radio" id="q3c" name="q3" value="c">
    <label for="q3c" class="incorrect">c) Methods must return a value.</label><br>
    <input type="radio" id="q3d" name="q3" value="d">
    <label for="q3d" class="incorrect">d) Methods cannot call other methods within the same class.</label><br>

    <h3>Question 4</h3>
    <p>What is the output of the following code snippet involving closures?</p>
    <pre class="overflow-auto shadow-md"><code>def outer():
    x = "local"
    def inner():
        nonlocal x
        x = "nonlocal"
    inner()
    print("x =", x)

outer()</code></pre>
    <input type="radio" id="q4a" name="q4" value="a">
    <label for="q4a" class="incorrect">a) x = local</label><br>
    <input type="radio" id="q4b" name="q4" value="b">
    <label for="q4b" class="correct">b) x = nonlocal</label><br>
    <input type="radio" id="q4c" name="q4" value="c">
    <label for="q4c" class="incorrect">c) x = </label><br>
    <input type="radio" id="q4d" name="q4" value="d">
    <label for="q4d" class="incorrect">d) Error</label><br>
    
</form>

    `,
    initialCode: `class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def greet(self):\n        print(f"Hello, {self.name}!")\n\nperson = Person("Alice")\nperson.greet()`,
  },

  {
    id: 21,
    language: 'Python',
    title: 'Compiling Launching and Interacting with Your First Contract',
    content: `
    <p>In this chapter, you'll learn how to compile, launch, and interact with a basic smart contract on the Algorand blockchain. You'll set up essential tools, generate and fund accounts, deploy your contract, and make your first interaction using Python.</p>
    <h2>YouTube Tutorial</h2>
<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
    <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/SJrR47eho7Y"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
    <h2>Compiling</h2>
    <p>Make sure you have Python installed, and then install <strong>algokit</strong> and <strong>algorand-python</strong> via Python's pip installer:</p>
    <pre class="overflow-auto shadow-md"><code>pip install algokit
pip install algorand-python</code></pre>
    
    <p>Use <code>algokit compile py helloWorldContract.py</code> in the terminal line (assuming your contract is named <code>helloWorldContract.py</code>) to generate your approval and clear TEAL files, as well as the ARC32 JSON for the contract. We will use these to launch and interact with the contract later.</p>

    <h3>helloWorldContract.py</h3>
    <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String
from algopy.arc4 import abimethod

class HelloWorldContract(ARC4Contract):
    
    @abimethod
    def hello(self, name: String) -> String:
        return "Hello, " + name</code></pre>

    <p>Once you have your approval and clear TEAL files, as well as your ARC32 JSON, it's time to launch your contract!</p>

    <h2>Generating and Funding an Account</h2>
    <p>Generate and fund an account using the code below. Use the testnet dispenser at <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>.</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)</code></pre>

    <p>Then, place your private key and the public testnet API and URL provided by nodely.io (as indicated in the tutorial) into your <code>.env</code> file.</p>

    <p><strong>Note:</strong> Feel free to reuse this template when launching future contracts, but remember to adjust <code>approval_teal_file_name</code> and <code>clear_teal_file_name</code> variables, as well as the <code>global</code> and <code>local</code> state <code>num_uints</code> and <code>num_bytes</code> values for future contracts.</p>
<h2>Setting Environment Variables (.env)</h2>
      <p>Set up environment variables in a <code>.env</code> file. This includes the Algod token and server details, your private key, and the application ID of your contract:</p>
      <pre class="overflow-auto shadow-md"><code># Algod Token is blank when using Nodely API
algod_token=
algod_server=https://testnet-api.4160.nodely.dev

# Private key for generated account
private_key=ENTER PRIVATE KEY FOR ACCOUNT HERE

# Application ID from contract generated by LaunchSmartContract.py
app_id=ENTER GENERATED APP ID HERE</code></pre>
    <h2>Launching the Contract</h2>
    <pre class="overflow-auto shadow-md"><code>import os
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from base64 import b64decode
from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.logic import get_application_address
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

algod_client = AlgodClient(algod_token, algod_server)
path = Path(__file__).parent / './HelloWorldContract.arc32.json'
app_id = int(os.getenv('app_id'))
my_signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=my_signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()
application_client.compose_call(atc, call_abi_method='hello', name='AlgoLearn Community')

result = atc.execute(algod_client, 2)
print(result.abi_results[0].tx_id)
print(result.abi_results[0].return_value)</code></pre>
    
    <p>Once your contract is launched, place your new <code>app_id</code> into your <code>.env</code> file, and try interacting with it using the application client methods above!</p>
  `,
    initialCode: ``,
  },
  {
    id: 22,
    language: 'Python',
    title: 'Generating Funding and Interacting with Your First Contract',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video to understand the steps in deploying your first Algorand smart contract:</p>
  <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
    <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/SJrR47eho7Y"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
      <h2>Generating an Account</h2>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account
  
  private_key, address = generate_account()
  print(private_key, address)</code></pre>
  
      <h2>Funding the Account</h2>
      <p>To fund the account, visit the Algorand testnet dispenser: <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a></p>
  
      <h2>Setting Environment Variables (.env)</h2>
      <p>Set up environment variables in a <code>.env</code> file. This includes the Algod token and server details, your private key, and the application ID of your contract:</p>
      <pre class="overflow-auto shadow-md"><code># Algod Token is blank when using Nodely API
algod_token=
algod_server=https://testnet-api.4160.nodely.dev

# Private key for generated account
private_key=ENTER PRIVATE KEY FOR ACCOUNT HERE

# Application ID from contract generated by LaunchSmartContract.py
app_id=ENTER GENERATED APP ID HERE</code></pre>
  
      <h2>Writing the Hello World Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String
from algopy.arc4 import abimethod

class HelloWorldContract(ARC4Contract):
    
@abimethod
def hello(self, name: String) -> String:
    return "Hello, " + name</code></pre>
  
      <h2>Launching the Contract</h2>
      <p><strong>Note:</strong> Make sure the contract name matches the approval and clear TEAL file names.</p>
      <p>If your class is defined as:</p>
      <pre class="overflow-auto shadow-md"><code>class HelloWorldContract(ARC4Contract):</code></pre>
      <p>Your approval and clear TEAL file names in <code>LaunchSmartContract.py</code> should be:</p>
      <pre class="overflow-auto shadow-md"><code>approval_teal_file_name = 'HelloWorldContract.approval.teal'
clear_teal_file_name = 'HelloWorldContract.clear.teal'</code></pre>
  
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from base64 import b64decode
from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.logic import get_application_address
from algosdk.util import microalgos_to_algos, algos_to_microalgos
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

algod_client = AlgodClient(algod_token, algod_server)

approval_teal_file_name = 'HelloWorldContract.approval.teal'
clear_teal_file_name = 'HelloWorldContract.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'./{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=0, num_byte_slices=0)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

params = algod_client.suggested_params()

txn = ApplicationCreateTxn(
    sender=address,
    sp=params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema,
)

signed_txn = txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_txn)
print(f'Contract Deployed Tx ID: {tx_id}')

wait_for_confirmation(algod_client, tx_id)
tx_info = algod_client.pending_transaction_info(tx_id)

app_id = tx_info['application-index']
print(f'App ID: {app_id}')

app_address = get_application_address(app_id)
print(f'App Address: {app_address}')

amount_to_send = algos_to_microalgos(0.1)

payment_txn = PaymentTxn(
    sender=address,
    sp=params,
    receiver=app_address,
    amt=amount_to_send
)

signed_payment_tx = payment_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_payment_tx)
print(f'Application funded with 0.1 Algo for MBR: {tx_id}')</code></pre>

    <h2>Interacting with the Hello World Contract</h2>
    <pre class="overflow-auto shadow-md"><code>import os
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner
from algokit_utils import ApplicationClient
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

algod_client = AlgodClient(algod_token, algod_server)
path = Path(__file__).parent / './HelloWorldContract.arc32.json'
app_id = int(os.getenv('app_id'))
my_signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=my_signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()
application_client.compose_call(atc, call_abi_method='hello', name='AlgoLearn Community')

result = atc.execute(algod_client, 2)
print(result.abi_results[0].tx_id)
print(result.abi_results[0].return_value)</code></pre>
    `,
    initialCode: ``,
  },
  {
    id: 23,
    language: 'Python',
    title: 'Creating Launching and Interacting with an Archer Smart Contract',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch these videos to understand the process of setting up the Archer smart contract:</p>
      <p>Part 1:</p>
      <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
    <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/7MPmd7yZe78"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
      <p>Part 2:</p>
      <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/BAINcnpxBrg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>


      <h2>Generating Accounts</h2>
      <p>This contract will require two accounts. Use the code below to generate them:</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account
  
private_key, address = generate_account()
print(private_key, address)</code></pre>
  
      <h2>Funding the Accounts</h2>
      <p>To fund the accounts, visit the Algorand testnet dispenser: <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a></p>
  
      <h2>Setting Environment Variables (.env)</h2>
      <p>Define the following environment variables:</p>
      <pre class="overflow-auto shadow-md"><code># Private keys for both generated accounts
private_key=ENTER FIRST PRIVATE KEY
private_key_2=ENTER SECOND PRIVATE KEY
  
# Algod token and server (Nodely API)
algod_token=
algod_server=https://testnet-api.4160.nodely.dev

# Application ID generated by LaunchSmartContract.py
app_id=722568747</code></pre>

    <h2>Archer Class Example</h2>
      <pre class="overflow-auto shadow-md"><code>class Archer:
    def __init__(self, x):
        self.arrows = x
        self.bow_equipped = False
        
    def equip_bow(self):
        assert self.bow_equipped == False
        self.bow_equipped = True
        
    def unequip_bow(self):
        self.bow_equipped = False
        
    def shoot_arrow(self):
        assert self.bow_equipped == True
        self.arrows -= 1
      
  
my_archer = Archer(10)
print(my_archer.arrows)
print(my_archer.bow_equipped)

my_archer.equip_bow()
print(my_archer.bow_equipped)

my_archer.unequip_bow()
print(my_archer.bow_equipped)

for i in range(5):
    my_archer.shoot_arrow()
    print(my_archer.arrows)</code></pre>

      <h2>Archer Smart Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, GlobalState, LocalState, UInt64, Txn
from algopy.arc4 import abimethod, String

class Archer(ARC4Contract):
    def __init__(self) -> None:
        self.arrows = LocalState(UInt64)
        self.bow_equipped = LocalState(bool)
        self.archersCreated = GlobalState(UInt64(0))
        
    @abimethod(allow_actions=['OptIn'])
    def createArcher(self, x: UInt64) -> tuple[String, String, UInt64, String, UInt64]:
        self.arrows[Txn.sender] = x
        self.bow_equipped[Txn.sender] = False
        self.archersCreated.value += UInt64(1)
        
        return String('An Archer was Created!'), String("Archer has this many arrows: "), x, String("Contract has created this many archers so far: "), self.archersCreated.value
        
    @abimethod()
    def EquipBow(self) -> tuple[String, bool]:
        assert self.bow_equipped[Txn.sender] == False
        self.bow_equipped[Txn.sender] = True
        return String('Archer Equipped their Bow: '), self.bow_equipped[Txn.sender]
        
    @abimethod()
    def UnequipBow(self) -> tuple[String, bool]:
        assert self.bow_equipped[Txn.sender] == True
        self.bow_equipped[Txn.sender] = False
        return String('Archer Unequipped their Bow: '), self.bow_equipped[Txn.sender]

    @abimethod()
    def ShootArrow(self) -> tuple[String, String, UInt64]:
        assert self.bow_equipped[Txn.sender] == True
        assert self.arrows[Txn.sender] > UInt64(0)
        self.arrows[Txn.sender] -= UInt64(1)
        return String('Archer shot an arrow!'), String('Arrows Remaining: '), self.arrows[Txn.sender]</code></pre>
  
      <h2>Launching the Contract</h2>
      <p><strong>Note:</strong> Ensure the contract name matches the approval and clear TEAL file names.</p>
      <p>If your class is defined as:</p>
      <pre class="overflow-auto shadow-md"><code>class Archer(ARC4Contract):</code></pre>
      <p>Your approval and clear TEAL file names in <code>LaunchSmartContract.py</code> should be:</p>
      <pre class="overflow-auto shadow-md"><code>approval_teal_file_name = 'Archer.approval.teal'
clear_teal_file_name = 'Archer.clear.teal'</code></pre>
  
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from base64 import b64decode
from algosdk.transaction import StateSchema, ApplicationCreateTxn, OnComplete, wait_for_confirmation
from algosdk import logic
from dotenv import load_dotenv

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)

address = address_from_private_key(private_key)

params = algod_client.suggested_params()

approval_teal_file_name = 'Archer.approval.teal'
clear_teal_file_name= 'Archer.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'./{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=1, num_byte_slices=0)
local_schema = StateSchema(num_uints=2, num_byte_slices=0)

tx = ApplicationCreateTxn(
    sender=address,
    sp=params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema
)

signed_txn = tx.sign(private_key)

try:
    tx_id = algod_client.send_transaction(signed_txn)
except Exception as e:
    print("Failed due to:", e)
    
print(f'Tx ID: {tx_id}')
wait_for_confirmation(algod_client, tx_id)
tx_info = algod_client.pending_transaction_info(tx_id)
application_id = tx_info['application-index']
print(f'Application ID: {application_id}')

app_address = logic.get_application_address(application_id)
print(f'Application Address: {app_address}')</code></pre>
  
      <h2>Interacting with the Archer Smart Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AccountTransactionSigner, AtomicTransactionComposer
from algosdk.account import address_from_private_key
from algosdk.transaction import OnComplete
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key_2')

algod_client = AlgodClient(node_token, node_server)
path = Path(__file__).parent / './Archer.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

application_client.compose_call(atc, call_abi_method='createArcher', transaction_parameters={'on_complete': OnComplete.OptInOC}, x=5)
application_client.compose_call(atc, call_abi_method='EquipBow')
application_client.compose_call(atc, call_abi_method='UneqipBow')
application_client.compose_call(atc, call_abi_method='EquipBow', transaction_parameters={'note': 'Extra Equip Bow Transaction'})
application_client.compose_call(atc, call_abi_method='ShootArrow')

result = atc.execute(algod_client, 2)
tx_ids = [result.abi_results[i].tx_id for i in range(0, len(result.abi_results))]
abi_results = [result.abi_results[i].return_value for i in range(0, len(result.abi_results))]

for i in range(len(result.abi_results)):
    print(tx_ids[i])
    print(abi_results[i])
    print('\\n')</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 35,
    language: 'Python',
    title: 'Transaction Comprehension',
    content: `
        <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/jeHALmgfB7w"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <h2>Compiling Contracts</h2>
        <p>Compile contracts with:</p>
        <pre class="overflow-auto shadow-md"><code>algokit compile py filename.py</code></pre>

        <h3>Generate Two Accounts</h3>
        <p>Create two accounts and add their private keys to your <code>.env</code> file.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(address)</code></pre>

        <h3>Generate One Asset</h3>
        <p>Create one asset and place its ID in your <code>.env</code> file.</p>
        <p><em>Note: Remember the account that owns the asset, as it will be used for asset transfers later.</em></p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetCreateTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

asset_create_txn = AssetCreateTxn(
    sender=address,
    sp=params,
    total=10,
    decimals=0,
    default_frozen=False,
    manager=address,
    reserve=address,
    asset_name = 'Test Asset One',
    unit_name= 'TEST#1',
)

signed_asset_create_txn = asset_create_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_asset_create_txn)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)
tx_info = algod_client.pending_transaction_info(tx_id)
print(tx_info)</code></pre>

        <h2>Launching Contracts</h2>
        <p><em>Note: Adjust approval and clear teal filenames, as well as global/local states, as needed.</em></p>
        <p>In this tutorial, we use a second contract, <code>SecondApp</code>, which has 1 local state <code>uint</code>.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from algosdk import logic
from dotenv import load_dotenv
import base64
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
algod_client = AlgodClient(node_token, node_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

approval_teal_file_name = 'TransactionComp.approval.teal'
clear_teal_file_name = 'TransactionComp.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = base64.b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = base64.b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=0, num_byte_slices=0)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

txn = ApplicationCreateTxn(
    sender = address,
    sp = params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema,
)
signed_txn = txn.sign(private_key)

try:
    txid = algod_client.send_transaction(signed_txn)
except Exception as e:
    print(e)
    
print(f'Tx ID: {txid}')
wait_for_confirmation(algod_client, txid)
tx_info = algod_client.pending_transaction_info(txid)
print(f'App ID: {tx_info['application-index']}')

app_address = logic.get_application_address(tx_info['application-index'])
print(f'Application Address: {app_address}')


activate_contract = PaymentTxn(
    sender = address,
    sp = params,
    receiver = app_address,
    amt = 100_000
)

signed_activation = activate_contract.sign(private_key)
activation_tx = algod_client.send_transaction(signed_activation)
print(f'MBR For Contract to be Active Account Funded: {activation_tx}')
</code></pre>

        <h3>Transaction Comprehension (TXN)</h3>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, Txn, Bytes, String
from algopy.arc4 import abimethod, Address
from algopy.arc4 import UInt64 as arc4UInt64

class TransactionComp(ARC4Contract):
    def __init__(self) -> None:
        pass
    
    @abimethod
    def txn_comprehension(self) -> tuple[Address, Address, Bytes, arc4UInt64, arc4UInt64, String, String, arc4UInt64, Address, arc4UInt64, String, Address]:
        sender = Address(Txn.sender)
        foreign_accounts = Address(Txn.accounts(1))
        app_arg_1 = Txn.application_args(0)
        txn_foreign_applications = Txn.applications(0)
        txn_foreign_application_id = arc4UInt64(txn_foreign_applications.id)
        foreign_asset_1 = Txn.assets(0)
        foreign_asset_id = arc4UInt64(foreign_asset_1.id)
        foreign_asset_name = String.from_bytes(foreign_asset_1.name)
        foreign_asset_unit_name = String.from_bytes(foreign_asset_1.unit_name)
        sender_foreign_asset_balance = arc4UInt64(foreign_asset_1.balance(Txn.sender))
        foreign_asset_creator_address = Address(foreign_asset_1.creator)
        fee_for_this_transaction = arc4UInt64(Txn.fee)
        transaction_type = String.from_bytes(Txn.type)
        transaction_id = Address(Txn.tx_id)
        return sender, foreign_accounts, app_arg_1, txn_foreign_application_id, foreign_asset_id, foreign_asset_name, foreign_asset_unit_name, sender_foreign_asset_balance, foreign_asset_creator_address, fee_for_this_transaction, transaction_type, transaction_id
        
</code></pre>
        <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.atomic_transaction_composer import AccountTransactionSigner, AtomicTransactionComposer, TransactionWithSigner
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.account import address_from_private_key
from pathlib import Path
import os
from algosdk.util import algos_to_microalgos
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

path = Path(__file__).parent / './TransactionComp.arc32.json'
app_id = int(os.getenv('app_id'))
private_key = os.getenv('private_key')
signer = AccountTransactionSigner(private_key)
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_id = 723609532

arbitrary_account = 'MXOT5NO6DVCGIS22AWEP7N5WD72RSV6QJG4OWGDOTEH3DQKCG4R4WLLMR4'

app_client.compose_call(atc, call_abi_method='txn_comprehension', transaction_parameters={'accounts': [arbitrary_account], 'foreign_assets': [asset_id]})

result = atc.execute(algod_client, 2)

all_tx_ids = [result.abi_results[i].tx_id for i in range(len(result.abi_results))]
all_abi_results = [result.abi_results[i].return_value for i in range(len(result.abi_results))]

print(all_tx_ids)
print(all_abi_results)
</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 36,
    language: 'Python',
    title: 'Inner Transaction Comprehension',
    content: `
        <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/IRhE9E53Qhc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <h2>Compiling Contracts</h2>
        <p>Compile contracts with:</p>
        <pre class="overflow-auto shadow-md"><code>algokit compile py filename.py</code></pre>

        <h3>Generate Two Accounts</h3>
        <p>Create two accounts and add their private keys to your <code>.env</code> file.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(address)</code></pre>

        <h3>Generate One Asset</h3>
        <p>Create one asset and place its ID in your <code>.env</code> file.</p>
        <p><em>Note: Remember the account that owns the asset, as it will be used for asset transfers later.</em></p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetCreateTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

asset_create_txn = AssetCreateTxn(
    sender=address,
    sp=params,
    total=10,
    decimals=0,
    default_frozen=False,
    manager=address,
    reserve=address,
    asset_name = 'Test Asset One',
    unit_name= 'TEST#1',
)

signed_asset_create_txn = asset_create_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_asset_create_txn)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)
tx_info = algod_client.pending_transaction_info(tx_id)
print(tx_info)</code></pre>

        <h2>Launching Contracts</h2>
        <p><em>Note: Adjust approval and clear teal filenames, as well as global/local states, as needed.</em></p>
        <p>In this tutorial, we use a second contract, <code>SecondApp</code>, which has 1 local state <code>uint</code>.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from algosdk import logic
from dotenv import load_dotenv
import base64
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
algod_client = AlgodClient(node_token, node_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

approval_teal_file_name = 'TransactionComp.approval.teal'
clear_teal_file_name = 'TransactionComp.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = base64.b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = base64.b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=0, num_byte_slices=0)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

txn = ApplicationCreateTxn(
    sender = address,
    sp = params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema,
)
signed_txn = txn.sign(private_key)

try:
    txid = algod_client.send_transaction(signed_txn)
except Exception as e:
    print(e)
    
print(f'Tx ID: {txid}')
wait_for_confirmation(algod_client, txid)
tx_info = algod_client.pending_transaction_info(txid)
print(f'App ID: {tx_info['application-index']}')

app_address = logic.get_application_address(tx_info['application-index'])
print(f'Application Address: {app_address}')


activate_contract = PaymentTxn(
    sender = address,
    sp = params,
    receiver = app_address,
    amt = 100_000
)

signed_activation = activate_contract.sign(private_key)
activation_tx = algod_client.send_transaction(signed_activation)
print(f'MBR For Contract to be Active Account Funded: {activation_tx}')
</code></pre>

        <h3>Inner Transaction Comprehension (ITXN and abi_calls)</h3>
        
        <h4>Inner Txn with itxn Class</h4>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, UInt64, itxn, Global
from algopy.arc4 import abimethod

class TransactionComp(ARC4Contract):
    def __init__(self) -> None:
        pass   

    @abimethod
    def inner_txn_comprehension(self) -> tuple[UInt64, UInt64, UInt64]:
        asset_config_txn = itxn.AssetConfig(
            total=1,
            unit_name="TEST#1",
            asset_name="TEST ASSET ONE",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            ).submit()        
        
        asset_config_txn_2 = itxn.AssetConfig(
            total=1,
            unit_name="TEST#2",
            asset_name="TEST ASSET TWO",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            )        
        
        asset_config_txn_3 = itxn.AssetConfig(
            total=1,
            unit_name="TEST#3",
            asset_name="TEST ASSET THREE",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            )
        
        submit_tx_1, submit_tx_2 = itxn.submit_txns(asset_config_txn_2, asset_config_txn_3)        
            
        return asset_config_txn.created_asset.id, submit_tx_1.created_asset.id, submit_tx_2.created_asset.id</code></pre>
        <pre class="overflow-auto shadow-md"><code>interact_with_contract_2.py</code></pre>

        <h4>Inner Txn with abi_call Class</h4>
        <p><em>Note: Deploy a second application and place the generated app ID in the new inner transaction method, <code>inner_txn_two</code>.</em></p>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, LocalState, Txn, UInt64, gtxn
from algopy.arc4 import abimethod

class MySecondContract(ARC4Contract):
    def __init__(self) -> None:
        self.opted_in = LocalState(UInt64)        
        
    @abimethod()
    def return_nothing(self) -> None:
        pass        
        
    @abimethod(allow_actions=['OptIn'])
    def local_state_return_something(self,
                                     payment_txn: gtxn.PaymentTransaction) -> UInt64:
        self.opted_in[Txn.sender] = UInt64(1)
        return UInt64(1)</code></pre>
        
        <p>Replace the second App ID in the contract below, compile the contract, and include the new app in the <em>Foreign Assets Array</em>.</p>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, UInt64, itxn, Global, OnCompleteAction
from algopy.arc4 import abimethod, arc4_signature, abi_call

class TransactionComp(ARC4Contract):
    def __init__(self) -> None:
        pass    

    @abimethod
    def inner_txn_two(self) -> UInt64:
        
        method_signature = arc4_signature('return_nothing()void')
        
        itxn.ApplicationCall(
            app_id=727594507,
            app_args=(method_signature,),
            on_completion=OnCompleteAction.NoOp,
            fee=Global.min_txn_fee
        ).submit()        
        
        result, txn = abi_call[UInt64](
            'local_state_return_something',
            app_id=727594507,
            on_completion=OnCompleteAction.OptIn,
            fee=Global.min_txn_fee
        )
        
        txn = abi_call(
            'return_nothing',
            app_id=727594507,
            fee=Global.min_txn_fee
        )
        
        return result
        
</code></pre>
        <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.atomic_transaction_composer import AccountTransactionSigner, AtomicTransactionComposer, TransactionWithSigner
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.account import address_from_private_key
from pathlib import Path
import os
from algosdk.util import algos_to_microalgos
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

path = Path(__file__).parent / './TransactionComp.arc32.json'
app_id = int(os.getenv('app_id'))
private_key = os.getenv('private_key')
signer = AccountTransactionSigner(private_key)
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

#asset_id = 723609532

#arbitrary_account = 'MXOT5NO6DVCGIS22AWEP7N5WD72RSV6QJG4OWGDOTEH3DQKCG4R4WLLMR4'

#app_client.compose_call(atc, call_abi_method='txn_comprehension', transaction_parameters={'accounts': [arbitrary_account], 'foreign_assets': [asset_id]})

#app_client.compose_call(
#    atc, 
#    call_abi_method='inner_txn_comprehension',
#)

second_app = int(os.getenv('second_app_id'))

app_client.compose_call(
    atc, 
    call_abi_method='inner_txn_two',
        transaction_parameters={
        'foreign_apps': [second_app]
    }
)

result = atc.execute(algod_client, 2)

all_tx_ids = [result.abi_results[i].tx_id for i in range(len(result.abi_results))]
all_abi_results = [result.abi_results[i].return_value for i in range(len(result.abi_results))]

print(all_tx_ids)
print(all_abi_results)
</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 37,
    language: 'Python',
    title: 'Group Transaction Comprehension',
    content: `
        <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/E8DAtyrW4Rw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <h3>Generate Two Accounts</h3>
        <p>Create two accounts and add their private keys to your <code>.env</code> file.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)</code></pre>

        <h3>Generate One Asset</h3>
        <p>Create one asset and place its ID in your <code>.env</code> file.</p>
        <p><em>Note: Remember the account that owns the asset, as it will be used for asset transfers later.</em></p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import AssetCreateTxn, wait_for_confirmation
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

asset_create_txn = AssetCreateTxn(
    sender=address,
    sp=params,
    total=10,
    decimals=0,
    default_frozen=False,
    manager=address,
    reserve=address,
    asset_name = 'Test Asset One',
    unit_name= 'TEST#1',
)

signed_asset_create_txn = asset_create_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_asset_create_txn)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)
tx_info = algod_client.pending_transaction_info(tx_id)
print(tx_info)</code></pre>

        <h2>Launching Contracts</h2>
        <p><em>Note: Adjust approval and clear teal filenames, as well as global/local states, as needed.</em></p>
        <p>In this tutorial, we use a second contract, <code>SecondApp</code>, which has 1 local state <code>uint</code>.</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from algosdk import logic
from dotenv import load_dotenv
import base64
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
algod_client = AlgodClient(node_token, node_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

approval_teal_file_name = 'TransactionComp.approval.teal'
clear_teal_file_name = 'TransactionComp.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = base64.b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = base64.b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=0, num_byte_slices=0)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

txn = ApplicationCreateTxn(
    sender = address,
    sp = params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema,
)
signed_txn = txn.sign(private_key)

try:
    txid = algod_client.send_transaction(signed_txn)
except Exception as e:
    print(e)
    
print(f'Tx ID: {txid}')
wait_for_confirmation(algod_client, txid)
tx_info = algod_client.pending_transaction_info(txid)
print(f'App ID: {tx_info['application-index']}')

app_address = logic.get_application_address(tx_info['application-index'])
print(f'Application Address: {app_address}')


activate_contract = PaymentTxn(
    sender = address,
    sp = params,
    receiver = app_address,
    amt = 100_000
)

signed_activation = activate_contract.sign(private_key)
activation_tx = algod_client.send_transaction(signed_activation)
print(f'MBR For Contract to be Active Account Funded: {activation_tx}')
</code></pre>

        <h3>Group Transaction Comprehension (GTXN)</h3>
        <p>In this section, we put it all together and use relative indexing in our group transaction method to enhance scalability.</p>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, Txn, Bytes, UInt64, String, itxn, Global, OnCompleteAction, gtxn, TransactionType
from algopy.arc4 import abimethod, Address, arc4_signature, abi_call
from algopy.arc4 import UInt64 as arc4UInt64

class TransactionComp(ARC4Contract):
    def __init__(self) -> None:
        pass
    
    @abimethod
    def txn_comprehension(self) -> tuple[Address, Address, Bytes, arc4UInt64, arc4UInt64, String, String, arc4UInt64, Address, arc4UInt64, String, Address]:
        sender = Address(Txn.sender)
        foreign_accounts = Address(Txn.accounts(1))
        app_arg_1 = Txn.application_args(0)
        txn_foreign_applications = Txn.applications(0)
        txn_foreign_application_id = arc4UInt64(txn_foreign_applications.id)
        foreign_asset_1 = Txn.assets(0)
        foreign_asset_id = arc4UInt64(foreign_asset_1.id)
        foreign_asset_name = String.from_bytes(foreign_asset_1.name)
        foreign_asset_unit_name = String.from_bytes(foreign_asset_1.unit_name)
        sender_foreign_asset_balance = arc4UInt64(foreign_asset_1.balance(Txn.sender))
        foreign_asset_creator_address = Address(foreign_asset_1.creator)
        fee_for_this_transaction = arc4UInt64(Txn.fee)
        transaction_type = String.from_bytes(Txn.type)
        transaction_id = Address(Txn.tx_id)
        return sender, foreign_accounts, app_arg_1, txn_foreign_application_id, foreign_asset_id, foreign_asset_name, foreign_asset_unit_name, sender_foreign_asset_balance, foreign_asset_creator_address, fee_for_this_transaction, transaction_type, transaction_id        

    @abimethod
    def inner_txn_comprehension(self) -> tuple[UInt64, UInt64, UInt64]:
        asset_config_txn = itxn.AssetConfig(
            total=1,
            unit_name="TEST#1",
            asset_name="TEST ASSET ONE",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            ).submit()        
        
        asset_config_txn_2 = itxn.AssetConfig(
            total=1,
            unit_name="TEST#2",
            asset_name="TEST ASSET TWO",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            )        
        
        asset_config_txn_3 = itxn.AssetConfig(
            total=1,
            unit_name="TEST#3",
            asset_name="TEST ASSET THREE",
            decimals=0,
            default_frozen=False,
            manager=Global.current_application_address,
            reserve=Global.current_application_address,
            fee=Global.min_txn_fee,
            )
        
        submit_tx_1, submit_tx_2 = itxn.submit_txns(asset_config_txn_2, asset_config_txn_3)        
            
        return asset_config_txn.created_asset.id, submit_tx_1.created_asset.id, submit_tx_2.created_asset.id    
    
    
    @abimethod
    def inner_txn_two(self) -> UInt64:
        
        method_signature = arc4_signature('return_nothing()void')
        
        itxn.ApplicationCall(
            app_id=727594507,
            app_args=(method_signature,),
            on_completion=OnCompleteAction.NoOp,
            fee=Global.min_txn_fee
        ).submit()        
        
        result, txn = abi_call[UInt64](
            'local_state_return_something',
            app_id=727594507,
            on_completion=OnCompleteAction.OptIn,
            fee=Global.min_txn_fee
        )
        
        txn = abi_call(
            'return_nothing',
            app_id=727594507,
            fee=Global.min_txn_fee
        )
        
        return result        

    @abimethod
    def group_txn_comprehension(
        self,
        first_transaction: gtxn.PaymentTransaction
    ) -> tuple[UInt64, UInt64, UInt64]:
        
        assert first_transaction.amount == 1000
        
        second_transaction = gtxn.Transaction(Txn.group_index + 1)
        
        if second_transaction.type == TransactionType.Payment:
            second_transaction_amount = second_transaction.amount
            assert second_transaction_amount == 2000
            
        elif second_transaction.type == TransactionType.AssetTransfer:
            second_transaction_amount = second_transaction.asset_amount
            assert second_transaction_amount == 1
            
        third_transaction = gtxn.Transaction(Txn.group_index + 2)

        if third_transaction.type == TransactionType.Payment:
            third_transaction_amount = third_transaction.amount
            assert third_transaction_amount == 2000

        elif third_transaction.type == TransactionType.AssetTransfer:
            third_transaction_amount = third_transaction.asset_amount
            assert third_transaction_amount == 1            
                    
        return first_transaction.amount, second_transaction_amount, third_transaction_amount</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 24,
    language: 'Python',
    title: 'Simple Staking Smart Contract POC',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for an introduction to this staking smart contract:</p>
  <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/dJHugoV36xg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      <h2>Generating an Account</h2>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account
  
private_key, address = generate_account()
print(private_key, address)</code></pre>
  
      <h2>Funding the Account</h2>
      <p>To fund the account, visit the Algorand testnet dispenser: <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a></p>
  
      <h2>Algod Node API Information</h2>
      <p>Use the following Nodely API as your Algod Node API:</p>
      <p><a href="https://testnet-api.4160.nodely.dev">https://testnet-api.4160.nodely.dev</a></p>
      <p>Documentation: <a href="https://nodely.io/docs/free/start">https://nodely.io/docs/free/start</a></p>
  
      <h2>Staking Contract Code</h2>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, gtxn, Global, BoxRef, Txn, UInt64, itxn
from algopy.arc4 import abimethod
from algopy.arc4 import UInt64 as arc4UInt64

class StakingContract(ARC4Contract):
    def __init__(self) -> None:
        pass
    
    @abimethod
    def stake(self,
            pay_amount: gtxn.PaymentTransaction,
            fee_payment: gtxn.PaymentTransaction) -> tuple[UInt64, UInt64]:
        
        assert pay_amount.receiver == Global.current_application_address
        assert fee_payment.amount == 21_700
        
        staking_box = BoxRef(key=Txn.sender.bytes)
        value, exists = staking_box.maybe()
        
        if exists:
            amount_staked = arc4UInt64.from_bytes(value[0:8])
            initial_stake_time = arc4UInt64.from_bytes(value[8:16])
            time_difference = Global.latest_timestamp - initial_stake_time.native
            
            reward = time_difference * 1000
            itxn.Payment(receiver=Txn.sender,amount=reward,fee=Global.min_txn_fee).submit()
            
            new_total_stake = amount_staked.native + pay_amount.amount
            staking_box.put(arc4UInt64(new_total_stake).bytes + arc4UInt64(Global.latest_timestamp).bytes)
        
        else:        
            reward = UInt64(0)
            staking_box.create(size=16)
            staking_box.put(arc4UInt64(pay_amount.amount).bytes + arc4UInt64(Global.latest_timestamp).bytes)
        
        return pay_amount.amount, reward
    
    @abimethod
    def claimRewardAndWithdraw(self) -> UInt64:
        
        staking_box = BoxRef(key=Txn.sender.bytes)
        value, exists = staking_box.maybe()
        
        assert exists
        
        amount_staked = arc4UInt64.from_bytes(value[0:8])
        initial_stake_time = arc4UInt64.from_bytes(value[8:16])
        
        time_difference = Global.latest_timestamp - initial_stake_time.native
        reward = time_difference * 1000
        amount_to_send = reward + amount_staked.native
        
        itxn.Payment(receiver=Txn.sender,amount=amount_to_send,fee=Global.min_txn_fee).submit()
        staking_box.delete()
        
        return amount_to_send</code></pre>
  
      <h2>Compiling the Contract</h2>
      <p>Use the following command to compile the contract:</p>
      <pre class="overflow-auto shadow-md"><code>algokit compile py MyStakingContract.py</code></pre>
  
      <h2>Launching the Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algosdk.transaction import ApplicationCreateTxn, StateSchema, OnComplete, wait_for_confirmation, PaymentTxn
from algosdk.account import address_from_private_key
from algosdk.v2client.algod import AlgodClient
from algosdk import logic
from dotenv import load_dotenv
import base64
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
algod_client = AlgodClient(node_token, node_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

approval_teal_file_name = 'StakingContract.approval.teal'
clear_teal_file_name = 'StakingContract.clear.teal'

with open(f'./{approval_teal_file_name}', 'r') as f:
    approval_teal_source = f.read()

with open(f'{clear_teal_file_name}', 'r') as f:
    clear_teal_source = f.read()

approval_result = algod_client.compile(approval_teal_source)
approval_program = base64.b64decode(approval_result['result'])

clear_result = algod_client.compile(clear_teal_source)
clear_program = base64.b64decode(clear_result['result'])

global_schema = StateSchema(num_uints=0, num_byte_slices=0)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

txn = ApplicationCreateTxn(
    sender = address,
    sp = params,
    on_complete=OnComplete.NoOpOC,
    approval_program=approval_program,
    clear_program=clear_program,
    global_schema=global_schema,
    local_schema=local_schema,
)
signed_txn = txn.sign(private_key)

try:
    txid = algod_client.send_transaction(signed_txn)
except Exception as e:
    print(e)
    
print(f'Tx ID: {txid}')
wait_for_confirmation(algod_client, txid)
tx_info = algod_client.pending_transaction_info(txid)
print(f'App ID: {tx_info["application-index"]}')

app_address = logic.get_application_address(tx_info["application-index"])
print(f'Application Address: {app_address}')</code></pre>

    <h2>Funding the Contract</h2>
    <pre class="overflow-auto shadow-md"><code>activate_contract = PaymentTxn (
    sender = address,
    sp = params,
    receiver = app_address,
    amt = 100_000
)
  
signed_activation = activate_contract.sign(private_key)
activation_tx = algod_client.send_transaction(signed_activation)
print(f'MBR For Contract to be Active Account Funded: {activation_tx}')</code></pre>
  
      <h2>Box Fees and MBR Calculation</h2>
      <p>Box Minimum Balance Requirement (MBR) Calculation:</p>
      <pre class="overflow-auto shadow-md"><code>box_creation_fee = 2500
box_byte_fee = 400

address_bytes = 32
uint64_2 = 16

box_mbr = box_creation_fee + ((address_bytes + uint64_2) * 400)
print(box_mbr)</code></pre>
  
      <p>Read more about MBR for boxes: <a href="https://developer.algorand.org/articles/smart-contract-storage-boxes/">Algorand Box Storage Documentation</a></p>
  
      <h2>Staking to the Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.atomic_transaction_composer import AccountTransactionSigner, AtomicTransactionComposer, TransactionWithSigner
from algosdk.transaction import PaymentTxn
from algosdk.account import address_from_private_key
from pathlib import Path
import os
from algosdk.util import algos_to_microalgos
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

path = Path(__file__).parent / './StakingContract.arc32.json'
app_id = int(os.getenv('app_id'))
private_key = os.getenv('private_key')
signer = AccountTransactionSigner(private_key)
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

address_coder = ABIType.from_string('(address)')
box_key = address_coder.encode((address,))

stake_algo_transaction = PaymentTxn(sender=address, sp=params,receiver=app_client.app_address,amt=algos_to_microalgos(0.1))
stake_with_signer_tx = TransactionWithSigner(stake_algo_transaction, signer)

fee_payment_txn = PaymentTxn(sender=address, sp=params,receiver=app_client.app_address,amt=21700)
fee_payment_with_signer_tx = TransactionWithSigner(fee_payment_txn, signer)

app_client.compose_call(atc, call_abi_method='stake',pay_amount=stake_with_signer_tx, fee_payment=fee_payment_with_signer_tx, transaction_parameters={'boxes': [[app_id, box_key]]})

result = atc.execute(algod_client, 2)
print(result.tx_ids[0])
print(result.abi_results[0].return_value)</code></pre>

    <h2>Claiming Reward and Withdrawing from Contract</h2>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.atomic_transaction_composer import AccountTransactionSigner, AtomicTransactionComposer
from algosdk.account import address_from_private_key
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

path = Path(__file__).parent / './StakingContract.arc32.json'
app_id = int(os.getenv('app_id'))
private_key = os.getenv('private_key')
signer = AccountTransactionSigner(private_key)
address = address_from_private_key(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=path,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

address_coder = ABIType.from_string('(address)')
box_key = address_coder.encode((address,))

app_client.compose_call(atc, call_abi_method='claimRewardAndWithdraw', transaction_parameters={'boxes': [[app_id, box_key]]})

result = atc.execute(algod_client, 2)
print(result.tx_ids[0])
print(result.abi_results[0].return_value)</code></pre>
    `,
    initialCode: ``,
  },
  {
    id: 25,
    language: 'Python',
    title: 'Marketplace Contract Part 1 - Asset for Algo',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for this chapter:</p> 

<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/cNv3Nxx7mIA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      
      <h3>Step 1: Generate Two Accounts</h3>
      <ul class="inText">
        <li>One for Lister, one for Buyer</li>
      </ul>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)
</code></pre>
      
      <h3>Step 2: Load each Account with Funds</h3>
      <p>Use the following link to load funds into each account:</p>
      <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>
      
      <h3>Step 3: Create .env</h3>
      <pre class="overflow-auto shadow-md"><code>algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
private_key = lqPuVOtF4p6QpsaL7iTA6mbHoy7a5+nuAPjzw7HvckiXQWUlnZQVYSCZSvUK8w+MGjh09sNsx7WybOeb0MLD/Q==
buyer_private_key = jHx+aE6G/5RKAMJK7J7R+j3SyjKhzLsrbYIrzmmhWphJsT7CpTxqdhsjWQx4wDpx2I5B+1FiBSp16O5fXd/Sqg==
asset_1 = 724395141
asset_2 = 724449087
app_id = 724455779
</code></pre>
      
      <h3>Step 4: Compile Asset for Algo Listing Contract</h3>
      <p>Create and compile the asset listing contract:</p>
       <pre class="overflow-auto shadow-md"><code>algokit compile py fileName.py</code></pre>
      <p>Use the following implementation to compile your contract:</p>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy.arc4 import abimethod, Address, Struct, Bool
from algopy.arc4 import UInt64 as arc4UInt64

class listingName(Struct):
    lister: Address
    counter: arc4UInt64    
    
class listingValue(Struct):
    asset_listed: arc4UInt64
    algo_requested: arc4UInt64    
    
class listings(ARC4Contract):
    def __init__(self) -> None:
        self.listingCounter = GlobalState(arc4UInt64(0))    
    
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()    
    
        return String("Successfully opted in to asset: "), asset_to_opt_into.id    
    
    @abimethod
    def postListingRequest(
        self,
        asset_to_list: gtxn.AssetTransferTransaction,
        algo_amount_requested: arc4UInt64,
        box_fee_mbr_payment: gtxn.PaymentTransaction,
    ) -> tuple[String, UInt64, String, arc4UInt64]:
        
        assert box_fee_mbr_payment.amount == 24_900
        assert asset_to_list.asset_receiver == Global.current_application_address
        assert asset_to_list.asset_amount == 1
        
        self.listingCounter.value = arc4UInt64(self.listingCounter.value.native + 1)
        
        listing_box_name_info = listingName(Address(Txn.sender), self.listingCounter.value)
        
        listing_box = BoxRef(key=listing_box_name_info.bytes)
        
        value, exists = listing_box.maybe()
        assert not exists
        
        listing_box.create(size=16)
        
        listing_box_value_info = listingValue(arc4UInt64(asset_to_list.xfer_asset.id), algo_amount_requested)
        
        listing_box.put(listing_box_value_info.bytes)
        
        return String("User Listed Asset Successfully: "), asset_to_list.xfer_asset.id, String("User is requesting x amount of Algo: "), algo_amount_requested    
    
    @abimethod
    def fulfillListingRequest(
        self,
        asset_listed: Asset,
        listing_name: listingName,
        payment: gtxn.PaymentTransaction,
        transfer_fees: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64, String, UInt64]:
        
        assert transfer_fees.amount == 2000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = listingValue.from_bytes(value)
        
        assert listing_value.asset_listed == asset_listed.id
        assert listing_value.algo_requested == payment.amount
        
        itxn.Payment(
            receiver=listing_name.lister.native,
            amount=payment.amount,
            fee=Global.min_txn_fee
        ).submit()
        
        itxn.AssetTransfer(
            xfer_asset=asset_listed,
            asset_receiver=Txn.sender,
            asset_amount=1,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Listing Fulfilled for Asset: "), asset_listed.id, String("Lister received x amount of Algo: "), payment.amount       
        
    @abimethod
    def cancelListingRequest(
        self,
        listing_asset: Asset,
        listing_name: listingName,
        transfer_fee: gtxn.PaymentTransaction
    ) -> String:
        
        assert transfer_fee.amount == 1000
        assert listing_name.lister.native == Txn.sender
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = listingValue.from_bytes(value)
        
        assert listing_value.asset_listed == listing_asset.id
        
        itxn.AssetTransfer(
            xfer_asset=listing_asset.id,
            asset_amount=1,
            asset_receiver=Txn.sender,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Listing Request Cancelled")</code></pre>

      <p>Ensure you have the necessary imports and class definitions for your contract.</p>
      
      <h3>Step 5: Create Two Arbitrary Assets for Experimenting</h3>
      <p>Follow the steps to create and configure two assets for testing purposes.</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import AssetConfigTxn, wait_for_confirmation
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

asset_creation_txn = AssetConfigTxn(
    sender=address,
    sp=params,
    total=100,
    default_frozen=False,
    asset_name='Test Asset Two',
    unit_name='TA2',
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
)

signed_tx = asset_creation_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)

asset_id = algod_client.pending_transaction_info(tx_id)['asset-index']
asset_info = algod_client.asset_info(asset_id)
print(asset_info)</code></pre>
      
      <h3>Step 6: Store Generated Asset IDs in .env</h3><pre><code>asset_1 = 123456
asset_2 = 654321</code></pre>
      
      <h3>Step 7: Experiment with Opting the Contract into an Asset</h3>
      <p>If you're creating multiple listings, you need to opt the contract into each asset the first time.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(atc, call_abi_method='triggerOptIn', asset_to_opt_into=asset_1, fee_payment=wrapped_payment)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 8: Make an Asset for Algo Listing Box (All listing types are supported from parts 1-4)</h3>
      <p>Create an asset listing box to manage your asset listings.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.util import algos_to_microalgos
from algosdk.abi import ABIType
from base64 import b64decode
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_1, 
    fee_payment=wrapped_payment)


asset_to_list_transaction = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1, index=asset_1)
wrapped_asset_list_transaction = TransactionWithSigner(asset_to_list_transaction, signer)

box_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=24_900)
wrapped_box_fee_payment = TransactionWithSigner(box_fee_payment_tx, signer)

current_global_listing_counter = algod_client.application_info(app_id)['params']['global-state'][0]['value']['bytes']
uint64_coder = ABIType.from_string('(uint64)')
b64_decoded_global_listing_counter = b64decode(current_global_listing_counter)
encoded_global_listing_counter = uint64_coder.decode(b64_decoded_global_listing_counter)[0]

listing_box_counter = encoded_global_listing_counter + 1
listing_box_coder = ABIType.from_string('(address,uint64)')
users_listing_box_name = listing_box_coder.encode((address, listing_box_counter))

app_client.compose_call(
    atc, 
    call_abi_method='postListingRequest', 
    asset_to_list=wrapped_asset_list_transaction, 
    algo_amount_requested=algos_to_microalgos(1), 
    box_fee_mbr_payment=wrapped_box_fee_payment,
    transaction_parameters={'boxes': [[app_id, users_listing_box_name]]}
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)
</code></pre>
      
      <h3>Step 9: Check Respective Listing Information</h3>
      <p>Retrieve and verify the listing information from the contract.</p>
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.v2client.algod import AlgodClient
from algosdk.abi import ABIType
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))

boxes = algod_client.application_boxes(app_id)['boxes']

for box in boxes:
    box_name_b64encoded = box['name']
    print(b64decode(box_name_b64encoded))
    box_value = b64decode(algod_client.application_box_by_name(app_id, b64decode(box_name_b64encoded))['value'])
    print(box_value)

    #Asset for Algo: '(uint64,uint64)'
    #Asset for Asset: '(uint64,uint64,bool)'
    #Asset for Asset Quantity: '(uint64,uint64,uint64,bool)
    #Asset Quantity for Asset Quantity: '(uint64,uint64,uint64,uint64,bool)'
    #Universal Listing: '(uint64,uint64,uint64,uint64,bool)'
    listing_box_value_coder = ABIType.from_string('(uint64,uint64)')
    print(listing_box_value_coder.decode(box_value))
</code></pre>
      
      <h3>Step 10: Purchase the Asset with Your Buyer Private Key</h3>
      <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>
      <p>Execute the purchase of the asset using the buyer's private key.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_1)
wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
atc.add_transaction(wrapped_opt_in_transaction)

asset_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1_000_000)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=2000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='fulfillListingRequest', 
    asset_listed=asset_1, 
    listing_name=(lister_address,counter), 
    payment=wrapped_asset_payment, 
    transfer_fees=wrapped_fee_payment, 
    transaction_parameters={'boxes': [[app_id, box_name]], 'accounts':[lister_address]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``, // You can input your initial code here
  },
  {
    id: 26, // Adjust the ID as necessary
    language: 'Python',
    title: 'Marketplace Contract Part 2 - Asset for Asset',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for this chapter:</p> 
      

<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/46i8OvPWPUc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      
      <h3>Step 1: Generate Two Accounts</h3>
      <ul class="inText">
        <li>One for Lister, one for Buyer</li>
      </ul>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)
</code></pre>
      
      <h3>Step 2: Load each Account with Funds</h3>
      <p>Use the following link to load funds into each account:</p>
      <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>
      
      <h3>Step 3: Create .env</h3>
      <pre class="overflow-auto shadow-md"><code>algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
private_key = lqPuVOtF4p6QpsaL7iTA6mbHoy7a5+nuAPjzw7HvckiXQWUlnZQVYSCZSvUK8w+MGjh09sNsx7WybOeb0MLD/Q==
buyer_private_key = jHx+aE6G/5RKAMJK7J7R+j3SyjKhzLsrbYIrzmmhWphJsT7CpTxqdhsjWQx4wDpx2I5B+1FiBSp16O5fXd/Sqg==
asset_1 = 724395141
asset_2 = 724449087
app_id = 724455779
</code></pre>
      
      <h3>Step 4: Compile Asset for Asset Listing Contract</h3>
      <p>Create and compile the asset listing contract:</p>
       <pre class="overflow-auto shadow-md"><code>algokit compile py fileName.py</code></pre>
      <p>Use the following implementation to compile your contract:</p>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy.arc4 import abimethod, Address, Struct, Bool
from algopy.arc4 import UInt64 as arc4UInt64

class listingName(Struct):
    lister: Address
    counter: arc4UInt64
    
class tradeListingValue(Struct):
    asset_listed: arc4UInt64
    asset_requested: arc4UInt64
    fulfilled: Bool

class listings(ARC4Contract):
    def __init__(self) -> None:
        self.listingCounter = GlobalState(arc4UInt64(0))
        
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()    
    
        return String("Successfully opted in to asset: "), asset_to_opt_into.id
        
    @abimethod
    def postTradeRequest(
        self,
        asset_to_list: gtxn.AssetTransferTransaction,
        asset_request: Asset,
        box_fee_mbr_payment: gtxn.PaymentTransaction
    ) -> String:
        
        assert box_fee_mbr_payment.amount == 25_300
        assert asset_to_list.asset_receiver == Global.current_application_address
        assert asset_to_list.asset_amount == 1
        
        self.listingCounter.value = arc4UInt64(self.listingCounter.value.native + 1)
        
        listing_box_name_info = listingName(Address(Txn.sender), self.listingCounter.value)
        
        listing_box = BoxRef(key=listing_box_name_info.bytes)
        
        value, exists = listing_box.maybe()
        assert not exists
        
        listing_box.create(size=17)
        
        listing_box_value_info = tradeListingValue(arc4UInt64(asset_to_list.xfer_asset.id), arc4UInt64(asset_request.id), Bool(False))    
        
        listing_box.put(listing_box_value_info.bytes)
        
        return String("Trade Request Posted")
        
    @abimethod
    def fulfillTradeRequest(
        self,
        asset_trade_fulfillment: gtxn.AssetTransferTransaction,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_listed: Asset,
        listing_name: listingName,
        
    ) -> String:
        
        assert asset_transfer_fee.amount == 1000
        assert asset_trade_fulfillment.asset_amount == 1
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValue.from_bytes(value)
        
        assert listing_value.asset_listed == asset_listed.id
        assert listing_value.asset_requested == asset_trade_fulfillment.xfer_asset.id
                
        itxn.AssetTransfer(
            xfer_asset=asset_listed,
            asset_receiver=Txn.sender,
            asset_amount=1,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_value.fulfilled = Bool(True)
        listing_box.put(listing_value.bytes)
                
        return String("Trade Request Fulfilled!")        
             
    @abimethod
    def claimFulfilledTradeRequest(
        self,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_requested: Asset,
        listing_name: listingName,
    ) -> String:
                
        assert listing_name.lister == Address(Txn.sender)
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValue.from_bytes(value)
        
        assert asset_requested.id == listing_value.asset_requested
        assert listing_value.fulfilled == Bool(True)
        
        itxn.AssetTransfer(
            xfer_asset=asset_requested.id,
            asset_receiver=Txn.sender,
            asset_amount=1,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Trade Request Completed!")
        
    @abimethod
    def cancelTradeRequest(
        self,
        listed_asset: Asset,
        listing_name: listingName,
        transfer_fee: gtxn.PaymentTransaction
    ) -> String:
        
        assert transfer_fee.amount == 1000
        assert listing_name.lister == Address(Txn.sender)
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = tradeListingValue.from_bytes(value)
        
        assert listing_value.asset_listed == listed_asset.id
        
        itxn.AssetTransfer(
            xfer_asset=listed_asset.id,
            asset_amount=1,
            asset_receiver=Txn.sender,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()    
        
        return String("Trade Request Cancelled!")</code></pre>

      <p>Ensure you have the necessary imports and class definitions for your contract.</p>
      
      <h3>Step 5: Create Two Arbitrary Assets for Experimenting</h3>
      <p>Follow the steps to create and configure two assets for testing purposes.</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import AssetConfigTxn, wait_for_confirmation
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

asset_creation_txn = AssetConfigTxn(
    sender=address,
    sp=params,
    total=100,
    default_frozen=False,
    asset_name='Test Asset Two',
    unit_name='TA2',
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
)

signed_tx = asset_creation_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)

asset_id = algod_client.pending_transaction_info(tx_id)['asset-index']
asset_info = algod_client.asset_info(asset_id)
print(asset_info)</code></pre>
      
      <h3>Step 6: Store Generated Asset IDs in .env</h3><pre><code>asset_1 = 123456
asset_2 = 654321</code></pre>
      
      <h3>Step 7: Experiment with Opting the Contract into an Asset</h3>
      <p>If you're creating multiple listings, you need to opt the contract into each asset the first time.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(atc, call_abi_method='triggerOptIn', asset_to_opt_into=asset_1, fee_payment=wrapped_payment)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 8: Make an Asset for Algo Listing Box (All listing types are supported from parts 1-4)</h3>
      <p>Create an asset listing box to manage your asset listings.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_1, 
    fee_payment=wrapped_payment)

asset_to_list_transaction = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1, index=asset_1)
wrapped_asset_list_transaction = TransactionWithSigner(asset_to_list_transaction, signer)

box_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=25_300)
wrapped_box_fee_payment = TransactionWithSigner(box_fee_payment_tx, signer)

current_global_listing_counter = algod_client.application_info(app_id)['params']['global-state'][0]['value']['bytes']
uint64_coder = ABIType.from_string('(uint64)')
b64_decoded_global_listing_counter = b64decode(current_global_listing_counter)
encoded_global_listing_counter = uint64_coder.decode(b64_decoded_global_listing_counter)[0]

listing_box_counter = encoded_global_listing_counter + 1
listing_box_coder = ABIType.from_string('(address,uint64)')
users_listing_box_name = listing_box_coder.encode((address, listing_box_counter))

asset_2 = int(os.getenv('asset_2'))

app_client.compose_call(
    atc, 
    call_abi_method='postTradeRequest', 
    asset_to_list=wrapped_asset_list_transaction, 
    asset_request=asset_2, 
    box_fee_mbr_payment=wrapped_box_fee_payment,
    transaction_parameters={'boxes': [[app_id, users_listing_box_name]]}
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 9: Check Respective Listing Information</h3>
      <p>Retrieve and verify the listing information from the contract.</p>
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.v2client.algod import AlgodClient
from algosdk.abi import ABIType
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))

boxes = algod_client.application_boxes(app_id)['boxes']

for box in boxes:
    box_name_b64encoded = box['name']
    print(b64decode(box_name_b64encoded))
    box_value = b64decode(algod_client.application_box_by_name(app_id, b64decode(box_name_b64encoded))['value'])
    print(box_value)

    #Asset for Algo: '(uint64,uint64)'
    #Asset for Asset: '(uint64,uint64,bool)'
    #Asset for Asset Quantity: '(uint64,uint64,uint64,bool)
    #Asset Quantity for Asset Quantity: '(uint64,uint64,uint64,uint64,bool)'
    #Universal Listing: '(uint64,uint64,uint64,uint64,bool)'
    listing_box_value_coder = ABIType.from_string('(uint64,uint64)')
    print(listing_box_value_coder.decode(box_value))
</code></pre>
      
      <h3>Step 10: Purchase the Asset with Your Buyer Private Key</h3>
      <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>
      <p>Execute the purchase of the asset using the buyer's private key.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should Optin to the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_1)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

optin_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_optin_payment = TransactionWithSigner(optin_fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_2, 
    fee_payment=wrapped_optin_payment)

asset_payment_tx = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1, index=asset_2)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='fulfillTradeRequest', 
    asset_trade_fulfillment=wrapped_asset_payment,
    asset_transfer_fee=wrapped_fee_payment,
    asset_listed=asset_1, 
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>

      <h3>Step 11: Complete Listing Request and Redeem Buyers Asset</h3>
<pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_2)
wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
atc.add_transaction(wrapped_opt_in_transaction)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='claimFulfilledTradeRequest', 
    asset_transfer_fee=wrapped_fee_payment,
    asset_requested=asset_2,
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>

      
      <h3>Step 12: Experiment with Cancelling a Listing Request</h3>
      <p>If you fulfilled the previous request already, you will need to generate a new listing again with Step 8, and increment the "counter" variable from 1 to 2. For example:</p>
      <pre class="overflow-auto shadow-md"><code>counter = 2</code></pre>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings

listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='cancelTradeRequest', 
    listed_asset=asset_1, 
    listing_name=(lister_address,counter), 
    transfer_fee=wrapped_fee_payment, 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``, // You can input your initial code here if applicable
  },

  {
    id: 27, // Adjust the ID as necessary
    language: 'Python',
    title: 'Marketplace Contract Part 3 - Asset for Asset Quantity',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for this chapter:</p> 
      

<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/uKqqhaYpxHU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      
      <h3>Step 1: Generate Two Accounts</h3>
      <ul class="inText">
        <li>One for Lister, one for Buyer</li>
      </ul>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)
</code></pre>
      
      <h3>Step 2: Load each Account with Funds</h3>
      <p>Use the following link to load funds into each account:</p>
      <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>
      
      <h3>Step 3: Create .env</h3>
      <pre class="overflow-auto shadow-md"><code>algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
private_key = lqPuVOtF4p6QpsaL7iTA6mbHoy7a5+nuAPjzw7HvckiXQWUlnZQVYSCZSvUK8w+MGjh09sNsx7WybOeb0MLD/Q==
buyer_private_key = jHx+aE6G/5RKAMJK7J7R+j3SyjKhzLsrbYIrzmmhWphJsT7CpTxqdhsjWQx4wDpx2I5B+1FiBSp16O5fXd/Sqg==
asset_1 = 724395141
asset_2 = 724449087
app_id = 724455779
</code></pre>
      
      <h3>Step 4: Compile Asset for Asset Quantity Listing Contract</h3>
      <p>Create and compile the asset listing contract:</p>
       <pre class="overflow-auto shadow-md"><code>algokit compile py fileName.py</code></pre>
      <p>Use the following implementation to compile your contract:</p>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy.arc4 import abimethod, Address, Struct, Bool
from algopy.arc4 import UInt64 as arc4UInt64

class listingName(Struct):
    lister: Address
    counter: arc4UInt64
        
class tradeListingValueWithAssetQuantity(Struct):
    asset_listed: arc4UInt64
    asset_requested: arc4UInt64
    asset_amount_requested: arc4UInt64
    fulfilled: Bool
        
class listings(ARC4Contract):
    def __init__(self) -> None:
        self.listingCounter = GlobalState(arc4UInt64(0))
        
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()    
    
        return String("Successfully opted in to asset: "), asset_to_opt_into.id    
        
    @abimethod
    def postTradeRequestWithQuantity(
        self,
        asset_to_list: gtxn.AssetTransferTransaction,
        asset_request: Asset,
        asset_request_quantity: arc4UInt64,
        box_fee_mbr_payment: gtxn.PaymentTransaction
    ) -> String:

        assert box_fee_mbr_payment.amount == 28_500
        assert asset_to_list.asset_receiver == Global.current_application_address
        assert asset_to_list.asset_amount == 1
        
        self.listingCounter.value = arc4UInt64(self.listingCounter.value.native + 1)
        
        listing_box_name_info = listingName(Address(Txn.sender), self.listingCounter.value)
        
        listing_box = BoxRef(key=listing_box_name_info.bytes)
        
        value, exists = listing_box.maybe()
        assert not exists
        
        listing_box.create(size=25)
        
        listing_box_value_info = tradeListingValueWithAssetQuantity(arc4UInt64(asset_to_list.xfer_asset.id), arc4UInt64(asset_request.id), arc4UInt64(asset_request_quantity.native), Bool(False))    
        
        listing_box.put(listing_box_value_info.bytes)
        
        return String("Trade Request Posted")
        
    @abimethod
    def fulfillTradeRequestWithQuantity(
        self,
        asset_trade_fulfillment: gtxn.AssetTransferTransaction,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_listed: Asset,
        listing_name: listingName,
        
    ) -> String:
        
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValueWithAssetQuantity.from_bytes(value)
        
        assert listing_value.asset_listed == asset_listed.id
        assert listing_value.asset_requested == asset_trade_fulfillment.xfer_asset.id
        assert asset_trade_fulfillment.asset_amount == listing_value.asset_amount_requested
                
        itxn.AssetTransfer(
            xfer_asset=asset_listed,
            asset_receiver=Txn.sender,
            asset_amount=1,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_value.fulfilled = Bool(True)
        listing_box.put(listing_value.bytes)
        
        return String("Trade Request Fulfilled!")        
                
    @abimethod
    def claimFulfilledTradeRequestWithQuantity(
        self,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_requested: Asset,
        listing_name: listingName,
    ) -> String:
                
        assert listing_name.lister == Address(Txn.sender)
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValueWithAssetQuantity.from_bytes(value)
        
        assert asset_requested.id == listing_value.asset_requested
        assert listing_value.fulfilled == Bool(True)
        
        itxn.AssetTransfer(
            xfer_asset=asset_requested.id,
            asset_receiver=Txn.sender,
            asset_amount=listing_value.asset_amount_requested.native,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Trade Request Completed!")
        
    @abimethod
    def cancelTradeRequestWithQuantity(
        self,
        listed_asset: Asset,
        listing_name: listingName,
        transfer_fee: gtxn.PaymentTransaction
    ) -> String:
        
        assert transfer_fee.amount == 1000
        assert listing_name.lister == Address(Txn.sender)
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        alue, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = tradeListingValueWithAssetQuantity.from_bytes(value)
        
        assert listing_value.asset_listed == listed_asset.id
        
        itxn.AssetTransfer(
            xfer_asset=listed_asset.id,
            asset_amount=1,
            asset_receiver=Txn.sender,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()    
        
        return String("Trade Request Cancelled!")</code></pre>

      <p>Ensure you have the necessary imports and class definitions for your contract.</p>
      
      <h3>Step 5: Create Two Arbitrary Assets for Experimenting</h3>
      <p>Follow the steps to create and configure two assets for testing purposes.</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import AssetConfigTxn, wait_for_confirmation
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

asset_creation_txn = AssetConfigTxn(
    sender=address,
    sp=params,
    total=100,
    default_frozen=False,
    asset_name='Test Asset Two',
    unit_name='TA2',
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
)

signed_tx = asset_creation_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)

asset_id = algod_client.pending_transaction_info(tx_id)['asset-index']
asset_info = algod_client.asset_info(asset_id)
print(asset_info)</code></pre>
      
      <h3>Step 6: Store Generated Asset IDs in .env</h3><pre><code>asset_1 = 123456
asset_2 = 654321</code></pre>
      
      <h3>Step 7: Experiment with Opting the Contract into an Asset</h3>
      <p>If you're creating multiple listings, you need to opt the contract into each asset the first time.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(atc, call_abi_method='triggerOptIn', asset_to_opt_into=asset_1, fee_payment=wrapped_payment)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 8: Make an Asset for Algo Listing Box (All listing types are supported from parts 1-4)</h3>
      <p>Create an asset listing box to manage your asset listings.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.abi import ABIType
from base64 import b64decode
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_1, 
    fee_payment=wrapped_payment)

asset_to_list_transaction = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1, index=asset_1)
wrapped_asset_list_transaction = TransactionWithSigner(asset_to_list_transaction, signer)

box_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=28_500)
wrapped_box_fee_payment = TransactionWithSigner(box_fee_payment_tx, signer)

current_global_listing_counter = algod_client.application_info(app_id)['params']['global-state'][0]['value']['bytes']
uint64_coder = ABIType.from_string('(uint64)')
b64_decoded_global_listing_counter = b64decode(current_global_listing_counter)
encoded_global_listing_counter = uint64_coder.decode(b64_decoded_global_listing_counter)[0]

listing_box_counter = encoded_global_listing_counter + 1
listing_box_coder = ABIType.from_string('(address,uint64)')
users_listing_box_name = listing_box_coder.encode((address, listing_box_counter))

asset_2 = int(os.getenv('asset_2'))

app_client.compose_call(
    atc, 
    call_abi_method='postTradeRequestWithQuantity', 
    asset_to_list=wrapped_asset_list_transaction, 
    asset_request=asset_2, 
    asset_request_quantity=5,
    box_fee_mbr_payment=wrapped_box_fee_payment,
    transaction_parameters={'boxes': [[app_id, users_listing_box_name]]}
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 9: Check Respective Listing Information</h3>
      <p>Retrieve and verify the listing information from the contract.</p>
      <pre class="overflow-auto shadow-md"><code>import os
from dotenv import load_dotenv

load_dotenv()
from algosdk.v2client.algod import AlgodClient
from algosdk.abi import ABIType
from base64 import b64decode

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))

boxes = algod_client.application_boxes(app_id)['boxes']

for box in boxes:
    box_name_b64encoded = box['name']
    print(b64decode(box_name_b64encoded))
    box_value = b64decode(algod_client.application_box_by_name(app_id, b64decode(box_name_b64encoded))['value'])
    print(box_value)

    #Asset for Algo: '(uint64,uint64)'
    #Asset for Asset: '(uint64,uint64,bool)'
    #Asset for Asset Quantity: '(uint64,uint64,uint64,bool)
    #Asset Quantity for Asset Quantity: '(uint64,uint64,uint64,uint64,bool)'
    #Universal Listing: '(uint64,uint64,uint64,uint64,bool)'
    listing_box_value_coder = ABIType.from_string('(uint64,uint64)')
    print(listing_box_value_coder.decode(box_value))
</code></pre>
      
      <h3>Step 10: Purchase the Asset with Your Buyer Private Key</h3>
      <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>
      <p>Execute the purchase of the asset using the buyer's private key.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should opt-in to the asset purchased if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_1)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

optin_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_optin_payment = TransactionWithSigner(optin_fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_2, 
    fee_payment=wrapped_optin_payment)

asset_payment_tx = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=5, index=asset_2)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='fulfillTradeRequestWithQuantity', 
    asset_trade_fulfillment=wrapped_asset_payment,
    asset_transfer_fee=wrapped_fee_payment,
    asset_listed=asset_1, 
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>

<h3>Step 11: Complete Listing Request and Redeem Buyers Asset</h3>
<pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should opt into the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_2)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='claimFulfilledTradeRequestWithQuantity', 
    asset_transfer_fee=wrapped_fee_payment,
    asset_requested=asset_2,
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 12: Experiment with Cancelling a Listing Request</h3>
      <p>If you fulfilled the previous request already, you will need to generate a new listing again with Step 8, and increment the "counter" variable from 1 to 2. For example:</p>
      <pre class="overflow-auto shadow-md"><code>counter = 2</code></pre>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='cancelTradeRequestWithQuantity', 
    listed_asset=asset_1, 
    listing_name=(lister_address,counter), 
    transfer_fee=wrapped_fee_payment, 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``, // You can input your initial code here if applicable
  },

  {
    id: 28, // Adjust the ID as necessary
    language: 'Python',
    title: 'Marketplace Contract Part 4 - Asset Quantity for Asset Quantity',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for this chapter:</p> 
      

<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/iIxgYnfar80"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      
      <h3>Step 1: Generate Two Accounts</h3>
      <ul class="inText">
        <li>One for Lister, one for Buyer</li>
      </ul>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)
</code></pre>
      
      <h3>Step 2: Load each Account with Funds</h3>
      <p>Use the following link to load funds into each account:</p>
      <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>
      
      <h3>Step 3: Create .env</h3>
      <pre class="overflow-auto shadow-md"><code>algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
private_key = lqPuVOtF4p6QpsaL7iTA6mbHoy7a5+nuAPjzw7HvckiXQWUlnZQVYSCZSvUK8w+MGjh09sNsx7WybOeb0MLD/Q==
buyer_private_key = jHx+aE6G/5RKAMJK7J7R+j3SyjKhzLsrbYIrzmmhWphJsT7CpTxqdhsjWQx4wDpx2I5B+1FiBSp16O5fXd/Sqg==
asset_1 = 724395141
asset_2 = 724449087
app_id = 724455779
</code></pre>
      
      <h3>Step 4: Compile Asset Quantity for Asset Quantity Listing Contract</h3>
      <p>Create and compile the asset listing contract:</p>
       <pre class="overflow-auto shadow-md"><code>algokit compile py fileName.py</code></pre>
      <p>Use the following implementation to compile your contract:</p>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy.arc4 import abimethod, Address, Struct, Bool
from algopy.arc4 import UInt64 as arc4UInt64

class listingName(Struct):
    lister: Address
    counter: arc4UInt64
    
class tradeListingValueQuantityWithAssetQuantity(Struct):
    asset_listed: arc4UInt64
    asset_listed_quantity: arc4UInt64
    asset_requested: arc4UInt64
    asset_amount_requested: arc4UInt64
    fulfilled: Bool
    
class listings(ARC4Contract):
    def __init__(self) -> None:
        self.listingCounter = GlobalState(arc4UInt64(0))
        
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()
        
        return String("Successfully opted in to asset: "), asset_to_opt_into.id
        
    @abimethod
    def postTradeRequestQuantityWithQuantity(
        self,
        asset_to_list: gtxn.AssetTransferTransaction,
        asset_request: Asset,
        asset_request_quantity: arc4UInt64,
        box_fee_mbr_payment: gtxn.PaymentTransaction
    ) -> String:
        
        assert box_fee_mbr_payment.amount == 31_700
        assert asset_to_list.asset_receiver == Global.current_application_address
        
        self.listingCounter.value = arc4UInt64(self.listingCounter.value.native + 1)
        
        listing_box_name_info = listingName(Address(Txn.sender), self.listingCounter.value)
        
        listing_box = BoxRef(key=listing_box_name_info.bytes)
        
        value, exists = listing_box.maybe()
        assert not exists
        
        listing_box.create(size=33)
        
        listing_box_value_info = tradeListingValueQuantityWithAssetQuantity(arc4UInt64(asset_to_list.xfer_asset.id), arc4UInt64(asset_to_list.asset_amount), arc4UInt64(asset_request.id), arc4UInt64(asset_request_quantity.native), Bool(False))
            
        listing_box.put(listing_box_value_info.bytes)
        
        return String("Trade Request Posted")
        
    @abimethod
    def fulfillTradeRequestQuantityWithQuantity(
        self,
        asset_trade_fulfillment: gtxn.AssetTransferTransaction,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_listed: Asset,
        listing_name: listingName,
        
    ) -> String:
        
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValueQuantityWithAssetQuantity.from_bytes(value)
        
        assert listing_value.asset_listed == asset_listed.id
        assert listing_value.asset_requested == asset_trade_fulfillment.xfer_asset.id
        assert asset_trade_fulfillment.asset_amount == listing_value.asset_amount_requested
                
        itxn.AssetTransfer(
            xfer_asset=asset_listed,
            asset_receiver=Txn.sender,
            asset_amount=listing_value.asset_listed_quantity.native,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_value.fulfilled = Bool(True)
        listing_box.put(listing_value.bytes)
        
        return String("Trade Request Fulfilled!")        
                
    @abimethod
    def claimFulfilledTradeRequestQuantityWithQuantity(
        self,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_requested: Asset,
        listing_name: listingName,
    ) -> String:
                
        assert listing_name.lister == Address(Txn.sender)
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = tradeListingValueQuantityWithAssetQuantity.from_bytes(value)
        
        assert asset_requested.id == listing_value.asset_requested
        assert listing_value.fulfilled == Bool(True)
        
        itxn.AssetTransfer(
            xfer_asset=asset_requested.id,
            asset_receiver=Txn.sender,
            asset_amount=listing_value.asset_amount_requested.native,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Trade Request Completed!")
        
    @abimethod
    def cancelTradeRequestQuantityWithQuantity(
        self,
        listed_asset: Asset,
        listing_name: listingName,
        transfer_fee: gtxn.PaymentTransaction
    ) -> String:
        
        assert transfer_fee.amount == 1000
        assert listing_name.lister == Address(Txn.sender)
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = tradeListingValueQuantityWithAssetQuantity.from_bytes(value)
        
        assert listing_value.asset_listed == listed_asset.id
        
        itxn.AssetTransfer(
            xfer_asset=listed_asset.id,
            asset_amount=listing_value.asset_listed_quantity.native,
            asset_receiver=Txn.sender,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()    
        
        return String("Trade Request Cancelled!")</code></pre>

      <p>Ensure you have the necessary imports and class definitions for your contract.</p>
      
      <h3>Step 5: Create Two Arbitrary Assets for Experimenting</h3>
      <p>Follow the steps to create and configure two assets for testing purposes.</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import AssetConfigTxn, wait_for_confirmation
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

asset_creation_txn = AssetConfigTxn(
    sender=address,
    sp=params,
    total=100,
    default_frozen=False,
    asset_name='Test Asset Two',
    unit_name='TA2',
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
)

signed_tx = asset_creation_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)

asset_id = algod_client.pending_transaction_info(tx_id)['asset-index']
asset_info = algod_client.asset_info(asset_id)
print(asset_info)</code></pre>
      
      <h3>Step 6: Store Generated Asset IDs in .env</h3><pre><code>asset_1 = 123456
asset_2 = 654321</code></pre>
      
      <h3>Step 7: Experiment with Opting the Contract into an Asset</h3>
      <p>If you're creating multiple listings, you need to opt the contract into each asset the first time.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(atc, call_abi_method='triggerOptIn', asset_to_opt_into=asset_1, fee_payment=wrapped_payment)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 8: Make an Asset for Algo Listing Box (All listing types are supported from parts 1-4)</h3>
      <p>Create an asset listing box to manage your asset listings.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
from base64 import b64decode
import os
from dotenv import load_dotenv

load_dotenv()


algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_1, 
    fee_payment=wrapped_payment)

asset_to_list_transaction = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=7, index=asset_1)
wrapped_asset_list_transaction = TransactionWithSigner(asset_to_list_transaction, signer)

box_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=31_700)
wrapped_box_fee_payment = TransactionWithSigner(box_fee_payment_tx, signer)

current_global_listing_counter = algod_client.application_info(app_id)['params']['global-state'][0]['value']['bytes']
uint64_coder = ABIType.from_string('(uint64)')
b64_decoded_global_listing_counter = b64decode(current_global_listing_counter)
encoded_global_listing_counter = uint64_coder.decode(b64_decoded_global_listing_counter)[0]

listing_box_counter = encoded_global_listing_counter + 1
listing_box_coder = ABIType.from_string('(address,uint64)')
users_listing_box_name = listing_box_coder.encode((address, listing_box_counter))

asset_2 = int(os.getenv('asset_2'))

app_client.compose_call(
    atc, 
    call_abi_method='postTradeRequestQuantityWithQuantity', 
    asset_to_list=wrapped_asset_list_transaction, 
    asset_request=asset_2, 
    asset_request_quantity=5,
    box_fee_mbr_payment=wrapped_box_fee_payment,
    transaction_parameters={'boxes': [[app_id, users_listing_box_name]]}
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 9: Check Respective Listing Information</h3>
      <p>Retrieve and verify the listing information from the contract.</p>
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.v2client.algod import AlgodClient
from algosdk.abi import ABIType
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))

boxes = algod_client.application_boxes(app_id)['boxes']

for box in boxes:
    box_name_b64encoded = box['name']
    print(b64decode(box_name_b64encoded))
    box_value = b64decode(algod_client.application_box_by_name(app_id, b64decode(box_name_b64encoded))['value'])
    print(box_value)

    #Asset for Algo: '(uint64,uint64)'
    #Asset for Asset: '(uint64,uint64,bool)'
    #Asset for Asset Quantity: '(uint64,uint64,uint64,bool)
    #Asset Quantity for Asset Quantity: '(uint64,uint64,uint64,uint64,bool)'
    #Universal Listing: '(uint64,uint64,uint64,uint64,bool)'
    listing_box_value_coder = ABIType.from_string('(uint64,uint64)')
    print(listing_box_value_coder.decode(box_value))
</code></pre>
      
      <h3>Step 10: Purchase the Asset with Your Buyer Private Key</h3>
      <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>
      <p>Execute the purchase of the asset using the buyer's private key.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should optin to the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_1)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

optin_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_optin_payment = TransactionWithSigner(optin_fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_2, 
    fee_payment=wrapped_optin_payment)

asset_payment_tx = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=5, index=asset_2)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='fulfillTradeRequestQuantityWithQuantity', 
    asset_trade_fulfillment=wrapped_asset_payment,
    asset_transfer_fee=wrapped_fee_payment,
    asset_listed=asset_1, 
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>

<h3>Step 11: Complete Listing Request and Redeem Buyers Asset</h3>
<pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should opt into the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_2)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='claimFulfilledTradeRequestQuantityWithQuantity', 
    asset_transfer_fee=wrapped_fee_payment,
    asset_requested=asset_2,
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 12: Experiment with Cancelling a Listing Request</h3>
      <p>If you fulfilled the previous request already, you will need to generate a new listing again with Step 8, and increment the "counter" variable from 1 to 2. For example:</p>
      <pre class="overflow-auto shadow-md"><code>counter = 2</code></pre>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='cancelTradeRequestQuantityWithQuantity', 
    listed_asset=asset_1, 
    listing_name=(lister_address,counter), 
    transfer_fee=wrapped_fee_payment, 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``, // You can input your initial code here if applicable
  },

  {
    id: 29, // Adjust the ID as necessary
    language: 'Python',
    title: 'Marketplace Contract Part 5 - Universal Listings',
    content: `
      <h2>Video Walkthrough</h2>
      <p>Watch the tutorial video for this chapter:</p>      

<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
  <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/3TAdil0hNRk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

      
      <h3>Step 1: Generate Two Accounts</h3>
      <ul class="inText">
        <li>One for Lister, one for Buyer</li>
      </ul>
      <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)
</code></pre>
      
      <h3>Step 2: Load each Account with Funds</h3>
      <p>Use the following link to load funds into each account:</p>
      <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>
      
      <h3>Step 3: Create .env</h3>
      <pre class="overflow-auto shadow-md"><code>algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
private_key = lqPuVOtF4p6QpsaL7iTA6mbHoy7a5+nuAPjzw7HvckiXQWUlnZQVYSCZSvUK8w+MGjh09sNsx7WybOeb0MLD/Q==
buyer_private_key = jHx+aE6G/5RKAMJK7J7R+j3SyjKhzLsrbYIrzmmhWphJsT7CpTxqdhsjWQx4wDpx2I5B+1FiBSp16O5fXd/Sqg==
asset_1 = 724395141
asset_2 = 724449087
app_id = 724455779
</code></pre>
      
      <h3>Step 4: Compile Universal Listing Contract</h3>
      <p>Create and compile the asset listing contract:</p>
       <pre class="overflow-auto shadow-md"><code>algokit compile py fileName.py</code></pre>
      <p>Use the following implementation to compile your contract:</p>
      <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, String, gtxn, Asset, Txn, GlobalState, itxn, Global, BoxRef, UInt64, TransactionType
from algopy.arc4 import abimethod, Address, Struct, Bool
from algopy.arc4 import UInt64 as arc4UInt64

class listingName(Struct):
    lister: Address
    counter: arc4UInt64
    
class universalTradeListing(Struct):
    asset_listed: arc4UInt64
    asset_listed_quantity: arc4UInt64
    asset_requested: arc4UInt64
    asset_amount_requested: arc4UInt64
    fulfilled: Bool
    
class listings(ARC4Contract):
    def __init__(self) -> None:
        self.listingCounter = GlobalState(arc4UInt64(0))
        
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()
        
        return String("Successfully opted in to asset: "), asset_to_opt_into.id
        
    @abimethod
    def triggerOptIn(
        self,
        asset_to_opt_into: Asset,
        fee_payment: gtxn.PaymentTransaction
    ) -> tuple[String, UInt64]:

        assert fee_payment.amount >= 101_000
        assert fee_payment.receiver == Global.current_application_address
        
        itxn.AssetTransfer(
            xfer_asset=asset_to_opt_into,
            asset_receiver=Global.current_application_address,
            fee=Global.min_txn_fee
        ).submit()
        
        return String("Successfully opted in to asset: "), asset_to_opt_into.id
            
    @abimethod
    def postUniversalListing(
        self,
        asset_to_list: gtxn.AssetTransferTransaction,
        asset_request: arc4UInt64,
        asset_request_quantity: arc4UInt64,
        box_fee_mbr_payment: gtxn.PaymentTransaction
    ) -> String:
        
        assert box_fee_mbr_payment.amount == 31_700
        assert asset_to_list.asset_receiver == Global.current_application_address
        
        self.listingCounter.value = arc4UInt64(self.listingCounter.value.native + 1)
        
        listing_box_name_info = listingName(Address(Txn.sender), self.listingCounter.value)
        
        listing_box = BoxRef(key=listing_box_name_info.bytes)
        
        value, exists = listing_box.maybe()
        assert not exists
        
        listing_box.create(size=33)
        
        listing_box_value_info = universalTradeListing(arc4UInt64(asset_to_list.xfer_asset.id), arc4UInt64(asset_to_list.asset_amount), asset_request, arc4UInt64(asset_request_quantity.native), Bool(False))
            
        listing_box.put(listing_box_value_info.bytes)
        
        return String("Trade Request Posted")
        
    @abimethod
    def fulfillUniversalListing(
        self,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_listed: Asset,
        listing_name: listingName,
        
    ) -> String:
        
        assert asset_transfer_fee.amount == 1000

        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = universalTradeListing.from_bytes(value)

        if Global.group_size == 3:
            assert gtxn.Transaction(0).type == TransactionType.Payment
            payment_fulfillment_tx = gtxn.PaymentTransaction(0)
            assert payment_fulfillment_tx.receiver == Global.current_application_address
            assert listing_value.asset_listed == asset_listed.id
            assert listing_value.asset_requested == 0
            assert payment_fulfillment_tx.amount == listing_value.asset_amount_requested.native

            itxn.AssetTransfer(
                xfer_asset=asset_listed,
                asset_receiver=Txn.sender,
                asset_amount=listing_value.asset_listed_quantity.native,
                fee=Global.min_txn_fee
            ).submit()            
            
            itxn.Payment(
                receiver=listing_name.lister.native,
                amount=listing_value.asset_amount_requested.native,
                fee=Global.min_txn_fee
            ).submit()
            
            listing_box.delete()
            
            return String("Buyer paid with Algo, Listing Fulfilled!")
            
        elif Global.group_size == 5:
            assert gtxn.Transaction(2).type == TransactionType.AssetTransfer
            asset_trade_fulfillment_tx = gtxn.AssetTransferTransaction(2)
            assert asset_trade_fulfillment_tx.asset_receiver == Global.current_application_address
            assert listing_value.asset_listed == asset_listed.id
            assert listing_value.asset_requested == asset_trade_fulfillment_tx.xfer_asset.id
            assert asset_trade_fulfillment_tx.asset_amount == listing_value.asset_amount_requested
                        
            itxn.AssetTransfer(
                xfer_asset=asset_listed,
                asset_receiver=Txn.sender,
                asset_amount=listing_value.asset_listed_quantity.native,
                fee=Global.min_txn_fee
            ).submit()
                    
        listing_value.fulfilled = Bool(True)
        listing_box.put(listing_value.bytes)
        
        return String("Trade Request Fulfilled! Lister can now claim")        
                
    @abimethod
    def claimUniversalListing(
        self,
        asset_transfer_fee: gtxn.PaymentTransaction,
        asset_requested: Asset,
        listing_name: listingName,
    ) -> String:
                
        assert listing_name.lister == Address(Txn.sender)
        assert asset_transfer_fee.amount == 1000
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        assert exists
        
        listing_value = universalTradeListing.from_bytes(value)
        
        assert asset_requested.id == listing_value.asset_requested
        assert listing_value.fulfilled == Bool(True)
        
        itxn.AssetTransfer(
            xfer_asset=asset_requested.id,
            asset_receiver=Txn.sender,
            asset_amount=listing_value.asset_amount_requested.native,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()
        
        return String("Trade Request Completed!")
        
    @abimethod
    def cancelUniversalListing(
        self,
        listed_asset: Asset,
        listing_name: listingName,
        transfer_fee: gtxn.PaymentTransaction
    ) -> String:
        
        assert transfer_fee.amount == 1000
        assert listing_name.lister == Address(Txn.sender)
        
        listing_box = BoxRef(key=listing_name.bytes)
        
        value, exists = listing_box.maybe()
        
        assert exists
        
        listing_value = universalTradeListing.from_bytes(value)
        
        assert listing_value.asset_listed == listed_asset.id
        
        itxn.AssetTransfer(
            xfer_asset=listed_asset.id,
            asset_amount=listing_value.asset_listed_quantity.native,
            asset_receiver=Txn.sender,
            fee=Global.min_txn_fee
        ).submit()
        
        listing_box.delete()    
        
        return String("Trade Request Cancelled!")</code></pre>

      <p>Ensure you have the necessary imports and class definitions for your contract.</p>
      
      <h3>Step 5: Create Two Arbitrary Assets for Experimenting</h3>
      <p>Follow the steps to create and configure two assets for testing purposes.</p>
      <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import AssetConfigTxn, wait_for_confirmation
from algosdk.account import address_from_private_key
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

params = algod_client.suggested_params()

asset_creation_txn = AssetConfigTxn(
    sender=address,
    sp=params,
    total=100,
    default_frozen=False,
    asset_name='Test Asset Two',
    unit_name='TA2',
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
)

signed_tx = asset_creation_txn.sign(private_key)
tx_id = algod_client.send_transaction(signed_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)

asset_id = algod_client.pending_transaction_info(tx_id)['asset-index']
asset_info = algod_client.asset_info(asset_id)
print(asset_info)</code></pre>
      
      <h3>Step 6: Store Generated Asset IDs in .env</h3><pre><code>asset_1 = 123456
asset_2 = 654321</code></pre>
      
      <h3>Step 7: Experiment with Opting the Contract into an Asset</h3>
      <p>If you're creating multiple listings, you need to opt the contract into each asset the first time.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(atc, call_abi_method='triggerOptIn', asset_to_opt_into=asset_1, fee_payment=wrapped_payment)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 8: Make an Asset for Algo Listing Box (All listing types are supported from parts 1-4)</h3>
      <p>Create an asset listing box to manage your asset listings.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.abi import ABIType
import os
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_payment = TransactionWithSigner(fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_1, 
    fee_payment=wrapped_payment)

asset_to_list_transaction = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1, index=asset_1)
wrapped_asset_list_transaction = TransactionWithSigner(asset_to_list_transaction, signer)

box_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=31_700)
wrapped_box_fee_payment = TransactionWithSigner(box_fee_payment_tx, signer)

current_global_listing_counter = algod_client.application_info(app_id)['params']['global-state'][0]['value']['bytes']
uint64_coder = ABIType.from_string('(uint64)')
b64_decoded_global_listing_counter = b64decode(current_global_listing_counter)
encoded_global_listing_counter = uint64_coder.decode(b64_decoded_global_listing_counter)[0]

listing_box_counter = encoded_global_listing_counter + 1
listing_box_coder = ABIType.from_string('(address,uint64)')
users_listing_box_name = listing_box_coder.encode((address, listing_box_counter))

asset_2 = int(os.getenv('asset_2'))

app_client.compose_call(
    atc, 
    call_abi_method='postUniversalListing', 
    asset_to_list=wrapped_asset_list_transaction, 
    asset_request=0, 
    asset_request_quantity=2_000_000,
    box_fee_mbr_payment=wrapped_box_fee_payment,
    transaction_parameters={'boxes': [[app_id, users_listing_box_name]]}
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 9: Check Respective Listing Information</h3>
      <p>Retrieve and verify the listing information from the contract.</p>
      <pre class="overflow-auto shadow-md"><code>import os
from algosdk.v2client.algod import AlgodClient
from algosdk.abi import ABIType
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))

boxes = algod_client.application_boxes(app_id)['boxes']

for box in boxes:
    box_name_b64encoded = box['name']
    print(b64decode(box_name_b64encoded))
    box_value = b64decode(algod_client.application_box_by_name(app_id, b64decode(box_name_b64encoded))['value'])
    print(box_value)

    #Asset for Algo: '(uint64,uint64)'
    #Asset for Asset: '(uint64,uint64,bool)'
    #Asset for Asset Quantity: '(uint64,uint64,uint64,bool)
    #Asset Quantity for Asset Quantity: '(uint64,uint64,uint64,uint64,bool)'
    #Universal Listing: '(uint64,uint64,uint64,uint64,bool)'
    listing_box_value_coder = ABIType.from_string('(uint64,uint64)')
    print(listing_box_value_coder.decode(box_value))
</code></pre>
      
      <h3>Step 10: Purchase the Asset with Your Buyer Private Key</h3>
    <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>
      <p>When generating a listing, the counter variable should be incremented.</p>
       <pre class="overflow-auto shadow-md"><code>counter = 1</code></pre>
       <p>Note; counter should match the number of listings generated so far.</p>

      <p>Execute the purchase of the asset using the buyer's private key.</p>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('buyer_private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should opt into the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_1)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

#5 tx for asset to asset payments

optin_fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=101_000)
wrapped_optin_payment = TransactionWithSigner(optin_fee_payment_tx, signer)

app_client.compose_call(
    atc, 
    call_abi_method='triggerOptIn', 
    asset_to_opt_into=asset_2, 
    fee_payment=wrapped_optin_payment)

asset_payment_tx = AssetTransferTxn(sender=address, sp=params, receiver=app_client.app_address, amt=3, index=asset_2)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

asset_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=2_000_000)
wrapped_asset_payment = TransactionWithSigner(asset_payment_tx, signer)

atc.add_transaction(wrapped_asset_payment)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='fulfillUniversalListing', 
    asset_transfer_fee=wrapped_fee_payment,
    asset_listed=asset_1, 
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]], 'accounts': [lister_address]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>

<h3>Step 11: Complete Listing Request and Redeem Buyers Asset</h3>
<pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from pathlib import Path
from algosdk.util import algos_to_microalgos
from algosdk.abi import ABIType
import os
from base64 import b64decode
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))
asset_2 = int(os.getenv('asset_2'))

'''
User should opt into the asset if they are not prepared to receive it
'''
#asset_opt_in_transaction = AssetTransferTxn(sender=address, sp=params, receiver=address, amt=0, index=asset_2)
#wrapped_opt_in_transaction = TransactionWithSigner(asset_opt_in_transaction, signer)
#atc.add_transaction(wrapped_opt_in_transaction)

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings
listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='claimUniversalListing', 
    asset_transfer_fee=wrapped_fee_payment,
    asset_requested=asset_2,
    listing_name=(lister_address,counter), 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
      
      <h3>Step 12: Experiment with Cancelling a Listing Request</h3>
      <p>If you fulfilled the previous request already, you will need to generate a new listing again with Step 8, and increment the "counter" variable from 1 to 2. For example:</p>
      <pre class="overflow-auto shadow-md"><code>counter = 2</code></pre>
      <pre class="overflow-auto shadow-md"><code>from algokit_utils import ApplicationClient
from algosdk.v2client.algod import AlgodClient
from algosdk.account import address_from_private_key
from algosdk.atomic_transaction_composer import AccountTransactionSigner, TransactionWithSigner, AtomicTransactionComposer
from algosdk.transaction import PaymentTxn
from algosdk.abi import ABIType
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

app_spec = Path(__file__).parent / './listings.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key)
params = algod_client.suggested_params()

app_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params,
)

atc = AtomicTransactionComposer()

asset_1 = int(os.getenv('asset_1'))

fee_payment_tx = PaymentTxn(sender=address, sp=params, receiver=app_client.app_address, amt=1000)
wrapped_fee_payment = TransactionWithSigner(fee_payment_tx, signer)

lister_address = address_from_private_key(os.getenv('private_key'))
counter = 1 #Remember to increment counter for additional listings

listing_box_coder = ABIType.from_string('(address,uint64)')
box_name = listing_box_coder.encode((lister_address, counter))

app_client.compose_call(
    atc, 
    call_abi_method='cancelUniversalListing', 
    listed_asset=asset_1, 
    listing_name=(lister_address,counter), 
    transfer_fee=wrapped_fee_payment, 
    transaction_parameters={'boxes': [[app_id, box_name]]})

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]

print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``, // You can input your initial code here if applicable
  },
  {
    id: 30,
    language: 'Python',
    title: 'ARC69 NFT Metadata and IPFS Integration',
    content: `
    <p>This tutorial guides you through creating an ARC69-compliant NFT with metadata stored on the blockchain and the image hosted on IPFS. It complements the video tutorial.</p>
    
    <h2>YouTube Tutorial</h2>
    <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
        <iframe
            class="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/EN9IPhTSz34?si=Ibp9sp0jLUpAE9e9"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
    
    <h2>Generating an Account</h2>
    <p>Use the following Python code to generate a new account for managing your ARC69 assets:</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)</code></pre>
    
    <h2>Funding the Account</h2>
    <p>Once the account is generated, it needs funding to submit transactions. Visit the <a href="https://bank.testnet.algorand.network/" target="_blank">Algorand Testnet Faucet</a> to add funds.</p>
    
    <h2>Displaying the NFT Image</h2>
    <p>For this tutorial, the image used is "firemonster.png". Make sure to place this image in the <code>public/images/</code> directory and reference it appropriately. Here’s the file path:</p>
    <img src="/images/firemonster.pn" alt="firemonster NFT Image Removed For Legal Reasons (Sorry guys <3)" class="w-full max-w-xs mx-auto rounded-lg shadow-md" />

    <h2>ARC69 Metadata Structure</h2>
    <p>In an ARC69 NFT, the image is immutable, but metadata (stored in the note field) can be updated. Images are hosted off-chain on IPFS, which ensures efficient and decentralized storage.</p>
    <p>In this example, we’ll use Pinata as our IPFS service. Generate an API key, secret, and JWT on <a href="https://pinata.cloud/" target="_blank">Pinata</a> and store them in your <code>.env</code> file.</p>
    
    <h3>Example Code: Minting an ARC69 NFT</h3>
    <p>Below is a code snippet for minting an ARC69 NFT, including metadata in the note field. This code uploads the image to IPFS and sets up the NFT on Algorand.</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import wait_for_confirmation, AssetConfigTxn
from dotenv import load_dotenv
from pinata import Pinata
from algosdk.account import address_from_private_key
import os
import json

load_dotenv()

pinata_api_key = os.getenv('api_key')
pinata_api_secret = os.getenv('api_secret')
pinata_jwt = os.getenv('jwt')
pinata_client = Pinata(api_key=pinata_api_key, secret_key=pinata_api_secret, access_token=pinata_jwt)

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

# Minting ARC69 NFT
image_path = './firemonster.png'
response = pinata_client.pin_file(image_path)
image_ipfs_hash = response['data']['IpfsHash']
viewable_hash = f'https://gateway.pinata.cloud/ipfs/' + image_ipfs_hash

metadata = {
    "standard": "arc69",
    "mime_type": "image/png",
    "properties": {
        "Type": "Fire",
        "Description": "A fire monster with a fiery tail",
        "Level": "1",
        "Experience": "0",
    }
}

params = algod_client.suggested_params()

asset_config_transaction = AssetConfigTxn(
    sender=address,
    sp=params,
    total=1,
    decimals=0,
    default_frozen=False,
    manager=address,
    reserve=address,
    asset_name="Test firemonster",
    unit_name="TC#1",
    url=viewable_hash,
    strict_empty_address_check=False,
    note=json.dumps(metadata).encode()
)

signed_ac_tx = asset_config_transaction.sign(private_key)
tx_id = algod_client.send_transaction(signed_ac_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)
asset_index = algod_client.pending_transaction_info(tx_id)['asset-index']
print(asset_index)
    </code></pre>

    <h3>Example Code: Updating ARC69 Metadata</h3>
    <p>After minting, you can update specific metadata fields, such as experience or level, by sending an asset configuration transaction with updated metadata in the note field.</p>
    <pre class="overflow-auto shadow-md"><code>metadata = {
    "standard": "arc69",
    "mime_type": "image/png",
    "properties": {
        "Type": "Fire",
        "Description": "A fire monster with a fiery tail",
        "Level": "4",
        "Experience": "15",
    }
}

asset_config_transaction = AssetConfigTxn(
    index=asset_index,
    sender=address,
    sp=params,
    manager=address,
    reserve=address,
    strict_empty_address_check=False,
    note=json.dumps(metadata).encode()
)

signed_ac_tx = asset_config_transaction.sign(private_key)
tx_id = algod_client.send_transaction(signed_ac_tx)
print(tx_id)</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 31,
    language: 'Python',
    title: 'Creating and Updating ARC19 NFTs with IPFS Metadata',
    content: `
    <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/HRowUd3d434"                
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    <p>This tutorial demonstrates how to create an ARC19-compliant NFT with mutable metadata hosted on IPFS. The metadata can be updated by changing the reserve address, which points to a new IPFS hash for the metadata. Follow along with the code examples and steps below.</p>

    <h2>Generating an Account</h2>
    <p>Use the following Python code to generate a new account that will be used for managing the ARC19 NFT:</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.account import generate_account

private_key, address = generate_account()
print(private_key, address)</code></pre>
    
    <h2>Funding the Account</h2>
    <p>To submit transactions, you need to fund the generated account. Use the <a href="https://bank.testnet.algorand.network/" target="_blank">Algorand Testnet Faucet</a> to add funds.</p>
    
    <h2>ARC19 Overview</h2>
    <p>With ARC19 NFTs, the metadata is mutable. The reserve address serves as a pointer to metadata stored on IPFS. By updating this address, the NFT’s metadata can change, allowing for mutable properties while the image and other data are hosted on IPFS.</p>

    <h3>Image Display</h3>
    <img src="/images/firemonster.pn" alt="firemonster Image Removed For Legal Reasons (Sorry guys <3)" class="w-full max-w-xs mx-auto rounded-lg shadow-md" />
    <img src="/images/firemonster2.0.pn" alt="firemonster Updated Image Removed For Legal Reasons (Sorry guys <3)" class="w-full max-w-xs mx-auto rounded-lg shadow-md" />

    <h2>Minting an ARC19 NFT</h2>
    <p>The code snippet below uploads an image to IPFS via Pinata, then creates an ARC19-compliant NFT on Algorand, linking to the image metadata:</p>
    <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algosdk.transaction import wait_for_confirmation, AssetConfigTxn
from dotenv import load_dotenv
from pinata import Pinata
from algosdk.account import address_from_private_key
import os
import json
from PIL import Image
from cid import make_cid
import multihash
import hashlib
from algosdk.encoding import encode_address

load_dotenv()

# Set up Pinata client for IPFS
pinata_api_key = os.getenv('api_key')
pinata_api_secret = os.getenv('api_secret')
pinata_jwt = os.getenv('jwt')
pinata_client = Pinata(api_key=pinata_api_key, secret_key=pinata_api_secret, access_token=pinata_jwt)

# Set up Algorand client
algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

private_key = os.getenv('private_key')
address = address_from_private_key(private_key)

# Mint ARC19 NFT
image_path = './firemonster.png'
response = pinata_client.pin_file(image_path)
image_ipfs_hash = response['data']['IpfsHash']
viewable_hash = f'https://gateway.pinata.cloud/ipfs/' + image_ipfs_hash

img = Image.open(image_path)

metadata = {
    "standard": "arc19",
    "image": viewable_hash,
    "image_mime_type": "image/png",
    "image_integrity": "sha256-" + str(hashlib.sha256(img.tobytes()).hexdigest()),
    "properties": {
        "Type": "Fire",
        "Description": "A fire monster with a fiery tail",
        "Level": "1",
        "Experience": "0",
    }
}

file_name = './metadata.json'
with open(file_name, 'w') as f:
    json.dump(metadata, f)

json_pin_hash = pinata_client.pin_file(file_name)['data']['IpfsHash']
digest = multihash.decode(make_cid(json_pin_hash).multihash).digest
arc19_algorand_address = encode_address(digest)
print(f'Original ARC19 address: {arc19_algorand_address}')

params = algod_client.suggested_params()

asset_config_transaction = AssetConfigTxn(
    sender=address,
    sp=params,
    total=1,
    decimals=0,
    default_frozen=False,
    manager=address,
    reserve=arc19_algorand_address,
    asset_name="Test firemonster",
    unit_name="TC#1",
    url="template-ipfs://{ipfscid:0:dag-pb:reserve:sha2-256}",
    strict_empty_address_check=False,
)

signed_ac_tx = asset_config_transaction.sign(private_key)
tx_id = algod_client.send_transaction(signed_ac_tx)
print(tx_id)

wait_for_confirmation(algod_client, tx_id)
asset_index = algod_client.pending_transaction_info(tx_id)['asset-index']
print(asset_index)</code></pre>

    <h2>Updating ARC19 Metadata</h2>
    <p>The following code example demonstrates updating the ARC19 metadata by pointing the reserve address to a new IPFS link, representing updated metadata:</p>
    <pre class="overflow-auto shadow-md"><code>image_path = './firemonster2.0.png'
response = pinata_client.pin_file(image_path)
image_ipfs_hash = response['data']['IpfsHash']
viewable_hash = f'https://gateway.pinata.cloud/ipfs/' + image_ipfs_hash

img = Image.open(image_path)

metadata = {
    "standard": "arc19",
    "image": viewable_hash,
    "image_mime_type": "image/png",
    "image_integrity": "sha256-" + str(hashlib.sha256(img.tobytes()).hexdigest()),
    "properties": {
        "Type": "Fire",
        "Description": "A fire monster with a fiery tail",
        "Level": "4",
        "Experience": "15",
    }
}

file_name = './metadata.json'
with open(file_name, 'w') as f:
    json.dump(metadata, f)

json_pin_hash = pinata_client.pin_file(file_name)['data']['IpfsHash']
digest = multihash.decode(make_cid(json_pin_hash).multihash).digest
arc19_algorand_address = encode_address(digest)
print(f'New ARC19 address: {arc19_algorand_address}')

params = algod_client.suggested_params()

asset_config_transaction = AssetConfigTxn(
    index=asset_index,
    sender=address,
    sp=params,
    default_frozen=False,
    manager=address,
    reserve=arc19_algorand_address,
    url="template-ipfs://{ipfscid:0:dag-pb:reserve:sha2-256}",
    strict_empty_address_check=False,
)

signed_ac_tx = asset_config_transaction.sign(private_key)
tx_id = algod_client.send_transaction(signed_ac_tx)
print(tx_id)</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 32,
    language: 'Python',
    title: 'ARC69 Minter and Modifier Part 1',
    content: `
        <h2>Video Tutorial</h2>
<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
    <iframe
        class="absolute top-0 left-0 w-full h-full border-0"
        src="https://www.youtube.com/embed/kwMR_0300Og"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
        <h2>Contract - Registering and Determining the User's Monster</h2>
        <p>Compile the contract using:</p>
        <pre class="overflow-auto shadow-md"><code>algokit compile arc69NFTmodifier.py</code></pre>

        <h3>Python Code</h3>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, Global, GlobalState, gtxn, BoxRef, Txn, op
from algopy.arc4 import abimethod, Struct
from algopy.arc4 import UInt64 as arc4UInt64
from algopy.arc4 import String as arc4String

class availableMonster(Struct):
    monster_name: arc4String
    monster_type: arc4String
    monster_description: arc4String
    monster_ipfs_hash: arc4String

class arc69NFTmodifier(ARC4Contract):
    def __init__(self) -> None:
        self.monsterUnitCounter = GlobalState(arc4UInt64(0))
    
    @abimethod
    def registerNewMonsterData(
        self,
        monster_name: arc4String,
        monster_type: arc4String,
        monster_description: arc4String,
        monster_ipfs_hash: arc4String,
        payment_txn: gtxn.PaymentTransaction,
    ) -> arc4String:
        
        assert payment_txn.receiver == Global.current_application_address
        self.monsterUnitCounter.value = arc4UInt64(self.monsterUnitCounter.value.native + 1)
        
        box_ref = BoxRef(key=self.monsterUnitCounter.value.bytes)
        value, exists = box_ref.maybe()
        assert not exists
        
        new_monster_info = availableMonster(
            monster_name=monster_name,
            monster_type=monster_type,
            monster_description=monster_description,
            monster_ipfs_hash=monster_ipfs_hash
        )
        
        box_ref.create(size=new_monster_info.bytes.length)
        box_ref.put(new_monster_info.bytes)
        
        return arc4String('Monster Registered to Contract: ') + monster_name

    @abimethod
    def determineUserMonster(
        self,
        payment_txn: gtxn.PaymentTransaction
    ) -> tuple[arc4String, arc4UInt64]:
        
        assert payment_txn.amount == 18_500
        assert payment_txn.receiver == Global.current_application_address
        
        randomizer = arc4UInt64(
            Global.latest_timestamp + Global.round + arc4UInt64.from_bytes(Txn.tx_id[0:8]).native % arc4UInt64.from_bytes(Txn.tx_id[-8:]).native
        )
        
        hashed_randomizer = op.sha256(randomizer.bytes)
        
        monster_selection = arc4UInt64((arc4UInt64.from_bytes(hashed_randomizer[0:8]).native % self.monsterUnitCounter.value.native) + 1)
        
        users_claim_box = BoxRef(key=Txn.sender.bytes)
        value, exists = users_claim_box.maybe()
        assert not exists
        
        users_claim_box.create(size=8)
        users_claim_box.put(monster_selection.bytes)
        
        return arc4String('Users Monster # Selected:'), monster_selection
        </code></pre>

        <h2>Setting Up Environment Variables (.env)</h2>
        <pre class="overflow-auto shadow-md"><code>private_key = ENTER PRIVATE KEY
address = ENTER ADDRESS (OPTIONAL)
api_key = ENTER API KEY
api_secret = ENTER API SECRET
jwt = ENTER JWT
algod_token = 
algod_server = https://testnet-api.4160.nodely.dev
app_id = ENTER APP ID GENERATED</code></pre>

        <h2>Upload Monster Images to IPFS</h2>
        <div class="flex justify-center space-x-4">
    <img src="/images/firemonster.pn" alt="firemonster Image Removed For Legal Reasons (Sorry guys <3)" class="w-10 h-auto rounded-lg shadow-md" />
    <img src="/images/grassmonster.pn" alt="grassmonster Image Removed For Legal Reasons (Sorry guys <3)" class="w-10 h-auto rounded-lg shadow-md" />
    <img src="/images/watermonster.pn" alt="watermonster Image Removed For Legal Reasons (Sorry guys <3)" class="w-10 h-auto rounded-lg shadow-md" />
</div>
        <pre class="overflow-auto shadow-md"><code>from pinata import Pinata
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv('api_key')
api_secret = os.getenv('api_secret')
jwt = os.getenv('jwt')

pinata = Pinata(api_key=api_key, secret_key=api_secret, access_token=jwt)

file_names = ['./pokeimages/grassmonster.png','./pokeimages/firemonster.png','./pokeimages/watermonster.png']
for name in file_names:
    response = pinata.pin_file(name)
    image_ipfs_hash = response['data']['IpfsHash']
    viewable_hash = f'https://gateway.pinata.cloud/ipfs/' + image_ipfs_hash
    print(image_ipfs_hash, viewable_hash)</code></pre>

        <h2>Registering Monster for Minting to the Contract</h2>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from dotenv import load_dotenv
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)

monster_name_1 = 'grassmonster'
monster_name_2 = 'firemonster'
monster_name_3 = 'watermonster'

monster_type_1 = 'Grass'
monster_type_2 = 'Fire'
monster_type_3 = 'Water'

monster_description_1 = 'A grass monster'
monster_description_2 = 'A fire monster'
monster_description_3 = 'A water monster'

monster_ipfs_hash_1 = 'Qmc75zNUFoFFX3uPcjnUMqhvuzezHF9tTpgbf5pph2XegF'
monster_ipfs_hash_2 = 'QmP2M7nPDjhU9hPr8ManjzyFzBVEJDT3LKAAKC2o5f639q'
monster_ipfs_hash_3 = 'QmRbPCwbQ7vps64kPUHygCkSmW36FkCLbET9X7cEjtPHJV'

atc = AtomicTransactionComposer()

monster_info_coder = ABIType.from_string('(string,string,string,string,uint64)')
total_bytes_1 = len(monster_info_coder.encode((monster_name_1, monster_type_1, monster_description_1, monster_ipfs_hash_1, 0)))
total_bytes_2 = len(monster_info_coder.encode((monster_name_2, monster_type_2, monster_description_2, monster_ipfs_hash_2, 0)))
total_bytes_3 = len(monster_info_coder.encode((monster_name_3, monster_type_3, monster_description_3, monster_ipfs_hash_3, 0)))

box_cost_1 = 2500 + (400 * total_bytes_1)
box_cost_2 = 2500 + (400 * total_bytes_2)
box_cost_3 = 2500 + (400 * total_bytes_3)

mbr_fee_payment_tx_1 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=box_cost_1,
    note='#1'
)
wrapped_payment_tx_1 = TransactionWithSigner(mbr_fee_payment_tx_1, signer)

mbr_fee_payment_tx_2 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=box_cost_2,
    note='#2'
)
wrapped_payment_tx_2 = TransactionWithSigner(mbr_fee_payment_tx_2, signer)

mbr_fee_payment_tx_3 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=box_cost_3,
    note='#3'
)
wrapped_payment_tx_3 = TransactionWithSigner(mbr_fee_payment_tx_3, signer)

box_ref_1 = (1).to_bytes(8, 'big')
box_ref_2 = (2).to_bytes(8, 'big')
box_ref_3 = (3).to_bytes(8, 'big')

application_client.compose_call(
    atc, 
    call_abi_method='registerNewMonsterData', 
    monster_name=monster_name_1, 
    monster_type=monster_type_1,
    monster_description=monster_description_1,
    monster_ipfs_hash=monster_ipfs_hash_1,
    payment_txn=wrapped_payment_tx_1,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1]]
    }
)

application_client.compose_call(
    atc, 
    call_abi_method='registerNewMonsterData', 
    monster_name=monster_name_2, 
    monster_type=monster_type_2,
    monster_description=monster_description_2,
    monster_ipfs_hash=monster_ipfs_hash_2,
    payment_txn=wrapped_payment_tx_2,
    transaction_parameters={
        'boxes':[[app_id, box_ref_2]]
    }
)

application_client.compose_call(
    atc, 
    call_abi_method='registerNewMonsterData', 
    monster_name=monster_name_3, 
    monster_type=monster_type_3,
    monster_description=monster_description_3,
    monster_ipfs_hash=monster_ipfs_hash_3,
    payment_txn=wrapped_payment_tx_3,
    transaction_parameters={
        'boxes':[[app_id, box_ref_3]]
    }
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</code></pre>

<h2>Determining the User's Monster</h2>
<pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from algosdk.encoding import decode_address
from dotenv import load_dotenv
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)


atc = AtomicTransactionComposer()

mbr_fee_payment_tx_1 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=18_500,
    note='#1'
)
wrapped_payment_tx_1 = TransactionWithSigner(mbr_fee_payment_tx_1, signer)


box_ref_1 = decode_address(address)


application_client.compose_call(
    atc, 
    call_abi_method='determineUserMonster', 
    payment_txn=wrapped_payment_tx_1,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1]]
    }
)


results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</pre></code>


        <h2>Confirming Existence of Monster Info in Contract</h2>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
import os
from base64 import b64decode
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))
app_boxes = algod_client.application_boxes(app_id)['boxes']

monster_info_coder = ABIType.from_string('(string,string,string,string)')

for box in app_boxes:
    box_name = b64decode(box['name'])
    if len(box_name) == 8: #This is a monster info box 
        box_value = algod_client.application_box_by_name(app_id, box_name)['value']
        decoded_box_value = monster_info_coder.decode(b64decode(box_value))
        print(decoded_box_value)
        </code></pre>

        <h2>Confirming Monster Selected for the User</h2>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
import os
from base64 import b64decode
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))
app_boxes = algod_client.application_boxes(app_id)['boxes']

monster_info_coder = ABIType.from_string('(uint64)')

for box in app_boxes:
    box_name = b64decode(box['name'])
    if len(box_name) == 32: #This is the users selected monster ready to claim
                            #contains only the monster #, eg; monster #1, monster #2, or monster #3 
        box_value = algod_client.application_box_by_name(app_id, box_name)['value']
        decoded_box_value = monster_info_coder.decode(b64decode(box_value))
        print(decoded_box_value)
        </code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 33,
    language: 'Python',
    title: 'ARC69 Minter and Modifier Part 2',
    content: `
        <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/kwMR_0300Og"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <h2>Contract - User Mints and Claims Monster</h2>
        <p>Compile the contract using:</p>
        <pre class="overflow-auto shadow-md"><code>algokit compile arc69NFTmodifier.py</code></pre>

        <h3>Python Code</h3>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, itxn, Global, GlobalState, UInt64, gtxn, Bytes, subroutine, String, BoxRef, Txn, op, LocalState, Account
from algopy.arc4 import abimethod, Struct, Address, Bool
from algopy.arc4 import UInt64 as arc4UInt64
from algopy.arc4 import String as arc4String

class availableMonster(Struct):
    monster_name: arc4String
    monster_type: arc4String
    monster_description: arc4String
    monster_ipfs_hash: arc4String

class userMonsterInfo(Struct):
    uid: arc4UInt64
    owner: Address
    asset_id: arc4UInt64
    monster_id: arc4UInt64
    level: arc4UInt64
    exp: arc4UInt64
    training: Bool
    training_start_time: arc4UInt64

class arc69NFTmodifier(ARC4Contract):
    def __init__(self) -> None:
        self.monsterUnitCounter = GlobalState(arc4UInt64(0))
        self.monsterCreated = GlobalState(arc4UInt64(0))
        
    @subroutine
    def itoa(self, i: UInt64) -> Bytes:
        digits = Bytes(b"0123456789")
        radix = digits.length
        if i < radix:
            return digits[i]
        return self.itoa(i // radix) + digits[i % radix]
        
    @abimethod
    def registerNewMonsterData(
        self,
        monster_name: arc4String,
        monster_type: arc4String,
        monster_description: arc4String,
        monster_ipfs_hash: arc4String,
        payment_txn: gtxn.PaymentTransaction,
    ) -> arc4String:
        
        assert payment_txn.receiver == Global.current_application_address
        self.monsterUnitCounter.value = arc4UInt64(self.monsterUnitCounter.value.native + 1)
        
        box_ref = BoxRef(key=self.monsterUnitCounter.value.bytes)
        value, exists = box_ref.maybe()
        assert not exists
        
        new_monster_info = availableMonster(
            monster_name=monster_name,
            monster_type=monster_type,
            monster_description=monster_description,
            monster_ipfs_hash=monster_ipfs_hash
        )
        
        box_ref.create(size=new_monster_info.bytes.length)
        box_ref.put(new_monster_info.bytes)
        
        return arc4String('Monster Registered to Contract: ') + monster_name
    </code></pre>

        <h3>Confirming User Mint</h3>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from algosdk.encoding import decode_address
from dotenv import load_dotenv
from base64 import b64decode
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')
private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)

atc = AtomicTransactionComposer()

decoded_address = decode_address(address)
monster_selected_box_name = decoded_address

uint64_coder = ABIType.from_string('(uint64)')
user_monster_selected = algod_client.application_box_by_name(app_id, monster_selected_box_name)['value']
b64_decoded_value = b64decode(user_monster_selected)

global_states = algod_client.application_info(app_id)['params']['global-state']
for key in global_states:
    if b64decode(key['key']) == b'monsterCreated':
        current_uid = b64decode(key['value']['bytes'])

total_bytes = (7 * 8) + (32 * 2) + 1
box_cost = (total_bytes * 400) + 2500 + 102_000

mbr_fee_payment_tx_1 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=box_cost,
    note='#1'
)
wrapped_payment_tx_1 = TransactionWithSigner(mbr_fee_payment_tx_1, signer)

box_ref_1 = b64_decoded_value              # The monster selected #1 , #2, or #3
box_ref_2 = decoded_address                # The users address decoded
box_ref_3 = current_uid + decoded_address  # The next unique ID counter + the users address

application_client.compose_call(
    atc, 
    call_abi_method='mintUserMonster', 
    payment_txn=wrapped_payment_tx_1,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1], [app_id, box_ref_2], [app_id, box_ref_3]]
    }
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</code></pre>

        <h3>Confirming User Claim</h3>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from algosdk.encoding import decode_address
from dotenv import load_dotenv
from base64 import b64decode
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)

atc = AtomicTransactionComposer()

decoded_address = decode_address(address)

mbr_fee_payment_tx_1 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=2000,
    note='#1'
)
wrapped_payment_tx_1 = TransactionWithSigner(mbr_fee_payment_tx_1, signer)
atc.add_transaction(wrapped_payment_tx_1)

users_monster = 728462064

user_optin_tx = AssetTransferTxn(
    sender=address,
    receiver=address,
    sp=params,
    amt=0,
    index=users_monster
)

wrapped_user_optin_tx = TransactionWithSigner(user_optin_tx, signer)

current_uid = (0).to_bytes(8, 'big')
box_ref_1 = current_uid + decoded_address

application_client.compose_call(
    atc, 
    call_abi_method='claimMonster', 
    opt_in_txn=wrapped_user_optin_tx,
    uid=0,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1]],
        'foreign_assets': [users_monster]
    }
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 34,
    language: 'Python',
    title: 'ARC69 Minter and Modifier Part 3',
    content: `
        <h2>Video Tutorial</h2>
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md" style="padding-top: 56.25%;">
            <iframe
                class="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/kwMR_0300Og"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <h2>Contract - User Sends Monster To Training (Stakes) and Removes from Training (Unstakes)</h2>
        <p>Compile the contract using:</p>
        <pre class="overflow-auto shadow-md"><code>algokit compile arc69NFTmodifier.py</code></pre>
        <pre class="overflow-auto shadow-md"><code>from algopy import ARC4Contract, itxn, Global, GlobalState, UInt64, gtxn, Bytes, subroutine, String, BoxRef, Txn, op, LocalState, Account
from algopy.arc4 import abimethod, Struct, Address, Bool
from algopy.arc4 import UInt64 as arc4UInt64
from algopy.arc4 import String as arc4String

class availableMonster(Struct):
    monster_name: arc4String
    monster_type: arc4String
    monster_description: arc4String
    monster_ipfs_hash: arc4String
    
class userMonsterInfo(Struct):
    uid: arc4UInt64
    owner: Address
    asset_id: arc4UInt64
    monster_id: arc4UInt64
    level: arc4UInt64
    exp: arc4UInt64
    training: Bool
    training_start_time: arc4UInt64

class arc69NFTmodifier(ARC4Contract):
    def __init__(self) -> None:
        self.monsterUnitCounter = GlobalState(arc4UInt64(0))
        self.monsterCreated = GlobalState(arc4UInt64(0))
        
    @subroutine
    def itoa(self, i: UInt64) -> Bytes:
        digits = Bytes(b"0123456789")
        radix = digits.length
        if i < radix:
            return digits[i]
        return self.itoa(i // radix) + digits[i % radix]      
    
    @abimethod
    def registerNewMonsterData(
        self,
        monster_name: arc4String,
        monster_type: arc4String,
        monster_description: arc4String,
        monster_ipfs_hash: arc4String,
        payment_txn: gtxn.PaymentTransaction,
    ) -> arc4String:        
        
       # assert payment_txn.amount
        assert payment_txn.receiver == Global.current_application_address
        
        self.monsterUnitCounter.value = arc4UInt64(self.monsterUnitCounter.value.native + 1)
        
        box_ref = BoxRef(key=self.monsterUnitCounter.value.bytes)
        value, exists = box_ref.maybe()
        assert not exists
        
        new_monster_info = availableMonster(
            monster_name=monster_name,
            monster_type=monster_type,
            monster_description=monster_description,
            monster_ipfs_hash=monster_ipfs_hash
        )
        
        box_ref.create(size=new_monster_info.bytes.length)
        box_ref.put(new_monster_info.bytes)
        
        
        return arc4String('Monster Registered to Contract: ') + monster_name    
    
    @abimethod
    def determineUserMonster(
        self,
        payment_txn: gtxn.PaymentTransaction
    ) -> tuple[arc4String, arc4UInt64]:
        
        assert payment_txn.amount == 18_500
        assert payment_txn.receiver == Global.current_application_address
        
        randomizer = arc4UInt64(
            Global.latest_timestamp + Global.round + arc4UInt64.from_bytes(Txn.tx_id[0:8]).native % arc4UInt64.from_bytes(Txn.tx_id[-8:]).native
        )
        
        hashed_randomizer = op.sha256(randomizer.bytes)
        
        monster_selection = arc4UInt64((arc4UInt64.from_bytes(hashed_randomizer[0:8]).native % self.monsterUnitCounter.value.native) + 1)
        
        users_claim_box = BoxRef(key=Txn.sender.bytes)
        value, exists = users_claim_box.maybe()
        assert not exists
        
        users_claim_box.create(size=8)
        users_claim_box.put(monster_selection.bytes)
        
        return arc4String('Users Monster # Selected:'), monster_selection
        
    @abimethod()
    def mintUserMonster(
        self,
        payment_txn: gtxn.PaymentTransaction
    ) -> tuple[arc4String, UInt64]:

        assert payment_txn.amount >= 152900
        assert payment_txn.receiver == Global.current_application_address
        
        users_claim_box = BoxRef(key=Txn.sender.bytes)
        claim_box_value, exists = users_claim_box.maybe()
        assert exists
        
        monster_selection = arc4UInt64.from_bytes(claim_box_value)
        
        monster_info_bytes = BoxRef(key=monster_selection.bytes)
        monster_info_value, exists = monster_info_bytes.maybe()
        assert exists
        
        available_monster_info = availableMonster.from_bytes(monster_info_value)
        unit_name_int_as_string = String.from_bytes(self.itoa(monster_selection.native))
        
        uid_as_string = String.from_bytes(self.itoa(self.monsterCreated.value.native))        
        
        monster_creation_tx = itxn.AssetConfig(
            total=1,
            manager=Global.current_application_address,
            asset_name=available_monster_info.monster_name.native,
            unit_name='PK#' + unit_name_int_as_string,
            decimals=0,
            url= 'https://gateway.pinata.cloud/ipfs/' + available_monster_info.monster_ipfs_hash.native,
            note = (
                '{"standard": "arc69", "mime_type": "image/png", "properties": {'
                '"Type": "' + available_monster_info.monster_type.native + '", '
                '"Description": "' + available_monster_info.monster_description.native + '", '
                '"Level": "1", '
                '"Experience": "0", '
                '"Monster Number": "' + unit_name_int_as_string + '", '
                '"UID": "' + uid_as_string + '" }}' 
            ),
            fee=Global.min_txn_fee
        ).submit()
        
        
        user_monster_box = BoxRef(key=self.monsterCreated.value.bytes + Txn.sender.bytes)
        user_monster_box_value, exists = user_monster_box.maybe()
        assert not exists
        
        new_user_monster_info = userMonsterInfo(
            uid=self.monsterCreated.value,
            owner=Address(Txn.sender),
            asset_id=arc4UInt64(monster_creation_tx.created_asset.id),
            monster_id=monster_selection,
            level=arc4UInt64(1),
            exp=arc4UInt64(0),
            training=Bool(False),
            training_start_time=arc4UInt64(0),
        )
        
        
        user_monster_box.create(size=new_user_monster_info.bytes.length)
        user_monster_box.put(new_user_monster_info.bytes)
        
        users_claim_box.delete()
        
        self.monsterCreated.value = arc4UInt64(self.monsterCreated.value.native + 1)
        
        return arc4String('User monster generated, asset ID: '), monster_creation_tx.created_asset.id
        
        
    @abimethod
    def claimMonster(
        self,
        opt_in_txn: gtxn.AssetTransferTransaction,
        uid: arc4UInt64
    ) -> String:
        
        user_monster_box = BoxRef(key=uid.bytes + Txn.sender.bytes)
        user_monster_box_value, exists = user_monster_box.maybe()
        
        assert exists
        
        users_monster_info = userMonsterInfo.from_bytes(user_monster_box_value)
        
        #assert users_monster_info.owner == Address(Txn.sender)
        #assert opt_in_txn.xfer_asset.id == users_monster_info.asset_id
        
        itxn.AssetTransfer(
            asset_receiver=Txn.sender,
            xfer_asset=users_monster_info.asset_id.native,
            fee=Global.min_txn_fee,
            asset_amount=1
        ).submit()        
        
        return String('User received their monster')       
                
    @abimethod
    def trainMonster(
        self,
        stake_monster_tx: gtxn.AssetTransferTransaction,
        uid: arc4UInt64
    ) -> String:
        
        assert stake_monster_tx.asset_amount == 1
        assert stake_monster_tx.asset_receiver == Global.current_application_address
        
        monster_to_train = stake_monster_tx.xfer_asset.id
        
        users_monster_info = BoxRef(key=uid.bytes + Txn.sender.bytes)
        value, exists = users_monster_info.maybe()
        assert exists
        
        current_monster_info = userMonsterInfo.from_bytes(value)
        assert monster_to_train == current_monster_info.asset_id
        
        current_monster_info.training_start_time = arc4UInt64(Global.latest_timestamp)
        current_monster_info.training = Bool(True)
        
        users_monster_info.put(current_monster_info.bytes)
    
        return String("Monster Staked")
        
        
    @abimethod
    def removeMonsterFromTraining(
        self,
        monster_requested_uid: arc4UInt64
    ) -> String:
        
        users_monster_info_box = BoxRef(key=monster_requested_uid.bytes + Txn.sender.bytes)
        users_monster_info_value, exists = users_monster_info_box.maybe()
        assert exists
        
        current_users_monster_info = userMonsterInfo.from_bytes(users_monster_info_value)
        
        general_monster_info_box = BoxRef(key=current_users_monster_info.monster_id.bytes)
        general_monster_info_value, exists = general_monster_info_box.maybe()
        
        general_monster_info = availableMonster.from_bytes(general_monster_info_value)


        unit_name_as_string = String.from_bytes(self.itoa(current_users_monster_info.monster_id.native))
        
        initial_training_time = current_users_monster_info.training_start_time.native
        current_time = Global.latest_timestamp
        time_difference = current_time - initial_training_time
        
        current_level = current_users_monster_info.level.native
        current_experience = current_users_monster_info.exp.native
        
        base_experience = UInt64(200)
        cumulative_experience = current_level * base_experience
        
        total_experience = current_experience + time_difference
        
        if total_experience >= cumulative_experience:
            levels_gained = (total_experience + base_experience - cumulative_experience) // base_experience
            
            new_level = current_level + levels_gained
            new_experience = total_experience - ((new_level - 1) * base_experience)
            
        else:
            new_level = current_level
            new_experience = total_experience
            
            
        new_level_string = String.from_bytes(self.itoa(new_level))
        new_experience_string = String.from_bytes(self.itoa(new_experience))

        uid_as_string = String.from_bytes(self.itoa(current_users_monster_info.uid.native))
        
        itxn.AssetConfig(
            sender=Global.current_application_address,
            manager=Global.current_application_address,
            config_asset=current_users_monster_info.asset_id.native,
            note = (
                '{"standard": "arc69", "mime_type": "image/png", "properties": {'
                '"Type": "' + general_monster_info.monster_type.native + '", '
                '"Description": "' + general_monster_info.monster_description.native + '", '
                '"Level": "' + new_level_string + '", '
                '"Experience": "' + new_experience_string + '", '
                '"Monster Number": "' + unit_name_as_string + '", '
                '"UID": "' + uid_as_string + '" }}' 
            ),
            fee=Global.min_txn_fee
        ).submit()
        
        itxn.AssetTransfer(
            asset_receiver=Txn.sender,
            asset_amount=1,
            xfer_asset=current_users_monster_info.asset_id.native,
            fee=Global.min_txn_fee
        ).submit()
        
        
        new_users_monster_info = current_users_monster_info.copy()
        new_users_monster_info.level = arc4UInt64(new_level)
        new_users_monster_info.exp = arc4UInt64(new_experience)
        new_users_monster_info.training = Bool(False)

        users_monster_info_box.put(new_users_monster_info.bytes)
        
        return String('Monster Removed from Stake')</code></pre>

        <h3>Seeing the Current Status of the User's Monster</h3>
        <p>Note: The UID in the metadata and the user's address is the box name</p>
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
import os
from base64 import b64decode
from algosdk.abi import ABIType
from dotenv import load_dotenv

load_dotenv()

algod_token = os.getenv('algod_token')
algod_server = os.getenv('algod_server')
algod_client = AlgodClient(algod_token, algod_server)

app_id = int(os.getenv('app_id'))
app_boxes = algod_client.application_boxes(app_id)['boxes']

monster_info_coder = ABIType.from_string('(uint64,address,uint64,uint64,uint64,uint64,bool,uint64)')

for box in app_boxes:
    box_name = b64decode(box['name'])
    if len(box_name) == 40: #This is user specific monster information (box name is uid for monster [8 bytes] + user address [32 bytes])
        box_value = algod_client.application_box_by_name(app_id, )['value']
        decoded_box_value = monster_info_coder.decode(b64decode(box_value))
        print(decoded_box_value)</code></pre>

        <h2>Executing in Python</h2>

        <h2>The Monster Level-up System</h2>
        <p>Note: Experience and level gain are calculated based on time staked, with each second providing an additional experience point.</p>
        <pre class="overflow-auto shadow-md"><code>initial_training_time = current_users_monster_info.training_start_time.native
current_time = Global.latest_timestamp
time_difference = current_time - initial_training_time

current_level = current_users_monster_info.level.native
current_experience = current_users_monster_info.exp.native

base_experience = UInt64(200)
cumulative_experience = current_level * base_experience

total_experience = current_experience + time_difference

if total_experience >= cumulative_experience:
    levels_gained = (total_experience + base_experience - cumulative_experience) // base_experience
    
    new_level = current_level + levels_gained
    new_experience = total_experience - ((new_level - 1) * base_experience)
    
else:
    new_level = current_level
    new_experience = total_experience</code></pre>

        <h3>Staking the Monster</h3>
       
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from algosdk.encoding import decode_address
from dotenv import load_dotenv
from base64 import b64decode
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)

atc = AtomicTransactionComposer()

decoded_address = decode_address(address)

users_monster = 728462064

stake_monster_tx = AssetTransferTxn(
    sender=address,
    receiver=application_client.app_address,
    sp=params,
    amt=1,
    index=users_monster
)

wrapped_stake_tx = TransactionWithSigner(stake_monster_tx, signer)

current_uid = (0).to_bytes(8, 'big')
box_ref_1 = current_uid + decoded_address

application_client.compose_call(
    atc, 
    call_abi_method='trainMonster', 
    stake_monster_tx=wrapped_stake_tx,
    uid=0,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1]],
        'foreign_assets': [users_monster]
    }
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</code></pre>

        <h3>Unstaking the Monster</h3>
      
        <pre class="overflow-auto shadow-md"><code>from algosdk.v2client.algod import AlgodClient
from algokit_utils import ApplicationClient
from algosdk.atomic_transaction_composer import AtomicTransactionComposer, AccountTransactionSigner, TransactionWithSigner
from algosdk.transaction import PaymentTxn, AssetTransferTxn
from algosdk.account import address_from_private_key
from pathlib import Path
from algosdk.abi import ABIType
from algosdk.encoding import decode_address
from dotenv import load_dotenv
from base64 import b64decode
import os

load_dotenv()

node_token = os.getenv('algod_token')
node_server = os.getenv('algod_server')

private_key = os.getenv('private_key')

algod_client = AlgodClient(node_token, node_server)
app_spec = Path(__file__).parent / './arc69NFTmodifier.arc32.json'
app_id = int(os.getenv('app_id'))
signer = AccountTransactionSigner(private_key=private_key)
address = address_from_private_key(private_key=private_key)
params = algod_client.suggested_params()

application_client = ApplicationClient(
    algod_client=algod_client,
    app_spec=app_spec,
    app_id=app_id,
    signer=signer,
    sender=address,
    suggested_params=params
)

atc = AtomicTransactionComposer()

decoded_address = decode_address(address)

mbr_fee_payment_tx_1 = PaymentTxn(
    sender=address,
    sp=params,
    receiver=application_client.app_address,
    amt=3000,
    note='#1'
)
wrapped_payment_tx_1 = TransactionWithSigner(mbr_fee_payment_tx_1, signer)
atc.add_transaction(wrapped_payment_tx_1)

users_monster = 728462064

stake_monster_tx = AssetTransferTxn(
    sender=address,
    receiver=application_client.app_address,
    sp=params,
    amt=1,
    index=users_monster
)

wrapped_stake_tx = TransactionWithSigner(stake_monster_tx, signer)

current_uid = (0).to_bytes(8, 'big')
box_ref_1 = current_uid + decoded_address
box_ref_2 = (3).to_bytes(8, 'big')

application_client.compose_call(
    atc, 
    call_abi_method='removeMonsterFromTraining', 
    monster_requested_uid=0,
    transaction_parameters={
        'boxes':[[app_id, box_ref_1], [app_id, box_ref_2]],
        'foreign_assets': [users_monster]
    }
)

results = atc.execute(algod_client, 2)

tx_ids = [results.tx_ids[i] for i in range(len(results.tx_ids))]
abi_results = [results.abi_results[i].return_value for i in range(len(results.abi_results))]
print(tx_ids)
print(abi_results)</code></pre>
    `,
    initialCode: ``,
  },

  {
    id: 6,
    language: 'Javascript',
    title: 'Variables',
    content: `
    <p>In JavaScript, we have several data types that are used to store different kinds of information:</p>
    <ul class=inText>
        <li>Integer: Represents whole numbers without a decimal component. Example: let myNumber = 1000;</li>
        <li>String: A sequence of characters enclosed within quotes. Example: let myText = "Hello!";</li>
        <li>Float: Represents numbers that contain a decimal point. Example: let myFloat = 7.5;</li>
        <li>Boolean: Represents one of two values, true or false. Examples: let myBool1 = true; let myBool2 = false;</li>
        <li>Array: An ordered collection of items enclosed within square brackets. Example: let myList = [];</li>
        <li>Object: A collection of key-value pairs enclosed within curly braces. Example: let myDictionary = {};</li>
    </ul>
    
    <p>These data types are essential for storing and manipulating different kinds of information in JavaScript.</p>
    <p>It's good practice to name your variables relevant to their purpose. For example, if I was creating a variable that would represent the cash price of an item, I might name it something like:</p>
    
    <pre class="overflow-auto shadow-md"><code>let itemCost = 1; // The cost of an item, which will be 1 dollar
let supplyRemaining = 2500000000; // The number of items in inventory that are remaining
let nameCTO = "John Woods";
let valueOfAQuarter = 0.25;</code></pre>
    
    <p>You might notice that I use camelCase for naming my variables. It's important to follow JavaScript naming conventions:</p>
    <ul class=inText>
    <li>Variable names cannot start with a number.</li>
    <li>Variable names cannot contain spaces.</li>
    <li>Variable names can include letters, digits, underscores (_), and dollar signs ($), but should start with a letter, underscore, or dollar sign.</li>
    </ul>
    
    <p>Here are some examples of incorrect variables that will not work in your code, and will cause an error, <strong>DO NOT USE</strong>:</p>
    <pre class="overflow-auto shadow-md"><code>let 3variable = 5;     // Starts with a number
let my-variable = 6;   // Contains a hyphen
let my variable = 7;   // Contains a space
</code></pre>
    
    <h2>General Arithmetic for Integers, Floats, and Strings</h2>
    <p>General arithmetic operations are a great place to start! Let's try creating a number variable, and logging it to the console.</p>
    <p>If this is your first time programming, or even if you have programmed before, you'll quickly find out or are already familiar that logging is one of the most commonly used functions for debugging. It's how you "see" what the value is of your variable at a specific point in your code</p>
    
    <pre class="overflow-auto shadow-md"><code>let myNumber = 1;
let myNumberPlusOne = myNumber + 1;
console.log(myNumberPlusOne); // Output will be 2</code></pre>
    
    <p>There are several arithmetic operators available in JavaScript, and they are as follows:</p>
    
    <pre class="overflow-auto shadow-md"><code>let a = 10;
let b = 3;
let addition = a + b;          // Addition: 13
let subtraction = a - b;       // Subtraction: 7
let multiplication = a * b;    // Multiplication: 30
let division = a / b;          // Division: 3.3333333333333335
let floorDivision = Math.floor(a / b); // Floor Division: 3
let modulus = a % b;           // Modulus: 1
let exponentiation = a ** b;   // Exponentiation: 1000</code></pre>
    
    <p>For strings, '+' is used for concatenation:</p>
    
    <pre class="overflow-auto shadow-md"><code>let greeting = "Hello, " + "World!";
console.log(greeting); // Output: "Hello, World!"</code></pre>
    
    <p>Unlike Python, JavaScript does not support string multiplication using arithmetic operators; it results in NaN (Not a Number):</p>
    <pre class="overflow-auto shadow-md"><code>let string = "Hello";
let repeatedString = string * 3;  // This will result in NaN
console.log(repeatedString); // Output: NaN</code></pre>
    
    <p>Instead, use the repeat function for repeating strings:</p>
    <pre class="overflow-auto shadow-md"><code>let repeatedGreeting = string.repeat(3);
console.log(repeatedGreeting); // Output: "HelloHelloHello"</code></pre>
    
    <p>We won't dive into Arrays or Objects just yet, but it is important to note that arrays and objects are mutable, whereas strings are immutable in JavaScript.</p>
    <p>When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
    
    <p>Example showing mutability of an array:</p>
    <pre class="overflow-auto shadow-md"><code>let myArray = [1, 2];
console.log(myArray[0]); // Output: 1
myArray[0] = 2;
console.log(myArray); // Output: [2, 2]</code></pre>
    
    <p>Example showing immutability (cannot be changed) of a string:</p>
    <pre class="overflow-auto shadow-md"><code>let myString = "Hello";
console.log(myString);  // Output: "Hello"
myString[0] = "J";  // This does not change the string
console.log(myString);  // Output: "Hello"</code></pre>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data type is used to store whole numbers in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) Integer</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) String</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) Float</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Boolean</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following is a correct variable name in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) 3variable</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) my-variable</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) itemCost</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) my variable</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre class="overflow-auto shadow-md"><code>let myNumber = 1;
let myNumberPlusOne = myNumber + 1;
console.log(myNumberPlusOne);
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 1</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 2</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) NaN</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>Which arithmetic operator is used for exponentiation in JavaScript?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) /</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) %</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) *</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="correct">d) **</label><br>
  
          <h3>Question 5</h3>
          <p>What is the correct way to concatenate strings in JavaScript?</p>
          <input type="radio" id="q5a" name="q5" value="a">
          <label for="q5a" class="correct">a) let greeting = "Hello, " + "World!";</label><br>
          <input type="radio" id="q5b" name="q5" value="b">
          <label for="q5b" class="incorrect">b) let greeting = "Hello, " * "World!";</label><br>
          <input type="radio" id="q5c" name="q5" value="c">
          <label for="q5c" class="incorrect">c) let greeting = "Hello, " - "World!";</label><br>
          <input type="radio" id="q5d" name="q5" value="d">
          <label for="q5d" class="incorrect">d) let greeting = "Hello, " / "World!";</label><br>
  
          
      </form>
    
    `,
    initialCode: `let myArray = [1, 2]; 
console.log(myArray[0]);
myArray[0] = 2;
console.log(myArray);`,
  },

  {
    id: 7,
    language: 'Javascript',
    title: 'Functions',
    content: `
    <p>In JavaScript, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>function</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a curly brace ({) and ends with a curly brace (}).</p>
    
    <p>Let's start with calling this simple function above that prints a greeting message:</p>
    <pre class="overflow-auto shadow-md"><code>function greet() {
    console.log("Hello, world!");
}
greet();
// Output: "Hello, world!"</code></pre>
    
    <p>Functions in JavaScript can accept parameters, which let you pass different values into them. Here's how we use a function called 'greet':</p>
    <pre class="overflow-auto shadow-md"><code>function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
greet("Alice"); // Outputs: "Hello, Alice!"
greet("Bob"); // Outputs: "Hello, Bob!"</code></pre>
    
    <p>In this example, the <code>greet</code> function takes a parameter named <code>name</code>. When we call this function and give it a name like "Alice" or "Bob", it prints a personalized greeting.</p>
    <p>To create the greeting message, we use something called a template literal. A template literal is a type of string that makes it easy to include variables directly inside the string. You create a template literal by wrapping your text with backtick characters, and you can insert variables like <code>name</code> by wrapping them in \${ } inside the string.</p>
    <p>For instance, <code>Hello, \${name}!</code> combines "Hello," with the name you provide when calling the function, resulting in a complete greeting message.</p>
    
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>function add(a, b) {
    return a + b;
}
let result = add(3, 5);
console.log(result);  // Output: 8</code></pre>
    
    <p>The <code>add</code> function takes two parameters <code>a</code> and <code>b</code>, adds them together, and returns the result. We can then store the returned value in a variable and print it.</p>
    
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>function greet(name = "world") {
    console.log(\`Hello, \${name}!\`);
}
greet();  // Output: Hello, world!
greet("Alice");  // Output: Hello, Alice!</code></pre>
    
    <p>In this example, the <code>greet</code> function has a default parameter value of "world". If no argument is passed when the function is called, it uses the default value.</p>
    
    <p>We can also define functions that accept a variable number of arguments using the <code>...args</code> syntax. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>function add(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(add(1, 2, 3));  // Output: 6
console.log(add(4, 5, 6, 7));  // Output: 22</code></pre>
    
    <p>The <code>add</code> function uses <code>...args</code> to accept a variable number of arguments. Inside the function, <code>args</code> is an array containing all the arguments passed. We use the <code>reduce</code> method to add all the values together and return the result.</p>
    
    <p>The <code>...</code> syntax can also be used to accept a variable number of keyword arguments in an object. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>function printInfo({ ...kwargs }) {
    for (let key in kwargs) {
        console.log(\`\${key}: \${kwargs[key]}\`);
    }
}
printInfo({ name: "Alice", age: 30, city: "New York" });</code></pre>
    
    <p>In this example, the <code>printInfo</code> function uses <code>...</code> to accept a varying number of keyword arguments. Inside the function, <code>kwargs</code> is an object containing all the keyword arguments passed. We loop through the object and print each key-value pair.</p>
    
    <p>Functions are a fundamental part of JavaScript programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to define a function in JavaScript that prints "Hello, world!"?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) function greet() { console.log("Hello, world!"); }</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) def greet() { print("Hello, world!"); }</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) function greet { console.log("Hello, world!"); }</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) function greet() console.log("Hello, world!");</label><br>
  
          <h3>Question 2</h3>
          <p>How do you call a function named greet that takes one parameter and logs a greeting message?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) greet["Alice"]</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) greet("Alice")</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) greet.Alice</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) greet Alice</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>function add(a, b) {
    return a + b;
}
let result = add(3, 5);
console.log(result);</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 35</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 8</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) NaN</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct syntax for a function that accepts a variable number of arguments and returns their sum?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) function add(...args) { return args.reduce((acc, curr) => acc + curr, 0); }</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) function add(args...) { return args.reduce((acc, curr) => acc + curr, 0); }</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="correct">c) function add(...args) { return args.reduce((acc, curr) => acc + curr); }</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) function add(args...) { return args.reduce((acc, curr) => acc + curr); }</label><br>
  
          
      </form>
    
    `,
    initialCode: `function add(a, b) {
return a + b;
}
let result = add(3, 5);
console.log(result); // Output: 8`,
  },
  {
    id: 8,
    language: 'Javascript',
    title: 'Arrays',
    content: `
    <p>Before we go over objects, which are the most common datatype when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how arrays work.</p>
    
    <p>Below is an example of an array:</p>
    <pre class="overflow-auto shadow-md"><code>let myArray = [7, "Hello", false, 63.5];</code></pre>
    
    <p>An array can hold all types of data, and you can have all kinds of data in one array. You use arrays when you need exactly that, a list. Arrays are also mutable, as opposed to tuples—which means we can rearrange, extend, and replace items in an array, meaning they're super flexible!</p>
    
    <p>An array is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in an array on Algorand could be one that has asset IDs.</p>
    <pre class="overflow-auto shadow-md"><code>let asset_ids = [1265975021, 1138500612, 400593267];</code></pre>
    
    <p>Or perhaps an array of addresses:</p>
    <pre class="overflow-auto shadow-md"><code>let addresses = [
'WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU',
'7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY',
'HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA'];</code></pre>
    
    <p>Although arrays don't have to be organized in any way and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in an array, you could use the Set object.</p>
    <pre class="overflow-auto shadow-md"><code>let myArray = [1, 1, 2, 3, 4, 4];
let myArrayWithoutDuplicates = [...new Set(myArray)];
console.log(myArrayWithoutDuplicates);</code></pre>
    
    <p># Output:# [1, 2, 3, 4]</p>
    
    <p>Let's look back at the first example of an array:</p>
    <pre class="overflow-auto shadow-md"><code>let myArray = [7, "Hello", false, 63.5];</code></pre>
    
    <p>In the array above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (true or false value) in the third spot; a float (decimal value), in the fourth spot.
    I refer to the places these items are in the array as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming arrays are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the array. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in an array.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for false, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the array, we must first assign it to a variable:</p>
    <pre class="overflow-auto shadow-md"><code>let myArray = [7, "Hello", false, 63.5];</code></pre>
    
    <p>Now, we can use index notation to pick out items of our choice by using their position, let's start with just logging the array to the terminal:</p>
    <pre class="overflow-auto shadow-md"><code>console.log(myArray);</code></pre>
    <p># Output: [7, "Hello", false, 63.5]</p>
    
    <p>... and now let's log the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <pre class="overflow-auto shadow-md"><code>let firstIndexMyArray = myArray[1];
console.log(firstIndexMyArray);</code></pre>
    <p># Output: "Hello"</p>
    
    <p>Try logging the third index into the console using index notation. I've already defined the array for you below. Click run when you're ready to run the code! The output should be 63.5.</p>
    
    <p>IDE WINDOW:
    let myArray = [7, "Hello", false, 63.5];
    . . .
    CHECK OUTPUT IS 63.5 AND SHOW "SUCCESS"</p>
    <p>Next chapter: Objects</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data structure is used to store a collection of values in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) Array</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) Object</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) String</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Number</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following correctly initializes an array in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) let myArray = {7, "Hello", false, 63.5};</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) let myArray = (7, "Hello", false, 63.5);</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) let myArray = [7, "Hello", false, 63.5];</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) let myArray = "7, Hello, false, 63.5";</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>let myArray = [7, "Hello", false, 63.5];
console.log(myArray[2]);</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) false</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>How do you remove duplicate entries from an array in JavaScript?</p>
           <pre class="overflow-auto shadow-md"><code>let myArray = [1, 1, 2, 3, 4, 4];
let myArrayWithoutDuplicates = [...new Set(myArray)];
console.log(myArrayWithoutDuplicates);</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using the Set object</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using the Map object</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using the Filter object</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using the Reduce object</label><br>
  
          
      </form>
    
    `,
    initialCode: `let myArray = [7, "Hello", false, 63.5];

// Access and log the element at index 1
let firstIndexMyArray = myArray[1];
console.log(firstIndexMyArray);

// Access and log the element at index 3
let thirdIndexMyArray = myArray[3];
console.log(thirdIndexMyArray);
  `,
  },
  {
    id: 9,
    language: 'Javascript',
    title: 'Objects',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, objects! An object is like an array, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, objects also differ in that they store values with keys, and can accept several data types. An object can be highly versatile, and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have objects with objects within them, and even arrays as well! It's important to mention that keys and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of an object:</p>
    <pre class="overflow-auto shadow-md"><code>let thisIsMyObject = {name: "John", age: 22};</code></pre>
    
    <p>In arrays, we used a process called indexing, and the index notation format to access values, eg; myArray[3]. With objects, we use a similar process called key access, and the key notation format to access values.</p>
    
    <p>The main difference is that we use keys, instead of solely integers that refer to position, to select values from an object— and not to confuse you, but a key in an object can also be an integer =).</p>
    
    <p>For example, in thisIsMyObject above, you'll see the value "John" belongs to the key, "name". As well as the value 22, belongs to the key, "age". This is what key notation would look like for accessing a value for a specific key in an object:</p>
    <pre class="overflow-auto shadow-md"><code>let nameValue = thisIsMyObject['name'];
console.log(nameValue);</code></pre>
    <p># Output: "John"</p>
    
    <p>Try printing the "age" value in the code editor below:</p>
    <pre class="overflow-auto shadow-md"><code>let ageValue = thisIsMyObject['age'];
console.log(ageValue);</code></pre>
    <p># Output: 22</p>
    
    <p>Now we'll look over a more intricate object, that's a bit larger and complex.</p>
    <pre class="overflow-auto shadow-md"><code>thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};</code></pre>
    
    <p>We see something in this object that we haven't seen before, an array as the value to a key. Let's try accessing the 1st index of John's likes using a mix of key notation and index notation!</p>
    <pre class="overflow-auto shadow-md"><code>let likes = thisIsMyObject['likes'];
console.log(likes);</code></pre>
    <p># Output:# ["Exercise", "Cooking", "Coding"]</p>
    
    <pre class="overflow-auto shadow-md"><code>let likesFirstIndex = likes[1];
console.log(likesFirstIndex);</code></pre>
    <p># Output:# "Cooking"</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data structure is used to store values with keys in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) Array</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) Object</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) String</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Number</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following correctly initializes an object in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) let myObject = {name: "John", age: 22};</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) let myObject = {John, 22};</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) let myObject = ["John", 22];</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) let myObject = (name: "John", age: 22);</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>let thisIsMyObject = {name: "John", age: 22};
console.log(thisIsMyObject['age']);</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>let thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};
let likesFirstIndex = thisIsMyObject['likes'][1];
console.log(likesFirstIndex);</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) ["Exercise", "Cooking", "Coding"]</label><br>
  
          
      </form>
    `,
    initialCode: `let thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};
  
// Access and log the "likes" array using key notation
let likes = thisIsMyObject['likes'];
console.log(likes);

// Expected Output: ["Exercise", "Cooking", "Coding"]

// Access and log the value at the 1st index of the "likes" array
let likesFirstIndex = likes[1];
console.log(likesFirstIndex);

// Expected Output: "Cooking"
  `,
  },
  {
    id: 10,
    language: 'Javascript',
    title: 'Imports',
    content: `
    <p>This code begins with module imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, JavaScript interpreters read from top to bottom.</p>
    
    <p>The module imports the Algodv2 class from the algosdk library. The require statement is used to import the algosdk library in Node.js.</p>
    <pre class="overflow-auto shadow-md"><code>const algosdk = require('algosdk');</code></pre>
    
    <p>In this code, the algosdk library is imported using require. Then, the Algodv2 client is instantiated with the API token, server address, and port.</p>
    
    <p>Now let's get the status of the Algod client:</p>
    <pre class="overflow-auto shadow-md"><code>const algodToken = 'Your algod API token';
const algodServer = 'http://YourAlgodServerAddress';
const algodPort = 'YourAlgodServerPort';
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
algodClient.status().do()
    .then(status => {
        console.log(status);
    })
    .catch(err => {
        console.error(err);
    });</code></pre>
    
    <p>We use the <code>status()</code> method to get the status of the Algod client. This method returns a promise, so we use <code>.then()</code> to handle the successful response and <code>.catch()</code> to handle any errors.</p>
    
    <p>Next, we generate a random number using the random module. In JavaScript, we use <code>Math.random()</code> to generate random numbers.</p>
    <pre class="overflow-auto shadow-md"><code>const random_number = Math.floor(Math.random() * 101);
console.log(random_number);</code></pre>
    
    <p>To decide on whether or not you want to import a specific file, function, or method, you would need to use your intuition! For example, you may only need a specific function from a module.</p>
    <pre class="overflow-auto shadow-md"><code>const { Algodv2 } = require('algosdk');
const algodToken = 'Your algod API token';
const algodServer = 'http://YourAlgodServerAddress';
const algodPort = 'YourAlgodServerPort';
const algodClient = new Algodv2(algodToken, algodServer, algodPort);</code></pre>
    
    <p>Now you can use <code>algodClient</code> for your transactions or other operations</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What statement is used to import a module in Node.js?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) import module from 'module';</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) const module = require('module');</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) using module;</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) include module;</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following imports only the Algodv2 class from the algosdk library?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) const { Algodv2 } = require('algosdk');</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) const algosdk = require('algosdk').Algodv2;</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) const Algodv2 = require('algosdk').default;</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) const Algodv2 = require('algosdk')['Algodv2'];</label><br>
  
          <h3>Question 3</h3>
          <p>What method is used to get the status of the Algod client?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) algodClient.getStatus()</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) algodClient.status().do()</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) algodClient.fetchStatus()</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) algodClient.retrieveStatus()</label><br>
  
          <h3>Question 4</h3>
          <p>How do you generate a random number between 0 and 100 in JavaScript?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Math.floor(Math.random() * 101);</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Math.random(100);</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) random(0, 100);</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Math.rand(0, 100);</label><br>
  
          
      </form>
    
    `,
    initialCode: `// Import algosdk
const algosdk = require('algosdk');

// Set up your API token, server, and port
const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = '';

// Initialize the Algodv2 client
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Log client instance to ensure it's initialized correctly
console.log(algodClient);`,
    //     editable: false,
    //     output: `Algodv2 {
    //   token: '',
    //   host: 'https://testnet-api.algonode.cloud',
    //   port: '',
    //   headers: {},
    // }
    // `,
  },
  {
    id: 38,
    language: 'Javascript',
    title: 'Getting Started with Algorand',
    content: `
    <p>To set up your own node, visit this GitHub repository for a previous tutorial series:</p>
    <p><a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations">Algorand Node Installation</a></p>
    <p>Scroll down to the section called "Algorand Node Installation"— and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section). If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.</p>
    
    <p>Now that we have access to an Algorand testnet node, as well as a basic understanding of how to work with different kinds of variables, functions and imports. It's time to get started! This will reaffirm your ability to use functions, methods, and imports— as well as key notation: eg; accessing the name of a customer in a variable named my_dictionary:</p>
    
    <pre class="overflow-auto shadow-md"><code>const myDictionary = {'customer-name': 'Jerry'};
const customerName = myDictionary['customer-name'];
console.log(customerName);</code></pre>
    
    <p>If you are using your own Algorand testnet node on Windows, you will need to access your algod_token and algod_port from your node's data directory:</p>
    <ol class=inText>
      <li>Enter the data directory from the root folder:
        <code>cd node/data</code>
      </li>
      <li>Use the following commands to obtain your node token and port:</li>
    </ol>
    <pre><code>cat algod.token</code> ---Logs the token into the terminal, it should look something like:</pre>
    <pre><code>b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd</code></pre>
    <pre><code>cat algod.net</code> ---Logs the port into the terminal, it should look something like:</pre>
    <pre><code>127.0.0.1:8080</code></pre>
    <p>When programming, you will format this information for variables like so:</p>
    <pre class="overflow-auto shadow-md"><code>const algodToken = 'b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd';
const algodServer = 'http:127.0.0.1';
const algodPort = 8080;</code></pre>
    <p>If you are not using your own Algorand testnet node, you can use these:</p>
    <p>(Free service does not require token, and the algodToken variable will be an empty string '', whereas the algodServer will be the algonode testnet cloud link)</p>
    <pre class="overflow-auto shadow-md"><code>const algodToken = ''; 
const algodServer = 'https://testnet-api.algonode.cloud'; 
const algodPort = 443;</code></pre>
    
    <p>Note: If you are attempting to run this code outside of the browser in your own IDE, remember to use npm init -y to create a package.json, and add "type": "module" anywhere in your package. Then make sure you install the algorand sdk by using 'npm install algosdk'. Afterwards, you can run the code in your terminal by using node nameOfYourFile.js.</p>
    <p>If you get an error along the likes of 'node is not a function', this means you haven't installed node.js, you can install it here:</p>
    
    <pre class="overflow-auto shadow-md"><code>// Import algosdk
import algosdk from 'algosdk';

// Initialize AlgodClient
const algodToken = ''; // Leave '' for public node service, or enter your node token
const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port
const algodPort = 443;

// Create an instance of the algod client
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Fetch the node status and print it
algodClient.status().do()
    .then(status => {
        console.log('Node status:', status);
    })
    .catch(err => {
        console.error('Failed to get node status:', err);
    });</code></pre>
    
    <p>First, we import the algosdk library, which includes the AlgodClient necessary for interacting with the Algorand network.</p>
    <p>Next, we define variables for our token, server URL, and port number for the node we'll be using. These are set up to handle connections to the Algorand testnet via a public service, but can be adjusted if you are running your own node.</p>
    <p>We then create an instance of AlgodClient using the algodToken, algodServer, and algodPort. This instance is assigned to the variable algodClient.</p>
    <p>Using the algodClient instance, we access the status method to fetch the current status of the Algorand network. This method returns a promise that resolves to the status information.</p>
    <p>Once the promise resolves, the resulting status data is contained within the status variable within the .then() method's callback. Here, we print the entire status object to the console to view its contents.</p>
    
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    <ul class=inText>
      <li>catchpoint</li>
      <li>catchpoint-acquired-blocks</li>
      <li>catchpoint-processed-accounts</li>
      <li>catchpoint-processed-kvs</li>
      <li>catchpoint-total-accounts</li>
      <li>catchpoint-total-blocks</li>
      <li>catchpoint-total-kvs</li>
      <li>catchpoint-verified-accounts</li>
      <li>catchpoint-verified-kvs</li>
      <li>catchup-time</li>
      <li>last-catchpoint</li>
      <li>last-round</li>
      <li>last-version</li>
      <li>next-version</li>
      <li>next-version-round</li>
      <li>next-version-supported</li>
      <li>stopped-at-unsupported-round</li>
      <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are last-round, so you know which block you are on, and perhaps time-since-last-round, if you should need to know that information. Other keys are primarily used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for Objects, try this:</p>
    <ul class=inText>
      <li>Create a variable, and name it lastRound</li>
      <li>Assign the value of the key 'last-round' in the status dictionary to this variable you created</li>
      <li>Print your variable!</li>
    </ul>
    
    <pre class="overflow-auto shadow-md"><code>// Import algosdk
import algosdk from 'algosdk';

// Initialize AlgodClient
const algodToken = ''; // Leave '' for public node service, or enter your node token
const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port
const algodPort = 443;

// Create an instance of the algod client
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Fetch the node status and print it
algodClient.status().do()
    .then(status => {
        // Create a variable, and name it lastRound
        const lastRound = status['last-round'];
        // Print your variable
        console.log('Last round:', lastRound);
    })
    .catch(err => {
        console.error('Failed to get node status:', err);
    });</code></pre>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What command is used to navigate to the node's data directory in an Ubuntu shell?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) cd data/node</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) cd node/data</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) cd algod/data</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) cd node/algod</label><br>
  
          <h3>Question 2</h3>
          <p>How do you log the Algorand node token to the terminal?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) cat algod.token</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) cat algod.net</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) cat node.token</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) cat node.net</label><br>
  
          <h3>Question 3</h3>
          <p>What are the default values for algodToken and algodServer when using a public Algorand testnet node?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) const algodToken = 'default'; const algodServer = 'http://localhost';</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) const algodToken = 'public'; const algodServer = 'https://testnet.algorand.org';</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) const algodToken = ''; const algodServer = 'https://testnet-api.algonode.cloud';</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) const algodToken = 'none'; const algodServer = 'https://testnet.algorand.io';</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the value of the 'last-round' key from the Algorand node status object?</p>
           <pre class="overflow-auto shadow-md"><code>algodClient.status().do()
.then(status => {
    // Create a variable, and name it lastRound
    const lastRound = status['last-round'];
    // Print your variable
    console.log('Last round:', lastRound);
})
.catch(err => {
    console.error('Failed to get node status:', err);
});</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) const lastRound = status['last-round'];</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) const lastRound = status.lastRound;</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) const lastRound = status.last-round;</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) const lastRound = status['round-last'];</label><br>
  
          
      </form>
    
    `,
    initialCode: `const algosdk = require('algosdk');

// Initialize AlgodClient
const algodToken = ''; // Leave '' for public node service, or enter your node token
const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port
const algodPort = 443;

// Create an instance of the Algod client
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Fetch the node status and print it
algodClient.status().do()
  .then(status => {
    console.log('Node status:', status);
  })
  .catch(err => {
    console.error('Failed to get node status:', err);
  });
  `,
    //     editable: false,
    //     output: `Node status: {
    //   lastRound: 7890123,
    //   lastVersion: 'v2.1.0',
    //   lastTimeStamp: 1702051200,
    //   nextVersion: 'v2.1.1',
    //   lastProtocolVersion: 11,
    //   nextProtocolVersion: 12,
    //   genesisHash: 'SGENHASH...',
    //   genesisID: 'testnet-v1.0',
    // }
    // `,
  },
  {
    id: 39,
    language: 'Javascript',
    title: 'Payment Transactions',
    content: `
    <pre class="overflow-auto shadow-md"><code>const algosdk = require('algosdk');
    
// TWO WAYS TO IMPORT AN ACCOUNT

// METHOD 1
// CREATE A NEW ACCOUNT
const account = algosdk.generateAccount();
console.log('Private Key:', Buffer.from(account.sk).toString('base64')); // Output Private Key
console.log('Address:', account.addr); // Output Address

// IF NEEDED TO IMPORT TO A WALLET, YOU CAN OBTAIN THE MNEMONIC FROM THE PRIVATE KEY
// REDEEM MNEMONIC FROM PRIVATE KEY
const mnemonicPhrase = algosdk.secretKeyToMnemonic(account.sk);
console.log('Mnemonic Phrase:', mnemonicPhrase); // Output Mnemonic Phrase

// METHOD 2
// USE MNEMONIC TO OBTAIN PRIVATE KEY
// REDEEM PRIVATE KEY FROM MNEMONIC
const mnemonic = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual';
const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
console.log('Recovered Private Key:', Buffer.from(recoveredAccount.sk).toString('base64')); // Output Private Key</code>
</pre>

<p>When developing in JavaScript with the Algorand blockchain, there are two methods to obtain a private key and address for signing transactions you create. The private key is in base64 format and is required for transaction signing.</p>

<h4>Method 1: Create a brand new account and obtain the private key and address directly</h4>
    
    <p>In the algosdk's account module, there is a function called generateAccount(), which you can import at the beginning of your code, and is defined here:</p>
    
    <pre class="overflow-auto shadow-md"><code>function generateAccount() 
Generate an account.

Returns:
{addr: string, sk: Uint8Array}: An object containing the account address and secret key</code>
</pre>
    
    <p>This returns an object containing the private key (as a Uint8Array) and the account address as strings. You would assign the output of the function to a variable and then subsequently print them.</p>
    
    <p>In the testnet, you can now fund the account by inputting the address at <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>.
    All accounts require a minimum balance of 0.1 Algo to send transactions, and then 0.001 Algorand per transaction fee.</p>
    
    <p>Should you need the mnemonic to import into a wallet application later, you can do so with the secretKeyToMnemonic() function in the algosdk library as well; input your secret key into the function and assign the output variable to something like "mnemonicPhrase". Function is defined below:</p>
    
<pre class="overflow-auto shadow-md"><code>function secretKeyToMnemonic(secretKey: Uint8Array) -> string
Return the mnemonic for the secret key.

Args:
secretKey (Uint8Array): The secret key as a Uint8Array

Returns:
string: mnemonic phrase</code></pre>
    
    <h4>Method 2: Convert an Existing Mnemonic to a Private Key</h4>
    
    <p>Should you already have a mnemonic and require the private key in base64 format, you can create a variable called "mnemonicPhrase" and use the result of the mnemonicToSecretKey() function in the algosdk library, which is defined below:</p>
    
    <pre class="overflow-auto shadow-md"><code>function mnemonicToSecretKey(mnemonic: string) -> {addr: string, sk: Uint8Array}
Return the account object for the mnemonic.

Args:
mnemonic (string): mnemonic of the private key

Returns:
{addr: string, sk: Uint8Array}: An object containing the account address and secret key</code></pre>
    
    <p>The mnemonic must be a string, meaning it is enclosed in apostrophes or double quotes ('' or ""), and there must be a space between words.</p>
    
    <p>Now let's use the account we generated and funded using <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>, create our AlgodClient class to initiate a connection to the Algorand blockchain, generate a new account to interact with, and subsequently sign, and send some different kinds of payment transactions.</p>
    
    <p>We will be trying a typical payment transaction with a note field, followed by a rekey transaction (rekey to a new account and back to ourselves from the new account), and an account closing transaction. All three are under the scope of a payment transaction.</p>
    
    <pre class="overflow-auto shadow-md"><code>const algosdk = require('algosdk');
    
// Algod client connection parameters
const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = '443';
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Sender's account details
const address = 'I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU';
const private_key = '6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg==';

// Convert 1.001 Algos to microalgos
const amount = algosdk.algosToMicroalgos(1.001);

// Get transaction parameters
async function submitTransaction() {
    let params = await algodClient.getTransactionParams().do();

    // Generate a new account
    const { addr: newAccountAddress, sk: newAccountPrivateKey } = algosdk.generateAccount();
    console.log('New Account Address:', newAccountAddress);

    // Create a payment transaction
    let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: address,
        to: newAccountAddress,
        amount: amount,
        note: new TextEncoder().encode("Here's your one Algo!"),
        suggestedParams: params
    });

    // Sign the transaction
    const signedTxn = txn.signTxn(Buffer.from(private_key, 'base64'));

    // Send the transaction
    try {
        let { txId } = await algodClient.sendRawTransaction(signedTxn).do();
        console.log('Transaction ID:', txId);

        // Wait for confirmation
        let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
        console.log('Transaction confirmed in round', confirmedTxn['confirmed-round']);
    } catch (err) {
        console.log('Error submitting transaction:', err);
    }
}

submitTransaction();</code></pre>
    
    <h4>Steps:</h4>
    <ol class="inText">
      <li>Import our necessary modules.</li>
      <li>Define our AlgodClient to initiate a connection to the chain.</li>
      <li>Define our account's address and private key that we will be sending transactions from.</li>
      <li>Define an amount of Algorand to send.</li>
      <li>Obtain the params needed for all transactions.</li>
      <li>Generate a new account for testing, so we have an address to send testnet Algorand to.</li>
      <li>Define our payment transaction and its parameters.</li>
      <li>Sign the transaction with our private key.</li>
      <li>Assign the result of sending our signed transaction with the sendTransaction() method from the AlgodClient class.</li>
      <li>Use the waitForConfirmation() function to ensure the transaction is successful.</li>
      <li>Print the transaction ID for reference on an explorer like allo.info, <a href="https://testnet.explorer.perawallet.app/">https://testnet.explorer.perawallet.app/</a>, <a href="https://www.blockpack.app/#/explorer/home">https://www.blockpack.app/#/explorer/home</a>, or <a href="https://app.dappflow.org/explorer/home">https://app.dappflow.org/explorer/home</a>.</li>
    </ol>
    
    <p>We introduce a few new functions here:</p>
    <ul class="inText">
      <li>the algosToMicroalgos() function from the algosdk.util module.</li>
      <li>the makePaymentTxnWithSuggestedParams() function and waitForConfirmation() function from the algosdk module.</li>
      <li>The sendRawTransaction() function, which is a method from the AlgodClient class.</li>
    </ul>
    
    <p>In the Algorand SDK, when we want to reference an amount of Algo, that amount needs to be in a format called "MicroAlgo"; MicroAlgo is essentially an amount of Algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 MicroAlgo, and the transaction fee of 0.001 Algo is 1,000 MicroAlgo.</p>
    
    <p>Instead of manually calculating the MicroAlgo amount each time, what we can do is use the algosToMicroalgos() function, and pass in the amount of Algo as an argument.</p>
    
    <p>The makePaymentTxnWithSuggestedParams() function comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class="inText">
      <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
      <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    <p>PaymentTransaction format:</p>
    <pre class="overflow-auto shadow-md"><code>function makePaymentTxnWithSuggestedParams(sender, receiver, amount, closeRemainderTo, note, suggestedParams, rekeyTo) {
    // Returns a transaction object
}</code></pre>
    
    <p>After we define our Payment Transaction parameters, we can then use the signTransaction() method that is included within it. This sign function accepts our private key, and outputs a signed transaction object, which is needed to input to the sendRawTransaction() function.</p>
    
    <p>The waitForConfirmation() function requires the AlgodClient variable we created, as well as the transaction ID to wait for.</p>
    
    <p>Lastly, the sendRawTransaction() function, which accepts signed transaction objects and outputs the transaction ID.</p>
    
    <p>Below are examples of rekey transactions and close amount to transactions, which are sent in succession (BUT NOT A GROUP TRANSACTION, WHICH WE WILL LEARN ABOUT LATER).</p>
    
    <pre class="overflow-auto shadow-md"><code>// Repeat the process for the Rekey Transaction and the Close Remainder to Transaction

// Rekey Transaction
const rekeyToNewAccountPayment = algosdk.makePaymentTxnWithSuggestedParams(
    senderAddress,
    newAccountAddress,
    0,
    undefined,
    new TextEncoder().encode("Take care of my account for me! I'll be back in a week"),
    params,
    newAccountAddress
);

const signedRekeyToNewAccountPayment = rekeyToNewAccountPayment.signTxn(senderPrivateKey);
const rekeyTransactionID = await algodClient.sendRawTransaction(signedRekeyToNewAccountPayment).do();
await algosdk.waitForConfirmation(algodClient, rekeyTransactionID, 4);
console.log(rekeyTransactionID);

// New account rekeys back to the original account
const rekeyBackToOldAccountFromNewAccount = algosdk.makePaymentTxnWithSuggestedParams(
    newAccountAddress,
    senderAddress,
    0,
    undefined,
    new TextEncoder().encode("Sorry! I'm too busy trading this week. Maybe ask PorkChop.algo?"),
    params,
    senderAddress
);

const signedRekeyBackToOldAccountFromNewAccount = rekeyBackToOldAccountFromNewAccount.signTxn(newAccountPrivateKey);
const rekeyBackTransactionID = await algodClient.sendRawTransaction(signedRekeyBackToOldAccountFromNewAccount).do();
await algosdk.waitForConfirmation(algodClient, rekeyBackTransactionID, 4);
console.log(rekeyBackTransactionID);

// Close Remainder to Transaction
const closeAccountToNewAccount = algosdk.makePaymentTxnWithSuggestedParams(
    senderAddress,
    newAccountAddress,
    0,
    newAccountAddress,
    new TextEncoder().encode('Take care of my precious Algo!'),
    params
);

const signedCloseAccountToNewAccount = closeAccountToNewAccount.signTxn(senderPrivateKey);
const closeAccountTransactionID = await algodClient.sendRawTransaction(signedCloseAccountToNewAccount).do();
await algosdk.waitForConfirmation(algodClient, closeAccountTransactionID, 4);
console.log(closeAccountTransactionID);</code>
    </pre>
    
    <p>DISCLAIMER: When rekeying and closing out accounts, this process is irreversible! If you don't know the person, or feel unsure about doing so, you should never use these transactions outside of testing purposes without ultimate confidence. No platforms currently utilize rekey transactions for users, but do use them internally when generating smart contracts for contract-to-contract calls, which will come later in our learning process.</p>
    
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What function is used to create a new Algorand account in the algosdk library?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) algosdk.generateAccount()</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) algosdk.createAccount()</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) algosdk.newAccount()</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) algosdk.accountCreate()</label><br>
  
          <h3>Question 2</h3>
          <p>How can you obtain the mnemonic phrase from a private key in the algosdk library?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) algosdk.secretKeyToMnemonic()</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) algosdk.privateKeyToMnemonic()</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) algosdk.mnemonicFromPrivateKey()</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) algosdk.mnemonicConvert()</label><br>
  
          <h3>Question 3</h3>
          <p>What are the minimum balance and transaction fee requirements for Algorand accounts?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 0.5 Algo and 0.01 Algo per transaction</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 0.01 Algo and 0.001 Algo per transaction</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) 0.1 Algo and 0.001 Algo per transaction</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 1 Algo and 0.1 Algo per transaction</label><br>
  
          <h3>Question 4</h3>
          <p>Which method is used to send a signed transaction in the Algorand SDK?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) algodClient.sendRawTransaction()</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) algodClient.sendTransaction()</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) algodClient.submitTransaction()</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) algodClient.sendSignedTransaction()</label><br>
  
          
      </form>
    
    `,
    initialCode: `const algosdk = require('algosdk');

// Mnemonic phrase
const mnemonic = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual';

// Recover account using the mnemonic
const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
console.log('Recovered Private Key:', Buffer.from(recoveredAccount.sk).toString('base64')); // Output Private Key
console.log('Recovered Address:', recoveredAccount.addr); // Output Address`,
    //     editable: false,
    //     output: `Recovered Private Key: AbCdEfGhIjKlMnOpQrStUvWxYz0123456789+/AbCdEfGhIjKlMnOpQrStUvWxYz0123456789+/AbCdEfGhIjKlMnOpQrStUvWxYz0123
    // Recovered Address: ALICE3X4YZ5ABCDE12345FGHIJKLMNO67890PQRSTU
    // `,
  },

  {
    id: 11,
    language: 'GO',
    title: 'Variables',
    content: `
    <p>In Go, we have several data types that are used to store different kinds of information:</p>
    <ul class=inText>
        <li>Integer: Represents whole numbers without a decimal component.</li>
        <li>String: A sequence of characters enclosed within quotes.</li>
        <li>Float: Represents numbers that contain a decimal point.</li>
        <li>Boolean: Represents one of two values, true or false.</li>
        <li>List: An ordered collection of items, here using an interface{} to allow any type.</li>
        <li>Dictionary: A collection of key-value pairs where keys are strings and values are any type.</li>
    </ul>
    
    <p>It's good practice to name your variable relevant to its purpose, and use camelCase for naming conventions. Variable names cannot start with a number, include special characters other than '_', or contain spaces.</p>
    
    <p>Here are some more variable examples:</p>
    <pre class="overflow-auto shadow-md"><code>var (
    itemCost        int     = 1     // The cost of an item, which will be 1 dollar
    supplyRemaining int64   = 2500000000 // The number of items in inventory that are remaining
    nameCTO         string  = "John Woods" // Name of a CTO
    valueOfAQuarter float64 = 0.25  // The value of a quarter in dollars
)</code></pre>
    
    <p>There are several arithmetic operators available in Go, and they are as follows:</p>
    <pre class="overflow-auto shadow-md"><code>a := 10
b := 3
addition := a + b
subtraction := a - b
multiplication := a * b
division := myFloat / float64(b)
floorDivision := a / b
modulus := a % b
exponentiation := math.Pow(float64(a), float64(b))</code></pre>
    
    <p>Similar to integers and floats, you can also use arithmetic operators on strings:</p>
    <pre class="overflow-auto shadow-md"><code>result := myText + " World!"
fmt.Println("Concatenated String:", result)
repeatedString := strings.Repeat(myText, 3)
fmt.Println("Repeated String:", repeatedString)</code></pre>
    
    <p>We won't dive into Lists, Dictionaries, or Tuples just yet, but I would like to mention, and this is something you'll see in practice later— that lists and dictionaries are mutable, whereas tuples are immutable.
    When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
    
    <p>Example:</p>
    <pre class="overflow-auto shadow-md"><code>my_tuple = (1, 2)
print(my_tuple[0])
my_tuple[0] = 2
print(my_tuple)
# ERROR
#    my_tuple[0] = 2
#    ~~~~~~~~^^^
# TypeError: 'tuple' object does not support item assignment
</code></pre>
    
    <p>A more advanced concept to start early with, but another thing we will review later:</p>
    <h2>Examples of mutable and immutable parameters on an asset on Algorand</h2>
    <strong>Immutable Parameters:</strong></br>
    <p>These parameters can only be specified when an asset is created.</p>
    <ul class=inText>
    <li>Creator: The address of the account that created the asset.</li>
    <li>AssetName: The name of the asset.</li>
    <li>UnitName: The unit name of the asset.</li>
    <li>Total: The total number of units of the asset.</li>
    <li>Decimals: The number of digits to use after the decimal point when displaying the asset.</li>
    <li>DefaultFrozen: Whether the asset is frozen by default.</li>
    <li>URL: A URL where more information about the asset can be retrieved.</li>
    <li>MetaDataHash: A commitment to some unspecified asset metadata.</li>
    </ul>
    <strong>Mutable Parameters:</strong></br>
    <p>These parameters can be changed after the asset is created.</p>
    <ul class=inText>
    <li>Manager: The address of the account that can change the asset's mutable parameters.</li>
    <li>Reserve: The address of the account that holds the asset reserve. (Cannot be changed if initially not declared)</li>
    <li>Freeze: The address of the account that can freeze or unfreeze user asset holdings. (Cannot be changed if initially not declared)</li>
    <li>Clawback: The address of the account that can revoke user asset holdings and send them to other addresses. (Cannot be changed if initially not declared)</li>
    </ul>
    <em>*Note: Exception for various ARC types like ARC19 and ARC69 that use the reserve address and/or note field to point to metadata*</em>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>Which of the following correctly declares a variable in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) var itemCost = 1 int</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) var itemCost int = 1</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) itemCost := int 1</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) int itemCost = 1</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following variable names is valid in Go?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) 3variable</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) my-variable</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) itemCost</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) my variable</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>a := 10
b := 3
addition := a + b
fmt.Println(addition)</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 13</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 13</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 7</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 30</label><br>
  
          <h3>Question 4</h3>
          <p>How do you perform exponentiation in Go?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) a ^ b</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) math.Pow(float64(a), float64(b))</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) a ** b</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) pow(a, b)</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import (
	"fmt"
	"math"
)

func main() {
	// Variables
	name := "Alice"
	age := 25
	height := 5.6
	isStudent := true

	fmt.Println("Name:", name, "Age:", age, "Height:", height, "Is Student:", isStudent)

	// Arithmetic
	a, b := 10, 3
	fmt.Println("Sum:", a+b, "Product:", a*b, "Power:", math.Pow(float64(a), float64(b)))

	// Strings
	greeting := "Hello"
	fmt.Println(greeting + ", " + name + "!")
}
`,
  },
  {
    id: 12,
    language: 'GO',
    title: 'Functions',
    content: `
    <p>In Go, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>func</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a curly brace ({) and ends with a curly brace (}).</p>
    
    <p>Let's start with a simple function that prints a greeting message:</p>
    <pre class="overflow-auto shadow-md"><code>func greet() {
    fmt.Println("Hello, world!");
}
func main() {
    greet();
// Output: "Hello, world!"</code></pre>

<p>Functions can also accept parameters, which allow us to pass values into the function for processing. Here's an example:</p>
<pre class="overflow-auto shadow-md">func greetWithName(name string) {
    fmt.Printf("Hello, %s!\\n", name);
}
greetWithName("Alice"); // Output: "Hello, Alice!"
greetWithName("Bob");   // Output: "Hello, Bob!"</code></pre>
    
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>func add(a, b int) int {
    return a + b;
}
let result = add(3, 5);
fmt.Println(result); // Output: 8</code></pre>
    
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>func greetWithDefaultName(name string) {
    if name == "" {
        name = "world";
    }
    fmt.Printf("Hello, %s!\\n", name);
}
greetWithDefaultName("");  // Output: Hello, world!
greetWithDefaultName("Alice");  // Output: Hello, Alice!</code></pre>
    
    <p>We can also define functions that accept a variable number of arguments using the <code>...</code> syntax. Here's an example:</p>
    <pre class="overflow-auto shadow-md"><code>func addMultiple(nums ...int) int {
    sum := 0;
    for _, num := range nums {
        sum += num;
    }
    return sum;
}
fmt.Println(addMultiple(1, 2, 3)); // Output: 6
fmt.Println(addMultiple(4, 5, 6, 7)); // Output: 22</code></pre>
    
    <p>The <code>...</code> syntax allows us to accept a variable number of arguments. Here's an example using a map for keyword arguments:</p>
    <pre class="overflow-auto shadow-md"><code>func printInfo(info map[string]interface{}) {
    for key, value := range info {
        fmt.Printf("%s: %v\\n", key, value);
    }
}
printInfo(map[string]interface{}{"name": "Alice", "age": 30, "city": "New York"});</code></pre>

<p>Functions are a fundamental part of Go programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>

  <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What keyword is used to define a function in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) func</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) function</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) def</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) fn</label><br>
  
          <h3>Question 2</h3>
          <p>How do you define a function in Go that accepts a parameter?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) func greetWithName(name string) { ... }</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) func greetWithName(string name) { ... }</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) func greetWithName(name: string) { ... }</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) func greetWithName(name) string { ... }</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
           <pre class="overflow-auto shadow-md">
  func add(a, b int) int {
      return a + b
  }
  result := add(3, 5)
  fmt.Println(result)
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) 8</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 35</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 15</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 3</label><br>
  
          <h3>Question 4</h3>
          <p>How do you define a function in Go that accepts a variable number of arguments?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) func addMultiple(nums ...int) { ... }</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) func addMultiple(nums int...) { ... }</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) func addMultiple(...nums int) { ... }</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) func addMultiple(nums: int...) { ... }</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import "fmt"

// Simple function
func greet(name string) {
    fmt.Println("Hello", name)
}

// Function with return value
func add(a, b int) int {
    return a + b
}

func main() {
    greet("Alice")          // Output: Hello, Alice!
    result := add(3, 5)     // Adds 3 and 5
    fmt.Println("Sum:", result) // Output: Sum: 8
}
`,
  },
  {
    id: 13,
    language: 'GO',
    title: 'Slices',
    content: `
    <p>Before we go over structs, which are the most common data type when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how slices work.</p>
    
    <p>Below is an example of a slice:</p>
    <pre class="overflow-auto shadow-md"><code>var mySlice = []interface{}{7, "Hello", false, 63.5}</code></pre>
    
    <p>A slice can hold all types of data, and you can have all kinds of data in one slice. You use slices when you need exactly that, a list. Slices are also mutable, which means we can rearrange, extend, and replace items in a slice, meaning they're super flexible!</p>
    
    <p>A slice is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in a slice on Algorand could be one that has asset IDs.</p>
    <pre class="overflow-auto shadow-md">var assetIDs = []int{1265975021, 1138500612, 400593267}</code></pre>
    
    <p>Or perhaps a slice of addresses:</p>
    <pre class="overflow-auto shadow-md"><code>var addresses = [
"WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU",
"7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY",
"HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA"];</code></pre>
    
    <p>Although slices don't have to be organized in any way and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in a slice, you could use a map to achieve this.</p>
    <pre class="overflow-auto shadow-md"><code>func removeDuplicates(elements []int) []int {
    encountered := map[int]bool{};
    result := []int{};
    for v := range elements {
        if encountered[elements[v]] != true {
            encountered[elements[v]] = true;
            result = append(result, elements[v]);
        }
    }
    return result;
}
mySlice := []int{1, 1, 2, 3, 4, 4};
mySliceWithoutDuplicates := removeDuplicates(mySlice);
fmt.Println(mySliceWithoutDuplicates);
# Output: [1, 2, 3, 4]</code></pre>
    
    <p>Let's look back at the first example of a slice:</p>
    <pre class="overflow-auto shadow-md"><code>mySlice = []interface{}{7, "Hello", false, 63.5}</code></pre>
    
    <p>In the slice above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (true or false value) in the third spot; a float (decimal value), in the fourth spot.
    I refer to the places these items are in the slice as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming slices are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the slice. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in a slice.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for false, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the slice, we must first assign it to a variable:</p>
    <pre class="overflow-auto shadow-md"><code>mySlice2 := []interface{}{7, "Hello", false, 63.5};
fmt.Println(mySlice2);
# Output: [7, "Hello", false, 63.5]</code></pre>
    
    <p>... and now let's log the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <pre class="overflow-auto shadow-md">let firstIndexMySlice = mySlice2[1];
console.log(firstIndexMySlice);
# Output: "Hello"</code></pre>
    
    <p>Try logging the third index into the console using index notation. I've already defined the slice for you below. Click run when you're ready to run the code! The output should be 63.5.</p>
    
    <pre><code>mySlice3 := []interface{}{7, "Hello", false, 63.5};
thirdIndexMySlice := mySlice3[3];
fmt.Println(thirdIndexMySlice);
# Output: 63.5</code></pre>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is a slice in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) A mutable, ordered collection of elements</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) An immutable, ordered collection of elements</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) A mutable, unordered collection of elements</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) An immutable, unordered collection of elements</label><br>
  
          <h3>Question 2</h3>
          <p>How do you declare a slice in Go that can hold different types of data?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) var mySlice = []interface{}{7, "Hello", false, 63.5}</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) var mySlice = []{7, "Hello", false, 63.5}</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) var mySlice = [7, "Hello", false, 63.5]</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) var mySlice = {7, "Hello", false, 63.5}</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>mySlice := []interface{}{7, "Hello", false, 63.5}
fmt.Println(mySlice[1])
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) false</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>How do you remove duplicate entries from a slice in Go?</p>
           <pre class="overflow-auto shadow-md"><code>func removeDuplicates(elements []int) []int {
    encountered := map[int]bool{}
    result := []int{}
    for v := range elements {
        if !encountered[elements[v]] {
            encountered[elements[v]] = true
            result = append(result, elements[v])
        }
    }
    return result
}
mySlice := []int{1, 1, 2, 3, 4, 4}
mySliceWithoutDuplicates := removeDuplicates(mySlice)
fmt.Println(mySliceWithoutDuplicates)
</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using a map to track encountered elements</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using a set to track encountered elements</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using a list to track encountered elements</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using a dictionary to track encountered elements</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import "fmt"

func main() {
    // Define a slice
    mySlice := []interface{}{7, "Hello", false, 63.5}

    // Print the entire slice
    fmt.Println("Slice:", mySlice)

    // Access and print specific elements by index
    fmt.Println("Index 1:", mySlice[1]) // Output: "Hello"
    fmt.Println("Index 3:", mySlice[3]) // Output: 63.5
}
`,
  },
  {
    id: 14,
    language: 'GO',
    title: 'Structs',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, structs! A struct is like a slice, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, structs also differ in that they store values with keys (called fields), and can accept several data types. A struct can be highly versatile and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have structs with nested structs within them, and even slices as well! It's important to mention that fields and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of a struct:</p>
    <pre class="overflow-auto shadow-md"><code>type Person struct {
    Name string
    Age  int
}
thisIsMyStruct := Person{Name: "John", Age: 22}</code></pre>
    
    <p>In slices, we used a process called indexing, and the index notation format to access values, e.g.; mySlice[3]. With structs, we use a similar process called field access, and the field notation format to access values.</p>
    
    <p>The main difference is that we use fields, instead of solely integers that refer to position, to select values from a struct— and not to confuse you, but a field in a struct can also be an integer =).</p>
    
    <p>For example, in thisIsMyStruct above, you'll see the value "John" belongs to the field, "Name". As well as the value 22, belongs to the field, "Age". This is what field notation would look like for accessing a value for a specific field in a struct:</p>
    <pre class="overflow-auto shadow-md"><code>nameValue := thisIsMyStruct.Name
fmt.Println(nameValue)
# Output: "John"</code></pre>
    
    <p>Try printing the "Age" value in the code editor below:</p>
    <pre class="overflow-auto shadow-md"><code>ageValue := thisIsMyStruct.Age
fmt.Println(ageValue)
# Output: 22</code></pre>
    
    <p>Now we'll look over a more intricate struct, that's a bit larger and complex.</p>
    <pre class="overflow-auto shadow-md"><code>type PersonWithLikes struct {
    Name  string
    Age   int
    Likes []string
}
thisIsMyStructWithLikes := PersonWithLikes{
    Name:  "John",
    Age:   22,
    Likes: []string{"Exercise", "Cooking", "Coding"},
}</code></pre>
    
    <p>We see something in this struct that we haven't seen before, a slice as the value to a field. Let's try accessing the 1st index of John's likes using a mix of field notation and index notation!</p>
    <pre class="overflow-auto shadow-md"><code>likes := thisIsMyStructWithLikes.Likes
fmt.Println(likes)
# Output: ["Exercise", "Cooking", "Coding"]</code></pre>
    
    <pre class="overflow-auto shadow-md"><code>likesFirstIndex := likes[1]
fmt.Println(likesFirstIndex)
# Output: "Cooking"</code></pre>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is a struct in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) A collection of fields that can hold different data types</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) A collection of ordered elements of the same type</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) A function that returns multiple values</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) A type that defines methods</label><br>
  
          <h3>Question 2</h3>
          <p>How do you declare a struct in Go with the fields "Name" (string) and "Age" (int)?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) type Person struct { Name string; Age int }</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) type Person { string Name; int Age }</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) struct Person { Name: string, Age: int }</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) struct Person { string Name; int Age }</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
           <pre class="overflow-auto shadow-md"><code>type Person struct {
    Name string
    Age  int
}
  thisIsMyStruct := Person{Name: "John", Age: 22}
  fmt.Println(thisIsMyStruct.Name)
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "Age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) "Person"</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the first element of the "Likes" slice in the following struct?</p>
           <pre class="overflow-auto shadow-md"><code>type PersonWithLikes struct {
    Name  string
    Age   int
    Likes []string
}
thisIsMyStructWithLikes := PersonWithLikes{
    Name: "John",
    Age:  22,
    Likes: []string{"Exercise", "Cooking", "Coding"},
}
fmt.Println(thisIsMyStructWithLikes.Likes[0])
</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) "Likes"</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import "fmt"

// Define a struct
type Person struct {
    Name string
    Age  int
}

func main() {
    // Create a struct instance
    thisIsMyStruct := Person{Name: "John", Age: 22}

    // Access and print struct fields
    fmt.Println("Name:", thisIsMyStruct.Name) // Output: John
    fmt.Println("Age:", thisIsMyStruct.Age)   // Output: 22
}
`,
  },
  {
    id: 15,
    language: 'GO',
    title: 'Imports',
    content: `
    <p>This code begins with package imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, Go interpreters read from top to bottom.</p>
    
    <p>The package imports are from the Go Algorand SDK library and the standard library.</p>
    
    <p>Now let's get the status of the Algod client:</p>
<pre class="overflow-auto shadow-md"><code>package main

import (
    "context"
    "fmt"
    "log"
    "math/rand"
    "time"

    "github.com/algorand/go-algorand-sdk/client/v2/algod"
)

func main() {
    var algodAddress = "https://testnet-api.4160.nodely.dev"
    var algodToken = ""

    algodClient, err := algod.MakeClient(algodAddress, algodToken)
    if err != nil {
        log.Fatalf("failed to make algod client: %v", err)
    }

    // Provide a context argument (and optionally any headers if needed).
    status, err := algodClient.Status().Do(context.Background())
    if err != nil {
        log.Fatalf("failed to get status: %v", err)
    }

    fmt.Printf("Status: %+v\\n", status)

    rand.Seed(time.Now().UnixNano())
    randomNumber := rand.Intn(101)
    fmt.Println("Random Number:", randomNumber)
}</code></pre>

    <p>The imports are:</p>
    <ul class=inText>
        <li>"fmt" for formatting and printing output.</li>
        <li>"log" for logging errors.</li>
        <li>"math/rand" for generating random numbers.</li>
        <li>"strings" for creating repeated strings.</li>
        <li>"time" for seeding the random number generator.</li>
        <li>"github.com/algorand/go-algorand-sdk/client/v2/algod" for the Algod client.</li>
        <li>"github.com/algorand/go-algorand-sdk/client/v2/common" for common headers.</li>
    </ul>
    
    <p>The Go Algorand SDK library is imported with specific paths to the required packages. This is similar to how we imported specific modules in Python.</p>
    
    <p>To install the Algorand Go SDK, you can use the following command:</p>
    <pre class="overflow-auto shadow-md"><code>go get -u github.com/algorand/go-algorand-sdk/...</code></pre>
    
    <p>If you don't have Go installed, it must be installed manually, which is detailed in the Go installation guide on their website.</p>
    
    <p>We use the rand.Seed(time.Now().UnixNano()) to seed the random number generator with the current time. This ensures that we get different random numbers each time the program runs.</p>
    `,
    initialCode: `package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Seed the random number generator
    rand.Seed(time.Now().UnixNano())

    // Generate and print a random number between 0 and 100
    randomNumber := rand.Intn(101)
    fmt.Println("Random Number:", randomNumber)
}
`,
  },
  {
    id: 18,
    language: 'GO',
    title: 'Getting Started with Algorand',
    content: `

    <p>To set up your own node, visit this GitHub repository for a previous tutorial series: 
    <a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations">https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/</a>
    </p>
    <p>Scroll down to the section called "Algorand Node Installation" — and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section)
    If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.</p>
    
    <p>If you are trying to run this code natively on your computer, and not in this browser:

    Make sure you have GO installed: 
    <a href="https://go.dev/dl/">https://go.dev/dl/</a>
    </p>

    
    
    
    
    Initialize your project by using the following command in the terminal:

    <pre class="overflow-auto shadow-md"><code>'go mod init algolearn'</code></pre>
    
    Ensure that the name of the file ends with '.go', and that you've installed the go algorand SDK afterwards using the following command in the IDE terminal:
    
    go get github.com/algorand/go-algorand-sdk/...
    
    You can copy and paste the code below into your yourFileName.go file, and use 'go run yourFileName.go' in the terminal to run it!
    */
   <pre class="overflow-auto shadow-md"><code>package main
import (
    "context"
    "fmt"
    "os"

    "github.com/algorand/go-algorand-sdk/client/v2/algod"
)

func main() {
    // Variables for Algorand testnet node access
    algodToken := "" // Leave empty for public node service, or enter your node token
    algodServer := "https://testnet-api.algonode.cloud"

    // Create an algod client
    algodClient, err := algod.MakeClient(algodServer, algodToken)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)
        return
    }

    // Fetch the node status and print it
    status, err := algodClient.Status().Do(context.Background())
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)
        return
    }

    fmt.Printf("Node status: %+v\\n", status)
}</code></pre>
    
    <p>First, we import the necessary Go packages, including <code>context</code> for API call management, <code>fmt</code> for formatted output, and <code>os</code> for system-level operations. We also import <code>algod</code> from the Algorand SDK, which allows us to interact with the Algorand blockchain.</p>
    
    <p>Next, we set up variables for the token and server URL for the Algorand testnet node. These are initialized to work with a public node service, but can be customized for a private node by specifying a token.</p>
    
    <p>We then attempt to create an <code>algodClient</code> using the <code>MakeClient</code> function, passing in our server URL and token. This function returns an <code>algodClient</code> object and an error. If an error occurs during client creation, it is handled immediately by printing an error message and exiting the function.</p>
    
    <p>Using the created <code>algodClient</code>, we proceed to fetch the current node status. This is done by calling the <code>Status</code> method followed by <code>Do</code>, passing in a context to manage the request. If an error occurs, it is caught and printed, similar to the client creation step.</p>
    
    <p>If the status fetch is successful, we print the complete status object to the console to inspect its contents. Additionally, we access and print the <code>LastRound</code> information from the status object, which represents the most recent round of the Algorand consensus protocol.</p>
    
    <p>Print statement formatting:</p>
    <ul class="inText">
        <li><code>%+v</code>: This format specifier in <code>fmt.Printf</code> is used for printing structs or composite values in Go. The <code>+</code> flag adds field names to the output, making it very useful for debugging by showing both the field names and their values. In your code, it's used to display the complete status of the Algorand node, providing a detailed look at all its properties.</li>
        <li><code>%d</code>: This is used to format integers. In your code, it prints the value of <code>lastRound</code>, which is an integer representing the latest round number of the blockchain network. This specifier ensures that the number is printed as a base-10 decimal.</li>
    </ul>
    
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    
    <ul class="inText">
      <li>catchpoint</li>
      <li>catchpoint-acquired-blocks</li>
      <li>catchpoint-processed-accounts</li>
      <li>catchpoint-processed-kvs</li>
      <li>catchpoint-total-accounts</li>
      <li>catchpoint-total-blocks</li>
      <li>catchpoint-total-kvs</li>
      <li>catchpoint-verified-accounts</li>
      <li>catchpoint-verified-kvs</li>
      <li>catchup-time</li>
      <li>last-catchpoint</li>
      <li>last-round</li>
      <li>last-version</li>
      <li>next-version</li>
      <li>next-version-round</li>
      <li>next-version-supported</li>
      <li>stopped-at-unsupported-round</li>
      <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are <code>last-round</code>, so you know which block you are on, and perhaps <code>time-since-last-round</code>, if you should need to know that information. Other keys are primarily used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for Structs, try this:</p>
    <ul class="inText">
      <li>Create a variable, and name it <code>lastRound</code></li>
      <li>Assign the value of the key <code>'last-round'</code> in the status dictionary to this variable you created</li>
      <li>Print your variable!</li>
    </ul>
        
    <pre class="overflow-auto shadow-md">
<code>package main

import (
    "context"
    "fmt"
    "os"
    "github.com/algorand/go-algorand-sdk/client/v2/algod"
)

func main() {
    // Variables for Algorand testnet node access
    algodToken := "" // Leave empty for public node service, or enter your node token
    algodServer := "https://testnet-api.algonode.cloud"

    // Create an algod client
    algodClient, err := algod.MakeClient(algodServer, algodToken)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)
        return
    }

    // Fetch the node status and print it
    status, err := algodClient.Status().Do(context.Background())
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)
        return
    }

    // Access last round status information
    lastRound := status.LastRound
    fmt.Printf("Last round: %d\\n", lastRound)
}</code></pre>
  
      <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to create an Algorand client in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) algodClient, err := algod.MakeClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) algodClient, err := algod.NewClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) algodClient, err := algod.InitClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) algodClient, err := algod.CreateClient(algodServer, algodToken)</label><br>
  
          <h3>Question 2</h3>
          <p>Which package needs to be imported to use the Algorand SDK in Go?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) github.com/algorand/go-algorand-sdk/client/v2/algod</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) github.com/algorand/go-algorand/client/v2/algod</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) github.com/algorand/go-algorand-sdk/algod</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) github.com/algorand/sdk-go/client/v2/algod</label><br>
  
          <h3>Question 3</h3>
          <p>How do you fetch the status of an Algorand node in Go?</p>
           <pre class="overflow-auto shadow-md"><code>algodClient, err := algod.MakeClient(algodServer, algodToken)
if err != nil {
    fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)
    return
}
</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) status, err := algodClient.NodeStatus().Do(context.Background())</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) status, err := algodClient.GetStatus().Do(context.Background())</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) status, err := algodClient.Status().Do(context.Background())</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) status, err := algodClient.FetchStatus().Do(context.Background())</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the last round from the status response in Go?</p>
           <pre class="overflow-auto shadow-md"><code>status, err := algodClient.Status().Do(context.Background())
if err != nil {
    fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)
    return
}
</code></pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) lastRound := status.LastRound</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) lastRound := status["last-round"]</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) lastRound := status.Last-Round</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) lastRound := status.GetLastRound()</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import (
	"context"
	"fmt"
	"os"

	"github.com/algorand/go-algorand-sdk/client/v2/algod"
)

func main() {
	// Algorand testnet node information
	algodToken := "" // Public node access
	algodServer := "https://testnet-api.algonode.cloud"

	// Create an algod client
	algodClient, err := algod.MakeClient(algodServer, algodToken)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to create algod client: %s\\n", err)
		return
	}

	// Fetch and print node status
	status, err := algodClient.Status().Do(context.Background())
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to fetch node status: %s\\n", err)
		return
	}

	// Access and print the last round
	fmt.Printf("Last round: %d\\n", status.LastRound)
}
    `,
    // editable: false,
    // output: `Last round: 7890123`,
  },
  {
    id: 19,
    language: 'GO',
    title: 'Payment Transactions',
    content: `
    <pre class="overflow-auto shadow-md"><code>package main

import (
    "fmt"
    "github.com/algorand/go-algorand-sdk/crypto"
    "github.com/algorand/go-algorand-sdk/mnemonic"
)

func main() {
    // METHOD 1: Create a New Account
    newAccount := crypto.GenerateAccount()
    fmt.Printf("Private Key: %s\\n", newAccount.PrivateKey)
    fmt.Printf("Address: %s\\n", newAccount.Address.String())

    // Convert Private Key to Mnemonic
    mnemo, err := mnemonic.FromPrivateKey(newAccount.PrivateKey)
    if err != nil {
        fmt.Printf("Error converting private key to mnemonic: %s\\n", err)
        return
    }
    fmt.Println("Mnemonic:", mnemo)

    // METHOD 2: Use Mnemonic to Obtain Private Key
    // Assuming mnemonicPhrase is obtained securely and already exists
    mnemonicPhrase := "brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual"
    privKey, err := mnemonic.ToPrivateKey(mnemonicPhrase)
    if err != nil {
        fmt.Printf("Error retrieving private key from mnemonic: %s\\n", err)
        return
    }
    fmt.Printf("Private Key from Mnemonic: %s\\n", privKey)
}</code></pre>
    
    <p>When developing in Go with the Algorand SDK, there are two primary methods for obtaining a private key and address which are necessary for signing transactions. The private key is typically managed in byte slice format and is essential for the creation and signing of transactions.</p>
    
    <p>Method 1: Create a New Account and Obtain the Private Key and Address Directly</p>
    <p>In the Algorand Go SDK, you use the <code>crypto.GenerateAccount()</code> function to generate a new account. This function returns an account object that contains both the private key and the address, not in a tuple like Python, but directly accessible via the account object properties. Once you have this account, you can print the private key and the address. These details can then be used to sign transactions or manage Algorand assets.</p>
    
    <p>After generating a new account, you can fund it by sending Algos to the generated address. This can be done through the Algorand dispenser for testnet, which is available at <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>. Remember that all accounts require a minimum balance of 0.1 Algo to remain active, and each transaction typically costs a fee of 0.001 Algo.</p>
    
    <p>For wallet applications, if you need to derive the mnemonic from the private key, you can use the <code>mnemonic.FromPrivateKey()</code> function provided by the Go SDK. This function converts the private key into a human-readable mnemonic phrase.</p>
    
    <p>Method 2: Convert an Existing Mnemonic to a Private Key</p>
    <p>If you already possess a mnemonic and need to derive the corresponding private key, you can utilize the <code>mnemonic.ToPrivateKey(mnemonic string)</code> function. This function takes a string mnemonic and returns the corresponding private key. It is crucial to ensure that the mnemonic is correctly formatted, enclosed in quotes, and that it includes spaces between the words as expected in standard mnemonic phrases.</p>
    
    <p>Using the Account for Transactions</p>
    <p>Once you have an account with funds, you can use the <code>AlgodClient</code> to initiate a connection to the Algorand blockchain. This setup allows you to interact with the blockchain, send transactions, and check account details. You might engage in various transaction types such as sending Algos to another account, rekeying the account (which changes the authoritative private key for the account), or closing the account (transferring all remaining Algos to another account). Each of these actions can be encapsulated within a payment transaction using the Algorand Go SDK.</p>
    
    <p>This text should provide a clear, non-code explanation of the key processes involved in using the Algorand Go SDK for creating and managing accounts, as well as performing transactions.</p>
    
    <pre class="overflow-auto shadow-md"><code>package main

import (
    "context"
    "crypto/ed25519"
    "encoding/base64"
    "fmt"
    "log"
    "math/rand"
    "time"

    "github.com/algorand/go-algorand-sdk/client/v2/algod"
    "github.com/algorand/go-algorand-sdk/crypto"
    "github.com/algorand/go-algorand-sdk/future"
    "github.com/algorand/go-algorand-sdk/types"
)

func main() {
    fmt.Println("Starting transaction...")

    algodAddress := "https://testnet-api.algonode.cloud"
    algodToken := ""

    algodClient, err := algod.MakeClient(algodAddress, algodToken)
    if err != nil {
        log.Fatalf("Failed to make algod v2 client: %v", err)
    }

    // Existing account details
    address := "I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU"
    privateKeyB64 := "6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg=="

    // Decode the base64 private key into ed25519.PrivateKey
    decodedPk, err := base64.StdEncoding.DecodeString(privateKeyB64)
    if err != nil {
        log.Fatalf("Failed to decode base64 private key: %v", err)
    }
    ed25519PrivateKey := ed25519.PrivateKey(decodedPk)
    algos := 1.001

    // Convert Algos -> MicroAlgos:
    microAlgoAmount := uint64(types.ToMicroAlgos(algos))

    // Fetch the suggested transaction parameters (v2 style)
    txParams, err := algodClient.SuggestedParams().Do(context.Background())
    if err != nil {
        log.Fatalf("Error getting suggested tx params: %v", err)
    }

    // Create a random note
    rand.Seed(time.Now().UnixNano())
    note := []byte(fmt.Sprintf("Random note: %d", rand.Int()))

    // Create a payment transaction
    tx, err := future.MakePaymentTxn(
        address, // From
        crypto.GenerateAccount().Address.String(), // To (for demonstration)
        microAlgoAmount, // Amount (microAlgos)
        note,            // Note
        "",              // CloseRemainderTo
        txParams,
    )
    if err != nil {
        log.Fatalf("Failed to create payment transaction: %v", err)
    }

    // Sign the transaction: returns (signedTxBytes, txID, err)
    txID, signedTxBytes, err := crypto.SignTransaction(ed25519PrivateKey, tx)
    if err != nil {
        log.Fatalf("Failed to sign transaction: %v", err)
    }
    fmt.Printf("Signed transaction with TxID: %s\\n", txID)

    // Send the transaction
    algodClient.SendRawTransaction(signedTxBytes).Do(context.Background())

    fmt.Printf("Transaction sent. TxID: %s\\n", txID)

}</code></pre>
    
    <p>Steps:</p>
    <ol class="inText">
        <li>Import our necessary modules</li>
        <li>Define our <code>AlgodClient</code> to initiate a connection to the chain</li>
        <li>Define our account's address and private key that we will be sending transactions from</li>
        <li>Define an amount of Algorand to send</li>
        <li>Obtain the params needed for all transactions</li>
        <li>Generate a new account for testing, so we have an address to send testnet Algorand to</li>
        <li>Define our payment transaction and its parameters</li>
        <li>Sign the transaction with our private key</li>
        <li>Assign the result of sending our signed transaction with the <code>send_transaction()</code> function from the <code>AlgodClient</code> class</li>
        <li>Print the transaction ID for reference on an explorer like allo.info, <a href="https://testnet.explorer.perawallet.app/">https://testnet.explorer.perawallet.app/</a>, <a href="https://www.blockpack.app/#/explorer/home">https://www.blockpack.app/#/explorer/home</a>, or <a href="https://app.dappflow.org/explorer/home">https://app.dappflow.org/explorer/home</a></li>
    </ol>
    
    
    <p>In the Algorand SDKs, when we want to reference an amount of Algo, that amount needs to be in a format called "Microalgo"; Microalgo is essentially an amount of Algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 Microalgo, and the transaction fee of 0.001 Algo is 1,000 Microalgo.</p>
    
    <p>Instead of manually calculating the microalgo amount each time, what we can do is use the <code>algos_to_microalgos()</code> function, and pass in the amount of Algo as an argument.</p>
    
    <p>The <code>PaymentTransaction</code> class comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class="inText">
        <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
        <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    

    <hr><form class="quiz-form">
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What function is used to generate a new account in the Algorand Go SDK?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) crypto.GenerateAccount()</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) crypto.NewAccount()</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) crypto.CreateAccount()</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) crypto.MakeAccount()</label><br>
  
          <h3>Question 2</h3>
          <p>Which function is used to convert a private key to a mnemonic in the Algorand Go SDK?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) mnemonic.FromPrivateKey()</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) mnemonic.ConvertPrivateKey()</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) mnemonic.PrivateKeyToMnemonic()</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) mnemonic.KeyToMnemonic()</label><br>
  
          <h3>Question 3</h3>
          <p>How do you convert an amount in Algos to microAlgos in the Algorand Go SDK?</p>
           <pre class="overflow-auto shadow-md"><code>amount := 1.001

// Convert Algos -> MicroAlgos:
microAlgoAmount := uint64(types.ToMicroAlgos(algos))</code></pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) uint64(amount * 1e6)</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) uint64(amount * 1e3)</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) uint64(amount * 1e5)</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) uint64(amount * 1e4)</label><br>
  
          <h3>Question 4</h3>
          <p>Which function is used to sign a transaction in the Algorand Go SDK?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) crypto.SignTransaction()</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) crypto.CreateSignedTransaction()</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) crypto.GenerateSignedTransaction()</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) crypto.MakeSignedTransaction()</label><br>
  
          
      </form>
    `,
    initialCode: `package main

import (
    "fmt"
    "github.com/algorand/go-algorand-sdk/crypto"
    "github.com/algorand/go-algorand-sdk/mnemonic"
)

func main() {
    // METHOD 1: Create a New Account
    newAccount := crypto.GenerateAccount()
    fmt.Printf("Private Key: %s\\n", newAccount.PrivateKey)
    fmt.Printf("Address: %s\\n", newAccount.Address.String())

    // Convert Private Key to Mnemonic
    mnemo, err := mnemonic.FromPrivateKey(newAccount.PrivateKey)
    if err != nil {
        fmt.Printf("Error converting private key to mnemonic: %s\\n", err)
        return
    }
    fmt.Println("Mnemonic:", mnemo)

    // METHOD 2: Use Mnemonic to Obtain Private Key
    // Assuming mnemonicPhrase is obtained securely and already exists
    mnemonicPhrase := "brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual"
    privKey, err := mnemonic.ToPrivateKey(mnemonicPhrase)
    if err != nil {
        fmt.Printf("Error retrieving private key from mnemonic: %s\\n", err)
        return
    }
    fmt.Printf("Private Key from Mnemonic: %s\\n", privKey)
}
    `,
    //     editable: false,
    //     output: `Transaction sent successfully! TxID: ABCD1234EFGH5678IJKL9012MNOP3456QRST7890UVWX1234YZAB5678CDEF9012
    // `,
  },
];

// export default chapters;
